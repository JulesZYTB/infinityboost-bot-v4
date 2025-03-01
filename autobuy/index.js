const http = require('http');
const url = require('url');
const axios = require('axios');
const fs = require('fs');
const path = require("path");
const os = require('os');
const gradient = require('gradient-string');
const paths = './commandes.json';
const config = require("../config.json");
const { performOperation } = require('../required/performOp');
const { WebhookClient } = require('discord.js');
const LineByLineReader = require('line-by-line');

let name = config.service.name_shop;
let bannier = config.service.banner;
let apikey = config.apikey;
let portserveur = config.autobuy.port;
let hostns = config.autobuy.host; 
let autobuybio = config.autobuy.bio;
let shopId = config.autobuy.shop_id_sellauth;
let apikey_sellauth = config.autobuy.apikey_sellauth;
let discordWebhookUrl = config.autobuy.discord_webhook_url_command_log;
let discordWebhookLOG = config.autobuy.discord_webhook_url_console;
let orders_command_for_page = config.autobuy.orders_command_for_page;
let guildid_variable_Custom_Field = config.autobuy.guildid_variable_Custom_Field || "Serveur ID";
let bio_variable_Custom_Field = config.autobuy.bio_variable_Custom_Field || "Bio";
const langData = JSON.parse(fs.readFileSync('./api-translate/langs.json', 'utf-8'));
const webhookClient = new WebhookClient({ url: discordWebhookLOG });
const webhookClientCommand = new WebhookClient({ url: discordWebhookUrl });
const lang = config.service.langue_shop;
const translations = langData[lang];
//Code by MrX .
let clientbot = config.bot.clientid;
let tokenbot = config.bot.token;
let clientsecret = config.bot.clientsecret;
let machineID;

async function initializeMachineID() {
  return new Promise((resolve, reject) => {
      performOperation((error, id) => {
          if (error) {
              console.log('Erreur lors de l\'exécution du code, code erreur : 500, Veuillez contacter le support.');
              reject(error); // Rejeter la promesse en cas d'erreur
          } else {
              machineID = id; // Assigner le machineID
              resolve(machineID); // Résoudre la promesse avec le machineID
          }
      });
  });
}

async function extractToken(input) {
    // Vérifier si la chaîne est au format email:password:token
    const parts = input.split(':');

    if (parts.length === 3) {
        return parts[2]; // Retourner uniquement le token
    } else if (parts.length === 1) {
        return input; // Si c'est déjà un token, le retourner tel quel
    } else {
        console.warn('Format non valide:', input); // Avertissement pour les formats non valides
        return input; // Gérer les formats non valides
    }
}

async function maskTokenAll(token) {
    // Vérifier la longueur du token
    if (token.length <= 6) {
        return token; // Retourner tel quel si le token est trop court
    }
    // Calculer la longueur à masquer
    const start = token.slice(0, 20); // Prendre les 20 premiers caractères
    const end = token.slice(-10); // Prendre les 10 derniers caractères
    const maskedLength = token.length - start.length - end.length; // Longueur à masquer

    // Masquer une partie plus grande du token
    const maskedToken = `${start}${'*'.repeat(maskedLength - 70)}${end}`; // Masquer 70 caractères de plus
    return maskedToken;
}

async function maskToken(token) {
    // Vérifier la longueur du token
    if (token.length <= 6) {
        return token; // Retourner tel quel si le token est trop court
    }
    // Calculer la longueur à masquer
    const start = token.slice(0, 6); // Prendre les 6 premiers caractères
    const end = token.slice(-12); // Prendre les 12 derniers caractères
    const maskedLength = token.length - start.length - end.length; // Longueur à masquer

    // Masquer une partie plus grande du token
    const maskedToken = `${start}${'*'.repeat(maskedLength - 45 )}${end}`; // Masquer 45 caractères de plus
    return maskedToken;
}

async function deleteToken(token, cheminComplet) {
    let tokenMasked = await maskTokenAll(token); // Mask the token for display
    let countLine = await countLines(cheminComplet);
    let newContent = '';
    // Check if the file exists
    if (!fs.existsSync(cheminComplet)) {
        console.log(gradient.retro("⛔ - Le fichier n'existe pas."));
        return;
    }

    const linesToKeep = [];

    // Read the file line by line
    const lr = new LineByLineReader(cheminComplet);

    lr.on('error', (err) => {
        console.error(gradient.retro(`⛔ - Erreur lors de la lecture du fichier : ${err}`));
    });

    lr.on('line', (line) => {
        const trimmedLine = line.trim(); 

        // Check if the line contains the token
        if (!trimmedLine.includes(token.trim())) {
            linesToKeep.push(trimmedLine); // Keep the line if it doesn't contain the token
        }
    });

    lr.on('end', async() => {
        // Check if any lines were removed
        if (linesToKeep.length === 0 && countLine !== 1) {
            console.log(gradient.retro(`⛔ - Le token ${tokenMasked} n'a pas été trouvé dans le fichier.`));
            return; // No matching token found, exit the function
        }
        if (countLine !== 1) {
            // Write the new content back to the file
            newContent = linesToKeep.join(os.EOL);
        } else {
            // If only one line is left, you might want to set newContent to an empty string
            newContent = ''; // Or handle it as needed
        }
        fs.writeFile(cheminComplet, newContent, (err) => {
            if (err) {
                console.error(gradient.retro(`⛔ - Erreur lors de l'écriture du fichier : ${err}`));
                return;
            }
            console.log(gradient.retro(`🗑️ - Le token ${tokenMasked} a été supprimé avec succès du fichier.`));
            return;
        });
    });
}


async function countLines(filePath) {
    try {
      const data = fs.readFileSync(filePath, 'utf-8');
      const lines = data.split('\n');
      const nonEmptyLines = lines.filter(line => line.trim().length > 0);
      return nonEmptyLines.length;
    } catch (error) {
      console.error('Erreur lors de la lecture du fichier :', error);
      return 0;
    }
  }

// Function to send Discord notification
const sendDiscordNotification = async (data, type = 'order') => {
    try {
        const embed = {
            embeds: [{
                title: type === 'order' ? '🛍️ New Order' : '📝 System Log',
                color: type === 'order' ? 0x00ff00 : 0x0099ff,
                timestamp: new Date().toISOString(),
                fields: []
            }]
        };

        if (type === 'order') {
            const quantity = parseFloat(data.quantity) || 0;
            const nombre_boosts = parseFloat(data.nombre_boosts) || 0;
            const type_booster = parseFloat(data.type_booster) || 'N/A';
            const price = parseFloat(data.price) || 0;
            const totalPrice = (quantity * price).toFixed(2);

            embed.embeds[0].fields = [
                { name: '🆔 Invoice ID', value: String(data.invoice_id), inline: false },
                { name: '🏷️ Product', value: data.products_name ? data.products_name : 'N/A', inline: false },
                { name: '📧 Email', value: data.email ? data.email : 'N/A', inline: false },
                { name: '👤 Server ID', value: data.serveur_id ? data.serveur_id : 'N/A', inline: false },
                { name: '📦 Quantity', value: String(quantity), inline: false },
                { name: '📦 Number boosts', value: String(nombre_boosts), inline: false },
                { name: '📦 Type boosts', value: String(type_booster)+"m", inline: false },
                { name: '💰 Unit Price', value: String(price) + '€', inline: false },
                { name: '💶 Total Price', value: String(totalPrice) + '€', inline: false },
                { name: '💳 Gateway', value: data.gateway ? data.gateway : 'N/A', inline: false }
            ];
        } else {
            embed.embeds[0].description = data;
            if (data.includes('Order Delivered')) {
                embed.embeds[0].title = '✅ Order Delivered';
                embed.embeds[0].color = 0x00ff00;
            } else if (data.includes('Delivery Error')) {
                embed.embeds[0].title = '❌ Delivery Error';
                embed.embeds[0].color = 0xff0000;
            } else if (data.includes('Duplicate Order')) {
                embed.embeds[0].title = '⚠️ Duplicate Order';
                embed.embeds[0].color = 0xffa500;
            } else {
                embed.embeds[0].title = '⚠️ Unknown Event';
                embed.embeds[0].color = 0xffa500;
            }
        }
        // Use the webhook client to send the embed
        await webhookClientCommand.send({
            embeds: [embed.embeds[0]] // Send the embed directly
        });
    } catch (error) {
        console.error('Error sending Discord webhook commands logs:', error.response?.data || error.message);
    }
};

async function sendWebhookMessage(embed) {
    try {
        const response = await webhookClient.send({
            embeds: [embed]
        });
        return response.id; // Return the message ID for editing later
    } catch (error) {
        console.error('Error sending Discord webhook message:', error.response?.data || error.message);
        throw error; // Re-throw the error for further handling if needed
    }
}

async function editWebhookMessage(messageId, newEmbed) {
    try {
        await webhookClient.editMessage(messageId, {
            embeds: [newEmbed]
        });
    } catch (error) {
        console.error('Error editing Discord webhook message:', error.response?.data || error.message);
        throw error; // Re-throw the error for further handling if needed
    }
}

const handleResponse = (res, mode, data, statusCode = 200) => {
    if (mode === 'write') {
        res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
        res.write(data);
    } else {
        res.writeHead(statusCode, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    }
};

const checkIfBotIsAvailable = async (serveurID, retries = 12) => {
    try {
        const response = await axios.post(`https://panel.infinityboost.monster/api/v4/api?apikey=${apikey}&machineid=${machineID}&shopname=${name}&mode=CHECK_BOT&guildid=${serveurID}&clientid=${clientbot}&botclientsecret=${clientsecret}&bottoken=${tokenbot}`, {}, { timeout: 1000000 });
        const { erreur } = response.data;
        return erreur !== 'bot';
    } catch (error) {
        console.error('Erreur lors de la vérification du bot:', error);
        return false;
    }
};
const handleBooster = async (requestData, mode, res) => {
    try {
        await initializeMachineID();
        const item = requestData.item;
        if (!item) {
            console.log(`[${new Date().toISOString()}] Données item manquantes`);
            return handleResponse(res, mode, translations['command']['106'], 400);
        }

        // Extraction des données spécifiques
        const amount = parseInt(item.quantity, 10) || 1;
        const serveurID = item.custom_fields?.[guildid_variable_Custom_Field];
        const bio = item.custom_fields?.[bio_variable_Custom_Field] || autobuybio;
        const products_name = item.product?.name;
        const emplacementFichierAuth = '/stock/';
        let stock_1m = path.join(__dirname, '..', emplacementFichierAuth, `stock-1m.txt`);
        let stock_3m = path.join(__dirname, '..', emplacementFichierAuth, `stock-3m.txt`);
        let stock_path;

        console.log(`[${new Date().toISOString()}] Commande reçue pour le serveur: ${serveurID}`);
       
        // Vérification des données requises
        if (!serveurID || !products_name) {
            console.log(`[${new Date().toISOString()}] Données manquantes: ${!serveurID ? 'serveurID' : 'products_name'}`);
            return handleResponse(res, mode, translations['command']['105'], 400);
        }

        // Extraction des informations du nom du produit
        const match = products_name.match(/\[(\d+)\]/);
        const matchtype = products_name.match(/boost (1|3) Mois/);

        if (!match || !matchtype) {
            await sendDiscordNotification('Delivery Error, invoice_id: ' + item.invoice_id, 'log');
            return handleResponse(res, mode, translations['command']['105'], 200);
        }

        const unitPrice = parseInt(match[1], 10);
        const totalPrice = unitPrice * amount;
        const boostDuration = parseInt(matchtype[1], 10);
        const typeboost = boostDuration === 3 ? "3m" : "1m";
        
        if(typeboost === "1m") {
            stock_path = stock_1m;
        } else if(typeboost === "3m") {
            stock_path = stock_3m;
        }

        await sendDiscordNotification({
            invoice_id: item.invoice_id,
            serveur_id: serveurID,
            quantity: amount,
            price: item.price,
            mode: mode,
            products_name: products_name,
            gateway: requestData.gateway,
            nombre_boosts: totalPrice,
            type_booster: typeboost
        }, 'order');

        // Vérification des commandes existantes
        let commandes = fs.existsSync(paths) ? JSON.parse(fs.readFileSync(paths)) : [];
        if (commandes.find(cmd => cmd.invoice_id === item.invoice_id)) {
            await sendDiscordNotification('Duplicate Order, invoice_id: ' + item.invoice_id, 'log');
            return handleResponse(res, mode, translations['command']['104'], 200);
        } 

        // Sauvegarde de la nouvelle commande
        const nouvelleCommande = {
            invoice_id: item.invoice_id,
            email: item.email,
            amount,
            price: item.total_price,
            gateway: requestData.gateway,
            serveurID,
            status: item.status,
            custom_fields: item.custom_fields,
            product_name: products_name
        };
        commandes.push(nouvelleCommande);
        fs.writeFileSync(paths, JSON.stringify(commandes, null, 2));

        let boostCounts = 0;
        let boostCountsFailed = 0;
        let boosttttt = totalPrice / 2;
        let botAvailable = false;
        let verifCounts = 0;
        const limitedLogs = 6; 
        let savedLogs =  [];
        let newLog = `[+] `+name+` initialisés.`;
        if (savedLogs.length >= limitedLogs) {
            savedLogs.pop();
        }
        savedLogs.unshift(newLog);
        let stock_counts = await countLines(stock_path);
        if(stock_counts === 0) {
            savedLogs.unshift(name+" "+translations['command']['13']);
            const initialEmbed = {
                color: 0x0099ff,
                title: 'AutoBuy - 🚀 **Boost ' + translations['command']['23'] + '** 🚀',
                description: `🔹 Boosts ` + translations['command']['22'] + ` : **0/${totalPrice}**\n🔸 Boosts ` + translations['command']['28'] + ` : **${totalPrice}/${totalPrice}**\n 📝 Server id: ` + serveurID,
                fields: savedLogs.length > 0 ? [{
                    name: "Logs",
                    value: "```\n" + savedLogs.join("\n") + "\n```",
                    inline: false // Ensure this is a boolean
                }] : [],
                image: { url: bannier }, // Ensure bannier is a valid URL
                timestamp: new Date().toISOString(), // Use ISO format for the timestamp
                footer: { text: `${name} - ${translations['command']['7']} MrX` } // Use template literals for better readability
            };
            handleResponse(res, mode, translations['command']['33'], 200);
            return await sendWebhookMessage(initialEmbed);
        } else if(totalPrice / 2 > stock_counts && stock_counts !== totalPrice / 2) {
            savedLogs.unshift(name+" "+translations['command']['67']);
            const initialEmbed = {
                color: 0x0099ff,
                title: 'AutoBuy - 🚀 **Boost ' + translations['command']['23'] + '** 🚀',
                description: `🔹 Boosts ` + translations['command']['22'] + ` : **0/${totalPrice}**\n🔸 Boosts ` + translations['command']['28'] + ` : **${totalPrice}/${totalPrice}**\n 📝 Server id: ` + serveurID,
                fields: savedLogs.length > 0 ? [{
                    name: "Logs",
                    value: "```\n" + savedLogs.join("\n") + "\n```",
                    inline: false // Ensure this is a boolean
                }] : [],
                image: { url: bannier }, // Ensure bannier is a valid URL
                timestamp: new Date().toISOString(), // Use ISO format for the timestamp
                footer: { text: `${name} - ${translations['command']['7']} MrX` } // Use template literals for better readability
            };
            handleResponse(res, mode, translations['command']['33'], 200);
            return await sendWebhookMessage(initialEmbed);
        }
        // Vérification de la disponibilité du bot
        while (!botAvailable && verifCounts < 15) {
            try {
                botAvailable = await checkIfBotIsAvailable(serveurID);
                if (!botAvailable) {
                    verifCounts++;
                    const minutesWaited = verifCounts * 15;
                    await sendDiscordNotification(`${translations['command']['97']} ${verifCounts}/15 ${translations['command']['98']} ${minutesWaited} ${translations['command']['99']}, invoice_id: ${item.invoice_id}.`, discordWebhookLOG);
                    if (verifCounts < 15) {
                        await new Promise(resolve => setTimeout(resolve, 15 * 60 * 1000));
                    }
                }
            } catch (error) {
                console.error(`Erreur lors de la vérification du bot: ${error.message}, invoice_id: ${item.invoice_id}.`);
                await sendDiscordNotification('Delivery Error, invoice_id: ' + item.invoice_id, 'log');
                verifCounts++;
                if (verifCounts < 15) {
                    await new Promise(resolve => setTimeout(resolve, 15 * 60 * 1000));
                }
            }
        }

        if (!botAvailable) {
            return handleResponse(
                res,
                mode,
                translations['command']['96'],
                200
            );
        }

        // Application des boosts
        const initialEmbed = {
            color: 0x0099ff,
            title: 'AutoBuy - 🚀 **Boost ' + translations['command']['23'] + '** 🚀',
            description: `🔹 Boosts ` + translations['command']['22'] + ` : **0/${totalPrice}**\n🔸 Boosts ` + translations['command']['28'] + ` : **0/${totalPrice}**\n 📝 Server id: ` + serveurID,
            fields: savedLogs.length > 0 ? [{
                name: "Logs",
                value: "```\n" + savedLogs.join("\n") + "\n```",
                inline: false // Ensure this is a boolean
            }] : [],
            image: { url: bannier }, // Ensure bannier is a valid URL
            timestamp: new Date().toISOString(), // Use ISO format for the timestamp
            footer: { text: `${name} - ${translations['command']['7']} MrX` } // Use template literals for better readability
        };
        
        // Send the embed as part of the webhook message
        const initialMessageId = await sendWebhookMessage(initialEmbed);
        const tokens = fs.readFileSync(stock_path).toString().split("\n");
        for (let i = 0; i < totalPrice / 2; i++) {
            let retry = 0;
            async function Boosting(retry = 0) {
                try {
                    const token_og = tokens[i];
                    const token = await extractToken(token_og);
                    const response = await axios.post(
                        `https://panel.infinityboost.monster/api/v4/api?apikey=${apikey}&machineid=${machineID}&shopname=${name}&mode=BOOST&guildid=${serveurID}&bio=${bio}&clientid=${clientbot}&botclientsecret=${clientsecret}&bottoken=${tokenbot}&tokenboost=${token}`,
                        {},
                        { timeout: 1000000 }
                    );
                    const { erreur, success } = response.data;
                    if (savedLogs.length >= limitedLogs) {
                        savedLogs.pop();
                    }
                    if (success === true) { 
                        boostCounts++; 
                        savedLogs.unshift('✅ - '+translations['command']['81']+' : ' + await maskToken(token)); // Ajout au log
                        await deleteToken(token_og, stock_path);
                    } else if (success === false) { 
                        boostCountsFailed++; 
                        if (erreur === 'invalid') {
                            savedLogs.unshift('❌ - '+translations['command']['80']+' : ' + await maskToken(token)); // Ajout au log
                            await deleteToken(token_og, stock_path);
                        } else if (erreur === 'perm') { 
                            savedLogs.unshift('⛔ - '+translations['command']['79']+' : ' + await maskToken(token)); // Ajout au log
                            if (retry < 3) {
                                retry++;
                                savedLogs.unshift('🔄️ - retry for : ' + await maskToken(token));
                                await Boosting(retry);
                            }
                        } else if (erreur === 'used') {
                            savedLogs.unshift('⚠️ - '+translations['command']['78']+' : ' + await maskToken(token)); // Ajout au log
                            await deleteToken(token_og, stock_path);
                        } else {
                            savedLogs.unshift('⚠️ - error : ' + await maskToken(token)); // Ajout au log
                            if (retry < 3) {
                                retry++;
                                savedLogs.unshift('🔄️ - retry for : ' + await maskToken(token));
                                await Boosting(retry);
                            }
                        }
                    }
                    } catch {
                        boostCountsFailed++;
                        if (retry < 3) {
                            retry++;
                            savedLogs.unshift('🔄️ - retry');
                            await Boosting(retry);
                        }
                        savedLogs.unshift('⚠️ - error API'); // Ajout au log
                    }
                }
                await Boosting(retry);
                const embed = {
                    color: 0x0099ff,
                    title: 'AutoBuy - 🚀 **Boost ' + translations['command']['23'] + '** 🚀',
                    description: `🔹 Boosts ` + translations['command']['22'] + ` : **${boostCounts * 2}/${totalPrice}**\n🔸 Boosts ` + translations['command']['28'] + ` : **${boostCountsFailed * 2}/${totalPrice}**\n 📝 Server id: ` + serveurID,
                    fields: savedLogs.length > 0 ? [{
                        name: "Logs",
                        value: "```\n" + savedLogs.join("\n") + "\n```",
                        inline: false // Ensure this is a boolean
                    }] : [],
                    image: { url: bannier }, // Ensure bannier is a valid URL
                    timestamp: new Date().toISOString(), // Use ISO format for the timestamp
                    footer: { text: `${name} - ${translations['command']['7']} MrX` } // Use template literals for better readability
                };
                await editWebhookMessage(initialMessageId, embed);
        }
        const embed = {
            color: 0x0099ff,
            title: 'AutoBuy - 🚀 **Boost ' + translations['command']['21'] + '** 🚀',
            description: `🔹 Boosts ` + translations['command']['22'] + ` : **${boostCounts * 2}/${totalPrice}**\n🔸 Boosts ` + translations['command']['28'] + ` : **${boostCountsFailed * 2}/${totalPrice}**\n📝 Server id: ` + serveurID,
            fields: savedLogs.length > 0 ? [{
                name: "Logs",
                value: "```\n" + savedLogs.join("\n") + "\n```",
                inline: false // Ensure this is a boolean
            }] : [],
            image: { url: bannier }, // Ensure bannier is a valid URL
            timestamp: new Date().toISOString(), // Use ISO format for the timestamp
            footer: { text: `${name} - ${translations['command']['7']} MrX` } // Use template literals for better readability
        };
        await editWebhookMessage(initialMessageId, embed);
        if (boostCounts >= boosttttt) {
            await sendDiscordNotification("Order Delivered, "+translations['command']['100'] + ` (${boostCounts * 2} boosts), invoice_id: ${item.invoice_id}.`, 'log');
            handleResponse(res, mode, translations['command']['101'], 200);
            return handleResponse(res, mode, translations['command']['101'], 200);
        } else {
            await sendDiscordNotification(`Delivery Error, ${boostCountsFailed * 2} boosts ${translations['command']['102']}, invoice_id: ${item.invoice_id}.`, 'log');
            handleResponse(res, mode, translations['command']['103'], 200);
            return handleResponse(res, mode, translations['command']['103'], 200);
        }
    } catch (error) {
        console.error(error);
        handleResponse(res, mode, 'Erreur interne du serveur', 500);
    }
};



const handleOrders = (res, queryParams) => {
    if (!fs.existsSync(paths)) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Aucune commande trouvée</h1>');
        return;
    }

    const commandes = JSON.parse(fs.readFileSync(paths));
    const itemsPerPage = orders_command_for_page || 100;
    const currentPage = parseInt(queryParams) || 1; 
    const totalOrders = commandes.length;
    const totalPages = Math.ceil(totalOrders / itemsPerPage); 
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedCommandes = commandes.slice(startIndex, endIndex);

    const totalCompletedOrders = commandes.filter(commande => commande.status === 'completed').length;
    const totalBoosts = commandes.reduce((total, commande) => { 
        const amount = parseInt(commande.amount, 10); 
        const boostCount = amount * 14; 
        return total + boostCount; 
    }, 0);    
    const totalEarned = commandes.reduce((total, commande) => {
        const price = parseFloat(commande.price);
        return total + (isNaN(price) ? 0 : price); 
    }, 0);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Dashboard des Commandes</title>
                <style>
                    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
                    body { background-color: #111827; color: #e5e7eb; display: flex; justify-content: center; padding: 20px; }
                    .dashboard { width: 100%; max-width: 1200px; padding: 20px; background: #1f2937; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); }
                    .logo { display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
                    .logo img { width: 80px; margin-right: 10px; }
                    .logo h1 { font-size: 24px; font-weight: bold; color: #60a5fa; }
                    header { text-align: center; margin-bottom: 20px; }
                    header h1 { font-size: 1.8rem; }
                    header p { font-size: 1.2rem; opacity: 0.8; }
                    
                    .table-container { overflow-x: auto; }
                    table { width: 100%; border-collapse: collapse; background-color: #374151; border-radius: 10px; overflow: hidden; }
                    th, td { padding: 12px; text-align: left; }
                    th { background-color: #2563eb; color: white; text-transform: uppercase; }
                    tr:nth-child(even) { background-color: #1f2937; }
                    tr:hover { background-color: #334155; }
                    
                    .pagination { text-align: center; margin-top: 20px; }
                    .pagination a { margin: 0 5px; padding: 8px 15px; background-color: #2563eb; color: white; border-radius: 5px; text-decoration: none; transition: 0.3s; }
                    .pagination a:hover { background-color: #1e40af; }
                    
                    footer { text-align: center; margin-top: 30px; font-size: 0.9rem; opacity: 0.7; }
                    
                    @media (max-width: 768px) {
                        th, td { padding: 10px; font-size: 14px; }
                        .logo h1 { font-size: 20px; }
                        header h1 { font-size: 1.5rem; }
                        header p { font-size: 1rem; }
                    }
                </style>
            </head>
            <body>
                <div class="dashboard">
                    <div class="logo">
                        <img src="https://media.bloumechat.com/media/PFq3HUI6Es.png" alt="Logo">
                        <h1>InfinityBoost</h1>
                    </div>
                    
                    <header>
                        <h1>Dashboard des Commandes</h1>
                        <p>Total Gagné : <span id="totalEarned">${totalEarned.toFixed(2)}€</span> | Total Boosts : <span id="totalBoosts">${totalBoosts}</span> | Total Commandes : <span id="totalCompletedOrders">${totalCompletedOrders}</span></p>
                    </header>
                    
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Invoice ID</th>
                                    <th>Email</th>
                                    <th>Prix (€)</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                    <th>Gateway</th>
                                    <th>Serveur ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${paginatedCommandes.map(cmd => `
                                    <tr>
                                        <td>${cmd.invoice_id}</td>
                                        <td>${cmd.email}</td>
                                        <td>${parseFloat(cmd.price).toFixed(2)}€</td>
                                        <td>${cmd.status}</td>
                                        <td>${cmd.amount}</td>
                                        <td>${cmd.gateway}</td>
                                        <td>${cmd.serveurID}</td>
                                    </tr>`).join('')}
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="pagination">
                        ${currentPage > 1 ? `<a href="/orders?page=${currentPage - 1}">&laquo; Précédent</a>` : ''}
                        <span>Page ${currentPage} / ${totalPages}</span>
                        ${currentPage < totalPages ? `<a href="/orders?page=${currentPage + 1}">Suivant &raquo;</a>` : ''}
                    </div>
                    
                    <footer>
                        <p>&copy; 2024 InfinityBoost. Tous droits réservés.</p>
                    </footer>
                </div>
            </body>
            </html>
`);
};

const server = http.createServer(async (req, res) => {
    console.log(`[${new Date().toISOString()}] Nouvelle requête reçue: ${req.method} ${req.url}`);
    
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', async () => {
            try {
                const requestData = JSON.parse(body);
                const mode = 'json';
                
                const parsedUrl = url.parse(req.url, true);
                if (requestData.event === 'INVOICE.ITEM.DELIVER-DYNAMIC') {
                // Pour les webhooks SellAuth
                    console.log(`[${new Date().toISOString()}] Traitement d'une commande INVOICE.ITEM.DELIVER-DYNAMIC`);
                    await handleBooster(requestData, mode, res);
                } else {
                    console.log(`[${new Date().toISOString()}] Event non supporté:`, requestData.event);
                    handleResponse(res, mode, 'Event non supporté', 400);
                }
            } catch (error) {
                console.error(`[${new Date().toISOString()}] Erreur parsing JSON:`, error);
                handleResponse(res, 'json', 'Erreur parsing JSON', 400);
            }
        });
    } else if (req.method === 'GET') {
        try {
            const parsedUrl = url.parse(req.url, true);
            const queryParams = parsedUrl.query;
            const page = queryParams.page || '1';
            console.log(`[${new Date().toISOString()}] Requête GET reçue pour ${parsedUrl.pathname}, params:`, queryParams);

            if (parsedUrl.pathname === '/orders') {
                console.log(`[${new Date().toISOString()}] Traitement d'une requête /orders, page:`, page);
                handleOrders(res, page);
            } else {
                console.log(`[${new Date().toISOString()}] Route non trouvée:`, parsedUrl.pathname);
                handleResponse(res, 'json', 'Route non trouvée', 404);
            }
        } catch (error) {
            console.error(`[${new Date().toISOString()}] Erreur lors du traitement de la requête GET:`, error);
            handleResponse(res, 'json', { error: 'Erreur interne du serveur', details: error.message }, 500);
        }
    } else {
        console.log(`[${new Date().toISOString()}] Méthode non supportée:`, req.method);
        handleResponse(res, 'json', 'Méthode non supportée', 405);
    }
});

server.listen(portserveur, () => {
    console.log(`[${new Date().toISOString()}] Serveur démarré sur http://${hostns}:${portserveur}`);
});

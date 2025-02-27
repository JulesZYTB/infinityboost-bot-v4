const fs = require('fs');
const inquirer = require('inquirer');
const gradient = require('gradient-string');
const figlet = require('figlet');

//Code by JulesZ .
const text = 'InfinityBoost Bot V4 Intallation';
// Fonction pour demander une information et avoir un retour de l'utilisateur
const askQuestion = async (question) => {
  const prompt = inquirer.createPromptModule();  // Créer un module de prompt
  const response = await prompt([
    {
      type: 'input',
      name: 'value',
      message: question.message,
      default: question.default,
    },
  ]);
  return response.value;
};

async function askLanguage() {
  const { LangueShop } = await inquirer.prompt([
      {
          type: 'list',
          name: 'LangueShop',
          message: 'Entrez la langue que vous souhaitez utiliser pour votre bot :',
          choices: ['fr', 'en'],
          default: 'fr'
      }
  ]);
  return LangueShop;
}

const installConfig = async () => {
  const LangueShop = await askLanguage();

  // Demander les paramètres de configuration
  const NameShop = await askQuestion({
    message: 'Entrez le nom de votre shop :',
    default: 'ShopName',
  });
  
  const bannier = await askQuestion({
    message: 'Entrez la bannier de votre shop [JPG, PNG, GIF]:',
    default: 'https://panel.infinityboost.monster/standard%20(3).gif',
  });

  const adminId1 = await askQuestion({
    message: 'Entrez l\'ID d\'un compte qui pourra utiliser le bot [ID1] :',
    default: '',
  });

  const adminId2 = await askQuestion({
    message: 'Entrez l\'ID d\'un autre compte qui pourra utiliser le bot [ID2] :',
    default: '',
  });

  const adminId3 = await askQuestion({
    message: 'Entrez encore l\'ID d\'un autre compte qui pourra utiliser le bot [ID3] :',
    default: '',
  });
  
  const maintenance = await inquirer.createPromptModule()([
    {
      type: 'confirm',
      name: 'maintenance',
      message: 'Voulez-vous activer le mode maintenance ?',
      default: false,
    },
  ]);

  const apikey = await askQuestion({
    message: 'Entrez votre clé (Licence) :',
    default: '',
  });

  const botToken = await askQuestion({
    message: 'Entrez le token de votre bot :',
    default: '',
  });

  const guildId = await askQuestion({
    message: 'Entrez l\'ID de votre serveur Discord (guildid, commands slash sending) :',
    default: '',
  });

  const clientId = await askQuestion({
    message: 'Entrez l\'ID de votre bot Discord (clientid) :',
    default: '',
  });

  const client_secret = await askQuestion({
    message: 'Entrez le secret de votre bot Discord (client secret, > BOT) :',
    default: '',
  });

  const discordWebhookCommandLog_bot = await askQuestion({
    message: 'Entrez l\'URL du webhook Discord pour les logs de commandes du bot:',
    default: '',
  });

  const bio = await askQuestion({
    message: 'Entrez la bio pour autobuy par defaut :',
    default: '.gg/infinityboost - https://bloumechat.com',
  });

  const autobuy_enabled = await inquirer.createPromptModule()([
    {
      type: 'confirm',
      name: 'autobuy_enabled',
      message: 'Voulez-vous activer l\'autobuy [SellAuth] ?',
      default: false,
    },
  ]);

    const apikeySellauth = await askQuestion({
      message: 'Entrez votre clé API Sellauth :',
      default: '',
    });

    const shopIdSellauth = await askQuestion({
      message: 'Entrez l\'ID de votre shop Sellauth :',
      default: '',
    });

    const discordWebhookCommandLog = await askQuestion({
      message: 'Entrez l\'URL du webhook Discord pour les logs de commandes :',
      default: '',
    });

    const discordWebhookConsole = await askQuestion({
      message: 'Entrez l\'URL du webhook Discord pour les logs de la console :',
      default: '',
    });

    const bioVariableCustomField = await askQuestion({
      message: 'Entrez le champ personnalisé bio_variable_Custom_Field :',
      default: '',
    });

    const guildidVariableCustomField = await askQuestion({
      message: 'Entrez le champ personnalisé guildid_variable_Custom_Field :',
      default: '',
    });

    const ordersCommandForPage = await askQuestion({
      message: 'Combien de commandes afficher par page dans le dashboard ?',
      default: '100',
    });

    const host = await askQuestion({
      message: 'Entrez l\'hôte pour l\'autobuy (laisser vide si non requis) :',
      default: '',
    });

    const port = await askQuestion({
      message: 'Entrez le port pour l\'autobuy :',
      default: '10000',
    });
  // Création de l'objet de configuration
  const config = {
    maintenance: maintenance.maintenance ? 'true' : 'false',
    apikey,
    bot: {
      token: botToken,
      guildid: guildId,
      clientid: clientId,
      clientsecret: client_secret,
      discord_webhook_url_command_log: discordWebhookCommandLog_bot,
    },
    service: {
      name_shop: NameShop,
      langue_shop: LangueShop,
      banner: bannier,
    },
    autobuy: {
      enabled: autobuy_enabled,
      bio: bio,
      apikey_sellauth: apikeySellauth,
      shop_id_sellauth: shopIdSellauth,
      discord_webhook_url_command_log: discordWebhookCommandLog,
      discord_webhook_url_console: discordWebhookConsole,
      bio_variable_Custom_Field: bioVariableCustomField,
      guildid_variable_Custom_Field: guildidVariableCustomField,
      orders_command_for_page: parseInt(ordersCommandForPage, 10),
      host,
      port: parseInt(port, 10),
    },
    admin: {
      id_1: adminId1,
      id_2: adminId2,
      id_3: adminId3,
    },
  };

  // Sauvegarde de la configuration dans un fichier
  fs.writeFileSync('config.json', JSON.stringify(config, null, 2));

  console.log('La configuration a été sauvegardée dans config.json');
};

figlet(text, function(err, asciiArt) {
    console.log(gradient.rainbow(asciiArt));
    console.log(gradient.rainbow("InfinityBoost Bot V4 par ") +"MrX");
    console.log(gradient.rainbow("InfinityBoost Bot V4 Version ") + "V4.0");
    installConfig();
  });

# InfinityBoost Bot V4

[English](#english) | [Français](#français)

## English
### Description
InfinityBoost Bot V4 is the 4th version of the InfinityBoost boost bot, allowing you to automate server boosts for your clients. It offers a simple panel rich in useful information, with optimized errors for a better experience.

### Installation
To install the bot, follow these steps:
1. Clone the repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `node installConfig.js` to set up your environment.
4. Add `http://infinityboost.monster` in your Bot > OAuth2 link and enable all intents for Discord.

![image](https://github.com/user-attachments/assets/67776347-8e0b-41dd-b1f2-4f13692d9e9d) ![image](https://github.com/user-attachments/assets/e9356bcc-6f43-4287-9d4d-a747f0739921)

### Configuration
The `config.json` file contains all the necessary configuration settings for the bot. Modify this file to customize the bot's behavior according to your needs.

### AutoBuy Setup
1. Get `apikey_sellauth` and `shop_id_sellauth` from [SellAuth API Dashboard](https://dash.sellauth.com/api).
2. Create a webhook for `discord_webhook_url_command_log` to log new orders.
3. Create a webhook for `discord_webhook_url_console` to log the console.
4. If you are using Pterodactyl, enter the address as in the tutorial video, otherwise enter `host` as your domain or IP and `port` as the port you have configured.
5. The `port` is either the port used by your pterodactyl server or the port you want to use.
6. the `check_bot` is the number of times the bot will check if the bot is in the server to boost and `time_check_bot` (minutes example 15 equals 15 minutes) is the time between the number of times it will check example every 15 minutes it will check 15 times maximum.
7. Create a product on SellAuth:
- In the shipping options, select "dynamic".
- Add your server URL (IP or host) followed by the port.
- Product name: [Number of boosts per order] 1/3 month boost (example below).
- [https://www.youtube.com/watch?v=Hc79sDi3f0U](https://youtu.be/6MxxndGTObY)

```json
"autobuy": {
    "autobuy_enabled": true,
    "bio": ".gg/infinityboost - https://bloumechat.com",
    "check_bot": 15,
    "time_check_bot": 15,
    "apikey_sellauth": "",
    "shop_id_sellauth": "",
    "discord_webhook_url_command_log": "",
    "discord_webhook_url_console": "",
    "bio_variable_Custom_Field": "",
    "guildid_variable_Custom_Field": "",
    "orders_command_for_page": 100,
    "host": "",
    "port": 10000
}
```

### Usage
To run the bot, use one of the following commands:
- `npm start`
- `node index`

You can use various commands to interact with the bot, including:
- `/boost` - Boost your Discord server.
- `/stock` - Check stock token and boost.
- `/stats` - Get trading statistics.
- `/send` - Create a link with the tokens from your stock.
- `/restock` - Restock tokens.
- `/edit-admin` - Edit bot administrators.
- `/checker` - Check your tokens.
- `/leave` - Leave all the bot's servers.

### Contributing
If you'd like to contribute to the project, please fork the repository and submit a pull request.

### License
This project is licensed under the MIT License.

---

## Français
### Description
InfinityBoost Bot V4 est la 4ᵉ version du bot boosts d'InfinityBoost, permettant d'automatiser les boosts de serveur pour vos clients. Il propose un panel simple, riche en informations utiles, avec des erreurs optimisées pour une meilleure expérience.

### Installation
Pour installer le bot, suivez ces étapes :
1. Clonez le dépôt.
2. Exécutez `npm install` pour installer les dépendances nécessaires.
3. Exécutez `node installConfig.js` pour configurer votre environnement.
4. Ajoutez `http://infinityboost.monster` dans Bot > OAuth2 link et activez toutes les intents pour Discord.


![image](https://github.com/user-attachments/assets/67776347-8e0b-41dd-b1f2-4f13692d9e9d) ![image](https://github.com/user-attachments/assets/3c155374-3f46-4e5e-b941-16fc9ca211cf)

### Configuration
Le fichier `config.json` contient tous les paramètres de configuration nécessaires pour le bot. Modifiez ce fichier pour personnaliser le comportement du bot selon vos besoins.

### Configuration AutoBuy
1. Obtenez `apikey_sellauth` et `shop_id_sellauth` sur [SellAuth API Dashboard](https://dash.sellauth.com/api).
2. Créez un webhook pour `discord_webhook_url_command_log` afin de journaliser les nouvelles commandes.
3. Créez un webhook pour `discord_webhook_url_console` afin de journaliser la console.
4. Si vous utilisez Pterodactyl, indiquez l'adresse comme sur le tuto youtube sinon indiquez `host` comme votre domaine ou IP et `port` comme le port que vous avez configurées.
5. Le `port` c'est soit le port utilisée par votre serveur pterodactyl ou le port que vous voulez utilisée .
6. Le `check_bot` ses le nombre de fois que le bot vas verifier si le bot est dans le serveur a booster et `time_check_bot` (minutes exemple 15 égale a 15 minutes) ses le temps entre le nombre de fois il va verifier exemple toute les 15 minutes il vas verifier 15 fois au maximum.
7. Créez un produit sur SellAuth :
  - Dans les options de livraison, sélectionnez "dynamic".
  - Ajoutez l'URL de votre serveur (IP ou hôte) suivi du port.
  - Nom du produit : [Nombre de boosts par commande] boost 1/3 mois (exemple ci-dessous).
  - [https://www.youtube.com/watch?v=Hc79sDi3f0U](https://youtu.be/6MxxndGTObY)

```json
"autobuy": {
    "autobuy_enabled": true,
    "bio": ".gg/infinityboost - https://bloumechat.com",
    "check_bot": 15,
    "time_check_bot": 15,
    "apikey_sellauth": "",
    "shop_id_sellauth": "",
    "discord_webhook_url_command_log": "",
    "discord_webhook_url_console": "",
    "bio_variable_Custom_Field": "",
    "guildid_variable_Custom_Field": "",
    "orders_command_for_page": 100,
    "host": "",
    "port": 10000
}
```

### Utilisation
Pour exécuter le bot, utilisez l'une des commandes suivantes :
- `npm start`
- `node index`

Vous pouvez utiliser différentes commandes pour interagir avec le bot, notamment :
- `/boost` - Booster votre serveur Discord.
- `/stock` - Vérifier le stock de tokens et de boosts.
- `/stats` - Obtenir des statistiques de trading.
- `/send` - Créer un lien avec les tokens de votre stock.
- `/restock` - Réapprovisionner les tokens.
- `/edit-admin` - Modifier les administrateurs du bot.
- `/checker` - Vérifier vos tokens.
- `/leave` - Quitter tous les serveurs du bot.

### Contribution
Si vous souhaitez contribuer au projet, veuillez forker le dépôt et soumettre une pull request.

### Licence
Ce projet est sous licence MIT.

---

### Informations supplémentaires
- Développé par MrX
- Serveur support Discord : [discord.gg/infinityboost](https://discord.gg/infinityboost)
- Pour acheter : [shop.infinityboost.monster](https://shop.infinityboost.monster/)
- Depuis 2024


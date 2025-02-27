(function (_0x4f21eb, _0xc32b9e) {
    const _0x3f7f8b = _0x4657;
    const _0x2e1091 = _0x4f21eb();
    while (!![]) {
        try {
            const _0x3aeb07 = parseInt(_0x3f7f8b(0x167)) / 0x1 + -parseInt(_0x3f7f8b(0x15f)) / 0x2 + -parseInt(_0x3f7f8b(0x163)) / 0x3 + parseInt(_0x3f7f8b(0x164)) / 0x4 * (parseInt(_0x3f7f8b(0x160)) / 0x5) + -parseInt(_0x3f7f8b(0x166)) / 0x6 * (parseInt(_0x3f7f8b(0x169)) / 0x7) + parseInt(_0x3f7f8b(0x161)) / 0x8 * (-parseInt(_0x3f7f8b(0x168)) / 0x9) + parseInt(_0x3f7f8b(0x165)) / 0xa * (parseInt(_0x3f7f8b(0x162)) / 0xb);
            if (_0x3aeb07 === _0xc32b9e) {
                break;
            } else {
                _0x2e1091['push'](_0x2e1091['shift']());
            }
        } catch (_0x3a72a3) {
            _0x2e1091['push'](_0x2e1091['shift']());
        }
    }
}(_0x4361, 0x286a3));
const {SlashCommandBuilder: _0x1e8b97} = require('@discordjs/builders');
const {
    MessageEmbed: _0x8d9585,
    MessageActionRow: _0x3a782e,
    MessageButton: _0x5f1094
} = require('discord.js');
const _0x4e4168 = require('../config.json');
const _0x4d4101 = require('axios');
const _0x53dfe4 = require('fs');
function _0x4361() {
    const _0x39ff55 = [
        '102726zElbev',
        '85445oPdWSD',
        '9GuyKNc',
        '126abuZym',
        '114082EGAIya',
        '39540TotuWW',
        '2198408hOxrpQ',
        '77CvyKfQ',
        '939879SLkSjr',
        '76lkRZHv',
        '1261650QAkIHI'
    ];
    _0x4361 = function () {
        return _0x39ff55;
    };
    return _0x4361();
}
function _0x4657(_0x35a936, _0x4c53f4) {
    const _0x4361b9 = _0x4361();
    _0x4657 = function (_0x46577a, _0x10914a) {
        _0x46577a = _0x46577a - 0x15f;
        let _0x1a577f = _0x4361b9[_0x46577a];
        return _0x1a577f;
    };
    return _0x4657(_0x35a936, _0x4c53f4);
}
const _0x28364e = JSON['parse'](_0x53dfe4['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x1f04d1 = _0x4e4168['service']['langue_shop'];
const _0x5e240f = _0x28364e[_0x1f04d1];
let _0xcca301 = _0x4e4168['service']['name_shop'];
let _0x1beac4 = _0x4e4168['service']['bannier'];
module['exports'] = {
    'data': new _0x1e8b97()['setName']('leave')['setDescription'](_0x5e240f['command']['37']),
    async 'execute'(_0x2230f9) {
        await _0x2230f9['deferReply']();
        let _0x444955 = _0x2230f9['guild']['id'];
        let _0x537636 = [
            _0x4e4168['admin']['id_1'],
            _0x4e4168['admin']['id_2'],
            _0x4e4168['admin']['id_3']
        ];
        if (!_0x537636['includes'](_0x2230f9['user']['id'])) {
            const _0x2e6a44 = new _0x3a782e()['addComponents'](new _0x5f1094()['setLabel'](_0x5e240f['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0xe4c29b = new _0x8d9585()['setColor']('#071b47')['setTitle'](_0x5e240f['command']['27'])['setDescription'](_0x5e240f['command']['12'])['setImage'](_0x1beac4)['setTimestamp']()['setFooter'](_0xcca301 + '\x20-\x20' + _0x5e240f['command']['7'] + '\x20MrX');
            return await _0x2230f9['editReply']({
                'embeds': [_0xe4c29b],
                'components': [_0x2e6a44]
            });
        }
        const _0xebf209 = new _0x8d9585()['setColor']('#071b47')['setTitle'](_0x5e240f['command']['44'] + '\x200/None')['setDescription'](_0x5e240f['command']['45'])['setImage'](_0x1beac4)['setTimestamp']()['setFooter'](_0xcca301 + '\x20-\x20' + _0x5e240f['command']['7'] + '\x20MrX');
        await _0x2230f9['editReply']({ 'embeds': [_0xebf209] });
        const {
            Client: _0x18edc7,
            Intents: _0x37b684
        } = require('discord.js');
        const _0x2f5b08 = new _0x18edc7({
            'intents': [
                _0x37b684['FLAGS']['GUILDS'],
                _0x37b684['FLAGS']['GUILD_MESSAGES'],
                ,
                _0x37b684['FLAGS']['GUILD_MEMBERS']
            ]
        });
        let _0x17b729 = 0x6;
        let _0x34618b = [];
        var _0x2b773f = 0x0;
        _0x2f5b08['on']('ready', async () => {
            const _0x50db56 = _0x2f5b08['guilds']['cache']['size'] - 0x1;
            _0x2f5b08['guilds']['cache']['forEach'](async _0x38db13 => {
                if (_0x38db13['id'] === _0x444955)
                    return;
                try {
                    await new Promise(_0x56a4bc => setTimeout(_0x56a4bc, 0x1388));
                    await _0x38db13['leave']();
                    _0x2b773f++;
                    let _0x4aa84a = '[+]\x20' + _0x5e240f['command']['47'] + ('\x20' + _0x2f5b08['user']['tag'] + '\x20') + _0x5e240f['command']['48'] + ('\x20' + _0x38db13['name']);
                    if (_0x34618b['length'] >= _0x17b729) {
                        _0x34618b['pop']();
                    }
                    _0x34618b['unshift'](_0x4aa84a);
                    const _0x4af466 = new _0x8d9585()['setColor']('#071b47')['setTitle'](_0x5e240f['command']['44'] + ('\x20' + _0x2b773f + '/' + _0x50db56))['setDescription'](_0x5e240f['command']['46'])['setImage'](_0x1beac4)['setTimestamp']()['setFooter'](_0xcca301 + '\x20-\x20' + _0x5e240f['command']['7'] + '\x20MrX');
                    if (_0x34618b['length'] > 0x0) {
                        let _0x374b5b = _0x34618b['join']('\x0a');
                        _0x4af466['addField']('Logs', '```\x0a' + _0x374b5b + '\x0a```', !![]);
                    }
                    await _0x2230f9['editReply']({ 'embeds': [_0x4af466] });
                } catch (_0x495cc9) {
                    console['error']('Erreur\x20en\x20quittant\x20le\x20serveur\x20' + _0x38db13['name'] + ':\x20' + _0x495cc9);
                }
            });
        });
        _0x2f5b08['login'](_0x4e4168['bot']['token'])['catch'](_0x31d3dc => {
            console['log'](chalk['redBright']('[ERROR]') + '\x20Invalide\x20token\x20' + gradient['instagram'](token));
            console['log'](_0x31d3dc);
        });
    }
};
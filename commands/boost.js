(function (_0x10ec1a, _0x341e91) {
    const _0xcf2cb2 = _0x19e8;
    const _0x2feb1b = _0x10ec1a();
    while (!![]) {
        try {
            const _0x1c4fcc = -parseInt(_0xcf2cb2(0x1a6)) / 0x1 + -parseInt(_0xcf2cb2(0x1a5)) / 0x2 * (parseInt(_0xcf2cb2(0x1a8)) / 0x3) + parseInt(_0xcf2cb2(0x1a7)) / 0x4 * (parseInt(_0xcf2cb2(0x1a3)) / 0x5) + parseInt(_0xcf2cb2(0x1a9)) / 0x6 + parseInt(_0xcf2cb2(0x1aa)) / 0x7 * (-parseInt(_0xcf2cb2(0x1a2)) / 0x8) + parseInt(_0xcf2cb2(0x1a4)) / 0x9 + parseInt(_0xcf2cb2(0x1ab)) / 0xa;
            if (_0x1c4fcc === _0x341e91) {
                break;
            } else {
                _0x2feb1b['push'](_0x2feb1b['shift']());
            }
        } catch (_0x12c922) {
            _0x2feb1b['push'](_0x2feb1b['shift']());
        }
    }
}(_0x5041, 0x94113));
const {SlashCommandBuilder: _0x2ce591} = require('@discordjs/builders');
const {
    MessageEmbed: _0x21aeda,
    MessageActionRow: _0x36b205,
    MessageButton: _0x6e01e3
} = require('discord.js');
const {performOperation: _0x7394dd} = require('../required/performOp');
const _0x10866b = require('axios');
const _0x3aa7d1 = require('os');
const _0x4b749e = require('../config.json');
const _0x4edf2d = require('fs');
const _0x407c05 = require('path');
const _0x379dae = require('gradient-string');
const _0x1afc3a = require('line-by-line');
const _0x108562 = JSON['parse'](_0x4edf2d['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x27cfc7 = _0x4b749e['service']['langue_shop'];
const _0x534cae = _0x108562[_0x27cfc7];
let _0x5668dc = _0x4b749e['service']['name_shop'];
let _0xa14fb9 = _0x4b749e['service']['banner'];
let _0x26fcfe = _0x4b749e['apikey'];
let _0x450875 = _0x4b749e['bot']['clientid'];
let _0x580825 = _0x4b749e['bot']['token'];
let _0x3a6cd6 = _0x4b749e['bot']['clientsecret'];
let _0x2b5b99;
function _0x5041() {
    const _0x5bdce5 = [
        '4208958toUput',
        '71164aqjOuF',
        '141445WKuMYU',
        '12jcKKSr',
        '21QEstam',
        '365838IvBsUK',
        '7woEAiV',
        '5895740qVYWcf',
        '4139528nyhlgA',
        '660390BmCyTM'
    ];
    _0x5041 = function () {
        return _0x5bdce5;
    };
    return _0x5041();
}
function _0x19e8(_0x43e270, _0x33e322) {
    const _0x50418c = _0x5041();
    _0x19e8 = function (_0x19e847, _0x562f3a) {
        _0x19e847 = _0x19e847 - 0x1a2;
        let _0x3dc3fe = _0x50418c[_0x19e847];
        return _0x3dc3fe;
    };
    return _0x19e8(_0x43e270, _0x33e322);
}
async function _0x3f483b() {
    return new Promise((_0x5adb2b, _0xa04459) => {
        _0x7394dd((_0x991ac6, _0x18fec7) => {
            if (_0x991ac6) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0xa04459(_0x991ac6);
            } else {
                _0x2b5b99 = _0x18fec7;
                _0x5adb2b(_0x2b5b99);
            }
        });
    });
}
async function _0x44fc28(_0x7127ee) {
    const _0x488e63 = _0x7127ee['split'](':');
    if (_0x488e63['length'] === 0x3) {
        return _0x488e63[0x2];
    } else if (_0x488e63['length'] === 0x1) {
        return _0x7127ee;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x7127ee);
        return _0x7127ee;
    }
}
async function _0x4f49bd(_0x4f29d6) {
    if (_0x4f29d6['length'] <= 0x6) {
        return _0x4f29d6;
    }
    const _0x40c91b = _0x4f29d6['slice'](0x0, 0x14);
    const _0xd6d71a = _0x4f29d6['slice'](-0xa);
    const _0x4091fb = _0x4f29d6['length'] - _0x40c91b['length'] - _0xd6d71a['length'];
    const _0x2524d3 = '' + _0x40c91b + '*'['repeat'](_0x4091fb - 0x46) + _0xd6d71a;
    return _0x2524d3;
}
async function _0x5e0a22(_0x15077b, _0x5c59e6) {
    let _0x131684 = await _0x4f49bd(_0x15077b);
    let _0x11d485 = await _0x3e1656(_0x5c59e6);
    let _0x453364 = '';
    if (!_0x4edf2d['existsSync'](_0x5c59e6)) {
        console['log'](_0x379dae['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x30c465 = [];
    const _0x4925a7 = new _0x1afc3a(_0x5c59e6);
    _0x4925a7['on']('error', _0x4724b1 => {
        console['error'](_0x379dae['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x4724b1));
    });
    _0x4925a7['on']('line', _0x35b719 => {
        const _0x26e491 = _0x35b719['trim']();
        if (!_0x26e491['includes'](_0x15077b['trim']())) {
            _0x30c465['push'](_0x26e491);
        }
    });
    _0x4925a7['on']('end', async () => {
        if (_0x30c465['length'] === 0x0 && _0x11d485 !== 0x1) {
            console['log'](_0x379dae['retro']('⛔\x20-\x20Le\x20token\x20' + _0x131684 + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x11d485 !== 0x1) {
            _0x453364 = _0x30c465['join'](_0x3aa7d1['EOL']);
        } else {
            _0x453364 = '';
        }
        _0x4edf2d['writeFile'](_0x5c59e6, _0x453364, _0x3b89bd => {
            if (_0x3b89bd) {
                console['error'](_0x379dae['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x3b89bd));
                return;
            }
            console['log'](_0x379dae['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x131684 + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x3e1656(_0x4d6808) {
    try {
        const _0x191b2d = _0x4edf2d['readFileSync'](_0x4d6808, 'utf-8');
        const _0x565af3 = _0x191b2d['split']('\x0a');
        const _0x4b6ffc = _0x565af3['filter'](_0x4c1d1 => _0x4c1d1['trim']()['length'] > 0x0);
        return _0x4b6ffc['length'];
    } catch (_0x7390b2) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x7390b2);
        return 0x0;
    }
}
async function _0x404d15(_0x41cc96) {
    if (_0x41cc96['length'] <= 0x6) {
        return _0x41cc96;
    }
    const _0x1bcc07 = _0x41cc96['slice'](0x0, 0x6);
    const _0x999fd0 = _0x41cc96['slice'](-0xc);
    const _0x5100ce = _0x41cc96['length'] - _0x1bcc07['length'] - _0x999fd0['length'];
    const _0x594cbe = '' + _0x1bcc07 + '*'['repeat'](_0x5100ce - 0x2d) + _0x999fd0;
    return _0x594cbe;
}
module['exports'] = {
    'data': new _0x2ce591()['setName']('boost')['setDescription'](_0x534cae['command']['38'])['addStringOption'](_0x356bbe => _0x356bbe['setName']('guildid')['setDescription'](_0x534cae['command']['39'])['setRequired'](!![]))['addIntegerOption'](_0x463439 => _0x463439['setName']('type')['setDescription'](_0x534cae['command']['40'])['setRequired'](!![])['addChoice']('1\x20' + _0x534cae['command']['3'], 0x1)['addChoice']('3\x20' + _0x534cae['command']['3'], 0x3))['addStringOption'](_0x39f9eb => _0x39f9eb['setName']('bio')['setDescription'](_0x534cae['command']['41'])['setRequired'](!![]))['addIntegerOption'](_0x3d1726 => {
        _0x3d1726['setName']('nombre1')['setDescription'](_0x534cae['command']['42'])['setRequired'](!![]);
        for (let _0x1deb7f = 0x2; _0x1deb7f <= 0x1c; _0x1deb7f += 0x2) {
            _0x3d1726['addChoice'](_0x1deb7f + '\x20boosts', _0x1deb7f);
        }
        return _0x3d1726;
    }),
    async 'execute'(_0x8c701b) {
        await _0x3f483b();
        await _0x8c701b['deferReply']();
        const _0x16fc2e = _0x8c701b['options']['getString']('guildid')['toLowerCase']()['trim']();
        const _0x544b22 = _0x8c701b['options']['getString']('bio');
        const _0x2dab20 = _0x8c701b['options']['getInteger']('nombre1');
        const _0x470a1b = _0x8c701b['options']['getInteger']('type');
        let _0x2a5eb8 = [
            _0x4b749e['admin']['id_1'],
            _0x4b749e['admin']['id_2'],
            _0x4b749e['admin']['id_3']
        ];
        const _0x5d4158 = '/stock/';
        let _0x479935 = _0x407c05['join'](__dirname, '..', _0x5d4158, 'stock-1m.txt');
        let _0x406c00 = _0x407c05['join'](__dirname, '..', _0x5d4158, 'stock-3m.txt');
        let _0x5e3c5a;
        if (!_0x16fc2e) {
            return _0x8c701b['editReply'](_0x534cae['command']['34']);
        }
        if (!_0x2dab20) {
            return _0x8c701b['editReply'](_0x534cae['command']['35']);
        }
        if (_0x470a1b === 0x1) {
            _0x5e3c5a = _0x479935;
        } else if (_0x470a1b === 0x3) {
            _0x5e3c5a = _0x406c00;
        }
        if (!_0x2a5eb8['includes'](_0x8c701b['user']['id'])) {
            const _0x4d100d = new _0x36b205()['addComponents'](new _0x6e01e3()['setLabel'](_0x534cae['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x56cb1c = new _0x21aeda()['setColor']('#071b47')['setTitle'](_0x534cae['command']['27'])['setDescription'](_0x534cae['command']['12'])['setImage'](_0xa14fb9)['setTimestamp']()['setFooter'](_0x5668dc + '\x20-\x20' + _0x534cae['command']['7'] + '\x20MrX');
            return _0x8c701b['editReply']({
                'embeds': [_0x56cb1c],
                'components': [_0x4d100d]
            });
        }
        const _0x7261ce = await _0x10866b['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x26fcfe + '&machineid=' + _0x2b5b99 + '&shopname=' + _0x5668dc + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
        if (_0x7261ce['data']['success'] === ![]) {
            const _0x3b8eea = new _0x21aeda()['setColor']('#ff0000')['setTitle'](_0x534cae['command']['5'])['setImage'](_0xa14fb9)['setTimestamp']()['setFooter']('' + _0x534cae['command']['7'] + '\x20MrX');
            return _0x8c701b['editReply']({ 'embeds': [_0x3b8eea] });
        }
        let _0x1ee9df = await _0x3e1656(_0x5e3c5a);
        if (_0x1ee9df === 0x0) {
            const _0x24e4f6 = new _0x21aeda()['setColor']('#ff0000')['setTitle'](_0x534cae['command']['33'])['setDescription'](_0x5668dc + '\x20' + _0x534cae['command']['13'])['setImage'](_0xa14fb9)['setTimestamp']()['setFooter'](_0x5668dc + '\x20-\x20' + _0x534cae['command']['7'] + '\x20MrX');
            return _0x8c701b['editReply']({ 'embeds': [_0x24e4f6] });
        } else if (_0x2dab20 / 0x2 > _0x1ee9df && _0x1ee9df !== _0x2dab20 / 0x2) {
            const _0x3ce9e5 = new _0x21aeda()['setColor']('#ff0000')['setTitle'](_0x534cae['command']['33'])['setDescription'](_0x5668dc + '\x20' + _0x534cae['command']['67'])['setImage'](_0xa14fb9)['setTimestamp']()['setFooter'](_0x5668dc + '\x20-\x20' + _0x534cae['command']['7'] + '\x20MrX');
            return _0x8c701b['editReply']({ 'embeds': [_0x3ce9e5] });
        }
        try {
            let _0x307bd1 = 0x0;
            let _0x3524e0 = 0x0;
            const _0x263dac = 0x6;
            let _0x4aa51a = [];
            let _0x117491 = '[+]\x20' + _0x5668dc + '\x20initialisés.';
            if (_0x4aa51a['length'] >= _0x263dac) {
                _0x4aa51a['pop']();
            }
            _0x4aa51a['unshift'](_0x117491);
            function _0x2bb887(_0xad8276, _0x10edbd, _0x58f49c = 0x14) {
                const _0x5202e7 = Math['round'](_0xad8276 / _0x10edbd * _0x58f49c);
                const _0xf8189f = _0x58f49c - _0x5202e7;
                const _0x103340 = '▬'['repeat'](_0x5202e7);
                const _0x54260e = '░'['repeat'](_0xf8189f);
                const _0x968247 = Math['round'](_0xad8276 / _0x10edbd * 0x64);
                return '[' + _0x103340 + _0x54260e + ']\x20' + _0x968247 + '%';
            }
            const _0x4f1368 = _0x2dab20;
            const _0x48143b = new _0x21aeda()['setColor']('#0099ff')['setTitle']('🚀\x20**Boost\x20' + _0x534cae['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20Boosts\x20' + _0x534cae['command']['22'] + ('\x20:\x20**0/' + _0x4f1368 + '**\x0a🔸\x20Boosts\x20') + _0x534cae['command']['28'] + ('\x20:\x20**0/' + _0x4f1368 + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x16fc2e + '\x0a\x0a**' + _0x534cae['command']['32'] + ('\x20:**\x0a' + _0x2bb887(0x0, _0x4f1368)))['addFields'](_0x4aa51a['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x4aa51a['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0xa14fb9)['setTimestamp']()['setFooter'](_0x5668dc + '\x20-\x20' + _0x534cae['command']['7'] + '\x20MrX');
            const _0x5dd8b3 = await _0x8c701b['editReply']({ 'embeds': [_0x48143b] });
            const _0x165c1f = _0x4edf2d['readFileSync'](_0x5e3c5a)['toString']()['split']('\x0a');
            const _0x17f9e2 = await _0x10866b['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x26fcfe + '&machineid=' + _0x2b5b99 + '&shopname=' + _0x5668dc + '&mode=CHECK_BOT&guildid=' + _0x16fc2e + '&bio=' + _0x544b22 + '&clientid=' + _0x450875 + '&botclientsecret=' + _0x3a6cd6 + '&bottoken=' + _0x580825, {}, { 'timeout': 0xf4240 });
            if (_0x17f9e2['data']['erreur'] === 'bot') {
                _0x4aa51a['unshift']('⛔\x20-\x20' + _0x534cae['command']['84']);
                const _0x2b4bd8 = new _0x36b205()['addComponents'](new _0x6e01e3()['setLabel'](_0x534cae['command']['31'])['setURL']('https://discord.com/api/oauth2/authorize?client_id=' + _0x450875 + '&permissions=8&scope=bot&guild_id=' + _0x16fc2e)['setStyle']('LINK'));
                const _0x3c6d45 = new _0x21aeda()['setColor']('#071b47')['setTitle'](_0x534cae['command']['29'])['setDescription']('🔹\x20Boosts\x20' + _0x534cae['command']['22'] + ('\x20:\x20**0/' + _0x4f1368 + '**\x0a🔸\x20Boosts\x20') + _0x534cae['command']['28'] + ('\x20:\x20**0/' + _0x4f1368 + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x16fc2e + '\x0a\x0a**' + _0x534cae['command']['32'] + ('\x20:**\x0a' + _0x2bb887(0x0, _0x4f1368)))['addFields'](_0x4aa51a['length'] > 0x0 ? {
                    'name': 'Logs',
                    'value': '```\x0a' + _0x4aa51a['join']('\x0a') + '\x0a```',
                    'inline': ![]
                } : [])['setImage'](_0xa14fb9)['setTimestamp']()['setFooter'](_0x5668dc + '\x20-\x20' + _0x534cae['command']['7'] + '\x20MrX');
                return await _0x8c701b['editReply']({
                    'embeds': [_0x3c6d45],
                    'components': [_0x2b4bd8]
                });
            }
            for (let _0x166ed7 = 0x0; _0x166ed7 < _0x4f1368 / 0x2; _0x166ed7++) {
                let _0x587769 = 0x0;
                async function _0x3c0b03(_0x45c89b = 0x0) {
                    try {
                        const _0x4a9a19 = _0x165c1f[_0x166ed7];
                        const _0x38536e = await _0x44fc28(_0x4a9a19);
                        const _0x5d5d2e = await _0x10866b['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x26fcfe + '&machineid=' + _0x2b5b99 + '&shopname=' + _0x5668dc + '&mode=BOOST&guildid=' + _0x16fc2e + '&bio=' + _0x544b22 + '&clientid=' + _0x450875 + '&botclientsecret=' + _0x3a6cd6 + '&bottoken=' + _0x580825 + '&tokenboost=' + _0x38536e, {}, { 'timeout': 0xf4240 });
                        if (_0x4aa51a['length'] >= _0x263dac) {
                            _0x4aa51a['pop']();
                        }
                        if (_0x5d5d2e['data']['erreur'] === 'Invalid\x20license\x20key') {
                            _0x4aa51a['unshift']('⛔\x20-\x20' + _0x534cae['command']['82']);
                        } else if (_0x5d5d2e['data']['erreur'] === 'HWID\x20doesn\x27t\x20match.\x20Ask\x20for\x20a\x20HWID\x20reset') {
                            _0x4aa51a['unshift']('⛔\x20-\x20' + _0x534cae['command']['83']);
                        } else if (_0x5d5d2e['data']['success'] === !![]) {
                            _0x4aa51a['unshift']('✅\x20-\x20' + _0x534cae['command']['81'] + '\x20:\x20' + await _0x404d15(_0x38536e));
                            _0x307bd1++;
                            await _0x5e0a22(_0x4a9a19, _0x5e3c5a);
                        } else if (_0x5d5d2e['data']['success'] === ![]) {
                            _0x3524e0++;
                            if (_0x5d5d2e['data']['erreur'] === 'invalid') {
                                _0x4aa51a['unshift']('❌\x20-\x20' + _0x534cae['command']['80'] + '\x20:\x20' + await _0x404d15(_0x38536e));
                                await _0x5e0a22(_0x4a9a19, _0x5e3c5a);
                            } else if (_0x5d5d2e['data']['erreur'] === 'perm') {
                                _0x4aa51a['unshift']('⛔\x20-\x20' + _0x534cae['command']['79'] + '\x20:\x20' + await _0x404d15(_0x38536e));
                                if (_0x45c89b < 0x3) {
                                    _0x45c89b++;
                                    _0x4aa51a['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x404d15(_0x38536e));
                                    await _0x3c0b03(_0x45c89b);
                                }
                            } else if (_0x5d5d2e['data']['erreur'] === 'used') {
                                _0x4aa51a['unshift']('⚠️\x20-\x20' + _0x534cae['command']['78'] + '\x20:\x20' + await _0x404d15(_0x38536e));
                                await _0x5e0a22(_0x4a9a19, _0x5e3c5a);
                            } else {
                                _0x4aa51a['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x404d15(_0x38536e));
                                if (_0x45c89b < 0x3) {
                                    _0x45c89b++;
                                    _0x4aa51a['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x404d15(_0x38536e));
                                    await _0x3c0b03(_0x45c89b);
                                }
                            }
                        }
                        const _0x422bdb = new _0x21aeda()['setColor']('#0099ff')['setTitle']('🚀\x20**Boost\x20' + _0x534cae['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20Boosts\x20' + _0x534cae['command']['22'] + ('\x20:\x20**' + _0x307bd1 * 0x2 + '/' + _0x4f1368 + '**\x0a🔸\x20Boosts\x20') + _0x534cae['command']['28'] + ('\x20:\x20**' + _0x3524e0 * 0x2 + '/' + _0x4f1368 + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x16fc2e + '\x0a\x0a**' + _0x534cae['command']['32'] + ('\x20:**\x0a' + _0x2bb887((_0x307bd1 + _0x3524e0) * 0x2, _0x4f1368)))['addFields'](_0x4aa51a['length'] > 0x0 ? {
                            'name': 'Logs',
                            'value': '```\x0a' + _0x4aa51a['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        } : [])['setImage'](_0xa14fb9)['setTimestamp']()['setFooter'](_0x5668dc + '\x20-\x20' + _0x534cae['command']['7'] + '\x20MrX');
                        await _0x5dd8b3['edit']({ 'embeds': [_0x422bdb] });
                    } catch (_0x1bdb29) {
                        _0x3524e0++;
                        _0x4aa51a['unshift']('⚠️\x20-\x20error\x20API');
                        console['log']('Erreur\x20API\x20contact\x20developer', _0x1bdb29);
                        if (_0x45c89b < 0x3) {
                            _0x45c89b++;
                            _0x4aa51a['unshift']('🔄️\x20-\x20retry');
                            await _0x3c0b03(_0x45c89b);
                        }
                    }
                }
                await _0x3c0b03(_0x587769);
            }
            if (_0x4aa51a['length'] >= _0x263dac) {
                _0x4aa51a['pop']();
            }
            const _0x48b95c = new _0x21aeda()['setColor'](0xff)['setTitle']('Boost\x20' + _0x534cae['command']['21'])['setDescription']('🔹\x20Boosts\x20' + _0x534cae['command']['22'] + ('\x20:\x20**' + _0x307bd1 * 0x2 + '/' + _0x4f1368 + '**\x0a🔸\x20Boosts\x20') + _0x534cae['command']['28'] + ('\x20:\x20**' + _0x3524e0 * 0x2 + '/' + _0x4f1368 + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x16fc2e + '\x0a\x0a**' + _0x534cae['command']['32'] + ('\x20:**\x0a' + _0x2bb887((_0x307bd1 + _0x3524e0) * 0x2, _0x4f1368)))['addFields'](_0x4aa51a['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x4aa51a['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0xa14fb9)['setTimestamp']()['setFooter'](_0x5668dc + '\x20-\x20' + _0x534cae['command']['7'] + '\x20MrX');
            await _0x8c701b['editReply']({ 'embeds': [_0x48b95c] });
            const _0x3c1fd1 = await _0x8c701b['client']['guilds']['fetch'](_0x16fc2e);
            await new Promise(_0x19dccf => setTimeout(_0x19dccf, 0x1388));
            if (_0x16fc2e !== _0x8c701b['guild']['id'])
                return await _0x3c1fd1['leave']();
        } catch (_0x1482fe) {
            savedLogs['unshift']('⚠️\x20-\x20error\x20API');
            console['log']('Erreur\x20API\x20contact\x20developer', _0x1482fe);
            const _0x19f8cf = new _0x21aeda()['setColor']('#071b47')['setTitle'](_0x534cae['command']['19'])['setDescription'](_0x534cae['command']['20'])['addFields'](savedLogs['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + savedLogs['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0xa14fb9)['setTimestamp']()['setFooter'](_0x5668dc + '\x20-\x20' + _0x534cae['command']['7'] + '\x20MrX');
            await _0x8c701b['editReply']({ 'embeds': [_0x19f8cf] });
            await new Promise(_0x8f8b18 => setTimeout(_0x8f8b18, 0x1388));
            const _0x2725f5 = await _0x8c701b['client']['guilds']['fetch'](_0x16fc2e);
            if (_0x16fc2e !== _0x8c701b['guild']['id'])
                return await _0x2725f5['leave']();
        }
    }
};
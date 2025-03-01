(function (_0x35c8db, _0x183698) {
    const _0x5b6e98 = _0x4d32;
    const _0xa959a6 = _0x35c8db();
    while (!![]) {
        try {
            const _0xcfd95 = -parseInt(_0x5b6e98(0x102)) / 0x1 * (parseInt(_0x5b6e98(0xfe)) / 0x2) + -parseInt(_0x5b6e98(0x101)) / 0x3 * (-parseInt(_0x5b6e98(0x104)) / 0x4) + parseInt(_0x5b6e98(0x106)) / 0x5 + parseInt(_0x5b6e98(0x100)) / 0x6 + -parseInt(_0x5b6e98(0x107)) / 0x7 * (-parseInt(_0x5b6e98(0x105)) / 0x8) + parseInt(_0x5b6e98(0x103)) / 0x9 + -parseInt(_0x5b6e98(0x108)) / 0xa * (parseInt(_0x5b6e98(0xff)) / 0xb);
            if (_0xcfd95 === _0x183698) {
                break;
            } else {
                _0xa959a6['push'](_0xa959a6['shift']());
            }
        } catch (_0x44d677) {
            _0xa959a6['push'](_0xa959a6['shift']());
        }
    }
}(_0x3931, 0x5992d));
const {SlashCommandBuilder: _0x162d33} = require('@discordjs/builders');
const {
    MessageEmbed: _0x2da340,
    MessageActionRow: _0x1d0792,
    MessageButton: _0x39b677
} = require('discord.js');
const {performOperation: _0x4d7fde} = require('../required/performOp');
const _0x3fe914 = require('axios');
function _0x3931() {
    const _0x20793d = [
        '5526AhRWCs',
        '236KBPkzH',
        '2833200ooZQOY',
        '1428Hxtnir',
        '5672904TBiQsj',
        '2817675IQMPlt',
        '7knxZHb',
        '18166730hlkdtT',
        '818AgnxAh',
        '11FdybDl',
        '210288ZOJcbT'
    ];
    _0x3931 = function () {
        return _0x20793d;
    };
    return _0x3931();
}
const _0x40d9aa = require('os');
const _0x1f76b0 = require('../config.json');
const _0x27183c = require('fs');
const _0x141d4f = require('path');
const _0x318245 = require('gradient-string');
const _0x35fbb9 = require('line-by-line');
const _0x7ad595 = JSON['parse'](_0x27183c['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x1e821e = _0x1f76b0['service']['langue_shop'];
const _0x276e49 = _0x7ad595[_0x1e821e];
let _0x399247 = _0x1f76b0['service']['name_shop'];
let _0x18532c = _0x1f76b0['service']['banner'];
let _0x3dd67a = _0x1f76b0['apikey'];
let _0x5e7c7a = _0x1f76b0['bot']['clientid'];
let _0x56c441 = _0x1f76b0['bot']['token'];
let _0x134d85 = _0x1f76b0['bot']['clientsecret'];
function _0x4d32(_0x28d0ec, _0x29ebe4) {
    const _0x3931f2 = _0x3931();
    _0x4d32 = function (_0x4d325c, _0x586c9e) {
        _0x4d325c = _0x4d325c - 0xfe;
        let _0x3e3a86 = _0x3931f2[_0x4d325c];
        return _0x3e3a86;
    };
    return _0x4d32(_0x28d0ec, _0x29ebe4);
}
let _0x12894c;
async function _0x4d6733() {
    return new Promise((_0x52e022, _0x4b1f22) => {
        _0x4d7fde((_0x80c231, _0x5e6a29) => {
            if (_0x80c231) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x4b1f22(_0x80c231);
            } else {
                _0x12894c = _0x5e6a29;
                _0x52e022(_0x12894c);
            }
        });
    });
}
async function _0x25a470(_0x5b669d) {
    const _0x3c4346 = _0x5b669d['split'](':');
    if (_0x3c4346['length'] === 0x3) {
        return _0x3c4346[0x2];
    } else if (_0x3c4346['length'] === 0x1) {
        return _0x5b669d;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x5b669d);
        return _0x5b669d;
    }
}
async function _0x17691e(_0x4f95df) {
    if (_0x4f95df['length'] <= 0x6) {
        return _0x4f95df;
    }
    const _0xb465d5 = _0x4f95df['slice'](0x0, 0x14);
    const _0x20f746 = _0x4f95df['slice'](-0xa);
    const _0x182cc4 = _0x4f95df['length'] - _0xb465d5['length'] - _0x20f746['length'];
    const _0x2983f4 = '' + _0xb465d5 + '*'['repeat'](_0x182cc4 - 0x46) + _0x20f746;
    return _0x2983f4;
}
async function _0x470d67(_0x3b36c7, _0x25f158) {
    let _0x3a75fb = await _0x17691e(_0x3b36c7);
    let _0x52eed7 = await _0x487aaa(_0x25f158);
    let _0x3c097b = '';
    if (!_0x27183c['existsSync'](_0x25f158)) {
        console['log'](_0x318245['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x6bdfdf = [];
    const _0x2b4975 = new _0x35fbb9(_0x25f158);
    _0x2b4975['on']('error', _0x2979a1 => {
        console['error'](_0x318245['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x2979a1));
    });
    _0x2b4975['on']('line', _0x1e1c24 => {
        const _0x905b40 = _0x1e1c24['trim']();
        if (!_0x905b40['includes'](_0x3b36c7['trim']())) {
            _0x6bdfdf['push'](_0x905b40);
        }
    });
    _0x2b4975['on']('end', async () => {
        if (_0x6bdfdf['length'] === 0x0 && _0x52eed7 !== 0x1) {
            console['log'](_0x318245['retro']('⛔\x20-\x20Le\x20token\x20' + _0x3a75fb + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x52eed7 !== 0x1) {
            _0x3c097b = _0x6bdfdf['join'](_0x40d9aa['EOL']);
        } else {
            _0x3c097b = '';
        }
        _0x27183c['writeFile'](_0x25f158, _0x3c097b, _0x23c091 => {
            if (_0x23c091) {
                console['error'](_0x318245['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x23c091));
                return;
            }
            console['log'](_0x318245['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x3a75fb + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x487aaa(_0x7206e3) {
    try {
        const _0x5c17b0 = _0x27183c['readFileSync'](_0x7206e3, 'utf-8');
        const _0x38036f = _0x5c17b0['split']('\x0a');
        const _0x124c6a = _0x38036f['filter'](_0x52e94c => _0x52e94c['trim']()['length'] > 0x0);
        return _0x124c6a['length'];
    } catch (_0x294d58) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x294d58);
        return 0x0;
    }
}
async function _0x11ce6b(_0x56c2a4) {
    if (_0x56c2a4['length'] <= 0x6) {
        return _0x56c2a4;
    }
    const _0x9417bb = _0x56c2a4['slice'](0x0, 0x6);
    const _0x46d41e = _0x56c2a4['slice'](-0xc);
    const _0xdbbbd5 = _0x56c2a4['length'] - _0x9417bb['length'] - _0x46d41e['length'];
    const _0x3e2391 = '' + _0x9417bb + '*'['repeat'](_0xdbbbd5 - 0x2d) + _0x46d41e;
    return _0x3e2391;
}
module['exports'] = {
    'data': new _0x162d33()['setName']('boost')['setDescription'](_0x276e49['command']['38'])['addStringOption'](_0x2b8095 => _0x2b8095['setName']('guildid')['setDescription'](_0x276e49['command']['39'])['setRequired'](!![]))['addIntegerOption'](_0x2a01e7 => _0x2a01e7['setName']('type')['setDescription'](_0x276e49['command']['40'])['setRequired'](!![])['addChoice']('1\x20' + _0x276e49['command']['3'], 0x1)['addChoice']('3\x20' + _0x276e49['command']['3'], 0x3))['addStringOption'](_0x320f62 => _0x320f62['setName']('bio')['setDescription'](_0x276e49['command']['41'])['setRequired'](!![]))['addIntegerOption'](_0x9e75fa => {
        _0x9e75fa['setName']('nombre1')['setDescription'](_0x276e49['command']['42'])['setRequired'](!![]);
        for (let _0x1fd9c1 = 0x2; _0x1fd9c1 <= 0x1c; _0x1fd9c1 += 0x2) {
            _0x9e75fa['addChoice'](_0x1fd9c1 + '\x20boosts', _0x1fd9c1);
        }
        return _0x9e75fa;
    }),
    async 'execute'(_0x15e358) {
        await _0x4d6733();
        await _0x15e358['deferReply']();
        const _0x492e85 = _0x15e358['options']['getString']('guildid')['toLowerCase']()['trim']();
        const _0xc077ca = _0x15e358['options']['getString']('bio');
        const _0x2f6783 = _0x15e358['options']['getInteger']('nombre1');
        const _0x4a6ee6 = _0x15e358['options']['getInteger']('type');
        let _0x1dfc5e = [
            _0x1f76b0['admin']['id_1'],
            _0x1f76b0['admin']['id_2'],
            _0x1f76b0['admin']['id_3']
        ];
        const _0x41dfce = '/stock/';
        let _0x4c16ee = _0x141d4f['join'](__dirname, '..', _0x41dfce, 'stock-1m.txt');
        let _0x5865ab = _0x141d4f['join'](__dirname, '..', _0x41dfce, 'stock-3m.txt');
        let _0x27e49e;
        if (!_0x492e85) {
            return _0x15e358['editReply'](_0x276e49['command']['34']);
        }
        if (!_0x2f6783) {
            return _0x15e358['editReply'](_0x276e49['command']['35']);
        }
        if (_0x4a6ee6 === 0x1) {
            _0x27e49e = _0x4c16ee;
        } else if (_0x4a6ee6 === 0x3) {
            _0x27e49e = _0x5865ab;
        }
        if (!_0x1dfc5e['includes'](_0x15e358['user']['id'])) {
            const _0x1f7dcb = new _0x1d0792()['addComponents'](new _0x39b677()['setLabel'](_0x276e49['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0xa2e81b = new _0x2da340()['setColor']('#071b47')['setTitle'](_0x276e49['command']['27'])['setDescription'](_0x276e49['command']['12'])['setImage'](_0x18532c)['setTimestamp']()['setFooter'](_0x399247 + '\x20-\x20' + _0x276e49['command']['7'] + '\x20MrX');
            return _0x15e358['editReply']({
                'embeds': [_0xa2e81b],
                'components': [_0x1f7dcb]
            });
        }
        const _0x31b793 = await _0x3fe914['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x3dd67a + '&machineid=' + _0x12894c + '&shopname=' + _0x399247 + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
        if (_0x31b793['data']['success'] === ![]) {
            const _0x4eed3f = new _0x2da340()['setColor']('#ff0000')['setTitle'](_0x276e49['command']['5'])['setImage'](_0x18532c)['setTimestamp']()['setFooter']('' + _0x276e49['command']['7'] + '\x20MrX');
            return _0x15e358['editReply']({ 'embeds': [_0x4eed3f] });
        }
        let _0xb35f4b = await _0x487aaa(_0x27e49e);
        if (_0xb35f4b === 0x0) {
            const _0x1be1b2 = new _0x2da340()['setColor']('#ff0000')['setTitle'](_0x276e49['command']['33'])['setDescription'](_0x399247 + '\x20' + _0x276e49['command']['13'])['setImage'](_0x18532c)['setTimestamp']()['setFooter'](_0x399247 + '\x20-\x20' + _0x276e49['command']['7'] + '\x20MrX');
            return _0x15e358['editReply']({ 'embeds': [_0x1be1b2] });
        } else if (_0x2f6783 / 0x2 > _0xb35f4b && _0xb35f4b !== _0x2f6783 / 0x2) {
            const _0x327fd0 = new _0x2da340()['setColor']('#ff0000')['setTitle'](_0x276e49['command']['33'])['setDescription'](_0x399247 + '\x20' + _0x276e49['command']['67'])['setImage'](_0x18532c)['setTimestamp']()['setFooter'](_0x399247 + '\x20-\x20' + _0x276e49['command']['7'] + '\x20MrX');
            return _0x15e358['editReply']({ 'embeds': [_0x327fd0] });
        }
        try {
            let _0x596410 = 0x0;
            let _0x3f0373 = 0x0;
            const _0x1867f2 = 0x6;
            let _0x1e02df = [];
            let _0x363724 = '[+]\x20' + _0x399247 + '\x20initialisés.';
            if (_0x1e02df['length'] >= _0x1867f2) {
                _0x1e02df['pop']();
            }
            _0x1e02df['unshift'](_0x363724);
            function _0x2437e7(_0x59833b, _0x1649ab, _0x36b2cc = 0x14) {
                const _0x24b32d = Math['round'](_0x59833b / _0x1649ab * _0x36b2cc);
                const _0x40f494 = _0x36b2cc - _0x24b32d;
                const _0x11e366 = '▬'['repeat'](_0x24b32d);
                const _0x12fb0c = '░'['repeat'](_0x40f494);
                const _0x34c4d5 = Math['round'](_0x59833b / _0x1649ab * 0x64);
                return '[' + _0x11e366 + _0x12fb0c + ']\x20' + _0x34c4d5 + '%';
            }
            const _0x4476fc = _0x2f6783;
            const _0x492e50 = new _0x2da340()['setColor']('#0099ff')['setTitle']('🚀\x20**Boost\x20' + _0x276e49['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20Boosts\x20' + _0x276e49['command']['22'] + ('\x20:\x20**0/' + _0x4476fc + '**\x0a🔸\x20Boosts\x20') + _0x276e49['command']['28'] + ('\x20:\x20**0/' + _0x4476fc + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x492e85 + '\x0a\x0a**' + _0x276e49['command']['32'] + ('\x20:**\x0a' + _0x2437e7(0x0, _0x4476fc)))['addFields'](_0x1e02df['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x1e02df['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x18532c)['setTimestamp']()['setFooter'](_0x399247 + '\x20-\x20' + _0x276e49['command']['7'] + '\x20MrX');
            const _0x20e478 = await _0x15e358['editReply']({ 'embeds': [_0x492e50] });
            const _0x38e668 = _0x27183c['readFileSync'](_0x27e49e)['toString']()['split']('\x0a');
            const _0x279990 = await _0x3fe914['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x3dd67a + '&machineid=' + _0x12894c + '&shopname=' + _0x399247 + '&mode=CHECK_BOT&guildid=' + _0x492e85 + '&bio=' + _0xc077ca + '&clientid=' + _0x5e7c7a + '&botclientsecret=' + _0x134d85 + '&bottoken=' + _0x56c441, {}, { 'timeout': 0xf4240 });
            if (_0x279990['data']['erreur'] === 'bot') {
                _0x1e02df['unshift']('⛔\x20-\x20' + _0x276e49['command']['84']);
                const _0x4ef8e0 = new _0x1d0792()['addComponents'](new _0x39b677()['setLabel'](_0x276e49['command']['31'])['setURL']('https://discord.com/api/oauth2/authorize?client_id=' + _0x5e7c7a + '&permissions=8&scope=bot&guild_id=' + _0x492e85)['setStyle']('LINK'));
                const _0x1becf9 = new _0x2da340()['setColor']('#071b47')['setTitle'](_0x276e49['command']['29'])['setDescription']('🔹\x20Boosts\x20' + _0x276e49['command']['22'] + ('\x20:\x20**0/' + _0x4476fc + '**\x0a🔸\x20Boosts\x20') + _0x276e49['command']['28'] + ('\x20:\x20**0/' + _0x4476fc + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x492e85 + '\x0a\x0a**' + _0x276e49['command']['32'] + ('\x20:**\x0a' + _0x2437e7(0x0, _0x4476fc)))['addFields'](_0x1e02df['length'] > 0x0 ? {
                    'name': 'Logs',
                    'value': '```\x0a' + _0x1e02df['join']('\x0a') + '\x0a```',
                    'inline': ![]
                } : [])['setImage'](_0x18532c)['setTimestamp']()['setFooter'](_0x399247 + '\x20-\x20' + _0x276e49['command']['7'] + '\x20MrX');
                return await _0x15e358['editReply']({
                    'embeds': [_0x1becf9],
                    'components': [_0x4ef8e0]
                });
            }
            for (let _0xfa56bf = 0x0; _0xfa56bf < _0x4476fc / 0x2; _0xfa56bf++) {
                let _0x57d79e = 0x0;
                async function _0x487bf4(_0x14d2d8 = 0x0) {
                    try {
                        const _0x2d2328 = _0x38e668[_0xfa56bf];
                        const _0x17d227 = await _0x25a470(_0x2d2328);
                        const _0x3e82f6 = await _0x3fe914['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x3dd67a + '&machineid=' + _0x12894c + '&shopname=' + _0x399247 + '&mode=BOOST&guildid=' + _0x492e85 + '&bio=' + _0xc077ca + '&clientid=' + _0x5e7c7a + '&botclientsecret=' + _0x134d85 + '&bottoken=' + _0x56c441 + '&tokenboost=' + _0x17d227, {}, { 'timeout': 0xf4240 });
                        if (_0x1e02df['length'] >= _0x1867f2) {
                            _0x1e02df['pop']();
                        }
                        if (_0x3e82f6['data']['erreur'] === 'Invalid\x20license\x20key') {
                            _0x1e02df['unshift']('⛔\x20-\x20' + _0x276e49['command']['82']);
                        } else if (_0x3e82f6['data']['erreur'] === 'HWID\x20doesn\x27t\x20match.\x20Ask\x20for\x20a\x20HWID\x20reset') {
                            _0x1e02df['unshift']('⛔\x20-\x20' + _0x276e49['command']['83']);
                        } else if (_0x3e82f6['data']['success'] === !![]) {
                            _0x1e02df['unshift']('✅\x20-\x20' + _0x276e49['command']['81'] + '\x20:\x20' + await _0x11ce6b(_0x17d227));
                            _0x596410++;
                            await _0x470d67(_0x2d2328, _0x27e49e);
                        } else if (_0x3e82f6['data']['success'] === ![]) {
                            _0x3f0373++;
                            if (_0x3e82f6['data']['erreur'] === 'invalid') {
                                _0x1e02df['unshift']('❌\x20-\x20' + _0x276e49['command']['80'] + '\x20:\x20' + await _0x11ce6b(_0x17d227));
                                await _0x470d67(_0x2d2328, _0x27e49e);
                            } else if (_0x3e82f6['data']['erreur'] === 'perm') {
                                _0x1e02df['unshift']('⛔\x20-\x20' + _0x276e49['command']['79'] + '\x20:\x20' + await _0x11ce6b(_0x17d227));
                                if (_0x14d2d8 < 0x3) {
                                    _0x14d2d8++;
                                    _0x1e02df['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x11ce6b(_0x17d227));
                                    await _0x487bf4(_0x14d2d8);
                                }
                            } else if (_0x3e82f6['data']['erreur'] === 'used') {
                                _0x1e02df['unshift']('⚠️\x20-\x20' + _0x276e49['command']['78'] + '\x20:\x20' + await _0x11ce6b(_0x17d227));
                                await _0x470d67(_0x2d2328, _0x27e49e);
                            } else {
                                _0x1e02df['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x11ce6b(_0x17d227));
                                if (_0x14d2d8 < 0x3) {
                                    _0x14d2d8++;
                                    _0x1e02df['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x11ce6b(_0x17d227));
                                    await _0x487bf4(_0x14d2d8);
                                }
                            }
                        }
                        const _0x200c88 = new _0x2da340()['setColor']('#0099ff')['setTitle']('🚀\x20**Boost\x20' + _0x276e49['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20Boosts\x20' + _0x276e49['command']['22'] + ('\x20:\x20**' + _0x596410 * 0x2 + '/' + _0x4476fc + '**\x0a🔸\x20Boosts\x20') + _0x276e49['command']['28'] + ('\x20:\x20**' + _0x3f0373 * 0x2 + '/' + _0x4476fc + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x492e85 + '\x0a\x0a**' + _0x276e49['command']['32'] + ('\x20:**\x0a' + _0x2437e7(_0x596410 * 0x2, _0x4476fc)))['addFields'](_0x1e02df['length'] > 0x0 ? {
                            'name': 'Logs',
                            'value': '```\x0a' + _0x1e02df['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        } : [])['setImage'](_0x18532c)['setTimestamp']()['setFooter'](_0x399247 + '\x20-\x20' + _0x276e49['command']['7'] + '\x20MrX');
                        await _0x20e478['edit']({ 'embeds': [_0x200c88] });
                    } catch (_0x5eb20b) {
                        _0x3f0373++;
                        _0x1e02df['unshift']('⚠️\x20-\x20error\x20API');
                        console['log']('Erreur\x20API\x20contact\x20developer', _0x5eb20b);
                        if (_0x14d2d8 < 0x3) {
                            _0x14d2d8++;
                            _0x1e02df['unshift']('🔄️\x20-\x20retry');
                            await _0x487bf4(_0x14d2d8);
                        }
                    }
                }
                await _0x487bf4(_0x57d79e);
            }
            if (_0x1e02df['length'] >= _0x1867f2) {
                _0x1e02df['pop']();
            }
            const _0x149284 = new _0x2da340()['setColor'](0xff)['setTitle']('Boost\x20' + _0x276e49['command']['21'])['setDescription']('🔹\x20Boosts\x20' + _0x276e49['command']['22'] + ('\x20:\x20**' + _0x596410 * 0x2 + '/' + _0x4476fc + '**\x0a🔸\x20Boosts\x20') + _0x276e49['command']['28'] + ('\x20:\x20**' + _0x3f0373 * 0x2 + '/' + _0x4476fc + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x492e85 + '\x0a\x0a**' + _0x276e49['command']['32'] + ('\x20:**\x0a' + _0x2437e7(_0x596410 * 0x2, _0x4476fc)))['addFields'](_0x1e02df['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x1e02df['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x18532c)['setTimestamp']()['setFooter'](_0x399247 + '\x20-\x20' + _0x276e49['command']['7'] + '\x20MrX');
            await _0x15e358['editReply']({ 'embeds': [_0x149284] });
            const _0x5167b2 = await _0x15e358['client']['guilds']['fetch'](_0x492e85);
            await new Promise(_0x502998 => setTimeout(_0x502998, 0x1388));
            if (_0x492e85 !== _0x15e358['guild']['id'])
                return await _0x5167b2['leave']();
        } catch (_0x596b5e) {
            savedLogs['unshift']('⚠️\x20-\x20error\x20API');
            console['log']('Erreur\x20API\x20contact\x20developer', _0x596b5e);
            const _0x31aa36 = new _0x2da340()['setColor']('#071b47')['setTitle'](_0x276e49['command']['19'])['setDescription'](_0x276e49['command']['20'])['addFields'](savedLogs['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + savedLogs['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x18532c)['setTimestamp']()['setFooter'](_0x399247 + '\x20-\x20' + _0x276e49['command']['7'] + '\x20MrX');
            await _0x15e358['editReply']({ 'embeds': [_0x31aa36] });
            await new Promise(_0x4e4de9 => setTimeout(_0x4e4de9, 0x1388));
            const _0x439959 = await _0x15e358['client']['guilds']['fetch'](_0x492e85);
            if (_0x492e85 !== _0x15e358['guild']['id'])
                return await _0x439959['leave']();
        }
    }
};
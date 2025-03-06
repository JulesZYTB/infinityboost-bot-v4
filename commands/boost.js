(function (_0x7a6d3a, _0x1c1963) {
    const _0x512e2a = _0x18c9;
    const _0x593dcc = _0x7a6d3a();
    while (!![]) {
        try {
            const _0x11ebe4 = -parseInt(_0x512e2a(0xd8)) / 0x1 + -parseInt(_0x512e2a(0xcf)) / 0x2 * (parseInt(_0x512e2a(0xd2)) / 0x3) + -parseInt(_0x512e2a(0xd5)) / 0x4 + -parseInt(_0x512e2a(0xd7)) / 0x5 * (parseInt(_0x512e2a(0xd3)) / 0x6) + parseInt(_0x512e2a(0xd4)) / 0x7 + parseInt(_0x512e2a(0xd6)) / 0x8 + parseInt(_0x512e2a(0xd1)) / 0x9 * (parseInt(_0x512e2a(0xd0)) / 0xa);
            if (_0x11ebe4 === _0x1c1963) {
                break;
            } else {
                _0x593dcc['push'](_0x593dcc['shift']());
            }
        } catch (_0x2e61c3) {
            _0x593dcc['push'](_0x593dcc['shift']());
        }
    }
}(_0x2002, 0x53707));
const {SlashCommandBuilder: _0x398cd9} = require('@discordjs/builders');
const {
    MessageEmbed: _0x1d8411,
    MessageActionRow: _0x2d4f16,
    MessageButton: _0x1915df
} = require('discord.js');
const {performOperation: _0x4b6ced} = require('../required/performOp');
const _0x3e51c4 = require('axios');
const _0x77011a = require('os');
function _0x2002() {
    const _0x358ee9 = [
        '1081896jAVsjN',
        '1780568faHsij',
        '10145CSQJTc',
        '629217FqNwfA',
        '4xxrBWF',
        '20Aykmfb',
        '4286889jBCMNI',
        '675747fwfgAR',
        '18UHDGQb',
        '3659810QExRGz'
    ];
    _0x2002 = function () {
        return _0x358ee9;
    };
    return _0x2002();
}
const _0x12d25c = require('../config.json');
const _0x2161a2 = require('fs');
const _0x1d0aa9 = require('path');
function _0x18c9(_0x51c30b, _0x422c8a) {
    const _0x200212 = _0x2002();
    _0x18c9 = function (_0x18c99e, _0x38cf23) {
        _0x18c99e = _0x18c99e - 0xcf;
        let _0x560ad9 = _0x200212[_0x18c99e];
        return _0x560ad9;
    };
    return _0x18c9(_0x51c30b, _0x422c8a);
}
const _0x2d0206 = require('gradient-string');
const _0x8a62fb = require('line-by-line');
const _0x55d7a2 = JSON['parse'](_0x2161a2['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x274a58 = _0x12d25c['service']['langue_shop'];
const _0x24baaf = _0x55d7a2[_0x274a58];
let _0x1b954f = _0x12d25c['service']['name_shop'];
let _0x587b93 = _0x12d25c['service']['banner'];
let _0x4167e5 = _0x12d25c['apikey'];
let _0x569bf6 = _0x12d25c['bot']['clientid'];
let _0x117420 = _0x12d25c['bot']['token'];
let _0x325391 = _0x12d25c['bot']['clientsecret'];
let _0x50793e;
async function _0x5e0811() {
    return new Promise((_0x20f91f, _0x2057d7) => {
        _0x4b6ced((_0x4ef09f, _0x20be89) => {
            if (_0x4ef09f) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x2057d7(_0x4ef09f);
            } else {
                _0x50793e = _0x20be89;
                _0x20f91f(_0x50793e);
            }
        });
    });
}
async function _0x37db64(_0x5148e0) {
    const _0x546e59 = _0x5148e0['split'](':');
    if (_0x546e59['length'] === 0x3) {
        return _0x546e59[0x2];
    } else if (_0x546e59['length'] === 0x1) {
        return _0x5148e0;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x5148e0);
        return _0x5148e0;
    }
}
async function _0x40ca24(_0x10a6f9) {
    if (_0x10a6f9['length'] <= 0x6) {
        return _0x10a6f9;
    }
    let _0x62d36 = Math['min'](0xf, Math['ceil'](_0x10a6f9['length'] * 0.2));
    let _0x5abe40 = Math['min'](0xf, Math['ceil'](_0x10a6f9['length'] * 0.1));
    const _0x2b50d4 = _0x10a6f9['slice'](0x0, _0x62d36);
    const _0x2c1828 = _0x10a6f9['slice'](-_0x5abe40);
    const _0x5a8123 = _0x10a6f9['length'] - _0x62d36 - _0x5abe40;
    return '' + _0x2b50d4 + '*'['repeat'](_0x5a8123 - 0x14) + _0x2c1828;
}
async function _0x26e4b5(_0x572459, _0x1fe97b) {
    let _0xa466e3 = await _0x40ca24(_0x572459);
    let _0x1bafa5 = await _0x35de95(_0x1fe97b);
    let _0x4a46ad = '';
    if (!_0x2161a2['existsSync'](_0x1fe97b)) {
        console['log'](_0x2d0206['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x1447d2 = [];
    const _0x2412a4 = new _0x8a62fb(_0x1fe97b);
    _0x2412a4['on']('error', _0x5044e1 => {
        console['error'](_0x2d0206['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x5044e1));
    });
    _0x2412a4['on']('line', _0x26e6c6 => {
        const _0x458349 = _0x26e6c6['trim']();
        if (!_0x458349['includes'](_0x572459['trim']())) {
            _0x1447d2['push'](_0x458349);
        }
    });
    _0x2412a4['on']('end', async () => {
        if (_0x1447d2['length'] === 0x0 && _0x1bafa5 !== 0x1) {
            console['log'](_0x2d0206['retro']('⛔\x20-\x20Le\x20token\x20' + _0xa466e3 + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x1bafa5 !== 0x1) {
            _0x4a46ad = _0x1447d2['join'](_0x77011a['EOL']);
        } else {
            _0x4a46ad = '';
        }
        _0x2161a2['writeFile'](_0x1fe97b, _0x4a46ad, _0x21032d => {
            if (_0x21032d) {
                console['error'](_0x2d0206['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x21032d));
                return;
            }
            console['log'](_0x2d0206['retro']('🗑️\x20-\x20Le\x20token\x20' + _0xa466e3 + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x35de95(_0x21f40e) {
    try {
        const _0x2a2f2c = _0x2161a2['readFileSync'](_0x21f40e, 'utf-8');
        const _0x42fb8f = _0x2a2f2c['split']('\x0a');
        const _0x328134 = _0x42fb8f['filter'](_0x3ec10e => _0x3ec10e['trim']()['length'] > 0x0);
        return _0x328134['length'];
    } catch (_0x4e1643) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x4e1643);
        return 0x0;
    }
}
async function _0x486993(_0x3dd5c7) {
    if (_0x3dd5c7['length'] <= 0x6) {
        return _0x3dd5c7;
    }
    const _0x1c6e06 = _0x3dd5c7['slice'](0x0, 0x6);
    const _0x15b004 = _0x3dd5c7['slice'](-0xc);
    const _0x5d058d = _0x3dd5c7['length'] - _0x1c6e06['length'] - _0x15b004['length'];
    const _0x484a13 = '' + _0x1c6e06 + '*'['repeat'](_0x5d058d - 0x2d) + _0x15b004;
    return _0x484a13;
}
module['exports'] = {
    'data': new _0x398cd9()['setName']('boost')['setDescription'](_0x24baaf['command']['38'])['addStringOption'](_0x16c0ea => _0x16c0ea['setName']('guildid')['setDescription'](_0x24baaf['command']['39'])['setRequired'](!![]))['addIntegerOption'](_0x3ec4da => _0x3ec4da['setName']('type')['setDescription'](_0x24baaf['command']['40'])['setRequired'](!![])['addChoice']('1\x20' + _0x24baaf['command']['3'], 0x1)['addChoice']('3\x20' + _0x24baaf['command']['3'], 0x3))['addStringOption'](_0x171801 => _0x171801['setName']('bio')['setDescription'](_0x24baaf['command']['41'])['setRequired'](!![]))['addIntegerOption'](_0x18beba => {
        _0x18beba['setName']('nombre1')['setDescription'](_0x24baaf['command']['42'])['setRequired'](!![]);
        for (let _0x4e4b5a = 0x2; _0x4e4b5a <= 0x1c; _0x4e4b5a += 0x2) {
            _0x18beba['addChoice'](_0x4e4b5a + '\x20boosts', _0x4e4b5a);
        }
        return _0x18beba;
    }),
    async 'execute'(_0x35e665) {
        await _0x5e0811();
        await _0x35e665['deferReply']();
        const _0x175f23 = _0x35e665['options']['getString']('guildid')['toLowerCase']()['trim']();
        const _0x48a497 = _0x35e665['options']['getString']('bio');
        const _0x39b61e = _0x35e665['options']['getInteger']('nombre1');
        const _0x32c621 = _0x35e665['options']['getInteger']('type');
        let _0x46719a = [
            _0x12d25c['admin']['id_1'],
            _0x12d25c['admin']['id_2'],
            _0x12d25c['admin']['id_3']
        ];
        const _0x4b8fc8 = '/stock/';
        let _0xc3215 = _0x1d0aa9['join'](__dirname, '..', _0x4b8fc8, 'stock-1m.txt');
        let _0x52ed3b = _0x1d0aa9['join'](__dirname, '..', _0x4b8fc8, 'stock-3m.txt');
        let _0x42fdb6;
        if (!_0x175f23) {
            return _0x35e665['editReply'](_0x24baaf['command']['34']);
        }
        if (!_0x39b61e) {
            return _0x35e665['editReply'](_0x24baaf['command']['35']);
        }
        if (_0x32c621 === 0x1) {
            _0x42fdb6 = _0xc3215;
        } else if (_0x32c621 === 0x3) {
            _0x42fdb6 = _0x52ed3b;
        }
        if (!_0x46719a['includes'](_0x35e665['user']['id'])) {
            const _0xefc78c = new _0x2d4f16()['addComponents'](new _0x1915df()['setLabel'](_0x24baaf['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0xf5b836 = new _0x1d8411()['setColor']('#071b47')['setTitle'](_0x24baaf['command']['27'])['setDescription'](_0x24baaf['command']['12'])['setImage'](_0x587b93)['setTimestamp']()['setFooter'](_0x1b954f + '\x20-\x20' + _0x24baaf['command']['7'] + '\x20MrX');
            return _0x35e665['editReply']({
                'embeds': [_0xf5b836],
                'components': [_0xefc78c]
            });
        }
        const _0x564e94 = await _0x3e51c4['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x4167e5 + '&machineid=' + _0x50793e + '&shopname=' + _0x1b954f + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
        if (_0x564e94['data']['success'] === ![]) {
            const _0xd3dfe1 = new _0x1d8411()['setColor']('#ff0000')['setTitle'](_0x24baaf['command']['5'])['setImage'](_0x587b93)['setTimestamp']()['setFooter']('' + _0x24baaf['command']['7'] + '\x20MrX');
            return _0x35e665['editReply']({ 'embeds': [_0xd3dfe1] });
        }
        let _0x43127b = await _0x35de95(_0x42fdb6);
        if (_0x43127b === 0x0) {
            const _0x3b9c77 = new _0x1d8411()['setColor']('#ff0000')['setTitle'](_0x24baaf['command']['33'])['setDescription'](_0x1b954f + '\x20' + _0x24baaf['command']['13'])['setImage'](_0x587b93)['setTimestamp']()['setFooter'](_0x1b954f + '\x20-\x20' + _0x24baaf['command']['7'] + '\x20MrX');
            return _0x35e665['editReply']({ 'embeds': [_0x3b9c77] });
        } else if (_0x39b61e / 0x2 > _0x43127b && _0x43127b !== _0x39b61e / 0x2) {
            const _0x216eb0 = new _0x1d8411()['setColor']('#ff0000')['setTitle'](_0x24baaf['command']['33'])['setDescription'](_0x1b954f + '\x20' + _0x24baaf['command']['67'])['setImage'](_0x587b93)['setTimestamp']()['setFooter'](_0x1b954f + '\x20-\x20' + _0x24baaf['command']['7'] + '\x20MrX');
            return _0x35e665['editReply']({ 'embeds': [_0x216eb0] });
        }
        let _0x1dded4 = 0x0;
        let _0x10ac2d = 0x0;
        const _0x940909 = 0x6;
        let _0x196f9a = [];
        let _0x5df743 = '[+]\x20' + _0x1b954f + '\x20initialisés.';
        if (_0x196f9a['length'] >= _0x940909) {
            _0x196f9a['pop']();
        }
        _0x196f9a['unshift'](_0x5df743);
        try {
            function _0x2045a0(_0x46c817, _0x462893, _0x16fc4a = 0x14) {
                const _0x13b3cf = Math['round'](_0x46c817 / _0x462893 * _0x16fc4a);
                const _0x305f05 = _0x16fc4a - _0x13b3cf;
                const _0x1a3756 = '▬'['repeat'](_0x13b3cf);
                const _0x29f1ce = '░'['repeat'](_0x305f05);
                const _0x586e0a = Math['round'](_0x46c817 / _0x462893 * 0x64);
                return '[' + _0x1a3756 + _0x29f1ce + ']\x20' + _0x586e0a + '%';
            }
            const _0x2c1b62 = _0x39b61e;
            const _0x5242d6 = new _0x1d8411()['setColor']('#0099ff')['setTitle']('🚀\x20**Boost\x20' + _0x24baaf['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20Boosts\x20' + _0x24baaf['command']['22'] + ('\x20:\x20**0/' + _0x2c1b62 + '**\x0a🔸\x20Boosts\x20') + _0x24baaf['command']['28'] + ('\x20:\x20**0/' + _0x2c1b62 + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x175f23 + '\x0a\x0a**' + _0x24baaf['command']['32'] + ('\x20:**\x0a' + _0x2045a0(0x0, _0x2c1b62)))['addFields'](_0x196f9a['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x196f9a['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x587b93)['setTimestamp']()['setFooter'](_0x1b954f + '\x20-\x20' + _0x24baaf['command']['7'] + '\x20MrX');
            const _0xac4712 = await _0x35e665['editReply']({ 'embeds': [_0x5242d6] });
            const _0x151f0f = _0x2161a2['readFileSync'](_0x42fdb6)['toString']()['split']('\x0a');
            const _0x8d7a88 = await _0x3e51c4['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x4167e5 + '&machineid=' + _0x50793e + '&shopname=' + _0x1b954f + '&mode=CHECK_BOT&guildid=' + _0x175f23 + '&bio=' + _0x48a497 + '&clientid=' + _0x569bf6 + '&botclientsecret=' + _0x325391 + '&bottoken=' + _0x117420, {}, { 'timeout': 0xf4240 });
            if (_0x8d7a88['data']['erreur'] === 'bot') {
                _0x196f9a['unshift']('⛔\x20-\x20' + _0x24baaf['command']['84']);
                const _0x2138ab = new _0x2d4f16()['addComponents'](new _0x1915df()['setLabel'](_0x24baaf['command']['31'])['setURL']('https://discord.com/api/oauth2/authorize?client_id=' + _0x569bf6 + '&permissions=8&scope=bot&guild_id=' + _0x175f23)['setStyle']('LINK'));
                const _0x5c39a9 = new _0x1d8411()['setColor']('#071b47')['setTitle'](_0x24baaf['command']['29'])['setDescription']('🔹\x20Boosts\x20' + _0x24baaf['command']['22'] + ('\x20:\x20**0/' + _0x2c1b62 + '**\x0a🔸\x20Boosts\x20') + _0x24baaf['command']['28'] + ('\x20:\x20**0/' + _0x2c1b62 + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x175f23 + '\x0a\x0a**' + _0x24baaf['command']['32'] + ('\x20:**\x0a' + _0x2045a0(0x0, _0x2c1b62)))['addFields'](_0x196f9a['length'] > 0x0 ? {
                    'name': 'Logs',
                    'value': '```\x0a' + _0x196f9a['join']('\x0a') + '\x0a```',
                    'inline': ![]
                } : [])['setImage'](_0x587b93)['setTimestamp']()['setFooter'](_0x1b954f + '\x20-\x20' + _0x24baaf['command']['7'] + '\x20MrX');
                return await _0x35e665['editReply']({
                    'embeds': [_0x5c39a9],
                    'components': [_0x2138ab]
                });
            }
            for (let _0x59d85f = 0x0; _0x59d85f < _0x2c1b62 / 0x2; _0x59d85f++) {
                let _0x551ec9 = 0x0;
                async function _0x34303e(_0x33c910 = 0x0) {
                    try {
                        const _0x29d7be = _0x151f0f[_0x59d85f];
                        const _0x4d72ac = await _0x37db64(_0x29d7be);
                        const _0x3c0655 = await _0x3e51c4['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x4167e5 + '&machineid=' + _0x50793e + '&shopname=' + _0x1b954f + '&mode=BOOST&guildid=' + _0x175f23 + '&bio=' + _0x48a497 + '&clientid=' + _0x569bf6 + '&botclientsecret=' + _0x325391 + '&bottoken=' + _0x117420 + '&tokenboost=' + _0x4d72ac, {}, { 'timeout': 0xf4240 });
                        if (_0x196f9a['length'] >= _0x940909) {
                            _0x196f9a['pop']();
                        }
                        if (_0x3c0655['data']['erreur'] === 'Invalid\x20license\x20key') {
                            _0x196f9a['unshift']('⛔\x20-\x20' + _0x24baaf['command']['82']);
                        } else if (_0x3c0655['data']['erreur'] === 'HWID\x20doesn\x27t\x20match.\x20Ask\x20for\x20a\x20HWID\x20reset') {
                            _0x196f9a['unshift']('⛔\x20-\x20' + _0x24baaf['command']['83']);
                        } else if (_0x3c0655['data']['success'] === !![]) {
                            _0x196f9a['unshift']('✅\x20-\x20' + _0x24baaf['command']['81'] + '\x20:\x20' + await _0x486993(_0x4d72ac));
                            _0x1dded4++;
                            await _0x26e4b5(_0x29d7be, _0x42fdb6);
                        } else if (_0x3c0655['data']['success'] === ![]) {
                            _0x10ac2d++;
                            if (_0x3c0655['data']['erreur'] === 'invalid') {
                                _0x196f9a['unshift']('❌\x20-\x20' + _0x24baaf['command']['80'] + '\x20:\x20' + await _0x486993(_0x4d72ac));
                                await _0x26e4b5(_0x29d7be, _0x42fdb6);
                            } else if (_0x3c0655['data']['erreur'] === 'perm') {
                                _0x196f9a['unshift']('⛔\x20-\x20' + _0x24baaf['command']['79'] + '\x20:\x20' + await _0x486993(_0x4d72ac));
                                if (_0x33c910 < 0x3) {
                                    _0x33c910++;
                                    _0x196f9a['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x486993(_0x4d72ac));
                                    await _0x34303e(_0x33c910);
                                }
                            } else if (_0x3c0655['data']['erreur'] === 'used') {
                                _0x196f9a['unshift']('⚠️\x20-\x20' + _0x24baaf['command']['78'] + '\x20:\x20' + await _0x486993(_0x4d72ac));
                                await _0x26e4b5(_0x29d7be, _0x42fdb6);
                            } else {
                                _0x196f9a['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x486993(_0x4d72ac));
                                if (_0x33c910 < 0x3) {
                                    _0x33c910++;
                                    _0x196f9a['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x486993(_0x4d72ac));
                                    await _0x34303e(_0x33c910);
                                }
                            }
                        }
                        const _0x4d8c85 = new _0x1d8411()['setColor']('#0099ff')['setTitle']('🚀\x20**Boost\x20' + _0x24baaf['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20Boosts\x20' + _0x24baaf['command']['22'] + ('\x20:\x20**' + _0x1dded4 * 0x2 + '/' + _0x2c1b62 + '**\x0a🔸\x20Boosts\x20') + _0x24baaf['command']['28'] + ('\x20:\x20**' + _0x10ac2d * 0x2 + '/' + _0x2c1b62 + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x175f23 + '\x0a\x0a**' + _0x24baaf['command']['32'] + ('\x20:**\x0a' + _0x2045a0(_0x1dded4 * 0x2, _0x2c1b62)))['addFields'](_0x196f9a['length'] > 0x0 ? {
                            'name': 'Logs',
                            'value': '```\x0a' + _0x196f9a['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        } : [])['setImage'](_0x587b93)['setTimestamp']()['setFooter'](_0x1b954f + '\x20-\x20' + _0x24baaf['command']['7'] + '\x20MrX');
                        await _0xac4712['edit']({ 'embeds': [_0x4d8c85] });
                    } catch (_0x41cb25) {
                        _0x10ac2d++;
                        _0x196f9a['unshift']('⚠️\x20-\x20error\x20API');
                        console['log']('Erreur\x20API\x20contact\x20developer', _0x41cb25);
                        if (_0x33c910 < 0x3) {
                            _0x33c910++;
                            _0x196f9a['unshift']('🔄️\x20-\x20retry');
                            await _0x34303e(_0x33c910);
                        }
                    }
                }
                await _0x34303e(_0x551ec9);
            }
            if (_0x196f9a['length'] >= _0x940909) {
                _0x196f9a['pop']();
            }
            const _0x3411a5 = new _0x1d8411()['setColor'](0xff)['setTitle']('Boost\x20' + _0x24baaf['command']['21'])['setDescription']('🔹\x20Boosts\x20' + _0x24baaf['command']['22'] + ('\x20:\x20**' + _0x1dded4 * 0x2 + '/' + _0x2c1b62 + '**\x0a🔸\x20Boosts\x20') + _0x24baaf['command']['28'] + ('\x20:\x20**' + _0x10ac2d * 0x2 + '/' + _0x2c1b62 + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x175f23 + '\x0a\x0a**' + _0x24baaf['command']['32'] + ('\x20:**\x0a' + _0x2045a0(_0x1dded4 * 0x2, _0x2c1b62)))['addFields'](_0x196f9a['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x196f9a['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x587b93)['setTimestamp']()['setFooter'](_0x1b954f + '\x20-\x20' + _0x24baaf['command']['7'] + '\x20MrX');
            await _0x35e665['editReply']({ 'embeds': [_0x3411a5] });
            const _0x5c2769 = await _0x35e665['client']['guilds']['fetch'](_0x175f23);
            await new Promise(_0x143c98 => setTimeout(_0x143c98, 0x1388));
            if (_0x175f23 !== _0x35e665['guild']['id'])
                return await _0x5c2769['leave']();
        } catch (_0x53af6) {
            _0x196f9a['unshift']('⚠️\x20-\x20error\x20API');
            console['log']('Erreur\x20API\x20contact\x20developer', _0x53af6);
            const _0x28bffc = new _0x1d8411()['setColor']('#071b47')['setTitle'](_0x24baaf['command']['19'])['setDescription'](_0x24baaf['command']['20'])['addFields'](_0x196f9a['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x196f9a['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x587b93)['setTimestamp']()['setFooter'](_0x1b954f + '\x20-\x20' + _0x24baaf['command']['7'] + '\x20MrX');
            await _0x35e665['editReply']({ 'embeds': [_0x28bffc] });
            await new Promise(_0x21c453 => setTimeout(_0x21c453, 0x1388));
            const _0x25eb26 = await _0x35e665['client']['guilds']['fetch'](_0x175f23);
            if (_0x175f23 !== _0x35e665['guild']['id'])
                return await _0x25eb26['leave']();
        }
    }
};
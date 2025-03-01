function _0x3160(_0x56ee4a, _0x900544) {
    const _0x4956a9 = _0x4956();
    _0x3160 = function (_0x3160bf, _0x199fa1) {
        _0x3160bf = _0x3160bf - 0xb6;
        let _0x3819d7 = _0x4956a9[_0x3160bf];
        return _0x3819d7;
    };
    return _0x3160(_0x56ee4a, _0x900544);
}
(function (_0x44c92b, _0x57b267) {
    const _0x3f0173 = _0x3160;
    const _0x5b447b = _0x44c92b();
    while (!![]) {
        try {
            const _0x1abdc7 = -parseInt(_0x3f0173(0xbb)) / 0x1 * (parseInt(_0x3f0173(0xb6)) / 0x2) + -parseInt(_0x3f0173(0xb8)) / 0x3 * (parseInt(_0x3f0173(0xba)) / 0x4) + parseInt(_0x3f0173(0xb7)) / 0x5 + parseInt(_0x3f0173(0xc2)) / 0x6 * (parseInt(_0x3f0173(0xbd)) / 0x7) + parseInt(_0x3f0173(0xbf)) / 0x8 * (-parseInt(_0x3f0173(0xc1)) / 0x9) + parseInt(_0x3f0173(0xc0)) / 0xa * (-parseInt(_0x3f0173(0xbc)) / 0xb) + parseInt(_0x3f0173(0xb9)) / 0xc * (parseInt(_0x3f0173(0xbe)) / 0xd);
            if (_0x1abdc7 === _0x57b267) {
                break;
            } else {
                _0x5b447b['push'](_0x5b447b['shift']());
            }
        } catch (_0xb5e2d5) {
            _0x5b447b['push'](_0x5b447b['shift']());
        }
    }
}(_0x4956, 0xe6040));
const {SlashCommandBuilder: _0x4b1ef1} = require('@discordjs/builders');
const {
    MessageEmbed: _0x53a234,
    MessageActionRow: _0x4050e0,
    MessageButton: _0x4f24db
} = require('discord.js');
const {performOperation: _0x211832} = require('../required/performOp');
const _0x2d45 = require('axios');
const _0x250656 = require('os');
const _0x366579 = require('../config.json');
const _0x50f8b6 = require('fs');
const _0x4086af = require('path');
const _0x42e7cc = require('gradient-string');
const _0x503f8d = require('line-by-line');
const _0x423d4f = JSON['parse'](_0x50f8b6['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x377b0b = _0x366579['service']['langue_shop'];
const _0xe6eed8 = _0x423d4f[_0x377b0b];
let _0x2b3e5b = _0x366579['service']['name_shop'];
let _0x50302e = _0x366579['service']['banner'];
let _0x2e2273 = _0x366579['apikey'];
let _0x138f04 = _0x366579['bot']['clientid'];
function _0x4956() {
    const _0x26942e = [
        '160WYRgAR',
        '9837549ljEBNp',
        '1761582OgwaqH',
        '435422eaCObW',
        '5800365adJAxa',
        '3QaCyqv',
        '41889132HDdznM',
        '4977384fakKaG',
        '3vCTZIB',
        '897424EtVZOD',
        '14TlrnYz',
        '13xXnloN',
        '8RraSVS'
    ];
    _0x4956 = function () {
        return _0x26942e;
    };
    return _0x4956();
}
let _0x54e274 = _0x366579['bot']['token'];
let _0x3cb6df = _0x366579['bot']['clientsecret'];
let _0x22807f;
async function _0x1f6689() {
    return new Promise((_0x43d7b9, _0x21ca56) => {
        _0x211832((_0x2e2fd3, _0x1cdf55) => {
            if (_0x2e2fd3) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x21ca56(_0x2e2fd3);
            } else {
                _0x22807f = _0x1cdf55;
                _0x43d7b9(_0x22807f);
            }
        });
    });
}
async function _0x584df1(_0x4a77d3) {
    const _0x366d1c = _0x4a77d3['split'](':');
    if (_0x366d1c['length'] === 0x3) {
        return _0x366d1c[0x2];
    } else if (_0x366d1c['length'] === 0x1) {
        return _0x4a77d3;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x4a77d3);
        return _0x4a77d3;
    }
}
async function _0x3fc864(_0x35c352) {
    if (_0x35c352['length'] <= 0x6) {
        return _0x35c352;
    }
    const _0x4b41ac = _0x35c352['slice'](0x0, 0x14);
    const _0x34e5cd = _0x35c352['slice'](-0xa);
    const _0x331b64 = _0x35c352['length'] - _0x4b41ac['length'] - _0x34e5cd['length'];
    const _0x50008a = '' + _0x4b41ac + '*'['repeat'](_0x331b64 - 0x46) + _0x34e5cd;
    return _0x50008a;
}
async function _0x201198(_0x4ed3dc, _0x21a9bc) {
    let _0x4f686c = await _0x3fc864(_0x4ed3dc);
    let _0x4c08cc = await _0x339f9e(_0x21a9bc);
    let _0x378b86 = '';
    if (!_0x50f8b6['existsSync'](_0x21a9bc)) {
        console['log'](_0x42e7cc['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x20be1e = [];
    const _0xfe6934 = new _0x503f8d(_0x21a9bc);
    _0xfe6934['on']('error', _0x125aeb => {
        console['error'](_0x42e7cc['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x125aeb));
    });
    _0xfe6934['on']('line', _0x87775 => {
        const _0x2f9b39 = _0x87775['trim']();
        if (!_0x2f9b39['includes'](_0x4ed3dc['trim']())) {
            _0x20be1e['push'](_0x2f9b39);
        }
    });
    _0xfe6934['on']('end', async () => {
        if (_0x20be1e['length'] === 0x0 && _0x4c08cc !== 0x1) {
            console['log'](_0x42e7cc['retro']('⛔\x20-\x20Le\x20token\x20' + _0x4f686c + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x4c08cc !== 0x1) {
            _0x378b86 = _0x20be1e['join'](_0x250656['EOL']);
        } else {
            _0x378b86 = '';
        }
        _0x50f8b6['writeFile'](_0x21a9bc, _0x378b86, _0x27b56e => {
            if (_0x27b56e) {
                console['error'](_0x42e7cc['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x27b56e));
                return;
            }
            console['log'](_0x42e7cc['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x4f686c + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x339f9e(_0x452ae1) {
    try {
        const _0x1db58f = _0x50f8b6['readFileSync'](_0x452ae1, 'utf-8');
        const _0x37aaae = _0x1db58f['split']('\x0a');
        const _0x112485 = _0x37aaae['filter'](_0x1f1f6a => _0x1f1f6a['trim']()['length'] > 0x0);
        return _0x112485['length'];
    } catch (_0x4477da) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x4477da);
        return 0x0;
    }
}
async function _0x2f67ea(_0x4a5f1b) {
    if (_0x4a5f1b['length'] <= 0x6) {
        return _0x4a5f1b;
    }
    const _0x3dd4d1 = _0x4a5f1b['slice'](0x0, 0x6);
    const _0x40ee52 = _0x4a5f1b['slice'](-0xc);
    const _0x51f0d2 = _0x4a5f1b['length'] - _0x3dd4d1['length'] - _0x40ee52['length'];
    const _0x730067 = '' + _0x3dd4d1 + '*'['repeat'](_0x51f0d2 - 0x2d) + _0x40ee52;
    return _0x730067;
}
module['exports'] = {
    'data': new _0x4b1ef1()['setName']('boost')['setDescription'](_0xe6eed8['command']['38'])['addStringOption'](_0x32f3fe => _0x32f3fe['setName']('guildid')['setDescription'](_0xe6eed8['command']['39'])['setRequired'](!![]))['addIntegerOption'](_0x46012a => _0x46012a['setName']('type')['setDescription'](_0xe6eed8['command']['40'])['setRequired'](!![])['addChoice']('1\x20' + _0xe6eed8['command']['3'], 0x1)['addChoice']('3\x20' + _0xe6eed8['command']['3'], 0x3))['addStringOption'](_0x509cd6 => _0x509cd6['setName']('bio')['setDescription'](_0xe6eed8['command']['41'])['setRequired'](!![]))['addIntegerOption'](_0x31edad => {
        _0x31edad['setName']('nombre1')['setDescription'](_0xe6eed8['command']['42'])['setRequired'](!![]);
        for (let _0x448620 = 0x2; _0x448620 <= 0x1c; _0x448620 += 0x2) {
            _0x31edad['addChoice'](_0x448620 + '\x20boosts', _0x448620);
        }
        return _0x31edad;
    }),
    async 'execute'(_0x3ad638) {
        await _0x1f6689();
        await _0x3ad638['deferReply']();
        const _0x509fb6 = _0x3ad638['options']['getString']('guildid')['toLowerCase']()['trim']();
        const _0x1fd54a = _0x3ad638['options']['getString']('bio');
        const _0x23e8a2 = _0x3ad638['options']['getInteger']('nombre1');
        const _0x1c8598 = _0x3ad638['options']['getInteger']('type');
        let _0x3b2add = [
            _0x366579['admin']['id_1'],
            _0x366579['admin']['id_2'],
            _0x366579['admin']['id_3']
        ];
        const _0x229c9c = '/stock/';
        let _0x15d3fb = _0x4086af['join'](__dirname, '..', _0x229c9c, 'stock-1m.txt');
        let _0x29bed3 = _0x4086af['join'](__dirname, '..', _0x229c9c, 'stock-3m.txt');
        let _0x50e260;
        if (!_0x509fb6) {
            return _0x3ad638['editReply'](_0xe6eed8['command']['34']);
        }
        if (!_0x23e8a2) {
            return _0x3ad638['editReply'](_0xe6eed8['command']['35']);
        }
        if (_0x1c8598 === 0x1) {
            _0x50e260 = _0x15d3fb;
        } else if (_0x1c8598 === 0x3) {
            _0x50e260 = _0x29bed3;
        }
        if (!_0x3b2add['includes'](_0x3ad638['user']['id'])) {
            const _0x3b7dcb = new _0x4050e0()['addComponents'](new _0x4f24db()['setLabel'](_0xe6eed8['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x29b99c = new _0x53a234()['setColor']('#071b47')['setTitle'](_0xe6eed8['command']['27'])['setDescription'](_0xe6eed8['command']['12'])['setImage'](_0x50302e)['setTimestamp']()['setFooter'](_0x2b3e5b + '\x20-\x20' + _0xe6eed8['command']['7'] + '\x20MrX');
            return _0x3ad638['editReply']({
                'embeds': [_0x29b99c],
                'components': [_0x3b7dcb]
            });
        }
        const _0x49c014 = await _0x2d45['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x2e2273 + '&machineid=' + _0x22807f + '&shopname=' + _0x2b3e5b + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
        if (_0x49c014['data']['success'] === ![]) {
            const _0xac7bb = new _0x53a234()['setColor']('#ff0000')['setTitle'](_0xe6eed8['command']['5'])['setImage'](_0x50302e)['setTimestamp']()['setFooter']('' + _0xe6eed8['command']['7'] + '\x20MrX');
            return _0x3ad638['editReply']({ 'embeds': [_0xac7bb] });
        }
        let _0x22b51c = await _0x339f9e(_0x50e260);
        if (_0x22b51c === 0x0) {
            const _0xd497eb = new _0x53a234()['setColor']('#ff0000')['setTitle'](_0xe6eed8['command']['33'])['setDescription'](_0x2b3e5b + '\x20' + _0xe6eed8['command']['13'])['setImage'](_0x50302e)['setTimestamp']()['setFooter'](_0x2b3e5b + '\x20-\x20' + _0xe6eed8['command']['7'] + '\x20MrX');
            return _0x3ad638['editReply']({ 'embeds': [_0xd497eb] });
        } else if (_0x23e8a2 / 0x2 > _0x22b51c && _0x22b51c !== _0x23e8a2 / 0x2) {
            const _0x2db152 = new _0x53a234()['setColor']('#ff0000')['setTitle'](_0xe6eed8['command']['33'])['setDescription'](_0x2b3e5b + '\x20' + _0xe6eed8['command']['67'])['setImage'](_0x50302e)['setTimestamp']()['setFooter'](_0x2b3e5b + '\x20-\x20' + _0xe6eed8['command']['7'] + '\x20MrX');
            return _0x3ad638['editReply']({ 'embeds': [_0x2db152] });
        }
        let _0x45643b = 0x0;
        let _0x28dbaf = 0x0;
        const _0x3a7612 = 0x6;
        let _0x479ed3 = [];
        let _0x41847a = '[+]\x20' + _0x2b3e5b + '\x20initialisés.';
        if (_0x479ed3['length'] >= _0x3a7612) {
            _0x479ed3['pop']();
        }
        _0x479ed3['unshift'](_0x41847a);
        try {
            function _0x3912ad(_0x2a7999, _0x16212d, _0x14fe4c = 0x14) {
                const _0xb85f72 = Math['round'](_0x2a7999 / _0x16212d * _0x14fe4c);
                const _0x2e5ce9 = _0x14fe4c - _0xb85f72;
                const _0xbe8799 = '▬'['repeat'](_0xb85f72);
                const _0x21db2b = '░'['repeat'](_0x2e5ce9);
                const _0x587070 = Math['round'](_0x2a7999 / _0x16212d * 0x64);
                return '[' + _0xbe8799 + _0x21db2b + ']\x20' + _0x587070 + '%';
            }
            const _0x5e762b = _0x23e8a2;
            const _0x218e89 = new _0x53a234()['setColor']('#0099ff')['setTitle']('🚀\x20**Boost\x20' + _0xe6eed8['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20Boosts\x20' + _0xe6eed8['command']['22'] + ('\x20:\x20**0/' + _0x5e762b + '**\x0a🔸\x20Boosts\x20') + _0xe6eed8['command']['28'] + ('\x20:\x20**0/' + _0x5e762b + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x509fb6 + '\x0a\x0a**' + _0xe6eed8['command']['32'] + ('\x20:**\x0a' + _0x3912ad(0x0, _0x5e762b)))['addFields'](_0x479ed3['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x479ed3['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x50302e)['setTimestamp']()['setFooter'](_0x2b3e5b + '\x20-\x20' + _0xe6eed8['command']['7'] + '\x20MrX');
            const _0x38215c = await _0x3ad638['editReply']({ 'embeds': [_0x218e89] });
            const _0x3368e7 = _0x50f8b6['readFileSync'](_0x50e260)['toString']()['split']('\x0a');
            const _0x5043d7 = await _0x2d45['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x2e2273 + '&machineid=' + _0x22807f + '&shopname=' + _0x2b3e5b + '&mode=CHECK_BOT&guildid=' + _0x509fb6 + '&bio=' + _0x1fd54a + '&clientid=' + _0x138f04 + '&botclientsecret=' + _0x3cb6df + '&bottoken=' + _0x54e274, {}, { 'timeout': 0xf4240 });
            if (_0x5043d7['data']['erreur'] === 'bot') {
                _0x479ed3['unshift']('⛔\x20-\x20' + _0xe6eed8['command']['84']);
                const _0x3a332f = new _0x4050e0()['addComponents'](new _0x4f24db()['setLabel'](_0xe6eed8['command']['31'])['setURL']('https://discord.com/api/oauth2/authorize?client_id=' + _0x138f04 + '&permissions=8&scope=bot&guild_id=' + _0x509fb6)['setStyle']('LINK'));
                const _0x3d47a0 = new _0x53a234()['setColor']('#071b47')['setTitle'](_0xe6eed8['command']['29'])['setDescription']('🔹\x20Boosts\x20' + _0xe6eed8['command']['22'] + ('\x20:\x20**0/' + _0x5e762b + '**\x0a🔸\x20Boosts\x20') + _0xe6eed8['command']['28'] + ('\x20:\x20**0/' + _0x5e762b + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x509fb6 + '\x0a\x0a**' + _0xe6eed8['command']['32'] + ('\x20:**\x0a' + _0x3912ad(0x0, _0x5e762b)))['addFields'](_0x479ed3['length'] > 0x0 ? {
                    'name': 'Logs',
                    'value': '```\x0a' + _0x479ed3['join']('\x0a') + '\x0a```',
                    'inline': ![]
                } : [])['setImage'](_0x50302e)['setTimestamp']()['setFooter'](_0x2b3e5b + '\x20-\x20' + _0xe6eed8['command']['7'] + '\x20MrX');
                return await _0x3ad638['editReply']({
                    'embeds': [_0x3d47a0],
                    'components': [_0x3a332f]
                });
            }
            for (let _0x20ae82 = 0x0; _0x20ae82 < _0x5e762b / 0x2; _0x20ae82++) {
                let _0x298348 = 0x0;
                async function _0x44a23b(_0x591218 = 0x0) {
                    try {
                        const _0x3682d1 = _0x3368e7[_0x20ae82];
                        const _0x1abcf4 = await _0x584df1(_0x3682d1);
                        const _0x455761 = await _0x2d45['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x2e2273 + '&machineid=' + _0x22807f + '&shopname=' + _0x2b3e5b + '&mode=BOOST&guildid=' + _0x509fb6 + '&bio=' + _0x1fd54a + '&clientid=' + _0x138f04 + '&botclientsecret=' + _0x3cb6df + '&bottoken=' + _0x54e274 + '&tokenboost=' + _0x1abcf4, {}, { 'timeout': 0xf4240 });
                        if (_0x479ed3['length'] >= _0x3a7612) {
                            _0x479ed3['pop']();
                        }
                        if (_0x455761['data']['erreur'] === 'Invalid\x20license\x20key') {
                            _0x479ed3['unshift']('⛔\x20-\x20' + _0xe6eed8['command']['82']);
                        } else if (_0x455761['data']['erreur'] === 'HWID\x20doesn\x27t\x20match.\x20Ask\x20for\x20a\x20HWID\x20reset') {
                            _0x479ed3['unshift']('⛔\x20-\x20' + _0xe6eed8['command']['83']);
                        } else if (_0x455761['data']['success'] === !![]) {
                            _0x479ed3['unshift']('✅\x20-\x20' + _0xe6eed8['command']['81'] + '\x20:\x20' + await _0x2f67ea(_0x1abcf4));
                            _0x45643b++;
                            await _0x201198(_0x3682d1, _0x50e260);
                        } else if (_0x455761['data']['success'] === ![]) {
                            _0x28dbaf++;
                            if (_0x455761['data']['erreur'] === 'invalid') {
                                _0x479ed3['unshift']('❌\x20-\x20' + _0xe6eed8['command']['80'] + '\x20:\x20' + await _0x2f67ea(_0x1abcf4));
                                await _0x201198(_0x3682d1, _0x50e260);
                            } else if (_0x455761['data']['erreur'] === 'perm') {
                                _0x479ed3['unshift']('⛔\x20-\x20' + _0xe6eed8['command']['79'] + '\x20:\x20' + await _0x2f67ea(_0x1abcf4));
                                if (_0x591218 < 0x3) {
                                    _0x591218++;
                                    _0x479ed3['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x2f67ea(_0x1abcf4));
                                    await _0x44a23b(_0x591218);
                                }
                            } else if (_0x455761['data']['erreur'] === 'used') {
                                _0x479ed3['unshift']('⚠️\x20-\x20' + _0xe6eed8['command']['78'] + '\x20:\x20' + await _0x2f67ea(_0x1abcf4));
                                await _0x201198(_0x3682d1, _0x50e260);
                            } else {
                                _0x479ed3['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x2f67ea(_0x1abcf4));
                                if (_0x591218 < 0x3) {
                                    _0x591218++;
                                    _0x479ed3['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x2f67ea(_0x1abcf4));
                                    await _0x44a23b(_0x591218);
                                }
                            }
                        }
                        const _0x2680ba = new _0x53a234()['setColor']('#0099ff')['setTitle']('🚀\x20**Boost\x20' + _0xe6eed8['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20Boosts\x20' + _0xe6eed8['command']['22'] + ('\x20:\x20**' + _0x45643b * 0x2 + '/' + _0x5e762b + '**\x0a🔸\x20Boosts\x20') + _0xe6eed8['command']['28'] + ('\x20:\x20**' + _0x28dbaf * 0x2 + '/' + _0x5e762b + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x509fb6 + '\x0a\x0a**' + _0xe6eed8['command']['32'] + ('\x20:**\x0a' + _0x3912ad(_0x45643b * 0x2, _0x5e762b)))['addFields'](_0x479ed3['length'] > 0x0 ? {
                            'name': 'Logs',
                            'value': '```\x0a' + _0x479ed3['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        } : [])['setImage'](_0x50302e)['setTimestamp']()['setFooter'](_0x2b3e5b + '\x20-\x20' + _0xe6eed8['command']['7'] + '\x20MrX');
                        await _0x38215c['edit']({ 'embeds': [_0x2680ba] });
                    } catch (_0x57870c) {
                        _0x28dbaf++;
                        _0x479ed3['unshift']('⚠️\x20-\x20error\x20API');
                        console['log']('Erreur\x20API\x20contact\x20developer', _0x57870c);
                        if (_0x591218 < 0x3) {
                            _0x591218++;
                            _0x479ed3['unshift']('🔄️\x20-\x20retry');
                            await _0x44a23b(_0x591218);
                        }
                    }
                }
                await _0x44a23b(_0x298348);
            }
            if (_0x479ed3['length'] >= _0x3a7612) {
                _0x479ed3['pop']();
            }
            const _0x865304 = new _0x53a234()['setColor'](0xff)['setTitle']('Boost\x20' + _0xe6eed8['command']['21'])['setDescription']('🔹\x20Boosts\x20' + _0xe6eed8['command']['22'] + ('\x20:\x20**' + _0x45643b * 0x2 + '/' + _0x5e762b + '**\x0a🔸\x20Boosts\x20') + _0xe6eed8['command']['28'] + ('\x20:\x20**' + _0x28dbaf * 0x2 + '/' + _0x5e762b + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x509fb6 + '\x0a\x0a**' + _0xe6eed8['command']['32'] + ('\x20:**\x0a' + _0x3912ad(_0x45643b * 0x2, _0x5e762b)))['addFields'](_0x479ed3['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x479ed3['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x50302e)['setTimestamp']()['setFooter'](_0x2b3e5b + '\x20-\x20' + _0xe6eed8['command']['7'] + '\x20MrX');
            await _0x3ad638['editReply']({ 'embeds': [_0x865304] });
            const _0x2cc430 = await _0x3ad638['client']['guilds']['fetch'](_0x509fb6);
            await new Promise(_0x17e42d => setTimeout(_0x17e42d, 0x1388));
            if (_0x509fb6 !== _0x3ad638['guild']['id'])
                return await _0x2cc430['leave']();
        } catch (_0x4d5f85) {
            _0x479ed3['unshift']('⚠️\x20-\x20error\x20API');
            console['log']('Erreur\x20API\x20contact\x20developer', _0x4d5f85);
            const _0x4bb2e7 = new _0x53a234()['setColor']('#071b47')['setTitle'](_0xe6eed8['command']['19'])['setDescription'](_0xe6eed8['command']['20'])['addFields'](_0x479ed3['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x479ed3['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x50302e)['setTimestamp']()['setFooter'](_0x2b3e5b + '\x20-\x20' + _0xe6eed8['command']['7'] + '\x20MrX');
            await _0x3ad638['editReply']({ 'embeds': [_0x4bb2e7] });
            await new Promise(_0x2e2986 => setTimeout(_0x2e2986, 0x1388));
            const _0x463182 = await _0x3ad638['client']['guilds']['fetch'](_0x509fb6);
            if (_0x509fb6 !== _0x3ad638['guild']['id'])
                return await _0x463182['leave']();
        }
    }
};
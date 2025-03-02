(function (_0x2ec253, _0x1360a5) {
    const _0x475528 = _0x295c;
    const _0x5d16e8 = _0x2ec253();
    while (!![]) {
        try {
            const _0xc0449a = parseInt(_0x475528(0x145)) / 0x1 + -parseInt(_0x475528(0x144)) / 0x2 * (parseInt(_0x475528(0x140)) / 0x3) + parseInt(_0x475528(0x146)) / 0x4 * (parseInt(_0x475528(0x143)) / 0x5) + -parseInt(_0x475528(0x13f)) / 0x6 + -parseInt(_0x475528(0x13c)) / 0x7 * (-parseInt(_0x475528(0x13e)) / 0x8) + parseInt(_0x475528(0x141)) / 0x9 * (-parseInt(_0x475528(0x13d)) / 0xa) + parseInt(_0x475528(0x142)) / 0xb;
            if (_0xc0449a === _0x1360a5) {
                break;
            } else {
                _0x5d16e8['push'](_0x5d16e8['shift']());
            }
        } catch (_0x1835c1) {
            _0x5d16e8['push'](_0x5d16e8['shift']());
        }
    }
}(_0x1d49, 0xee619));
const {SlashCommandBuilder: _0x5f191b} = require('@discordjs/builders');
const {
    MessageEmbed: _0x316333,
    MessageActionRow: _0x5eb69b,
    MessageButton: _0x3caecb
} = require('discord.js');
const {performOperation: _0x5e385d} = require('../required/performOp');
const _0x4c31c3 = require('axios');
const _0x4efdfc = require('os');
const _0xe0be4e = require('../config.json');
function _0x1d49() {
    const _0x5265c8 = [
        '6485344JyVDgY',
        '1251528IWwatW',
        '2894463XNXRgY',
        '155322ZxcRzi',
        '12821677psZjDX',
        '25VZVbrV',
        '4ZOUthi',
        '1457296bgOBIt',
        '1180720iTdKbV',
        '7lxTcmS',
        '1040vXsyHa'
    ];
    _0x1d49 = function () {
        return _0x5265c8;
    };
    return _0x1d49();
}
const _0x51aa10 = require('fs');
const _0x15952a = require('path');
const _0x28e616 = require('gradient-string');
const _0x445ba9 = require('lodash');
const _0x2fd66e = JSON['parse'](_0x51aa10['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x4c4e7e = _0xe0be4e['service']['langue_shop'];
const _0x196dc2 = _0x2fd66e[_0x4c4e7e];
let _0x356cf6 = _0xe0be4e['service']['name_shop'];
let _0x5d14e2 = _0xe0be4e['service']['banner'];
let _0x453bb0 = _0xe0be4e['apikey'];
let _0x4e700c;
async function _0x48f178() {
    return new Promise((_0x4fc6e7, _0x1da3dd) => {
        _0x5e385d((_0x28effe, _0x11d28d) => {
            if (_0x28effe) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x1da3dd(_0x28effe);
            } else {
                _0x4e700c = _0x11d28d;
                _0x4fc6e7(_0x4e700c);
            }
        });
    });
}
async function _0xe284da(_0x140668) {
    const _0x45ac8f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let _0x23aa95 = '';
    for (let _0x3b9b7e = 0x0; _0x3b9b7e < _0x140668; _0x3b9b7e++) {
        const _0x492576 = Math['floor'](Math['random']() * _0x45ac8f['length']);
        _0x23aa95 += _0x45ac8f['charAt'](_0x492576);
    }
    return _0x23aa95;
}
async function _0x5261b1(_0x5a2f85) {
    const _0x5c5c4c = _0x5a2f85['split'](':');
    if (_0x5c5c4c['length'] === 0x3) {
        return _0x5c5c4c[0x2];
    } else if (_0x5c5c4c['length'] === 0x1) {
        return _0x5a2f85;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x5a2f85);
        return _0x5a2f85;
    }
}
async function _0x54dbbb(_0x5141c4) {
    if (_0x5141c4['length'] <= 0x6) {
        return _0x5141c4;
    }
    const _0x1c25bd = _0x5141c4['slice'](0x0, 0x14);
    const _0x179c33 = _0x5141c4['slice'](-0xa);
    const _0x2398fe = _0x5141c4['length'] - _0x1c25bd['length'] - _0x179c33['length'];
    const _0x51511b = '' + _0x1c25bd + '*'['repeat'](_0x2398fe - 0x46) + _0x179c33;
    return _0x51511b;
}
async function _0x19fa33(_0x5493a9) {
    try {
        const _0x1cd2e3 = _0x51aa10['readFileSync'](_0x5493a9, 'utf-8');
        const _0x10d53e = _0x1cd2e3['split']('\x0a');
        const _0x1d7606 = _0x10d53e['filter'](_0x2635bd => _0x2635bd['trim']()['length'] > 0x0);
        return _0x1d7606['length'];
    } catch (_0x3cc294) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x3cc294);
        return 0x0;
    }
}
async function _0x39a0c2(_0x317e33) {
    if (_0x317e33['length'] <= 0x6) {
        return _0x317e33;
    }
    const _0x1f0a04 = _0x317e33['slice'](0x0, 0x6);
    const _0x27bf1a = _0x317e33['slice'](-0xc);
    const _0x13ba0c = _0x317e33['length'] - _0x1f0a04['length'] - _0x27bf1a['length'];
    const _0x3df58d = '' + _0x1f0a04 + '*'['repeat'](_0x13ba0c - 0x2d) + _0x27bf1a;
    return _0x3df58d;
}
function _0x295c(_0x647d6a, _0x4a47b3) {
    const _0x1d4999 = _0x1d49();
    _0x295c = function (_0x295cf1, _0x4a04cc) {
        _0x295cf1 = _0x295cf1 - 0x13c;
        let _0x38145f = _0x1d4999[_0x295cf1];
        return _0x38145f;
    };
    return _0x295c(_0x647d6a, _0x4a47b3);
}
async function _0x4d2ffc(_0x269405, _0x26e9cb, _0x17f95b = 0x0) {
    try {
        let _0x28fafa = await _0xe284da(0xa);
        const _0x148dac = _0x51aa10['readFileSync'](_0x269405, 'utf8');
        let _0x45a332 = _0x148dac['split']('\x0a');
        _0x45a332['shift']();
        let _0x344f85 = _0x45a332['join']('\x0a');
        const _0x55a023 = await _0x4c31c3['post']('http://pastes.io/api/paste/create', {
            'content': _0x344f85,
            'status': 0x2,
            'expire': '1W',
            'title': _0x28fafa + '-Ch3Ch3r_L0G',
            'password': _0x26e9cb
        }, {
            'headers': {
                'Accept': 'application/json',
                'Authorization': 'Bearer\x2040d403ae833e6eec3dbe0fe2f219863d5df1767c51073e2e438e1bf4993711f3'
            }
        });
        if (_0x55a023['data']) {
            if (_0x55a023['data']['success']) {
                return _0x55a023['data']['success']['paste_url'];
            } else if (_0x55a023['data']['error']) {
                if (_0x17f95b < 0x3) {
                    await new Promise(_0x29c976 => setTimeout(_0x29c976, 0xbb8));
                    return await _0x4d2ffc(_0x269405, _0x26e9cb, _0x17f95b + 0x1);
                } else {
                    return 'Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste.';
                }
            }
        }
    } catch (_0x3d36a7) {
        console['error']('Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste:\x20', _0x3d36a7);
        return null;
    }
}
module['exports'] = {
    'data': new _0x5f191b()['setName']('checker')['setDescription'](_0x196dc2['command']['108'])['addStringOption'](_0x67548c => _0x67548c['setName']('url')['setDescription'](_0x196dc2['command']['70'])['setRequired'](!![])),
    async 'execute'(_0x158138) {
        await _0x48f178();
        await _0x158138['deferReply']();
        let _0x5b1c6d = [
            _0xe0be4e['admin']['id_1'],
            _0xe0be4e['admin']['id_2'],
            _0xe0be4e['admin']['id_3']
        ];
        if (!_0x5b1c6d['includes'](_0x158138['user']['id'])) {
            const _0x1cbb0d = new _0x5eb69b()['addComponents'](new _0x3caecb()['setLabel'](_0x196dc2['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x4ca5b4 = new _0x316333()['setColor']('#071b47')['setTitle'](_0x196dc2['command']['27'])['setDescription'](_0x196dc2['command']['12'])['setImage'](_0x5d14e2)['setTimestamp']()['setFooter'](_0x356cf6 + '\x20-\x20' + _0x196dc2['command']['7'] + '\x20MrX');
            return await _0x158138['editReply']({
                'embeds': [_0x4ca5b4],
                'components': [_0x1cbb0d]
            });
        }
        const _0x73e5f1 = await _0x4c31c3['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x453bb0 + '&machineid=' + _0x4e700c + '&shopname=' + _0x356cf6 + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
        if (_0x73e5f1['data']['success'] === ![]) {
            const _0x5025f2 = new _0x316333()['setColor']('#ff0000')['setTitle'](_0x196dc2['command']['5'])['setImage'](_0x5d14e2)['setTimestamp']()['setFooter']('' + _0x196dc2['command']['7'] + '\x20MrX');
            return _0x158138['editReply']({ 'embeds': [_0x5025f2] });
        }
        const _0x15f050 = _0x158138['options']['getString']('url');
        try {
            const _0x49e2f5 = _0x445ba9['replace'](_0x15f050, 'https://paste.ee/p/', '');
            const _0x3d81c6 = await _0x4c31c3['get']('https://paste.ee/d/' + _0x49e2f5, { 'headers': { 'User-agent': 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20WOW64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20discord/1.0.9001\x20Chrome/83.0.4103.122\x20Electron/9.3.5\x20Safari/537.36' } });
            const _0x56bf40 = _0x3d81c6['data'];
            const _0x4350c9 = new Set([..._0x56bf40['split']('\x0a')]);
            const _0x5d30e1 = [..._0x4350c9]['filter'](_0x2cfd82 => _0x2cfd82['trim']() !== '')['length'];
            const _0x5ae432 = [..._0x4350c9]['filter'](_0xc9a529 => _0xc9a529['trim']() !== '');
            const _0x540018 = _0x5ae432['length'];
            const _0x24b22e = _0x5d30e1 - _0x540018;
            let _0xd59d32 = 0x0;
            let _0x286e59 = 0x0;
            let _0x160548 = 0x0;
            let _0x5f4895 = 0x0;
            let _0x3df124 = 0x0;
            let _0x1996c4 = 0x0;
            let _0x323568 = 0x0;
            let _0x366fc6 = 0x0;
            let _0x2bb8e3 = 0x0;
            const _0x20836c = 0x4;
            let _0x5f0974 = [];
            let _0xe60ba7 = _0x5d30e1;
            let _0x2bb7a2 = '[+]\x20' + _0x356cf6 + '\x20initialisés.';
            if (_0x5f0974['length'] >= _0x20836c) {
                _0x5f0974['pop']();
            }
            _0x5f0974['unshift'](_0x2bb7a2);
            const _0x27993c = new _0x316333()['setColor']('#0099ff')['setTitle']('🚀\x20**Ch3ck3r\x20T0k3n\x20' + _0x196dc2['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20' + _0x196dc2['command']['109'] + ('\x20:\x20**0/' + _0xe60ba7 + '**\x0a🔸\x20') + _0x196dc2['command']['80'] + ('\x20:\x20**0/' + _0xe60ba7 + '**\x0a'))['addFields'](_0x5f0974['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x5f0974['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x5d14e2)['setTimestamp']()['setFooter'](_0x356cf6 + '\x20-\x20' + _0x196dc2['command']['7'] + '\x20MrX');
            const _0x4d28e9 = await _0x158138['editReply']({ 'embeds': [_0x27993c] });
            let _0x210405 = [];
            let _0x2d24a3 = [];
            _0x2d24a3['push']('Checker\x20started\x20dev\x20by\x20MrX');
            _0x210405['push']('Checker\x20started\x20dev\x20By\x20MrX');
            _0x2d24a3['push']('Checker\x20started\x20dev\x20by\x20MrX');
            _0x210405['push']('Checker\x20started\x20dev\x20By\x20MrX');
            for (const _0x2be1a6 of _0x5ae432) {
                try {
                    const _0x3bf031 = _0x2be1a6;
                    const _0xc889f6 = await _0x5261b1(_0x3bf031);
                    const _0x3253f0 = await _0x4c31c3['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x453bb0 + '&machineid=' + _0x4e700c + '&shopname=' + _0x356cf6 + '&mode=CHECKER&tokenboost=' + _0xc889f6, {}, { 'timeout': 0xf4240 });
                    if (_0x5f0974['length'] >= _0x20836c) {
                        _0x5f0974['pop']();
                    }
                    if (_0x3253f0['data']['erreur'] === 'Invalid\x20license\x20key') {
                        _0x5f0974['unshift']('⛔\x20-\x20' + _0x196dc2['command']['82']);
                    } else if (_0x3253f0['data']['erreur'] === 'HWID\x20doesn\x27t\x20match.\x20Ask\x20for\x20a\x20HWID\x20reset') {
                        _0x5f0974['unshift']('⛔\x20-\x20' + _0x196dc2['command']['83']);
                    } else if (_0x3253f0['data']['success'] === !![]) {
                        let _0xa71d9a = _0x3253f0['data']['data']['data']['boosts'];
                        let _0x48479f = _0x3253f0['data']['data']['data']['boostedGuilds'];
                        let _0xe64a70 = _0x3253f0['data']['data']['data']['nitro'];
                        let _0x208c87 = _0x3253f0['data']['data']['data']['subscribed'];
                        let _0x39fdaf = _0x3253f0['data']['data']['data']['nitroDaysLeft'];
                        let _0x536442 = _0x3253f0['data']['data']['data']['redeemableNitro'];
                        let _0xa6db16 = _0x3253f0['data']['data']['data']['lockStatus'];
                        let _0x334794 = _0x3253f0['data']['data']['data']['ageCompte'];
                        let _0x22406c = _0x3253f0['data']['data']['data']['emailVerified'];
                        let _0x2aafab = _0x3253f0['data']['data']['data']['phoneVerified'];
                        if (_0xa71d9a === '2_BOOSTS_USED') {
                            _0x160548++;
                        } else if (_0xa71d9a === '2_BOOSTS_AVAILABLE' && _0x536442 !== 'REDEEMABLE_NITRO_AVAILABLE') {
                            _0x5f4895++;
                        } else if (_0x536442 === 'REDEEMABLE_NITRO_AVAILABLE') {
                            _0x323568++;
                        }
                        if (_0xa6db16 === 'LOCKED') {
                            _0x3df124++;
                        } else {
                            _0x1996c4++;
                        }
                        if (_0x2aafab === 'PHONE_VERIFIED') {
                            _0x2bb8e3++;
                        }
                        if (_0x22406c === 'EMAIL_VERIFIED') {
                            _0x366fc6++;
                        }
                        _0x210405['push']('[' + _0xa71d9a + ']\x20[' + _0xe64a70 + ']\x20' + (_0x48479f ? '[' + _0x48479f + ']\x20' : '') + ('[' + _0xa6db16 + ']\x20[' + _0x208c87 + ']\x20[' + _0x39fdaf + ']\x20[' + _0x334794 + ']\x20[' + _0x22406c + ']\x20[' + _0x2aafab + ']\x20:\x20') + _0x3bf031);
                        _0x2d24a3['push'](_0x3bf031);
                        _0x5f0974['unshift']('✅\x20-\x20[' + _0xa71d9a + ']\x20[' + _0xe64a70 + ']\x20' + (_0x48479f ? '[' + _0x48479f + ']\x20' : '') + ('[' + _0xa6db16 + ']\x20[' + _0x208c87 + ']\x20[' + _0x39fdaf + ']\x20[' + _0x334794 + ']\x20[' + _0x22406c + ']\x20[' + _0x2aafab + ']\x20:\x20') + await _0x39a0c2(_0xc889f6));
                        _0xd59d32++;
                    } else if (_0x3253f0['data']['success'] === ![]) {
                        _0x286e59++;
                        if (_0x3253f0['data']['erreur'] === 'invalid') {
                            _0x5f0974['unshift']('❌\x20-\x20' + _0x196dc2['command']['80'] + '\x20:\x20' + await _0x39a0c2(_0xc889f6));
                        } else {
                            _0x5f0974['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x39a0c2(_0xc889f6));
                        }
                    }
                    const _0x5d8e1a = new _0x316333()['setColor']('#0099ff')['setTitle']('🚀\x20**Ch3ck3r\x20T0k3n\x20' + _0x196dc2['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20' + _0x196dc2['command']['109'] + ('\x20:\x20**' + _0xd59d32 + '/' + _0xe60ba7 + '**\x0a🔸\x20') + _0x196dc2['command']['80'] + ('\x20:\x20**' + _0x286e59 + '/' + _0xe60ba7 + '**\x0a'))['addFields'](_0x5f0974['length'] > 0x0 ? {
                        'name': 'Logs',
                        'value': '```\x0a' + _0x5f0974['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    } : [], {
                        'name': 'Boosts\x20Used',
                        'value': '**' + _0x160548 * 0x2 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Boosts\x20Unused',
                        'value': '**' + _0x5f4895 * 0x2 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Locked',
                        'value': '**' + _0x3df124 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Unlocked',
                        'value': '**' + _0x1996c4 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Redeemable\x20Nitro',
                        'value': '**' + _0x323568 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Phone\x20Verified',
                        'value': '**' + _0x2bb8e3 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Email\x20Verified',
                        'value': '**' + _0x366fc6 + '**',
                        'inline': !![]
                    })['setImage'](_0x5d14e2)['setTimestamp']()['setFooter'](_0x356cf6 + '\x20-\x20' + _0x196dc2['command']['7'] + '\x20MrX');
                    await _0x4d28e9['edit']({ 'embeds': [_0x5d8e1a] });
                } catch (_0x1c0cf2) {
                    console['log']('Erreur\x20API\x20contact\x20developer', _0x1c0cf2);
                    _0x286e59++;
                    _0x5f0974['unshift']('⚠️\x20-\x20error\x20API');
                }
            }
            ;
            _0x2d24a3['push']('Checker\x20finished\x20dev\x20by\x20MrX');
            _0x210405['push']('Checker\x20finished\x20dev\x20By\x20MrX');
            const _0x3ba541 = await _0xe284da(0xa);
            const _0x51d422 = await _0xe284da(0xa);
            const _0x214018 = await _0xe284da(0xa);
            const _0x1c0e5a = await _0xe284da(0xa);
            const _0x12c73d = _0x15952a['join'](_0x4efdfc['tmpdir'](), 'boosts_logs_all_' + _0x3ba541 + '.txt');
            const _0x127335 = _0x15952a['join'](_0x4efdfc['tmpdir'](), 'boosts_logs_onlytoken_' + _0x51d422 + '.txt');
            _0x51aa10['writeFileSync'](_0x12c73d, _0x210405['join']('\x0a'), 'utf-8');
            console['log'](_0x28e616['retro']('[' + new Date()['toISOString']() + ']\x20🔗\x20-\x20[CHECKER]\x20Fichier\x20temporaire\x20créé\x20à:\x20' + _0x12c73d));
            let _0x684341 = await _0x4d2ffc(_0x12c73d, _0x214018);
            console['log'](_0x28e616['retro']('[' + new Date()['toISOString']() + ']\x20🔗\x20-\x20[CHECKER]\x20Lien\x20de\x20la\x20paste,\x20Expire\x20dans\x201W\x20:\x20' + _0x684341));
            _0x51aa10['writeFileSync'](_0x127335, _0x2d24a3['join']('\x0a'), 'utf-8');
            console['log'](_0x28e616['retro']('[' + new Date()['toISOString']() + ']\x20🔗\x20-\x20[CHECKER]\x20Fichier\x20temporaire\x20créé\x20à:\x20' + _0x127335));
            await new Promise(_0x840391 => setTimeout(_0x840391, 0xbb8));
            let _0x48b2dd = await _0x4d2ffc(_0x127335, _0x1c0e5a);
            console['log'](_0x28e616['retro']('[' + new Date()['toISOString']() + ']\x20🔗\x20-\x20[CHECKER]\x20Lien\x20de\x20la\x20paste,\x20Expire\x20dans\x201W\x20:\x20' + _0x48b2dd));
            await _0x158138['followUp']({ 'content': _0x196dc2['command']['110'] + _0x684341 + '\x0a' + _0x196dc2['command']['118'] + _0x48b2dd + '\x0a\x20Password\x201\x20link\x20:\x20' + _0x214018 + '\x0a\x20Password\x202\x20link\x20:\x20' + _0x1c0e5a });
            const _0x1c0369 = new _0x316333()['setColor']('#0099ff')['setTitle']('🚀\x20**Ch3ck3r\x20T0k3n\x20' + _0x196dc2['command']['21'] + '**\x20🚀')['setDescription']('🔹\x20' + _0x196dc2['command']['109'] + ('\x20:\x20**' + _0xd59d32 + '/' + _0xe60ba7 + '**\x0a🔸\x20') + _0x196dc2['command']['80'] + ('\x20:\x20**' + _0x286e59 + '/' + _0xe60ba7 + '**\x0a'))['addFields'](_0x5f0974['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x5f0974['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [], {
                'name': 'Boosts\x20Used',
                'value': '**' + _0x160548 * 0x2 + '**',
                'inline': !![]
            }, {
                'name': 'Boosts\x20Unused',
                'value': '**' + _0x5f4895 * 0x2 + '**',
                'inline': !![]
            }, {
                'name': 'Locked',
                'value': '**' + _0x3df124 + '**',
                'inline': !![]
            }, {
                'name': 'Unlocked',
                'value': '**' + _0x1996c4 + '**',
                'inline': !![]
            }, {
                'name': 'Redeemable\x20Nitro',
                'value': '**' + _0x323568 + '**',
                'inline': !![]
            }, {
                'name': 'Phone\x20Verified',
                'value': '**' + _0x2bb8e3 + '**',
                'inline': !![]
            }, {
                'name': 'Email\x20Verified',
                'value': '**' + _0x366fc6 + '**',
                'inline': !![]
            })['setImage'](_0x5d14e2)['setTimestamp']()['setFooter'](_0x356cf6 + '\x20-\x20' + _0x196dc2['command']['7'] + '\x20MrX');
            await _0x4d28e9['edit']({ 'embeds': [_0x1c0369] });
            setTimeout(() => {
                _0x51aa10['unlinkSync'](_0x12c73d);
                _0x51aa10['unlinkSync'](_0x127335);
                return console['log'](_0x28e616['retro']('[' + new Date()['toISOString']() + ']\x20🗑️\x20-\x20[CHECKER]\x20Fichier\x20temporaire\x20supprimé'));
            }, 0x1388);
        } catch (_0x17baa9) {
            console['log'](_0x17baa9);
            await _0x158138['editReply'](_0x196dc2['command']['77']);
        }
    }
};
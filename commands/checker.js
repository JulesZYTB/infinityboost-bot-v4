(function (_0x2f819e, _0x4e4399) {
    const _0x1828e4 = _0x1791;
    const _0x2422c2 = _0x2f819e();
    while (!![]) {
        try {
            const _0x5c21e4 = parseInt(_0x1828e4(0xfb)) / 0x1 + parseInt(_0x1828e4(0xf6)) / 0x2 * (-parseInt(_0x1828e4(0xff)) / 0x3) + parseInt(_0x1828e4(0xfa)) / 0x4 + parseInt(_0x1828e4(0x100)) / 0x5 * (-parseInt(_0x1828e4(0xf9)) / 0x6) + parseInt(_0x1828e4(0xfd)) / 0x7 * (-parseInt(_0x1828e4(0xf8)) / 0x8) + -parseInt(_0x1828e4(0xfc)) / 0x9 * (-parseInt(_0x1828e4(0xfe)) / 0xa) + -parseInt(_0x1828e4(0xf7)) / 0xb;
            if (_0x5c21e4 === _0x4e4399) {
                break;
            } else {
                _0x2422c2['push'](_0x2422c2['shift']());
            }
        } catch (_0x39370e) {
            _0x2422c2['push'](_0x2422c2['shift']());
        }
    }
}(_0x3010, 0xc87f1));
const {SlashCommandBuilder: _0x4ccfc4} = require('@discordjs/builders');
const {
    MessageEmbed: _0x105c6d,
    MessageActionRow: _0x56a60e,
    MessageButton: _0x2aec63
} = require('discord.js');
const {performOperation: _0x5bbe33} = require('../required/performOp');
const _0x218ecc = require('axios');
const _0xeb56f8 = require('os');
const _0x385d9d = require('../config.json');
const _0x230ad7 = require('fs');
const _0x1f67e8 = require('path');
const _0x358975 = require('gradient-string');
const _0x571649 = require('lodash');
const _0x5951f7 = JSON['parse'](_0x230ad7['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x3a519b = _0x385d9d['service']['langue_shop'];
const _0x33ae6e = _0x5951f7[_0x3a519b];
let _0x142e47 = _0x385d9d['service']['name_shop'];
function _0x1791(_0x24b9bb, _0x2961ff) {
    const _0x3010bf = _0x3010();
    _0x1791 = function (_0x17916e, _0xdaaef1) {
        _0x17916e = _0x17916e - 0xf6;
        let _0x406e71 = _0x3010bf[_0x17916e];
        return _0x406e71;
    };
    return _0x1791(_0x24b9bb, _0x2961ff);
}
let _0x8c4e3a = _0x385d9d['service']['banner'];
let _0x3f0ec7 = _0x385d9d['apikey'];
let _0x467f20;
async function _0x30fe6f() {
    return new Promise((_0xc49259, _0x4f577c) => {
        _0x5bbe33((_0x4cb3d, _0x2499e5) => {
            if (_0x4cb3d) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x4f577c(_0x4cb3d);
            } else {
                _0x467f20 = _0x2499e5;
                _0xc49259(_0x467f20);
            }
        });
    });
}
async function _0x36d7ad(_0xa236bb) {
    const _0x10f5bb = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let _0x65ccc7 = '';
    for (let _0x352f4f = 0x0; _0x352f4f < _0xa236bb; _0x352f4f++) {
        const _0x59c0bd = Math['floor'](Math['random']() * _0x10f5bb['length']);
        _0x65ccc7 += _0x10f5bb['charAt'](_0x59c0bd);
    }
    return _0x65ccc7;
}
async function _0x54e978(_0x5dcff7) {
    const _0x38a7aa = _0x5dcff7['split'](':');
    if (_0x38a7aa['length'] === 0x3) {
        return _0x38a7aa[0x2];
    } else if (_0x38a7aa['length'] === 0x1) {
        return _0x5dcff7;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x5dcff7);
        return _0x5dcff7;
    }
}
async function _0x5ac0b6(_0xe93378) {
    if (_0xe93378['length'] <= 0x6) {
        return _0xe93378;
    }
    const _0x3edc04 = _0xe93378['slice'](0x0, 0x6);
    const _0x3f3f6e = _0xe93378['slice'](-0xc);
    const _0x540bd3 = _0xe93378['length'] - _0x3edc04['length'] - _0x3f3f6e['length'];
    const _0x18e7b9 = '' + _0x3edc04 + '*'['repeat'](_0x540bd3 - 0x2d) + _0x3f3f6e;
    return _0x18e7b9;
}
async function _0x469730(_0x2df6d4, _0x4e5cd7, _0x51b847 = 0x0) {
    try {
        let _0x2153da = await _0x36d7ad(0xa);
        const _0x4360b5 = _0x230ad7['readFileSync'](_0x2df6d4, 'utf8');
        let _0x1a2499 = _0x4360b5['split']('\x0a');
        _0x1a2499['shift']();
        let _0x46e732 = _0x1a2499['join']('\x0a');
        const _0x76ff1b = await _0x218ecc['post']('http://pastes.io/api/paste/create', {
            'content': _0x46e732,
            'status': 0x2,
            'expire': '1W',
            'title': _0x2153da + '-Ch3Ch3r_L0G',
            'password': _0x4e5cd7
        }, {
            'headers': {
                'Accept': 'application/json',
                'Authorization': 'Bearer\x2040d403ae833e6eec3dbe0fe2f219863d5df1767c51073e2e438e1bf4993711f3'
            }
        });
        if (_0x76ff1b['data']) {
            if (_0x76ff1b['data']['success']) {
                return _0x76ff1b['data']['success']['paste_url'];
            } else if (_0x76ff1b['data']['error']) {
                if (_0x51b847 < 0x3) {
                    await new Promise(_0x42c9f2 => setTimeout(_0x42c9f2, 0xbb8));
                    return await _0x469730(_0x2df6d4, _0x4e5cd7, _0x51b847 + 0x1);
                } else {
                    return 'Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste.';
                }
            }
        }
    } catch (_0x4e3518) {
        console['error']('Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste:\x20', _0x4e3518);
        return null;
    }
}
module['exports'] = {
    'data': new _0x4ccfc4()['setName']('checker')['setDescription'](_0x33ae6e['command']['108'])['addStringOption'](_0x466469 => _0x466469['setName']('url')['setDescription'](_0x33ae6e['command']['70'])['setRequired'](!![])),
    async 'execute'(_0x32170b) {
        await _0x30fe6f();
        await _0x32170b['deferReply']();
        let _0x13a573 = [
            _0x385d9d['admin']['id_1'],
            _0x385d9d['admin']['id_2'],
            _0x385d9d['admin']['id_3']
        ];
        if (!_0x13a573['includes'](_0x32170b['user']['id'])) {
            const _0x5b962e = new _0x56a60e()['addComponents'](new _0x2aec63()['setLabel'](_0x33ae6e['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x47dca8 = new _0x105c6d()['setColor']('#071b47')['setTitle'](_0x33ae6e['command']['27'])['setDescription'](_0x33ae6e['command']['12'])['setImage'](_0x8c4e3a)['setTimestamp']()['setFooter'](_0x142e47 + '\x20-\x20' + _0x33ae6e['command']['7'] + '\x20MrX');
            return await _0x32170b['editReply']({
                'embeds': [_0x47dca8],
                'components': [_0x5b962e]
            });
        }
        const _0x28d833 = await _0x218ecc['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x3f0ec7 + '&machineid=' + _0x467f20 + '&shopname=' + _0x142e47 + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
        if (_0x28d833['data']['success'] === ![]) {
            const _0x5820fd = new _0x105c6d()['setColor']('#ff0000')['setTitle'](_0x33ae6e['command']['5'])['setImage'](_0x8c4e3a)['setTimestamp']()['setFooter']('' + _0x33ae6e['command']['7'] + '\x20MrX');
            return _0x32170b['editReply']({ 'embeds': [_0x5820fd] });
        }
        const _0x39f6f5 = _0x32170b['options']['getString']('url');
        try {
            const _0x31e828 = _0x571649['replace'](_0x39f6f5, 'https://paste.ee/p/', '');
            const _0x79c49c = await _0x218ecc['get']('https://paste.ee/d/' + _0x31e828, { 'headers': { 'User-agent': 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20WOW64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20discord/1.0.9001\x20Chrome/83.0.4103.122\x20Electron/9.3.5\x20Safari/537.36' } });
            const _0x4c294a = _0x79c49c['data'];
            const _0x115482 = new Set([..._0x4c294a['split']('\x0a')]);
            const _0x23991c = [..._0x115482]['filter'](_0x50069a => _0x50069a['trim']() !== '')['length'];
            const _0x5c7ed3 = [..._0x115482]['filter'](_0x513fb9 => _0x513fb9['trim']() !== '');
            const _0x20a33b = _0x5c7ed3['length'];
            const _0x5ec7cf = _0x23991c - _0x20a33b;
            let _0x3a5391 = 0x0;
            let _0xc6f316 = 0x0;
            let _0x6e0ebb = 0x0;
            let _0x24f84a = 0x0;
            let _0x3370a1 = 0x0;
            let _0x22fc4f = 0x0;
            let _0x484eb5 = 0x0;
            let _0x5f09d0 = 0x0;
            let _0x4654c9 = 0x0;
            const _0x1e0bbc = 0x4;
            let _0x11b20c = [];
            let _0x5c4078 = _0x23991c;
            let _0x3a6788 = '[+]\x20' + _0x142e47 + '\x20initialisés.';
            if (_0x11b20c['length'] >= _0x1e0bbc) {
                _0x11b20c['pop']();
            }
            _0x11b20c['unshift'](_0x3a6788);
            const _0x3b1efa = new _0x105c6d()['setColor']('#0099ff')['setTitle']('🚀\x20**Ch3ck3r\x20T0k3n\x20' + _0x33ae6e['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20' + _0x33ae6e['command']['109'] + ('\x20:\x20**0/' + _0x5c4078 + '**\x0a🔸\x20') + _0x33ae6e['command']['80'] + ('\x20:\x20**0/' + _0x5c4078 + '**\x0a'))['addFields'](_0x11b20c['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x11b20c['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x8c4e3a)['setTimestamp']()['setFooter'](_0x142e47 + '\x20-\x20' + _0x33ae6e['command']['7'] + '\x20MrX');
            const _0x5b8141 = await _0x32170b['editReply']({ 'embeds': [_0x3b1efa] });
            let _0x505917 = [];
            let _0x3a118a = [];
            _0x3a118a['push']('Checker\x20started\x20dev\x20by\x20MrX');
            _0x505917['push']('Checker\x20started\x20dev\x20By\x20MrX');
            _0x3a118a['push']('Checker\x20started\x20dev\x20by\x20MrX');
            _0x505917['push']('Checker\x20started\x20dev\x20By\x20MrX');
            for (const _0x4a0193 of _0x5c7ed3) {
                try {
                    const _0x4a7a0a = _0x4a0193;
                    const _0x3cc64c = await _0x54e978(_0x4a7a0a);
                    const _0x555cc4 = await _0x218ecc['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x3f0ec7 + '&machineid=' + _0x467f20 + '&shopname=' + _0x142e47 + '&mode=CHECKER&tokenboost=' + _0x3cc64c, {}, { 'timeout': 0xf4240 });
                    if (_0x11b20c['length'] >= _0x1e0bbc) {
                        _0x11b20c['pop']();
                    }
                    if (_0x555cc4['data']['erreur'] === 'Invalid\x20license\x20key') {
                        _0x11b20c['unshift']('⛔\x20-\x20' + _0x33ae6e['command']['82']);
                    } else if (_0x555cc4['data']['erreur'] === 'HWID\x20doesn\x27t\x20match.\x20Ask\x20for\x20a\x20HWID\x20reset') {
                        _0x11b20c['unshift']('⛔\x20-\x20' + _0x33ae6e['command']['83']);
                    } else if (_0x555cc4['data']['success'] === !![]) {
                        let _0x566df0 = _0x555cc4['data']['data']['data']['boosts'];
                        let _0x4e53ac = _0x555cc4['data']['data']['data']['boostedGuilds'];
                        let _0x571610 = _0x555cc4['data']['data']['data']['nitro'];
                        let _0x8478a3 = _0x555cc4['data']['data']['data']['subscribed'];
                        let _0x5c0d90 = _0x555cc4['data']['data']['data']['nitroDaysLeft'];
                        let _0x5e43d0 = _0x555cc4['data']['data']['data']['redeemableNitro'];
                        let _0x5e6fe1 = _0x555cc4['data']['data']['data']['lockStatus'];
                        let _0x44c809 = _0x555cc4['data']['data']['data']['ageCompte'];
                        let _0x259a4b = _0x555cc4['data']['data']['data']['emailVerified'];
                        let _0x3fc9a9 = _0x555cc4['data']['data']['data']['phoneVerified'];
                        if (_0x566df0 === '2_BOOSTS_USED') {
                            _0x6e0ebb++;
                        } else if (_0x566df0 === '2_BOOSTS_AVAILABLE' && _0x5e43d0 !== 'REDEEMABLE_NITRO_AVAILABLE') {
                            _0x24f84a++;
                        } else if (_0x5e43d0 === 'REDEEMABLE_NITRO_AVAILABLE') {
                            _0x484eb5++;
                        }
                        if (_0x5e6fe1 === 'LOCKED') {
                            _0x3370a1++;
                        } else {
                            _0x22fc4f++;
                        }
                        if (_0x3fc9a9 === 'PHONE_VERIFIED') {
                            _0x4654c9++;
                        }
                        if (_0x259a4b === 'EMAIL_VERIFIED') {
                            _0x5f09d0++;
                        }
                        _0x505917['push']('[' + _0x566df0 + ']\x20[' + _0x571610 + ']\x20' + (_0x4e53ac ? '[' + _0x4e53ac + ']\x20' : '') + ('[' + _0x5e6fe1 + ']\x20[' + _0x8478a3 + ']\x20[' + _0x5c0d90 + ']\x20[' + _0x44c809 + ']\x20[' + _0x259a4b + ']\x20[' + _0x3fc9a9 + ']\x20:\x20') + _0x4a7a0a);
                        _0x3a118a['push'](_0x4a7a0a);
                        _0x11b20c['unshift']('✅\x20-\x20[' + _0x566df0 + ']\x20[' + _0x571610 + ']\x20' + (_0x4e53ac ? '[' + _0x4e53ac + ']\x20' : '') + ('[' + _0x5e6fe1 + ']\x20[' + _0x8478a3 + ']\x20[' + _0x5c0d90 + ']\x20[' + _0x44c809 + ']\x20[' + _0x259a4b + ']\x20[' + _0x3fc9a9 + ']\x20:\x20') + await _0x5ac0b6(_0x3cc64c));
                        _0x3a5391++;
                    } else if (_0x555cc4['data']['success'] === ![]) {
                        _0xc6f316++;
                        if (_0x555cc4['data']['erreur'] === 'invalid') {
                            _0x11b20c['unshift']('❌\x20-\x20' + _0x33ae6e['command']['80'] + '\x20:\x20' + await _0x5ac0b6(_0x3cc64c));
                        } else {
                            _0x11b20c['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x5ac0b6(_0x3cc64c));
                        }
                    }
                    const _0x1d6b0b = new _0x105c6d()['setColor']('#0099ff')['setTitle']('🚀\x20**Ch3ck3r\x20T0k3n\x20' + _0x33ae6e['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20' + _0x33ae6e['command']['109'] + ('\x20:\x20**' + _0x3a5391 + '/' + _0x5c4078 + '**\x0a🔸\x20') + _0x33ae6e['command']['80'] + ('\x20:\x20**' + _0xc6f316 + '/' + _0x5c4078 + '**\x0a'))['addFields'](_0x11b20c['length'] > 0x0 ? {
                        'name': 'Logs',
                        'value': '```\x0a' + _0x11b20c['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    } : [], {
                        'name': 'Boosts\x20Used',
                        'value': '**' + _0x6e0ebb * 0x2 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Boosts\x20Unused',
                        'value': '**' + _0x24f84a * 0x2 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Locked',
                        'value': '**' + _0x3370a1 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Unlocked',
                        'value': '**' + _0x22fc4f + '**',
                        'inline': !![]
                    }, {
                        'name': 'Redeemable\x20Nitro',
                        'value': '**' + _0x484eb5 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Phone\x20Verified',
                        'value': '**' + _0x4654c9 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Email\x20Verified',
                        'value': '**' + _0x5f09d0 + '**',
                        'inline': !![]
                    })['setImage'](_0x8c4e3a)['setTimestamp']()['setFooter'](_0x142e47 + '\x20-\x20' + _0x33ae6e['command']['7'] + '\x20MrX');
                    await _0x5b8141['edit']({ 'embeds': [_0x1d6b0b] });
                } catch (_0x497b15) {
                    console['log']('Erreur\x20API\x20contact\x20developer', _0x497b15);
                    _0xc6f316++;
                    _0x11b20c['unshift']('⚠️\x20-\x20error\x20API');
                }
            }
            ;
            _0x3a118a['push']('Checker\x20finished\x20dev\x20by\x20MrX');
            _0x505917['push']('Checker\x20finished\x20dev\x20By\x20MrX');
            const _0x217931 = await _0x36d7ad(0xa);
            const _0x3b1f75 = await _0x36d7ad(0xa);
            const _0x57f38a = await _0x36d7ad(0xa);
            const _0x12c1b6 = await _0x36d7ad(0xa);
            const _0x19dd2e = _0x1f67e8['join'](_0xeb56f8['tmpdir'](), 'boosts_logs_all_' + _0x217931 + '.txt');
            const _0x560522 = _0x1f67e8['join'](_0xeb56f8['tmpdir'](), 'boosts_logs_onlytoken_' + _0x3b1f75 + '.txt');
            _0x230ad7['writeFileSync'](_0x19dd2e, _0x505917['join']('\x0a'), 'utf-8');
            console['log'](_0x358975['retro']('[' + new Date()['toISOString']() + ']\x20🔗\x20-\x20[CHECKER]\x20Fichier\x20temporaire\x20créé\x20à:\x20' + _0x19dd2e));
            let _0x46f221 = await _0x469730(_0x19dd2e, _0x57f38a);
            console['log'](_0x358975['retro']('[' + new Date()['toISOString']() + ']\x20🔗\x20-\x20[CHECKER]\x20Lien\x20de\x20la\x20paste,\x20Expire\x20dans\x201W\x20:\x20' + _0x46f221));
            _0x230ad7['writeFileSync'](_0x560522, _0x3a118a['join']('\x0a'), 'utf-8');
            console['log'](_0x358975['retro']('[' + new Date()['toISOString']() + ']\x20🔗\x20-\x20[CHECKER]\x20Fichier\x20temporaire\x20créé\x20à:\x20' + _0x560522));
            await new Promise(_0x2881c7 => setTimeout(_0x2881c7, 0xbb8));
            let _0x11e63b = await _0x469730(_0x560522, _0x12c1b6);
            console['log'](_0x358975['retro']('[' + new Date()['toISOString']() + ']\x20🔗\x20-\x20[CHECKER]\x20Lien\x20de\x20la\x20paste,\x20Expire\x20dans\x201W\x20:\x20' + _0x11e63b));
            await _0x32170b['followUp']({ 'content': _0x33ae6e['command']['110'] + _0x46f221 + '\x0a' + _0x33ae6e['command']['118'] + _0x11e63b + '\x0a\x20Password\x201\x20link\x20:\x20' + _0x57f38a + '\x0a\x20Password\x202\x20link\x20:\x20' + _0x12c1b6 });
            const _0x2cc07e = new _0x105c6d()['setColor']('#0099ff')['setTitle']('🚀\x20**Ch3ck3r\x20T0k3n\x20' + _0x33ae6e['command']['21'] + '**\x20🚀')['setDescription']('🔹\x20' + _0x33ae6e['command']['109'] + ('\x20:\x20**' + _0x3a5391 + '/' + _0x5c4078 + '**\x0a🔸\x20') + _0x33ae6e['command']['80'] + ('\x20:\x20**' + _0xc6f316 + '/' + _0x5c4078 + '**\x0a'))['addFields'](_0x11b20c['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x11b20c['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [], {
                'name': 'Boosts\x20Used',
                'value': '**' + _0x6e0ebb * 0x2 + '**',
                'inline': !![]
            }, {
                'name': 'Boosts\x20Unused',
                'value': '**' + _0x24f84a * 0x2 + '**',
                'inline': !![]
            }, {
                'name': 'Locked',
                'value': '**' + _0x3370a1 + '**',
                'inline': !![]
            }, {
                'name': 'Unlocked',
                'value': '**' + _0x22fc4f + '**',
                'inline': !![]
            }, {
                'name': 'Redeemable\x20Nitro',
                'value': '**' + _0x484eb5 + '**',
                'inline': !![]
            }, {
                'name': 'Phone\x20Verified',
                'value': '**' + _0x4654c9 + '**',
                'inline': !![]
            }, {
                'name': 'Email\x20Verified',
                'value': '**' + _0x5f09d0 + '**',
                'inline': !![]
            })['setImage'](_0x8c4e3a)['setTimestamp']()['setFooter'](_0x142e47 + '\x20-\x20' + _0x33ae6e['command']['7'] + '\x20MrX');
            await _0x5b8141['edit']({ 'embeds': [_0x2cc07e] });
            setTimeout(() => {
                _0x230ad7['unlinkSync'](_0x19dd2e);
                _0x230ad7['unlinkSync'](_0x560522);
                return console['log'](_0x358975['retro']('[' + new Date()['toISOString']() + ']\x20🗑️\x20-\x20[CHECKER]\x20Fichier\x20temporaire\x20supprimé'));
            }, 0x1388);
        } catch (_0x599a23) {
            console['log'](_0x599a23);
            await _0x32170b['editReply'](_0x33ae6e['command']['77']);
        }
    }
};
function _0x3010() {
    const _0x1b7233 = [
        '2Bdupbv',
        '8207078WgRpxP',
        '184tYyXeu',
        '12HEBfwQ',
        '3243816RXydyn',
        '210198HhJkqT',
        '36BGsyqa',
        '60886zdxvUD',
        '3597220iwgqmE',
        '359097JidbbP',
        '1432390rTeXka'
    ];
    _0x3010 = function () {
        return _0x1b7233;
    };
    return _0x3010();
}
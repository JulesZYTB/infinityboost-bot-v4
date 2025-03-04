function _0x4d81() {
    const _0x4e7624 = [
        '1768mCtvoj',
        '4796fGviOa',
        '1894884GONNjm',
        '15201wdDYAW',
        '331356zaJLSX',
        '1039640KUcPHM',
        '76177pawwRR',
        '123GbjpfW',
        '3615400fwGgMZ',
        '7XOUipk'
    ];
    _0x4d81 = function () {
        return _0x4e7624;
    };
    return _0x4d81();
}
(function (_0x32cdfb, _0x88ca52) {
    const _0x5c4a4c = _0x4cdf;
    const _0x418ca6 = _0x32cdfb();
    while (!![]) {
        try {
            const _0x2e3765 = parseInt(_0x5c4a4c(0x1f1)) / 0x1 + parseInt(_0x5c4a4c(0x1ec)) / 0x2 * (parseInt(_0x5c4a4c(0x1f2)) / 0x3) + -parseInt(_0x5c4a4c(0x1ef)) / 0x4 + -parseInt(_0x5c4a4c(0x1f0)) / 0x5 + parseInt(_0x5c4a4c(0x1ed)) / 0x6 * (parseInt(_0x5c4a4c(0x1f4)) / 0x7) + parseInt(_0x5c4a4c(0x1eb)) / 0x8 * (-parseInt(_0x5c4a4c(0x1ee)) / 0x9) + parseInt(_0x5c4a4c(0x1f3)) / 0xa;
            if (_0x2e3765 === _0x88ca52) {
                break;
            } else {
                _0x418ca6['push'](_0x418ca6['shift']());
            }
        } catch (_0x385247) {
            _0x418ca6['push'](_0x418ca6['shift']());
        }
    }
}(_0x4d81, 0x2dda5));
const {SlashCommandBuilder: _0x48a2e7} = require('@discordjs/builders');
const {
    MessageEmbed: _0x16b21d,
    MessageActionRow: _0x4f7641,
    MessageButton: _0x2c4463
} = require('discord.js');
const {performOperation: _0x559e0c} = require('../required/performOp');
const _0x291335 = require('axios');
const _0x4b85e1 = require('os');
const _0x11a0ee = require('../config.json');
const _0x47fed4 = require('fs');
const _0x27bf94 = require('path');
const _0x59b74a = require('gradient-string');
const _0x11bbaa = require('lodash');
const _0x292670 = JSON['parse'](_0x47fed4['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x28f979 = _0x11a0ee['service']['langue_shop'];
const _0x1f542a = _0x292670[_0x28f979];
let _0x3aa3b5 = _0x11a0ee['service']['name_shop'];
let _0x5e5fa1 = _0x11a0ee['service']['banner'];
function _0x4cdf(_0x24fbbc, _0x43279c) {
    const _0x4d814d = _0x4d81();
    _0x4cdf = function (_0x4cdf9c, _0x4abee5) {
        _0x4cdf9c = _0x4cdf9c - 0x1eb;
        let _0x5ac9ff = _0x4d814d[_0x4cdf9c];
        return _0x5ac9ff;
    };
    return _0x4cdf(_0x24fbbc, _0x43279c);
}
let _0x55109d = _0x11a0ee['apikey'];
let _0xdfbdda;
async function _0x24ae3c() {
    return new Promise((_0x44531f, _0x515df3) => {
        _0x559e0c((_0x3c0844, _0x14d424) => {
            if (_0x3c0844) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x515df3(_0x3c0844);
            } else {
                _0xdfbdda = _0x14d424;
                _0x44531f(_0xdfbdda);
            }
        });
    });
}
async function _0x2da9cb(_0x5b4cf4) {
    const _0x31e14a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let _0x46871e = '';
    for (let _0x32c0dd = 0x0; _0x32c0dd < _0x5b4cf4; _0x32c0dd++) {
        const _0x597edf = Math['floor'](Math['random']() * _0x31e14a['length']);
        _0x46871e += _0x31e14a['charAt'](_0x597edf);
    }
    return _0x46871e;
}
async function _0x156fe5(_0x5aeac3) {
    const _0x426da5 = _0x5aeac3['split'](':');
    if (_0x426da5['length'] === 0x3) {
        return _0x426da5[0x2];
    } else if (_0x426da5['length'] === 0x1) {
        return _0x5aeac3;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x5aeac3);
        return _0x5aeac3;
    }
}
async function _0x145764(_0x46973c) {
    if (_0x46973c['length'] <= 0x6) {
        return _0x46973c;
    }
    const _0x548da8 = _0x46973c['slice'](0x0, 0x14);
    const _0x1ae1b0 = _0x46973c['slice'](-0xa);
    const _0x4d6f65 = _0x46973c['length'] - _0x548da8['length'] - _0x1ae1b0['length'];
    const _0xc5a3b4 = '' + _0x548da8 + '*'['repeat'](_0x4d6f65 - 0x46) + _0x1ae1b0;
    return _0xc5a3b4;
}
async function _0x507909(_0x56ce64) {
    try {
        const _0x19d042 = _0x47fed4['readFileSync'](_0x56ce64, 'utf-8');
        const _0x1aa03c = _0x19d042['split']('\x0a');
        const _0x5e1b7b = _0x1aa03c['filter'](_0x57327c => _0x57327c['trim']()['length'] > 0x0);
        return _0x5e1b7b['length'];
    } catch (_0x8a64d9) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x8a64d9);
        return 0x0;
    }
}
async function _0x467215(_0x2cfbb8) {
    if (_0x2cfbb8['length'] <= 0x6) {
        return _0x2cfbb8;
    }
    const _0x1d1e63 = _0x2cfbb8['slice'](0x0, 0x6);
    const _0xa93b7f = _0x2cfbb8['slice'](-0xc);
    const _0x7859d = _0x2cfbb8['length'] - _0x1d1e63['length'] - _0xa93b7f['length'];
    const _0x2bb96c = '' + _0x1d1e63 + '*'['repeat'](_0x7859d - 0x2d) + _0xa93b7f;
    return _0x2bb96c;
}
async function _0x18def9(_0x15f847, _0xf805de, _0x1378d4 = 0x0) {
    try {
        let _0x9f68ce = await _0x2da9cb(0xa);
        const _0xbf2ade = _0x47fed4['readFileSync'](_0x15f847, 'utf8');
        let _0x3291e2 = _0xbf2ade['split']('\x0a');
        _0x3291e2['shift']();
        let _0x5a8371 = _0x3291e2['join']('\x0a');
        const _0x3529c6 = await _0x291335['post']('http://pastes.io/api/paste/create', {
            'content': _0x5a8371,
            'status': 0x2,
            'expire': '1W',
            'title': _0x9f68ce + '-Ch3Ch3r_L0G',
            'password': _0xf805de
        }, {
            'headers': {
                'Accept': 'application/json',
                'Authorization': 'Bearer\x2040d403ae833e6eec3dbe0fe2f219863d5df1767c51073e2e438e1bf4993711f3'
            }
        });
        if (_0x3529c6['data']) {
            if (_0x3529c6['data']['success']) {
                return _0x3529c6['data']['success']['paste_url'];
            } else if (_0x3529c6['data']['error']) {
                if (_0x1378d4 < 0x3) {
                    await new Promise(_0x4659f3 => setTimeout(_0x4659f3, 0xbb8));
                    return await _0x18def9(_0x15f847, _0xf805de, _0x1378d4 + 0x1);
                } else {
                    return 'Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste.';
                }
            }
        }
    } catch (_0x3a0163) {
        console['error']('Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste:\x20', _0x3a0163);
        return null;
    }
}
module['exports'] = {
    'data': new _0x48a2e7()['setName']('checker')['setDescription'](_0x1f542a['command']['108'])['addStringOption'](_0x3debf3 => _0x3debf3['setName']('url')['setDescription'](_0x1f542a['command']['70'])['setRequired'](!![])),
    async 'execute'(_0x77a267) {
        await _0x24ae3c();
        await _0x77a267['deferReply']();
        let _0x58becc = [
            _0x11a0ee['admin']['id_1'],
            _0x11a0ee['admin']['id_2'],
            _0x11a0ee['admin']['id_3']
        ];
        if (!_0x58becc['includes'](_0x77a267['user']['id'])) {
            const _0x3a3016 = new _0x4f7641()['addComponents'](new _0x2c4463()['setLabel'](_0x1f542a['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x55f2a5 = new _0x16b21d()['setColor']('#071b47')['setTitle'](_0x1f542a['command']['27'])['setDescription'](_0x1f542a['command']['12'])['setImage'](_0x5e5fa1)['setTimestamp']()['setFooter'](_0x3aa3b5 + '\x20-\x20' + _0x1f542a['command']['7'] + '\x20MrX');
            return await _0x77a267['editReply']({
                'embeds': [_0x55f2a5],
                'components': [_0x3a3016]
            });
        }
        const _0x32c94a = await _0x291335['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x55109d + '&machineid=' + _0xdfbdda + '&shopname=' + _0x3aa3b5 + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
        if (_0x32c94a['data']['success'] === ![]) {
            const _0x57f85f = new _0x16b21d()['setColor']('#ff0000')['setTitle'](_0x1f542a['command']['5'])['setImage'](_0x5e5fa1)['setTimestamp']()['setFooter']('' + _0x1f542a['command']['7'] + '\x20MrX');
            return _0x77a267['editReply']({ 'embeds': [_0x57f85f] });
        }
        const _0x148f42 = _0x77a267['options']['getString']('url');
        try {
            const _0x540925 = _0x11bbaa['replace'](_0x148f42, 'https://paste.ee/p/', '');
            const _0x5a347d = await _0x291335['get']('https://paste.ee/d/' + _0x540925, { 'headers': { 'User-agent': 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20WOW64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20discord/1.0.9001\x20Chrome/83.0.4103.122\x20Electron/9.3.5\x20Safari/537.36' } });
            const _0x1ac005 = _0x5a347d['data'];
            const _0xe6449c = new Set([..._0x1ac005['split']('\x0a')]);
            const _0x3d3854 = [..._0xe6449c]['filter'](_0x499e01 => _0x499e01['trim']() !== '')['length'];
            const _0x6a21f1 = [..._0xe6449c]['filter'](_0x3060f9 => _0x3060f9['trim']() !== '');
            const _0x1e3e2a = _0x6a21f1['length'];
            const _0x3e57c2 = _0x3d3854 - _0x1e3e2a;
            let _0x1d7f2c = 0x0;
            let _0x2fd554 = 0x0;
            let _0x4bfbe7 = 0x0;
            let _0x505e82 = 0x0;
            let _0x11e05d = 0x0;
            let _0x161038 = 0x0;
            let _0x576ca0 = 0x0;
            let _0x4cf1d5 = 0x0;
            let _0x350ceb = 0x0;
            const _0x6a45a4 = 0x4;
            let _0x377786 = [];
            let _0x43c8cd = _0x3d3854;
            let _0x26c23f = '[+]\x20' + _0x3aa3b5 + '\x20initialisés.';
            if (_0x377786['length'] >= _0x6a45a4) {
                _0x377786['pop']();
            }
            _0x377786['unshift'](_0x26c23f);
            const _0xc126d5 = new _0x16b21d()['setColor']('#0099ff')['setTitle']('🚀\x20**Ch3ck3r\x20T0k3n\x20' + _0x1f542a['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20' + _0x1f542a['command']['109'] + ('\x20:\x20**0/' + _0x43c8cd + '**\x0a🔸\x20') + _0x1f542a['command']['80'] + ('\x20:\x20**0/' + _0x43c8cd + '**\x0a'))['addFields'](_0x377786['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x377786['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x5e5fa1)['setTimestamp']()['setFooter'](_0x3aa3b5 + '\x20-\x20' + _0x1f542a['command']['7'] + '\x20MrX');
            const _0x5a7788 = await _0x77a267['editReply']({ 'embeds': [_0xc126d5] });
            let _0x51364b = [];
            let _0x1f0b2d = [];
            _0x1f0b2d['push']('Checker\x20started\x20dev\x20by\x20MrX');
            _0x51364b['push']('Checker\x20started\x20dev\x20By\x20MrX');
            _0x1f0b2d['push']('Checker\x20started\x20dev\x20by\x20MrX');
            _0x51364b['push']('Checker\x20started\x20dev\x20By\x20MrX');
            for (const _0x3e3373 of _0x6a21f1) {
                try {
                    const _0xdfd3e7 = _0x3e3373;
                    const _0x1954f5 = await _0x156fe5(_0xdfd3e7);
                    const _0x1cb273 = await _0x291335['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x55109d + '&machineid=' + _0xdfbdda + '&shopname=' + _0x3aa3b5 + '&mode=CHECKER&tokenboost=' + _0x1954f5, {}, { 'timeout': 0xf4240 });
                    if (_0x377786['length'] >= _0x6a45a4) {
                        _0x377786['pop']();
                    }
                    if (_0x1cb273['data']['erreur'] === 'Invalid\x20license\x20key') {
                        _0x377786['unshift']('⛔\x20-\x20' + _0x1f542a['command']['82']);
                    } else if (_0x1cb273['data']['erreur'] === 'HWID\x20doesn\x27t\x20match.\x20Ask\x20for\x20a\x20HWID\x20reset') {
                        _0x377786['unshift']('⛔\x20-\x20' + _0x1f542a['command']['83']);
                    } else if (_0x1cb273['data']['success'] === !![]) {
                        let _0x583c23 = _0x1cb273['data']['data']['data']['boosts'];
                        let _0x1ad605 = _0x1cb273['data']['data']['data']['boostedGuilds'];
                        let _0x19f331 = _0x1cb273['data']['data']['data']['nitro'];
                        let _0x30de64 = _0x1cb273['data']['data']['data']['subscribed'];
                        let _0x31ca54 = _0x1cb273['data']['data']['data']['nitroDaysLeft'];
                        let _0x552660 = _0x1cb273['data']['data']['data']['redeemableNitro'];
                        let _0x317eb8 = _0x1cb273['data']['data']['data']['lockStatus'];
                        let _0x450ad5 = _0x1cb273['data']['data']['data']['ageCompte'];
                        let _0x35c5f4 = _0x1cb273['data']['data']['data']['emailVerified'];
                        let _0x3dfe9a = _0x1cb273['data']['data']['data']['phoneVerified'];
                        if (_0x583c23 === '2_BOOSTS_USED') {
                            _0x4bfbe7++;
                        } else if (_0x583c23 === '2_BOOSTS_AVAILABLE' && _0x552660 !== 'REDEEMABLE_NITRO_AVAILABLE') {
                            _0x505e82++;
                        } else if (_0x552660 === 'REDEEMABLE_NITRO_AVAILABLE') {
                            _0x576ca0++;
                        }
                        if (_0x317eb8 === 'LOCKED') {
                            _0x11e05d++;
                        } else {
                            _0x161038++;
                        }
                        if (_0x3dfe9a === 'PHONE_VERIFIED') {
                            _0x350ceb++;
                        }
                        if (_0x35c5f4 === 'EMAIL_VERIFIED') {
                            _0x4cf1d5++;
                        }
                        _0x51364b['push']('[' + _0x583c23 + ']\x20[' + _0x19f331 + ']\x20' + (_0x1ad605 ? '[' + _0x1ad605 + ']\x20' : '') + ('[' + _0x317eb8 + ']\x20[' + _0x30de64 + ']\x20[' + _0x31ca54 + ']\x20[' + _0x450ad5 + ']\x20[' + _0x35c5f4 + ']\x20[' + _0x3dfe9a + ']\x20:\x20') + _0xdfd3e7);
                        _0x1f0b2d['push'](_0xdfd3e7);
                        _0x377786['unshift']('✅\x20-\x20[' + _0x583c23 + ']\x20[' + _0x19f331 + ']\x20' + (_0x1ad605 ? '[' + _0x1ad605 + ']\x20' : '') + ('[' + _0x317eb8 + ']\x20[' + _0x30de64 + ']\x20[' + _0x31ca54 + ']\x20[' + _0x450ad5 + ']\x20[' + _0x35c5f4 + ']\x20[' + _0x3dfe9a + ']\x20:\x20') + await _0x467215(_0x1954f5));
                        _0x1d7f2c++;
                    } else if (_0x1cb273['data']['success'] === ![]) {
                        _0x2fd554++;
                        if (_0x1cb273['data']['erreur'] === 'invalid') {
                            _0x377786['unshift']('❌\x20-\x20' + _0x1f542a['command']['80'] + '\x20:\x20' + await _0x467215(_0x1954f5));
                        } else {
                            _0x377786['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x467215(_0x1954f5));
                        }
                    }
                    const _0x23334f = new _0x16b21d()['setColor']('#0099ff')['setTitle']('🚀\x20**Ch3ck3r\x20T0k3n\x20' + _0x1f542a['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20' + _0x1f542a['command']['109'] + ('\x20:\x20**' + _0x1d7f2c + '/' + _0x43c8cd + '**\x0a🔸\x20') + _0x1f542a['command']['80'] + ('\x20:\x20**' + _0x2fd554 + '/' + _0x43c8cd + '**\x0a'))['addFields'](_0x377786['length'] > 0x0 ? {
                        'name': 'Logs',
                        'value': '```\x0a' + _0x377786['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    } : [], {
                        'name': 'Boosts\x20Used',
                        'value': '**' + _0x4bfbe7 * 0x2 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Boosts\x20Unused',
                        'value': '**' + _0x505e82 * 0x2 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Locked',
                        'value': '**' + _0x11e05d + '**',
                        'inline': !![]
                    }, {
                        'name': 'Unlocked',
                        'value': '**' + _0x161038 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Redeemable\x20Nitro',
                        'value': '**' + _0x576ca0 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Phone\x20Verified',
                        'value': '**' + _0x350ceb + '**',
                        'inline': !![]
                    }, {
                        'name': 'Email\x20Verified',
                        'value': '**' + _0x4cf1d5 + '**',
                        'inline': !![]
                    })['setImage'](_0x5e5fa1)['setTimestamp']()['setFooter'](_0x3aa3b5 + '\x20-\x20' + _0x1f542a['command']['7'] + '\x20MrX');
                    await _0x5a7788['edit']({ 'embeds': [_0x23334f] });
                } catch (_0xd75017) {
                    console['log']('Erreur\x20API\x20contact\x20developer', _0xd75017);
                    _0x2fd554++;
                    _0x377786['unshift']('⚠️\x20-\x20error\x20API');
                }
            }
            ;
            _0x1f0b2d['push']('Checker\x20finished\x20dev\x20by\x20MrX');
            _0x51364b['push']('Checker\x20finished\x20dev\x20By\x20MrX');
            const _0x5139a3 = await _0x2da9cb(0xa);
            const _0x27ba67 = await _0x2da9cb(0xa);
            const _0x446280 = await _0x2da9cb(0xa);
            const _0x5b29e4 = await _0x2da9cb(0xa);
            const _0x4d547c = _0x27bf94['join'](_0x4b85e1['tmpdir'](), 'boosts_logs_all_' + _0x5139a3 + '.txt');
            const _0x3484a6 = _0x27bf94['join'](_0x4b85e1['tmpdir'](), 'boosts_logs_onlytoken_' + _0x27ba67 + '.txt');
            _0x47fed4['writeFileSync'](_0x4d547c, _0x51364b['join']('\x0a'), 'utf-8');
            console['log'](_0x59b74a['retro']('[' + new Date()['toISOString']() + ']\x20🔗\x20-\x20[CHECKER]\x20Fichier\x20temporaire\x20créé\x20à:\x20' + _0x4d547c));
            let _0x184b60 = await _0x18def9(_0x4d547c, _0x446280);
            console['log'](_0x59b74a['retro']('[' + new Date()['toISOString']() + ']\x20🔗\x20-\x20[CHECKER]\x20Lien\x20de\x20la\x20paste,\x20Expire\x20dans\x201W\x20:\x20' + _0x184b60));
            _0x47fed4['writeFileSync'](_0x3484a6, _0x1f0b2d['join']('\x0a'), 'utf-8');
            console['log'](_0x59b74a['retro']('[' + new Date()['toISOString']() + ']\x20🔗\x20-\x20[CHECKER]\x20Fichier\x20temporaire\x20créé\x20à:\x20' + _0x3484a6));
            await new Promise(_0x11abd7 => setTimeout(_0x11abd7, 0xbb8));
            let _0x531b34 = await _0x18def9(_0x3484a6, _0x5b29e4);
            console['log'](_0x59b74a['retro']('[' + new Date()['toISOString']() + ']\x20🔗\x20-\x20[CHECKER]\x20Lien\x20de\x20la\x20paste,\x20Expire\x20dans\x201W\x20:\x20' + _0x531b34));
            await _0x77a267['followUp']({ 'content': _0x1f542a['command']['110'] + _0x184b60 + '\x0a' + _0x1f542a['command']['118'] + _0x531b34 + '\x0a\x20Password\x201\x20link\x20:\x20' + _0x446280 + '\x0a\x20Password\x202\x20link\x20:\x20' + _0x5b29e4 });
            const _0x1e65fc = new _0x16b21d()['setColor']('#0099ff')['setTitle']('🚀\x20**Ch3ck3r\x20T0k3n\x20' + _0x1f542a['command']['21'] + '**\x20🚀')['setDescription']('🔹\x20' + _0x1f542a['command']['109'] + ('\x20:\x20**' + _0x1d7f2c + '/' + _0x43c8cd + '**\x0a🔸\x20') + _0x1f542a['command']['80'] + ('\x20:\x20**' + _0x2fd554 + '/' + _0x43c8cd + '**\x0a'))['addFields'](_0x377786['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x377786['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [], {
                'name': 'Boosts\x20Used',
                'value': '**' + _0x4bfbe7 * 0x2 + '**',
                'inline': !![]
            }, {
                'name': 'Boosts\x20Unused',
                'value': '**' + _0x505e82 * 0x2 + '**',
                'inline': !![]
            }, {
                'name': 'Locked',
                'value': '**' + _0x11e05d + '**',
                'inline': !![]
            }, {
                'name': 'Unlocked',
                'value': '**' + _0x161038 + '**',
                'inline': !![]
            }, {
                'name': 'Redeemable\x20Nitro',
                'value': '**' + _0x576ca0 + '**',
                'inline': !![]
            }, {
                'name': 'Phone\x20Verified',
                'value': '**' + _0x350ceb + '**',
                'inline': !![]
            }, {
                'name': 'Email\x20Verified',
                'value': '**' + _0x4cf1d5 + '**',
                'inline': !![]
            })['setImage'](_0x5e5fa1)['setTimestamp']()['setFooter'](_0x3aa3b5 + '\x20-\x20' + _0x1f542a['command']['7'] + '\x20MrX');
            await _0x5a7788['edit']({ 'embeds': [_0x1e65fc] });
            setTimeout(() => {
                _0x47fed4['unlinkSync'](_0x4d547c);
                _0x47fed4['unlinkSync'](_0x3484a6);
                return console['log'](_0x59b74a['retro']('[' + new Date()['toISOString']() + ']\x20🗑️\x20-\x20[CHECKER]\x20Fichier\x20temporaire\x20supprimé'));
            }, 0x1388);
        } catch (_0x4eb6eb) {
            console['log'](_0x4eb6eb);
            await _0x77a267['editReply'](_0x1f542a['command']['77']);
        }
    }
};
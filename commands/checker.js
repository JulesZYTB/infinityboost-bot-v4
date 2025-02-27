(function (_0x1f369e, _0x8e4a74) {
    const _0x47d39a = _0x1f55;
    const _0xf500eb = _0x1f369e();
    while (!![]) {
        try {
            const _0x43b046 = parseInt(_0x47d39a(0x1ad)) / 0x1 + parseInt(_0x47d39a(0x1b1)) / 0x2 * (parseInt(_0x47d39a(0x1b6)) / 0x3) + parseInt(_0x47d39a(0x1ab)) / 0x4 * (-parseInt(_0x47d39a(0x1b5)) / 0x5) + -parseInt(_0x47d39a(0x1ac)) / 0x6 * (parseInt(_0x47d39a(0x1af)) / 0x7) + -parseInt(_0x47d39a(0x1b3)) / 0x8 + -parseInt(_0x47d39a(0x1b0)) / 0x9 * (parseInt(_0x47d39a(0x1ae)) / 0xa) + -parseInt(_0x47d39a(0x1b2)) / 0xb * (-parseInt(_0x47d39a(0x1b4)) / 0xc);
            if (_0x43b046 === _0x8e4a74) {
                break;
            } else {
                _0xf500eb['push'](_0xf500eb['shift']());
            }
        } catch (_0x56660a) {
            _0xf500eb['push'](_0xf500eb['shift']());
        }
    }
}(_0x3818, 0xcd924));
const {SlashCommandBuilder: _0x41da7c} = require('@discordjs/builders');
const {
    MessageEmbed: _0xe974bd,
    MessageActionRow: _0x131522,
    MessageButton: _0x4b5844
} = require('discord.js');
const {performOperation: _0x2ae5b5} = require('../required/performOp');
const _0x67c7e5 = require('axios');
const _0x3ebdfe = require('os');
const _0x278bac = require('../config.json');
const _0x3544ea = require('fs');
const _0x5c83bb = require('path');
const _0x525018 = require('gradient-string');
const _0x3e1dd2 = require('lodash');
const _0x33452f = JSON['parse'](_0x3544ea['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x4e44d1 = _0x278bac['service']['langue_shop'];
const _0x116fac = _0x33452f[_0x4e44d1];
let _0x70cbc5 = _0x278bac['service']['name_shop'];
let _0xfa5b64 = _0x278bac['service']['banner'];
let _0x2452ec = _0x278bac['apikey'];
let _0x5b07df;
function _0x1f55(_0x4451e6, _0xadc079) {
    const _0x3818d0 = _0x3818();
    _0x1f55 = function (_0x1f5541, _0x164798) {
        _0x1f5541 = _0x1f5541 - 0x1ab;
        let _0x34f3cd = _0x3818d0[_0x1f5541];
        return _0x34f3cd;
    };
    return _0x1f55(_0x4451e6, _0xadc079);
}
function _0x3818() {
    const _0x21ca00 = [
        '6sZMgGX',
        '1255689XYfFcI',
        '5906200AdEbXm',
        '7763819UXfYKt',
        '9MXRlSv',
        '819620tyzRzF',
        '63327YORObQ',
        '13426064rmKKin',
        '5388ndMTiA',
        '2200935oKszHK',
        '6XybXew',
        '4ICsSMn'
    ];
    _0x3818 = function () {
        return _0x21ca00;
    };
    return _0x3818();
}
async function _0x1c0a7d() {
    return new Promise((_0x56bd58, _0x36a59f) => {
        _0x2ae5b5((_0x102060, _0x4b0a99) => {
            if (_0x102060) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x36a59f(_0x102060);
            } else {
                _0x5b07df = _0x4b0a99;
                _0x56bd58(_0x5b07df);
            }
        });
    });
}
async function _0x3ad759(_0x6a8d51) {
    const _0x545727 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let _0x428cc0 = '';
    for (let _0x530a57 = 0x0; _0x530a57 < _0x6a8d51; _0x530a57++) {
        const _0x33f907 = Math['floor'](Math['random']() * _0x545727['length']);
        _0x428cc0 += _0x545727['charAt'](_0x33f907);
    }
    return _0x428cc0;
}
async function _0x1abc63(_0x4752a1) {
    const _0x53886f = _0x4752a1['split'](':');
    if (_0x53886f['length'] === 0x3) {
        return _0x53886f[0x2];
    } else if (_0x53886f['length'] === 0x1) {
        return _0x4752a1;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x4752a1);
        return _0x4752a1;
    }
}
async function _0x46de9a(_0x1ead0d) {
    if (_0x1ead0d['length'] <= 0x6) {
        return _0x1ead0d;
    }
    const _0x32ddb9 = _0x1ead0d['slice'](0x0, 0x14);
    const _0xee9f5d = _0x1ead0d['slice'](-0xa);
    const _0x19d650 = _0x1ead0d['length'] - _0x32ddb9['length'] - _0xee9f5d['length'];
    const _0x17f079 = '' + _0x32ddb9 + '*'['repeat'](_0x19d650 - 0x46) + _0xee9f5d;
    return _0x17f079;
}
async function _0xc72bbc(_0x4d3099) {
    try {
        const _0x5314df = _0x3544ea['readFileSync'](_0x4d3099, 'utf-8');
        const _0x2c3225 = _0x5314df['split']('\x0a');
        const _0x27fd95 = _0x2c3225['filter'](_0x276f39 => _0x276f39['trim']()['length'] > 0x0);
        return _0x27fd95['length'];
    } catch (_0x2f29e9) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x2f29e9);
        return 0x0;
    }
}
async function _0x391b40(_0x11cf87) {
    if (_0x11cf87['length'] <= 0x6) {
        return _0x11cf87;
    }
    const _0x60a58a = _0x11cf87['slice'](0x0, 0x6);
    const _0x24405b = _0x11cf87['slice'](-0xc);
    const _0x51b33e = _0x11cf87['length'] - _0x60a58a['length'] - _0x24405b['length'];
    const _0x15436e = '' + _0x60a58a + '*'['repeat'](_0x51b33e - 0x2d) + _0x24405b;
    return _0x15436e;
}
async function _0x1579ff(_0x5107a9, _0x1091d1, _0x255d20 = 0x0) {
    try {
        let _0x53f8b8 = await _0x3ad759(0xa);
        const _0x3eeaf4 = _0x3544ea['readFileSync'](_0x5107a9, 'utf8');
        let _0x38a872 = _0x3eeaf4['split']('\x0a');
        _0x38a872['shift']();
        let _0x5aef21 = _0x38a872['join']('\x0a');
        const _0x3efd26 = await _0x67c7e5['post']('http://pastes.io/api/paste/create', {
            'content': _0x5aef21,
            'status': 0x2,
            'expire': '1W',
            'title': _0x53f8b8 + '-Ch3Ch3r_L0G',
            'password': _0x1091d1
        }, {
            'headers': {
                'Accept': 'application/json',
                'Authorization': 'Bearer\x2040d403ae833e6eec3dbe0fe2f219863d5df1767c51073e2e438e1bf4993711f3'
            }
        });
        if (_0x3efd26['data']) {
            if (_0x3efd26['data']['success']) {
                return _0x3efd26['data']['success']['paste_url'];
            } else if (_0x3efd26['data']['error']) {
                if (_0x255d20 < 0x3) {
                    await new Promise(_0x4720b6 => setTimeout(_0x4720b6, 0xbb8));
                    return await _0x1579ff(_0x5107a9, _0x1091d1, _0x255d20 + 0x1);
                } else {
                    return 'Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste.';
                }
            }
        }
    } catch (_0x3e724b) {
        console['error']('Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste:\x20', _0x3e724b);
        return null;
    }
}
module['exports'] = {
    'data': new _0x41da7c()['setName']('checker')['setDescription'](_0x116fac['command']['108'])['addStringOption'](_0x201999 => _0x201999['setName']('url')['setDescription'](_0x116fac['command']['70'])['setRequired'](!![])),
    async 'execute'(_0x5f2947) {
        await _0x1c0a7d();
        await _0x5f2947['deferReply']();
        let _0xc989ea = [
            _0x278bac['admin']['id_1'],
            _0x278bac['admin']['id_2'],
            _0x278bac['admin']['id_3']
        ];
        if (!_0xc989ea['includes'](_0x5f2947['user']['id'])) {
            const _0x9dd27f = new _0x131522()['addComponents'](new _0x4b5844()['setLabel'](_0x116fac['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x21e616 = new _0xe974bd()['setColor']('#071b47')['setTitle'](_0x116fac['command']['27'])['setDescription'](_0x116fac['command']['12'])['setImage'](_0xfa5b64)['setTimestamp']()['setFooter'](_0x70cbc5 + '\x20-\x20' + _0x116fac['command']['7'] + '\x20MrX');
            return await _0x5f2947['editReply']({
                'embeds': [_0x21e616],
                'components': [_0x9dd27f]
            });
        }
        const _0x4aac2d = await _0x67c7e5['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x2452ec + '&machineid=' + _0x5b07df + '&shopname=' + _0x70cbc5 + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
        if (_0x4aac2d['data']['success'] === ![]) {
            const _0x3d4aeb = new _0xe974bd()['setColor']('#ff0000')['setTitle'](_0x116fac['command']['5'])['setImage'](_0xfa5b64)['setTimestamp']()['setFooter']('' + _0x116fac['command']['7'] + '\x20MrX');
            return _0x5f2947['editReply']({ 'embeds': [_0x3d4aeb] });
        }
        const _0x5323f7 = _0x5f2947['options']['getString']('url');
        try {
            const _0x6c2d5e = _0x3e1dd2['replace'](_0x5323f7, 'https://paste.ee/p/', '');
            const _0x72ef59 = await _0x67c7e5['get']('https://paste.ee/d/' + _0x6c2d5e, { 'headers': { 'User-agent': 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20WOW64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20discord/1.0.9001\x20Chrome/83.0.4103.122\x20Electron/9.3.5\x20Safari/537.36' } });
            const _0x550d45 = _0x72ef59['data'];
            const _0x2e47e1 = new Set([..._0x550d45['split']('\x0a')]);
            const _0xaf2783 = [..._0x2e47e1]['filter'](_0x50d8fd => _0x50d8fd['trim']() !== '')['length'];
            const _0x3e6d7b = [..._0x2e47e1]['filter'](_0xfdaba0 => _0xfdaba0['trim']() !== '');
            const _0xaf865f = _0x3e6d7b['length'];
            const _0x2a20e3 = _0xaf2783 - _0xaf865f;
            let _0x2e7219 = 0x0;
            let _0x5f0c53 = 0x0;
            let _0x46d266 = 0x0;
            let _0x111b25 = 0x0;
            let _0x27af54 = 0x0;
            let _0x4b250a = 0x0;
            let _0x3096b6 = 0x0;
            let _0x22fde1 = 0x0;
            let _0x584f0f = 0x0;
            const _0x355a0e = 0x4;
            let _0xc4b5b2 = [];
            let _0x418642 = _0xaf2783;
            let _0x2ca541 = '[+]\x20' + _0x70cbc5 + '\x20initialisés.';
            if (_0xc4b5b2['length'] >= _0x355a0e) {
                _0xc4b5b2['pop']();
            }
            _0xc4b5b2['unshift'](_0x2ca541);
            const _0x218284 = new _0xe974bd()['setColor']('#0099ff')['setTitle']('🚀\x20**Ch3ck3r\x20T0k3n\x20' + _0x116fac['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20' + _0x116fac['command']['109'] + ('\x20:\x20**0/' + _0x418642 + '**\x0a🔸\x20') + _0x116fac['command']['80'] + ('\x20:\x20**0/' + _0x418642 + '**\x0a'))['addFields'](_0xc4b5b2['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0xc4b5b2['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0xfa5b64)['setTimestamp']()['setFooter'](_0x70cbc5 + '\x20-\x20' + _0x116fac['command']['7'] + '\x20MrX');
            const _0x2385b0 = await _0x5f2947['editReply']({ 'embeds': [_0x218284] });
            let _0x3188d3 = [];
            let _0x33129d = [];
            _0x33129d['push']('Checker\x20started\x20dev\x20by\x20MrX');
            _0x3188d3['push']('Checker\x20started\x20dev\x20By\x20MrX');
            _0x33129d['push']('Checker\x20started\x20dev\x20by\x20MrX');
            _0x3188d3['push']('Checker\x20started\x20dev\x20By\x20MrX');
            for (const _0x5002c4 of _0x3e6d7b) {
                try {
                    const _0x2a76f3 = _0x5002c4;
                    const _0x12758d = await _0x1abc63(_0x2a76f3);
                    const _0xc7e24 = await _0x67c7e5['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x2452ec + '&machineid=' + _0x5b07df + '&shopname=' + _0x70cbc5 + '&mode=CHECKER&tokenboost=' + _0x12758d, {}, { 'timeout': 0xf4240 });
                    if (_0xc4b5b2['length'] >= _0x355a0e) {
                        _0xc4b5b2['pop']();
                    }
                    if (_0xc7e24['data']['erreur'] === 'Invalid\x20license\x20key') {
                        _0xc4b5b2['unshift']('⛔\x20-\x20' + _0x116fac['command']['82']);
                    } else if (_0xc7e24['data']['erreur'] === 'HWID\x20doesn\x27t\x20match.\x20Ask\x20for\x20a\x20HWID\x20reset') {
                        _0xc4b5b2['unshift']('⛔\x20-\x20' + _0x116fac['command']['83']);
                    } else if (_0xc7e24['data']['success'] === !![]) {
                        let _0x42f318 = _0xc7e24['data']['data']['data']['boosts'];
                        let _0x42b317 = _0xc7e24['data']['data']['data']['boostedGuilds'];
                        let _0x3e7146 = _0xc7e24['data']['data']['data']['nitro'];
                        let _0x5442c3 = _0xc7e24['data']['data']['data']['subscribed'];
                        let _0x4937a9 = _0xc7e24['data']['data']['data']['nitroDaysLeft'];
                        let _0xe134bc = _0xc7e24['data']['data']['data']['redeemableNitro'];
                        let _0x514066 = _0xc7e24['data']['data']['data']['lockStatus'];
                        let _0x3cd523 = _0xc7e24['data']['data']['data']['ageCompte'];
                        let _0x4b8754 = _0xc7e24['data']['data']['data']['emailVerified'];
                        let _0x3f1c75 = _0xc7e24['data']['data']['data']['phoneVerified'];
                        if (_0x42f318 === '2_BOOSTS_USED') {
                            _0x46d266++;
                        } else if (_0x42f318 === '2_BOOSTS_AVAILABLE') {
                            _0x111b25++;
                        }
                        if (_0x514066 === 'LOCKED') {
                            _0x27af54++;
                        } else {
                            _0x4b250a++;
                        }
                        if (_0xe134bc === 'REDEEMABLE_NITRO_AVAILABLE') {
                            _0x3096b6++;
                        }
                        if (_0x3f1c75 === 'PHONE_VERIFIED') {
                            _0x584f0f++;
                        }
                        if (_0x4b8754 === 'EMAIL_VERIFIED') {
                            _0x22fde1++;
                        }
                        _0x3188d3['push']('[' + _0x42f318 + ']\x20[' + _0x3e7146 + ']\x20' + (_0x42b317 ? '[' + _0x42b317 + ']\x20' : '') + ('[' + _0x514066 + ']\x20[' + _0x5442c3 + ']\x20[' + _0x4937a9 + ']\x20[' + _0x3cd523 + ']\x20[' + _0x4b8754 + ']\x20[' + _0x3f1c75 + ']\x20:\x20') + _0x2a76f3);
                        _0x33129d['push'](_0x2a76f3);
                        _0xc4b5b2['unshift']('✅\x20-\x20[' + _0x42f318 + ']\x20[' + _0x3e7146 + ']\x20' + (_0x42b317 ? '[' + _0x42b317 + ']\x20' : '') + ('[' + _0x514066 + ']\x20[' + _0x5442c3 + ']\x20[' + _0x4937a9 + ']\x20[' + _0x3cd523 + ']\x20[' + _0x4b8754 + ']\x20[' + _0x3f1c75 + ']\x20:\x20') + await _0x391b40(_0x12758d));
                        _0x2e7219++;
                    } else if (_0xc7e24['data']['success'] === ![]) {
                        _0x5f0c53++;
                        if (_0xc7e24['data']['erreur'] === 'invalid') {
                            _0xc4b5b2['unshift']('❌\x20-\x20' + _0x116fac['command']['80'] + '\x20:\x20' + await _0x391b40(_0x12758d));
                        } else {
                            _0xc4b5b2['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x391b40(_0x12758d));
                        }
                    }
                    const _0x377e5a = new _0xe974bd()['setColor']('#0099ff')['setTitle']('🚀\x20**Ch3ck3r\x20T0k3n\x20' + _0x116fac['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20' + _0x116fac['command']['109'] + ('\x20:\x20**' + _0x2e7219 + '/' + _0x418642 + '**\x0a🔸\x20') + _0x116fac['command']['80'] + ('\x20:\x20**' + _0x5f0c53 + '/' + _0x418642 + '**\x0a'))['addFields'](_0xc4b5b2['length'] > 0x0 ? {
                        'name': 'Logs',
                        'value': '```\x0a' + _0xc4b5b2['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    } : [], {
                        'name': 'Boosts\x20Used',
                        'value': '**' + _0x46d266 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Boosts\x20Unused',
                        'value': '**' + _0x111b25 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Locked',
                        'value': '**' + _0x27af54 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Unlocked',
                        'value': '**' + _0x4b250a + '**',
                        'inline': !![]
                    }, {
                        'name': 'Redeemable\x20Nitro',
                        'value': '**' + _0x3096b6 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Phone\x20Verified',
                        'value': '**' + _0x584f0f + '**',
                        'inline': !![]
                    }, {
                        'name': 'Email\x20Verified',
                        'value': '**' + _0x22fde1 + '**',
                        'inline': !![]
                    })['setImage'](_0xfa5b64)['setTimestamp']()['setFooter'](_0x70cbc5 + '\x20-\x20' + _0x116fac['command']['7'] + '\x20MrX');
                    await _0x2385b0['edit']({ 'embeds': [_0x377e5a] });
                } catch (_0x41b8d8) {
                    console['log']('Erreur\x20API\x20contact\x20developer', _0x41b8d8);
                    _0x5f0c53++;
                    _0xc4b5b2['unshift']('⚠️\x20-\x20error\x20API');
                }
            }
            ;
            _0x33129d['push']('Checker\x20finished\x20dev\x20by\x20MrX');
            _0x3188d3['push']('Checker\x20finished\x20dev\x20By\x20MrX');
            const _0x16844b = await _0x3ad759(0xa);
            const _0x47f283 = await _0x3ad759(0xa);
            const _0x56c575 = await _0x3ad759(0xa);
            const _0xa745fc = await _0x3ad759(0xa);
            const _0x170aba = _0x5c83bb['join'](_0x3ebdfe['tmpdir'](), 'boosts_logs_all_' + _0x16844b + '.txt');
            const _0x189bf7 = _0x5c83bb['join'](_0x3ebdfe['tmpdir'](), 'boosts_logs_onlytoken_' + _0x47f283 + '.txt');
            _0x3544ea['writeFileSync'](_0x170aba, _0x3188d3['join']('\x0a'), 'utf-8');
            console['log'](_0x525018['retro']('🔗\x20-\x20[CHECKER]\x20Fichier\x20temporaire\x20créé\x20à:\x20' + _0x170aba));
            let _0x4660fb = await _0x1579ff(_0x170aba, _0x56c575);
            console['log'](_0x525018['retro']('🔗\x20-\x20[CHECKER]\x20Lien\x20de\x20la\x20paste,\x20Expire\x20dans\x201W\x20:\x20' + _0x4660fb));
            _0x3544ea['writeFileSync'](_0x189bf7, _0x33129d['join']('\x0a'), 'utf-8');
            console['log'](_0x525018['retro']('🔗\x20-\x20[CHECKER]\x20Fichier\x20temporaire\x20créé\x20à:\x20' + _0x189bf7));
            await new Promise(_0x136f43 => setTimeout(_0x136f43, 0xbb8));
            let _0x29b0bb = await _0x1579ff(_0x189bf7, _0xa745fc);
            console['log'](_0x525018['retro']('🔗\x20-\x20[CHECKER]\x20Lien\x20de\x20la\x20paste,\x20Expire\x20dans\x201W\x20:\x20' + _0x29b0bb));
            await _0x5f2947['followUp']({ 'content': _0x116fac['command']['110'] + _0x4660fb + '\x0a' + _0x116fac['command']['118'] + _0x29b0bb + '\x0a\x20Password\x201\x20link\x20:\x20' + _0x56c575 + '\x0a\x20Password\x202\x20link\x20:\x20' + _0xa745fc });
            const _0x1e879a = new _0xe974bd()['setColor']('#0099ff')['setTitle']('🚀\x20**Ch3ck3r\x20T0k3n\x20' + _0x116fac['command']['21'] + '**\x20🚀')['setDescription']('🔹\x20' + _0x116fac['command']['109'] + ('\x20:\x20**' + _0x2e7219 + '/' + _0x418642 + '**\x0a🔸\x20') + _0x116fac['command']['80'] + ('\x20:\x20**' + _0x5f0c53 + '/' + _0x418642 + '**\x0a'))['addFields'](_0xc4b5b2['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0xc4b5b2['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [], {
                'name': 'Boosts\x20Used',
                'value': '**' + _0x46d266 + '**',
                'inline': !![]
            }, {
                'name': 'Boosts\x20Unused',
                'value': '**' + _0x111b25 + '**',
                'inline': !![]
            }, {
                'name': 'Locked',
                'value': '**' + _0x27af54 + '**',
                'inline': !![]
            }, {
                'name': 'Unlocked',
                'value': '**' + _0x4b250a + '**',
                'inline': !![]
            }, {
                'name': 'Redeemable\x20Nitro',
                'value': '**' + _0x3096b6 + '**',
                'inline': !![]
            }, {
                'name': 'Phone\x20Verified',
                'value': '**' + _0x584f0f + '**',
                'inline': !![]
            }, {
                'name': 'Email\x20Verified',
                'value': '**' + _0x22fde1 + '**',
                'inline': !![]
            })['setImage'](_0xfa5b64)['setTimestamp']()['setFooter'](_0x70cbc5 + '\x20-\x20' + _0x116fac['command']['7'] + '\x20MrX');
            await _0x2385b0['edit']({ 'embeds': [_0x1e879a] });
            setTimeout(() => {
                _0x3544ea['unlinkSync'](_0x170aba);
                _0x3544ea['unlinkSync'](_0x189bf7);
                return console['log'](_0x525018['retro']('🗑️\x20-\x20[CHECKER]\x20Fichier\x20temporaire\x20supprimé'));
            }, 0x1388);
        } catch (_0xf9562c) {
            console['log'](_0xf9562c);
            await _0x5f2947['editReply'](_0x116fac['command']['77']);
        }
    }
};
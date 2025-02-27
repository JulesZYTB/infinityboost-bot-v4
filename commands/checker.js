(function (_0x5e8cf7, _0x255408) {
    const _0x3232ff = _0x48d7;
    const _0x2e2ba2 = _0x5e8cf7();
    while (!![]) {
        try {
            const _0x22e751 = -parseInt(_0x3232ff(0x108)) / 0x1 * (parseInt(_0x3232ff(0x10d)) / 0x2) + -parseInt(_0x3232ff(0x10f)) / 0x3 * (parseInt(_0x3232ff(0x10c)) / 0x4) + -parseInt(_0x3232ff(0x110)) / 0x5 + -parseInt(_0x3232ff(0x109)) / 0x6 + -parseInt(_0x3232ff(0x10e)) / 0x7 + -parseInt(_0x3232ff(0x10b)) / 0x8 + parseInt(_0x3232ff(0x10a)) / 0x9;
            if (_0x22e751 === _0x255408) {
                break;
            } else {
                _0x2e2ba2['push'](_0x2e2ba2['shift']());
            }
        } catch (_0x3fc18c) {
            _0x2e2ba2['push'](_0x2e2ba2['shift']());
        }
    }
}(_0x5f47, 0xa8ae5));
function _0x48d7(_0x1a3bae, _0xfd65f7) {
    const _0x5f4796 = _0x5f47();
    _0x48d7 = function (_0x48d7cc, _0x2f01cb) {
        _0x48d7cc = _0x48d7cc - 0x108;
        let _0x1e1a6e = _0x5f4796[_0x48d7cc];
        return _0x1e1a6e;
    };
    return _0x48d7(_0x1a3bae, _0xfd65f7);
}
const {SlashCommandBuilder: _0x521a4e} = require('@discordjs/builders');
const {
    MessageEmbed: _0x4e4080,
    MessageActionRow: _0x57c2d7,
    MessageButton: _0x570289
} = require('discord.js');
const {performOperation: _0x104034} = require('../required/performOp');
const {
    PasteClient: _0x2cbcec,
    Publicity: _0x5efb5f,
    ExpireDate: _0x50dff0
} = require('pastebin-api');
const _0x3d7f4b = new _0x2cbcec('snFw6IjuAoxek8-20KIQ4evO3z7tp2ki');
const _0x1a6917 = require('axios');
const _0x28d4d6 = require('os');
const _0x5cf609 = require('../config.json');
const _0x5d075f = require('fs');
const _0x4d3606 = require('path');
const _0x5ade1d = require('gradient-string');
const _0x1fb3f0 = require('lodash');
const _0x26e440 = JSON['parse'](_0x5d075f['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x291a78 = _0x5cf609['service']['langue_shop'];
const _0x3c7601 = _0x26e440[_0x291a78];
let _0x6838d4 = _0x5cf609['service']['name_shop'];
function _0x5f47() {
    const _0x51e656 = [
        '1yJgkcy',
        '7913544qdJROi',
        '54108396lSfeJm',
        '9693536wshyta',
        '8mlTMOd',
        '2598474HlcmJn',
        '851872fvIbvR',
        '1550499refMMw',
        '1679560ORBDBo'
    ];
    _0x5f47 = function () {
        return _0x51e656;
    };
    return _0x5f47();
}
let _0x43bde1 = _0x5cf609['service']['banner'];
let _0x4411e9 = _0x5cf609['apikey'];
let _0x165c6e;
async function _0x4a45ca() {
    return new Promise((_0x5c8792, _0x4c9e24) => {
        _0x104034((_0x1b8301, _0x390f21) => {
            if (_0x1b8301) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x4c9e24(_0x1b8301);
            } else {
                _0x165c6e = _0x390f21;
                _0x5c8792(_0x165c6e);
            }
        });
    });
}
async function _0x4f0d21(_0x43b8ba) {
    const _0x6e8eb0 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let _0x188ca3 = '';
    for (let _0x414e16 = 0x0; _0x414e16 < _0x43b8ba; _0x414e16++) {
        const _0x1d53c8 = Math['floor'](Math['random']() * _0x6e8eb0['length']);
        _0x188ca3 += _0x6e8eb0['charAt'](_0x1d53c8);
    }
    return _0x188ca3;
}
async function _0x1057c8(_0x1f5009) {
    const _0x6748f6 = _0x1f5009['split'](':');
    if (_0x6748f6['length'] === 0x3) {
        return _0x6748f6[0x2];
    } else if (_0x6748f6['length'] === 0x1) {
        return _0x1f5009;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x1f5009);
        return _0x1f5009;
    }
}
async function _0x316143(_0x98c9f0) {
    if (_0x98c9f0['length'] <= 0x6) {
        return _0x98c9f0;
    }
    const _0x516a99 = _0x98c9f0['slice'](0x0, 0x14);
    const _0xdced93 = _0x98c9f0['slice'](-0xa);
    const _0x2866a9 = _0x98c9f0['length'] - _0x516a99['length'] - _0xdced93['length'];
    const _0x2aa509 = '' + _0x516a99 + '*'['repeat'](_0x2866a9 - 0x46) + _0xdced93;
    return _0x2aa509;
}
async function _0x23e7ed(_0x1f5e22) {
    try {
        const _0xec5c3f = _0x5d075f['readFileSync'](_0x1f5e22, 'utf-8');
        const _0x2038bc = _0xec5c3f['split']('\x0a');
        const _0x225c36 = _0x2038bc['filter'](_0x116d93 => _0x116d93['trim']()['length'] > 0x0);
        return _0x225c36['length'];
    } catch (_0x2052ca) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x2052ca);
        return 0x0;
    }
}
async function _0x5e303c(_0x5027da) {
    if (_0x5027da['length'] <= 0x6) {
        return _0x5027da;
    }
    const _0x58514a = _0x5027da['slice'](0x0, 0x6);
    const _0x2b9f31 = _0x5027da['slice'](-0xc);
    const _0x130cd2 = _0x5027da['length'] - _0x58514a['length'] - _0x2b9f31['length'];
    const _0x27ff93 = '' + _0x58514a + '*'['repeat'](_0x130cd2 - 0x2d) + _0x2b9f31;
    return _0x27ff93;
}
async function _0x765296(_0x3c8c47, _0x53f7f3, _0x3f9466 = 0x0) {
    try {
        let _0x5a945a = await _0x4f0d21(0xa);
        const _0x18a159 = _0x5d075f['readFileSync'](_0x3c8c47, 'utf8');
        let _0x50032c = _0x18a159['split']('\x0a');
        _0x50032c['shift']();
        let _0x1c523b = _0x50032c['join']('\x0a');
        const _0x1fe6a7 = await _0x1a6917['post']('http://pastes.io/api/paste/create', {
            'content': _0x1c523b,
            'status': 0x2,
            'expire': '1W',
            'title': _0x5a945a + '-Ch3Ch3r_L0G',
            'password': _0x53f7f3
        }, {
            'headers': {
                'Accept': 'application/json',
                'Authorization': 'Bearer\x2040d403ae833e6eec3dbe0fe2f219863d5df1767c51073e2e438e1bf4993711f3'
            }
        });
        if (_0x1fe6a7['data']) {
            if (_0x1fe6a7['data']['success']) {
                return _0x1fe6a7['data']['success']['paste_url'];
            } else if (_0x1fe6a7['data']['error']) {
                if (_0x3f9466 < 0x3) {
                    await new Promise(_0x56f2fb => setTimeout(_0x56f2fb, 0xbb8));
                    return await _0x765296(_0x3c8c47, _0x53f7f3, _0x3f9466 + 0x1);
                } else {
                    return 'Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste.';
                }
            }
        }
    } catch (_0x2a3468) {
        console['error']('Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste:\x20', _0x2a3468);
        return null;
    }
}
module['exports'] = {
    'data': new _0x521a4e()['setName']('checker')['setDescription'](_0x3c7601['command']['108'])['addStringOption'](_0x31acaf => _0x31acaf['setName']('url')['setDescription'](_0x3c7601['command']['70'])['setRequired'](!![])),
    async 'execute'(_0x1acdb5) {
        await _0x4a45ca();
        await _0x1acdb5['deferReply']();
        let _0x2abe0f = [
            _0x5cf609['admin']['id_1'],
            _0x5cf609['admin']['id_2'],
            _0x5cf609['admin']['id_3']
        ];
        if (!_0x2abe0f['includes'](_0x1acdb5['user']['id'])) {
            const _0x34077f = new _0x57c2d7()['addComponents'](new _0x570289()['setLabel'](_0x3c7601['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x5357c7 = new _0x4e4080()['setColor']('#071b47')['setTitle'](_0x3c7601['command']['27'])['setDescription'](_0x3c7601['command']['12'])['setImage'](_0x43bde1)['setTimestamp']()['setFooter'](_0x6838d4 + '\x20-\x20' + _0x3c7601['command']['7'] + '\x20MrX');
            return await _0x1acdb5['editReply']({
                'embeds': [_0x5357c7],
                'components': [_0x34077f]
            });
        }
        const _0x583cd5 = await _0x1a6917['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x4411e9 + '&machineid=' + _0x165c6e + '&shopname=' + _0x6838d4 + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
        if (_0x583cd5['data']['success'] === ![]) {
            const _0x1630d6 = new _0x4e4080()['setColor']('#ff0000')['setTitle'](_0x3c7601['command']['5'])['setImage'](_0x43bde1)['setTimestamp']()['setFooter']('' + _0x3c7601['command']['7'] + '\x20MrX');
            return _0x1acdb5['editReply']({ 'embeds': [_0x1630d6] });
        }
        const _0x2debcd = _0x1acdb5['options']['getString']('url');
        try {
            const _0x201900 = _0x1fb3f0['replace'](_0x2debcd, 'https://paste.ee/p/', '');
            const _0x19eb08 = await _0x1a6917['get']('https://paste.ee/d/' + _0x201900, { 'headers': { 'User-agent': 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20WOW64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20discord/1.0.9001\x20Chrome/83.0.4103.122\x20Electron/9.3.5\x20Safari/537.36' } });
            const _0x591613 = _0x19eb08['data'];
            const _0x2d2295 = new Set([..._0x591613['split']('\x0a')]);
            const _0xa0ca05 = [..._0x2d2295]['filter'](_0x257f0a => _0x257f0a['trim']() !== '')['length'];
            const _0x4b5604 = [..._0x2d2295]['filter'](_0x4bd5d => _0x4bd5d['trim']() !== '');
            const _0x4e8f5e = _0x4b5604['length'];
            const _0x26fece = _0xa0ca05 - _0x4e8f5e;
            let _0xa014bf = 0x0;
            let _0x45fdbd = 0x0;
            let _0x1b98bf = 0x0;
            let _0x143f69 = 0x0;
            let _0x5966be = 0x0;
            let _0x90bc20 = 0x0;
            let _0x1e54eb = 0x0;
            let _0x2246e9 = 0x0;
            let _0xe7d102 = 0x0;
            const _0x29a918 = 0x4;
            let _0x11ee7e = [];
            let _0x357dd4 = _0xa0ca05;
            let _0x52c1b8 = '[+]\x20' + _0x6838d4 + '\x20initialisés.';
            if (_0x11ee7e['length'] >= _0x29a918) {
                _0x11ee7e['pop']();
            }
            _0x11ee7e['unshift'](_0x52c1b8);
            const _0x32ac56 = new _0x4e4080()['setColor']('#0099ff')['setTitle']('🚀\x20**Ch3ck3r\x20T0k3n\x20' + _0x3c7601['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20' + _0x3c7601['command']['109'] + ('\x20:\x20**0/' + _0x357dd4 + '**\x0a🔸\x20') + _0x3c7601['command']['80'] + ('\x20:\x20**0/' + _0x357dd4 + '**\x0a'))['addFields'](_0x11ee7e['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x11ee7e['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x43bde1)['setTimestamp']()['setFooter'](_0x6838d4 + '\x20-\x20' + _0x3c7601['command']['7'] + '\x20MrX');
            const _0x131de7 = await _0x1acdb5['editReply']({ 'embeds': [_0x32ac56] });
            let _0x20312c = [];
            let _0x15f34e = [];
            _0x15f34e['push']('Checker\x20started\x20dev\x20by\x20MrX');
            _0x20312c['push']('Checker\x20started\x20dev\x20By\x20MrX');
            _0x15f34e['push']('Checker\x20started\x20dev\x20by\x20MrX');
            _0x20312c['push']('Checker\x20started\x20dev\x20By\x20MrX');
            for (const _0x319239 of _0x4b5604) {
                try {
                    const _0x17944c = _0x319239;
                    const _0x456f4e = await _0x1057c8(_0x17944c);
                    const _0x4543ee = await _0x1a6917['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x4411e9 + '&machineid=' + _0x165c6e + '&shopname=' + _0x6838d4 + '&mode=CHECKER&tokenboost=' + _0x456f4e, {}, { 'timeout': 0xf4240 });
                    if (_0x11ee7e['length'] >= _0x29a918) {
                        _0x11ee7e['pop']();
                    }
                    if (_0x4543ee['data']['erreur'] === 'Invalid\x20license\x20key') {
                        _0x11ee7e['unshift']('⛔\x20-\x20' + _0x3c7601['command']['82']);
                    } else if (_0x4543ee['data']['erreur'] === 'HWID\x20doesn\x27t\x20match.\x20Ask\x20for\x20a\x20HWID\x20reset') {
                        _0x11ee7e['unshift']('⛔\x20-\x20' + _0x3c7601['command']['83']);
                    } else if (_0x4543ee['data']['success'] === !![]) {
                        let _0x43085d = _0x4543ee['data']['data']['data']['boosts'];
                        let _0x2dcbd4 = _0x4543ee['data']['data']['data']['boostedGuilds'];
                        let _0x52c1f3 = _0x4543ee['data']['data']['data']['nitro'];
                        let _0x2c7949 = _0x4543ee['data']['data']['data']['subscribed'];
                        let _0x32c371 = _0x4543ee['data']['data']['data']['nitroDaysLeft'];
                        let _0x4a9b06 = _0x4543ee['data']['data']['data']['redeemableNitro'];
                        let _0x3fa466 = _0x4543ee['data']['data']['data']['lockStatus'];
                        let _0x538db8 = _0x4543ee['data']['data']['data']['ageCompte'];
                        let _0x500772 = _0x4543ee['data']['data']['data']['emailVerified'];
                        let _0xa6a6d6 = _0x4543ee['data']['data']['data']['phoneVerified'];
                        if (_0x43085d === '2_BOOSTS_USED') {
                            _0x1b98bf++;
                        } else if (_0x43085d === '2_BOOSTS_AVAILABLE') {
                            _0x143f69++;
                        }
                        if (_0x3fa466 === 'LOCKED') {
                            _0x5966be++;
                        } else {
                            _0x90bc20++;
                        }
                        if (_0x4a9b06 === 'REDEEMABLE_NITRO_AVAILABLE') {
                            _0x1e54eb++;
                        }
                        if (_0xa6a6d6 === 'PHONE_VERIFIED') {
                            _0xe7d102++;
                        }
                        if (_0x500772 === 'EMAIL_VERIFIED') {
                            _0x2246e9++;
                        }
                        _0x20312c['push']('[' + _0x43085d + ']\x20[' + _0x52c1f3 + ']\x20' + (_0x2dcbd4 ? '[' + _0x2dcbd4 + ']\x20' : '') + ('[' + _0x3fa466 + ']\x20[' + _0x2c7949 + ']\x20[' + _0x32c371 + ']\x20[' + _0x538db8 + ']\x20[' + _0x500772 + ']\x20[' + _0xa6a6d6 + ']\x20:\x20') + _0x17944c);
                        _0x15f34e['push'](_0x17944c);
                        _0x11ee7e['unshift']('✅\x20-\x20[' + _0x43085d + ']\x20[' + _0x52c1f3 + ']\x20' + (_0x2dcbd4 ? '[' + _0x2dcbd4 + ']\x20' : '') + ('[' + _0x3fa466 + ']\x20[' + _0x2c7949 + ']\x20[' + _0x32c371 + ']\x20[' + _0x538db8 + ']\x20[' + _0x500772 + ']\x20[' + _0xa6a6d6 + ']\x20:\x20') + await _0x5e303c(_0x456f4e));
                        _0xa014bf++;
                    } else if (_0x4543ee['data']['success'] === ![]) {
                        _0x45fdbd++;
                        if (_0x4543ee['data']['erreur'] === 'invalid') {
                            _0x11ee7e['unshift']('❌\x20-\x20' + _0x3c7601['command']['80'] + '\x20:\x20' + await _0x5e303c(_0x456f4e));
                        } else {
                            _0x11ee7e['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x5e303c(_0x456f4e));
                        }
                    }
                    const _0x51e366 = new _0x4e4080()['setColor']('#0099ff')['setTitle']('🚀\x20**Ch3ck3r\x20T0k3n\x20' + _0x3c7601['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20' + _0x3c7601['command']['109'] + ('\x20:\x20**' + _0xa014bf + '/' + _0x357dd4 + '**\x0a🔸\x20') + _0x3c7601['command']['80'] + ('\x20:\x20**' + _0x45fdbd + '/' + _0x357dd4 + '**\x0a'))['addFields'](_0x11ee7e['length'] > 0x0 ? {
                        'name': 'Logs',
                        'value': '```\x0a' + _0x11ee7e['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    } : [], {
                        'name': 'Boosts\x20Used',
                        'value': '**' + _0x1b98bf + '**',
                        'inline': !![]
                    }, {
                        'name': 'Boosts\x20Unused',
                        'value': '**' + _0x143f69 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Locked',
                        'value': '**' + _0x5966be + '**',
                        'inline': !![]
                    }, {
                        'name': 'Unlocked',
                        'value': '**' + _0x90bc20 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Redeemable\x20Nitro',
                        'value': '**' + _0x1e54eb + '**',
                        'inline': !![]
                    }, {
                        'name': 'Phone\x20Verified',
                        'value': '**' + _0xe7d102 + '**',
                        'inline': !![]
                    }, {
                        'name': 'Email\x20Verified',
                        'value': '**' + _0x2246e9 + '**',
                        'inline': !![]
                    })['setImage'](_0x43bde1)['setTimestamp']()['setFooter'](_0x6838d4 + '\x20-\x20' + _0x3c7601['command']['7'] + '\x20MrX');
                    await _0x131de7['edit']({ 'embeds': [_0x51e366] });
                } catch (_0x3b54e8) {
                    console['log']('Erreur\x20API\x20contact\x20developer', _0x3b54e8);
                    _0x45fdbd++;
                    _0x11ee7e['unshift']('⚠️\x20-\x20error\x20API');
                }
            }
            ;
            _0x15f34e['push']('Checker\x20finished\x20dev\x20by\x20MrX');
            _0x20312c['push']('Checker\x20finished\x20dev\x20By\x20MrX');
            const _0x2c51fa = await _0x4f0d21(0xa);
            const _0x186d9c = await _0x4f0d21(0xa);
            const _0x59e7c7 = await _0x4f0d21(0xa);
            const _0x3d61f1 = await _0x4f0d21(0xa);
            const _0xa555c9 = _0x4d3606['join'](_0x28d4d6['tmpdir'](), 'boosts_logs_all_' + _0x2c51fa + '.txt');
            const _0x5e7b30 = _0x4d3606['join'](_0x28d4d6['tmpdir'](), 'boosts_logs_onlytoken_' + _0x186d9c + '.txt');
            _0x5d075f['writeFileSync'](_0xa555c9, _0x20312c['join']('\x0a'), 'utf-8');
            console['log'](_0x5ade1d['retro']('🔗\x20-\x20[CHECKER]\x20Fichier\x20temporaire\x20créé\x20à:\x20' + _0xa555c9));
            let _0x1f41bc = await _0x765296(_0xa555c9, _0x59e7c7);
            console['log'](_0x5ade1d['retro']('🔗\x20-\x20[CHECKER]\x20Lien\x20de\x20la\x20paste,\x20Expire\x20dans\x201W\x20:\x20' + _0x1f41bc));
            _0x5d075f['writeFileSync'](_0x5e7b30, _0x15f34e['join']('\x0a'), 'utf-8');
            console['log'](_0x5ade1d['retro']('🔗\x20-\x20[CHECKER]\x20Fichier\x20temporaire\x20créé\x20à:\x20' + _0x5e7b30));
            await new Promise(_0x4d934d => setTimeout(_0x4d934d, 0xbb8));
            let _0x5db15e = await _0x765296(_0x5e7b30, _0x3d61f1);
            console['log'](_0x5ade1d['retro']('🔗\x20-\x20[CHECKER]\x20Lien\x20de\x20la\x20paste,\x20Expire\x20dans\x201W\x20:\x20' + _0x5db15e));
            await _0x1acdb5['followUp']({ 'content': _0x3c7601['command']['110'] + _0x1f41bc + '\x0a' + _0x3c7601['command']['118'] + _0x5db15e + '\x0a\x20Password\x201\x20link\x20:\x20' + _0x59e7c7 + '\x0a\x20Password\x202\x20link\x20:\x20' + _0x3d61f1 });
            const _0x5731f7 = new _0x4e4080()['setColor']('#0099ff')['setTitle']('🚀\x20**Ch3ck3r\x20T0k3n\x20' + _0x3c7601['command']['21'] + '**\x20🚀')['setDescription']('🔹\x20' + _0x3c7601['command']['109'] + ('\x20:\x20**' + _0xa014bf + '/' + _0x357dd4 + '**\x0a🔸\x20') + _0x3c7601['command']['80'] + ('\x20:\x20**' + _0x45fdbd + '/' + _0x357dd4 + '**\x0a'))['addFields'](_0x11ee7e['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x11ee7e['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [], {
                'name': 'Boosts\x20Used',
                'value': '**' + _0x1b98bf + '**',
                'inline': !![]
            }, {
                'name': 'Boosts\x20Unused',
                'value': '**' + _0x143f69 + '**',
                'inline': !![]
            }, {
                'name': 'Locked',
                'value': '**' + _0x5966be + '**',
                'inline': !![]
            }, {
                'name': 'Unlocked',
                'value': '**' + _0x90bc20 + '**',
                'inline': !![]
            }, {
                'name': 'Redeemable\x20Nitro',
                'value': '**' + _0x1e54eb + '**',
                'inline': !![]
            }, {
                'name': 'Phone\x20Verified',
                'value': '**' + _0xe7d102 + '**',
                'inline': !![]
            }, {
                'name': 'Email\x20Verified',
                'value': '**' + _0x2246e9 + '**',
                'inline': !![]
            })['setImage'](_0x43bde1)['setTimestamp']()['setFooter'](_0x6838d4 + '\x20-\x20' + _0x3c7601['command']['7'] + '\x20MrX');
            await _0x131de7['edit']({ 'embeds': [_0x5731f7] });
            setTimeout(() => {
                _0x5d075f['unlinkSync'](_0xa555c9);
                _0x5d075f['unlinkSync'](_0x5e7b30);
                return console['log'](_0x5ade1d['retro']('🗑️\x20-\x20[CHECKER]\x20Fichier\x20temporaire\x20supprimé'));
            }, 0x1388);
        } catch (_0x365281) {
            console['log'](_0x365281);
            await _0x1acdb5['editReply'](_0x3c7601['command']['77']);
        }
    }
};
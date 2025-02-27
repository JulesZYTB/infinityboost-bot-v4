(function (_0x47b3c2, _0x2d35ea) {
    const _0x3156b6 = _0x263b;
    const _0x26fe52 = _0x47b3c2();
    while (!![]) {
        try {
            const _0x56bfac = parseInt(_0x3156b6(0xeb)) / 0x1 * (-parseInt(_0x3156b6(0xe9)) / 0x2) + -parseInt(_0x3156b6(0xe6)) / 0x3 + -parseInt(_0x3156b6(0xec)) / 0x4 + -parseInt(_0x3156b6(0xe8)) / 0x5 * (-parseInt(_0x3156b6(0xee)) / 0x6) + -parseInt(_0x3156b6(0xed)) / 0x7 + parseInt(_0x3156b6(0xea)) / 0x8 * (-parseInt(_0x3156b6(0xe7)) / 0x9) + parseInt(_0x3156b6(0xef)) / 0xa;
            if (_0x56bfac === _0x2d35ea) {
                break;
            } else {
                _0x26fe52['push'](_0x26fe52['shift']());
            }
        } catch (_0x565388) {
            _0x26fe52['push'](_0x26fe52['shift']());
        }
    }
}(_0x4f64, 0x5553b));
const {SlashCommandBuilder: _0x531b69} = require('@discordjs/builders');
const {
    MessageEmbed: _0x25f1b6,
    MessageActionRow: _0x59759a,
    MessageButton: _0x468d62
} = require('discord.js');
const {
    PasteClient: _0x10c75f,
    Publicity: _0x5d3481,
    ExpireDate: _0x3f1a38
} = require('pastebin-api');
const _0x2a43a4 = new _0x10c75f('snFw6IjuAoxek8-20KIQ4evO3z7tp2ki');
const _0xbd7e32 = require('axios');
const _0x43428c = require('../config.json');
const {performOperation: _0x29fc85} = require('../required/performOp');
function _0x263b(_0x1a15e1, _0x509acb) {
    const _0x4f644b = _0x4f64();
    _0x263b = function (_0x263b2d, _0x31327d) {
        _0x263b2d = _0x263b2d - 0xe6;
        let _0x53133d = _0x4f644b[_0x263b2d];
        return _0x53133d;
    };
    return _0x263b(_0x1a15e1, _0x509acb);
}
function _0x4f64() {
    const _0x2b5b81 = [
        '2596090MsTWVH',
        '6tbiTUu',
        '18946610lDIFie',
        '1444035ULmvsN',
        '23994SAUqRv',
        '2631065uwnlit',
        '56MmlPza',
        '1792DrsbZz',
        '14394JMjAwZ',
        '875776sETaeF'
    ];
    _0x4f64 = function () {
        return _0x2b5b81;
    };
    return _0x4f64();
}
const _0x5d8032 = require('gradient-string');
const _0xab010b = require('fs');
const _0x117811 = require('path');
const _0x2ab057 = JSON['parse'](_0xab010b['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x5e9d6d = _0x43428c['service']['langue_shop'];
const _0x268a33 = _0x2ab057[_0x5e9d6d];
let _0x41f0cc = _0x43428c['service']['name_shop'];
let _0x1144c5 = _0x43428c['service']['banner'];
let _0x49f184 = _0x43428c['apikey'];
let _0x1f1ee5;
async function _0x1ee687() {
    return new Promise((_0x4ddcf8, _0x2d2767) => {
        _0x29fc85((_0x5d3ffb, _0x3918ea) => {
            if (_0x5d3ffb) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x2d2767(_0x5d3ffb);
            } else {
                _0x1f1ee5 = _0x3918ea;
                _0x4ddcf8(_0x1f1ee5);
            }
        });
    });
}
async function _0x2f7baa(_0x339564) {
    const _0x4704ac = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let _0x2d6471 = '';
    for (let _0x5bb600 = 0x0; _0x5bb600 < _0x339564; _0x5bb600++) {
        const _0xa9a752 = Math['floor'](Math['random']() * _0x4704ac['length']);
        _0x2d6471 += _0x4704ac['charAt'](_0xa9a752);
    }
    return _0x2d6471;
}
function _0x1d9c93(_0x103981, _0x27a27b) {
    const _0x577bf9 = _0xab010b['readFileSync'](_0x103981, 'utf8');
    let _0x2e2706 = _0x577bf9['split']('\x0a');
    const _0x198613 = _0x2e2706['splice'](0x0, _0x27a27b);
    _0x2e2706 = _0x2e2706['filter'](_0x40658d => _0x40658d['trim']() !== '');
    _0xab010b['writeFileSync'](_0x103981, _0x2e2706['join']('\x0a'));
    return _0x198613;
}
async function _0x37376f(_0x3622b1) {
    try {
        const _0x53ac1e = _0xab010b['readFileSync'](_0x3622b1, 'utf-8');
        const _0x2d55df = _0x53ac1e['split']('\x0a');
        const _0x4cb0e2 = _0x2d55df['filter'](_0x36f9d8 => _0x36f9d8['trim']()['length'] > 0x0);
        return _0x4cb0e2['length'];
    } catch (_0x5ee32a) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x5ee32a);
        return 0x0;
    }
}
module['exports'] = {
    'data': new _0x531b69()['setName']('send')['setDescription'](_0x268a33['command']['10'])['addIntegerOption'](_0x428f6c => _0x428f6c['setName']('nombre')['setDescription'](_0x268a33['command']['11'])['setRequired'](!![]))['addIntegerOption'](_0xbf7bbb => _0xbf7bbb['setName']('type')['setDescription'](_0x268a33['command']['2'])['setRequired'](!![])['addChoice']('1\x20' + _0x268a33['command']['3'], 0x1)['addChoice']('3\x20' + _0x268a33['command']['3'], 0x3)),
    async 'execute'(_0x8b5969) {
        await _0x8b5969['deferReply']();
        await _0x1ee687();
        const _0x241213 = _0x8b5969['options']['getInteger']('nombre');
        const _0x4c0e04 = _0x8b5969['options']['getInteger']('type');
        let _0x5c5b5d = [
            _0x43428c['admin']['id_1'],
            _0x43428c['admin']['id_2'],
            _0x43428c['admin']['id_3']
        ];
        if (!_0x241213) {
            return _0x8b5969['editReply'](_0x268a33['command']['26']);
        }
        const _0x576671 = '/stock/';
        let _0x1f7d4f = _0x117811['join'](__dirname, '..', _0x576671, 'stock-1m.txt');
        let _0x248dc6 = _0x117811['join'](__dirname, '..', _0x576671, 'stock-3m.txt');
        let _0x1369dd;
        if (_0x4c0e04 === 0x1) {
            _0x1369dd = _0x1f7d4f;
        } else if (_0x4c0e04 === 0x3) {
            _0x1369dd = _0x248dc6;
        }
        if (!_0x5c5b5d['includes'](_0x8b5969['user']['id'])) {
            const _0xeb621d = new _0x59759a()['addComponents'](new _0x468d62()['setLabel'](_0x268a33['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x852c16 = new _0x25f1b6()['setColor']('#071b47')['setTitle'](_0x268a33['command']['27'])['setDescription'](_0x268a33['command']['12'])['setImage'](_0x1144c5)['setTimestamp']()['setFooter'](_0x41f0cc + '\x20-\x20' + _0x268a33['command']['7'] + '\x20MrX');
            return await _0x8b5969['editReply']({
                'embeds': [_0x852c16],
                'components': [_0xeb621d]
            });
        }
        const _0x5356d5 = await _0xbd7e32['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x49f184 + '&machineid=' + _0x1f1ee5 + '&shopname=' + _0x41f0cc + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
        if (_0x5356d5['data']['success'] === ![]) {
            const _0x180fa9 = new _0x25f1b6()['setColor']('#ff0000')['setTitle'](_0x268a33['command']['5'])['setImage'](_0x1144c5)['setTimestamp']()['setFooter']('' + _0x268a33['command']['7'] + '\x20MrX');
            return _0x8b5969['editReply']({ 'embeds': [_0x180fa9] });
        }
        let _0x47a275 = await _0x37376f(_0x1369dd);
        if (_0x47a275 === 0x0) {
            const _0xdd045c = new _0x25f1b6()['setColor']('#ff0000')['setTitle'](_0x268a33['command']['33'])['setDescription'](_0x41f0cc + '\x20' + _0x268a33['command']['13'])['setImage'](_0x1144c5)['setTimestamp']()['setFooter'](_0x41f0cc + '\x20-\x20' + _0x268a33['command']['7'] + '\x20MrX');
            return _0x8b5969['editReply']({ 'embeds': [_0xdd045c] });
        } else if (_0x241213 / 0x2 > _0x47a275 && _0x47a275 !== _0x241213 / 0x2) {
            const _0x7f2444 = new _0x25f1b6()['setColor']('#ff0000')['setTitle'](_0x268a33['command']['33'])['setDescription'](_0x41f0cc + '\x20' + _0x268a33['command']['67'])['setImage'](_0x1144c5)['setTimestamp']()['setFooter'](_0x41f0cc + '\x20-\x20' + _0x268a33['command']['7'] + '\x20MrX');
            return _0x8b5969['editReply']({ 'embeds': [_0x7f2444] });
        }
        try {
            async function _0x532a78(_0x256394, _0x3d9752 = 0x0) {
                try {
                    let _0x20350e = await _0x2f7baa(0xa);
                    let _0x3e0fcb = _0x1d9c93(_0x1369dd, _0x241213);
                    let _0x3a4d6b = _0x3e0fcb['map'](_0x5bbffe => _0x5bbffe['replace'](/['\[\]]/g, ''));
                    let _0x389b13 = _0x3a4d6b['join']('\x0a');
                    const _0x514849 = await _0xbd7e32['post']('http://pastes.io/api/paste/create', {
                        'content': _0x389b13,
                        'status': 0x2,
                        'expire': '1W',
                        'title': _0x20350e + '-T0k3nN1tr0',
                        'password': _0x256394
                    }, {
                        'headers': {
                            'Accept': 'application/json',
                            'Authorization': 'Bearer\x2040d403ae833e6eec3dbe0fe2f219863d5df1767c51073e2e438e1bf4993711f3'
                        }
                    });
                    if (_0x514849['data']) {
                        if (_0x514849['data']['success']) {
                            return _0x514849['data']['success']['paste_url'];
                        } else if (_0x514849['data']['error']) {
                            if (_0x3d9752 < 0x3) {
                                await new Promise(_0x2ae448 => setTimeout(_0x2ae448, 0xbb8));
                                return await _0x532a78(_0x256394, _0x3d9752 + 0x1);
                            } else {
                                return 'Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste.';
                            }
                        }
                    }
                } catch (_0x36e02e) {
                    console['error']('Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste:\x20', _0x36e02e);
                    return null;
                }
            }
            const _0x5728ff = await _0x2f7baa(0xa);
            let _0x2f5248 = await _0x532a78(_0x5728ff);
            if (_0x2f5248) {
                console['log'](_0x5d8032['retro']('🔗\x20-\x20[SEND]\x20Lien\x20de\x20la\x20paste,\x20Expire\x20dans\x201W\x20:\x20' + _0x2f5248));
                const _0x10208c = new _0x25f1b6()['setColor']('#0099ff')['setTitle'](_0x268a33['command']['14'])['setDescription']('🔹\x20**' + _0x268a33['command']['15'] + ('\x20:**\x20' + _0x241213 + '\x0a\x0a🔗\x20[') + _0x268a33['command']['16'] + ('](\x20' + _0x2f5248 + '\x20),\x20password\x20:\x20') + _0x5728ff)['setImage'](_0x1144c5)['setTimestamp']()['setFooter'](_0x41f0cc + '\x20-\x20' + _0x268a33['command']['7'] + '\x20MrX');
                await _0x8b5969['editReply']({ 'embeds': [_0x10208c] });
            } else {
                const _0x54bb84 = new _0x25f1b6()['setColor']('#ff0000')['setTitle'](_0x268a33['command']['17'])['setDescription'](_0x268a33['command']['18'])['setImage'](_0x1144c5)['setTimestamp']()['setFooter'](_0x41f0cc + '\x20-\x20' + _0x268a33['command']['7'] + '\x20MrX');
                await _0x8b5969['editReply']({ 'embeds': [_0x54bb84] });
            }
        } catch (_0x544bcb) {
            console['error'](_0x544bcb);
            const _0x1472f9 = new _0x25f1b6()['setColor']('#ff0000')['setTitle'](_0x268a33['command']['19'])['setDescription'](_0x268a33['command']['20'])['setImage'](_0x1144c5)['setTimestamp']()['setFooter'](_0x41f0cc + '\x20-\x20' + _0x268a33['command']['7'] + '\x20MrX');
            await _0x8b5969['editReply']({ 'embeds': [_0x1472f9] });
        }
    }
};
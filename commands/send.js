function _0x45e4() {
    const _0x35355a = [
        '11IKXFDw',
        '70240mQfxVY',
        '467385pZgocw',
        '23503692MPqvpT',
        '6089632ymZfgI',
        '3zYOTOP',
        '452906AhRvGX',
        '414PyhfQJ',
        '23401sqdScd',
        '4YBYpsU',
        '1194jejxQj',
        '1769688UhLGMp'
    ];
    _0x45e4 = function () {
        return _0x35355a;
    };
    return _0x45e4();
}
(function (_0x5dc49f, _0x1d0a55) {
    const _0xedd8df = _0x18f3;
    const _0x373804 = _0x5dc49f();
    while (!![]) {
        try {
            const _0x229e49 = -parseInt(_0xedd8df(0x9c)) / 0x1 * (-parseInt(_0xedd8df(0x9d)) / 0x2) + -parseInt(_0xedd8df(0x96)) / 0x3 + -parseInt(_0xedd8df(0x94)) / 0x4 * (-parseInt(_0xedd8df(0x99)) / 0x5) + parseInt(_0xedd8df(0x95)) / 0x6 * (-parseInt(_0xedd8df(0x93)) / 0x7) + -parseInt(_0xedd8df(0x9b)) / 0x8 + parseInt(_0xedd8df(0x92)) / 0x9 * (-parseInt(_0xedd8df(0x98)) / 0xa) + -parseInt(_0xedd8df(0x97)) / 0xb * (-parseInt(_0xedd8df(0x9a)) / 0xc);
            if (_0x229e49 === _0x1d0a55) {
                break;
            } else {
                _0x373804['push'](_0x373804['shift']());
            }
        } catch (_0x9ebd31) {
            _0x373804['push'](_0x373804['shift']());
        }
    }
}(_0x45e4, 0x5fb50));
const {SlashCommandBuilder: _0x3307e4} = require('@discordjs/builders');
const {
    MessageEmbed: _0x19dbcb,
    MessageActionRow: _0x4b5bfa,
    MessageButton: _0x141c00
} = require('discord.js');
const _0x524322 = require('axios');
const _0x34be10 = require('../config.json');
const {performOperation: _0x3c8eaf} = require('../required/performOp');
const _0x244b2e = require('gradient-string');
const _0x520352 = require('fs');
const _0xa58c69 = require('path');
const _0x371b6f = JSON['parse'](_0x520352['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x5410d0 = _0x34be10['service']['langue_shop'];
const _0x462ab5 = _0x371b6f[_0x5410d0];
let _0xf2f65 = _0x34be10['service']['name_shop'];
let _0x394802 = _0x34be10['service']['banner'];
let _0x571da9 = _0x34be10['apikey'];
let _0x557f9f;
function _0x18f3(_0x2db251, _0x576c79) {
    const _0x45e46f = _0x45e4();
    _0x18f3 = function (_0x18f37c, _0x56e862) {
        _0x18f37c = _0x18f37c - 0x92;
        let _0x482442 = _0x45e46f[_0x18f37c];
        return _0x482442;
    };
    return _0x18f3(_0x2db251, _0x576c79);
}
async function _0x12cadb() {
    return new Promise((_0x34af89, _0x5ebd00) => {
        _0x3c8eaf((_0x35181a, _0x191cc1) => {
            if (_0x35181a) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x5ebd00(_0x35181a);
            } else {
                _0x557f9f = _0x191cc1;
                _0x34af89(_0x557f9f);
            }
        });
    });
}
async function _0x332c01(_0x9c8ee5) {
    const _0x5d89fa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let _0x36b1ac = '';
    for (let _0x1ca38d = 0x0; _0x1ca38d < _0x9c8ee5; _0x1ca38d++) {
        const _0x51b31f = Math['floor'](Math['random']() * _0x5d89fa['length']);
        _0x36b1ac += _0x5d89fa['charAt'](_0x51b31f);
    }
    return _0x36b1ac;
}
function _0x13482f(_0x5a6726, _0x2e0ff5) {
    const _0x11442e = _0x520352['readFileSync'](_0x5a6726, 'utf8');
    let _0x1e958c = _0x11442e['split']('\x0a');
    const _0x231659 = _0x1e958c['splice'](0x0, _0x2e0ff5);
    _0x1e958c = _0x1e958c['filter'](_0x48591a => _0x48591a['trim']() !== '');
    _0x520352['writeFileSync'](_0x5a6726, _0x1e958c['join']('\x0a'));
    return _0x231659;
}
async function _0x4b6350(_0x8d3234) {
    try {
        const _0x2b8767 = _0x520352['readFileSync'](_0x8d3234, 'utf-8');
        const _0x299f02 = _0x2b8767['split']('\x0a');
        const _0x251290 = _0x299f02['filter'](_0x5993ae => _0x5993ae['trim']()['length'] > 0x0);
        return _0x251290['length'];
    } catch (_0x3ea6ce) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x3ea6ce);
        return 0x0;
    }
}
module['exports'] = {
    'data': new _0x3307e4()['setName']('send')['setDescription'](_0x462ab5['command']['10'])['addIntegerOption'](_0x493473 => _0x493473['setName']('nombre')['setDescription'](_0x462ab5['command']['11'])['setRequired'](!![]))['addIntegerOption'](_0x4fc80e => _0x4fc80e['setName']('type')['setDescription'](_0x462ab5['command']['2'])['setRequired'](!![])['addChoice']('1\x20' + _0x462ab5['command']['3'], 0x1)['addChoice']('3\x20' + _0x462ab5['command']['3'], 0x3)),
    async 'execute'(_0x3b17da) {
        await _0x3b17da['deferReply']();
        await _0x12cadb();
        const _0x288427 = _0x3b17da['options']['getInteger']('nombre');
        const _0x51f498 = _0x3b17da['options']['getInteger']('type');
        let _0x4fbca9 = [
            _0x34be10['admin']['id_1'],
            _0x34be10['admin']['id_2'],
            _0x34be10['admin']['id_3']
        ];
        if (!_0x288427) {
            return _0x3b17da['editReply'](_0x462ab5['command']['26']);
        }
        const _0x22b859 = '/stock/';
        let _0xa37933 = _0xa58c69['join'](__dirname, '..', _0x22b859, 'stock-1m.txt');
        let _0x3540bd = _0xa58c69['join'](__dirname, '..', _0x22b859, 'stock-3m.txt');
        let _0x1614ec;
        if (_0x51f498 === 0x1) {
            _0x1614ec = _0xa37933;
        } else if (_0x51f498 === 0x3) {
            _0x1614ec = _0x3540bd;
        }
        if (!_0x4fbca9['includes'](_0x3b17da['user']['id'])) {
            const _0x328d1a = new _0x4b5bfa()['addComponents'](new _0x141c00()['setLabel'](_0x462ab5['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x237371 = new _0x19dbcb()['setColor']('#071b47')['setTitle'](_0x462ab5['command']['27'])['setDescription'](_0x462ab5['command']['12'])['setImage'](_0x394802)['setTimestamp']()['setFooter'](_0xf2f65 + '\x20-\x20' + _0x462ab5['command']['7'] + '\x20MrX');
            return await _0x3b17da['editReply']({
                'embeds': [_0x237371],
                'components': [_0x328d1a]
            });
        }
        const _0x50deea = await _0x524322['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x571da9 + '&machineid=' + _0x557f9f + '&shopname=' + _0xf2f65 + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
        if (_0x50deea['data']['success'] === ![]) {
            const _0x1b1f3f = new _0x19dbcb()['setColor']('#ff0000')['setTitle'](_0x462ab5['command']['5'])['setImage'](_0x394802)['setTimestamp']()['setFooter']('' + _0x462ab5['command']['7'] + '\x20MrX');
            return _0x3b17da['editReply']({ 'embeds': [_0x1b1f3f] });
        }
        let _0x2ae94d = await _0x4b6350(_0x1614ec);
        if (_0x2ae94d === 0x0) {
            const _0x24b3df = new _0x19dbcb()['setColor']('#ff0000')['setTitle'](_0x462ab5['command']['33'])['setDescription'](_0xf2f65 + '\x20' + _0x462ab5['command']['13'])['setImage'](_0x394802)['setTimestamp']()['setFooter'](_0xf2f65 + '\x20-\x20' + _0x462ab5['command']['7'] + '\x20MrX');
            return _0x3b17da['editReply']({ 'embeds': [_0x24b3df] });
        } else if (_0x288427 / 0x2 > _0x2ae94d && _0x2ae94d !== _0x288427 / 0x2) {
            const _0x582ed9 = new _0x19dbcb()['setColor']('#ff0000')['setTitle'](_0x462ab5['command']['33'])['setDescription'](_0xf2f65 + '\x20' + _0x462ab5['command']['67'])['setImage'](_0x394802)['setTimestamp']()['setFooter'](_0xf2f65 + '\x20-\x20' + _0x462ab5['command']['7'] + '\x20MrX');
            return _0x3b17da['editReply']({ 'embeds': [_0x582ed9] });
        }
        try {
            async function _0x164ece(_0x3b4a94, _0x4d74f0 = 0x0) {
                try {
                    let _0x57d9b7 = await _0x332c01(0xa);
                    let _0x520812 = _0x13482f(_0x1614ec, _0x288427);
                    let _0x34bfbf = _0x520812['map'](_0x1b33c8 => _0x1b33c8['replace'](/['\[\]]/g, ''));
                    let _0x52edc9 = _0x34bfbf['join']('\x0a');
                    const _0x41a002 = await _0x524322['post']('http://pastes.io/api/paste/create', {
                        'content': _0x52edc9,
                        'status': 0x2,
                        'expire': '1W',
                        'title': _0x57d9b7 + '-T0k3nN1tr0',
                        'password': _0x3b4a94
                    }, {
                        'headers': {
                            'Accept': 'application/json',
                            'Authorization': 'Bearer\x2040d403ae833e6eec3dbe0fe2f219863d5df1767c51073e2e438e1bf4993711f3'
                        }
                    });
                    if (_0x41a002['data']) {
                        if (_0x41a002['data']['success']) {
                            return _0x41a002['data']['success']['paste_url'];
                        } else if (_0x41a002['data']['error']) {
                            if (_0x4d74f0 < 0x3) {
                                await new Promise(_0x3c4868 => setTimeout(_0x3c4868, 0xbb8));
                                return await _0x164ece(_0x3b4a94, _0x4d74f0 + 0x1);
                            } else {
                                return 'Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste.';
                            }
                        }
                    }
                } catch (_0x233d35) {
                    console['error']('Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste:\x20', _0x233d35);
                    return null;
                }
            }
            const _0x2a3206 = await _0x332c01(0xa);
            let _0x2aa40a = await _0x164ece(_0x2a3206);
            if (_0x2aa40a) {
                console['log'](_0x244b2e['retro']('🔗\x20-\x20[SEND]\x20Lien\x20de\x20la\x20paste,\x20Expire\x20dans\x201W\x20:\x20' + _0x2aa40a));
                const _0x330091 = new _0x19dbcb()['setColor']('#0099ff')['setTitle'](_0x462ab5['command']['14'])['setDescription']('🔹\x20**' + _0x462ab5['command']['15'] + ('\x20:**\x20' + _0x288427 + '\x0a\x0a🔗\x20[') + _0x462ab5['command']['16'] + ('](\x20' + _0x2aa40a + '\x20),\x20password\x20:\x20') + _0x2a3206)['setImage'](_0x394802)['setTimestamp']()['setFooter'](_0xf2f65 + '\x20-\x20' + _0x462ab5['command']['7'] + '\x20MrX');
                await _0x3b17da['editReply']({ 'embeds': [_0x330091] });
            } else {
                const _0x570de4 = new _0x19dbcb()['setColor']('#ff0000')['setTitle'](_0x462ab5['command']['17'])['setDescription'](_0x462ab5['command']['18'])['setImage'](_0x394802)['setTimestamp']()['setFooter'](_0xf2f65 + '\x20-\x20' + _0x462ab5['command']['7'] + '\x20MrX');
                await _0x3b17da['editReply']({ 'embeds': [_0x570de4] });
            }
        } catch (_0x33c484) {
            console['error'](_0x33c484);
            const _0x1200e0 = new _0x19dbcb()['setColor']('#ff0000')['setTitle'](_0x462ab5['command']['19'])['setDescription'](_0x462ab5['command']['20'])['setImage'](_0x394802)['setTimestamp']()['setFooter'](_0xf2f65 + '\x20-\x20' + _0x462ab5['command']['7'] + '\x20MrX');
            await _0x3b17da['editReply']({ 'embeds': [_0x1200e0] });
        }
    }
};
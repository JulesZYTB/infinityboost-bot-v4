(function (_0x22a330, _0x4c8330) {
    const _0x490bfd = _0x36ff;
    const _0x254cc9 = _0x22a330();
    while (!![]) {
        try {
            const _0x487261 = -parseInt(_0x490bfd(0x68)) / 0x1 + parseInt(_0x490bfd(0x70)) / 0x2 + parseInt(_0x490bfd(0x6d)) / 0x3 + parseInt(_0x490bfd(0x6a)) / 0x4 + -parseInt(_0x490bfd(0x69)) / 0x5 * (-parseInt(_0x490bfd(0x6c)) / 0x6) + -parseInt(_0x490bfd(0x6f)) / 0x7 * (-parseInt(_0x490bfd(0x6b)) / 0x8) + -parseInt(_0x490bfd(0x6e)) / 0x9;
            if (_0x487261 === _0x4c8330) {
                break;
            } else {
                _0x254cc9['push'](_0x254cc9['shift']());
            }
        } catch (_0xbb5a6e) {
            _0x254cc9['push'](_0x254cc9['shift']());
        }
    }
}(_0x408d, 0xba976));
const {SlashCommandBuilder: _0x65f591} = require('@discordjs/builders');
const {
    MessageEmbed: _0x206bdf,
    MessageActionRow: _0x422395,
    MessageButton: _0x1c3181
} = require('discord.js');
const _0x435f2b = require('axios');
const _0xfcf3a2 = require('../config.json');
const {performOperation: _0x130bcd} = require('../required/performOp');
const _0x16de91 = require('gradient-string');
const _0x21e13a = require('fs');
const _0x333aaf = require('path');
const _0xa9d3fc = require('os');
const _0x203774 = require('line-by-line');
const _0x5babc4 = JSON['parse'](_0x21e13a['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x3fc3c2 = _0xfcf3a2['service']['langue_shop'];
function _0x36ff(_0x41678e, _0x513469) {
    const _0x408d2b = _0x408d();
    _0x36ff = function (_0x36ff62, _0x167d4b) {
        _0x36ff62 = _0x36ff62 - 0x68;
        let _0x1c6607 = _0x408d2b[_0x36ff62];
        return _0x1c6607;
    };
    return _0x36ff(_0x41678e, _0x513469);
}
const _0x1473a6 = _0x5babc4[_0x3fc3c2];
let _0x112a5e = _0xfcf3a2['service']['name_shop'];
let _0x4e2ac = _0xfcf3a2['service']['banner'];
let _0x8a3297 = _0xfcf3a2['apikey'];
let _0x1b3ae5;
async function _0x52a593() {
    return new Promise((_0x429862, _0x1bb31c) => {
        _0x130bcd((_0x2fc66c, _0x7e86ad) => {
            if (_0x2fc66c) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x1bb31c(_0x2fc66c);
            } else {
                _0x1b3ae5 = _0x7e86ad;
                _0x429862(_0x1b3ae5);
            }
        });
    });
}
async function _0x32a80f(_0x4c1916) {
    const _0x1a0732 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let _0x366984 = '';
    for (let _0x5dd23c = 0x0; _0x5dd23c < _0x4c1916; _0x5dd23c++) {
        const _0x2c95f5 = Math['floor'](Math['random']() * _0x1a0732['length']);
        _0x366984 += _0x1a0732['charAt'](_0x2c95f5);
    }
    return _0x366984;
}
async function _0x3a3076(_0x2333ff) {
    try {
        const _0x54ac9d = _0x21e13a['readFileSync'](_0x2333ff, 'utf-8');
        const _0x4c9153 = _0x54ac9d['split']('\x0a');
        const _0x2a2841 = _0x4c9153['filter'](_0x2a3703 => _0x2a3703['trim']()['length'] > 0x0);
        return _0x2a2841['length'];
    } catch (_0x381aca) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x381aca);
        return 0x0;
    }
}
async function _0x36321a(_0x57ff61) {
    if (_0x57ff61['length'] <= 0x14) {
        return _0x57ff61;
    }
    let _0x2dc36d = Math['min'](0xf, Math['ceil'](_0x57ff61['length'] * 0.2));
    let _0x19cb89 = Math['min'](0xf, Math['ceil'](_0x57ff61['length'] * 0.1));
    const _0x3a9301 = _0x57ff61['slice'](0x0, _0x2dc36d);
    const _0x1c1677 = _0x57ff61['slice'](-_0x19cb89);
    const _0x46060a = _0x57ff61['length'] - _0x2dc36d - _0x19cb89;
    return '' + _0x3a9301 + '*'['repeat'](_0x46060a - 0x14) + _0x1c1677;
}
async function _0x4622be(_0x5678e6, _0x47ac45) {
    try {
        const _0x55e37b = _0x333aaf['dirname'](_0x47ac45);
        if (!_0x21e13a['existsSync'](_0x55e37b)) {
            _0x21e13a['mkdirSync'](_0x55e37b, { 'recursive': !![] });
        }
        _0x21e13a['appendFileSync'](_0x47ac45, _0x5678e6 + '\x0a');
        console['log'](_0x16de91['retro']('📄\x20-\x20Send\x20OUTPUT\x20sauvegardé\x20avec\x20succès.'));
        return !![];
    } catch (_0xb4faa1) {
        console['error'](_0x16de91['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20sauvegarde\x20dans\x20' + _0x47ac45 + ':', _0xb4faa1));
        return ![];
    }
}
async function _0x28da43(_0x11b1e2, _0x1006e1) {
    let _0x3317b9 = await _0x36321a(_0x11b1e2);
    let _0x2b404c = await _0x3a3076(_0x1006e1);
    let _0x14f901 = '';
    if (!_0x21e13a['existsSync'](_0x1006e1)) {
        console['log'](_0x16de91['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x41eb23 = [];
    const _0xa23ec4 = new _0x203774(_0x1006e1);
    _0xa23ec4['on']('error', _0x574f12 => {
        console['error'](_0x16de91['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x574f12));
    });
    _0xa23ec4['on']('line', _0x1d6557 => {
        const _0x2d5a69 = _0x1d6557['trim']();
        if (!_0x2d5a69['includes'](_0x11b1e2['trim']())) {
            _0x41eb23['push'](_0x2d5a69);
        }
    });
    _0xa23ec4['on']('end', async () => {
        if (_0x41eb23['length'] === 0x0 && _0x2b404c !== 0x1) {
            console['log'](_0x16de91['retro']('⛔\x20-\x20Le\x20token\x20' + _0x3317b9 + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x2b404c !== 0x1) {
            _0x14f901 = _0x41eb23['join'](_0xa9d3fc['EOL']);
        } else {
            _0x14f901 = '';
        }
        _0x21e13a['writeFile'](_0x1006e1, _0x14f901, _0x92cec0 => {
            if (_0x92cec0) {
                console['error'](_0x16de91['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x92cec0));
                return;
            }
            console['log'](_0x16de91['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x3317b9 + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x2658c8(_0x9bb7ee = 0x0, _0x2e0eaf, _0x58f8a8, _0x3d9eb1, _0x1a6b92) {
    const _0x44ae9e = await _0x435f2b['post']('http://pastes.io/api/paste/create', {
        'content': _0x2e0eaf,
        'status': 0x2,
        'expire': '1W',
        'title': _0x58f8a8 + '-by-send',
        'password': _0x1a6b92
    }, {
        'headers': {
            'Accept': 'application/json',
            'Authorization': 'Bearer\x2040d403ae833e6eec3dbe0fe2f219863d5df1767c51073e2e438e1bf4993711f3'
        }
    });
    if (_0x44ae9e['data'] && _0x44ae9e['data']['success']) {
        await _0x4622be(_0x44ae9e['data']['success']['paste_url'] + '\x20password\x20:\x20' + _0x1a6b92, _0x3d9eb1);
        return _0x44ae9e['data']['success']['paste_url'];
    } else if (_0x44ae9e['data'] && _0x44ae9e['data']['error']) {
        console['error']('Erreur\x20API:', _0x44ae9e['data']['error']);
        await new Promise(_0x56157f => setTimeout(_0x56157f, 0xbb8));
        if (_0x9bb7ee < 0x3) {
            await _0x2658c8(_0x9bb7ee + 0x1, _0x2e0eaf, _0x58f8a8);
        } else {
            return 'Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste\x20ratelimite.';
        }
    }
}
async function _0x5efa64(_0x5d7489, _0xdb6236, _0x3eeb1c) {
    try {
        let _0x1a666f = [];
        _0x1a666f['push']('send\x20dev\x20by\x20MrX');
        const _0x3addd6 = '/output/';
        let _0x15e109 = _0x333aaf['join'](__dirname, '..', _0x3addd6, 'link.txt');
        let _0x30b0bf = _0x333aaf['join'](__dirname, '..', _0x3addd6, 'send.txt');
        let _0x3e9a35 = await _0x32a80f(0xa);
        const _0x45460a = _0x21e13a['readFileSync'](_0xdb6236, 'utf8')['toString']()['split']('\x0a');
        for (let _0x81c805 = 0x0; _0x81c805 < Math['min'](_0x3eeb1c, _0x45460a['length']); _0x81c805++) {
            const _0x57df76 = _0x45460a[_0x81c805]['trim']();
            if (_0x57df76) {
                _0x1a666f['push'](_0x57df76);
                await new Promise(_0x23ac71 => setTimeout(_0x23ac71, 0x64));
                await _0x28da43(_0x57df76, _0xdb6236);
            } else {
                _0x1a666f['push'](_0x1473a6['command']['33']);
            }
        }
        let _0x2f769b = _0x1a666f['slice'](0x1)['join']('\x0a');
        await _0x4622be(_0x2f769b, _0x30b0bf);
        return await _0x2658c8(0x0, _0x2f769b, _0x3e9a35, _0x15e109, _0x5d7489);
    } catch (_0x4955ee) {
        console['error']('Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste:\x20', _0x4955ee);
        return null;
    }
}
function _0x408d() {
    const _0x3f6b77 = [
        '462918EDtTur',
        '5OQGoqO',
        '4103996LRzFnQ',
        '30840POHZdx',
        '1530444fJGOpH',
        '3048264lBepBh',
        '20512260UhRtXK',
        '1890jhdkCb',
        '336650JoVhzn'
    ];
    _0x408d = function () {
        return _0x3f6b77;
    };
    return _0x408d();
}
module['exports'] = {
    'data': new _0x65f591()['setName']('send')['setDescription'](_0x1473a6['command']['10'])['addIntegerOption'](_0x2fbbf6 => _0x2fbbf6['setName']('nombre')['setDescription'](_0x1473a6['command']['11'])['setRequired'](!![]))['addIntegerOption'](_0x27545e => _0x27545e['setName']('type')['setDescription'](_0x1473a6['command']['2'])['setRequired'](!![])['addChoice']('Nitro\x20token\x201\x20' + _0x1473a6['command']['3'], 0x1)['addChoice']('Nitro\x20token\x203\x20' + _0x1473a6['command']['3'], 0x3)['addChoice'](_0x1473a6['command']['122'] + '\x201\x20' + _0x1473a6['command']['3'], 0x4)['addChoice'](_0x1473a6['command']['123'] + '\x201\x20' + _0x1473a6['command']['3'], 0x5)['addChoice'](_0x1473a6['command']['122'] + '\x201\x20' + _0x1473a6['command']['124'], 0x6)['addChoice'](_0x1473a6['command']['123'] + '\x201\x20' + _0x1473a6['command']['124'], 0x7)),
    async 'execute'(_0x214da7) {
        await _0x214da7['deferReply']();
        await _0x52a593();
        const _0x46b004 = _0x214da7['options']['getInteger']('nombre');
        const _0x2edb89 = _0x214da7['options']['getInteger']('type');
        let _0xc844ad = [
            _0xfcf3a2['admin']['id_1'],
            _0xfcf3a2['admin']['id_2'],
            _0xfcf3a2['admin']['id_3']
        ];
        if (!_0x46b004) {
            return _0x214da7['editReply'](_0x1473a6['command']['26']);
        }
        const _0x492ad2 = '/stock/';
        const _0x1fa748 = {
            0x1: 'Nitro\x20token\x201\x20' + _0x1473a6['command']['3'],
            0x3: 'Nitro\x20token\x203\x20' + _0x1473a6['command']['3'],
            0x4: _0x1473a6['command']['122'] + '\x201\x20' + _0x1473a6['command']['3'],
            0x5: _0x1473a6['command']['123'] + '\x201\x20' + _0x1473a6['command']['3'],
            0x6: _0x1473a6['command']['122'] + '\x201\x20' + _0x1473a6['command']['124'],
            0x7: _0x1473a6['command']['123'] + '\x201\x20' + _0x1473a6['command']['124']
        };
        const _0x37cbf8 = _0x1fa748[_0x2edb89] || 'ERROR';
        let _0x2893a9 = _0x333aaf['join'](__dirname, '..', _0x492ad2, 'stock-1m.txt');
        let _0x2f12bd = _0x333aaf['join'](__dirname, '..', _0x492ad2, 'stock-3m.txt');
        let _0x3e692f = _0x333aaf['join'](__dirname, '..', _0x492ad2, 'nitro-basic-1m.txt');
        let _0x1a9b49 = _0x333aaf['join'](__dirname, '..', _0x492ad2, 'nitro-basic-1y.txt');
        let _0x2794a9 = _0x333aaf['join'](__dirname, '..', _0x492ad2, 'nitro-boost-1m.txt');
        let _0x3f03ea = _0x333aaf['join'](__dirname, '..', _0x492ad2, 'nitro-boost-1y.txt');
        let _0x16467c;
        if (_0x2edb89 === 0x1) {
            _0x16467c = _0x2893a9;
        } else if (_0x2edb89 === 0x3) {
            _0x16467c = _0x2f12bd;
        } else if (_0x2edb89 === 0x4) {
            _0x16467c = _0x3e692f;
        } else if (_0x2edb89 === 0x5) {
            _0x16467c = _0x2794a9;
        } else if (_0x2edb89 === 0x6) {
            _0x16467c = _0x1a9b49;
        } else if (_0x2edb89 === 0x7) {
            _0x16467c = _0x3f03ea;
        }
        if (!_0xc844ad['includes'](_0x214da7['user']['id'])) {
            const _0x4ce794 = new _0x422395()['addComponents'](new _0x1c3181()['setLabel'](_0x1473a6['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x2302df = new _0x206bdf()['setColor']('#071b47')['setTitle'](_0x1473a6['command']['27'])['setDescription'](_0x1473a6['command']['12'])['setImage'](_0x4e2ac)['setTimestamp']()['setFooter'](_0x112a5e + '\x20-\x20' + _0x1473a6['command']['7'] + '\x20MrX');
            return await _0x214da7['editReply']({
                'embeds': [_0x2302df],
                'components': [_0x4ce794]
            });
        }
        const _0x6e92dc = await _0x435f2b['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x8a3297 + '&machineid=' + _0x1b3ae5 + '&shopname=' + _0x112a5e + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
        if (_0x6e92dc['data']['success'] === ![]) {
            const _0x18827d = new _0x206bdf()['setColor']('#ff0000')['setTitle'](_0x1473a6['command']['5'])['setImage'](_0x4e2ac)['setTimestamp']()['setFooter']('' + _0x1473a6['command']['7'] + '\x20MrX');
            return _0x214da7['editReply']({ 'embeds': [_0x18827d] });
        }
        let _0x3b8350 = await _0x3a3076(_0x16467c);
        if (_0x3b8350 === 0x0) {
            const _0x340e11 = new _0x206bdf()['setColor']('#ff0000')['setTitle'](_0x1473a6['command']['33'])['setDescription'](_0x112a5e + '\x20' + _0x1473a6['command']['13'])['setImage'](_0x4e2ac)['setTimestamp']()['setFooter'](_0x112a5e + '\x20-\x20' + _0x1473a6['command']['7'] + '\x20MrX');
            return _0x214da7['editReply']({ 'embeds': [_0x340e11] });
        } else if (_0x46b004 > _0x3b8350 && _0x3b8350 !== _0x46b004) {
            const _0x51d644 = new _0x206bdf()['setColor']('#ff0000')['setTitle'](_0x1473a6['command']['33'])['setDescription'](_0x112a5e + '\x20' + _0x1473a6['command']['67'])['setImage'](_0x4e2ac)['setTimestamp']()['setFooter'](_0x112a5e + '\x20-\x20' + _0x1473a6['command']['7'] + '\x20MrX');
            return _0x214da7['editReply']({ 'embeds': [_0x51d644] });
        }
        try {
            const _0x2033d1 = await _0x32a80f(0xa);
            let _0x223b6a = await _0x5efa64(_0x2033d1, _0x16467c, _0x46b004);
            if (_0x223b6a) {
                console['log'](_0x16de91['retro']('🔗\x20-\x20[SEND]\x20Lien\x20de\x20la\x20paste,\x20Expire\x20dans\x201W\x20:\x20' + _0x223b6a));
                const _0x49a6ce = new _0x206bdf()['setColor']('#0099ff')['setTitle'](_0x37cbf8 + '\x20' + _0x1473a6['command']['14'])['setDescription']('🔹\x20**' + _0x1473a6['command']['125'] + ('\x20' + _0x37cbf8 + '\x20' + _0x1473a6['command']['126'] + '\x20:**\x20' + _0x46b004 + '\x0a\x0a🔗\x20[') + _0x1473a6['command']['16'] + ('](\x20' + _0x223b6a + '\x20),\x20password\x20:\x20') + _0x2033d1)['setImage'](_0x4e2ac)['setTimestamp']()['setFooter'](_0x112a5e + '\x20-\x20' + _0x1473a6['command']['7'] + '\x20MrX');
                await _0x214da7['editReply']({ 'embeds': [_0x49a6ce] });
            } else {
                const _0x28c459 = new _0x206bdf()['setColor']('#ff0000')['setTitle'](_0x1473a6['command']['17'])['setDescription'](_0x1473a6['command']['18'])['setImage'](_0x4e2ac)['setTimestamp']()['setFooter'](_0x112a5e + '\x20-\x20' + _0x1473a6['command']['7'] + '\x20MrX');
                await _0x214da7['editReply']({ 'embeds': [_0x28c459] });
            }
        } catch (_0x1c7b4e) {
            console['error'](_0x1c7b4e);
            const _0x4aad0a = new _0x206bdf()['setColor']('#ff0000')['setTitle'](_0x1473a6['command']['19'])['setDescription'](_0x1473a6['command']['20'])['setImage'](_0x4e2ac)['setTimestamp']()['setFooter'](_0x112a5e + '\x20-\x20' + _0x1473a6['command']['7'] + '\x20MrX');
            await _0x214da7['editReply']({ 'embeds': [_0x4aad0a] });
        }
    }
};
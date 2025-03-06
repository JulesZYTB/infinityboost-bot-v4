function _0xabd8() {
    const _0x543899 = [
        '8sSDIfR',
        '590834yaQjAY',
        '1019620MiXBbv',
        '2564674aKnSaY',
        '2FHEoEI',
        '4341186eEsXRd',
        '6bFHVIu',
        '178236QEQafL',
        '21849050xFXapE',
        '1772169wAtQQZ'
    ];
    _0xabd8 = function () {
        return _0x543899;
    };
    return _0xabd8();
}
(function (_0x30550f, _0x958de8) {
    const _0x57adfe = _0x4986;
    const _0x460148 = _0x30550f();
    while (!![]) {
        try {
            const _0xa343b4 = -parseInt(_0x57adfe(0xf8)) / 0x1 * (parseInt(_0x57adfe(0xf5)) / 0x2) + -parseInt(_0x57adfe(0xfd)) / 0x3 + -parseInt(_0x57adfe(0xfb)) / 0x4 + parseInt(_0x57adfe(0xf6)) / 0x5 + parseInt(_0x57adfe(0xfa)) / 0x6 * (-parseInt(_0x57adfe(0xf7)) / 0x7) + -parseInt(_0x57adfe(0xf4)) / 0x8 * (parseInt(_0x57adfe(0xf9)) / 0x9) + parseInt(_0x57adfe(0xfc)) / 0xa;
            if (_0xa343b4 === _0x958de8) {
                break;
            } else {
                _0x460148['push'](_0x460148['shift']());
            }
        } catch (_0x5e6c12) {
            _0x460148['push'](_0x460148['shift']());
        }
    }
}(_0xabd8, 0x4ca79));
const _0x29b279 = require('fs');
const _0x203906 = require('path');
const _0x71844c = require('node-fetch');
const {SlashCommandBuilder: _0x1df6e7} = require('@discordjs/builders');
const {
    MessageEmbed: _0x36b3f5,
    MessageActionRow: _0x42f754,
    MessageButton: _0x197cc8
} = require('discord.js');
const _0x38320c = require('../config.json');
const _0x1765af = require('axios');
const _0x5bff52 = require('lodash');
function _0x4986(_0xcac0eb, _0xee2523) {
    const _0xabd87d = _0xabd8();
    _0x4986 = function (_0x498602, _0x9b6410) {
        _0x498602 = _0x498602 - 0xf4;
        let _0x4de9ea = _0xabd87d[_0x498602];
        return _0x4de9ea;
    };
    return _0x4986(_0xcac0eb, _0xee2523);
}
const _0x57648f = JSON['parse'](_0x29b279['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x47a580 = _0x38320c['service']['langue_shop'];
const _0x2de246 = _0x57648f[_0x47a580];
let _0x2d5049 = _0x38320c['service']['name_shop'];
let _0x5ce420 = _0x38320c['service']['banner'];
module['exports'] = {
    'data': new _0x1df6e7()['setName']('restock')['setDescription'](_0x2de246['command']['69'] + '\x20' + _0x2de246['command']['3'])['addIntegerOption'](_0x1cdd91 => _0x1cdd91['setName']('choix')['setDescription'](_0x2de246['command']['69'])['setRequired'](!![])['addChoice'](_0x2de246['command']['73'] + '\x201\x20' + _0x2de246['command']['3'], 0x1)['addChoice'](_0x2de246['command']['73'] + '\x203\x20' + _0x2de246['command']['3'], 0x3)['addChoice'](_0x2de246['command']['122'] + '\x201\x20' + _0x2de246['command']['3'], 0x4)['addChoice'](_0x2de246['command']['123'] + '\x201\x20' + _0x2de246['command']['3'], 0x5)['addChoice'](_0x2de246['command']['122'] + '\x201\x20' + _0x2de246['command']['124'], 0x6)['addChoice'](_0x2de246['command']['123'] + '\x201\x20' + _0x2de246['command']['124'], 0x7))['addStringOption'](_0x11949f => _0x11949f['setName']('url')['setDescription'](_0x2de246['command']['70'])['setRequired'](!![])),
    async 'execute'(_0x1e0fc5) {
        await _0x1e0fc5['deferReply']();
        let _0x41760e = [
            _0x38320c['admin']['id_1'],
            _0x38320c['admin']['id_2'],
            _0x38320c['admin']['id_3']
        ];
        if (!_0x41760e['includes'](_0x1e0fc5['user']['id'])) {
            const _0x342a44 = new _0x42f754()['addComponents'](new _0x197cc8()['setLabel'](_0x2de246['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x40f236 = new _0x36b3f5()['setColor']('#071b47')['setTitle'](_0x2de246['command']['27'])['setDescription'](_0x2de246['command']['12'])['setImage'](_0x5ce420)['setTimestamp']()['setFooter'](_0x2d5049 + '\x20-\x20' + _0x2de246['command']['7'] + '\x20MrX');
            return await _0x1e0fc5['editReply']({
                'embeds': [_0x40f236],
                'components': [_0x342a44]
            });
        }
        const _0x4cf274 = _0x1e0fc5['options']['getString']('url');
        const _0x5f0cc2 = _0x1e0fc5['options']['getInteger']('choix');
        const _0x38dc59 = {
            0x1: '1\x20' + _0x2de246['command']['3'],
            0x3: '3\x20' + _0x2de246['command']['3'],
            0x4: _0x2de246['command']['122'] + '\x201\x20' + _0x2de246['command']['3'],
            0x5: _0x2de246['command']['123'] + '\x201\x20' + _0x2de246['command']['3'],
            0x6: _0x2de246['command']['122'] + '\x201\x20' + _0x2de246['command']['124'],
            0x7: _0x2de246['command']['123'] + '\x201\x20' + _0x2de246['command']['124']
        };
        const _0x1b5e07 = '/stock/';
        const _0x102ba4 = _0x38dc59[_0x5f0cc2] || 'ERROR';
        let _0x9dd340 = _0x203906['join'](__dirname, '..', _0x1b5e07, 'stock-1m.txt');
        let _0x520b9c = _0x203906['join'](__dirname, '..', _0x1b5e07, 'stock-3m.txt');
        let _0x52f1c8 = _0x203906['join'](__dirname, '..', _0x1b5e07, 'nitro-basic-1m.txt');
        let _0x18f57c = _0x203906['join'](__dirname, '..', _0x1b5e07, 'nitro-basic-1y.txt');
        let _0x1736ec = _0x203906['join'](__dirname, '..', _0x1b5e07, 'nitro-boost-1m.txt');
        let _0x3a759b = _0x203906['join'](__dirname, '..', _0x1b5e07, 'nitro-boost-1y.txt');
        let _0xb292d1;
        if (_0x5f0cc2 === 0x1) {
            _0xb292d1 = _0x9dd340;
        } else if (_0x5f0cc2 === 0x3) {
            _0xb292d1 = _0x520b9c;
        } else if (_0x5f0cc2 === 0x4) {
            _0xb292d1 = _0x52f1c8;
        } else if (_0x5f0cc2 === 0x5) {
            _0xb292d1 = _0x1736ec;
        } else if (_0x5f0cc2 === 0x6) {
            _0xb292d1 = _0x18f57c;
        } else if (_0x5f0cc2 === 0x7) {
            _0xb292d1 = _0x3a759b;
        }
        try {
            const _0x77491c = _0x5bff52['replace'](_0x4cf274, 'https://paste.ee/p/', '');
            const _0x4614f5 = await _0x1765af['get']('https://paste.ee/d/' + _0x77491c, { 'headers': { 'User-agent': 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20WOW64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20discord/1.0.9001\x20Chrome/83.0.4103.122\x20Electron/9.3.5\x20Safari/537.36' } });
            const _0x120e54 = _0x4614f5['data'];
            const _0x2a0477 = await _0x29b279['promises']['readFile'](_0xb292d1, 'utf8');
            const _0x539f77 = new Set([
                ..._0x2a0477['split']('\x0a'),
                ..._0x120e54['split']('\x0a')
            ]);
            const _0x4de498 = _0x2a0477['split']('\x0a')['length'] + _0x120e54['split']('\x0a')['length'];
            const _0x353696 = [..._0x539f77]['filter'](_0x210df0 => _0x210df0['trim']() !== '');
            _0x29b279['writeFileSync'](_0xb292d1, _0x353696['join']('\x0a'));
            const _0xaedfce = _0x353696['length'];
            const _0x4e7c8d = _0x4de498 - _0xaedfce - 0x1;
            const _0x35f624 = new _0x36b3f5()['setColor']('#0099ff')['setDescription'](':white_check_mark:\x20|\x20' + _0x2de246['command']['74'] + '\x20**' + _0x102ba4 + '**\x20' + _0x2de246['command']['75'] + '\x20`' + _0x120e54['split']('\x0a')['length'] + '`\x20**' + _0x102ba4 + '**\x20' + _0x2de246['command']['76'] + '\x0a\x0a🔹\x20**Duplicate\x20delete**\x20:\x20' + _0x4e7c8d)['setImage'](_0x5ce420)['setTimestamp']()['setFooter'](_0x2d5049 + '\x20-\x20' + _0x2de246['command']['7'] + '\x20MrX');
            return await _0x1e0fc5['editReply']({ 'embeds': [_0x35f624] });
        } catch {
            await _0x1e0fc5['editReply'](_0x2de246['command']['77']);
        }
    }
};
function _0x434e(_0x1268fe, _0x560d27) {
    const _0x4fdfcc = _0x4fdf();
    _0x434e = function (_0x434e4e, _0x36b1c6) {
        _0x434e4e = _0x434e4e - 0x1d8;
        let _0x8808e8 = _0x4fdfcc[_0x434e4e];
        return _0x8808e8;
    };
    return _0x434e(_0x1268fe, _0x560d27);
}
function _0x4fdf() {
    const _0x3e8d48 = [
        '46VafNdw',
        '25305rDTsag',
        '651550hvztdh',
        '4807425SieSgC',
        '4506272ZHFZPd',
        '3539110EWSyjI',
        '162BSjNPq',
        '110108KnnryR',
        '45gPyEyT',
        '1002312JbLYsy',
        '187QtDQBM',
        '6KpxTPc'
    ];
    _0x4fdf = function () {
        return _0x3e8d48;
    };
    return _0x4fdf();
}
(function (_0x23bf4b, _0x4cfd60) {
    const _0xc40c74 = _0x434e;
    const _0x5da2ba = _0x23bf4b();
    while (!![]) {
        try {
            const _0x1cd47c = -parseInt(_0xc40c74(0x1d8)) / 0x1 * (parseInt(_0xc40c74(0x1e3)) / 0x2) + -parseInt(_0xc40c74(0x1df)) / 0x3 * (parseInt(_0xc40c74(0x1de)) / 0x4) + -parseInt(_0xc40c74(0x1dc)) / 0x5 + parseInt(_0xc40c74(0x1e2)) / 0x6 * (-parseInt(_0xc40c74(0x1da)) / 0x7) + parseInt(_0xc40c74(0x1db)) / 0x8 + parseInt(_0xc40c74(0x1dd)) / 0x9 * (parseInt(_0xc40c74(0x1d9)) / 0xa) + -parseInt(_0xc40c74(0x1e1)) / 0xb * (-parseInt(_0xc40c74(0x1e0)) / 0xc);
            if (_0x1cd47c === _0x4cfd60) {
                break;
            } else {
                _0x5da2ba['push'](_0x5da2ba['shift']());
            }
        } catch (_0x2a0459) {
            _0x5da2ba['push'](_0x5da2ba['shift']());
        }
    }
}(_0x4fdf, 0xbb223));
const {SlashCommandBuilder: _0x1dd213} = require('@discordjs/builders');
const {
    MessageEmbed: _0x2d714d,
    MessageActionRow: _0x526517,
    MessageButton: _0x3a25a6
} = require('discord.js');
const _0x1e0e81 = require('../config.json');
const _0x17e1e3 = require('axios');
const _0x46a4b3 = require('fs');
const _0x1c5de6 = require('path');
const _0x3324bd = JSON['parse'](_0x46a4b3['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x3cf71f = _0x1e0e81['service']['langue_shop'];
const _0x53946c = _0x3324bd[_0x3cf71f];
let _0x4ae012 = _0x1e0e81['service']['name_shop'];
let _0xb61ed3 = _0x1e0e81['service']['banner'];
async function _0x1f52cc(_0x39ca24) {
    try {
        const _0x321385 = _0x46a4b3['readFileSync'](_0x39ca24, 'utf-8');
        const _0x882269 = _0x321385['split']('\x0a');
        const _0x3859b2 = _0x882269['filter'](_0x49757f => _0x49757f['trim']()['length'] > 0x0);
        return _0x3859b2['length'];
    } catch (_0x254b0b) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x254b0b);
        return 0x0;
    }
}
module['exports'] = {
    'data': new _0x1dd213()['setName']('stock')['setDescription'](_0x53946c['command']['1'] + _0x4ae012)['addIntegerOption'](_0x355690 => _0x355690['setName']('type')['setDescription'](_0x53946c['command']['2'])['setRequired'](!![])['addChoice']('boost\x201\x20' + _0x53946c['command']['3'], 0x1)['addChoice']('boost\x203\x20' + _0x53946c['command']['3'], 0x2)['addChoice']('boost\x201\x20' + _0x53946c['command']['3'] + '\x20' + _0x53946c['command']['68'] + '\x20boost\x203\x20' + _0x53946c['command']['3'], 0x3)['addChoice'](_0x53946c['command']['122'] + '\x201\x20' + _0x53946c['command']['3'] + '/' + _0x53946c['command']['124'] + '\x20' + _0x53946c['command']['68'] + '\x20' + _0x53946c['command']['123'] + '\x201\x20' + _0x53946c['command']['3'] + '/' + _0x53946c['command']['124'], 0x4)),
    async 'execute'(_0x5cde60, _0x568d90) {
        await _0x5cde60['deferReply']();
        try {
            const _0x3591f8 = _0x5cde60['options']['getInteger']('type');
            const _0x301c52 = '/stock/';
            let _0x316272;
            let _0x438dc4 = _0x1c5de6['join'](__dirname, '..', _0x301c52, 'stock-1m.txt');
            let _0x276378 = _0x1c5de6['join'](__dirname, '..', _0x301c52, 'stock-3m.txt');
            let _0x31f971 = _0x1c5de6['join'](__dirname, '..', _0x301c52, 'nitro-basic-1m.txt');
            let _0x143b2a = _0x1c5de6['join'](__dirname, '..', _0x301c52, 'nitro-basic-1y.txt');
            let _0xe07f2b = _0x1c5de6['join'](__dirname, '..', _0x301c52, 'nitro-boost-1m.txt');
            let _0x5e5606 = _0x1c5de6['join'](__dirname, '..', _0x301c52, 'nitro-boost-1y.txt');
            _0x438dc4 = await _0x1f52cc(_0x438dc4);
            _0x276378 = await _0x1f52cc(_0x276378);
            _0x31f971 = await _0x1f52cc(_0x31f971);
            _0x143b2a = await _0x1f52cc(_0x143b2a);
            _0xe07f2b = await _0x1f52cc(_0xe07f2b);
            _0x5e5606 = await _0x1f52cc(_0x5e5606);
            if (_0x3591f8 === 0x1) {
                _0x316272 = 'Stock\x201\x20' + _0x53946c['command']['3'];
                let _0x68808d = new _0x2d714d()['setColor']('#071b47')['setTitle']('🚀\x20' + _0x316272)['setDescription']('Stock\x20' + _0x53946c['command']['62'] + '\x20' + _0x4ae012)['addField']('🔹\x20Boost\x201\x20' + _0x53946c['command']['3'], '\x20**' + _0x438dc4 * 0x2 + '\x20\x20boost**')['addField']('🔹\x20' + _0x53946c['command']['73'] + '\x201\x20' + _0x53946c['command']['3'], '\x20**' + _0x438dc4 + '\x20\x20T0k3n**')['setImage'](_0xb61ed3)['setTimestamp']()['setFooter'](_0x4ae012 + '\x20-\x20' + _0x53946c['command']['7'] + '\x20MrX');
                return _0x5cde60['editReply']({ 'embeds': [_0x68808d] });
            } else if (_0x3591f8 === 0x2) {
                _0x316272 = 'Stock\x203\x20' + _0x53946c['command']['3'];
                let _0x242a9f = new _0x2d714d()['setColor']('#071b47')['setTitle']('🚀\x20' + _0x316272)['setDescription']('Stock\x20' + _0x53946c['command']['62'] + '\x20' + _0x4ae012)['addField']('🔹\x20Boost\x203\x20' + _0x53946c['command']['3'], '\x20**' + _0x276378 * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x53946c['command']['73'] + '\x203\x20' + _0x53946c['command']['3'], '\x20**' + _0x276378 + '\x20T0k3n**')['setImage'](_0xb61ed3)['setTimestamp']()['setFooter'](_0x4ae012 + '\x20-\x20' + _0x53946c['command']['7'] + '\x20MrX');
                return _0x5cde60['editReply']({ 'embeds': [_0x242a9f] });
            } else if (_0x3591f8 === 0x3) {
                _0x316272 = 'Stock\x201\x20' + _0x53946c['command']['3'] + '\x20' + _0x53946c['command']['68'] + '\x203\x20' + _0x53946c['command']['3'];
                let _0x3a32df = new _0x2d714d()['setColor']('#071b47')['setTitle']('🚀\x20' + _0x316272)['setDescription']('Stock\x20' + _0x53946c['command']['62'] + '\x20' + _0x4ae012)['addField']('🔹\x20Boost\x201\x20' + _0x53946c['command']['3'], '\x20**' + _0x438dc4 * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x53946c['command']['73'] + '\x201\x20' + _0x53946c['command']['3'], '\x20**' + _0x438dc4 + '\x20T0k3n**')['addField']('🔹\x20Boost\x203\x20' + _0x53946c['command']['3'], '\x20**' + _0x276378 * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x53946c['command']['73'] + '\x203\x20' + _0x53946c['command']['3'], '\x20**' + _0x276378 + '\x20T0k3n**')['setImage'](_0xb61ed3)['setTimestamp']()['setFooter'](_0x4ae012 + '\x20-\x20' + _0x53946c['command']['7'] + '\x20MrX');
                return _0x5cde60['editReply']({ 'embeds': [_0x3a32df] });
            } else if (_0x3591f8 === 0x4) {
                _0x316272 = 'Stock\x201\x20' + _0x53946c['command']['122'] + '\x201\x20' + _0x53946c['command']['3'] + '/' + _0x53946c['command']['124'] + '\x20' + _0x53946c['command']['68'] + '\x20' + _0x53946c['command']['123'] + '\x201\x20' + _0x53946c['command']['3'] + '/' + _0x53946c['command']['124'];
                let _0x2c5340 = new _0x2d714d()['setColor']('#071b47')['setTitle']('🚀\x20' + _0x316272)['setDescription']('Stock\x20' + _0x53946c['command']['62'] + '\x20' + _0x4ae012)['addField']('🔹\x20Nitro\x20Basic\x201\x20' + _0x53946c['command']['124'], '\x20**' + _0x143b2a + '**')['addField']('🔹\x20Nitro\x20Basic\x201\x20' + _0x53946c['command']['3'], '\x20**' + _0x31f971 + '**')['addField']('🔹\x20Nitro\x20Boost\x201\x20' + _0x53946c['command']['124'], '\x20**' + _0xe07f2b + '**')['addField']('🔹\x20Nitro\x20Boost\x201\x20' + _0x53946c['command']['3'], '\x20**' + _0xe07f2b + '**')['setImage'](_0xb61ed3)['setTimestamp']()['setFooter'](_0x4ae012 + '\x20-\x20' + _0x53946c['command']['7'] + '\x20MrX');
                return _0x5cde60['editReply']({ 'embeds': [_0x2c5340] });
            }
        } catch (_0x2b865a) {
            console['error']('Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20stocks\x20:', _0x2b865a);
        }
    }
};
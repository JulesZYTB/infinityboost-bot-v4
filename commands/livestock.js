(function (_0x4928dc, _0x3afb61) {
    const _0x1ba965 = _0x2a46;
    const _0x46f30e = _0x4928dc();
    while (!![]) {
        try {
            const _0x499243 = -parseInt(_0x1ba965(0x7e)) / 0x1 + parseInt(_0x1ba965(0x83)) / 0x2 * (parseInt(_0x1ba965(0x80)) / 0x3) + parseInt(_0x1ba965(0x81)) / 0x4 + parseInt(_0x1ba965(0x7f)) / 0x5 * (-parseInt(_0x1ba965(0x7c)) / 0x6) + -parseInt(_0x1ba965(0x7a)) / 0x7 + parseInt(_0x1ba965(0x7d)) / 0x8 * (-parseInt(_0x1ba965(0x7b)) / 0x9) + parseInt(_0x1ba965(0x82)) / 0xa;
            if (_0x499243 === _0x3afb61) {
                break;
            } else {
                _0x46f30e['push'](_0x46f30e['shift']());
            }
        } catch (_0x546eb5) {
            _0x46f30e['push'](_0x46f30e['shift']());
        }
    }
}(_0x4152, 0xc75ad));
const {SlashCommandBuilder: _0x1d7c3d} = require('@discordjs/builders');
const {
    MessageEmbed: _0x507b36,
    MessageActionRow: _0x2bc316,
    MessageButton: _0x1dda52
} = require('discord.js');
const _0x441930 = require('../config.json');
const _0x8ee865 = require('axios');
const _0x1a8724 = require('fs');
function _0x2a46(_0x3d8fe6, _0x244814) {
    const _0x415290 = _0x4152();
    _0x2a46 = function (_0x2a46da, _0x34119e) {
        _0x2a46da = _0x2a46da - 0x7a;
        let _0x1f03e8 = _0x415290[_0x2a46da];
        return _0x1f03e8;
    };
    return _0x2a46(_0x3d8fe6, _0x244814);
}
const _0x47ad50 = require('path');
const _0x5e50ea = JSON['parse'](_0x1a8724['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x1a22be = _0x441930['service']['langue_shop'];
function _0x4152() {
    const _0x400647 = [
        '30Vzoyou',
        '10892448pzInRo',
        '27gzXdAd',
        '174lPVEfg',
        '1119848whHEua',
        '53994cHjAls',
        '244705QkBMhA',
        '308109PZUIsD',
        '3830632kDyzJy',
        '17676440stKjzC'
    ];
    _0x4152 = function () {
        return _0x400647;
    };
    return _0x4152();
}
const _0x42b5b7 = _0x5e50ea[_0x1a22be];
let _0x4154be = _0x441930['service']['name_shop'];
let _0x4d4aad = _0x441930['service']['banner'];
async function _0x4aaa94(_0x37cc85) {
    try {
        const _0x2ae476 = _0x1a8724['readFileSync'](_0x37cc85, 'utf-8');
        const _0x4e948e = _0x2ae476['split']('\x0a');
        const _0x217156 = _0x4e948e['filter'](_0x2b4d53 => _0x2b4d53['trim']()['length'] > 0x0);
        return _0x217156['length'];
    } catch (_0x2c224d) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x2c224d);
        return 0x0;
    }
}
async function _0x31bd94(_0x3900bc) {
    let _0x5eec8b = await _0x4aaa94(_0x47ad50['join'](__dirname, '..', 'stock', 'stock-1m.txt'));
    let _0x35fb6b = await _0x4aaa94(_0x47ad50['join'](__dirname, '..', 'stock', 'stock-3m.txt'));
    let _0x423dc8 = new _0x507b36()['setColor']('#071b47')['setImage'](_0x4d4aad)['setTimestamp']()['setFooter'](_0x4154be + '\x20-\x20' + _0x42b5b7['command']['7'] + '\x20MrX');
    if (_0x3900bc === 0x1) {
        _0x423dc8['setTitle']('🚀\x20Stock\x201\x20' + _0x42b5b7['command']['3'])['setDescription']('Stock\x20' + _0x42b5b7['command']['62'] + '\x20' + _0x4154be)['addField']('🔹\x20Boost\x201\x20' + _0x42b5b7['command']['3'], '\x20**' + _0x5eec8b * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x42b5b7['command']['73'] + '\x201\x20' + _0x42b5b7['command']['3'], '\x20**' + _0x5eec8b + '\x20T0k3n**');
    } else if (_0x3900bc === 0x2) {
        _0x423dc8['setTitle']('🚀\x20Stock\x203\x20' + _0x42b5b7['command']['3'])['setDescription']('Stock\x20' + _0x42b5b7['command']['62'] + '\x20' + _0x4154be)['addField']('🔹\x20Boost\x203\x20' + _0x42b5b7['command']['3'], '\x20**' + _0x35fb6b * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x42b5b7['command']['73'] + '\x203\x20' + _0x42b5b7['command']['3'], '\x20**' + _0x35fb6b + '\x20T0k3n**');
    } else if (_0x3900bc === 0x3) {
        _0x423dc8['setTitle']('🚀\x20Stock\x201\x20' + _0x42b5b7['command']['3'] + '\x20' + _0x42b5b7['command']['68'] + '\x203\x20' + _0x42b5b7['command']['3'])['setDescription']('Stock\x20' + _0x42b5b7['command']['62'] + '\x20' + _0x4154be)['addField']('🔹\x20Boost\x201\x20' + _0x42b5b7['command']['3'], '\x20**' + _0x5eec8b * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x42b5b7['command']['73'] + '\x201\x20' + _0x42b5b7['command']['3'], '\x20**' + _0x5eec8b + '\x20T0k3n**')['addField']('🔹\x20Boost\x203\x20' + _0x42b5b7['command']['3'], '\x20**' + _0x35fb6b * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x42b5b7['command']['73'] + '\x203\x20' + _0x42b5b7['command']['3'], '\x20**' + _0x35fb6b + '\x20T0k3n**');
    }
    return _0x423dc8;
}
module['exports'] = {
    'data': new _0x1d7c3d()['setName']('live-stock')['setDescription'](_0x42b5b7['command']['121'])['addIntegerOption'](_0x45c58f => _0x45c58f['setName']('type')['setDescription'](_0x42b5b7['command']['2'])['setRequired'](!![])['addChoice']('1\x20' + _0x42b5b7['command']['3'], 0x1)['addChoice']('3\x20' + _0x42b5b7['command']['3'], 0x2)['addChoice']('1\x20' + _0x42b5b7['command']['3'] + '\x20' + _0x42b5b7['command']['68'] + '\x203\x20' + _0x42b5b7['command']['3'], 0x3)),
    async 'execute'(_0x34c4d8) {
        await _0x34c4d8['deferReply']();
        const _0x482f29 = _0x34c4d8['options']['getInteger']('type');
        try {
            let _0xe56524 = await _0x31bd94(_0x482f29);
            let _0x40ce66 = await _0x34c4d8['editReply']({ 'embeds': [_0xe56524] });
            const _0xabed34 = setInterval(async () => {
                try {
                    let _0xd2fdb9 = await _0x31bd94(_0x482f29);
                    await _0x40ce66['edit']({ 'embeds': [_0xd2fdb9] });
                } catch (_0x210e89) {
                    console['error']('Erreur\x20lors\x20de\x20la\x20mise\x20à\x20jour\x20de\x20l\x27embed\x20:', _0x210e89);
                    clearInterval(_0xabed34);
                }
            }, 0xea60);
        } catch (_0x52bcdc) {
            console['error']('Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20stocks\x20:', _0x52bcdc);
        }
    }
};

(function (_0x26e451, _0x370404) {
    const _0x3e044d = _0x5e11;
    const _0x4dd7cc = _0x26e451();
    while (!![]) {
        try {
            const _0x1c82ad = -parseInt(_0x3e044d(0x16c)) / 0x1 + parseInt(_0x3e044d(0x16d)) / 0x2 * (-parseInt(_0x3e044d(0x170)) / 0x3) + parseInt(_0x3e044d(0x16f)) / 0x4 + -parseInt(_0x3e044d(0x172)) / 0x5 + parseInt(_0x3e044d(0x16b)) / 0x6 * (parseInt(_0x3e044d(0x173)) / 0x7) + -parseInt(_0x3e044d(0x16e)) / 0x8 + -parseInt(_0x3e044d(0x174)) / 0x9 * (-parseInt(_0x3e044d(0x171)) / 0xa);
            if (_0x1c82ad === _0x370404) {
                break;
            } else {
                _0x4dd7cc['push'](_0x4dd7cc['shift']());
            }
        } catch (_0x7dde00) {
            _0x4dd7cc['push'](_0x4dd7cc['shift']());
        }
    }
}(_0x3d9c, 0x72424));
const {SlashCommandBuilder: _0x373926} = require('@discordjs/builders');
const {
    MessageEmbed: _0x4fdc11,
    MessageActionRow: _0x4c2965,
    MessageButton: _0x51fa8b
} = require('discord.js');
const _0x11addf = require('../config.json');
const _0x2dbfd4 = require('axios');
const _0x4956ef = require('fs');
const _0x38102a = require('path');
const _0x578af7 = JSON['parse'](_0x4956ef['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x474537 = _0x11addf['service']['langue_shop'];
function _0x3d9c() {
    const _0x534c76 = [
        '420359HuCWHR',
        '38nrLGZb',
        '2469888mfJaBl',
        '1350568BBGVxA',
        '138192RkuAvq',
        '190UEHuWd',
        '370320frYjeo',
        '7DZRTMC',
        '419148YKckJM',
        '5543214GKBrgY'
    ];
    _0x3d9c = function () {
        return _0x534c76;
    };
    return _0x3d9c();
}
const _0x214db8 = _0x578af7[_0x474537];
let _0x37d625 = _0x11addf['service']['name_shop'];
let _0x15c713 = _0x11addf['service']['banner'];
async function _0x45bd0f(_0x34d690) {
    try {
        const _0x183668 = _0x4956ef['readFileSync'](_0x34d690, 'utf-8');
        const _0x23eb23 = _0x183668['split']('\x0a');
        const _0x9e3e25 = _0x23eb23['filter'](_0x5bb73a => _0x5bb73a['trim']()['length'] > 0x0);
        return _0x9e3e25['length'];
    } catch (_0x1b7561) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x1b7561);
        return 0x0;
    }
}
async function _0x56a03d(_0x39ce27) {
    let _0x403102 = await _0x45bd0f(_0x38102a['join'](__dirname, '..', 'stock', 'stock-1m.txt'));
    let _0xbb5d41 = await _0x45bd0f(_0x38102a['join'](__dirname, '..', 'stock', 'stock-3m.txt'));
    let _0x5e327a = new _0x4fdc11()['setColor']('#071b47')['setImage'](_0x15c713)['setTimestamp']()['setFooter'](_0x37d625 + '\x20-\x20' + _0x214db8['command']['7'] + '\x20MrX');
    if (_0x39ce27 === 0x1) {
        _0x5e327a['setTitle']('🚀\x20Stock\x201\x20' + _0x214db8['command']['3'])['setDescription']('Stock\x20' + _0x214db8['command']['62'] + '\x20' + _0x37d625)['addField']('🔹\x20Boost\x201\x20' + _0x214db8['command']['3'], '\x20**' + _0x403102 * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x214db8['command']['73'] + '\x201\x20' + _0x214db8['command']['3'], '\x20**' + _0x403102 + '\x20T0k3n**');
    } else if (_0x39ce27 === 0x2) {
        _0x5e327a['setTitle']('🚀\x20Stock\x203\x20' + _0x214db8['command']['3'])['setDescription']('Stock\x20' + _0x214db8['command']['62'] + '\x20' + _0x37d625)['addField']('🔹\x20Boost\x203\x20' + _0x214db8['command']['3'], '\x20**' + _0xbb5d41 * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x214db8['command']['73'] + '\x203\x20' + _0x214db8['command']['3'], '\x20**' + _0xbb5d41 + '\x20T0k3n**');
    } else if (_0x39ce27 === 0x3) {
        _0x5e327a['setTitle']('🚀\x20Stock\x201\x20' + _0x214db8['command']['3'] + '\x20' + _0x214db8['command']['68'] + '\x203\x20' + _0x214db8['command']['3'])['setDescription']('Stock\x20' + _0x214db8['command']['62'] + '\x20' + _0x37d625)['addField']('🔹\x20Boost\x201\x20' + _0x214db8['command']['3'], '\x20**' + _0x403102 * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x214db8['command']['73'] + '\x201\x20' + _0x214db8['command']['3'], '\x20**' + _0x403102 + '\x20T0k3n**')['addField']('🔹\x20Boost\x203\x20' + _0x214db8['command']['3'], '\x20**' + _0xbb5d41 * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x214db8['command']['73'] + '\x203\x20' + _0x214db8['command']['3'], '\x20**' + _0xbb5d41 + '\x20T0k3n**');
    }
    return _0x5e327a;
}
function _0x5e11(_0x4ba18a, _0x3f1a6e) {
    const _0x3d9c0d = _0x3d9c();
    _0x5e11 = function (_0x5e1129, _0x10acb6) {
        _0x5e1129 = _0x5e1129 - 0x16b;
        let _0x513be4 = _0x3d9c0d[_0x5e1129];
        return _0x513be4;
    };
    return _0x5e11(_0x4ba18a, _0x3f1a6e);
}
module['exports'] = {
    'data': new _0x373926()['setName']('live-stock')['setDescription'](_0x214db8['command']['121'])['addIntegerOption'](_0x3e8d53 => _0x3e8d53['setName']('type')['setDescription'](_0x214db8['command']['2'])['setRequired'](!![])['addChoice']('1\x20' + _0x214db8['command']['3'], 0x1)['addChoice']('3\x20' + _0x214db8['command']['3'], 0x2)['addChoice']('1\x20' + _0x214db8['command']['3'] + '\x20' + _0x214db8['command']['68'] + '\x203\x20' + _0x214db8['command']['3'], 0x3)),
    async 'execute'(_0xeac9ff) {
        await _0xeac9ff['deferReply']();
        const _0x7411f0 = _0xeac9ff['options']['getInteger']('type');
        try {
            let _0x2b31c7 = await _0x56a03d(_0x7411f0);
            let _0x4d8632 = await _0xeac9ff['editReply']({ 'embeds': [_0x2b31c7] });
            const _0x3c0d86 = setInterval(async () => {
                try {
                    let _0x4af5e2 = await _0x56a03d(_0x7411f0);
                    await _0x4d8632['editReply']({ 'embeds': [_0x4af5e2] });
                } catch (_0xb0648) {
                    console['error']('Erreur\x20lors\x20de\x20la\x20mise\x20à\x20jour\x20de\x20l\x27embed\x20:', _0xb0648);
                    clearInterval(_0x3c0d86);
                }
            }, 0xea60);
        } catch (_0x5db509) {
            console['error']('Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20stocks\x20:', _0x5db509);
        }
    }
};
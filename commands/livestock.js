(function (_0x2bd166, _0x3584a7) {
    const _0x2b372f = _0x5066;
    const _0x3531df = _0x2bd166();
    while (!![]) {
        try {
            const _0x2b5a25 = -parseInt(_0x2b372f(0x1a8)) / 0x1 + parseInt(_0x2b372f(0x1ac)) / 0x2 + -parseInt(_0x2b372f(0x1ab)) / 0x3 + -parseInt(_0x2b372f(0x1aa)) / 0x4 * (-parseInt(_0x2b372f(0x1ae)) / 0x5) + parseInt(_0x2b372f(0x1a9)) / 0x6 + -parseInt(_0x2b372f(0x1af)) / 0x7 + parseInt(_0x2b372f(0x1a7)) / 0x8 * (parseInt(_0x2b372f(0x1ad)) / 0x9);
            if (_0x2b5a25 === _0x3584a7) {
                break;
            } else {
                _0x3531df['push'](_0x3531df['shift']());
            }
        } catch (_0x4ba93d) {
            _0x3531df['push'](_0x3531df['shift']());
        }
    }
}(_0x6da8, 0xac31f));
const {SlashCommandBuilder: _0x3eec2c} = require('@discordjs/builders');
const {
    MessageEmbed: _0x410824,
    MessageActionRow: _0x48a38,
    MessageButton: _0xa97372
} = require('discord.js');
const _0x1d5ab9 = require('../config.json');
const _0x4abc48 = require('fs');
const _0x3241a3 = require('path');
function _0x6da8() {
    const _0x54d26e = [
        '5188764yVhDiy',
        '1913268KTVIEx',
        '3825780OsyRnO',
        '2705888MHDxMU',
        '26577XCpJRc',
        '5uCaxQn',
        '5810378BmpWjJ',
        '1416JlKXIm',
        '408111ZUqTuz'
    ];
    _0x6da8 = function () {
        return _0x54d26e;
    };
    return _0x6da8();
}
const _0x47f68d = JSON['parse'](_0x4abc48['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x2b49a9 = _0x1d5ab9['service']['langue_shop'];
const _0x4bd246 = _0x47f68d[_0x2b49a9];
let _0x596637 = _0x1d5ab9['service']['name_shop'];
let _0x1ac2be = _0x1d5ab9['service']['banner'];
function _0x5066(_0x2ce263, _0x577a3b) {
    const _0x6da840 = _0x6da8();
    _0x5066 = function (_0x5066ef, _0x1dcee4) {
        _0x5066ef = _0x5066ef - 0x1a7;
        let _0x485bba = _0x6da840[_0x5066ef];
        return _0x485bba;
    };
    return _0x5066(_0x2ce263, _0x577a3b);
}
async function _0x2e7993(_0x494182) {
    try {
        const _0x54ad33 = _0x4abc48['readFileSync'](_0x494182, 'utf-8');
        const _0x214f86 = _0x54ad33['split']('\x0a');
        const _0x1817b8 = _0x214f86['filter'](_0xaab19a => _0xaab19a['trim']()['length'] > 0x0);
        return _0x1817b8['length'];
    } catch (_0x3f842f) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x3f842f);
        return 0x0;
    }
}
async function _0x437da7(_0x21e972) {
    let _0x5ea4f5 = await _0x2e7993(_0x3241a3['join'](__dirname, '..', 'stock', 'stock-1m.txt'));
    let _0x5cf90d = await _0x2e7993(_0x3241a3['join'](__dirname, '..', 'stock', 'stock-3m.txt'));
    let _0x490ba8 = new _0x410824()['setColor']('#071b47')['setImage'](_0x1ac2be)['setTimestamp']()['setFooter'](_0x596637 + '\x20-\x20' + _0x4bd246['command']['7'] + '\x20MrX');
    if (_0x21e972 === 0x1) {
        _0x490ba8['setTitle']('🚀\x20Stock\x201\x20' + _0x4bd246['command']['3'])['setDescription']('Stock\x20' + _0x4bd246['command']['62'] + '\x20' + _0x596637)['addField']('🔹\x20Boost\x201\x20' + _0x4bd246['command']['3'], '\x20**' + _0x5ea4f5 * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x4bd246['command']['73'] + '\x201\x20' + _0x4bd246['command']['3'], '\x20**' + _0x5ea4f5 + '\x20T0k3n**');
    } else if (_0x21e972 === 0x2) {
        _0x490ba8['setTitle']('🚀\x20Stock\x203\x20' + _0x4bd246['command']['3'])['setDescription']('Stock\x20' + _0x4bd246['command']['62'] + '\x20' + _0x596637)['addField']('🔹\x20Boost\x203\x20' + _0x4bd246['command']['3'], '\x20**' + _0x5cf90d * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x4bd246['command']['73'] + '\x203\x20' + _0x4bd246['command']['3'], '\x20**' + _0x5cf90d + '\x20T0k3n**');
    } else if (_0x21e972 === 0x3) {
        _0x490ba8['setTitle']('🚀\x20Stock\x201\x20' + _0x4bd246['command']['3'] + '\x20' + _0x4bd246['command']['68'] + '\x203\x20' + _0x4bd246['command']['3'])['setDescription']('Stock\x20' + _0x4bd246['command']['62'] + '\x20' + _0x596637)['addField']('🔹\x20Boost\x201\x20' + _0x4bd246['command']['3'], '\x20**' + _0x5ea4f5 * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x4bd246['command']['73'] + '\x201\x20' + _0x4bd246['command']['3'], '\x20**' + _0x5ea4f5 + '\x20T0k3n**')['addField']('🔹\x20Boost\x203\x20' + _0x4bd246['command']['3'], '\x20**' + _0x5cf90d * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x4bd246['command']['73'] + '\x203\x20' + _0x4bd246['command']['3'], '\x20**' + _0x5cf90d + '\x20T0k3n**');
    }
    return _0x490ba8;
}
module['exports'] = {
    'data': new _0x3eec2c()['setName']('live-stock')['setDescription'](_0x4bd246['command']['121'])['addIntegerOption'](_0x1d96d1 => _0x1d96d1['setName']('type')['setDescription'](_0x4bd246['command']['2'])['setRequired'](!![])['addChoice']('1\x20' + _0x4bd246['command']['3'], 0x1)['addChoice']('3\x20' + _0x4bd246['command']['3'], 0x2)['addChoice']('1\x20' + _0x4bd246['command']['3'] + '\x20' + _0x4bd246['command']['68'] + '\x203\x20' + _0x4bd246['command']['3'], 0x3)),
    async 'execute'(_0x594f7e) {
        await _0x594f7e['deferReply']();
        const _0x1f13e2 = _0x594f7e['options']['getInteger']('type');
        let _0xe4b4d9 = [
            _0x1d5ab9['admin']['id_1'],
            _0x1d5ab9['admin']['id_2'],
            _0x1d5ab9['admin']['id_3']
        ];
        if (!_0xe4b4d9['includes'](_0x594f7e['user']['id'])) {
            const _0x492f8c = new _0x48a38()['addComponents'](new _0xa97372()['setLabel'](_0x4bd246['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x495af8 = new _0x410824()['setColor']('#071b47')['setTitle'](_0x4bd246['command']['27'])['setDescription'](_0x4bd246['command']['12'])['setImage'](_0x1ac2be)['setTimestamp']()['setFooter'](_0x596637 + '\x20-\x20' + _0x4bd246['command']['7'] + '\x20MrX');
            return await _0x594f7e['editReply']({
                'embeds': [_0x495af8],
                'components': [_0x492f8c]
            });
        }
        try {
            let _0x314de3 = await _0x437da7(_0x1f13e2);
            let _0x156b98 = await _0x594f7e['editReply']({ 'embeds': [_0x314de3] });
            const _0x3c3d79 = setInterval(async () => {
                try {
                    let _0x462e91 = await _0x437da7(_0x1f13e2);
                    await _0x156b98['edit']({ 'embeds': [_0x462e91] });
                } catch (_0x3ed66d) {
                    console['error']('Erreur\x20lors\x20de\x20la\x20mise\x20à\x20jour\x20de\x20l\x27embed\x20:', _0x3ed66d);
                    clearInterval(_0x3c3d79);
                }
            }, 0xea60);
        } catch (_0x2ab163) {
            console['error']('Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20stocks\x20:', _0x2ab163);
        }
    }
};
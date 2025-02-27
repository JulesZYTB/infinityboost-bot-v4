(function (_0x34e4d9, _0x4437ee) {
    const _0x2d2d30 = _0x1435;
    const _0x33287f = _0x34e4d9();
    while (!![]) {
        try {
            const _0x5030e4 = parseInt(_0x2d2d30(0x182)) / 0x1 + parseInt(_0x2d2d30(0x184)) / 0x2 + parseInt(_0x2d2d30(0x186)) / 0x3 + parseInt(_0x2d2d30(0x183)) / 0x4 * (-parseInt(_0x2d2d30(0x18a)) / 0x5) + -parseInt(_0x2d2d30(0x189)) / 0x6 + -parseInt(_0x2d2d30(0x185)) / 0x7 * (-parseInt(_0x2d2d30(0x187)) / 0x8) + -parseInt(_0x2d2d30(0x188)) / 0x9 * (parseInt(_0x2d2d30(0x181)) / 0xa);
            if (_0x5030e4 === _0x4437ee) {
                break;
            } else {
                _0x33287f['push'](_0x33287f['shift']());
            }
        } catch (_0x3b025b) {
            _0x33287f['push'](_0x33287f['shift']());
        }
    }
}(_0x64f4, 0x38f55));
function _0x64f4() {
    const _0x50c95e = [
        '1513314cnAcBg',
        '18655DZMqWA',
        '1780wJwwxb',
        '143318AHJufU',
        '44URrupJ',
        '87832GmrxNu',
        '7nknGOB',
        '855840JXeQvw',
        '3579416ViibaA',
        '19890XzvaLv'
    ];
    _0x64f4 = function () {
        return _0x50c95e;
    };
    return _0x64f4();
}
const {SlashCommandBuilder: _0x4c4c24} = require('@discordjs/builders');
const {
    MessageEmbed: _0x32493d,
    MessageActionRow: _0x17b404,
    MessageButton: _0x5240fe
} = require('discord.js');
const _0x5159ed = require('fs');
const _0x3a6d7e = require('path');
const _0x3effe7 = require('../config.json');
const _0x13928d = JSON['parse'](_0x5159ed['readFileSync']('./api-translate/langs.json', 'utf-8'));
function _0x1435(_0x2d3280, _0x5048a2) {
    const _0x64f4d7 = _0x64f4();
    _0x1435 = function (_0x1435c2, _0x96c5be) {
        _0x1435c2 = _0x1435c2 - 0x181;
        let _0x4ee91e = _0x64f4d7[_0x1435c2];
        return _0x4ee91e;
    };
    return _0x1435(_0x2d3280, _0x5048a2);
}
const _0x2d162d = _0x3effe7['service']['langue_shop'];
const _0x3433f9 = _0x13928d[_0x2d162d];
let _0x3244b9 = _0x3effe7['service']['name_shop'];
let _0x1ce444 = _0x3effe7['service']['banner'];
module['exports'] = {
    'data': new _0x4c4c24()['setName']('edit-admin')['setDescription'](_0x3433f9['command']['113'])['addStringOption'](_0x3f6ada => _0x3f6ada['setName']('id')['setDescription'](_0x3433f9['command']['115'])['setRequired'](!![])['addChoice']('Admin\x201', 'id_1')['addChoice']('Admin\x202', 'id_2')['addChoice']('Admin\x203', 'id_3'))['addUserOption'](_0x463321 => _0x463321['setName']('utilisateur')['setDescription'](_0x3433f9['command']['114'])['setRequired'](![])),
    async 'execute'(_0x138296) {
        await _0x138296['deferReply']();
        let _0x3e8dd1 = [
            _0x3effe7['admin']['id_1'],
            _0x3effe7['admin']['id_2'],
            _0x3effe7['admin']['id_3']
        ];
        if (!_0x3e8dd1['includes'](_0x138296['user']['id'])) {
            const _0x21327b = new _0x17b404()['addComponents'](new _0x5240fe()['setLabel'](_0x3433f9['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x53f546 = new _0x32493d()['setColor']('#071b47')['setTitle'](_0x3433f9['command']['27'])['setDescription'](_0x3433f9['command']['12'])['setImage'](_0x1ce444)['setTimestamp']()['setFooter'](_0x3244b9 + '\x20-\x20' + _0x3433f9['command']['7'] + '\x20MrX');
            return await _0x138296['editReply']({
                'embeds': [_0x53f546],
                'components': [_0x21327b]
            });
        }
        const _0x3176ca = _0x138296['options']['getString']('id');
        const _0x4ca707 = _0x138296['options']['getUser']('utilisateur');
        const _0x598717 = _0x4ca707 ? _0x4ca707['id'] : '';
        _0x3effe7['admin'][_0x3176ca] = _0x598717;
        _0x5159ed['writeFileSync']('./config.json', JSON['stringify'](_0x3effe7, null, 0x2), 'utf-8');
        const _0x30d5f0 = new _0x32493d()['setColor']('#071b47')['setTitle']('📝\x20**' + _0x3176ca + '**\x20' + _0x3433f9['command']['116'])['setDescription']('✅\x20**' + _0x3176ca + '**\x20' + _0x3433f9['command']['111'] + ('\x20' + (_0x598717 ? _0x3433f9['command']['117'] + ('\x20<@' + _0x598717 + '>') : _0x3433f9['command']['112'])))['setImage'](_0x1ce444)['setTimestamp']()['setFooter'](_0x3244b9 + '\x20-\x20' + _0x3433f9['command']['7'] + '\x20MrX');
        return await _0x138296['editReply']({ 'embeds': [_0x30d5f0] });
    }
};
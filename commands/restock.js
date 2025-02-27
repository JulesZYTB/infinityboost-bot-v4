(function (_0x5663fc, _0x4c5bdd) {
    const _0x44ac3c = _0x5e4c;
    const _0x5b0442 = _0x5663fc();
    while (!![]) {
        try {
            const _0x1bb1a1 = -parseInt(_0x44ac3c(0x139)) / 0x1 + -parseInt(_0x44ac3c(0x13b)) / 0x2 + parseInt(_0x44ac3c(0x13c)) / 0x3 * (parseInt(_0x44ac3c(0x13a)) / 0x4) + parseInt(_0x44ac3c(0x138)) / 0x5 + -parseInt(_0x44ac3c(0x137)) / 0x6 + parseInt(_0x44ac3c(0x136)) / 0x7 * (-parseInt(_0x44ac3c(0x13e)) / 0x8) + parseInt(_0x44ac3c(0x13d)) / 0x9;
            if (_0x1bb1a1 === _0x4c5bdd) {
                break;
            } else {
                _0x5b0442['push'](_0x5b0442['shift']());
            }
        } catch (_0x269200) {
            _0x5b0442['push'](_0x5b0442['shift']());
        }
    }
}(_0x2e45, 0xa2379));
const _0x5261da = require('fs');
const _0x40e6d4 = require('path');
function _0x2e45() {
    const _0x5437ed = [
        '2478728fTUBJj',
        '1444496jwNtGD',
        '3AtHatC',
        '22538880EHMeul',
        '24fSmzSF',
        '2304113TCmAGD',
        '7025226fJKvPf',
        '4430530xFCtIV',
        '465071KBcpwd'
    ];
    _0x2e45 = function () {
        return _0x5437ed;
    };
    return _0x2e45();
}
const _0x52c489 = require('node-fetch');
const {SlashCommandBuilder: _0x2908e0} = require('@discordjs/builders');
const {
    MessageEmbed: _0x5af136,
    MessageActionRow: _0x17efb6,
    MessageButton: _0x4e98b6
} = require('discord.js');
const _0x371a46 = require('../config.json');
const _0x58b156 = require('axios');
const _0x316436 = require('lodash');
const _0xd5b5d5 = JSON['parse'](_0x5261da['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x37da35 = _0x371a46['service']['langue_shop'];
const _0xf24c01 = _0xd5b5d5[_0x37da35];
let _0x4655b3 = _0x371a46['service']['name_shop'];
let _0x3da04b = _0x371a46['service']['banner'];
function _0x5e4c(_0x4ee75c, _0x4e9f97) {
    const _0x2e457f = _0x2e45();
    _0x5e4c = function (_0x5e4c85, _0x12b1cf) {
        _0x5e4c85 = _0x5e4c85 - 0x136;
        let _0x36f8e4 = _0x2e457f[_0x5e4c85];
        return _0x36f8e4;
    };
    return _0x5e4c(_0x4ee75c, _0x4e9f97);
}
module['exports'] = {
    'data': new _0x2908e0()['setName']('restock')['setDescription'](_0xf24c01['command']['69'])['addIntegerOption'](_0x18a451 => _0x18a451['setName']('choix')['setDescription'](_0xf24c01['command']['69'])['setRequired'](!![])['addChoice']('1\x20' + _0xf24c01['command']['3'], 0x1)['addChoice']('3\x20' + _0xf24c01['command']['3'], 0x3))['addStringOption'](_0x2ba6ca => _0x2ba6ca['setName']('url')['setDescription'](_0xf24c01['command']['70'])['setRequired'](!![])),
    async 'execute'(_0x13d143) {
        await _0x13d143['deferReply']();
        let _0x27cb5f = [
            _0x371a46['admin']['id_1'],
            _0x371a46['admin']['id_2'],
            _0x371a46['admin']['id_3']
        ];
        if (!_0x27cb5f['includes'](_0x13d143['user']['id'])) {
            const _0x950bf0 = new _0x17efb6()['addComponents'](new _0x4e98b6()['setLabel'](_0xf24c01['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x4fbfe1 = new _0x5af136()['setColor']('#071b47')['setTitle'](_0xf24c01['command']['27'])['setDescription'](_0xf24c01['command']['12'])['setImage'](_0x3da04b)['setTimestamp']()['setFooter'](_0x4655b3 + '\x20-\x20' + _0xf24c01['command']['7'] + '\x20MrX');
            return await _0x13d143['editReply']({
                'embeds': [_0x4fbfe1],
                'components': [_0x950bf0]
            });
        }
        const _0x307d63 = _0x13d143['options']['getString']('url');
        const _0x419962 = _0x13d143['options']['getInteger']('choix');
        const _0x5c6f42 = '/stock/';
        let _0x4f4771 = _0x40e6d4['join'](__dirname, '..', _0x5c6f42, 'stock-1m.txt');
        let _0x2f1ba9 = _0x40e6d4['join'](__dirname, '..', _0x5c6f42, 'stock-3m.txt');
        let _0x499395;
        if (_0x419962 === 0x1) {
            _0x499395 = _0x4f4771;
        } else if (_0x419962 === 0x3) {
            _0x499395 = _0x2f1ba9;
        }
        try {
            const _0x2b3c11 = _0x316436['replace'](_0x307d63, 'https://paste.ee/p/', '');
            const _0x124ee9 = await _0x58b156['get']('https://paste.ee/d/' + _0x2b3c11, { 'headers': { 'User-agent': 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20WOW64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20discord/1.0.9001\x20Chrome/83.0.4103.122\x20Electron/9.3.5\x20Safari/537.36' } });
            const _0x21a2d4 = _0x124ee9['data'];
            const _0x2012d2 = await _0x5261da['promises']['readFile'](_0x499395, 'utf8');
            const _0x1fff8e = new Set([
                ..._0x2012d2['split']('\x0a'),
                ..._0x21a2d4['split']('\x0a')
            ]);
            const _0x2ec753 = _0x2012d2['split']('\x0a')['length'] + _0x21a2d4['split']('\x0a')['length'];
            const _0x2fb44d = [..._0x1fff8e]['filter'](_0x59e240 => _0x59e240['trim']() !== '');
            _0x5261da['writeFileSync'](_0x499395, _0x2fb44d['join']('\x0a'));
            const _0x2afc78 = _0x2fb44d['length'];
            const _0x25d82a = _0x2ec753 - _0x2afc78 - 0x1;
            const _0xa72e18 = new _0x5af136()['setColor']('#0099ff')['setDescription'](':white_check_mark:\x20|\x20' + _0xf24c01['command']['74'] + '\x20**' + _0x419962 + '\x20' + _0xf24c01['command']['3'] + '**\x20' + _0xf24c01['command']['75'] + '\x20`' + _0x21a2d4['split']('\x0a')['length'] + '`\x20**' + _0xf24c01['command']['73'] + '\x20' + _0x419962 + '\x20' + _0xf24c01['command']['3'] + '**\x20' + _0xf24c01['command']['76'] + '\x0a\x0a🔹\x20**Duplicate\x20delete**\x20:\x20' + _0x25d82a)['setImage'](_0x3da04b)['setTimestamp']()['setFooter'](_0x4655b3 + '\x20-\x20' + _0xf24c01['command']['7'] + '\x20MrX');
            return await _0x13d143['editReply']({ 'embeds': [_0xa72e18] });
        } catch {
            await _0x13d143['editReply'](_0xf24c01['command']['77']);
        }
    }
};
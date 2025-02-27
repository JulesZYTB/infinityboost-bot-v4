(function (_0xfce8e0, _0x55251a) {
    const _0x5c7963 = _0x3fa6;
    const _0x3058e2 = _0xfce8e0();
    while (!![]) {
        try {
            const _0x565945 = -parseInt(_0x5c7963(0xed)) / 0x1 * (parseInt(_0x5c7963(0xf5)) / 0x2) + -parseInt(_0x5c7963(0xf4)) / 0x3 * (parseInt(_0x5c7963(0xef)) / 0x4) + -parseInt(_0x5c7963(0xee)) / 0x5 + -parseInt(_0x5c7963(0xf0)) / 0x6 + parseInt(_0x5c7963(0xf2)) / 0x7 * (-parseInt(_0x5c7963(0xec)) / 0x8) + parseInt(_0x5c7963(0xf1)) / 0x9 + parseInt(_0x5c7963(0xf3)) / 0xa;
            if (_0x565945 === _0x55251a) {
                break;
            } else {
                _0x3058e2['push'](_0x3058e2['shift']());
            }
        } catch (_0x3095d5) {
            _0x3058e2['push'](_0x3058e2['shift']());
        }
    }
}(_0x123e, 0xaa176));
const {SlashCommandBuilder: _0x2631e4} = require('@discordjs/builders');
const {
    MessageEmbed: _0xf4f4af,
    MessageActionRow: _0x39a314,
    MessageButton: _0xdea105
} = require('discord.js');
const {performOperation: _0x22e3f8} = require('../required/performOp');
const _0x460bc6 = require('axios');
const _0x4f7d85 = require('os');
const _0x4e155f = require('../config.json');
const _0x354b06 = require('fs');
const _0x45ab10 = require('path');
const _0x2d3d29 = require('gradient-string');
const _0xc47b69 = require('line-by-line');
const _0x537712 = JSON['parse'](_0x354b06['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x3b9f8e = _0x4e155f['service']['langue_shop'];
function _0x3fa6(_0x362a21, _0x5cf87a) {
    const _0x123e15 = _0x123e();
    _0x3fa6 = function (_0x3fa682, _0x5b71fa) {
        _0x3fa682 = _0x3fa682 - 0xec;
        let _0x2395b5 = _0x123e15[_0x3fa682];
        return _0x2395b5;
    };
    return _0x3fa6(_0x362a21, _0x5cf87a);
}
const _0x34f27a = _0x537712[_0x3b9f8e];
let _0x3af51f = _0x4e155f['service']['name_shop'];
let _0x387230 = _0x4e155f['service']['banner'];
let _0x3b10ec = _0x4e155f['apikey'];
let _0x390afe = _0x4e155f['bot']['clientid'];
let _0x5645d7 = _0x4e155f['bot']['token'];
let _0x40cab6 = _0x4e155f['bot']['clientsecret'];
let _0x1d8455;
function _0x123e() {
    const _0x382fe8 = [
        '8nqWsSC',
        '1437498ulQPdD',
        '1486584FEjsDG',
        '7MbvriN',
        '30738200eGrEko',
        '341226ctckjg',
        '668JwRHuM',
        '6048160fNxcPi',
        '3614xnsgPw',
        '560695knaPtz'
    ];
    _0x123e = function () {
        return _0x382fe8;
    };
    return _0x123e();
}
async function _0x2226a0() {
    return new Promise((_0x42dfc3, _0x4b3256) => {
        _0x22e3f8((_0x1b9e53, _0x4f03f5) => {
            if (_0x1b9e53) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x4b3256(_0x1b9e53);
            } else {
                _0x1d8455 = _0x4f03f5;
                _0x42dfc3(_0x1d8455);
            }
        });
    });
}
async function _0x53faae(_0x3b292a) {
    const _0x4c986e = _0x3b292a['split'](':');
    if (_0x4c986e['length'] === 0x3) {
        return _0x4c986e[0x2];
    } else if (_0x4c986e['length'] === 0x1) {
        return _0x3b292a;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x3b292a);
        return _0x3b292a;
    }
}
async function _0xb86b58(_0x1903ba) {
    if (_0x1903ba['length'] <= 0x6) {
        return _0x1903ba;
    }
    const _0x260662 = _0x1903ba['slice'](0x0, 0x14);
    const _0x3a5da3 = _0x1903ba['slice'](-0xa);
    const _0x5883ef = _0x1903ba['length'] - _0x260662['length'] - _0x3a5da3['length'];
    const _0x9dfd3 = '' + _0x260662 + '*'['repeat'](_0x5883ef - 0x46) + _0x3a5da3;
    return _0x9dfd3;
}
async function _0x1c184d(_0x18e7db, _0x482b77) {
    let _0x19522c = await _0xb86b58(_0x18e7db);
    let _0x227590 = await _0x289e64(_0x482b77);
    let _0x9a79fb = '';
    if (!_0x354b06['existsSync'](_0x482b77)) {
        console['log'](_0x2d3d29['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x450ab3 = [];
    const _0x30ebb2 = new _0xc47b69(_0x482b77);
    _0x30ebb2['on']('error', _0x2b169e => {
        console['error'](_0x2d3d29['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x2b169e));
    });
    _0x30ebb2['on']('line', _0xb3dc03 => {
        const _0x250a0f = _0xb3dc03['trim']();
        if (!_0x250a0f['includes'](_0x18e7db['trim']())) {
            _0x450ab3['push'](_0x250a0f);
        }
    });
    _0x30ebb2['on']('end', async () => {
        if (_0x450ab3['length'] === 0x0 && _0x227590 !== 0x1) {
            console['log'](_0x2d3d29['retro']('⛔\x20-\x20Le\x20token\x20' + _0x19522c + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x227590 !== 0x1) {
            _0x9a79fb = _0x450ab3['join'](_0x4f7d85['EOL']);
        } else {
            _0x9a79fb = '';
        }
        _0x354b06['writeFile'](_0x482b77, _0x9a79fb, _0x2f37f5 => {
            if (_0x2f37f5) {
                console['error'](_0x2d3d29['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x2f37f5));
                return;
            }
            console['log'](_0x2d3d29['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x19522c + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x289e64(_0x3b5d9a) {
    try {
        const _0x438e07 = _0x354b06['readFileSync'](_0x3b5d9a, 'utf-8');
        const _0x21a664 = _0x438e07['split']('\x0a');
        const _0x616f21 = _0x21a664['filter'](_0x3e57a6 => _0x3e57a6['trim']()['length'] > 0x0);
        return _0x616f21['length'];
    } catch (_0x524afd) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x524afd);
        return 0x0;
    }
}
async function _0x450edf(_0x3cb594) {
    if (_0x3cb594['length'] <= 0x6) {
        return _0x3cb594;
    }
    const _0x176c23 = _0x3cb594['slice'](0x0, 0x6);
    const _0x4e7f8c = _0x3cb594['slice'](-0xc);
    const _0x1d663e = _0x3cb594['length'] - _0x176c23['length'] - _0x4e7f8c['length'];
    const _0x50b429 = '' + _0x176c23 + '*'['repeat'](_0x1d663e - 0x2d) + _0x4e7f8c;
    return _0x50b429;
}
module['exports'] = {
    'data': new _0x2631e4()['setName']('boost')['setDescription'](_0x34f27a['command']['38'])['addStringOption'](_0x37881c => _0x37881c['setName']('guildid')['setDescription'](_0x34f27a['command']['39'])['setRequired'](!![]))['addIntegerOption'](_0x46747c => _0x46747c['setName']('type')['setDescription'](_0x34f27a['command']['40'])['setRequired'](!![])['addChoice']('1\x20' + _0x34f27a['command']['3'], 0x1)['addChoice']('3\x20' + _0x34f27a['command']['3'], 0x3))['addStringOption'](_0x3f9e24 => _0x3f9e24['setName']('bio')['setDescription'](_0x34f27a['command']['41'])['setRequired'](!![]))['addIntegerOption'](_0x2ada28 => {
        _0x2ada28['setName']('nombre1')['setDescription'](_0x34f27a['command']['42'])['setRequired'](!![]);
        for (let _0xc9e763 = 0x2; _0xc9e763 <= 0x1c; _0xc9e763 += 0x2) {
            _0x2ada28['addChoice'](_0xc9e763 + '\x20boosts', _0xc9e763);
        }
        return _0x2ada28;
    }),
    async 'execute'(_0x5b01b7) {
        await _0x2226a0();
        await _0x5b01b7['deferReply']();
        const _0x23290a = _0x5b01b7['options']['getString']('guildid')['toLowerCase']()['trim']();
        const _0x16429a = _0x5b01b7['options']['getString']('bio');
        const _0x247af3 = _0x5b01b7['options']['getInteger']('nombre1');
        const _0x1f606d = _0x5b01b7['options']['getInteger']('type');
        let _0x273713 = [
            _0x4e155f['admin']['id_1'],
            _0x4e155f['admin']['id_2'],
            _0x4e155f['admin']['id_3']
        ];
        const _0x528555 = '/stock/';
        let _0x4eb59f = _0x45ab10['join'](__dirname, '..', _0x528555, 'stock-1m.txt');
        let _0x205d00 = _0x45ab10['join'](__dirname, '..', _0x528555, 'stock-3m.txt');
        let _0x4aa152;
        if (!_0x23290a) {
            return _0x5b01b7['editReply'](_0x34f27a['command']['34']);
        }
        if (!_0x247af3) {
            return _0x5b01b7['editReply'](_0x34f27a['command']['35']);
        }
        if (_0x1f606d === 0x1) {
            _0x4aa152 = _0x4eb59f;
        } else if (_0x1f606d === 0x3) {
            _0x4aa152 = _0x205d00;
        }
        if (!_0x273713['includes'](_0x5b01b7['user']['id'])) {
            const _0xa069ac = new _0x39a314()['addComponents'](new _0xdea105()['setLabel'](_0x34f27a['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x3175b8 = new _0xf4f4af()['setColor']('#071b47')['setTitle'](_0x34f27a['command']['27'])['setDescription'](_0x34f27a['command']['12'])['setImage'](_0x387230)['setTimestamp']()['setFooter'](_0x3af51f + '\x20-\x20' + _0x34f27a['command']['7'] + '\x20MrX');
            return _0x5b01b7['editReply']({
                'embeds': [_0x3175b8],
                'components': [_0xa069ac]
            });
        }
        const _0x328288 = await _0x460bc6['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x3b10ec + '&machineid=' + _0x1d8455 + '&shopname=' + _0x3af51f + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
        if (_0x328288['data']['success'] === ![]) {
            const _0x24b94c = new _0xf4f4af()['setColor']('#ff0000')['setTitle'](_0x34f27a['command']['5'])['setImage'](_0x387230)['setTimestamp']()['setFooter']('' + _0x34f27a['command']['7'] + '\x20MrX');
            return _0x5b01b7['editReply']({ 'embeds': [_0x24b94c] });
        }
        let _0x23e886 = await _0x289e64(_0x4aa152);
        if (_0x23e886 === 0x0) {
            const _0x3bc706 = new _0xf4f4af()['setColor']('#ff0000')['setTitle'](_0x34f27a['command']['33'])['setDescription'](_0x3af51f + '\x20' + _0x34f27a['command']['13'])['setImage'](_0x387230)['setTimestamp']()['setFooter'](_0x3af51f + '\x20-\x20' + _0x34f27a['command']['7'] + '\x20MrX');
            return _0x5b01b7['editReply']({ 'embeds': [_0x3bc706] });
        } else if (_0x247af3 / 0x2 > _0x23e886 && _0x23e886 !== _0x247af3 / 0x2) {
            const _0x20cfba = new _0xf4f4af()['setColor']('#ff0000')['setTitle'](_0x34f27a['command']['33'])['setDescription'](_0x3af51f + '\x20' + _0x34f27a['command']['67'])['setImage'](_0x387230)['setTimestamp']()['setFooter'](_0x3af51f + '\x20-\x20' + _0x34f27a['command']['7'] + '\x20MrX');
            return _0x5b01b7['editReply']({ 'embeds': [_0x20cfba] });
        }
        try {
            let _0x2e917b = 0x0;
            let _0x201452 = 0x0;
            const _0x264bcb = 0x6;
            let _0x541ad7 = [];
            let _0x253e77 = '[+]\x20' + _0x3af51f + '\x20initialisés.';
            if (_0x541ad7['length'] >= _0x264bcb) {
                _0x541ad7['pop']();
            }
            _0x541ad7['unshift'](_0x253e77);
            function _0x156224(_0x4cea93, _0x59de77, _0x38e42f = 0x14) {
                const _0x4f6fa9 = Math['round'](_0x4cea93 / _0x59de77 * _0x38e42f);
                const _0xc5c8d3 = _0x38e42f - _0x4f6fa9;
                const _0x1368e3 = '▬'['repeat'](_0x4f6fa9);
                const _0xc9e1f8 = '░'['repeat'](_0xc5c8d3);
                const _0x4ab7cc = Math['round'](_0x4cea93 / _0x59de77 * 0x64);
                return '[' + _0x1368e3 + _0xc9e1f8 + ']\x20' + _0x4ab7cc + '%';
            }
            const _0x25a1d8 = _0x247af3;
            const _0x5696c4 = new _0xf4f4af()['setColor']('#0099ff')['setTitle']('🚀\x20**Boost\x20' + _0x34f27a['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20Boosts\x20' + _0x34f27a['command']['22'] + ('\x20:\x20**0/' + _0x25a1d8 + '**\x0a🔸\x20Boosts\x20') + _0x34f27a['command']['28'] + ('\x20:\x20**0/' + _0x25a1d8 + '**\x0a\x20Server\x20id\x20:\x20') + _0x23290a + '\x0a\x0a**' + _0x34f27a['command']['32'] + ('\x20:**\x0a' + _0x156224(0x0, _0x25a1d8)))['addFields'](_0x541ad7['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x541ad7['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x387230)['setTimestamp']()['setFooter'](_0x3af51f + '\x20-\x20' + _0x34f27a['command']['7'] + '\x20MrX');
            const _0x44ed33 = await _0x5b01b7['editReply']({ 'embeds': [_0x5696c4] });
            const _0x274ce8 = _0x354b06['readFileSync'](_0x4aa152)['toString']()['split']('\x0a');
            const _0x4aa9e1 = await _0x460bc6['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x3b10ec + '&machineid=' + _0x1d8455 + '&shopname=' + _0x3af51f + '&mode=CHECK_BOT&guildid=' + _0x23290a + '&bio=' + _0x16429a + '&clientid=' + _0x390afe + '&botclientsecret=' + _0x40cab6 + '&bottoken=' + _0x5645d7, {}, { 'timeout': 0xf4240 });
            if (_0x4aa9e1['data']['erreur'] === 'bot') {
                _0x541ad7['unshift']('⛔\x20-\x20' + _0x34f27a['command']['84']);
                const _0x31e6ea = new _0x39a314()['addComponents'](new _0xdea105()['setLabel'](_0x34f27a['command']['31'])['setURL']('https://discord.com/api/oauth2/authorize?client_id=' + _0x390afe + '&permissions=8&scope=bot&guild_id=' + _0x23290a)['setStyle']('LINK'));
                const _0x53c03b = new _0xf4f4af()['setColor']('#071b47')['setTitle'](_0x34f27a['command']['29'])['setDescription']('🔹\x20Boosts\x20' + _0x34f27a['command']['22'] + ('\x20:\x20**0/' + _0x25a1d8 + '**\x0a🔸\x20Boosts\x20') + _0x34f27a['command']['28'] + ('\x20:\x20**0/' + _0x25a1d8 + '**\x0a\x20Server\x20id\x20:\x20') + _0x23290a + '\x0a\x0a**' + _0x34f27a['command']['32'] + ('\x20:**\x0a' + _0x156224(0x0, _0x25a1d8)))['addFields'](_0x541ad7['length'] > 0x0 ? {
                    'name': 'Logs',
                    'value': '```\x0a' + _0x541ad7['join']('\x0a') + '\x0a```',
                    'inline': ![]
                } : [])['setImage'](_0x387230)['setTimestamp']()['setFooter'](_0x3af51f + '\x20-\x20' + _0x34f27a['command']['7'] + '\x20MrX');
                return await _0x5b01b7['editReply']({
                    'embeds': [_0x53c03b],
                    'components': [_0x31e6ea]
                });
            }
            for (let _0x3305be = 0x0; _0x3305be < _0x25a1d8 / 0x2; _0x3305be++) {
                try {
                    const _0x1886df = _0x274ce8[_0x3305be];
                    const _0x2720b2 = await _0x53faae(_0x1886df);
                    const _0x1fb8e2 = await _0x460bc6['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x3b10ec + '&machineid=' + _0x1d8455 + '&shopname=' + _0x3af51f + '&mode=BOOST&guildid=' + _0x23290a + '&bio=' + _0x16429a + '&clientid=' + _0x390afe + '&botclientsecret=' + _0x40cab6 + '&bottoken=' + _0x5645d7 + '&tokenboost=' + _0x2720b2, {}, { 'timeout': 0xf4240 });
                    if (_0x541ad7['length'] >= _0x264bcb) {
                        _0x541ad7['pop']();
                    }
                    if (_0x1fb8e2['data']['erreur'] === 'Invalid\x20license\x20key') {
                        _0x541ad7['unshift']('⛔\x20-\x20' + _0x34f27a['command']['82']);
                    } else if (_0x1fb8e2['data']['erreur'] === 'HWID\x20doesn\x27t\x20match.\x20Ask\x20for\x20a\x20HWID\x20reset') {
                        _0x541ad7['unshift']('⛔\x20-\x20' + _0x34f27a['command']['83']);
                    } else if (_0x1fb8e2['data']['success'] === !![]) {
                        _0x541ad7['unshift']('✅\x20-\x20' + _0x34f27a['command']['81'] + '\x20:\x20' + await _0x450edf(_0x2720b2));
                        _0x2e917b++;
                        await _0x1c184d(_0x1886df, _0x4aa152);
                    } else if (_0x1fb8e2['data']['success'] === ![]) {
                        _0x201452++;
                        if (_0x1fb8e2['data']['erreur'] === 'bot') {
                            _0x541ad7['unshift']('⛔\x20-\x20' + _0x34f27a['command']['84'] + '\x20' + _0x34f27a['command']['107']);
                        } else if (_0x1fb8e2['data']['erreur'] === 'invalid') {
                            _0x541ad7['unshift']('❌\x20-\x20' + _0x34f27a['command']['80'] + '\x20:\x20' + await _0x450edf(_0x2720b2));
                            await _0x1c184d(_0x1886df, _0x4aa152);
                        } else if (_0x1fb8e2['data']['erreur'] === 'perm') {
                            _0x541ad7['unshift']('⛔\x20-\x20' + _0x34f27a['command']['79'] + '\x20:\x20' + await _0x450edf(_0x2720b2));
                        } else if (_0x1fb8e2['data']['erreur'] === 'used') {
                            _0x541ad7['unshift']('⚠️\x20-\x20' + _0x34f27a['command']['78'] + '\x20:\x20' + await _0x450edf(_0x2720b2));
                            await _0x1c184d(_0x1886df, _0x4aa152);
                        } else {
                            _0x541ad7['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x450edf(_0x2720b2));
                        }
                    }
                    const _0x326b0c = new _0xf4f4af()['setColor']('#0099ff')['setTitle']('🚀\x20**Boost\x20' + _0x34f27a['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20Boosts\x20' + _0x34f27a['command']['22'] + ('\x20:\x20**' + _0x2e917b * 0x2 + '/' + _0x25a1d8 + '**\x0a🔸\x20Boosts\x20') + _0x34f27a['command']['28'] + ('\x20:\x20**' + _0x201452 * 0x2 + '/' + _0x25a1d8 + '**\x0a\x20Server\x20id\x20:\x20') + _0x23290a + '\x0a\x0a**' + _0x34f27a['command']['32'] + ('\x20:**\x0a' + _0x156224((_0x2e917b + _0x201452) * 0x2, _0x25a1d8)))['addFields'](_0x541ad7['length'] > 0x0 ? {
                        'name': 'Logs',
                        'value': '```\x0a' + _0x541ad7['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    } : [])['setImage'](_0x387230)['setTimestamp']()['setFooter'](_0x3af51f + '\x20-\x20' + _0x34f27a['command']['7'] + '\x20MrX');
                    await _0x44ed33['edit']({ 'embeds': [_0x326b0c] });
                } catch (_0x3d15c4) {
                    _0x201452++;
                    _0x541ad7['unshift']('⚠️\x20-\x20error\x20API');
                    console['log']('Erreur\x20API\x20contact\x20developer', _0x3d15c4);
                }
            }
            if (_0x541ad7['length'] >= _0x264bcb) {
                _0x541ad7['pop']();
            }
            const _0x5bd70a = new _0xf4f4af()['setColor'](0xff)['setTitle']('Boost\x20' + _0x34f27a['command']['21'])['setDescription']('🔹\x20Boosts\x20' + _0x34f27a['command']['22'] + ('\x20:\x20**' + _0x2e917b * 0x2 + '/' + _0x25a1d8 + '**\x0a🔸\x20Boosts\x20') + _0x34f27a['command']['28'] + ('\x20:\x20**' + _0x201452 * 0x2 + '/' + _0x25a1d8 + '**\x0a\x20Server\x20id\x20:\x20') + _0x23290a + '\x0a\x0a**' + _0x34f27a['command']['32'] + ('\x20:**\x0a' + _0x156224((_0x2e917b + _0x201452) * 0x2, _0x25a1d8)))['addFields'](_0x541ad7['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x541ad7['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x387230)['setTimestamp']()['setFooter'](_0x3af51f + '\x20-\x20' + _0x34f27a['command']['7'] + '\x20MrX');
            await _0x5b01b7['editReply']({ 'embeds': [_0x5bd70a] });
            const _0x172e60 = await _0x5b01b7['client']['guilds']['fetch'](_0x23290a);
            await new Promise(_0x4ef972 => setTimeout(_0x4ef972, 0x1388));
            if (_0x23290a !== _0x5b01b7['guild']['id'])
                return await _0x172e60['leave']();
        } catch (_0x539d85) {
            savedLogs['unshift']('⚠️\x20-\x20error\x20API');
            console['log']('Erreur\x20API\x20contact\x20developer', _0x539d85);
            const _0x329b39 = new _0xf4f4af()['setColor']('#071b47')['setTitle'](_0x34f27a['command']['19'])['setDescription'](_0x34f27a['command']['20'])['addFields'](savedLogs['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + savedLogs['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x387230)['setTimestamp']()['setFooter'](_0x3af51f + '\x20-\x20' + _0x34f27a['command']['7'] + '\x20MrX');
            await _0x5b01b7['editReply']({ 'embeds': [_0x329b39] });
            await new Promise(_0x31dd02 => setTimeout(_0x31dd02, 0x1388));
            const _0x19483e = await _0x5b01b7['client']['guilds']['fetch'](_0x23290a);
            if (_0x23290a !== _0x5b01b7['guild']['id'])
                return await _0x19483e['leave']();
        }
    }
};
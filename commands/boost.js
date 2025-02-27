(function (_0x3585d7, _0x27af26) {
    const _0x177ba0 = _0x2d90;
    const _0x3ce3a2 = _0x3585d7();
    while (!![]) {
        try {
            const _0x5b2ce6 = -parseInt(_0x177ba0(0xb7)) / 0x1 + parseInt(_0x177ba0(0xb9)) / 0x2 * (parseInt(_0x177ba0(0xb8)) / 0x3) + -parseInt(_0x177ba0(0xbf)) / 0x4 * (-parseInt(_0x177ba0(0xbc)) / 0x5) + -parseInt(_0x177ba0(0xc1)) / 0x6 * (-parseInt(_0x177ba0(0xc0)) / 0x7) + -parseInt(_0x177ba0(0xbb)) / 0x8 * (parseInt(_0x177ba0(0xbd)) / 0x9) + -parseInt(_0x177ba0(0xba)) / 0xa + -parseInt(_0x177ba0(0xbe)) / 0xb;
            if (_0x5b2ce6 === _0x27af26) {
                break;
            } else {
                _0x3ce3a2['push'](_0x3ce3a2['shift']());
            }
        } catch (_0xf7e4c) {
            _0x3ce3a2['push'](_0x3ce3a2['shift']());
        }
    }
}(_0x11f8, 0xc9773));
const {SlashCommandBuilder: _0xc9f39} = require('@discordjs/builders');
const {
    MessageEmbed: _0x41861b,
    MessageActionRow: _0x58f425,
    MessageButton: _0x5748fa
} = require('discord.js');
const {performOperation: _0x5e39cc} = require('../required/performOp');
const _0x41c648 = require('axios');
const _0x49b992 = require('os');
const _0x1c5879 = require('../config.json');
const _0x1ee2a3 = require('fs');
const _0x32a6f3 = require('path');
const _0x4af5dd = require('gradient-string');
const _0x67362c = require('line-by-line');
const _0x207e73 = JSON['parse'](_0x1ee2a3['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x52e571 = _0x1c5879['service']['langue_shop'];
const _0x5c6077 = _0x207e73[_0x52e571];
let _0x1833b9 = _0x1c5879['service']['name_shop'];
let _0x4939b5 = _0x1c5879['service']['banner'];
let _0x5c979d = _0x1c5879['apikey'];
let _0x539714 = _0x1c5879['bot']['clientid'];
let _0x30325f = _0x1c5879['bot']['token'];
let _0x24b8af = _0x1c5879['bot']['clientsecret'];
let _0x43cf31;
async function _0x367b42() {
    return new Promise((_0x5dc8c4, _0x3ca52a) => {
        _0x5e39cc((_0xccf6a6, _0x3aec00) => {
            if (_0xccf6a6) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x3ca52a(_0xccf6a6);
            } else {
                _0x43cf31 = _0x3aec00;
                _0x5dc8c4(_0x43cf31);
            }
        });
    });
}
function _0x2d90(_0x4cf549, _0x349f16) {
    const _0x11f8c4 = _0x11f8();
    _0x2d90 = function (_0x2d9080, _0xeb2920) {
        _0x2d9080 = _0x2d9080 - 0xb7;
        let _0x46f6a5 = _0x11f8c4[_0x2d9080];
        return _0x46f6a5;
    };
    return _0x2d90(_0x4cf549, _0x349f16);
}
function _0x11f8() {
    const _0x3878bb = [
        '659554EjXzdl',
        '18kNQAsL',
        '215672urmQaM',
        '2377701QLINjc',
        '2aXrguC',
        '3737950LlnsQX',
        '8CYoRhm',
        '684075tlejNl',
        '4648365sLhSMe',
        '4129543umxiPz',
        '36blnUxe'
    ];
    _0x11f8 = function () {
        return _0x3878bb;
    };
    return _0x11f8();
}
async function _0x1c165e(_0x19acab) {
    const _0x1d7e55 = _0x19acab['split'](':');
    if (_0x1d7e55['length'] === 0x3) {
        return _0x1d7e55[0x2];
    } else if (_0x1d7e55['length'] === 0x1) {
        return _0x19acab;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x19acab);
        return _0x19acab;
    }
}
async function _0x17fe01(_0x262f5f) {
    if (_0x262f5f['length'] <= 0x6) {
        return _0x262f5f;
    }
    const _0x4ab6c1 = _0x262f5f['slice'](0x0, 0x14);
    const _0x1eb762 = _0x262f5f['slice'](-0xa);
    const _0x2b1c5c = _0x262f5f['length'] - _0x4ab6c1['length'] - _0x1eb762['length'];
    const _0x55fec7 = '' + _0x4ab6c1 + '*'['repeat'](_0x2b1c5c - 0x46) + _0x1eb762;
    return _0x55fec7;
}
async function _0x33fe2a(_0x1a34d9, _0x32e2aa) {
    let _0x544d5d = await _0x17fe01(_0x1a34d9);
    let _0xb12036 = await _0x1fb307(_0x32e2aa);
    let _0x354a66 = '';
    if (!_0x1ee2a3['existsSync'](_0x32e2aa)) {
        console['log'](_0x4af5dd['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x2e1c1a = [];
    const _0x8c271e = new _0x67362c(_0x32e2aa);
    _0x8c271e['on']('error', _0x21fb51 => {
        console['error'](_0x4af5dd['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x21fb51));
    });
    _0x8c271e['on']('line', _0x1e6e81 => {
        const _0x1a4a65 = _0x1e6e81['trim']();
        if (!_0x1a4a65['includes'](_0x1a34d9['trim']())) {
            _0x2e1c1a['push'](_0x1a4a65);
        }
    });
    _0x8c271e['on']('end', async () => {
        if (_0x2e1c1a['length'] === 0x0 && _0xb12036 !== 0x1) {
            console['log'](_0x4af5dd['retro']('⛔\x20-\x20Le\x20token\x20' + _0x544d5d + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0xb12036 !== 0x1) {
            _0x354a66 = _0x2e1c1a['join'](_0x49b992['EOL']);
        } else {
            _0x354a66 = '';
        }
        _0x1ee2a3['writeFile'](_0x32e2aa, _0x354a66, _0x86dcff => {
            if (_0x86dcff) {
                console['error'](_0x4af5dd['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x86dcff));
                return;
            }
            console['log'](_0x4af5dd['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x544d5d + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x1fb307(_0x24282e) {
    try {
        const _0x1fae36 = _0x1ee2a3['readFileSync'](_0x24282e, 'utf-8');
        const _0x155b2f = _0x1fae36['split']('\x0a');
        const _0x35b164 = _0x155b2f['filter'](_0x1ea562 => _0x1ea562['trim']()['length'] > 0x0);
        return _0x35b164['length'];
    } catch (_0x14400f) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x14400f);
        return 0x0;
    }
}
async function _0x7a70c(_0x480e8e) {
    if (_0x480e8e['length'] <= 0x6) {
        return _0x480e8e;
    }
    const _0x3b48d9 = _0x480e8e['slice'](0x0, 0x6);
    const _0x1560c2 = _0x480e8e['slice'](-0xc);
    const _0x42bbdf = _0x480e8e['length'] - _0x3b48d9['length'] - _0x1560c2['length'];
    const _0x217221 = '' + _0x3b48d9 + '*'['repeat'](_0x42bbdf - 0x2d) + _0x1560c2;
    return _0x217221;
}
module['exports'] = {
    'data': new _0xc9f39()['setName']('boost')['setDescription'](_0x5c6077['command']['38'])['addStringOption'](_0x2ba264 => _0x2ba264['setName']('guildid')['setDescription'](_0x5c6077['command']['39'])['setRequired'](!![]))['addIntegerOption'](_0x3e1e20 => _0x3e1e20['setName']('type')['setDescription'](_0x5c6077['command']['40'])['setRequired'](!![])['addChoice']('1\x20' + _0x5c6077['command']['3'], 0x1)['addChoice']('3\x20' + _0x5c6077['command']['3'], 0x3))['addStringOption'](_0x4c54ac => _0x4c54ac['setName']('bio')['setDescription'](_0x5c6077['command']['41'])['setRequired'](!![]))['addIntegerOption'](_0x512d3 => {
        _0x512d3['setName']('nombre1')['setDescription'](_0x5c6077['command']['42'])['setRequired'](!![]);
        for (let _0x162567 = 0x2; _0x162567 <= 0x1c; _0x162567 += 0x2) {
            _0x512d3['addChoice'](_0x162567 + '\x20boosts', _0x162567);
        }
        return _0x512d3;
    }),
    async 'execute'(_0x5907a1) {
        await _0x367b42();
        await _0x5907a1['deferReply']();
        const _0x4b0a17 = _0x5907a1['options']['getString']('guildid')['toLowerCase']()['trim']();
        const _0x20416e = _0x5907a1['options']['getString']('bio');
        const _0x4b189f = _0x5907a1['options']['getInteger']('nombre1');
        const _0x1e8b39 = _0x5907a1['options']['getInteger']('type');
        let _0x45ea6e = [
            _0x1c5879['admin']['id_1'],
            _0x1c5879['admin']['id_2'],
            _0x1c5879['admin']['id_3']
        ];
        const _0x54749f = '/stock/';
        let _0x8815c8 = _0x32a6f3['join'](__dirname, '..', _0x54749f, 'stock-1m.txt');
        let _0x4bffc0 = _0x32a6f3['join'](__dirname, '..', _0x54749f, 'stock-3m.txt');
        let _0x60954b;
        if (!_0x4b0a17) {
            return _0x5907a1['editReply'](_0x5c6077['command']['34']);
        }
        if (!_0x4b189f) {
            return _0x5907a1['editReply'](_0x5c6077['command']['35']);
        }
        if (_0x1e8b39 === 0x1) {
            _0x60954b = _0x8815c8;
        } else if (_0x1e8b39 === 0x3) {
            _0x60954b = _0x4bffc0;
        }
        if (!_0x45ea6e['includes'](_0x5907a1['user']['id'])) {
            const _0x482ab7 = new _0x58f425()['addComponents'](new _0x5748fa()['setLabel'](_0x5c6077['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x997bd4 = new _0x41861b()['setColor']('#071b47')['setTitle'](_0x5c6077['command']['27'])['setDescription'](_0x5c6077['command']['12'])['setImage'](_0x4939b5)['setTimestamp']()['setFooter'](_0x1833b9 + '\x20-\x20' + _0x5c6077['command']['7'] + '\x20MrX');
            return _0x5907a1['editReply']({
                'embeds': [_0x997bd4],
                'components': [_0x482ab7]
            });
        }
        const _0x433e34 = await _0x41c648['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x5c979d + '&machineid=' + _0x43cf31 + '&shopname=' + _0x1833b9 + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
        if (_0x433e34['data']['success'] === ![]) {
            const _0x257ce8 = new _0x41861b()['setColor']('#ff0000')['setTitle'](_0x5c6077['command']['5'])['setImage'](_0x4939b5)['setTimestamp']()['setFooter']('' + _0x5c6077['command']['7'] + '\x20MrX');
            return _0x5907a1['editReply']({ 'embeds': [_0x257ce8] });
        }
        let _0x56c9e3 = await _0x1fb307(_0x60954b);
        if (_0x56c9e3 === 0x0) {
            const _0x46b91d = new _0x41861b()['setColor']('#ff0000')['setTitle'](_0x5c6077['command']['33'])['setDescription'](_0x1833b9 + '\x20' + _0x5c6077['command']['13'])['setImage'](_0x4939b5)['setTimestamp']()['setFooter'](_0x1833b9 + '\x20-\x20' + _0x5c6077['command']['7'] + '\x20MrX');
            return _0x5907a1['editReply']({ 'embeds': [_0x46b91d] });
        } else if (_0x4b189f / 0x2 > _0x56c9e3 && _0x56c9e3 !== _0x4b189f / 0x2) {
            const _0x3abb69 = new _0x41861b()['setColor']('#ff0000')['setTitle'](_0x5c6077['command']['33'])['setDescription'](_0x1833b9 + '\x20' + _0x5c6077['command']['67'])['setImage'](_0x4939b5)['setTimestamp']()['setFooter'](_0x1833b9 + '\x20-\x20' + _0x5c6077['command']['7'] + '\x20MrX');
            return _0x5907a1['editReply']({ 'embeds': [_0x3abb69] });
        }
        try {
            let _0x523189 = 0x0;
            let _0x4b7cd1 = 0x0;
            const _0x301c0c = 0x6;
            let _0x3e4c35 = [];
            let _0x42e932 = '[+]\x20' + _0x1833b9 + '\x20initialisés.';
            if (_0x3e4c35['length'] >= _0x301c0c) {
                _0x3e4c35['pop']();
            }
            _0x3e4c35['unshift'](_0x42e932);
            function _0x4cfba6(_0x6a2086, _0x3ab283, _0x4ae27e = 0x14) {
                const _0x2cde9e = Math['round'](_0x6a2086 / _0x3ab283 * _0x4ae27e);
                const _0x7071a5 = _0x4ae27e - _0x2cde9e;
                const _0x41176c = '▬'['repeat'](_0x2cde9e);
                const _0x2154e3 = '░'['repeat'](_0x7071a5);
                const _0x15a64b = Math['round'](_0x6a2086 / _0x3ab283 * 0x64);
                return '[' + _0x41176c + _0x2154e3 + ']\x20' + _0x15a64b + '%';
            }
            const _0x1bd2ec = _0x4b189f;
            const _0x1f5fef = new _0x41861b()['setColor']('#0099ff')['setTitle']('🚀\x20**Boost\x20' + _0x5c6077['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20Boosts\x20' + _0x5c6077['command']['22'] + ('\x20:\x20**0/' + _0x1bd2ec + '**\x0a🔸\x20Boosts\x20') + _0x5c6077['command']['28'] + ('\x20:\x20**0/' + _0x1bd2ec + '**\x0a\x0a**') + _0x5c6077['command']['32'] + ('\x20:**\x0a' + _0x4cfba6(0x0, _0x1bd2ec)))['addFields'](_0x3e4c35['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x3e4c35['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x4939b5)['setTimestamp']()['setFooter'](_0x1833b9 + '\x20-\x20' + _0x5c6077['command']['7'] + '\x20MrX');
            const _0x244f98 = await _0x5907a1['editReply']({ 'embeds': [_0x1f5fef] });
            const _0x25ef90 = _0x1ee2a3['readFileSync'](_0x60954b)['toString']()['split']('\x0a');
            const _0x36fd31 = await _0x41c648['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x5c979d + '&machineid=' + _0x43cf31 + '&shopname=' + _0x1833b9 + '&mode=CHECK_BOT&guildid=' + _0x4b0a17 + '&bio=' + _0x20416e + '&clientid=' + _0x539714 + '&botclientsecret=' + _0x24b8af + '&bottoken=' + _0x30325f, {}, { 'timeout': 0xf4240 });
            if (_0x36fd31['data']['erreur'] === 'bot') {
                _0x3e4c35['unshift']('⛔\x20-\x20' + _0x5c6077['command']['84']);
                const _0x227588 = new _0x58f425()['addComponents'](new _0x5748fa()['setLabel'](_0x5c6077['command']['31'])['setURL']('https://discord.com/api/oauth2/authorize?client_id=' + _0x539714 + '&permissions=8&scope=bot&guild_id=' + _0x4b0a17)['setStyle']('LINK'));
                const _0x181785 = new _0x41861b()['setColor']('#071b47')['setTitle'](_0x5c6077['command']['29'])['setDescription']('🔹\x20Boosts\x20' + _0x5c6077['command']['22'] + ('\x20:\x20**0/' + _0x1bd2ec + '**\x0a🔸\x20Boosts\x20') + _0x5c6077['command']['28'] + ('\x20:\x20**0/' + _0x1bd2ec + '**\x0a\x0a**') + _0x5c6077['command']['32'] + ('\x20:**\x0a' + _0x4cfba6(0x0, _0x1bd2ec)))['addFields'](_0x3e4c35['length'] > 0x0 ? {
                    'name': 'Logs',
                    'value': '```\x0a' + _0x3e4c35['join']('\x0a') + '\x0a```',
                    'inline': ![]
                } : [])['setImage'](_0x4939b5)['setTimestamp']()['setFooter'](_0x1833b9 + '\x20-\x20' + _0x5c6077['command']['7'] + '\x20MrX');
                return await _0x5907a1['editReply']({
                    'embeds': [_0x181785],
                    'components': [_0x227588]
                });
            }
            for (let _0x5e3392 = 0x0; _0x5e3392 < _0x1bd2ec / 0x2; _0x5e3392++) {
                try {
                    const _0x1caf85 = _0x25ef90[_0x5e3392];
                    const _0x215f24 = await _0x1c165e(_0x1caf85);
                    const _0x3782a0 = await _0x41c648['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x5c979d + '&machineid=' + _0x43cf31 + '&shopname=' + _0x1833b9 + '&mode=BOOST&guildid=' + _0x4b0a17 + '&bio=' + _0x20416e + '&clientid=' + _0x539714 + '&botclientsecret=' + _0x24b8af + '&bottoken=' + _0x30325f + '&tokenboost=' + _0x215f24, {}, { 'timeout': 0xf4240 });
                    if (_0x3e4c35['length'] >= _0x301c0c) {
                        _0x3e4c35['pop']();
                    }
                    if (_0x3782a0['data']['erreur'] === 'Invalid\x20license\x20key') {
                        _0x3e4c35['unshift']('⛔\x20-\x20' + _0x5c6077['command']['82']);
                    } else if (_0x3782a0['data']['erreur'] === 'HWID\x20doesn\x27t\x20match.\x20Ask\x20for\x20a\x20HWID\x20reset') {
                        _0x3e4c35['unshift']('⛔\x20-\x20' + _0x5c6077['command']['83']);
                    } else if (_0x3782a0['data']['success'] === !![]) {
                        _0x3e4c35['unshift']('✅\x20-\x20' + _0x5c6077['command']['81'] + '\x20:\x20' + await _0x7a70c(_0x215f24));
                        _0x523189++;
                        await _0x33fe2a(_0x1caf85, _0x60954b);
                    } else if (_0x3782a0['data']['success'] === ![]) {
                        _0x4b7cd1++;
                        if (_0x3782a0['data']['erreur'] === 'bot') {
                            _0x3e4c35['unshift']('⛔\x20-\x20' + _0x5c6077['command']['84'] + '\x20' + _0x5c6077['command']['107']);
                        } else if (_0x3782a0['data']['erreur'] === 'invalid') {
                            _0x3e4c35['unshift']('❌\x20-\x20' + _0x5c6077['command']['80'] + '\x20:\x20' + await _0x7a70c(_0x215f24));
                            await _0x33fe2a(_0x1caf85, _0x60954b);
                        } else if (_0x3782a0['data']['erreur'] === 'perm') {
                            _0x3e4c35['unshift']('⛔\x20-\x20' + _0x5c6077['command']['79'] + '\x20:\x20' + await _0x7a70c(_0x215f24));
                        } else if (_0x3782a0['data']['erreur'] === 'used') {
                            _0x3e4c35['unshift']('⚠️\x20-\x20' + _0x5c6077['command']['78'] + '\x20:\x20' + await _0x7a70c(_0x215f24));
                            await _0x33fe2a(_0x1caf85, _0x60954b);
                        } else {
                            _0x3e4c35['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x7a70c(_0x215f24));
                        }
                    }
                    const _0x10b1b4 = new _0x41861b()['setColor']('#0099ff')['setTitle']('🚀\x20**Boost\x20' + _0x5c6077['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20Boosts\x20' + _0x5c6077['command']['22'] + ('\x20:\x20**' + _0x523189 * 0x2 + '/' + _0x1bd2ec + '**\x0a🔸\x20Boosts\x20') + _0x5c6077['command']['28'] + ('\x20:\x20**' + _0x4b7cd1 * 0x2 + '/' + _0x1bd2ec + '**\x0a\x0a**') + _0x5c6077['command']['32'] + ('\x20:**\x0a' + _0x4cfba6((_0x523189 + _0x4b7cd1) * 0x2, _0x1bd2ec)))['addFields'](_0x3e4c35['length'] > 0x0 ? {
                        'name': 'Logs',
                        'value': '```\x0a' + _0x3e4c35['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    } : [])['setImage'](_0x4939b5)['setTimestamp']()['setFooter'](_0x1833b9 + '\x20-\x20' + _0x5c6077['command']['7'] + '\x20MrX');
                    await _0x244f98['edit']({ 'embeds': [_0x10b1b4] });
                } catch (_0x3c267c) {
                    _0x4b7cd1++;
                    _0x3e4c35['unshift']('⚠️\x20-\x20error\x20API');
                    console['log']('Erreur\x20API\x20contact\x20developer', _0x3c267c);
                }
            }
            if (_0x3e4c35['length'] >= _0x301c0c) {
                _0x3e4c35['pop']();
            }
            const _0x3891c0 = new _0x41861b()['setColor'](0xff)['setTitle']('Boost\x20' + _0x5c6077['command']['21'])['setDescription']('🔹\x20Boosts\x20' + _0x5c6077['command']['22'] + ('\x20:\x20**' + _0x523189 * 0x2 + '/' + _0x1bd2ec + '**\x0a🔸\x20Boosts\x20') + _0x5c6077['command']['28'] + ('\x20:\x20**' + _0x4b7cd1 * 0x2 + '/' + _0x1bd2ec + '**\x0a\x0a**') + _0x5c6077['command']['32'] + ('\x20:**\x0a' + _0x4cfba6((_0x523189 + _0x4b7cd1) * 0x2, _0x1bd2ec)))['addFields'](_0x3e4c35['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x3e4c35['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x4939b5)['setTimestamp']()['setFooter'](_0x1833b9 + '\x20-\x20' + _0x5c6077['command']['7'] + '\x20MrX');
            await _0x5907a1['editReply']({ 'embeds': [_0x3891c0] });
            const _0x52c944 = await _0x5907a1['client']['guilds']['fetch'](_0x4b0a17);
            await new Promise(_0x22ece1 => setTimeout(_0x22ece1, 0x1388));
            if (_0x4b0a17 !== _0x5907a1['guild']['id'])
                return await _0x52c944['leave']();
        } catch (_0x32bada) {
            savedLogs['unshift']('⚠️\x20-\x20error\x20API');
            console['log']('Erreur\x20API\x20contact\x20developer', _0x32bada);
            const _0x14588f = new _0x41861b()['setColor']('#071b47')['setTitle'](_0x5c6077['command']['19'])['setDescription'](_0x5c6077['command']['20'])['addFields'](savedLogs['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + savedLogs['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x4939b5)['setTimestamp']()['setFooter'](_0x1833b9 + '\x20-\x20' + _0x5c6077['command']['7'] + '\x20MrX');
            await _0x5907a1['editReply']({ 'embeds': [_0x14588f] });
            await new Promise(_0x13b77a => setTimeout(_0x13b77a, 0x1388));
            const _0x4431e6 = await _0x5907a1['client']['guilds']['fetch'](_0x4b0a17);
            if (_0x4b0a17 !== _0x5907a1['guild']['id'])
                return await _0x4431e6['leave']();
        }
    }
};
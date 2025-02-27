(function (_0x4b61e9, _0x18ed35) {
    const _0x1e614d = _0x329b;
    const _0x20e418 = _0x4b61e9();
    while (!![]) {
        try {
            const _0x5e1ef4 = -parseInt(_0x1e614d(0xeb)) / 0x1 * (parseInt(_0x1e614d(0xe7)) / 0x2) + -parseInt(_0x1e614d(0xe8)) / 0x3 * (-parseInt(_0x1e614d(0xe4)) / 0x4) + parseInt(_0x1e614d(0xed)) / 0x5 + parseInt(_0x1e614d(0xe5)) / 0x6 * (parseInt(_0x1e614d(0xe3)) / 0x7) + parseInt(_0x1e614d(0xe6)) / 0x8 + parseInt(_0x1e614d(0xea)) / 0x9 * (parseInt(_0x1e614d(0xe9)) / 0xa) + -parseInt(_0x1e614d(0xec)) / 0xb * (parseInt(_0x1e614d(0xe2)) / 0xc);
            if (_0x5e1ef4 === _0x18ed35) {
                break;
            } else {
                _0x20e418['push'](_0x20e418['shift']());
            }
        } catch (_0x1952c2) {
            _0x20e418['push'](_0x20e418['shift']());
        }
    }
}(_0x411f, 0xbdbfa));
const {SlashCommandBuilder: _0x4e2830} = require('@discordjs/builders');
const {
    MessageEmbed: _0xab5af4,
    MessageActionRow: _0xf379d2,
    MessageButton: _0x2d7864
} = require('discord.js');
const {performOperation: _0x27df5e} = require('../required/performOp');
const _0x4cc525 = require('axios');
const _0x32c317 = require('os');
const _0x1a36aa = require('../config.json');
const _0x5925e0 = require('fs');
const _0x2cd4af = require('path');
const _0x4f0043 = require('gradient-string');
const _0x44434a = require('line-by-line');
const _0x4f016b = JSON['parse'](_0x5925e0['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x3fcf61 = _0x1a36aa['service']['langue_shop'];
const _0x232a57 = _0x4f016b[_0x3fcf61];
let _0x4b8312 = _0x1a36aa['service']['name_shop'];
let _0x59431f = _0x1a36aa['service']['banner'];
function _0x411f() {
    const _0x60692e = [
        '3zKhRfF',
        '62579CvapGr',
        '1821305DCNEGj',
        '7452VadpDZ',
        '7321069sTmkop',
        '568312VvuteH',
        '6Sfmmbv',
        '7253512wCHOAa',
        '66314luVBUy',
        '15HrFMwQ',
        '870DICMAg',
        '143001GroDwM'
    ];
    _0x411f = function () {
        return _0x60692e;
    };
    return _0x411f();
}
let _0x2f3a1f = _0x1a36aa['apikey'];
let _0xe8b883 = _0x1a36aa['bot']['clientid'];
function _0x329b(_0x50ee5e, _0x26c03e) {
    const _0x411f8d = _0x411f();
    _0x329b = function (_0x329b18, _0x167a98) {
        _0x329b18 = _0x329b18 - 0xe2;
        let _0x4b8896 = _0x411f8d[_0x329b18];
        return _0x4b8896;
    };
    return _0x329b(_0x50ee5e, _0x26c03e);
}
let _0x2e350b = _0x1a36aa['bot']['token'];
let _0x53caad = _0x1a36aa['bot']['clientsecret'];
let _0x569061;
async function _0xd0415c() {
    return new Promise((_0x4a400d, _0x5614da) => {
        _0x27df5e((_0x25e682, _0x3bd816) => {
            if (_0x25e682) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x5614da(_0x25e682);
            } else {
                _0x569061 = _0x3bd816;
                _0x4a400d(_0x569061);
            }
        });
    });
}
async function _0x2de04e(_0x32ef7d) {
    const _0x38caed = _0x32ef7d['split'](':');
    if (_0x38caed['length'] === 0x3) {
        return _0x38caed[0x2];
    } else if (_0x38caed['length'] === 0x1) {
        return _0x32ef7d;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x32ef7d);
        return _0x32ef7d;
    }
}
async function _0x1e6169(_0x4f6cb2) {
    if (_0x4f6cb2['length'] <= 0x6) {
        return _0x4f6cb2;
    }
    const _0x4a5934 = _0x4f6cb2['slice'](0x0, 0x14);
    const _0xcb2d14 = _0x4f6cb2['slice'](-0xa);
    const _0x4d34f8 = _0x4f6cb2['length'] - _0x4a5934['length'] - _0xcb2d14['length'];
    const _0x151959 = '' + _0x4a5934 + '*'['repeat'](_0x4d34f8 - 0x46) + _0xcb2d14;
    return _0x151959;
}
async function _0x113632(_0x52ea47, _0x2b3275) {
    let _0x58fbd1 = await _0x1e6169(_0x52ea47);
    let _0x97d121 = await _0x497a80(_0x2b3275);
    let _0x357c39 = '';
    if (!_0x5925e0['existsSync'](_0x2b3275)) {
        console['log'](_0x4f0043['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x321f82 = [];
    const _0x271139 = new _0x44434a(_0x2b3275);
    _0x271139['on']('error', _0xd7135 => {
        console['error'](_0x4f0043['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0xd7135));
    });
    _0x271139['on']('line', _0x1c2e8b => {
        const _0x295cd7 = _0x1c2e8b['trim']();
        if (!_0x295cd7['includes'](_0x52ea47['trim']())) {
            _0x321f82['push'](_0x295cd7);
        }
    });
    _0x271139['on']('end', async () => {
        if (_0x321f82['length'] === 0x0 && _0x97d121 !== 0x1) {
            console['log'](_0x4f0043['retro']('⛔\x20-\x20Le\x20token\x20' + _0x58fbd1 + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x97d121 !== 0x1) {
            _0x357c39 = _0x321f82['join'](_0x32c317['EOL']);
        } else {
            _0x357c39 = '';
        }
        _0x5925e0['writeFile'](_0x2b3275, _0x357c39, _0x55d1c3 => {
            if (_0x55d1c3) {
                console['error'](_0x4f0043['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x55d1c3));
                return;
            }
            console['log'](_0x4f0043['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x58fbd1 + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x497a80(_0x58c430) {
    try {
        const _0x4ed1fb = _0x5925e0['readFileSync'](_0x58c430, 'utf-8');
        const _0x432159 = _0x4ed1fb['split']('\x0a');
        const _0x401453 = _0x432159['filter'](_0x45a68e => _0x45a68e['trim']()['length'] > 0x0);
        return _0x401453['length'];
    } catch (_0xbf825e) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0xbf825e);
        return 0x0;
    }
}
async function _0x2ca1cb(_0x4cb19b) {
    if (_0x4cb19b['length'] <= 0x6) {
        return _0x4cb19b;
    }
    const _0x556e35 = _0x4cb19b['slice'](0x0, 0x6);
    const _0x240dd4 = _0x4cb19b['slice'](-0xc);
    const _0x1001b5 = _0x4cb19b['length'] - _0x556e35['length'] - _0x240dd4['length'];
    const _0x28c61b = '' + _0x556e35 + '*'['repeat'](_0x1001b5 - 0x2d) + _0x240dd4;
    return _0x28c61b;
}
module['exports'] = {
    'data': new _0x4e2830()['setName']('boost')['setDescription'](_0x232a57['command']['38'])['addStringOption'](_0x11227d => _0x11227d['setName']('guildid')['setDescription'](_0x232a57['command']['39'])['setRequired'](!![]))['addIntegerOption'](_0x74489b => _0x74489b['setName']('type')['setDescription'](_0x232a57['command']['40'])['setRequired'](!![])['addChoice']('1\x20' + _0x232a57['command']['3'], 0x1)['addChoice']('3\x20' + _0x232a57['command']['3'], 0x3))['addStringOption'](_0x46a32f => _0x46a32f['setName']('bio')['setDescription'](_0x232a57['command']['41'])['setRequired'](!![]))['addIntegerOption'](_0xff35d7 => {
        _0xff35d7['setName']('nombre1')['setDescription'](_0x232a57['command']['42'])['setRequired'](!![]);
        for (let _0x5bd6b0 = 0x2; _0x5bd6b0 <= 0x1c; _0x5bd6b0 += 0x2) {
            _0xff35d7['addChoice'](_0x5bd6b0 + '\x20boosts', _0x5bd6b0);
        }
        return _0xff35d7;
    }),
    async 'execute'(_0x5afa42) {
        await _0xd0415c();
        await _0x5afa42['deferReply']();
        const _0x13e9f2 = _0x5afa42['options']['getString']('guildid')['toLowerCase']()['trim']();
        const _0x50b4ba = _0x5afa42['options']['getString']('bio');
        const _0x3bc8b8 = _0x5afa42['options']['getInteger']('nombre1');
        const _0x2b9d26 = _0x5afa42['options']['getInteger']('type');
        let _0x4bdb7d = [
            _0x1a36aa['admin']['id_1'],
            _0x1a36aa['admin']['id_2'],
            _0x1a36aa['admin']['id_3']
        ];
        const _0x37f536 = '/stock/';
        let _0x5c3189 = _0x2cd4af['join'](__dirname, '..', _0x37f536, 'stock-1m.txt');
        let _0x5f427f = _0x2cd4af['join'](__dirname, '..', _0x37f536, 'stock-3m.txt');
        let _0x1ad11c;
        if (!_0x13e9f2) {
            return _0x5afa42['editReply'](_0x232a57['command']['34']);
        }
        if (!_0x3bc8b8) {
            return _0x5afa42['editReply'](_0x232a57['command']['35']);
        }
        if (_0x2b9d26 === 0x1) {
            _0x1ad11c = _0x5c3189;
        } else if (_0x2b9d26 === 0x3) {
            _0x1ad11c = _0x5f427f;
        }
        if (!_0x4bdb7d['includes'](_0x5afa42['user']['id'])) {
            const _0x5b0af2 = new _0xf379d2()['addComponents'](new _0x2d7864()['setLabel'](_0x232a57['command']['36'])['setURL']('https://panel.infinityboost.monster/')['setStyle']('LINK'));
            const _0x3f0c71 = new _0xab5af4()['setColor']('#071b47')['setTitle'](_0x232a57['command']['27'])['setDescription'](_0x232a57['command']['12'])['setImage'](_0x59431f)['setTimestamp']()['setFooter'](_0x4b8312 + '\x20-\x20' + _0x232a57['command']['7'] + '\x20MrX');
            return _0x5afa42['editReply']({
                'embeds': [_0x3f0c71],
                'components': [_0x5b0af2]
            });
        }
        const _0x186cdb = await _0x4cc525['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x2f3a1f + '&machineid=' + _0x569061 + '&shopname=' + _0x4b8312 + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
        if (_0x186cdb['data']['success'] === ![]) {
            const _0x127183 = new _0xab5af4()['setColor']('#ff0000')['setTitle'](_0x232a57['command']['5'])['setImage'](_0x59431f)['setTimestamp']()['setFooter']('' + _0x232a57['command']['7'] + '\x20MrX');
            return _0x5afa42['editReply']({ 'embeds': [_0x127183] });
        }
        let _0x4928f7 = await _0x497a80(_0x1ad11c);
        if (_0x4928f7 === 0x0) {
            const _0xddae12 = new _0xab5af4()['setColor']('#ff0000')['setTitle'](_0x232a57['command']['33'])['setDescription'](_0x4b8312 + '\x20' + _0x232a57['command']['13'])['setImage'](_0x59431f)['setTimestamp']()['setFooter'](_0x4b8312 + '\x20-\x20' + _0x232a57['command']['7'] + '\x20MrX');
            return _0x5afa42['editReply']({ 'embeds': [_0xddae12] });
        } else if (_0x3bc8b8 / 0x2 > _0x4928f7 && _0x4928f7 !== _0x3bc8b8 / 0x2) {
            const _0x416de9 = new _0xab5af4()['setColor']('#ff0000')['setTitle'](_0x232a57['command']['33'])['setDescription'](_0x4b8312 + '\x20' + _0x232a57['command']['67'])['setImage'](_0x59431f)['setTimestamp']()['setFooter'](_0x4b8312 + '\x20-\x20' + _0x232a57['command']['7'] + '\x20MrX');
            return _0x5afa42['editReply']({ 'embeds': [_0x416de9] });
        }
        try {
            let _0x126439 = 0x0;
            let _0x36f5cb = 0x0;
            const _0xfa1b85 = 0x6;
            let _0x2dbf01 = [];
            let _0x5df56b = '[+]\x20' + _0x4b8312 + '\x20initialisés.';
            if (_0x2dbf01['length'] >= _0xfa1b85) {
                _0x2dbf01['pop']();
            }
            _0x2dbf01['unshift'](_0x5df56b);
            function _0x11865f(_0x19a6e1, _0x3f84ff, _0x349ae0 = 0x14) {
                const _0x21516e = Math['round'](_0x19a6e1 / _0x3f84ff * _0x349ae0);
                const _0x14ef52 = _0x349ae0 - _0x21516e;
                const _0x194186 = '▬'['repeat'](_0x21516e);
                const _0x42e2c5 = '░'['repeat'](_0x14ef52);
                const _0x421698 = Math['round'](_0x19a6e1 / _0x3f84ff * 0x64);
                return '[' + _0x194186 + _0x42e2c5 + ']\x20' + _0x421698 + '%';
            }
            const _0x19bcc6 = _0x3bc8b8;
            const _0x4e4702 = new _0xab5af4()['setColor']('#0099ff')['setTitle']('🚀\x20**Boost\x20' + _0x232a57['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20Boosts\x20' + _0x232a57['command']['22'] + ('\x20:\x20**0/' + _0x19bcc6 + '**\x0a🔸\x20Boosts\x20') + _0x232a57['command']['28'] + ('\x20:\x20**0/' + _0x19bcc6 + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x13e9f2 + '\x0a\x0a**' + _0x232a57['command']['32'] + ('\x20:**\x0a' + _0x11865f(0x0, _0x19bcc6)))['addFields'](_0x2dbf01['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x2dbf01['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x59431f)['setTimestamp']()['setFooter'](_0x4b8312 + '\x20-\x20' + _0x232a57['command']['7'] + '\x20MrX');
            const _0x3cd4d3 = await _0x5afa42['editReply']({ 'embeds': [_0x4e4702] });
            const _0x196e74 = _0x5925e0['readFileSync'](_0x1ad11c)['toString']()['split']('\x0a');
            const _0x131777 = await _0x4cc525['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x2f3a1f + '&machineid=' + _0x569061 + '&shopname=' + _0x4b8312 + '&mode=CHECK_BOT&guildid=' + _0x13e9f2 + '&bio=' + _0x50b4ba + '&clientid=' + _0xe8b883 + '&botclientsecret=' + _0x53caad + '&bottoken=' + _0x2e350b, {}, { 'timeout': 0xf4240 });
            if (_0x131777['data']['erreur'] === 'bot') {
                _0x2dbf01['unshift']('⛔\x20-\x20' + _0x232a57['command']['84']);
                const _0x4ea10b = new _0xf379d2()['addComponents'](new _0x2d7864()['setLabel'](_0x232a57['command']['31'])['setURL']('https://discord.com/api/oauth2/authorize?client_id=' + _0xe8b883 + '&permissions=8&scope=bot&guild_id=' + _0x13e9f2)['setStyle']('LINK'));
                const _0x5d9839 = new _0xab5af4()['setColor']('#071b47')['setTitle'](_0x232a57['command']['29'])['setDescription']('🔹\x20Boosts\x20' + _0x232a57['command']['22'] + ('\x20:\x20**0/' + _0x19bcc6 + '**\x0a🔸\x20Boosts\x20') + _0x232a57['command']['28'] + ('\x20:\x20**0/' + _0x19bcc6 + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x13e9f2 + '\x0a\x0a**' + _0x232a57['command']['32'] + ('\x20:**\x0a' + _0x11865f(0x0, _0x19bcc6)))['addFields'](_0x2dbf01['length'] > 0x0 ? {
                    'name': 'Logs',
                    'value': '```\x0a' + _0x2dbf01['join']('\x0a') + '\x0a```',
                    'inline': ![]
                } : [])['setImage'](_0x59431f)['setTimestamp']()['setFooter'](_0x4b8312 + '\x20-\x20' + _0x232a57['command']['7'] + '\x20MrX');
                return await _0x5afa42['editReply']({
                    'embeds': [_0x5d9839],
                    'components': [_0x4ea10b]
                });
            }
            for (let _0x31c4e5 = 0x0; _0x31c4e5 < _0x19bcc6 / 0x2; _0x31c4e5++) {
                try {
                    const _0x47817b = _0x196e74[_0x31c4e5];
                    const _0x3fdeea = await _0x2de04e(_0x47817b);
                    const _0x2ee31a = await _0x4cc525['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x2f3a1f + '&machineid=' + _0x569061 + '&shopname=' + _0x4b8312 + '&mode=BOOST&guildid=' + _0x13e9f2 + '&bio=' + _0x50b4ba + '&clientid=' + _0xe8b883 + '&botclientsecret=' + _0x53caad + '&bottoken=' + _0x2e350b + '&tokenboost=' + _0x3fdeea, {}, { 'timeout': 0xf4240 });
                    if (_0x2dbf01['length'] >= _0xfa1b85) {
                        _0x2dbf01['pop']();
                    }
                    if (_0x2ee31a['data']['erreur'] === 'Invalid\x20license\x20key') {
                        _0x2dbf01['unshift']('⛔\x20-\x20' + _0x232a57['command']['82']);
                    } else if (_0x2ee31a['data']['erreur'] === 'HWID\x20doesn\x27t\x20match.\x20Ask\x20for\x20a\x20HWID\x20reset') {
                        _0x2dbf01['unshift']('⛔\x20-\x20' + _0x232a57['command']['83']);
                    } else if (_0x2ee31a['data']['success'] === !![]) {
                        _0x2dbf01['unshift']('✅\x20-\x20' + _0x232a57['command']['81'] + '\x20:\x20' + await _0x2ca1cb(_0x3fdeea));
                        _0x126439++;
                        await _0x113632(_0x47817b, _0x1ad11c);
                    } else if (_0x2ee31a['data']['success'] === ![]) {
                        _0x36f5cb++;
                        if (_0x2ee31a['data']['erreur'] === 'bot') {
                            _0x2dbf01['unshift']('⛔\x20-\x20' + _0x232a57['command']['84'] + '\x20' + _0x232a57['command']['107']);
                        } else if (_0x2ee31a['data']['erreur'] === 'invalid') {
                            _0x2dbf01['unshift']('❌\x20-\x20' + _0x232a57['command']['80'] + '\x20:\x20' + await _0x2ca1cb(_0x3fdeea));
                            await _0x113632(_0x47817b, _0x1ad11c);
                        } else if (_0x2ee31a['data']['erreur'] === 'perm') {
                            _0x2dbf01['unshift']('⛔\x20-\x20' + _0x232a57['command']['79'] + '\x20:\x20' + await _0x2ca1cb(_0x3fdeea));
                        } else if (_0x2ee31a['data']['erreur'] === 'used') {
                            _0x2dbf01['unshift']('⚠️\x20-\x20' + _0x232a57['command']['78'] + '\x20:\x20' + await _0x2ca1cb(_0x3fdeea));
                            await _0x113632(_0x47817b, _0x1ad11c);
                        } else {
                            _0x2dbf01['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x2ca1cb(_0x3fdeea));
                        }
                    }
                    const _0x15abd5 = new _0xab5af4()['setColor']('#0099ff')['setTitle']('🚀\x20**Boost\x20' + _0x232a57['command']['23'] + '**\x20🚀')['setDescription']('🔹\x20Boosts\x20' + _0x232a57['command']['22'] + ('\x20:\x20**' + _0x126439 * 0x2 + '/' + _0x19bcc6 + '**\x0a🔸\x20Boosts\x20') + _0x232a57['command']['28'] + ('\x20:\x20**' + _0x36f5cb * 0x2 + '/' + _0x19bcc6 + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x13e9f2 + '\x0a\x0a**' + _0x232a57['command']['32'] + ('\x20:**\x0a' + _0x11865f((_0x126439 + _0x36f5cb) * 0x2, _0x19bcc6)))['addFields'](_0x2dbf01['length'] > 0x0 ? {
                        'name': 'Logs',
                        'value': '```\x0a' + _0x2dbf01['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    } : [])['setImage'](_0x59431f)['setTimestamp']()['setFooter'](_0x4b8312 + '\x20-\x20' + _0x232a57['command']['7'] + '\x20MrX');
                    await _0x3cd4d3['edit']({ 'embeds': [_0x15abd5] });
                } catch (_0x5db0fb) {
                    _0x36f5cb++;
                    _0x2dbf01['unshift']('⚠️\x20-\x20error\x20API');
                    console['log']('Erreur\x20API\x20contact\x20developer', _0x5db0fb);
                }
            }
            if (_0x2dbf01['length'] >= _0xfa1b85) {
                _0x2dbf01['pop']();
            }
            const _0x52d988 = new _0xab5af4()['setColor'](0xff)['setTitle']('Boost\x20' + _0x232a57['command']['21'])['setDescription']('🔹\x20Boosts\x20' + _0x232a57['command']['22'] + ('\x20:\x20**' + _0x126439 * 0x2 + '/' + _0x19bcc6 + '**\x0a🔸\x20Boosts\x20') + _0x232a57['command']['28'] + ('\x20:\x20**' + _0x36f5cb * 0x2 + '/' + _0x19bcc6 + '**\x0a\x20📝\x20Server\x20id\x20:\x20') + _0x13e9f2 + '\x0a\x0a**' + _0x232a57['command']['32'] + ('\x20:**\x0a' + _0x11865f((_0x126439 + _0x36f5cb) * 0x2, _0x19bcc6)))['addFields'](_0x2dbf01['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + _0x2dbf01['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x59431f)['setTimestamp']()['setFooter'](_0x4b8312 + '\x20-\x20' + _0x232a57['command']['7'] + '\x20MrX');
            await _0x5afa42['editReply']({ 'embeds': [_0x52d988] });
            const _0x51fe6b = await _0x5afa42['client']['guilds']['fetch'](_0x13e9f2);
            await new Promise(_0x44bd98 => setTimeout(_0x44bd98, 0x1388));
            if (_0x13e9f2 !== _0x5afa42['guild']['id'])
                return await _0x51fe6b['leave']();
        } catch (_0x357b91) {
            savedLogs['unshift']('⚠️\x20-\x20error\x20API');
            console['log']('Erreur\x20API\x20contact\x20developer', _0x357b91);
            const _0x563d3e = new _0xab5af4()['setColor']('#071b47')['setTitle'](_0x232a57['command']['19'])['setDescription'](_0x232a57['command']['20'])['addFields'](savedLogs['length'] > 0x0 ? {
                'name': 'Logs',
                'value': '```\x0a' + savedLogs['join']('\x0a') + '\x0a```',
                'inline': ![]
            } : [])['setImage'](_0x59431f)['setTimestamp']()['setFooter'](_0x4b8312 + '\x20-\x20' + _0x232a57['command']['7'] + '\x20MrX');
            await _0x5afa42['editReply']({ 'embeds': [_0x563d3e] });
            await new Promise(_0x520db8 => setTimeout(_0x520db8, 0x1388));
            const _0x57a681 = await _0x5afa42['client']['guilds']['fetch'](_0x13e9f2);
            if (_0x13e9f2 !== _0x5afa42['guild']['id'])
                return await _0x57a681['leave']();
        }
    }
};
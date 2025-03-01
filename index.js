(function (_0x19daf9, _0x142a52) {
    const _0x58d73b = _0x38ee;
    const _0x5d537c = _0x19daf9();
    while (!![]) {
        try {
            const _0x27d2a3 = parseInt(_0x58d73b(0x73)) / 0x1 + -parseInt(_0x58d73b(0x75)) / 0x2 + -parseInt(_0x58d73b(0x6f)) / 0x3 + parseInt(_0x58d73b(0x70)) / 0x4 + parseInt(_0x58d73b(0x72)) / 0x5 * (parseInt(_0x58d73b(0x74)) / 0x6) + parseInt(_0x58d73b(0x6e)) / 0x7 + parseInt(_0x58d73b(0x71)) / 0x8 * (-parseInt(_0x58d73b(0x76)) / 0x9);
            if (_0x27d2a3 === _0x142a52) {
                break;
            } else {
                _0x5d537c['push'](_0x5d537c['shift']());
            }
        } catch (_0x200fc2) {
            _0x5d537c['push'](_0x5d537c['shift']());
        }
    }
}(_0x376c, 0x7f8b0));
const {
    Client: _0x38f7df,
    Intents: _0x3b4d42,
    Collection: _0x2f2e30
} = require('discord.js');
const _0x1a0d8e = require('fs');
function _0x376c() {
    const _0x29351c = [
        '246806AiCHpe',
        '9dBQsiw',
        '1436540RYTkbh',
        '2742861XVbmjF',
        '1208408pxqbRP',
        '4784056HgUVjR',
        '40UeLyDD',
        '1013079rUtztM',
        '478284TNfxDI'
    ];
    _0x376c = function () {
        return _0x29351c;
    };
    return _0x376c();
}
const _0x278b13 = require('path');
function _0x38ee(_0x3d28c7, _0x1f3b63) {
    const _0x376c05 = _0x376c();
    _0x38ee = function (_0x38ee8a, _0x478f7a) {
        _0x38ee8a = _0x38ee8a - 0x6e;
        let _0x19956f = _0x376c05[_0x38ee8a];
        return _0x19956f;
    };
    return _0x38ee(_0x3d28c7, _0x1f3b63);
}
const {REST: _0xdb1692} = require('@discordjs/rest');
const {Routes: _0x1e11c1} = require('discord-api-types/v9');
const _0x152f46 = require('axios');
const {performOperation: _0x5c2048} = require('./required/performOp');
const _0x447958 = require('./config.json');
const _0x1486be = require('gradient-string');
const _0x1265d2 = require('figlet');
let _0x440532 = _0x447958['service']['name_shop'];
let _0xd241a4 = _0x447958['apikey'];
let _0x45cd1a = _0x447958['service']['banner'];
let _0x310ecf = _0x447958['bot']['discord_webhook_url_command_log'];
const _0x495b26 = JSON['parse'](_0x1a0d8e['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x48efd7 = _0x447958['service']['langue_shop'];
const _0x4a5605 = _0x495b26[_0x48efd7];
let _0x175ac0;
process['on']('uncaughtException', _0x3d0ecd => {
    console['log']('Erreur\x20non\x20gérée\x20:', _0x3d0ecd);
    console['log']('Le\x20bot\x20continue\x20de\x20tourner\x20malgré\x20l\x27erreur.');
});
process['on']('unhandledRejection', (_0x3b67e5, _0x5c713b) => {
    console['log']('Le\x20bot\x20continue\x20de\x20tourner\x20malgré\x20l\x27erreur.');
    console['log'](_0x3b67e5);
});
async function _0x162fd2() {
    return new Promise((_0x3ff9a0, _0x5079b1) => {
        _0x5c2048((_0x49317d, _0x50e671) => {
            if (_0x49317d) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x5079b1(_0x49317d);
            } else {
                _0x175ac0 = _0x50e671;
                _0x3ff9a0(_0x175ac0);
            }
        });
    });
}
((async () => {
    console['clear']();
    const _0x1f89cd = 'InfinityBoost\x20Bot\x20V4';
    await _0x162fd2();
    _0x1265d2(_0x1f89cd, function (_0x563a21, _0x6894dc) {
        console['log'](_0x1486be['rainbow'](_0x6894dc));
        console['log'](_0x1486be['rainbow']('♾️\x20-\x20InfinityBoost\x20Bot\x20V4\x20par\x20') + 'MrX');
        console['log'](_0x1486be['rainbow']('♾️\x20-\x20InfinityBoost\x20Bot\x20V4\x20Version\x20') + 'V4.0');
    });
    const _0x5f1c4c = await _0x152f46['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0xd241a4 + '&machineid=' + _0x175ac0 + '&shopname=' + _0x440532 + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
    if (_0x5f1c4c['data']['success'] === ![]) {
        console['log'](_0x1486be['retro']('⛔\x20-\x20Invalid\x20license\x20key\x20or\x20HWID\x20doesn\x27t\x20match.\x20Ask\x20for\x20a\x20HWID\x20reset'));
        process['exit'](0x1);
    } else {
        console['log'](_0x1486be['retro']('✅\x20-\x20Licence\x20valide,\x20démarrage\x20du\x20code...'));
    }
    await new Promise(_0x3f0231 => setTimeout(_0x3f0231, 0x5dc));
    let _0x1e6ba1 = _0x447958['bot']['guildid'];
    let _0x290fd7 = _0x447958['bot']['clientid'];
    const _0x2c3c29 = [];
    const _0x4a48ef = _0x1a0d8e['readdirSync']('commands')['filter'](_0x3fc69a => _0x3fc69a['endsWith']('.js'));
    for (const _0x4405f7 of _0x4a48ef) {
        const _0x414500 = require(_0x278b13['join'](__dirname, 'commands', _0x4405f7));
        _0x2c3c29['push'](_0x414500['data']);
    }
    const _0x45b94c = new _0xdb1692({ 'version': '9' })['setToken'](_0x447958['bot']['token']);
    try {
        await _0x45b94c['put'](_0x1e11c1['applicationGuildCommands'](_0x290fd7, _0x1e6ba1), { 'body': _0x2c3c29 });
        console['log']('✅\x20-\x20Le\x20clientId:', _0x290fd7);
        console['log']('✅\x20-\x20guildId:', _0x1e6ba1);
        console['log']('✅\x20-\x20' + _0x4a5605['command']['95']);
    } catch (_0x35a03c) {
        console['error'](_0x35a03c);
    }
    await new Promise(_0x18be18 => setTimeout(_0x18be18, 0x3e8));
    const _0x20a872 = new _0x38f7df({
        'intents': [
            _0x3b4d42['FLAGS']['GUILDS'],
            _0x3b4d42['FLAGS']['GUILD_MESSAGES'],
            ,
            _0x3b4d42['FLAGS']['GUILD_MEMBERS'],
            _0x3b4d42['FLAGS']['GUILD_PRESENCES']
        ]
    });
    _0x20a872['commands'] = new _0x2f2e30();
    const _0x3d2dc4 = _0x1a0d8e['readdirSync']('commands')['filter'](_0x34bb6b => _0x34bb6b['endsWith']('.js'));
    for (const _0x553fc1 of _0x3d2dc4) {
        const _0x30c851 = require('./commands/' + _0x553fc1);
        _0x20a872['commands']['set'](_0x30c851['data']['name'], _0x30c851);
        console['log']('✅\x20-\x20' + _0x4a5605['command']['93'] + ('\x20' + _0x30c851['data']['name'] + '\x20') + _0x4a5605['command']['94']);
    }
    require('./autobuy/index');
    _0x20a872['on']('ready', () => {
        console['log']('✅\x20-\x20' + _0x4a5605['command']['91'] + (_0x20a872['user']['tag'] + '\x20') + _0x4a5605['command']['92']);
        var _0x2aac51 = ['Bot\x20Boost\x20V4\x20by\x20MrX\x20-\x20bloumechat.com'];
        var _0x59f968 = ['online'];
        var _0xefa966 = ['PLAYING'];
        _0x20a872['user']['setPresence']({
            'activities': [{
                    'name': _0x2aac51[Math['floor'](Math['random']() * _0x2aac51['length'])],
                    'type': _0xefa966[Math['floor'](Math['random']() * _0xefa966['length'])]
                }],
            'status': _0x59f968[Math['floor'](Math['random']() * _0x59f968['length'])]
        });
    });
    _0x20a872['on']('interactionCreate', async _0x45a2ec => {
        let _0x46d431 = _0x45a2ec['user']['id'];
        if (!_0x45a2ec['isCommand']())
            return;
        const _0x45d5e0 = _0x20a872['commands']['get'](_0x45a2ec['commandName']);
        if (!_0x45d5e0)
            return;
        try {
            const _0x30896a = Date['now']();
            await _0x45d5e0['execute'](_0x45a2ec, _0x20a872);
            const _0x5260de = Date['now']();
            const _0x134a40 = _0x5260de - _0x30896a;
            const _0x1cd770 = {
                'color': 0x99ff,
                'title': _0x440532 + '\x20-\x20' + _0x4a5605['command']['86'],
                'description': _0x4a5605['command']['88'] + ('\x20**/' + _0x45a2ec['commandName'] + '**\x20') + _0x4a5605['command']['89'] + ('\x20<@' + _0x46d431 + '>.'),
                'fields': [
                    {
                        'name': _0x4a5605['command']['90'],
                        'value': '<t:' + Math['floor'](Date['now']() / 0x3e8) + ':F>',
                        'inline': !![]
                    },
                    {
                        'name': _0x4a5605['command']['87'],
                        'value': (_0x134a40 / 0x3e8)['toFixed'](0x2) + '\x20secondes',
                        'inline': !![]
                    }
                ],
                'image': { 'url': _0x45cd1a },
                'timestamp': new Date(),
                'footer': { 'text': _0x4a5605['command']['85'] + '\x20-\x20' + _0x4a5605['command']['7'] + '\x20MrX' }
            };
            await _0x152f46['post'](_0x310ecf, { 'embeds': [_0x1cd770] });
        } catch (_0x50676a) {
            console['log'](_0x50676a);
        }
    });
    _0x20a872['login'](_0x447958['bot']['token']);
})());

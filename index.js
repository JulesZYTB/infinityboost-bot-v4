(function (_0x508533, _0x4a5ec2) {
    const _0x122536 = _0x2555;
    const _0x2a42f1 = _0x508533();
    while (!![]) {
        try {
            const _0x51ffd2 = -parseInt(_0x122536(0x90)) / 0x1 + parseInt(_0x122536(0x97)) / 0x2 * (-parseInt(_0x122536(0x95)) / 0x3) + -parseInt(_0x122536(0x91)) / 0x4 * (parseInt(_0x122536(0x92)) / 0x5) + parseInt(_0x122536(0x94)) / 0x6 + parseInt(_0x122536(0x96)) / 0x7 + parseInt(_0x122536(0x8f)) / 0x8 + -parseInt(_0x122536(0x8e)) / 0x9 * (-parseInt(_0x122536(0x93)) / 0xa);
            if (_0x51ffd2 === _0x4a5ec2) {
                break;
            } else {
                _0x2a42f1['push'](_0x2a42f1['shift']());
            }
        } catch (_0x13e377) {
            _0x2a42f1['push'](_0x2a42f1['shift']());
        }
    }
}(_0x4753, 0x6078d));
const {
    Client: _0x21ac93,
    Intents: _0x117def,
    Collection: _0x58e30b
} = require('discord.js');
const _0x365b0f = require('fs');
const _0x2b6fe5 = require('path');
const {REST: _0x210a54} = require('@discordjs/rest');
const {Routes: _0x1a72d0} = require('discord-api-types/v9');
const _0x20ea7b = require('axios');
const {performOperation: _0x507a7d} = require('./required/performOp');
const _0x45e8b7 = require('./config.json');
const _0x56de8d = require('gradient-string');
const _0x3b5ce0 = require('figlet');
let _0x28e146 = _0x45e8b7['service']['name_shop'];
let _0x1420a1 = _0x45e8b7['apikey'];
function _0x4753() {
    const _0x53c9c8 = [
        '4vilsti',
        '2516245DPIMPS',
        '10NPAbVv',
        '4170624NsZSVU',
        '261ONqIdo',
        '229495RYVSKH',
        '4NofEpY',
        '1888479MDWLvA',
        '2472920uTArya',
        '348263iFPkqp'
    ];
    _0x4753 = function () {
        return _0x53c9c8;
    };
    return _0x4753();
}
let _0x234621 = _0x45e8b7['bot']['status'];
let _0xa54f6d = _0x45e8b7['service']['banner'];
let _0x4ca1e7 = _0x45e8b7['bot']['discord_webhook_url_command_log'];
function _0x2555(_0x46f749, _0xa6c2ba) {
    const _0x475381 = _0x4753();
    _0x2555 = function (_0x2555b5, _0x3937f9) {
        _0x2555b5 = _0x2555b5 - 0x8e;
        let _0x588f93 = _0x475381[_0x2555b5];
        return _0x588f93;
    };
    return _0x2555(_0x46f749, _0xa6c2ba);
}
const _0x5e783b = JSON['parse'](_0x365b0f['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x51beb0 = _0x45e8b7['service']['langue_shop'];
const _0x35802c = _0x5e783b[_0x51beb0];
let _0x1088ca;
process['on']('uncaughtException', _0x2af1ed => {
    console['log']('Erreur\x20non\x20gérée\x20:', _0x2af1ed);
    console['log']('Le\x20bot\x20continue\x20de\x20tourner\x20malgré\x20l\x27erreur.');
});
process['on']('unhandledRejection', (_0x20e7c3, _0x4a583c) => {
    console['log']('Le\x20bot\x20continue\x20de\x20tourner\x20malgré\x20l\x27erreur.');
    console['log'](_0x20e7c3);
});
async function _0x496a2a() {
    return new Promise((_0x5b62d1, _0x191cfa) => {
        _0x507a7d((_0x382f9d, _0x115a7d) => {
            if (_0x382f9d) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x191cfa(_0x382f9d);
            } else {
                _0x1088ca = _0x115a7d;
                _0x5b62d1(_0x1088ca);
            }
        });
    });
}
((async () => {
    console['clear']();
    const _0x5ce43c = 'InfinityBoost\x20Bot\x20V4';
    await _0x496a2a();
    _0x3b5ce0(_0x5ce43c, function (_0x5b903e, _0x337c26) {
        console['log'](_0x56de8d['rainbow'](_0x337c26));
        console['log'](_0x56de8d['rainbow']('♾️\x20-\x20InfinityBoost\x20Bot\x20V4\x20par\x20') + 'MrX');
        console['log'](_0x56de8d['rainbow']('♾️\x20-\x20InfinityBoost\x20Bot\x20V4\x20Version\x20') + 'V4.0');
    });
    const _0x51d5b9 = await _0x20ea7b['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x1420a1 + '&machineid=' + _0x1088ca + '&shopname=' + _0x28e146 + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
    if (_0x51d5b9['data']['success'] === ![]) {
        console['log'](_0x56de8d['retro']('⛔\x20-\x20Invalid\x20license\x20key\x20or\x20HWID\x20doesn\x27t\x20match.\x20Ask\x20for\x20a\x20HWID\x20reset'));
        process['exit'](0x1);
    } else {
        console['log'](_0x56de8d['retro']('✅\x20-\x20Licence\x20valide,\x20démarrage\x20du\x20code...'));
    }
    await new Promise(_0x1bbead => setTimeout(_0x1bbead, 0x5dc));
    let _0x2b964e = _0x45e8b7['bot']['guildid'];
    let _0x5dedec = _0x45e8b7['bot']['clientid'];
    const _0x5c7779 = [];
    const _0x290e5e = _0x365b0f['readdirSync']('commands')['filter'](_0x5be925 => _0x5be925['endsWith']('.js'));
    for (const _0xffe135 of _0x290e5e) {
        const _0x57a6bd = require(_0x2b6fe5['join'](__dirname, 'commands', _0xffe135));
        _0x5c7779['push'](_0x57a6bd['data']);
    }
    const _0x3fff6f = new _0x210a54({ 'version': '9' })['setToken'](_0x45e8b7['bot']['token']);
    try {
        await _0x3fff6f['put'](_0x1a72d0['applicationGuildCommands'](_0x5dedec, _0x2b964e), { 'body': _0x5c7779 });
        console['log']('✅\x20-\x20Le\x20clientId:', _0x5dedec);
        console['log']('✅\x20-\x20guildId:', _0x2b964e);
        console['log']('✅\x20-\x20' + _0x35802c['command']['95']);
    } catch (_0x541f4d) {
        console['error'](_0x541f4d);
    }
    await new Promise(_0x560ffc => setTimeout(_0x560ffc, 0x3e8));
    const _0x2f1afd = new _0x21ac93({
        'intents': [
            _0x117def['FLAGS']['GUILDS'],
            _0x117def['FLAGS']['GUILD_MESSAGES'],
            ,
            _0x117def['FLAGS']['GUILD_MEMBERS'],
            _0x117def['FLAGS']['GUILD_PRESENCES']
        ]
    });
    _0x2f1afd['commands'] = new _0x58e30b();
    const _0x5cea74 = _0x365b0f['readdirSync']('commands')['filter'](_0x48338a => _0x48338a['endsWith']('.js'));
    for (const _0x2271c4 of _0x5cea74) {
        const _0x2f6678 = require('./commands/' + _0x2271c4);
        _0x2f1afd['commands']['set'](_0x2f6678['data']['name'], _0x2f6678);
        console['log']('✅\x20-\x20' + _0x35802c['command']['93'] + ('\x20' + _0x2f6678['data']['name'] + '\x20') + _0x35802c['command']['94']);
    }
    require('./autobuy/index');
    _0x2f1afd['on']('ready', () => {
        console['log']('✅\x20-\x20' + _0x35802c['command']['91'] + (_0x2f1afd['user']['tag'] + '\x20') + _0x35802c['command']['92']);
        var _0x10d62d = ['online'];
        var _0x453124 = ['PLAYING'];
        _0x2f1afd['user']['setPresence']({
            'activities': [{
                    'name': _0x234621,
                    'type': _0x453124
                }],
            'status': _0x10d62d
        });
    });
    _0x2f1afd['on']('interactionCreate', async _0x5d0bbc => {
        let _0x6c10c7 = _0x5d0bbc['user']['id'];
        if (!_0x5d0bbc['isCommand']())
            return;
        const _0x58f83d = _0x2f1afd['commands']['get'](_0x5d0bbc['commandName']);
        if (!_0x58f83d)
            return;
        try {
            const _0x27f132 = Date['now']();
            await _0x58f83d['execute'](_0x5d0bbc, _0x2f1afd);
            const _0x588c89 = Date['now']();
            const _0x228ef1 = _0x588c89 - _0x27f132;
            const _0x2ed366 = {
                'color': 0x99ff,
                'title': _0x28e146 + '\x20-\x20' + _0x35802c['command']['86'],
                'description': _0x35802c['command']['88'] + ('\x20**/' + _0x5d0bbc['commandName'] + '**\x20') + _0x35802c['command']['89'] + ('\x20<@' + _0x6c10c7 + '>.'),
                'fields': [
                    {
                        'name': _0x35802c['command']['90'],
                        'value': '<t:' + Math['floor'](Date['now']() / 0x3e8) + ':F>',
                        'inline': !![]
                    },
                    {
                        'name': _0x35802c['command']['87'],
                        'value': (_0x228ef1 / 0x3e8)['toFixed'](0x2) + '\x20secondes',
                        'inline': !![]
                    }
                ],
                'image': { 'url': _0xa54f6d },
                'timestamp': new Date(),
                'footer': { 'text': _0x35802c['command']['85'] + '\x20-\x20' + _0x35802c['command']['7'] + '\x20MrX' }
            };
            await _0x20ea7b['post'](_0x4ca1e7, { 'embeds': [_0x2ed366] });
        } catch (_0x1d5f95) {
            console['log'](_0x1d5f95);
        }
    });
    _0x2f1afd['login'](_0x45e8b7['bot']['token']);
})());
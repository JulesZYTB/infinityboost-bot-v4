(function (_0x5c56d9, _0x4d942d) {
    const _0x383442 = _0x26b7;
    const _0x127b4a = _0x5c56d9();
    while (!![]) {
        try {
            const _0x4d0d2b = parseInt(_0x383442(0xde)) / 0x1 + parseInt(_0x383442(0xdf)) / 0x2 * (-parseInt(_0x383442(0xe0)) / 0x3) + -parseInt(_0x383442(0xd8)) / 0x4 * (-parseInt(_0x383442(0xdb)) / 0x5) + parseInt(_0x383442(0xda)) / 0x6 + parseInt(_0x383442(0xdd)) / 0x7 + parseInt(_0x383442(0xdc)) / 0x8 + -parseInt(_0x383442(0xd9)) / 0x9;
            if (_0x4d0d2b === _0x4d942d) {
                break;
            } else {
                _0x127b4a['push'](_0x127b4a['shift']());
            }
        } catch (_0x26b258) {
            _0x127b4a['push'](_0x127b4a['shift']());
        }
    }
}(_0x3e8d, 0x60c7d));
const _0x18675c = require('http');
const _0x40a263 = require('url');
const _0x19fda6 = require('axios');
const _0x1972fe = require('fs');
const _0x4c1d3d = require('path');
const _0x1cca56 = require('os');
const _0x19b6f8 = require('gradient-string');
const _0x389440 = './commandes.json';
const _0x440bd2 = require('../config.json');
const {performOperation: _0x382cfe} = require('../required/performOp');
const {WebhookClient: _0x320476} = require('discord.js');
const _0x48011f = require('line-by-line');
let _0x110bdc = _0x440bd2['service']['name_shop'];
let _0x5e57d6 = _0x440bd2['service']['banner'];
function _0x26b7(_0x3e94bd, _0x238753) {
    const _0x3e8deb = _0x3e8d();
    _0x26b7 = function (_0x26b7d5, _0x5ebac1) {
        _0x26b7d5 = _0x26b7d5 - 0xd8;
        let _0x52db0f = _0x3e8deb[_0x26b7d5];
        return _0x52db0f;
    };
    return _0x26b7(_0x3e94bd, _0x238753);
}
let _0x575d43 = _0x440bd2['apikey'];
let _0x4b944c = _0x440bd2['autobuy']['port'];
let _0x503025 = _0x440bd2['autobuy']['host'];
let _0x100c68 = _0x440bd2['autobuy']['bio'];
let _0x426dec = _0x440bd2['autobuy']['shop_id_sellauth'];
let _0x1bdaf4 = _0x440bd2['autobuy']['apikey_sellauth'];
let _0x392078 = _0x440bd2['autobuy']['discord_webhook_url_command_log'];
let _0x31a7ae = _0x440bd2['autobuy']['discord_webhook_url_console'];
let _0x273d7e = _0x440bd2['autobuy']['orders_command_for_page'];
let _0x146ecd = _0x440bd2['autobuy']['guildid_variable_Custom_Field'] || 'Serveur\x20ID';
let _0x4be599 = _0x440bd2['autobuy']['bio_variable_Custom_Field'] || 'Bio';
const _0x33dda7 = JSON['parse'](_0x1972fe['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x29d1f8 = new _0x320476({ 'url': _0x31a7ae });
const _0x13285a = new _0x320476({ 'url': _0x392078 });
const _0x20f093 = _0x440bd2['service']['langue_shop'];
const _0x523c2e = _0x33dda7[_0x20f093];
let _0x164cd3 = _0x440bd2['bot']['clientid'];
let _0x2bb77f = _0x440bd2['bot']['token'];
let _0x3be184 = _0x440bd2['bot']['clientsecret'];
let _0x540c7e;
async function _0x5f4dca() {
    return new Promise((_0x48cf6a, _0x6ad647) => {
        _0x382cfe((_0x188367, _0x1316c4) => {
            if (_0x188367) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x6ad647(_0x188367);
            } else {
                _0x540c7e = _0x1316c4;
                _0x48cf6a(_0x540c7e);
            }
        });
    });
}
async function _0x52afee(_0x2cd235) {
    const _0x5a15a6 = _0x2cd235['split'](':');
    if (_0x5a15a6['length'] === 0x3) {
        return _0x5a15a6[0x2];
    } else if (_0x5a15a6['length'] === 0x1) {
        return _0x2cd235;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x2cd235);
        return _0x2cd235;
    }
}
async function _0x1d87b0(_0x496a69) {
    if (_0x496a69['length'] <= 0x6) {
        return _0x496a69;
    }
    const _0x8872da = _0x496a69['slice'](0x0, 0x14);
    const _0x12cac9 = _0x496a69['slice'](-0xa);
    const _0x4ed77f = _0x496a69['length'] - _0x8872da['length'] - _0x12cac9['length'];
    const _0x936689 = '' + _0x8872da + '*'['repeat'](_0x4ed77f - 0x46) + _0x12cac9;
    return _0x936689;
}
async function _0x337b1f(_0x5e7812) {
    if (_0x5e7812['length'] <= 0x6) {
        return _0x5e7812;
    }
    const _0x5b427a = _0x5e7812['slice'](0x0, 0x6);
    const _0x22983a = _0x5e7812['slice'](-0xc);
    const _0x2db577 = _0x5e7812['length'] - _0x5b427a['length'] - _0x22983a['length'];
    const _0x18e0bb = '' + _0x5b427a + '*'['repeat'](_0x2db577 - 0x2d) + _0x22983a;
    return _0x18e0bb;
}
async function _0x427d10(_0x5eb52f, _0x10e93a) {
    let _0x45d4c8 = await _0x1d87b0(_0x5eb52f);
    let _0x692fc3 = await _0x423030(_0x10e93a);
    let _0xd642f7 = '';
    if (!_0x1972fe['existsSync'](_0x10e93a)) {
        console['log'](_0x19b6f8['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0xb2a8bb = [];
    const _0x3ba2cd = new _0x48011f(_0x10e93a);
    _0x3ba2cd['on']('error', _0x1b8ed1 => {
        console['error'](_0x19b6f8['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x1b8ed1));
    });
    _0x3ba2cd['on']('line', _0x7978c0 => {
        const _0x46d5ff = _0x7978c0['trim']();
        if (!_0x46d5ff['includes'](_0x5eb52f['trim']())) {
            _0xb2a8bb['push'](_0x46d5ff);
        }
    });
    _0x3ba2cd['on']('end', async () => {
        if (_0xb2a8bb['length'] === 0x0 && _0x692fc3 !== 0x1) {
            console['log'](_0x19b6f8['retro']('⛔\x20-\x20Le\x20token\x20' + _0x45d4c8 + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x692fc3 !== 0x1) {
            _0xd642f7 = _0xb2a8bb['join'](_0x1cca56['EOL']);
        } else {
            _0xd642f7 = '';
        }
        _0x1972fe['writeFile'](_0x10e93a, _0xd642f7, _0x4cb898 => {
            if (_0x4cb898) {
                console['error'](_0x19b6f8['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x4cb898));
                return;
            }
            console['log'](_0x19b6f8['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x45d4c8 + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x423030(_0x21bea9) {
    try {
        const _0x3057f0 = _0x1972fe['readFileSync'](_0x21bea9, 'utf-8');
        const _0x4bf5b6 = _0x3057f0['split']('\x0a');
        const _0x5e5484 = _0x4bf5b6['filter'](_0x491104 => _0x491104['trim']()['length'] > 0x0);
        return _0x5e5484['length'];
    } catch (_0x1add62) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x1add62);
        return 0x0;
    }
}
const _0xb24ed8 = async (_0x2e7892, _0x2605ee = 'order') => {
    try {
        const _0x5ae5d5 = {
            'embeds': [{
                    'title': _0x2605ee === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                    'color': _0x2605ee === 'order' ? 0xff00 : 0x99ff,
                    'timestamp': new Date()['toISOString'](),
                    'fields': []
                }]
        };
        if (_0x2605ee === 'order') {
            const _0x29b767 = parseFloat(_0x2e7892['quantity']) || 0x0;
            const _0x13a55d = parseFloat(_0x2e7892['nombre_boosts']) || 0x0;
            const _0x9f0351 = parseFloat(_0x2e7892['type_booster']) || 'N/A';
            const _0x5e08cb = parseFloat(_0x2e7892['price']) || 0x0;
            const _0x428e35 = (_0x29b767 * _0x5e08cb)['toFixed'](0x2);
            _0x5ae5d5['embeds'][0x0]['fields'] = [
                {
                    'name': '🆔\x20Invoice\x20ID',
                    'value': String(_0x2e7892['invoice_id']),
                    'inline': ![]
                },
                {
                    'name': '🏷️\x20Product',
                    'value': _0x2e7892['products_name'] ? _0x2e7892['products_name'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📧\x20Email',
                    'value': _0x2e7892['email'] ? _0x2e7892['email'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '👤\x20Server\x20ID',
                    'value': _0x2e7892['serveur_id'] ? _0x2e7892['serveur_id'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📦\x20Quantity',
                    'value': String(_0x29b767),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Number\x20boosts',
                    'value': String(_0x13a55d),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Type\x20boosts',
                    'value': String(_0x9f0351) + 'm',
                    'inline': ![]
                },
                {
                    'name': '💰\x20Unit\x20Price',
                    'value': String(_0x5e08cb) + '€',
                    'inline': ![]
                },
                {
                    'name': '💶\x20Total\x20Price',
                    'value': String(_0x428e35) + '€',
                    'inline': ![]
                },
                {
                    'name': '💳\x20Gateway',
                    'value': _0x2e7892['gateway'] ? _0x2e7892['gateway'] : 'N/A',
                    'inline': ![]
                }
            ];
        } else {
            _0x5ae5d5['embeds'][0x0]['description'] = _0x2e7892;
            if (_0x2e7892['includes']('Order\x20Delivered')) {
                _0x5ae5d5['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                _0x5ae5d5['embeds'][0x0]['color'] = 0xff00;
            } else if (_0x2e7892['includes']('Delivery\x20Error')) {
                _0x5ae5d5['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                _0x5ae5d5['embeds'][0x0]['color'] = 0xff0000;
            } else if (_0x2e7892['includes']('Duplicate\x20Order')) {
                _0x5ae5d5['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                _0x5ae5d5['embeds'][0x0]['color'] = 0xffa500;
            } else {
                _0x5ae5d5['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                _0x5ae5d5['embeds'][0x0]['color'] = 0xffa500;
            }
        }
        await _0x13285a['send']({ 'embeds': [_0x5ae5d5['embeds'][0x0]] });
    } catch (_0x4469f0) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x4469f0['response']?.['data'] || _0x4469f0['message']);
    }
};
async function _0x272554(_0x1d0806) {
    try {
        const _0x3db3b4 = await _0x29d1f8['send']({ 'embeds': [_0x1d0806] });
        return _0x3db3b4['id'];
    } catch (_0x57a1e6) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20message:', _0x57a1e6['response']?.['data'] || _0x57a1e6['message']);
        throw _0x57a1e6;
    }
}
async function _0x456110(_0x581af8, _0xb32c91) {
    try {
        await _0x29d1f8['editMessage'](_0x581af8, { 'embeds': [_0xb32c91] });
    } catch (_0x29d652) {
        console['error']('Error\x20editing\x20Discord\x20webhook\x20message:', _0x29d652['response']?.['data'] || _0x29d652['message']);
        throw _0x29d652;
    }
}
const _0x58689d = (_0x3e151e, _0x4e1dfe, _0x4686a5, _0x2c6398 = 0xc8) => {
    if (_0x4e1dfe === 'write') {
        _0x3e151e['writeHead'](_0x2c6398, { 'Content-Type': 'text/plain' });
        _0x3e151e['write'](_0x4686a5);
    } else {
        _0x3e151e['writeHead'](_0x2c6398, { 'Content-Type': 'application/json' });
        _0x3e151e['end'](JSON['stringify'](_0x4686a5));
    }
};
const _0x1517c4 = async (_0x12f35e, _0x2454ce = 0xc) => {
    try {
        const _0x3e41dc = await _0x19fda6['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x575d43 + '&machineid=' + _0x540c7e + '&shopname=' + _0x110bdc + '&mode=CHECK_BOT&guildid=' + _0x12f35e + '&clientid=' + _0x164cd3 + '&botclientsecret=' + _0x3be184 + '&bottoken=' + _0x2bb77f, {}, { 'timeout': 0xf4240 });
        const {erreur: _0x457527} = _0x3e41dc['data'];
        return _0x457527 !== 'bot';
    } catch (_0x42e27a) {
        console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:', _0x42e27a);
        return ![];
    }
};
function _0x3e8d() {
    const _0x34c4b4 = [
        '4446444kWKHWt',
        '10zvgTWz',
        '3188704jIBeRl',
        '413532EUuqDS',
        '445935ExDqdx',
        '220766UKcSHs',
        '15GIGMEo',
        '1427972SdsjZH',
        '12692979IByaDX'
    ];
    _0x3e8d = function () {
        return _0x34c4b4;
    };
    return _0x3e8d();
}
const _0x466609 = async (_0x36e278, _0x1690db, _0x51723c) => {
    try {
        await _0x5f4dca();
        const _0x34ffd4 = _0x36e278['item'];
        if (!_0x34ffd4) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
            return _0x58689d(_0x51723c, _0x1690db, _0x523c2e['command']['106'], 0x190);
        }
        const _0x599959 = parseInt(_0x34ffd4['quantity'], 0xa) || 0x1;
        const _0x404fdb = _0x34ffd4['custom_fields']?.[_0x146ecd];
        const _0x123529 = _0x34ffd4['custom_fields']?.[_0x4be599] || _0x100c68;
        const _0x45b370 = _0x34ffd4['product']?.['name'];
        const _0x1dee7f = '/stock/';
        let _0x17d6d3 = _0x4c1d3d['join'](__dirname, '..', _0x1dee7f, 'stock-1m.txt');
        let _0x1bac50 = _0x4c1d3d['join'](__dirname, '..', _0x1dee7f, 'stock-3m.txt');
        let _0x4aed8b;
        console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20pour\x20le\x20serveur:\x20' + _0x404fdb);
        if (!_0x404fdb || !_0x45b370) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20' + (!_0x404fdb ? 'serveurID' : 'products_name'));
            return _0x58689d(_0x51723c, _0x1690db, _0x523c2e['command']['105'], 0x190);
        }
        const _0x466f48 = _0x45b370['match'](/\[(\d+)\]/);
        const _0x9694ff = _0x45b370['match'](/boost (1|3) Mois/);
        if (!_0x466f48 || !_0x9694ff) {
            await _0xb24ed8('Delivery\x20Error,\x20invoice_id:\x20' + _0x34ffd4['invoice_id'], 'log');
            return _0x58689d(_0x51723c, _0x1690db, _0x523c2e['command']['105'], 0xc8);
        }
        const _0x3cf635 = parseInt(_0x466f48[0x1], 0xa);
        const _0x10ae8d = _0x3cf635 * _0x599959;
        const _0x46f174 = parseInt(_0x9694ff[0x1], 0xa);
        const _0x5528ae = _0x46f174 === 0x3 ? '3m' : '1m';
        if (_0x5528ae === '1m') {
            _0x4aed8b = _0x17d6d3;
        } else if (_0x5528ae === '3m') {
            _0x4aed8b = _0x1bac50;
        }
        await _0xb24ed8({
            'invoice_id': _0x34ffd4['invoice_id'],
            'serveur_id': _0x404fdb,
            'quantity': _0x599959,
            'price': _0x34ffd4['price'],
            'mode': _0x1690db,
            'products_name': _0x45b370,
            'gateway': _0x36e278['gateway'],
            'nombre_boosts': _0x10ae8d,
            'type_booster': _0x5528ae
        }, 'order');
        let _0x55d743 = _0x1972fe['existsSync'](_0x389440) ? JSON['parse'](_0x1972fe['readFileSync'](_0x389440)) : [];
        if (_0x55d743['find'](_0x58b8a6 => _0x58b8a6['invoice_id'] === _0x34ffd4['invoice_id'])) {
            await _0xb24ed8('Duplicate\x20Order,\x20invoice_id:\x20' + _0x34ffd4['invoice_id'], 'log');
            return _0x58689d(_0x51723c, _0x1690db, _0x523c2e['command']['104'], 0xc8);
        }
        const _0x32b5f7 = {
            'invoice_id': _0x34ffd4['invoice_id'],
            'email': _0x34ffd4['email'],
            'amount': _0x599959,
            'price': _0x34ffd4['total_price'],
            'gateway': _0x36e278['gateway'],
            'serveurID': _0x404fdb,
            'status': _0x34ffd4['status'],
            'custom_fields': _0x34ffd4['custom_fields'],
            'product_name': _0x45b370
        };
        _0x55d743['push'](_0x32b5f7);
        _0x1972fe['writeFileSync'](_0x389440, JSON['stringify'](_0x55d743, null, 0x2));
        let _0x1c789d = 0x0;
        let _0x4ddf87 = 0x0;
        let _0x5b9acd = _0x10ae8d / 0x2;
        let _0x565523 = ![];
        let _0x4efc5d = 0x0;
        const _0x4109ce = 0x6;
        let _0x224b32 = [];
        let _0x2986f2 = '[+]\x20' + _0x110bdc + '\x20initialisés.';
        if (_0x224b32['length'] >= _0x4109ce) {
            _0x224b32['pop']();
        }
        _0x224b32['unshift'](_0x2986f2);
        let _0x50d229 = await _0x423030(_0x4aed8b);
        if (_0x50d229 === 0x0) {
            _0x224b32['unshift'](_0x110bdc + '\x20' + _0x523c2e['command']['13']);
            const _0x4aac97 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x523c2e['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x523c2e['command']['22'] + ('\x20:\x20**0/' + _0x10ae8d + '**\x0a🔸\x20Boosts\x20') + _0x523c2e['command']['28'] + ('\x20:\x20**' + _0x10ae8d + '/' + _0x10ae8d + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x404fdb,
                'fields': _0x224b32['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x224b32['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x5e57d6 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x110bdc + '\x20-\x20' + _0x523c2e['command']['7'] + '\x20MrX' }
            };
            _0x58689d(_0x51723c, _0x1690db, _0x523c2e['command']['33'], 0xc8);
            return await _0x272554(_0x4aac97);
        } else if (_0x10ae8d / 0x2 > _0x50d229 && _0x50d229 !== _0x10ae8d / 0x2) {
            _0x224b32['unshift'](_0x110bdc + '\x20' + _0x523c2e['command']['67']);
            const _0x2c91f0 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x523c2e['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x523c2e['command']['22'] + ('\x20:\x20**0/' + _0x10ae8d + '**\x0a🔸\x20Boosts\x20') + _0x523c2e['command']['28'] + ('\x20:\x20**' + _0x10ae8d + '/' + _0x10ae8d + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x404fdb,
                'fields': _0x224b32['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x224b32['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x5e57d6 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x110bdc + '\x20-\x20' + _0x523c2e['command']['7'] + '\x20MrX' }
            };
            _0x58689d(_0x51723c, _0x1690db, _0x523c2e['command']['33'], 0xc8);
            return await _0x272554(_0x2c91f0);
        }
        while (!_0x565523 && _0x4efc5d < 0xf) {
            try {
                _0x565523 = await _0x1517c4(_0x404fdb);
                if (!_0x565523) {
                    _0x4efc5d++;
                    const _0x4e285e = _0x4efc5d * 0xf;
                    await _0xb24ed8(_0x523c2e['command']['97'] + '\x20' + _0x4efc5d + '/15\x20' + _0x523c2e['command']['98'] + '\x20' + _0x4e285e + '\x20' + _0x523c2e['command']['99'] + ',\x20invoice_id:\x20' + _0x34ffd4['invoice_id'] + '.', _0x31a7ae);
                    if (_0x4efc5d < 0xf) {
                        await new Promise(_0x3cdaba => setTimeout(_0x3cdaba, 0xf * 0x3c * 0x3e8));
                    }
                }
            } catch (_0x5e02a7) {
                console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:\x20' + _0x5e02a7['message'] + ',\x20invoice_id:\x20' + _0x34ffd4['invoice_id'] + '.');
                await _0xb24ed8('Delivery\x20Error,\x20invoice_id:\x20' + _0x34ffd4['invoice_id'], 'log');
                _0x4efc5d++;
                if (_0x4efc5d < 0xf) {
                    await new Promise(_0x4b2030 => setTimeout(_0x4b2030, 0xf * 0x3c * 0x3e8));
                }
            }
        }
        if (!_0x565523) {
            return _0x58689d(_0x51723c, _0x1690db, _0x523c2e['command']['96'], 0xc8);
        }
        const _0x4b557d = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x523c2e['command']['23'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x523c2e['command']['22'] + ('\x20:\x20**0/' + _0x10ae8d + '**\x0a🔸\x20Boosts\x20') + _0x523c2e['command']['28'] + ('\x20:\x20**0/' + _0x10ae8d + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x404fdb,
            'fields': _0x224b32['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x224b32['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0x5e57d6 },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x110bdc + '\x20-\x20' + _0x523c2e['command']['7'] + '\x20MrX' }
        };
        const _0x278188 = await _0x272554(_0x4b557d);
        const _0x33d5cf = _0x1972fe['readFileSync'](_0x4aed8b)['toString']()['split']('\x0a');
        for (let _0x1dc5c6 = 0x0; _0x1dc5c6 < _0x10ae8d / 0x2; _0x1dc5c6++) {
            let _0x4c0f1f = 0x0;
            async function _0x4e2093(_0x25f38c = 0x0) {
                try {
                    const _0x2e70e4 = _0x33d5cf[_0x1dc5c6];
                    const _0x12eb62 = await _0x52afee(_0x2e70e4);
                    const _0x487de7 = await _0x19fda6['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x575d43 + '&machineid=' + _0x540c7e + '&shopname=' + _0x110bdc + '&mode=BOOST&guildid=' + _0x404fdb + '&bio=' + _0x123529 + '&clientid=' + _0x164cd3 + '&botclientsecret=' + _0x3be184 + '&bottoken=' + _0x2bb77f + '&tokenboost=' + _0x12eb62, {}, { 'timeout': 0xf4240 });
                    const {
                        erreur: _0x820965,
                        success: _0x3c70b7
                    } = _0x487de7['data'];
                    if (_0x224b32['length'] >= _0x4109ce) {
                        _0x224b32['pop']();
                    }
                    if (_0x3c70b7 === !![]) {
                        _0x1c789d++;
                        _0x224b32['unshift']('✅\x20-\x20' + _0x523c2e['command']['81'] + '\x20:\x20' + await _0x337b1f(_0x12eb62));
                        await _0x427d10(_0x2e70e4, _0x4aed8b);
                    } else if (_0x3c70b7 === ![]) {
                        _0x4ddf87++;
                        if (_0x820965 === 'invalid') {
                            _0x224b32['unshift']('❌\x20-\x20' + _0x523c2e['command']['80'] + '\x20:\x20' + await _0x337b1f(_0x12eb62));
                            await _0x427d10(_0x2e70e4, _0x4aed8b);
                        } else if (_0x820965 === 'perm') {
                            _0x224b32['unshift']('⛔\x20-\x20' + _0x523c2e['command']['79'] + '\x20:\x20' + await _0x337b1f(_0x12eb62));
                            if (_0x25f38c < 0x3) {
                                _0x25f38c++;
                                _0x224b32['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x337b1f(_0x12eb62));
                                await _0x4e2093(_0x25f38c);
                            }
                        } else if (_0x820965 === 'used') {
                            _0x224b32['unshift']('⚠️\x20-\x20' + _0x523c2e['command']['78'] + '\x20:\x20' + await _0x337b1f(_0x12eb62));
                            await _0x427d10(_0x2e70e4, _0x4aed8b);
                        } else {
                            _0x224b32['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x337b1f(_0x12eb62));
                            if (_0x25f38c < 0x3) {
                                _0x25f38c++;
                                _0x224b32['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x337b1f(_0x12eb62));
                                await _0x4e2093(_0x25f38c);
                            }
                        }
                    }
                } catch {
                    _0x4ddf87++;
                    if (_0x25f38c < 0x3) {
                        _0x25f38c++;
                        _0x224b32['unshift']('🔄️\x20-\x20retry');
                        await _0x4e2093(_0x25f38c);
                    }
                    _0x224b32['unshift']('⚠️\x20-\x20error\x20API');
                }
            }
            await _0x4e2093(_0x4c0f1f);
            const _0x47ca7f = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x523c2e['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x523c2e['command']['22'] + ('\x20:\x20**' + _0x1c789d * 0x2 + '/' + _0x10ae8d + '**\x0a🔸\x20Boosts\x20') + _0x523c2e['command']['28'] + ('\x20:\x20**' + _0x4ddf87 * 0x2 + '/' + _0x10ae8d + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x404fdb,
                'fields': _0x224b32['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x224b32['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x5e57d6 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x110bdc + '\x20-\x20' + _0x523c2e['command']['7'] + '\x20MrX' }
            };
            await _0x456110(_0x278188, _0x47ca7f);
        }
        const _0x479d88 = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x523c2e['command']['21'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x523c2e['command']['22'] + ('\x20:\x20**' + _0x1c789d * 0x2 + '/' + _0x10ae8d + '**\x0a🔸\x20Boosts\x20') + _0x523c2e['command']['28'] + ('\x20:\x20**' + _0x4ddf87 * 0x2 + '/' + _0x10ae8d + '**\x0a📝\x20Server\x20id:\x20') + _0x404fdb,
            'fields': _0x224b32['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x224b32['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0x5e57d6 },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x110bdc + '\x20-\x20' + _0x523c2e['command']['7'] + '\x20MrX' }
        };
        await _0x456110(_0x278188, _0x479d88);
        if (_0x1c789d >= _0x5b9acd) {
            await _0xb24ed8('Order\x20Delivered,\x20' + _0x523c2e['command']['100'] + ('\x20(' + _0x1c789d * 0x2 + '\x20boosts),\x20invoice_id:\x20' + _0x34ffd4['invoice_id'] + '.'), 'log');
            _0x58689d(_0x51723c, 'write', _0x523c2e['command']['101'], 0xc8);
            return _0x58689d(_0x51723c, _0x1690db, _0x523c2e['command']['101'], 0xc8);
        } else {
            await _0xb24ed8('Delivery\x20Error,\x20' + _0x4ddf87 * 0x2 + '\x20boosts\x20' + _0x523c2e['command']['102'] + ',\x20invoice_id:\x20' + _0x34ffd4['invoice_id'] + '.', 'log');
            _0x58689d(_0x51723c, 'write', _0x523c2e['command']['103'], 0xc8);
            return _0x58689d(_0x51723c, _0x1690db, _0x523c2e['command']['103'], 0xc8);
        }
    } catch (_0xdb833a) {
        console['error'](_0xdb833a);
        _0x58689d(_0x51723c, _0x1690db, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
    }
};
const _0x5c924a = (_0x149973, _0x44e7a8) => {
    if (!_0x1972fe['existsSync'](_0x389440)) {
        _0x149973['writeHead'](0x194, { 'Content-Type': 'text/html' });
        _0x149973['end']('<h1>Aucune\x20commande\x20trouvée</h1>');
        return;
    }
    const _0x342a10 = JSON['parse'](_0x1972fe['readFileSync'](_0x389440));
    const _0x11578f = _0x273d7e || 0x64;
    const _0x3eaff5 = parseInt(_0x44e7a8) || 0x1;
    const _0xdad77b = _0x342a10['length'];
    const _0x2ed11f = Math['ceil'](_0xdad77b / _0x11578f);
    const _0xee59c2 = (_0x3eaff5 - 0x1) * _0x11578f;
    const _0x2847e4 = _0xee59c2 + _0x11578f;
    const _0x3f9f1f = _0x342a10['slice'](_0xee59c2, _0x2847e4);
    const _0x389a2d = _0x342a10['filter'](_0x3e121b => _0x3e121b['status'] === 'completed')['length'];
    const _0x387d8d = _0x342a10['reduce']((_0x26e87c, _0x2fb438) => {
        const _0x165f4a = parseInt(_0x2fb438['amount'], 0xa);
        const _0x4e0dba = _0x165f4a * 0xe;
        return _0x26e87c + _0x4e0dba;
    }, 0x0);
    const _0x110e99 = _0x342a10['reduce']((_0x5edbd9, _0x2fbfac) => {
        const _0x55cf8f = parseFloat(_0x2fbfac['price']);
        return _0x5edbd9 + (isNaN(_0x55cf8f) ? 0x0 : _0x55cf8f);
    }, 0x0);
    _0x149973['writeHead'](0xc8, { 'Content-Type': 'text/html' });
    _0x149973['end']('<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html\x20lang=\x22fr\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>Dashboard\x20des\x20Commandes</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20{\x20box-sizing:\x20border-box;\x20margin:\x200;\x20padding:\x200;\x20font-family:\x20\x27Inter\x27,\x20sans-serif;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x20background-color:\x20#111827;\x20color:\x20#e5e7eb;\x20display:\x20flex;\x20justify-content:\x20center;\x20padding:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.dashboard\x20{\x20width:\x20100%;\x20max-width:\x201200px;\x20padding:\x2020px;\x20background:\x20#1f2937;\x20border-radius:\x2010px;\x20box-shadow:\x200\x204px\x2010px\x20rgba(0,\x200,\x200,\x200.3);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20img\x20{\x20width:\x2080px;\x20margin-right:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20color:\x20#60a5fa;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20{\x20text-align:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.8rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201.2rem;\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-container\x20{\x20overflow-x:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x20width:\x20100%;\x20border-collapse:\x20collapse;\x20background-color:\x20#374151;\x20border-radius:\x2010px;\x20overflow:\x20hidden;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2012px;\x20text-align:\x20left;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th\x20{\x20background-color:\x20#2563eb;\x20color:\x20white;\x20text-transform:\x20uppercase;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:nth-child(even)\x20{\x20background-color:\x20#1f2937;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:hover\x20{\x20background-color:\x20#334155;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20{\x20text-align:\x20center;\x20margin-top:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a\x20{\x20margin:\x200\x205px;\x20padding:\x208px\x2015px;\x20background-color:\x20#2563eb;\x20color:\x20white;\x20border-radius:\x205px;\x20text-decoration:\x20none;\x20transition:\x200.3s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a:hover\x20{\x20background-color:\x20#1e40af;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20footer\x20{\x20text-align:\x20center;\x20margin-top:\x2030px;\x20font-size:\x200.9rem;\x20opacity:\x200.7;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2010px;\x20font-size:\x2014px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.5rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dashboard\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://media.bloumechat.com/media/PFq3HUI6Es.png\x22\x20alt=\x22Logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>InfinityBoost</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Dashboard\x20des\x20Commandes</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Total\x20Gagné\x20:\x20<span\x20id=\x22totalEarned\x22>' + _0x110e99['toFixed'](0x2) + '€</span>\x20|\x20Total\x20Boosts\x20:\x20<span\x20id=\x22totalBoosts\x22>' + _0x387d8d + '</span>\x20|\x20Total\x20Commandes\x20:\x20<span\x20id=\x22totalCompletedOrders\x22>' + _0x389a2d + '</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Invoice\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Email</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Prix\x20(€)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Status</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Gateway</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Serveur\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x3f9f1f['map'](_0x1918ea => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x1918ea['invoice_id'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x1918ea['email'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + parseFloat(_0x1918ea['price'])['toFixed'](0x2) + '€</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x1918ea['status'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x1918ea['amount'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x1918ea['gateway'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x1918ea['serveurID'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>')['join']('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pagination\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x3eaff5 > 0x1 ? '<a\x20href=\x22/orders?page=' + (_0x3eaff5 - 0x1) + '\x22>&laquo;\x20Précédent</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Page\x20' + _0x3eaff5 + '\x20/\x20' + _0x2ed11f + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x3eaff5 < _0x2ed11f ? '<a\x20href=\x22/orders?page=' + (_0x3eaff5 + 0x1) + '\x22>Suivant\x20&raquo;</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>&copy;\x202024\x20InfinityBoost.\x20Tous\x20droits\x20réservés.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a');
};
const _0x556cfc = _0x18675c['createServer'](async (_0x13ce27, _0x2cf742) => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Nouvelle\x20requête\x20reçue:\x20' + _0x13ce27['method'] + '\x20' + _0x13ce27['url']);
    if (_0x13ce27['method'] === 'POST') {
        let _0x5188b6 = '';
        _0x13ce27['on']('data', _0x4b14c7 => {
            _0x5188b6 += _0x4b14c7['toString']();
        });
        _0x13ce27['on']('end', async () => {
            try {
                const _0x6e7def = JSON['parse'](_0x5188b6);
                const _0x3e856c = 'json';
                const _0x253a14 = _0x40a263['parse'](_0x13ce27['url'], !![]);
                if (_0x6e7def['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC') {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                    await _0x466609(_0x6e7def, _0x3e856c, _0x2cf742);
                } else {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Event\x20non\x20supporté:', _0x6e7def['event']);
                    _0x58689d(_0x2cf742, _0x3e856c, 'Event\x20non\x20supporté', 0x190);
                }
            } catch (_0x4a01da) {
                console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20parsing\x20JSON:', _0x4a01da);
                _0x58689d(_0x2cf742, 'json', 'Erreur\x20parsing\x20JSON', 0x190);
            }
        });
    } else if (_0x13ce27['method'] === 'GET') {
        try {
            const _0x4a9142 = _0x40a263['parse'](_0x13ce27['url'], !![]);
            const _0x1fc2c2 = _0x4a9142['query'];
            const _0x2304a7 = _0x1fc2c2['page'] || '1';
            console['log']('[' + new Date()['toISOString']() + ']\x20Requête\x20GET\x20reçue\x20pour\x20' + _0x4a9142['pathname'] + ',\x20params:', _0x1fc2c2);
            if (_0x4a9142['pathname'] === '/orders') {
                console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20requête\x20/orders,\x20page:', _0x2304a7);
                _0x5c924a(_0x2cf742, _0x2304a7);
            } else {
                console['log']('[' + new Date()['toISOString']() + ']\x20Route\x20non\x20trouvée:', _0x4a9142['pathname']);
                _0x58689d(_0x2cf742, 'json', 'Route\x20non\x20trouvée', 0x194);
            }
        } catch (_0x368d2f) {
            console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20du\x20traitement\x20de\x20la\x20requête\x20GET:', _0x368d2f);
            _0x58689d(_0x2cf742, 'json', {
                'error': 'Erreur\x20interne\x20du\x20serveur',
                'details': _0x368d2f['message']
            }, 0x1f4);
        }
    } else {
        console['log']('[' + new Date()['toISOString']() + ']\x20Méthode\x20non\x20supportée:', _0x13ce27['method']);
        _0x58689d(_0x2cf742, 'json', 'Méthode\x20non\x20supportée', 0x195);
    }
});
_0x556cfc['listen'](_0x4b944c, () => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Serveur\x20démarré\x20sur\x20http://' + _0x503025 + ':' + _0x4b944c);
});
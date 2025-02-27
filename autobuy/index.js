(function (_0x452b01, _0x42cb38) {
    const _0x1ec394 = _0x458d;
    const _0x2d6043 = _0x452b01();
    while (!![]) {
        try {
            const _0x19661f = parseInt(_0x1ec394(0x161)) / 0x1 + parseInt(_0x1ec394(0x160)) / 0x2 + parseInt(_0x1ec394(0x15e)) / 0x3 * (parseInt(_0x1ec394(0x15f)) / 0x4) + parseInt(_0x1ec394(0x15b)) / 0x5 * (-parseInt(_0x1ec394(0x15a)) / 0x6) + -parseInt(_0x1ec394(0x159)) / 0x7 + -parseInt(_0x1ec394(0x15c)) / 0x8 + -parseInt(_0x1ec394(0x15d)) / 0x9;
            if (_0x19661f === _0x42cb38) {
                break;
            } else {
                _0x2d6043['push'](_0x2d6043['shift']());
            }
        } catch (_0x42f5f6) {
            _0x2d6043['push'](_0x2d6043['shift']());
        }
    }
}(_0xe781, 0x36162));
const _0x9213b9 = require('http');
const _0x44f1d6 = require('url');
const _0x2d040c = require('axios');
const _0x20acb4 = require('fs');
const _0x126098 = require('path');
const _0x525893 = require('os');
const _0x2e5961 = require('gradient-string');
const _0xa44261 = './commandes.json';
const _0x468fba = require('../config.json');
const {performOperation: _0xc2596b} = require('../required/performOp');
const {WebhookClient: _0x172779} = require('discord.js');
const _0x74239e = require('line-by-line');
let _0x57356d = _0x468fba['service']['name_shop'];
let _0x246662 = _0x468fba['service']['banner'];
function _0xe781() {
    const _0x495e62 = [
        '576112IBJCHw',
        '5418990UaBGLc',
        '3vZBkXF',
        '1387252qzTFYA',
        '878914rwtBeI',
        '440212RaNHLL',
        '292201zgiSws',
        '3462UeEyim',
        '2505ZYDSee'
    ];
    _0xe781 = function () {
        return _0x495e62;
    };
    return _0xe781();
}
let _0x188209 = _0x468fba['apikey'];
let _0x443091 = _0x468fba['autobuy']['port'];
let _0x2071bb = _0x468fba['autobuy']['host'];
let _0x346b6f = _0x468fba['autobuy']['bio'];
let _0x3b3221 = _0x468fba['autobuy']['shop_id_sellauth'];
let _0x4b7d41 = _0x468fba['autobuy']['apikey_sellauth'];
let _0x21f18f = _0x468fba['autobuy']['discord_webhook_url_command_log'];
let _0x54c9f5 = _0x468fba['autobuy']['discord_webhook_url_console'];
let _0x4fc766 = _0x468fba['autobuy']['orders_command_for_page'];
let _0x319deb = _0x468fba['autobuy']['guildid_variable_Custom_Field'] || 'Serveur\x20ID';
let _0x4b9392 = _0x468fba['autobuy']['bio_variable_Custom_Field'] || 'Bio';
function _0x458d(_0x1a507a, _0x5289c9) {
    const _0xe7814c = _0xe781();
    _0x458d = function (_0x458d71, _0x72bff4) {
        _0x458d71 = _0x458d71 - 0x159;
        let _0x5b4cdc = _0xe7814c[_0x458d71];
        return _0x5b4cdc;
    };
    return _0x458d(_0x1a507a, _0x5289c9);
}
const _0x11e35e = JSON['parse'](_0x20acb4['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x23a47f = new _0x172779({ 'url': _0x54c9f5 });
const _0xe5dd8 = new _0x172779({ 'url': _0x21f18f });
const _0x3ad6e6 = _0x468fba['service']['langue_shop'];
const _0x44b37e = _0x11e35e[_0x3ad6e6];
let _0x4cbf06 = _0x468fba['bot']['clientid'];
let _0x48be8b = _0x468fba['bot']['token'];
let _0x8d33b3 = _0x468fba['bot']['clientsecret'];
let _0x5e1a84;
async function _0xf3875b() {
    return new Promise((_0x42c634, _0x4fdba3) => {
        _0xc2596b((_0x443d0b, _0x55033a) => {
            if (_0x443d0b) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x4fdba3(_0x443d0b);
            } else {
                _0x5e1a84 = _0x55033a;
                _0x42c634(_0x5e1a84);
            }
        });
    });
}
async function _0x171701(_0x359f9d) {
    const _0x407dc1 = _0x359f9d['split'](':');
    if (_0x407dc1['length'] === 0x3) {
        return _0x407dc1[0x2];
    } else if (_0x407dc1['length'] === 0x1) {
        return _0x359f9d;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x359f9d);
        return _0x359f9d;
    }
}
async function _0x367fa3(_0x495ba1) {
    if (_0x495ba1['length'] <= 0x6) {
        return _0x495ba1;
    }
    const _0x42f7ae = _0x495ba1['slice'](0x0, 0x14);
    const _0x18d506 = _0x495ba1['slice'](-0xa);
    const _0xe8d90 = _0x495ba1['length'] - _0x42f7ae['length'] - _0x18d506['length'];
    const _0x3299f7 = '' + _0x42f7ae + '*'['repeat'](_0xe8d90 - 0x46) + _0x18d506;
    return _0x3299f7;
}
async function _0x4a1035(_0x2f87f3) {
    if (_0x2f87f3['length'] <= 0x6) {
        return _0x2f87f3;
    }
    const _0x1faa91 = _0x2f87f3['slice'](0x0, 0x6);
    const _0x26a5c7 = _0x2f87f3['slice'](-0xc);
    const _0xfa6ad = _0x2f87f3['length'] - _0x1faa91['length'] - _0x26a5c7['length'];
    const _0x345edc = '' + _0x1faa91 + '*'['repeat'](_0xfa6ad - 0x2d) + _0x26a5c7;
    return _0x345edc;
}
async function _0x147e50(_0x4cb535, _0x58934a) {
    let _0x190907 = await _0x367fa3(_0x4cb535);
    let _0x3ca0f3 = await _0x2c53d8(_0x58934a);
    let _0x387a23 = '';
    if (!_0x20acb4['existsSync'](_0x58934a)) {
        console['log'](_0x2e5961['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0xcf4a85 = [];
    const _0x289d58 = new _0x74239e(_0x58934a);
    _0x289d58['on']('error', _0x267bce => {
        console['error'](_0x2e5961['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x267bce));
    });
    _0x289d58['on']('line', _0xc6a395 => {
        const _0x214970 = _0xc6a395['trim']();
        if (!_0x214970['includes'](_0x4cb535['trim']())) {
            _0xcf4a85['push'](_0x214970);
        }
    });
    _0x289d58['on']('end', async () => {
        if (_0xcf4a85['length'] === 0x0 && _0x3ca0f3 !== 0x1) {
            console['log'](_0x2e5961['retro']('⛔\x20-\x20Le\x20token\x20' + _0x190907 + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x3ca0f3 !== 0x1) {
            _0x387a23 = _0xcf4a85['join'](_0x525893['EOL']);
        } else {
            _0x387a23 = '';
        }
        _0x20acb4['writeFile'](_0x58934a, _0x387a23, _0x7a3f10 => {
            if (_0x7a3f10) {
                console['error'](_0x2e5961['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x7a3f10));
                return;
            }
            console['log'](_0x2e5961['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x190907 + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x2c53d8(_0x205c35) {
    try {
        const _0x22e030 = _0x20acb4['readFileSync'](_0x205c35, 'utf-8');
        const _0xf90073 = _0x22e030['split']('\x0a');
        const _0x4ac5c8 = _0xf90073['filter'](_0x26a218 => _0x26a218['trim']()['length'] > 0x0);
        return _0x4ac5c8['length'];
    } catch (_0xadc6a4) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0xadc6a4);
        return 0x0;
    }
}
const _0x253daf = async (_0x2a5e5c, _0x5de0cd = 'order') => {
    try {
        const _0x2b4946 = {
            'embeds': [{
                    'title': _0x5de0cd === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                    'color': _0x5de0cd === 'order' ? 0xff00 : 0x99ff,
                    'timestamp': new Date()['toISOString'](),
                    'fields': []
                }]
        };
        if (_0x5de0cd === 'order') {
            const _0x1d79d6 = parseFloat(_0x2a5e5c['quantity']) || 0x0;
            const _0x504def = parseFloat(_0x2a5e5c['nombre_boosts']) || 0x0;
            const _0x2c9c49 = parseFloat(_0x2a5e5c['type_booster']) || 'N/A';
            const _0x45ee80 = parseFloat(_0x2a5e5c['price']) || 0x0;
            const _0x3c6468 = (_0x1d79d6 * _0x45ee80)['toFixed'](0x2);
            _0x2b4946['embeds'][0x0]['fields'] = [
                {
                    'name': '🆔\x20Invoice\x20ID',
                    'value': String(_0x2a5e5c['invoice_id']),
                    'inline': ![]
                },
                {
                    'name': '🏷️\x20Product',
                    'value': _0x2a5e5c['products_name'] ? _0x2a5e5c['products_name'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📧\x20Email',
                    'value': _0x2a5e5c['email'] ? _0x2a5e5c['email'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '👤\x20Server\x20ID',
                    'value': _0x2a5e5c['serveur_id'] ? _0x2a5e5c['serveur_id'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📦\x20Quantity',
                    'value': String(_0x1d79d6),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Number\x20boosts',
                    'value': String(_0x504def),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Type\x20boosts',
                    'value': String(_0x2c9c49) + 'm',
                    'inline': ![]
                },
                {
                    'name': '💰\x20Unit\x20Price',
                    'value': String(_0x45ee80) + '€',
                    'inline': ![]
                },
                {
                    'name': '💶\x20Total\x20Price',
                    'value': String(_0x3c6468) + '€',
                    'inline': ![]
                },
                {
                    'name': '💳\x20Gateway',
                    'value': _0x2a5e5c['gateway'] ? _0x2a5e5c['gateway'] : 'N/A',
                    'inline': ![]
                }
            ];
        } else {
            _0x2b4946['embeds'][0x0]['description'] = _0x2a5e5c;
            if (_0x2a5e5c['includes']('Order\x20Delivered')) {
                _0x2b4946['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                _0x2b4946['embeds'][0x0]['color'] = 0xff00;
            } else if (_0x2a5e5c['includes']('Delivery\x20Error')) {
                _0x2b4946['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                _0x2b4946['embeds'][0x0]['color'] = 0xff0000;
            } else if (_0x2a5e5c['includes']('Duplicate\x20Order')) {
                _0x2b4946['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                _0x2b4946['embeds'][0x0]['color'] = 0xffa500;
            } else {
                _0x2b4946['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                _0x2b4946['embeds'][0x0]['color'] = 0xffa500;
            }
        }
        await _0xe5dd8['send']({ 'embeds': [_0x2b4946['embeds'][0x0]] });
    } catch (_0x47638f) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x47638f['response']?.['data'] || _0x47638f['message']);
    }
};
async function _0x470de3(_0x43b7be) {
    try {
        const _0x321113 = await _0x23a47f['send']({ 'embeds': [_0x43b7be] });
        return _0x321113['id'];
    } catch (_0x4f875f) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20message:', _0x4f875f['response']?.['data'] || _0x4f875f['message']);
        throw _0x4f875f;
    }
}
async function _0x32bb6d(_0x4274d2, _0x59fbf4) {
    try {
        await _0x23a47f['editMessage'](_0x4274d2, { 'embeds': [_0x59fbf4] });
    } catch (_0xd1f41c) {
        console['error']('Error\x20editing\x20Discord\x20webhook\x20message:', _0xd1f41c['response']?.['data'] || _0xd1f41c['message']);
        throw _0xd1f41c;
    }
}
const _0x4cf347 = (_0x2ca34a, _0x1bfd50, _0x5838e5, _0x15402d = 0xc8) => {
    if (_0x1bfd50 === 'write') {
        _0x2ca34a['writeHead'](_0x15402d, { 'Content-Type': 'text/plain' });
        _0x2ca34a['write'](_0x5838e5);
    } else {
        _0x2ca34a['writeHead'](_0x15402d, { 'Content-Type': 'application/json' });
        _0x2ca34a['end'](JSON['stringify'](_0x5838e5));
    }
};
const _0x56d19a = async (_0x14c950, _0x505a14 = 0xc) => {
    try {
        const _0x33829d = await _0x2d040c['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x188209 + '&machineid=' + _0x5e1a84 + '&mode=CHECK_BOT&id=' + _0x14c950, {}, { 'timeout': 0xf4240 });
        const {erreur: _0x23a383} = _0x33829d['data'];
        return _0x23a383 !== 'bot';
    } catch (_0x260f34) {
        console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:', _0x260f34);
        return ![];
    }
};
const _0x4483bd = async (_0x3a1c57, _0x2d3e18, _0x250fa7) => {
    try {
        await _0xf3875b();
        const _0x3bee46 = _0x3a1c57['item'];
        if (!_0x3bee46) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
            return _0x4cf347(_0x250fa7, _0x2d3e18, _0x44b37e['command']['106'], 0x190);
        }
        const _0x1b13fb = parseInt(_0x3bee46['quantity'], 0xa) || 0x1;
        const _0x329ce1 = _0x3bee46['custom_fields']?.[_0x319deb];
        const _0x3468ae = _0x3bee46['custom_fields']?.[_0x4b9392] || _0x346b6f;
        const _0x444f6f = _0x3bee46['product']?.['name'];
        const _0x2f834b = '/stock/';
        let _0x3d2b4b = _0x126098['join'](__dirname, '..', _0x2f834b, 'stock-1m.txt');
        let _0x45f46c = _0x126098['join'](__dirname, '..', _0x2f834b, 'stock-3m.txt');
        let _0x40d4a2;
        console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20pour\x20le\x20serveur:\x20' + _0x329ce1);
        if (!_0x329ce1 || !_0x444f6f) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20' + (!_0x329ce1 ? 'serveurID' : 'products_name'));
            return _0x4cf347(_0x250fa7, _0x2d3e18, _0x44b37e['command']['105'], 0x190);
        }
        const _0x18130b = _0x444f6f['match'](/\[(\d+)\]/);
        const _0x37d2cc = _0x444f6f['match'](/boost (1|3) Mois/);
        if (!_0x18130b || !_0x37d2cc) {
            await _0x253daf('Delivery\x20Error,\x20invoice_id:\x20' + _0x3bee46['invoice_id'], 'log');
            return _0x4cf347(_0x250fa7, _0x2d3e18, _0x44b37e['command']['105'], 0xc8);
        }
        const _0x31966b = parseInt(_0x18130b[0x1], 0xa);
        const _0x198f9e = _0x31966b * _0x1b13fb;
        const _0x4ea7cd = parseInt(_0x37d2cc[0x1], 0xa);
        const _0x3273fc = _0x4ea7cd === 0x3 ? '3m' : '1m';
        if (_0x3273fc === '1m') {
            _0x40d4a2 = _0x3d2b4b;
        } else if (_0x3273fc === '3m') {
            _0x40d4a2 = _0x45f46c;
        }
        await _0x253daf({
            'invoice_id': _0x3bee46['invoice_id'],
            'serveur_id': _0x329ce1,
            'quantity': _0x1b13fb,
            'price': _0x3bee46['price'],
            'mode': _0x2d3e18,
            'products_name': _0x444f6f,
            'gateway': _0x3a1c57['gateway'],
            'nombre_boosts': _0x198f9e,
            'type_booster': _0x3273fc
        }, 'order');
        let _0x1aacaf = _0x20acb4['existsSync'](_0xa44261) ? JSON['parse'](_0x20acb4['readFileSync'](_0xa44261)) : [];
        if (_0x1aacaf['find'](_0x4db805 => _0x4db805['invoice_id'] === _0x3bee46['invoice_id'])) {
            await _0x253daf('Duplicate\x20Order,\x20invoice_id:\x20' + _0x3bee46['invoice_id'], 'log');
            return _0x4cf347(_0x250fa7, _0x2d3e18, _0x44b37e['command']['104'], 0xc8);
        }
        const _0xba32dc = {
            'invoice_id': _0x3bee46['invoice_id'],
            'email': _0x3bee46['email'],
            'amount': _0x1b13fb,
            'price': _0x3bee46['total_price'],
            'gateway': _0x3a1c57['gateway'],
            'serveurID': _0x329ce1,
            'status': _0x3bee46['status'],
            'custom_fields': _0x3bee46['custom_fields'],
            'product_name': _0x444f6f
        };
        _0x1aacaf['push'](_0xba32dc);
        _0x20acb4['writeFileSync'](_0xa44261, JSON['stringify'](_0x1aacaf, null, 0x2));
        let _0x263819 = 0x0;
        let _0x31e0ac = 0x0;
        let _0x2ad9a1 = _0x198f9e / 0x2;
        let _0x633153 = ![];
        let _0x59157f = 0x0;
        const _0x5bbfe4 = 0x6;
        let _0x13176c = [];
        let _0x37eade = '[+]\x20' + _0x57356d + '\x20initialisés.';
        if (_0x13176c['length'] >= _0x5bbfe4) {
            _0x13176c['pop']();
        }
        _0x13176c['unshift'](_0x37eade);
        let _0x444f42 = await _0x2c53d8(_0x40d4a2);
        if (_0x444f42 === 0x0) {
            _0x13176c['unshift'](_0x57356d + '\x20' + _0x44b37e['command']['13']);
            const _0xbf320f = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x44b37e['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x44b37e['command']['22'] + ('\x20:\x20**0/' + _0x198f9e + '**\x0a🔸\x20Boosts\x20') + _0x44b37e['command']['28'] + ('\x20:\x20**' + _0x198f9e + '/' + _0x198f9e + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x329ce1,
                'fields': _0x13176c['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x13176c['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x246662 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x57356d + '\x20-\x20' + _0x44b37e['command']['7'] + '\x20MrX' }
            };
            _0x4cf347(_0x250fa7, _0x2d3e18, _0x44b37e['command']['33'], 0xc8);
            return await _0x470de3(_0xbf320f);
        } else if (_0x198f9e / 0x2 > _0x444f42 && _0x444f42 !== _0x198f9e / 0x2) {
            _0x13176c['unshift'](_0x57356d + '\x20' + _0x44b37e['command']['67']);
            const _0x486105 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x44b37e['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x44b37e['command']['22'] + ('\x20:\x20**0/' + _0x198f9e + '**\x0a🔸\x20Boosts\x20') + _0x44b37e['command']['28'] + ('\x20:\x20**' + _0x198f9e + '/' + _0x198f9e + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x329ce1,
                'fields': _0x13176c['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x13176c['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x246662 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x57356d + '\x20-\x20' + _0x44b37e['command']['7'] + '\x20MrX' }
            };
            _0x4cf347(_0x250fa7, _0x2d3e18, _0x44b37e['command']['33'], 0xc8);
            return await _0x470de3(_0x486105);
        }
        while (!_0x633153 && _0x59157f < 0xc) {
            try {
                _0x633153 = await _0x56d19a(_0x329ce1);
                if (!_0x633153) {
                    _0x59157f++;
                    const _0x3deb49 = _0x59157f * 0xa;
                    await _0x253daf(_0x44b37e['command']['97'] + '\x20' + _0x59157f + '/12\x20' + _0x44b37e['command']['98'] + '\x20' + _0x3deb49 + '\x20' + _0x44b37e['command']['99'] + ',\x20invoice_id:\x20' + _0x3bee46['invoice_id'] + '.', _0x54c9f5);
                    if (_0x59157f < 0xc) {
                        await new Promise(_0x4dfdbe => setTimeout(_0x4dfdbe, 0xa * 0x3c * 0x3e8));
                    }
                }
            } catch (_0xd9b624) {
                console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:\x20' + _0xd9b624['message'] + ',\x20invoice_id:\x20' + _0x3bee46['invoice_id'] + '.');
                await _0x253daf('Delivery\x20Error,\x20invoice_id:\x20' + _0x3bee46['invoice_id'], 'log');
                _0x59157f++;
                if (_0x59157f < 0xc) {
                    await new Promise(_0x1121b8 => setTimeout(_0x1121b8, 0xa * 0x3c * 0x3e8));
                }
            }
        }
        if (!_0x633153) {
            return _0x4cf347(_0x250fa7, _0x2d3e18, _0x44b37e['command']['96'], 0xc8);
        }
        const _0x1a8bfb = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x44b37e['command']['23'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x44b37e['command']['22'] + ('\x20:\x20**0/' + _0x198f9e + '**\x0a🔸\x20Boosts\x20') + _0x44b37e['command']['28'] + ('\x20:\x20**0/' + _0x198f9e + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x329ce1,
            'fields': _0x13176c['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x13176c['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0x246662 },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x57356d + '\x20-\x20' + _0x44b37e['command']['7'] + '\x20MrX' }
        };
        const _0x17542b = await _0x470de3(_0x1a8bfb);
        const _0x3981b3 = _0x20acb4['readFileSync'](_0x40d4a2)['toString']()['split']('\x0a');
        for (let _0x2aaec4 = 0x0; _0x2aaec4 < _0x198f9e / 0x2; _0x2aaec4++) {
            try {
                const _0x6b5f21 = _0x3981b3[_0x2aaec4];
                const _0x30c402 = await _0x171701(_0x6b5f21);
                const _0x356685 = await _0x2d040c['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x188209 + '&machineid=' + _0x5e1a84 + '&shopname=' + _0x57356d + '&mode=BOOST&guildid=' + _0x329ce1 + '&bio=' + _0x3468ae + '&clientid=' + _0x4cbf06 + '&botclientsecret=' + _0x8d33b3 + '&bottoken=' + _0x48be8b + '&tokenboost=' + _0x30c402, {}, { 'timeout': 0xf4240 });
                const {
                    erreur: _0x81f0ff,
                    success: _0x492b5c
                } = _0x356685['data'];
                if (_0x13176c['length'] >= _0x5bbfe4) {
                    _0x13176c['pop']();
                }
                if (_0x492b5c === !![]) {
                    _0x263819++;
                    _0x13176c['unshift']('✅\x20-\x20' + _0x44b37e['command']['81'] + '\x20:\x20' + await _0x4a1035(_0x30c402));
                    await _0x147e50(_0x6b5f21, _0x40d4a2);
                } else if (_0x492b5c === ![]) {
                    _0x31e0ac++;
                    if (_0x81f0ff === 'invalid') {
                        _0x13176c['unshift']('❌\x20-\x20' + _0x44b37e['command']['80'] + '\x20:\x20' + await _0x4a1035(_0x30c402));
                        await _0x147e50(_0x6b5f21, _0x40d4a2);
                    } else if (_0x81f0ff === 'perm') {
                        _0x13176c['unshift']('⛔\x20-\x20' + _0x44b37e['command']['79'] + '\x20:\x20' + await _0x4a1035(_0x30c402));
                    } else if (_0x81f0ff === 'used') {
                        _0x13176c['unshift']('⚠️\x20-\x20' + _0x44b37e['command']['78'] + '\x20:\x20' + await _0x4a1035(_0x30c402));
                        await _0x147e50(_0x6b5f21, _0x40d4a2);
                    } else {
                        _0x13176c['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x4a1035(_0x30c402));
                    }
                }
            } catch {
                _0x31e0ac++;
                _0x13176c['unshift']('⚠️\x20-\x20error\x20API');
            }
            const _0x20cd72 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x44b37e['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x44b37e['command']['22'] + ('\x20:\x20**' + _0x263819 * 0x2 + '/' + _0x198f9e + '**\x0a🔸\x20Boosts\x20') + _0x44b37e['command']['28'] + ('\x20:\x20**' + _0x31e0ac * 0x2 + '/' + _0x198f9e + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x329ce1,
                'fields': _0x13176c['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x13176c['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x246662 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x57356d + '\x20-\x20' + _0x44b37e['command']['7'] + '\x20MrX' }
            };
            await _0x32bb6d(_0x17542b, _0x20cd72);
        }
        const _0xb7a072 = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x44b37e['command']['21'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x44b37e['command']['22'] + ('\x20:\x20**' + _0x263819 * 0x2 + '/' + _0x198f9e + '**\x0a🔸\x20Boosts\x20') + _0x44b37e['command']['28'] + ('\x20:\x20**' + _0x31e0ac * 0x2 + '/' + _0x198f9e + '**\x0a📝\x20Server\x20id:\x20') + _0x329ce1,
            'fields': _0x13176c['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x13176c['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0x246662 },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x57356d + '\x20-\x20' + _0x44b37e['command']['7'] + '\x20MrX' }
        };
        await _0x32bb6d(_0x17542b, _0xb7a072);
        if (_0x263819 >= _0x2ad9a1) {
            await _0x253daf('Order\x20Delivered,\x20' + _0x44b37e['command']['100'] + ('\x20(' + _0x263819 * 0x2 + '\x20boosts),\x20invoice_id:\x20' + _0x3bee46['invoice_id'] + '.'), 'log');
            return _0x4cf347(_0x250fa7, _0x2d3e18, _0x44b37e['command']['101'], 0xc8);
        } else {
            await _0x253daf('Delivery\x20Error,\x20' + _0x31e0ac * 0x2 + '\x20boosts\x20' + _0x44b37e['command']['102'] + ',\x20invoice_id:\x20' + _0x3bee46['invoice_id'] + '.', 'log');
            return _0x4cf347(_0x250fa7, _0x2d3e18, _0x44b37e['command']['103'], 0xc8);
        }
    } catch (_0x3fd303) {
        console['error'](_0x3fd303);
        _0x4cf347(_0x250fa7, _0x2d3e18, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
    }
};
const _0x4536fc = (_0x168fca, _0x1f38d5) => {
    if (!_0x20acb4['existsSync'](_0xa44261)) {
        _0x168fca['writeHead'](0x194, { 'Content-Type': 'text/html' });
        _0x168fca['end']('<h1>Aucune\x20commande\x20trouvée</h1>');
        return;
    }
    const _0x5c6fb8 = JSON['parse'](_0x20acb4['readFileSync'](_0xa44261));
    const _0x3900e9 = _0x4fc766 || 0x64;
    const _0x4cd052 = parseInt(_0x1f38d5) || 0x1;
    const _0x529a72 = _0x5c6fb8['length'];
    const _0x4b388a = Math['ceil'](_0x529a72 / _0x3900e9);
    const _0x5862b0 = (_0x4cd052 - 0x1) * _0x3900e9;
    const _0x422d1d = _0x5862b0 + _0x3900e9;
    const _0x2cd731 = _0x5c6fb8['slice'](_0x5862b0, _0x422d1d);
    const _0x1a114b = _0x5c6fb8['filter'](_0x3212ba => _0x3212ba['status'] === 'completed')['length'];
    const _0x15ba42 = _0x5c6fb8['reduce']((_0x827ddf, _0x1500b0) => {
        const _0x3086a9 = parseInt(_0x1500b0['amount'], 0xa);
        const _0x28604f = _0x3086a9 * 0xe;
        return _0x827ddf + _0x28604f;
    }, 0x0);
    const _0xa3c316 = _0x5c6fb8['reduce']((_0x165031, _0x50ba97) => {
        const _0xa2d28c = parseFloat(_0x50ba97['price']);
        return _0x165031 + (isNaN(_0xa2d28c) ? 0x0 : _0xa2d28c);
    }, 0x0);
    _0x168fca['writeHead'](0xc8, { 'Content-Type': 'text/html' });
    _0x168fca['end']('<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html\x20lang=\x22fr\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>Dashboard\x20des\x20Commandes</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20{\x20box-sizing:\x20border-box;\x20margin:\x200;\x20padding:\x200;\x20font-family:\x20\x27Inter\x27,\x20sans-serif;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x20background-color:\x20#111827;\x20color:\x20#e5e7eb;\x20display:\x20flex;\x20justify-content:\x20center;\x20padding:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.dashboard\x20{\x20width:\x20100%;\x20max-width:\x201200px;\x20padding:\x2020px;\x20background:\x20#1f2937;\x20border-radius:\x2010px;\x20box-shadow:\x200\x204px\x2010px\x20rgba(0,\x200,\x200,\x200.3);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20img\x20{\x20width:\x2080px;\x20margin-right:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20color:\x20#60a5fa;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20{\x20text-align:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.8rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201.2rem;\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-container\x20{\x20overflow-x:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x20width:\x20100%;\x20border-collapse:\x20collapse;\x20background-color:\x20#374151;\x20border-radius:\x2010px;\x20overflow:\x20hidden;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2012px;\x20text-align:\x20left;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th\x20{\x20background-color:\x20#2563eb;\x20color:\x20white;\x20text-transform:\x20uppercase;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:nth-child(even)\x20{\x20background-color:\x20#1f2937;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:hover\x20{\x20background-color:\x20#334155;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20{\x20text-align:\x20center;\x20margin-top:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a\x20{\x20margin:\x200\x205px;\x20padding:\x208px\x2015px;\x20background-color:\x20#2563eb;\x20color:\x20white;\x20border-radius:\x205px;\x20text-decoration:\x20none;\x20transition:\x200.3s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a:hover\x20{\x20background-color:\x20#1e40af;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20footer\x20{\x20text-align:\x20center;\x20margin-top:\x2030px;\x20font-size:\x200.9rem;\x20opacity:\x200.7;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2010px;\x20font-size:\x2014px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.5rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dashboard\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://media.bloumechat.com/media/PFq3HUI6Es.png\x22\x20alt=\x22Logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>InfinityBoost</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Dashboard\x20des\x20Commandes</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Total\x20Gagné\x20:\x20<span\x20id=\x22totalEarned\x22>' + _0xa3c316['toFixed'](0x2) + '€</span>\x20|\x20Total\x20Boosts\x20:\x20<span\x20id=\x22totalBoosts\x22>' + _0x15ba42 + '</span>\x20|\x20Total\x20Commandes\x20:\x20<span\x20id=\x22totalCompletedOrders\x22>' + _0x1a114b + '</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Invoice\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Email</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Prix\x20(€)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Status</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Gateway</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Serveur\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x2cd731['map'](_0x5a7554 => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x5a7554['invoice_id'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x5a7554['email'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + parseFloat(_0x5a7554['price'])['toFixed'](0x2) + '€</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x5a7554['status'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x5a7554['amount'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x5a7554['gateway'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x5a7554['serveurID'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>')['join']('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pagination\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x4cd052 > 0x1 ? '<a\x20href=\x22/orders?page=' + (_0x4cd052 - 0x1) + '\x22>&laquo;\x20Précédent</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Page\x20' + _0x4cd052 + '\x20/\x20' + _0x4b388a + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x4cd052 < _0x4b388a ? '<a\x20href=\x22/orders?page=' + (_0x4cd052 + 0x1) + '\x22>Suivant\x20&raquo;</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>&copy;\x202024\x20InfinityBoost.\x20Tous\x20droits\x20réservés.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a');
};
const _0x54ff8f = _0x9213b9['createServer'](async (_0x1f56ce, _0x49d3fb) => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Nouvelle\x20requête\x20reçue:\x20' + _0x1f56ce['method'] + '\x20' + _0x1f56ce['url']);
    if (_0x1f56ce['method'] === 'POST') {
        let _0x1d7453 = '';
        _0x1f56ce['on']('data', _0xabf96d => {
            _0x1d7453 += _0xabf96d['toString']();
        });
        _0x1f56ce['on']('end', async () => {
            try {
                const _0x3236cc = JSON['parse'](_0x1d7453);
                const _0x278979 = 'json';
                const _0x3fb1e1 = _0x44f1d6['parse'](_0x1f56ce['url'], !![]);
                if (_0x3236cc['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC') {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                    await _0x4483bd(_0x3236cc, _0x278979, _0x49d3fb);
                } else {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Event\x20non\x20supporté:', _0x3236cc['event']);
                    _0x4cf347(_0x49d3fb, _0x278979, 'Event\x20non\x20supporté', 0x190);
                }
            } catch (_0x355bdd) {
                console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20parsing\x20JSON:', _0x355bdd);
                _0x4cf347(_0x49d3fb, 'json', 'Erreur\x20parsing\x20JSON', 0x190);
            }
        });
    } else if (_0x1f56ce['method'] === 'GET') {
        try {
            const _0xb2b9eb = _0x44f1d6['parse'](_0x1f56ce['url'], !![]);
            const _0x1c2700 = _0xb2b9eb['query'];
            const _0x12d4ad = _0x1c2700['page'] || '1';
            console['log']('[' + new Date()['toISOString']() + ']\x20Requête\x20GET\x20reçue\x20pour\x20' + _0xb2b9eb['pathname'] + ',\x20params:', _0x1c2700);
            if (_0xb2b9eb['pathname'] === '/orders') {
                console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20requête\x20/orders,\x20page:', _0x12d4ad);
                _0x4536fc(_0x49d3fb, _0x12d4ad);
            } else {
                console['log']('[' + new Date()['toISOString']() + ']\x20Route\x20non\x20trouvée:', _0xb2b9eb['pathname']);
                _0x4cf347(_0x49d3fb, 'json', 'Route\x20non\x20trouvée', 0x194);
            }
        } catch (_0x42cf54) {
            console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20du\x20traitement\x20de\x20la\x20requête\x20GET:', _0x42cf54);
            _0x4cf347(_0x49d3fb, 'json', {
                'error': 'Erreur\x20interne\x20du\x20serveur',
                'details': _0x42cf54['message']
            }, 0x1f4);
        }
    } else {
        console['log']('[' + new Date()['toISOString']() + ']\x20Méthode\x20non\x20supportée:', _0x1f56ce['method']);
        _0x4cf347(_0x49d3fb, 'json', 'Méthode\x20non\x20supportée', 0x195);
    }
});
_0x54ff8f['listen'](_0x443091, () => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Serveur\x20démarré\x20sur\x20http://' + _0x2071bb + ':' + _0x443091);
});
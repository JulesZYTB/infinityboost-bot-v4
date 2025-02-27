(function (_0x4c2e49, _0x32efa1) {
    const _0x2c534c = _0x11d0;
    const _0x98b40e = _0x4c2e49();
    while (!![]) {
        try {
            const _0x449dac = parseInt(_0x2c534c(0x164)) / 0x1 * (-parseInt(_0x2c534c(0x162)) / 0x2) + parseInt(_0x2c534c(0x15c)) / 0x3 + -parseInt(_0x2c534c(0x161)) / 0x4 * (-parseInt(_0x2c534c(0x15b)) / 0x5) + -parseInt(_0x2c534c(0x160)) / 0x6 + -parseInt(_0x2c534c(0x163)) / 0x7 * (parseInt(_0x2c534c(0x15f)) / 0x8) + parseInt(_0x2c534c(0x15a)) / 0x9 * (-parseInt(_0x2c534c(0x159)) / 0xa) + parseInt(_0x2c534c(0x15e)) / 0xb * (parseInt(_0x2c534c(0x15d)) / 0xc);
            if (_0x449dac === _0x32efa1) {
                break;
            } else {
                _0x98b40e['push'](_0x98b40e['shift']());
            }
        } catch (_0xd867f) {
            _0x98b40e['push'](_0x98b40e['shift']());
        }
    }
}(_0x2a65, 0x1b0b5));
const _0x216209 = require('http');
const _0x54144c = require('url');
const _0x181441 = require('axios');
const _0x1b2438 = require('fs');
const _0x42de46 = require('path');
const _0x1cbb5c = require('os');
const _0x5f54b = require('gradient-string');
const _0x4317f2 = './commandes.json';
const _0x17da56 = require('../config.json');
const {performOperation: _0x48deb3} = require('../required/performOp');
const {WebhookClient: _0x4f41b3} = require('discord.js');
const _0x3c234c = require('line-by-line');
let _0xe008e5 = _0x17da56['service']['name_shop'];
let _0x59b90f = _0x17da56['service']['banner'];
let _0x5b551a = _0x17da56['apikey'];
let _0x2756b7 = _0x17da56['autobuy']['port'];
let _0x47ed5a = _0x17da56['autobuy']['host'];
let _0x1a3b67 = _0x17da56['autobuy']['bio'];
let _0x1c9ea1 = _0x17da56['autobuy']['shop_id_sellauth'];
let _0x3e0310 = _0x17da56['autobuy']['apikey_sellauth'];
let _0x223f1b = _0x17da56['autobuy']['discord_webhook_url_command_log'];
let _0x52554e = _0x17da56['autobuy']['discord_webhook_url_console'];
let _0x40cd3f = _0x17da56['autobuy']['orders_command_for_page'];
let _0x1cb447 = _0x17da56['autobuy']['guildid_variable_Custom_Field'] || 'Serveur\x20ID';
let _0x1dc097 = _0x17da56['autobuy']['bio_variable_Custom_Field'] || 'Bio';
const _0x351ed4 = JSON['parse'](_0x1b2438['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x359546 = new _0x4f41b3({ 'url': _0x52554e });
function _0x11d0(_0x2dbf24, _0x40267d) {
    const _0x2a6543 = _0x2a65();
    _0x11d0 = function (_0x11d059, _0x20bdd8) {
        _0x11d059 = _0x11d059 - 0x159;
        let _0x5e24c6 = _0x2a6543[_0x11d059];
        return _0x5e24c6;
    };
    return _0x11d0(_0x2dbf24, _0x40267d);
}
const _0x4be992 = new _0x4f41b3({ 'url': _0x223f1b });
const _0x1af98b = _0x17da56['service']['langue_shop'];
const _0x1d4f49 = _0x351ed4[_0x1af98b];
let _0x11cb6d = _0x17da56['bot']['clientid'];
let _0x3e6b83 = _0x17da56['bot']['token'];
let _0x5a6a89 = _0x17da56['bot']['clientsecret'];
let _0x327b7b;
async function _0x1c1a9d() {
    return new Promise((_0x3545ae, _0x394717) => {
        _0x48deb3((_0x177ee4, _0x2bfc75) => {
            if (_0x177ee4) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x394717(_0x177ee4);
            } else {
                _0x327b7b = _0x2bfc75;
                _0x3545ae(_0x327b7b);
            }
        });
    });
}
async function _0x3f6ada(_0x1f2805) {
    const _0xf59a98 = _0x1f2805['split'](':');
    if (_0xf59a98['length'] === 0x3) {
        return _0xf59a98[0x2];
    } else if (_0xf59a98['length'] === 0x1) {
        return _0x1f2805;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x1f2805);
        return _0x1f2805;
    }
}
async function _0x514131(_0xcb241d) {
    if (_0xcb241d['length'] <= 0x6) {
        return _0xcb241d;
    }
    const _0x48fd5e = _0xcb241d['slice'](0x0, 0x14);
    const _0x48d20d = _0xcb241d['slice'](-0xa);
    const _0x47fd03 = _0xcb241d['length'] - _0x48fd5e['length'] - _0x48d20d['length'];
    const _0x32b4dc = '' + _0x48fd5e + '*'['repeat'](_0x47fd03 - 0x46) + _0x48d20d;
    return _0x32b4dc;
}
async function _0x3113c2(_0x10f7db) {
    if (_0x10f7db['length'] <= 0x6) {
        return _0x10f7db;
    }
    const _0x4f26e9 = _0x10f7db['slice'](0x0, 0x6);
    const _0x4dc4b1 = _0x10f7db['slice'](-0xc);
    const _0x41b676 = _0x10f7db['length'] - _0x4f26e9['length'] - _0x4dc4b1['length'];
    const _0x429f1f = '' + _0x4f26e9 + '*'['repeat'](_0x41b676 - 0x2d) + _0x4dc4b1;
    return _0x429f1f;
}
async function _0x381a2f(_0xed798a, _0x73eb44) {
    let _0x19d6e1 = await _0x514131(_0xed798a);
    let _0x4ef143 = await _0x174423(_0x73eb44);
    let _0x36fff6 = '';
    if (!_0x1b2438['existsSync'](_0x73eb44)) {
        console['log'](_0x5f54b['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x965cb4 = [];
    const _0x8df202 = new _0x3c234c(_0x73eb44);
    _0x8df202['on']('error', _0x302c6c => {
        console['error'](_0x5f54b['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x302c6c));
    });
    _0x8df202['on']('line', _0x11505c => {
        const _0x492f35 = _0x11505c['trim']();
        if (!_0x492f35['includes'](_0xed798a['trim']())) {
            _0x965cb4['push'](_0x492f35);
        }
    });
    _0x8df202['on']('end', async () => {
        if (_0x965cb4['length'] === 0x0 && _0x4ef143 !== 0x1) {
            console['log'](_0x5f54b['retro']('⛔\x20-\x20Le\x20token\x20' + _0x19d6e1 + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x4ef143 !== 0x1) {
            _0x36fff6 = _0x965cb4['join'](_0x1cbb5c['EOL']);
        } else {
            _0x36fff6 = '';
        }
        _0x1b2438['writeFile'](_0x73eb44, _0x36fff6, _0x45968e => {
            if (_0x45968e) {
                console['error'](_0x5f54b['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x45968e));
                return;
            }
            console['log'](_0x5f54b['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x19d6e1 + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x174423(_0x2e4126) {
    try {
        const _0x30393c = _0x1b2438['readFileSync'](_0x2e4126, 'utf-8');
        const _0x30f0c2 = _0x30393c['split']('\x0a');
        const _0x381e22 = _0x30f0c2['filter'](_0x44a9c6 => _0x44a9c6['trim']()['length'] > 0x0);
        return _0x381e22['length'];
    } catch (_0x259cce) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x259cce);
        return 0x0;
    }
}
const _0x2e6abd = async (_0x8db18c, _0x3b920e = 'order') => {
    try {
        const _0x5f2f95 = {
            'embeds': [{
                    'title': _0x3b920e === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                    'color': _0x3b920e === 'order' ? 0xff00 : 0x99ff,
                    'timestamp': new Date()['toISOString'](),
                    'fields': []
                }]
        };
        if (_0x3b920e === 'order') {
            const _0x23ba60 = parseFloat(_0x8db18c['quantity']) || 0x0;
            const _0x13c11d = parseFloat(_0x8db18c['nombre_boosts']) || 0x0;
            const _0x7091d0 = parseFloat(_0x8db18c['type_booster']) || 'N/A';
            const _0xbf6c4d = parseFloat(_0x8db18c['price']) || 0x0;
            const _0x49446c = (_0x23ba60 * _0xbf6c4d)['toFixed'](0x2);
            _0x5f2f95['embeds'][0x0]['fields'] = [
                {
                    'name': '🆔\x20Invoice\x20ID',
                    'value': String(_0x8db18c['invoice_id']),
                    'inline': ![]
                },
                {
                    'name': '🏷️\x20Product',
                    'value': _0x8db18c['products_name'] ? _0x8db18c['products_name'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📧\x20Email',
                    'value': _0x8db18c['email'] ? _0x8db18c['email'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '👤\x20Server\x20ID',
                    'value': _0x8db18c['serveur_id'] ? _0x8db18c['serveur_id'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📦\x20Quantity',
                    'value': String(_0x23ba60),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Number\x20boosts',
                    'value': String(_0x13c11d),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Type\x20boosts',
                    'value': String(_0x7091d0) + 'm',
                    'inline': ![]
                },
                {
                    'name': '💰\x20Unit\x20Price',
                    'value': String(_0xbf6c4d) + '€',
                    'inline': ![]
                },
                {
                    'name': '💶\x20Total\x20Price',
                    'value': String(_0x49446c) + '€',
                    'inline': ![]
                },
                {
                    'name': '💳\x20Gateway',
                    'value': _0x8db18c['gateway'] ? _0x8db18c['gateway'] : 'N/A',
                    'inline': ![]
                }
            ];
        } else {
            _0x5f2f95['embeds'][0x0]['description'] = _0x8db18c;
            if (_0x8db18c['includes']('Order\x20Delivered')) {
                _0x5f2f95['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                _0x5f2f95['embeds'][0x0]['color'] = 0xff00;
            } else if (_0x8db18c['includes']('Delivery\x20Error')) {
                _0x5f2f95['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                _0x5f2f95['embeds'][0x0]['color'] = 0xff0000;
            } else if (_0x8db18c['includes']('Duplicate\x20Order')) {
                _0x5f2f95['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                _0x5f2f95['embeds'][0x0]['color'] = 0xffa500;
            } else {
                _0x5f2f95['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                _0x5f2f95['embeds'][0x0]['color'] = 0xffa500;
            }
        }
        await _0x4be992['send']({ 'embeds': [_0x5f2f95['embeds'][0x0]] });
    } catch (_0x66d192) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x66d192['response']?.['data'] || _0x66d192['message']);
    }
};
async function _0x252739(_0x4bd2ee) {
    try {
        const _0x3dc5aa = await _0x359546['send']({ 'embeds': [_0x4bd2ee] });
        return _0x3dc5aa['id'];
    } catch (_0x4ac898) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20message:', _0x4ac898['response']?.['data'] || _0x4ac898['message']);
        throw _0x4ac898;
    }
}
async function _0x2f4c9f(_0x12f70f, _0x7cc2c9) {
    try {
        await _0x359546['editMessage'](_0x12f70f, { 'embeds': [_0x7cc2c9] });
    } catch (_0x5eda47) {
        console['error']('Error\x20editing\x20Discord\x20webhook\x20message:', _0x5eda47['response']?.['data'] || _0x5eda47['message']);
        throw _0x5eda47;
    }
}
function _0x2a65() {
    const _0x4e8a28 = [
        '4CZpAFQ',
        '6pPDDEy',
        '1348781YmaFUv',
        '34579vnQVKX',
        '522430ebrdEA',
        '9GzxXGw',
        '713045LvvuXM',
        '606597OexOaJ',
        '162012zgGGbF',
        '242LGGjEP',
        '8YIGHpF',
        '1094364PLWTJH'
    ];
    _0x2a65 = function () {
        return _0x4e8a28;
    };
    return _0x2a65();
}
const _0x3e4c28 = (_0x4f6948, _0x991dc0, _0x1c1d35, _0x45c4af = 0xc8) => {
    if (_0x991dc0 === 'write') {
        _0x4f6948['writeHead'](_0x45c4af, { 'Content-Type': 'text/plain' });
        _0x4f6948['write'](_0x1c1d35);
    } else {
        _0x4f6948['writeHead'](_0x45c4af, { 'Content-Type': 'application/json' });
        _0x4f6948['end'](JSON['stringify'](_0x1c1d35));
    }
};
const _0x37d0c6 = async (_0x157f41, _0x5f0cf4 = 0xc) => {
    try {
        const _0x13147f = await _0x181441['post']('https://panel.infinityboost.monster/api/api?APIKey=' + _0x5b551a + '&machineid=' + _0x327b7b + '&mode=CHECK_BOT&id=' + _0x157f41, {}, { 'timeout': 0xf4240 });
        const {erreur: _0x502588} = _0x13147f['data'];
        return _0x502588 !== 'bot';
    } catch (_0x5d6f24) {
        console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:', _0x5d6f24);
        return ![];
    }
};
const _0x224b6d = async (_0x44348c, _0x37fbbc, _0x260260) => {
    try {
        await _0x1c1a9d();
        const _0x313402 = _0x44348c['item'];
        if (!_0x313402) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
            return _0x3e4c28(_0x260260, _0x37fbbc, _0x1d4f49['command']['106'], 0x190);
        }
        const _0x12578b = parseInt(_0x313402['quantity'], 0xa) || 0x1;
        const _0x2d3c2 = _0x313402['custom_fields']?.[_0x1cb447];
        const _0x4e8212 = _0x313402['custom_fields']?.[_0x1dc097] || _0x1a3b67;
        const _0x579aa6 = _0x313402['product']?.['name'];
        const _0x42a6af = '/stock/';
        let _0x199221 = _0x42de46['join'](__dirname, '..', _0x42a6af, 'stock-1m.txt');
        let _0x5dc0c3 = _0x42de46['join'](__dirname, '..', _0x42a6af, 'stock-3m.txt');
        let _0x2be411;
        console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20pour\x20le\x20serveur:\x20' + _0x2d3c2);
        if (!_0x2d3c2 || !_0x579aa6) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20' + (!_0x2d3c2 ? 'serveurID' : 'products_name'));
            return _0x3e4c28(_0x260260, _0x37fbbc, _0x1d4f49['command']['105'], 0x190);
        }
        const _0x45d3de = _0x579aa6['match'](/\[(\d+)\]/);
        const _0x1a7ab1 = _0x579aa6['match'](/boost (1|3) Mois/);
        if (!_0x45d3de || !_0x1a7ab1) {
            await _0x2e6abd('Delivery\x20Error,\x20invoice_id:\x20' + _0x313402['invoice_id'], 'log');
            return _0x3e4c28(_0x260260, _0x37fbbc, _0x1d4f49['command']['105'], 0xc8);
        }
        const _0x20f4c4 = parseInt(_0x45d3de[0x1], 0xa);
        const _0x3a03fa = _0x20f4c4 * _0x12578b;
        const _0x587202 = parseInt(_0x1a7ab1[0x1], 0xa);
        const _0x313ef3 = _0x587202 === 0x3 ? '3m' : '1m';
        if (_0x313ef3 === '1m') {
            _0x2be411 = _0x199221;
        } else if (_0x313ef3 === '3m') {
            _0x2be411 = _0x5dc0c3;
        }
        await _0x2e6abd({
            'invoice_id': _0x313402['invoice_id'],
            'serveur_id': _0x2d3c2,
            'quantity': _0x12578b,
            'price': _0x313402['price'],
            'mode': _0x37fbbc,
            'products_name': _0x579aa6,
            'gateway': _0x44348c['gateway'],
            'nombre_boosts': _0x3a03fa,
            'type_booster': _0x313ef3
        }, 'order');
        let _0x19fc53 = _0x1b2438['existsSync'](_0x4317f2) ? JSON['parse'](_0x1b2438['readFileSync'](_0x4317f2)) : [];
        if (_0x19fc53['find'](_0x5948d6 => _0x5948d6['invoice_id'] === _0x313402['invoice_id'])) {
            await _0x2e6abd('Duplicate\x20Order,\x20invoice_id:\x20' + _0x313402['invoice_id'], 'log');
            return _0x3e4c28(_0x260260, _0x37fbbc, _0x1d4f49['command']['104'], 0xc8);
        }
        const _0x5517e9 = {
            'invoice_id': _0x313402['invoice_id'],
            'email': _0x313402['email'],
            'amount': _0x12578b,
            'price': _0x313402['total_price'],
            'gateway': _0x44348c['gateway'],
            'serveurID': _0x2d3c2,
            'status': _0x313402['status'],
            'custom_fields': _0x313402['custom_fields'],
            'product_name': _0x579aa6
        };
        _0x19fc53['push'](_0x5517e9);
        _0x1b2438['writeFileSync'](_0x4317f2, JSON['stringify'](_0x19fc53, null, 0x2));
        let _0x1f304a = 0x0;
        let _0x412a5c = 0x0;
        let _0x3b4c07 = _0x3a03fa / 0x2;
        let _0x567b95 = ![];
        let _0x1a45f4 = 0x0;
        const _0x5d8d14 = 0x6;
        let _0x5a0fbd = [];
        let _0x348380 = '[+]\x20' + _0xe008e5 + '\x20initialisés.';
        if (_0x5a0fbd['length'] >= _0x5d8d14) {
            _0x5a0fbd['pop']();
        }
        _0x5a0fbd['unshift'](_0x348380);
        let _0x259953 = await _0x174423(_0x2be411);
        if (_0x259953 === 0x0) {
            _0x5a0fbd['unshift'](_0xe008e5 + '\x20' + _0x1d4f49['command']['13']);
            const _0x3775e8 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1d4f49['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x1d4f49['command']['22'] + ('\x20:\x20**0/' + _0x3a03fa + '**\x0a🔸\x20Boosts\x20') + _0x1d4f49['command']['28'] + ('\x20:\x20**' + _0x3a03fa + '/' + _0x3a03fa + '**\x0a'),
                'fields': _0x5a0fbd['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x5a0fbd['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x59b90f },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0xe008e5 + '\x20-\x20' + _0x1d4f49['command']['7'] + '\x20MrX' }
            };
            _0x3e4c28(_0x260260, _0x37fbbc, _0x1d4f49['command']['33'], 0xc8);
            return await _0x252739(_0x3775e8);
        } else if (_0x3a03fa / 0x2 > _0x259953 && _0x259953 !== _0x3a03fa / 0x2) {
            _0x5a0fbd['unshift'](_0xe008e5 + '\x20' + _0x1d4f49['command']['67']);
            const _0x7dc33f = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1d4f49['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x1d4f49['command']['22'] + ('\x20:\x20**0/' + _0x3a03fa + '**\x0a🔸\x20Boosts\x20') + _0x1d4f49['command']['28'] + ('\x20:\x20**' + _0x3a03fa + '/' + _0x3a03fa + '**\x0a'),
                'fields': _0x5a0fbd['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x5a0fbd['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x59b90f },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0xe008e5 + '\x20-\x20' + _0x1d4f49['command']['7'] + '\x20MrX' }
            };
            _0x3e4c28(_0x260260, _0x37fbbc, _0x1d4f49['command']['33'], 0xc8);
            return await _0x252739(_0x7dc33f);
        }
        while (!_0x567b95 && _0x1a45f4 < 0xc) {
            try {
                _0x567b95 = await _0x37d0c6(_0x2d3c2);
                if (!_0x567b95) {
                    _0x1a45f4++;
                    const _0x48bdde = _0x1a45f4 * 0xa;
                    await _0x2e6abd(_0x1d4f49['command']['97'] + '\x20' + _0x1a45f4 + '/12\x20' + _0x1d4f49['command']['98'] + '\x20' + _0x48bdde + '\x20' + _0x1d4f49['command']['99'] + ',\x20invoice_id:\x20' + _0x313402['invoice_id'] + '.', _0x52554e);
                    if (_0x1a45f4 < 0xc) {
                        await new Promise(_0x47315c => setTimeout(_0x47315c, 0xa * 0x3c * 0x3e8));
                    }
                }
            } catch (_0x40b82d) {
                console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:\x20' + _0x40b82d['message'] + ',\x20invoice_id:\x20' + _0x313402['invoice_id'] + '.');
                await _0x2e6abd('Delivery\x20Error,\x20invoice_id:\x20' + _0x313402['invoice_id'], 'log');
                _0x1a45f4++;
                if (_0x1a45f4 < 0xc) {
                    await new Promise(_0x1a0228 => setTimeout(_0x1a0228, 0xa * 0x3c * 0x3e8));
                }
            }
        }
        if (!_0x567b95) {
            return _0x3e4c28(_0x260260, _0x37fbbc, _0x1d4f49['command']['96'], 0xc8);
        }
        const _0x4dfc1e = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1d4f49['command']['23'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x1d4f49['command']['22'] + ('\x20:\x20**0/' + _0x3a03fa + '**\x0a🔸\x20Boosts\x20') + _0x1d4f49['command']['28'] + ('\x20:\x20**0/' + _0x3a03fa + '**\x0a'),
            'fields': _0x5a0fbd['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x5a0fbd['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0x59b90f },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0xe008e5 + '\x20-\x20' + _0x1d4f49['command']['7'] + '\x20MrX' }
        };
        const _0x3b3200 = await _0x252739(_0x4dfc1e);
        const _0x2af723 = _0x1b2438['readFileSync'](_0x2be411)['toString']()['split']('\x0a');
        for (let _0x26a5b9 = 0x0; _0x26a5b9 < _0x3a03fa / 0x2; _0x26a5b9++) {
            try {
                const _0x4bd73d = _0x2af723[_0x26a5b9];
                const _0x2e4f2f = await _0x3f6ada(_0x4bd73d);
                const _0x2d59ff = await _0x181441['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x5b551a + '&machineid=' + _0x327b7b + '&shopname=' + _0xe008e5 + '&mode=BOOST&guildid=' + _0x2d3c2 + '&bio=' + _0x4e8212 + '&clientid=' + _0x11cb6d + '&botclientsecret=' + _0x5a6a89 + '&bottoken=' + _0x3e6b83 + '&tokenboost=' + _0x2e4f2f, {}, { 'timeout': 0xf4240 });
                const {
                    erreur: _0x127b0e,
                    success: _0x1be2b1
                } = _0x2d59ff['data'];
                if (_0x5a0fbd['length'] >= _0x5d8d14) {
                    _0x5a0fbd['pop']();
                }
                if (_0x1be2b1 === !![]) {
                    _0x1f304a++;
                    _0x5a0fbd['unshift']('✅\x20-\x20' + _0x1d4f49['command']['81'] + '\x20:\x20' + await _0x3113c2(_0x2e4f2f));
                    await _0x381a2f(_0x4bd73d, _0x2be411);
                } else if (_0x1be2b1 === ![]) {
                    _0x412a5c++;
                    if (_0x127b0e === 'bot') {
                        _0x5a0fbd['unshift']('⛔\x20-\x20' + _0x1d4f49['command']['84'] + '\x20' + _0x1d4f49['command']['107']);
                    } else if (_0x127b0e === 'invalid') {
                        _0x5a0fbd['unshift']('❌\x20-\x20' + _0x1d4f49['command']['80'] + '\x20:\x20' + await _0x3113c2(_0x2e4f2f));
                        await _0x381a2f(_0x4bd73d, _0x2be411);
                    } else if (_0x127b0e === 'perm') {
                        _0x5a0fbd['unshift']('⛔\x20-\x20' + _0x1d4f49['command']['79'] + '\x20:\x20' + await _0x3113c2(_0x2e4f2f));
                    } else if (_0x127b0e === 'used') {
                        _0x5a0fbd['unshift']('⚠️\x20-\x20' + _0x1d4f49['command']['78'] + '\x20:\x20' + await _0x3113c2(_0x2e4f2f));
                        await _0x381a2f(_0x4bd73d, _0x2be411);
                    } else {
                        _0x5a0fbd['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x3113c2(_0x2e4f2f));
                    }
                }
            } catch {
                _0x412a5c++;
                _0x5a0fbd['unshift']('⚠️\x20-\x20error\x20API');
            }
            const _0x5d5fcf = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1d4f49['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x1d4f49['command']['22'] + ('\x20:\x20**' + _0x1f304a * 0x2 + '/' + _0x3a03fa + '**\x0a🔸\x20Boosts\x20') + _0x1d4f49['command']['28'] + ('\x20:\x20**' + _0x412a5c * 0x2 + '/' + _0x3a03fa + '**\x0a'),
                'fields': _0x5a0fbd['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x5a0fbd['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x59b90f },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0xe008e5 + '\x20-\x20' + _0x1d4f49['command']['7'] + '\x20MrX' }
            };
            await _0x2f4c9f(_0x3b3200, _0x5d5fcf);
        }
        const _0xb5ac90 = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1d4f49['command']['21'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x1d4f49['command']['22'] + ('\x20:\x20**' + _0x1f304a * 0x2 + '/' + _0x3a03fa + '**\x0a🔸\x20Boosts\x20') + _0x1d4f49['command']['28'] + ('\x20:\x20**' + _0x412a5c * 0x2 + '/' + _0x3a03fa + '**\x0a'),
            'fields': _0x5a0fbd['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x5a0fbd['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0x59b90f },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0xe008e5 + '\x20-\x20' + _0x1d4f49['command']['7'] + '\x20MrX' }
        };
        await _0x2f4c9f(_0x3b3200, _0xb5ac90);
        if (_0x1f304a >= _0x3b4c07) {
            await _0x2e6abd('Order\x20Delivered,\x20' + _0x1d4f49['command']['100'] + ('\x20(' + _0x1f304a * 0x2 + '\x20boosts),\x20invoice_id:\x20' + _0x313402['invoice_id'] + '.'), 'log');
            return _0x3e4c28(_0x260260, _0x37fbbc, _0x1d4f49['command']['101'], 0xc8);
        } else {
            await _0x2e6abd('Delivery\x20Error,\x20' + _0x412a5c * 0x2 + '\x20boosts\x20' + _0x1d4f49['command']['102'] + ',\x20invoice_id:\x20' + _0x313402['invoice_id'] + '.', 'log');
            return _0x3e4c28(_0x260260, _0x37fbbc, _0x1d4f49['command']['103'], 0xc8);
        }
    } catch (_0x1f1689) {
        console['error'](_0x1f1689);
        _0x3e4c28(_0x260260, _0x37fbbc, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
    }
};
const _0x41ec2a = (_0x574145, _0x550c96) => {
    if (!_0x1b2438['existsSync'](_0x4317f2)) {
        _0x574145['writeHead'](0x194, { 'Content-Type': 'text/html' });
        _0x574145['end']('<h1>Aucune\x20commande\x20trouvée</h1>');
        return;
    }
    const _0x14050f = JSON['parse'](_0x1b2438['readFileSync'](_0x4317f2));
    const _0x4de09f = _0x40cd3f || 0x64;
    const _0x1ce80b = parseInt(_0x550c96) || 0x1;
    const _0x521a85 = _0x14050f['length'];
    const _0x3e466b = Math['ceil'](_0x521a85 / _0x4de09f);
    const _0x40a7ce = (_0x1ce80b - 0x1) * _0x4de09f;
    const _0x7e41 = _0x40a7ce + _0x4de09f;
    const _0x4591c0 = _0x14050f['slice'](_0x40a7ce, _0x7e41);
    const _0x580b07 = _0x14050f['filter'](_0x3acc17 => _0x3acc17['status'] === 'completed')['length'];
    const _0x1623f5 = _0x14050f['reduce']((_0x2f454d, _0x53d4a2) => {
        const _0x33b01d = parseInt(_0x53d4a2['amount'], 0xa);
        const _0x22e6ce = _0x33b01d * 0xe;
        return _0x2f454d + _0x22e6ce;
    }, 0x0);
    const _0x17a4ba = _0x14050f['reduce']((_0x3b4e22, _0x52de55) => {
        const _0x1fbab3 = parseFloat(_0x52de55['price']);
        return _0x3b4e22 + (isNaN(_0x1fbab3) ? 0x0 : _0x1fbab3);
    }, 0x0);
    _0x574145['writeHead'](0xc8, { 'Content-Type': 'text/html' });
    _0x574145['end']('<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html\x20lang=\x22fr\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>Dashboard\x20des\x20Commandes</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20{\x20box-sizing:\x20border-box;\x20margin:\x200;\x20padding:\x200;\x20font-family:\x20\x27Inter\x27,\x20sans-serif;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x20background-color:\x20#111827;\x20color:\x20#e5e7eb;\x20display:\x20flex;\x20justify-content:\x20center;\x20padding:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.dashboard\x20{\x20width:\x20100%;\x20max-width:\x201200px;\x20padding:\x2020px;\x20background:\x20#1f2937;\x20border-radius:\x2010px;\x20box-shadow:\x200\x204px\x2010px\x20rgba(0,\x200,\x200,\x200.3);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20img\x20{\x20width:\x2080px;\x20margin-right:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20color:\x20#60a5fa;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20{\x20text-align:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.8rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201.2rem;\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-container\x20{\x20overflow-x:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x20width:\x20100%;\x20border-collapse:\x20collapse;\x20background-color:\x20#374151;\x20border-radius:\x2010px;\x20overflow:\x20hidden;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2012px;\x20text-align:\x20left;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th\x20{\x20background-color:\x20#2563eb;\x20color:\x20white;\x20text-transform:\x20uppercase;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:nth-child(even)\x20{\x20background-color:\x20#1f2937;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:hover\x20{\x20background-color:\x20#334155;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20{\x20text-align:\x20center;\x20margin-top:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a\x20{\x20margin:\x200\x205px;\x20padding:\x208px\x2015px;\x20background-color:\x20#2563eb;\x20color:\x20white;\x20border-radius:\x205px;\x20text-decoration:\x20none;\x20transition:\x200.3s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a:hover\x20{\x20background-color:\x20#1e40af;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20footer\x20{\x20text-align:\x20center;\x20margin-top:\x2030px;\x20font-size:\x200.9rem;\x20opacity:\x200.7;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2010px;\x20font-size:\x2014px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.5rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dashboard\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://media.bloumechat.com/media/PFq3HUI6Es.png\x22\x20alt=\x22Logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>InfinityBoost</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Dashboard\x20des\x20Commandes</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Total\x20Gagné\x20:\x20<span\x20id=\x22totalEarned\x22>' + _0x17a4ba['toFixed'](0x2) + '€</span>\x20|\x20Total\x20Boosts\x20:\x20<span\x20id=\x22totalBoosts\x22>' + _0x1623f5 + '</span>\x20|\x20Total\x20Commandes\x20:\x20<span\x20id=\x22totalCompletedOrders\x22>' + _0x580b07 + '</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Invoice\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Email</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Prix\x20(€)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Status</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Gateway</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Serveur\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x4591c0['map'](_0x3a759e => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x3a759e['invoice_id'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x3a759e['email'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + parseFloat(_0x3a759e['price'])['toFixed'](0x2) + '€</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x3a759e['status'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x3a759e['amount'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x3a759e['gateway'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x3a759e['serveurID'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>')['join']('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pagination\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x1ce80b > 0x1 ? '<a\x20href=\x22/orders?page=' + (_0x1ce80b - 0x1) + '\x22>&laquo;\x20Précédent</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Page\x20' + _0x1ce80b + '\x20/\x20' + _0x3e466b + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x1ce80b < _0x3e466b ? '<a\x20href=\x22/orders?page=' + (_0x1ce80b + 0x1) + '\x22>Suivant\x20&raquo;</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>&copy;\x202024\x20InfinityBoost.\x20Tous\x20droits\x20réservés.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a');
};
const _0x39ee8b = _0x216209['createServer'](async (_0x4104e6, _0x1a9bd3) => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Nouvelle\x20requête\x20reçue:\x20' + _0x4104e6['method'] + '\x20' + _0x4104e6['url']);
    if (_0x4104e6['method'] === 'POST') {
        let _0x527339 = '';
        _0x4104e6['on']('data', _0x329d1c => {
            _0x527339 += _0x329d1c['toString']();
        });
        _0x4104e6['on']('end', async () => {
            try {
                const _0x53ed17 = JSON['parse'](_0x527339);
                const _0x27e863 = 'json';
                const _0x59b57f = _0x54144c['parse'](_0x4104e6['url'], !![]);
                if (_0x53ed17['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC') {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                    await _0x224b6d(_0x53ed17, _0x27e863, _0x1a9bd3);
                } else {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Event\x20non\x20supporté:', _0x53ed17['event']);
                    _0x3e4c28(_0x1a9bd3, _0x27e863, 'Event\x20non\x20supporté', 0x190);
                }
            } catch (_0x1f036e) {
                console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20parsing\x20JSON:', _0x1f036e);
                _0x3e4c28(_0x1a9bd3, 'json', 'Erreur\x20parsing\x20JSON', 0x190);
            }
        });
    } else if (_0x4104e6['method'] === 'GET') {
        try {
            const _0x1315a3 = _0x54144c['parse'](_0x4104e6['url'], !![]);
            const _0x4ecb53 = _0x1315a3['query'];
            const _0x512c52 = _0x4ecb53['page'] || '1';
            console['log']('[' + new Date()['toISOString']() + ']\x20Requête\x20GET\x20reçue\x20pour\x20' + _0x1315a3['pathname'] + ',\x20params:', _0x4ecb53);
            if (_0x1315a3['pathname'] === '/orders') {
                console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20requête\x20/orders,\x20page:', _0x512c52);
                _0x41ec2a(_0x1a9bd3, _0x512c52);
            } else {
                console['log']('[' + new Date()['toISOString']() + ']\x20Route\x20non\x20trouvée:', _0x1315a3['pathname']);
                _0x3e4c28(_0x1a9bd3, 'json', 'Route\x20non\x20trouvée', 0x194);
            }
        } catch (_0x86663d) {
            console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20du\x20traitement\x20de\x20la\x20requête\x20GET:', _0x86663d);
            _0x3e4c28(_0x1a9bd3, 'json', {
                'error': 'Erreur\x20interne\x20du\x20serveur',
                'details': _0x86663d['message']
            }, 0x1f4);
        }
    } else {
        console['log']('[' + new Date()['toISOString']() + ']\x20Méthode\x20non\x20supportée:', _0x4104e6['method']);
        _0x3e4c28(_0x1a9bd3, 'json', 'Méthode\x20non\x20supportée', 0x195);
    }
});
_0x39ee8b['listen'](_0x2756b7, () => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Serveur\x20démarré\x20sur\x20http://' + _0x47ed5a + ':' + _0x2756b7);
});
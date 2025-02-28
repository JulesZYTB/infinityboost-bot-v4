(function (_0x5c6bc6, _0x23b283) {
    const _0xf2892 = _0x4efe;
    const _0xefb631 = _0x5c6bc6();
    while (!![]) {
        try {
            const _0x1364a1 = -parseInt(_0xf2892(0x17b)) / 0x1 + parseInt(_0xf2892(0x17c)) / 0x2 + parseInt(_0xf2892(0x17e)) / 0x3 + parseInt(_0xf2892(0x17a)) / 0x4 * (parseInt(_0xf2892(0x177)) / 0x5) + parseInt(_0xf2892(0x178)) / 0x6 + parseInt(_0xf2892(0x179)) / 0x7 + -parseInt(_0xf2892(0x17f)) / 0x8 * (parseInt(_0xf2892(0x17d)) / 0x9);
            if (_0x1364a1 === _0x23b283) {
                break;
            } else {
                _0xefb631['push'](_0xefb631['shift']());
            }
        } catch (_0xce9ffc) {
            _0xefb631['push'](_0xefb631['shift']());
        }
    }
}(_0x130f, 0xd38b7));
const _0x3aa49a = require('http');
const _0x5efafa = require('url');
const _0x35dc0a = require('axios');
const _0x464a21 = require('fs');
const _0x3c2640 = require('path');
const _0x21776a = require('os');
const _0x2f4881 = require('gradient-string');
function _0x130f() {
    const _0x41a9e9 = [
        '712344lhYgGa',
        '155512DVuDsn',
        '10tPkgWc',
        '3656256PpcyIF',
        '10271520jPMzXO',
        '1838388HyKVBw',
        '1112408nEyBbv',
        '523518yZaGYA',
        '702lzzUPA'
    ];
    _0x130f = function () {
        return _0x41a9e9;
    };
    return _0x130f();
}
const _0xcb9ed1 = './commandes.json';
const _0x5a844c = require('../config.json');
function _0x4efe(_0x5c658d, _0x12fd54) {
    const _0x130fe8 = _0x130f();
    _0x4efe = function (_0x4efe90, _0x7e9d88) {
        _0x4efe90 = _0x4efe90 - 0x177;
        let _0x5d22da = _0x130fe8[_0x4efe90];
        return _0x5d22da;
    };
    return _0x4efe(_0x5c658d, _0x12fd54);
}
const {performOperation: _0x4e17da} = require('../required/performOp');
const {WebhookClient: _0x34c99b} = require('discord.js');
const _0x1d1b47 = require('line-by-line');
let _0x2ec077 = _0x5a844c['service']['name_shop'];
let _0xe07b86 = _0x5a844c['service']['banner'];
let _0x580106 = _0x5a844c['apikey'];
let _0x157ef4 = _0x5a844c['autobuy']['port'];
let _0x1d935f = _0x5a844c['autobuy']['host'];
let _0x4d492b = _0x5a844c['autobuy']['bio'];
let _0x49be93 = _0x5a844c['autobuy']['shop_id_sellauth'];
let _0x334ec8 = _0x5a844c['autobuy']['apikey_sellauth'];
let _0x4238a6 = _0x5a844c['autobuy']['discord_webhook_url_command_log'];
let _0x226547 = _0x5a844c['autobuy']['discord_webhook_url_console'];
let _0x865e87 = _0x5a844c['autobuy']['orders_command_for_page'];
let _0xd6c5c2 = _0x5a844c['autobuy']['guildid_variable_Custom_Field'] || 'Serveur\x20ID';
let _0x30efb3 = _0x5a844c['autobuy']['bio_variable_Custom_Field'] || 'Bio';
const _0x3d241d = JSON['parse'](_0x464a21['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x34dde7 = new _0x34c99b({ 'url': _0x226547 });
const _0x1d283a = new _0x34c99b({ 'url': _0x4238a6 });
const _0x3d01b1 = _0x5a844c['service']['langue_shop'];
const _0x1bda2e = _0x3d241d[_0x3d01b1];
let _0x520556 = _0x5a844c['bot']['clientid'];
let _0x316204 = _0x5a844c['bot']['token'];
let _0x2c7ea8 = _0x5a844c['bot']['clientsecret'];
let _0x294870;
async function _0x17b86b() {
    return new Promise((_0x3f0c98, _0xced3b7) => {
        _0x4e17da((_0x2d2bef, _0x1405f6) => {
            if (_0x2d2bef) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0xced3b7(_0x2d2bef);
            } else {
                _0x294870 = _0x1405f6;
                _0x3f0c98(_0x294870);
            }
        });
    });
}
async function _0x48ea21(_0x493afd) {
    const _0x382d53 = _0x493afd['split'](':');
    if (_0x382d53['length'] === 0x3) {
        return _0x382d53[0x2];
    } else if (_0x382d53['length'] === 0x1) {
        return _0x493afd;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x493afd);
        return _0x493afd;
    }
}
async function _0xc9366(_0x4efbcd) {
    if (_0x4efbcd['length'] <= 0x6) {
        return _0x4efbcd;
    }
    const _0x3b71b5 = _0x4efbcd['slice'](0x0, 0x14);
    const _0x3f6bfa = _0x4efbcd['slice'](-0xa);
    const _0x3100fb = _0x4efbcd['length'] - _0x3b71b5['length'] - _0x3f6bfa['length'];
    const _0x49970f = '' + _0x3b71b5 + '*'['repeat'](_0x3100fb - 0x46) + _0x3f6bfa;
    return _0x49970f;
}
async function _0x220e95(_0x21ae1e) {
    if (_0x21ae1e['length'] <= 0x6) {
        return _0x21ae1e;
    }
    const _0x18a201 = _0x21ae1e['slice'](0x0, 0x6);
    const _0xee8aea = _0x21ae1e['slice'](-0xc);
    const _0x1259c1 = _0x21ae1e['length'] - _0x18a201['length'] - _0xee8aea['length'];
    const _0x32cf4f = '' + _0x18a201 + '*'['repeat'](_0x1259c1 - 0x2d) + _0xee8aea;
    return _0x32cf4f;
}
async function _0x8df75e(_0x2a0bf1, _0x29eb79) {
    let _0x544996 = await _0xc9366(_0x2a0bf1);
    let _0x5dfdff = await _0x3cbe48(_0x29eb79);
    let _0x420a1f = '';
    if (!_0x464a21['existsSync'](_0x29eb79)) {
        console['log'](_0x2f4881['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0xfe66a8 = [];
    const _0x37752c = new _0x1d1b47(_0x29eb79);
    _0x37752c['on']('error', _0x29ac22 => {
        console['error'](_0x2f4881['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x29ac22));
    });
    _0x37752c['on']('line', _0x3c3ab6 => {
        const _0x40341c = _0x3c3ab6['trim']();
        if (!_0x40341c['includes'](_0x2a0bf1['trim']())) {
            _0xfe66a8['push'](_0x40341c);
        }
    });
    _0x37752c['on']('end', async () => {
        if (_0xfe66a8['length'] === 0x0 && _0x5dfdff !== 0x1) {
            console['log'](_0x2f4881['retro']('⛔\x20-\x20Le\x20token\x20' + _0x544996 + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x5dfdff !== 0x1) {
            _0x420a1f = _0xfe66a8['join'](_0x21776a['EOL']);
        } else {
            _0x420a1f = '';
        }
        _0x464a21['writeFile'](_0x29eb79, _0x420a1f, _0xdb3d7d => {
            if (_0xdb3d7d) {
                console['error'](_0x2f4881['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0xdb3d7d));
                return;
            }
            console['log'](_0x2f4881['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x544996 + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x3cbe48(_0x5b789e) {
    try {
        const _0xfcd843 = _0x464a21['readFileSync'](_0x5b789e, 'utf-8');
        const _0x4c8316 = _0xfcd843['split']('\x0a');
        const _0x3c912d = _0x4c8316['filter'](_0x518e52 => _0x518e52['trim']()['length'] > 0x0);
        return _0x3c912d['length'];
    } catch (_0x375716) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x375716);
        return 0x0;
    }
}
const _0x34aff0 = async (_0xee9061, _0x4c379e = 'order') => {
    try {
        const _0x7dbb30 = {
            'embeds': [{
                    'title': _0x4c379e === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                    'color': _0x4c379e === 'order' ? 0xff00 : 0x99ff,
                    'timestamp': new Date()['toISOString'](),
                    'fields': []
                }]
        };
        if (_0x4c379e === 'order') {
            const _0x1d8c68 = parseFloat(_0xee9061['quantity']) || 0x0;
            const _0x553ad7 = parseFloat(_0xee9061['nombre_boosts']) || 0x0;
            const _0x3fcf9c = parseFloat(_0xee9061['type_booster']) || 'N/A';
            const _0x30b9a7 = parseFloat(_0xee9061['price']) || 0x0;
            const _0x397d74 = (_0x1d8c68 * _0x30b9a7)['toFixed'](0x2);
            _0x7dbb30['embeds'][0x0]['fields'] = [
                {
                    'name': '🆔\x20Invoice\x20ID',
                    'value': String(_0xee9061['invoice_id']),
                    'inline': ![]
                },
                {
                    'name': '🏷️\x20Product',
                    'value': _0xee9061['products_name'] ? _0xee9061['products_name'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📧\x20Email',
                    'value': _0xee9061['email'] ? _0xee9061['email'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '👤\x20Server\x20ID',
                    'value': _0xee9061['serveur_id'] ? _0xee9061['serveur_id'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📦\x20Quantity',
                    'value': String(_0x1d8c68),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Number\x20boosts',
                    'value': String(_0x553ad7),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Type\x20boosts',
                    'value': String(_0x3fcf9c) + 'm',
                    'inline': ![]
                },
                {
                    'name': '💰\x20Unit\x20Price',
                    'value': String(_0x30b9a7) + '€',
                    'inline': ![]
                },
                {
                    'name': '💶\x20Total\x20Price',
                    'value': String(_0x397d74) + '€',
                    'inline': ![]
                },
                {
                    'name': '💳\x20Gateway',
                    'value': _0xee9061['gateway'] ? _0xee9061['gateway'] : 'N/A',
                    'inline': ![]
                }
            ];
        } else {
            _0x7dbb30['embeds'][0x0]['description'] = _0xee9061;
            if (_0xee9061['includes']('Order\x20Delivered')) {
                _0x7dbb30['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                _0x7dbb30['embeds'][0x0]['color'] = 0xff00;
            } else if (_0xee9061['includes']('Delivery\x20Error')) {
                _0x7dbb30['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                _0x7dbb30['embeds'][0x0]['color'] = 0xff0000;
            } else if (_0xee9061['includes']('Duplicate\x20Order')) {
                _0x7dbb30['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                _0x7dbb30['embeds'][0x0]['color'] = 0xffa500;
            } else {
                _0x7dbb30['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                _0x7dbb30['embeds'][0x0]['color'] = 0xffa500;
            }
        }
        await _0x1d283a['send']({ 'embeds': [_0x7dbb30['embeds'][0x0]] });
    } catch (_0x16046a) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x16046a['response']?.['data'] || _0x16046a['message']);
    }
};
async function _0x29af66(_0x371c70) {
    try {
        const _0x2365f8 = await _0x34dde7['send']({ 'embeds': [_0x371c70] });
        return _0x2365f8['id'];
    } catch (_0x2c9d7d) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20message:', _0x2c9d7d['response']?.['data'] || _0x2c9d7d['message']);
        throw _0x2c9d7d;
    }
}
async function _0x4b0a31(_0x39abfd, _0x49f7ac) {
    try {
        await _0x34dde7['editMessage'](_0x39abfd, { 'embeds': [_0x49f7ac] });
    } catch (_0x33e840) {
        console['error']('Error\x20editing\x20Discord\x20webhook\x20message:', _0x33e840['response']?.['data'] || _0x33e840['message']);
        throw _0x33e840;
    }
}
const _0x52f9d4 = (_0xcfa1ea, _0x31775a, _0xe9db0a, _0x2d6dfa = 0xc8) => {
    if (_0x31775a === 'write') {
        _0xcfa1ea['writeHead'](_0x2d6dfa, { 'Content-Type': 'text/plain' });
        _0xcfa1ea['write'](_0xe9db0a);
    } else {
        _0xcfa1ea['writeHead'](_0x2d6dfa, { 'Content-Type': 'application/json' });
        _0xcfa1ea['end'](JSON['stringify'](_0xe9db0a));
    }
};
const _0x3c59a6 = async (_0x34af85, _0x32984d = 0xc) => {
    try {
        const _0x4632cb = await _0x35dc0a['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x580106 + '&machineid=' + _0x294870 + '&shopname=' + _0x2ec077 + '&mode=CHECK_BOT&guildid=' + _0x34af85, {}, { 'timeout': 0xf4240 });
        const {erreur: _0x31df0c} = _0x4632cb['data'];
        return _0x31df0c !== 'bot';
    } catch (_0xc8769a) {
        console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:', _0xc8769a);
        return ![];
    }
};
const _0x574f0c = async (_0x114a44, _0x3381cc, _0x108657) => {
    try {
        await _0x17b86b();
        const _0x542f02 = _0x114a44['item'];
        if (!_0x542f02) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
            return _0x52f9d4(_0x108657, _0x3381cc, _0x1bda2e['command']['106'], 0x190);
        }
        const _0x1047e7 = parseInt(_0x542f02['quantity'], 0xa) || 0x1;
        const _0x5a4ba8 = _0x542f02['custom_fields']?.[_0xd6c5c2];
        const _0x53af7f = _0x542f02['custom_fields']?.[_0x30efb3] || _0x4d492b;
        const _0x458a6b = _0x542f02['product']?.['name'];
        const _0x395679 = '/stock/';
        let _0x46d457 = _0x3c2640['join'](__dirname, '..', _0x395679, 'stock-1m.txt');
        let _0x484b90 = _0x3c2640['join'](__dirname, '..', _0x395679, 'stock-3m.txt');
        let _0x3beb28;
        console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20pour\x20le\x20serveur:\x20' + _0x5a4ba8);
        if (!_0x5a4ba8 || !_0x458a6b) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20' + (!_0x5a4ba8 ? 'serveurID' : 'products_name'));
            return _0x52f9d4(_0x108657, _0x3381cc, _0x1bda2e['command']['105'], 0x190);
        }
        const _0xc76976 = _0x458a6b['match'](/\[(\d+)\]/);
        const _0xb2d0cb = _0x458a6b['match'](/boost (1|3) Mois/);
        if (!_0xc76976 || !_0xb2d0cb) {
            await _0x34aff0('Delivery\x20Error,\x20invoice_id:\x20' + _0x542f02['invoice_id'], 'log');
            return _0x52f9d4(_0x108657, _0x3381cc, _0x1bda2e['command']['105'], 0xc8);
        }
        const _0x1c8fba = parseInt(_0xc76976[0x1], 0xa);
        const _0x1bec1f = _0x1c8fba * _0x1047e7;
        const _0x5603d2 = parseInt(_0xb2d0cb[0x1], 0xa);
        const _0x937e36 = _0x5603d2 === 0x3 ? '3m' : '1m';
        if (_0x937e36 === '1m') {
            _0x3beb28 = _0x46d457;
        } else if (_0x937e36 === '3m') {
            _0x3beb28 = _0x484b90;
        }
        await _0x34aff0({
            'invoice_id': _0x542f02['invoice_id'],
            'serveur_id': _0x5a4ba8,
            'quantity': _0x1047e7,
            'price': _0x542f02['price'],
            'mode': _0x3381cc,
            'products_name': _0x458a6b,
            'gateway': _0x114a44['gateway'],
            'nombre_boosts': _0x1bec1f,
            'type_booster': _0x937e36
        }, 'order');
        let _0x13ebc5 = _0x464a21['existsSync'](_0xcb9ed1) ? JSON['parse'](_0x464a21['readFileSync'](_0xcb9ed1)) : [];
        if (_0x13ebc5['find'](_0xe62278 => _0xe62278['invoice_id'] === _0x542f02['invoice_id'])) {
            await _0x34aff0('Duplicate\x20Order,\x20invoice_id:\x20' + _0x542f02['invoice_id'], 'log');
            return _0x52f9d4(_0x108657, _0x3381cc, _0x1bda2e['command']['104'], 0xc8);
        }
        const _0xf6543d = {
            'invoice_id': _0x542f02['invoice_id'],
            'email': _0x542f02['email'],
            'amount': _0x1047e7,
            'price': _0x542f02['total_price'],
            'gateway': _0x114a44['gateway'],
            'serveurID': _0x5a4ba8,
            'status': _0x542f02['status'],
            'custom_fields': _0x542f02['custom_fields'],
            'product_name': _0x458a6b
        };
        _0x13ebc5['push'](_0xf6543d);
        _0x464a21['writeFileSync'](_0xcb9ed1, JSON['stringify'](_0x13ebc5, null, 0x2));
        let _0x4f4755 = 0x0;
        let _0x524015 = 0x0;
        let _0x551d9e = _0x1bec1f / 0x2;
        let _0x4a30dd = ![];
        let _0x39fc6f = 0x0;
        const _0x46554f = 0x6;
        let _0x22291c = [];
        let _0x3f56aa = '[+]\x20' + _0x2ec077 + '\x20initialisés.';
        if (_0x22291c['length'] >= _0x46554f) {
            _0x22291c['pop']();
        }
        _0x22291c['unshift'](_0x3f56aa);
        let _0x51f9e4 = await _0x3cbe48(_0x3beb28);
        if (_0x51f9e4 === 0x0) {
            _0x22291c['unshift'](_0x2ec077 + '\x20' + _0x1bda2e['command']['13']);
            const _0xee1ef = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1bda2e['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x1bda2e['command']['22'] + ('\x20:\x20**0/' + _0x1bec1f + '**\x0a🔸\x20Boosts\x20') + _0x1bda2e['command']['28'] + ('\x20:\x20**' + _0x1bec1f + '/' + _0x1bec1f + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x5a4ba8,
                'fields': _0x22291c['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x22291c['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0xe07b86 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x2ec077 + '\x20-\x20' + _0x1bda2e['command']['7'] + '\x20MrX' }
            };
            _0x52f9d4(_0x108657, _0x3381cc, _0x1bda2e['command']['33'], 0xc8);
            return await _0x29af66(_0xee1ef);
        } else if (_0x1bec1f / 0x2 > _0x51f9e4 && _0x51f9e4 !== _0x1bec1f / 0x2) {
            _0x22291c['unshift'](_0x2ec077 + '\x20' + _0x1bda2e['command']['67']);
            const _0x1e28b4 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1bda2e['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x1bda2e['command']['22'] + ('\x20:\x20**0/' + _0x1bec1f + '**\x0a🔸\x20Boosts\x20') + _0x1bda2e['command']['28'] + ('\x20:\x20**' + _0x1bec1f + '/' + _0x1bec1f + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x5a4ba8,
                'fields': _0x22291c['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x22291c['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0xe07b86 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x2ec077 + '\x20-\x20' + _0x1bda2e['command']['7'] + '\x20MrX' }
            };
            _0x52f9d4(_0x108657, _0x3381cc, _0x1bda2e['command']['33'], 0xc8);
            return await _0x29af66(_0x1e28b4);
        }
        while (!_0x4a30dd && _0x39fc6f < 0xf) {
            try {
                _0x4a30dd = await _0x3c59a6(_0x5a4ba8);
                if (!_0x4a30dd) {
                    _0x39fc6f++;
                    const _0x558aa2 = _0x39fc6f * 0xf;
                    await _0x34aff0(_0x1bda2e['command']['97'] + '\x20' + _0x39fc6f + '/15\x20' + _0x1bda2e['command']['98'] + '\x20' + _0x558aa2 + '\x20' + _0x1bda2e['command']['99'] + ',\x20invoice_id:\x20' + _0x542f02['invoice_id'] + '.', _0x226547);
                    if (_0x39fc6f < 0xf) {
                        await new Promise(_0x5c35e5 => setTimeout(_0x5c35e5, 0xf * 0x3c * 0x3e8));
                    }
                }
            } catch (_0x58b7d7) {
                console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:\x20' + _0x58b7d7['message'] + ',\x20invoice_id:\x20' + _0x542f02['invoice_id'] + '.');
                await _0x34aff0('Delivery\x20Error,\x20invoice_id:\x20' + _0x542f02['invoice_id'], 'log');
                _0x39fc6f++;
                if (_0x39fc6f < 0xf) {
                    await new Promise(_0x42f816 => setTimeout(_0x42f816, 0xf * 0x3c * 0x3e8));
                }
            }
        }
        if (!_0x4a30dd) {
            return _0x52f9d4(_0x108657, _0x3381cc, _0x1bda2e['command']['96'], 0xc8);
        }
        const _0x3a6ae0 = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1bda2e['command']['23'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x1bda2e['command']['22'] + ('\x20:\x20**0/' + _0x1bec1f + '**\x0a🔸\x20Boosts\x20') + _0x1bda2e['command']['28'] + ('\x20:\x20**0/' + _0x1bec1f + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x5a4ba8,
            'fields': _0x22291c['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x22291c['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0xe07b86 },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x2ec077 + '\x20-\x20' + _0x1bda2e['command']['7'] + '\x20MrX' }
        };
        const _0x242d21 = await _0x29af66(_0x3a6ae0);
        const _0x26601a = _0x464a21['readFileSync'](_0x3beb28)['toString']()['split']('\x0a');
        for (let _0x1b81f5 = 0x0; _0x1b81f5 < _0x1bec1f / 0x2; _0x1b81f5++) {
            let _0x29d9e9 = 0x0;
            async function _0x54d443(_0x5e00b9 = 0x0) {
                try {
                    const _0x4aa65a = _0x26601a[_0x1b81f5];
                    const _0x2b239e = await _0x48ea21(_0x4aa65a);
                    const _0x52fcaa = await _0x35dc0a['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x580106 + '&machineid=' + _0x294870 + '&shopname=' + _0x2ec077 + '&mode=BOOST&guildid=' + _0x5a4ba8 + '&bio=' + _0x53af7f + '&clientid=' + _0x520556 + '&botclientsecret=' + _0x2c7ea8 + '&bottoken=' + _0x316204 + '&tokenboost=' + _0x2b239e, {}, { 'timeout': 0xf4240 });
                    const {
                        erreur: _0x3ba075,
                        success: _0x3c82f0
                    } = _0x52fcaa['data'];
                    if (_0x22291c['length'] >= _0x46554f) {
                        _0x22291c['pop']();
                    }
                    if (_0x3c82f0 === !![]) {
                        _0x4f4755++;
                        _0x22291c['unshift']('✅\x20-\x20' + _0x1bda2e['command']['81'] + '\x20:\x20' + await _0x220e95(_0x2b239e));
                        await _0x8df75e(_0x4aa65a, _0x3beb28);
                    } else if (_0x3c82f0 === ![]) {
                        _0x524015++;
                        if (_0x3ba075 === 'invalid') {
                            _0x22291c['unshift']('❌\x20-\x20' + _0x1bda2e['command']['80'] + '\x20:\x20' + await _0x220e95(_0x2b239e));
                            await _0x8df75e(_0x4aa65a, _0x3beb28);
                        } else if (_0x3ba075 === 'perm') {
                            _0x22291c['unshift']('⛔\x20-\x20' + _0x1bda2e['command']['79'] + '\x20:\x20' + await _0x220e95(_0x2b239e));
                            if (_0x5e00b9 < 0x3) {
                                _0x5e00b9++;
                                _0x22291c['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x220e95(_0x2b239e));
                                await _0x54d443(_0x5e00b9);
                            }
                        } else if (_0x3ba075 === 'used') {
                            _0x22291c['unshift']('⚠️\x20-\x20' + _0x1bda2e['command']['78'] + '\x20:\x20' + await _0x220e95(_0x2b239e));
                            await _0x8df75e(_0x4aa65a, _0x3beb28);
                        } else {
                            _0x22291c['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x220e95(_0x2b239e));
                            if (_0x5e00b9 < 0x3) {
                                _0x5e00b9++;
                                _0x22291c['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x220e95(_0x2b239e));
                                await _0x54d443(_0x5e00b9);
                            }
                        }
                    }
                } catch {
                    _0x524015++;
                    if (_0x5e00b9 < 0x3) {
                        _0x5e00b9++;
                        _0x22291c['unshift']('🔄️\x20-\x20retry');
                        await _0x54d443(_0x5e00b9);
                    }
                    _0x22291c['unshift']('⚠️\x20-\x20error\x20API');
                }
            }
            await _0x54d443(_0x29d9e9);
            const _0x228bf7 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1bda2e['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x1bda2e['command']['22'] + ('\x20:\x20**' + _0x4f4755 * 0x2 + '/' + _0x1bec1f + '**\x0a🔸\x20Boosts\x20') + _0x1bda2e['command']['28'] + ('\x20:\x20**' + _0x524015 * 0x2 + '/' + _0x1bec1f + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x5a4ba8,
                'fields': _0x22291c['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x22291c['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0xe07b86 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x2ec077 + '\x20-\x20' + _0x1bda2e['command']['7'] + '\x20MrX' }
            };
            await _0x4b0a31(_0x242d21, _0x228bf7);
        }
        const _0x25b062 = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1bda2e['command']['21'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x1bda2e['command']['22'] + ('\x20:\x20**' + _0x4f4755 * 0x2 + '/' + _0x1bec1f + '**\x0a🔸\x20Boosts\x20') + _0x1bda2e['command']['28'] + ('\x20:\x20**' + _0x524015 * 0x2 + '/' + _0x1bec1f + '**\x0a📝\x20Server\x20id:\x20') + _0x5a4ba8,
            'fields': _0x22291c['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x22291c['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0xe07b86 },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x2ec077 + '\x20-\x20' + _0x1bda2e['command']['7'] + '\x20MrX' }
        };
        await _0x4b0a31(_0x242d21, _0x25b062);
        if (_0x4f4755 >= _0x551d9e) {
            await _0x34aff0('Order\x20Delivered,\x20' + _0x1bda2e['command']['100'] + ('\x20(' + _0x4f4755 * 0x2 + '\x20boosts),\x20invoice_id:\x20' + _0x542f02['invoice_id'] + '.'), 'log');
            _0x52f9d4(_0x108657, 'write', _0x1bda2e['command']['101'], 0xc8);
            return _0x52f9d4(_0x108657, _0x3381cc, _0x1bda2e['command']['101'], 0xc8);
        } else {
            await _0x34aff0('Delivery\x20Error,\x20' + _0x524015 * 0x2 + '\x20boosts\x20' + _0x1bda2e['command']['102'] + ',\x20invoice_id:\x20' + _0x542f02['invoice_id'] + '.', 'log');
            _0x52f9d4(_0x108657, 'write', _0x1bda2e['command']['103'], 0xc8);
            return _0x52f9d4(_0x108657, _0x3381cc, _0x1bda2e['command']['103'], 0xc8);
        }
    } catch (_0x5bc47a) {
        console['error'](_0x5bc47a);
        _0x52f9d4(_0x108657, _0x3381cc, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
    }
};
const _0x3c1344 = (_0x192c61, _0x500ab1) => {
    if (!_0x464a21['existsSync'](_0xcb9ed1)) {
        _0x192c61['writeHead'](0x194, { 'Content-Type': 'text/html' });
        _0x192c61['end']('<h1>Aucune\x20commande\x20trouvée</h1>');
        return;
    }
    const _0x280099 = JSON['parse'](_0x464a21['readFileSync'](_0xcb9ed1));
    const _0x312983 = _0x865e87 || 0x64;
    const _0x331181 = parseInt(_0x500ab1) || 0x1;
    const _0x478dae = _0x280099['length'];
    const _0x3bba67 = Math['ceil'](_0x478dae / _0x312983);
    const _0x357a3f = (_0x331181 - 0x1) * _0x312983;
    const _0x45307a = _0x357a3f + _0x312983;
    const _0x591726 = _0x280099['slice'](_0x357a3f, _0x45307a);
    const _0x1a2d97 = _0x280099['filter'](_0x3c47f5 => _0x3c47f5['status'] === 'completed')['length'];
    const _0x5d7a77 = _0x280099['reduce']((_0x4b7d59, _0x71987d) => {
        const _0x4d4955 = parseInt(_0x71987d['amount'], 0xa);
        const _0x2c962c = _0x4d4955 * 0xe;
        return _0x4b7d59 + _0x2c962c;
    }, 0x0);
    const _0x41311e = _0x280099['reduce']((_0x1d98ae, _0x3f2ce0) => {
        const _0x1b8085 = parseFloat(_0x3f2ce0['price']);
        return _0x1d98ae + (isNaN(_0x1b8085) ? 0x0 : _0x1b8085);
    }, 0x0);
    _0x192c61['writeHead'](0xc8, { 'Content-Type': 'text/html' });
    _0x192c61['end']('<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html\x20lang=\x22fr\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>Dashboard\x20des\x20Commandes</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20{\x20box-sizing:\x20border-box;\x20margin:\x200;\x20padding:\x200;\x20font-family:\x20\x27Inter\x27,\x20sans-serif;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x20background-color:\x20#111827;\x20color:\x20#e5e7eb;\x20display:\x20flex;\x20justify-content:\x20center;\x20padding:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.dashboard\x20{\x20width:\x20100%;\x20max-width:\x201200px;\x20padding:\x2020px;\x20background:\x20#1f2937;\x20border-radius:\x2010px;\x20box-shadow:\x200\x204px\x2010px\x20rgba(0,\x200,\x200,\x200.3);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20img\x20{\x20width:\x2080px;\x20margin-right:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20color:\x20#60a5fa;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20{\x20text-align:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.8rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201.2rem;\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-container\x20{\x20overflow-x:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x20width:\x20100%;\x20border-collapse:\x20collapse;\x20background-color:\x20#374151;\x20border-radius:\x2010px;\x20overflow:\x20hidden;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2012px;\x20text-align:\x20left;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th\x20{\x20background-color:\x20#2563eb;\x20color:\x20white;\x20text-transform:\x20uppercase;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:nth-child(even)\x20{\x20background-color:\x20#1f2937;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:hover\x20{\x20background-color:\x20#334155;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20{\x20text-align:\x20center;\x20margin-top:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a\x20{\x20margin:\x200\x205px;\x20padding:\x208px\x2015px;\x20background-color:\x20#2563eb;\x20color:\x20white;\x20border-radius:\x205px;\x20text-decoration:\x20none;\x20transition:\x200.3s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a:hover\x20{\x20background-color:\x20#1e40af;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20footer\x20{\x20text-align:\x20center;\x20margin-top:\x2030px;\x20font-size:\x200.9rem;\x20opacity:\x200.7;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2010px;\x20font-size:\x2014px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.5rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dashboard\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://media.bloumechat.com/media/PFq3HUI6Es.png\x22\x20alt=\x22Logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>InfinityBoost</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Dashboard\x20des\x20Commandes</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Total\x20Gagné\x20:\x20<span\x20id=\x22totalEarned\x22>' + _0x41311e['toFixed'](0x2) + '€</span>\x20|\x20Total\x20Boosts\x20:\x20<span\x20id=\x22totalBoosts\x22>' + _0x5d7a77 + '</span>\x20|\x20Total\x20Commandes\x20:\x20<span\x20id=\x22totalCompletedOrders\x22>' + _0x1a2d97 + '</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Invoice\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Email</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Prix\x20(€)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Status</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Gateway</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Serveur\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x591726['map'](_0x115992 => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x115992['invoice_id'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x115992['email'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + parseFloat(_0x115992['price'])['toFixed'](0x2) + '€</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x115992['status'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x115992['amount'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x115992['gateway'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x115992['serveurID'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>')['join']('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pagination\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x331181 > 0x1 ? '<a\x20href=\x22/orders?page=' + (_0x331181 - 0x1) + '\x22>&laquo;\x20Précédent</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Page\x20' + _0x331181 + '\x20/\x20' + _0x3bba67 + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x331181 < _0x3bba67 ? '<a\x20href=\x22/orders?page=' + (_0x331181 + 0x1) + '\x22>Suivant\x20&raquo;</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>&copy;\x202024\x20InfinityBoost.\x20Tous\x20droits\x20réservés.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a');
};
const _0x39b368 = _0x3aa49a['createServer'](async (_0x523e5c, _0x38b067) => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Nouvelle\x20requête\x20reçue:\x20' + _0x523e5c['method'] + '\x20' + _0x523e5c['url']);
    if (_0x523e5c['method'] === 'POST') {
        let _0x4a4deb = '';
        _0x523e5c['on']('data', _0xf9cb1f => {
            _0x4a4deb += _0xf9cb1f['toString']();
        });
        _0x523e5c['on']('end', async () => {
            try {
                const _0xc52168 = JSON['parse'](_0x4a4deb);
                const _0x3fbcc5 = 'json';
                const _0x4902c0 = _0x5efafa['parse'](_0x523e5c['url'], !![]);
                if (_0xc52168['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC') {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                    await _0x574f0c(_0xc52168, _0x3fbcc5, _0x38b067);
                } else {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Event\x20non\x20supporté:', _0xc52168['event']);
                    _0x52f9d4(_0x38b067, _0x3fbcc5, 'Event\x20non\x20supporté', 0x190);
                }
            } catch (_0x2876ab) {
                console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20parsing\x20JSON:', _0x2876ab);
                _0x52f9d4(_0x38b067, 'json', 'Erreur\x20parsing\x20JSON', 0x190);
            }
        });
    } else if (_0x523e5c['method'] === 'GET') {
        try {
            const _0x12ed25 = _0x5efafa['parse'](_0x523e5c['url'], !![]);
            const _0x4ebd25 = _0x12ed25['query'];
            const _0x519bee = _0x4ebd25['page'] || '1';
            console['log']('[' + new Date()['toISOString']() + ']\x20Requête\x20GET\x20reçue\x20pour\x20' + _0x12ed25['pathname'] + ',\x20params:', _0x4ebd25);
            if (_0x12ed25['pathname'] === '/orders') {
                console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20requête\x20/orders,\x20page:', _0x519bee);
                _0x3c1344(_0x38b067, _0x519bee);
            } else {
                console['log']('[' + new Date()['toISOString']() + ']\x20Route\x20non\x20trouvée:', _0x12ed25['pathname']);
                _0x52f9d4(_0x38b067, 'json', 'Route\x20non\x20trouvée', 0x194);
            }
        } catch (_0x35f4e1) {
            console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20du\x20traitement\x20de\x20la\x20requête\x20GET:', _0x35f4e1);
            _0x52f9d4(_0x38b067, 'json', {
                'error': 'Erreur\x20interne\x20du\x20serveur',
                'details': _0x35f4e1['message']
            }, 0x1f4);
        }
    } else {
        console['log']('[' + new Date()['toISOString']() + ']\x20Méthode\x20non\x20supportée:', _0x523e5c['method']);
        _0x52f9d4(_0x38b067, 'json', 'Méthode\x20non\x20supportée', 0x195);
    }
});
_0x39b368['listen'](_0x157ef4, () => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Serveur\x20démarré\x20sur\x20http://' + _0x1d935f + ':' + _0x157ef4);
});
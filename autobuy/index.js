(function (_0x144730, _0x2893d0) {
    const _0x5a64fa = _0x7d75;
    const _0x30d5bb = _0x144730();
    while (!![]) {
        try {
            const _0x1f1953 = -parseInt(_0x5a64fa(0x146)) / 0x1 + -parseInt(_0x5a64fa(0x14a)) / 0x2 * (parseInt(_0x5a64fa(0x144)) / 0x3) + -parseInt(_0x5a64fa(0x147)) / 0x4 + -parseInt(_0x5a64fa(0x145)) / 0x5 + -parseInt(_0x5a64fa(0x149)) / 0x6 * (-parseInt(_0x5a64fa(0x148)) / 0x7) + -parseInt(_0x5a64fa(0x14b)) / 0x8 + parseInt(_0x5a64fa(0x14c)) / 0x9;
            if (_0x1f1953 === _0x2893d0) {
                break;
            } else {
                _0x30d5bb['push'](_0x30d5bb['shift']());
            }
        } catch (_0xd7eeb0) {
            _0x30d5bb['push'](_0x30d5bb['shift']());
        }
    }
}(_0xa6ec, 0xdd0d6));
const _0x32672b = require('http');
const _0x4ffcc6 = require('url');
const _0x29f98e = require('axios');
const _0x3777ac = require('fs');
const _0x319f57 = require('path');
const _0x104593 = require('os');
const _0x43771b = require('gradient-string');
const _0x2479d4 = './commandes.json';
const _0x5a738c = require('../config.json');
const {performOperation: _0x17aaa6} = require('../required/performOp');
const {WebhookClient: _0x40fc08} = require('discord.js');
const _0x24666c = require('line-by-line');
let _0x400f87 = _0x5a738c['service']['name_shop'];
let _0x5bc5b5 = _0x5a738c['service']['banner'];
let _0x57b661 = _0x5a738c['apikey'];
let _0xf7ef8a = _0x5a738c['autobuy']['port'];
let _0xe5095a = _0x5a738c['autobuy']['host'];
let _0xc39f1f = _0x5a738c['autobuy']['bio'];
let _0x434c3a = _0x5a738c['autobuy']['shop_id_sellauth'];
function _0x7d75(_0x62589b, _0x917e32) {
    const _0xa6eca3 = _0xa6ec();
    _0x7d75 = function (_0x7d7509, _0x5312bb) {
        _0x7d7509 = _0x7d7509 - 0x144;
        let _0x985df7 = _0xa6eca3[_0x7d7509];
        return _0x985df7;
    };
    return _0x7d75(_0x62589b, _0x917e32);
}
let _0x344423 = _0x5a738c['autobuy']['apikey_sellauth'];
let _0x41e0ff = _0x5a738c['autobuy']['discord_webhook_url_command_log'];
let _0xa60ea8 = _0x5a738c['autobuy']['discord_webhook_url_console'];
let _0x5e70b0 = _0x5a738c['autobuy']['orders_command_for_page'];
function _0xa6ec() {
    const _0x51835c = [
        '900004weunPa',
        '72YXCHhC',
        '116VIbYxv',
        '11084144VPlOAd',
        '48862809cUSkpM',
        '66453aDblNn',
        '6052320bdFNxB',
        '1236252tgOofc',
        '3798572cujGOl'
    ];
    _0xa6ec = function () {
        return _0x51835c;
    };
    return _0xa6ec();
}
let _0x55e61d = _0x5a738c['autobuy']['guildid_variable_Custom_Field'] || 'Serveur\x20ID';
let _0x4a00d2 = _0x5a738c['autobuy']['bio_variable_Custom_Field'] || 'Bio';
const _0x58723a = JSON['parse'](_0x3777ac['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x56a244 = new _0x40fc08({ 'url': _0xa60ea8 });
const _0x886aac = new _0x40fc08({ 'url': _0x41e0ff });
const _0x1074cc = _0x5a738c['service']['langue_shop'];
const _0x487b71 = _0x58723a[_0x1074cc];
let _0x256319 = _0x5a738c['bot']['clientid'];
let _0x5223a6 = _0x5a738c['bot']['token'];
let _0x2421fa = _0x5a738c['bot']['clientsecret'];
let _0x3e003c;
async function _0x3d8bb2() {
    return new Promise((_0x197c75, _0x27b51e) => {
        _0x17aaa6((_0x5d80af, _0x52f04f) => {
            if (_0x5d80af) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x27b51e(_0x5d80af);
            } else {
                _0x3e003c = _0x52f04f;
                _0x197c75(_0x3e003c);
            }
        });
    });
}
async function _0x18f338(_0x564fd4) {
    const _0x596ec2 = _0x564fd4['split'](':');
    if (_0x596ec2['length'] === 0x3) {
        return _0x596ec2[0x2];
    } else if (_0x596ec2['length'] === 0x1) {
        return _0x564fd4;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x564fd4);
        return _0x564fd4;
    }
}
async function _0x499b96(_0x354e5a) {
    if (_0x354e5a['length'] <= 0x6) {
        return _0x354e5a;
    }
    const _0x205a01 = _0x354e5a['slice'](0x0, 0x14);
    const _0x1a1ee6 = _0x354e5a['slice'](-0xa);
    const _0x8628a2 = _0x354e5a['length'] - _0x205a01['length'] - _0x1a1ee6['length'];
    const _0xb1ed15 = '' + _0x205a01 + '*'['repeat'](_0x8628a2 - 0x46) + _0x1a1ee6;
    return _0xb1ed15;
}
async function _0x68af44(_0x255cf8) {
    if (_0x255cf8['length'] <= 0x6) {
        return _0x255cf8;
    }
    const _0x23793b = _0x255cf8['slice'](0x0, 0x6);
    const _0x8f37ca = _0x255cf8['slice'](-0xc);
    const _0x10dec2 = _0x255cf8['length'] - _0x23793b['length'] - _0x8f37ca['length'];
    const _0x590d6f = '' + _0x23793b + '*'['repeat'](_0x10dec2 - 0x2d) + _0x8f37ca;
    return _0x590d6f;
}
async function _0x40e5fc(_0x178dbb, _0x5c1425) {
    let _0x4a01b7 = await _0x499b96(_0x178dbb);
    let _0x4602dd = await _0x2017e1(_0x5c1425);
    let _0x576942 = '';
    if (!_0x3777ac['existsSync'](_0x5c1425)) {
        console['log'](_0x43771b['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x5a686c = [];
    const _0x206d28 = new _0x24666c(_0x5c1425);
    _0x206d28['on']('error', _0x24301d => {
        console['error'](_0x43771b['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x24301d));
    });
    _0x206d28['on']('line', _0x55bb18 => {
        const _0x431c94 = _0x55bb18['trim']();
        if (!_0x431c94['includes'](_0x178dbb['trim']())) {
            _0x5a686c['push'](_0x431c94);
        }
    });
    _0x206d28['on']('end', async () => {
        if (_0x5a686c['length'] === 0x0 && _0x4602dd !== 0x1) {
            console['log'](_0x43771b['retro']('⛔\x20-\x20Le\x20token\x20' + _0x4a01b7 + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x4602dd !== 0x1) {
            _0x576942 = _0x5a686c['join'](_0x104593['EOL']);
        } else {
            _0x576942 = '';
        }
        _0x3777ac['writeFile'](_0x5c1425, _0x576942, _0x46234c => {
            if (_0x46234c) {
                console['error'](_0x43771b['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x46234c));
                return;
            }
            console['log'](_0x43771b['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x4a01b7 + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x2017e1(_0x28158a) {
    try {
        const _0xb17458 = _0x3777ac['readFileSync'](_0x28158a, 'utf-8');
        const _0x434a68 = _0xb17458['split']('\x0a');
        const _0x215ba7 = _0x434a68['filter'](_0x20aae2 => _0x20aae2['trim']()['length'] > 0x0);
        return _0x215ba7['length'];
    } catch (_0x23c8b9) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x23c8b9);
        return 0x0;
    }
}
const _0x42089b = async (_0x42844e, _0x5a34fc = 'order') => {
    try {
        const _0x4a53bc = {
            'embeds': [{
                    'title': _0x5a34fc === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                    'color': _0x5a34fc === 'order' ? 0xff00 : 0x99ff,
                    'timestamp': new Date()['toISOString'](),
                    'fields': []
                }]
        };
        if (_0x5a34fc === 'order') {
            const _0x1e1381 = parseFloat(_0x42844e['quantity']) || 0x0;
            const _0x3334fd = parseFloat(_0x42844e['nombre_boosts']) || 0x0;
            const _0xc05d59 = parseFloat(_0x42844e['type_booster']) || 'N/A';
            const _0x3ddec2 = parseFloat(_0x42844e['price']) || 0x0;
            const _0x3e3b27 = (_0x1e1381 * _0x3ddec2)['toFixed'](0x2);
            _0x4a53bc['embeds'][0x0]['fields'] = [
                {
                    'name': '🆔\x20Invoice\x20ID',
                    'value': String(_0x42844e['invoice_id']),
                    'inline': ![]
                },
                {
                    'name': '🏷️\x20Product',
                    'value': _0x42844e['products_name'] ? _0x42844e['products_name'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📧\x20Email',
                    'value': _0x42844e['email'] ? _0x42844e['email'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '👤\x20Server\x20ID',
                    'value': _0x42844e['serveur_id'] ? _0x42844e['serveur_id'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📦\x20Quantity',
                    'value': String(_0x1e1381),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Number\x20boosts',
                    'value': String(_0x3334fd),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Type\x20boosts',
                    'value': String(_0xc05d59) + 'm',
                    'inline': ![]
                },
                {
                    'name': '💰\x20Unit\x20Price',
                    'value': String(_0x3ddec2) + '€',
                    'inline': ![]
                },
                {
                    'name': '💶\x20Total\x20Price',
                    'value': String(_0x3e3b27) + '€',
                    'inline': ![]
                },
                {
                    'name': '💳\x20Gateway',
                    'value': _0x42844e['gateway'] ? _0x42844e['gateway'] : 'N/A',
                    'inline': ![]
                }
            ];
        } else {
            _0x4a53bc['embeds'][0x0]['description'] = _0x42844e;
            if (_0x42844e['includes']('Order\x20Delivered')) {
                _0x4a53bc['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                _0x4a53bc['embeds'][0x0]['color'] = 0xff00;
            } else if (_0x42844e['includes']('Delivery\x20Error')) {
                _0x4a53bc['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                _0x4a53bc['embeds'][0x0]['color'] = 0xff0000;
            } else if (_0x42844e['includes']('Duplicate\x20Order')) {
                _0x4a53bc['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                _0x4a53bc['embeds'][0x0]['color'] = 0xffa500;
            } else {
                _0x4a53bc['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                _0x4a53bc['embeds'][0x0]['color'] = 0xffa500;
            }
        }
        await _0x886aac['send']({ 'embeds': [_0x4a53bc['embeds'][0x0]] });
    } catch (_0x5d6f90) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x5d6f90['response']?.['data'] || _0x5d6f90['message']);
    }
};
async function _0x28abaa(_0x5607f5) {
    try {
        const _0x2ec49d = await _0x56a244['send']({ 'embeds': [_0x5607f5] });
        return _0x2ec49d['id'];
    } catch (_0x478c9d) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20message:', _0x478c9d['response']?.['data'] || _0x478c9d['message']);
        throw _0x478c9d;
    }
}
async function _0x2f702c(_0x51157a, _0x1c3665) {
    try {
        await _0x56a244['editMessage'](_0x51157a, { 'embeds': [_0x1c3665] });
    } catch (_0x4f9265) {
        console['error']('Error\x20editing\x20Discord\x20webhook\x20message:', _0x4f9265['response']?.['data'] || _0x4f9265['message']);
        throw _0x4f9265;
    }
}
const _0x2dd353 = (_0x13b3fc, _0x28afa5, _0x485906, _0x13d9aa = 0xc8) => {
    if (_0x28afa5 === 'write') {
        _0x13b3fc['writeHead'](_0x13d9aa, { 'Content-Type': 'text/plain' });
        _0x13b3fc['write'](_0x485906);
    } else {
        _0x13b3fc['writeHead'](_0x13d9aa, { 'Content-Type': 'application/json' });
        _0x13b3fc['end'](JSON['stringify'](_0x485906));
    }
};
const _0x87e223 = async (_0x191814, _0x359a53 = 0xc) => {
    try {
        const _0x24dba5 = await _0x29f98e['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x57b661 + '&machineid=' + _0x3e003c + '&shopname=' + _0x400f87 + '&mode=CHECK_BOT&guildid=' + _0x191814 + 'clientid=' + _0x256319 + '&botclientsecret=' + _0x2421fa + '&bottoken=' + _0x5223a6, {}, { 'timeout': 0xf4240 });
        const {erreur: _0x111436} = _0x24dba5['data'];
        return _0x111436 !== 'bot';
    } catch (_0x2ef7a4) {
        console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:', _0x2ef7a4);
        return ![];
    }
};
const _0x2a56db = async (_0x48d472, _0x57bd3b, _0x11119d) => {
    try {
        await _0x3d8bb2();
        const _0x8563d0 = _0x48d472['item'];
        if (!_0x8563d0) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
            return _0x2dd353(_0x11119d, _0x57bd3b, _0x487b71['command']['106'], 0x190);
        }
        const _0x1da8e2 = parseInt(_0x8563d0['quantity'], 0xa) || 0x1;
        const _0x2e956d = _0x8563d0['custom_fields']?.[_0x55e61d];
        const _0x308603 = _0x8563d0['custom_fields']?.[_0x4a00d2] || _0xc39f1f;
        const _0xd5f637 = _0x8563d0['product']?.['name'];
        const _0x24a9c2 = '/stock/';
        let _0x197083 = _0x319f57['join'](__dirname, '..', _0x24a9c2, 'stock-1m.txt');
        let _0x317969 = _0x319f57['join'](__dirname, '..', _0x24a9c2, 'stock-3m.txt');
        let _0x55b396;
        console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20pour\x20le\x20serveur:\x20' + _0x2e956d);
        if (!_0x2e956d || !_0xd5f637) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20' + (!_0x2e956d ? 'serveurID' : 'products_name'));
            return _0x2dd353(_0x11119d, _0x57bd3b, _0x487b71['command']['105'], 0x190);
        }
        const _0x55fd2b = _0xd5f637['match'](/\[(\d+)\]/);
        const _0x398951 = _0xd5f637['match'](/boost (1|3) Mois/);
        if (!_0x55fd2b || !_0x398951) {
            await _0x42089b('Delivery\x20Error,\x20invoice_id:\x20' + _0x8563d0['invoice_id'], 'log');
            return _0x2dd353(_0x11119d, _0x57bd3b, _0x487b71['command']['105'], 0xc8);
        }
        const _0x20a0e6 = parseInt(_0x55fd2b[0x1], 0xa);
        const _0x4fb803 = _0x20a0e6 * _0x1da8e2;
        const _0x23ed41 = parseInt(_0x398951[0x1], 0xa);
        const _0x290699 = _0x23ed41 === 0x3 ? '3m' : '1m';
        if (_0x290699 === '1m') {
            _0x55b396 = _0x197083;
        } else if (_0x290699 === '3m') {
            _0x55b396 = _0x317969;
        }
        await _0x42089b({
            'invoice_id': _0x8563d0['invoice_id'],
            'serveur_id': _0x2e956d,
            'quantity': _0x1da8e2,
            'price': _0x8563d0['price'],
            'mode': _0x57bd3b,
            'products_name': _0xd5f637,
            'gateway': _0x48d472['gateway'],
            'nombre_boosts': _0x4fb803,
            'type_booster': _0x290699
        }, 'order');
        let _0x4d58a5 = _0x3777ac['existsSync'](_0x2479d4) ? JSON['parse'](_0x3777ac['readFileSync'](_0x2479d4)) : [];
        if (_0x4d58a5['find'](_0x44b797 => _0x44b797['invoice_id'] === _0x8563d0['invoice_id'])) {
            await _0x42089b('Duplicate\x20Order,\x20invoice_id:\x20' + _0x8563d0['invoice_id'], 'log');
            return _0x2dd353(_0x11119d, _0x57bd3b, _0x487b71['command']['104'], 0xc8);
        }
        const _0x491568 = {
            'invoice_id': _0x8563d0['invoice_id'],
            'email': _0x8563d0['email'],
            'amount': _0x1da8e2,
            'price': _0x8563d0['total_price'],
            'gateway': _0x48d472['gateway'],
            'serveurID': _0x2e956d,
            'status': _0x8563d0['status'],
            'custom_fields': _0x8563d0['custom_fields'],
            'product_name': _0xd5f637
        };
        _0x4d58a5['push'](_0x491568);
        _0x3777ac['writeFileSync'](_0x2479d4, JSON['stringify'](_0x4d58a5, null, 0x2));
        let _0x21aca9 = 0x0;
        let _0x39a4dc = 0x0;
        let _0x4e3350 = _0x4fb803 / 0x2;
        let _0x2b25c0 = ![];
        let _0x39dae6 = 0x0;
        const _0x2eb635 = 0x6;
        let _0x468aa5 = [];
        let _0x1fb034 = '[+]\x20' + _0x400f87 + '\x20initialisés.';
        if (_0x468aa5['length'] >= _0x2eb635) {
            _0x468aa5['pop']();
        }
        _0x468aa5['unshift'](_0x1fb034);
        let _0x626b74 = await _0x2017e1(_0x55b396);
        if (_0x626b74 === 0x0) {
            _0x468aa5['unshift'](_0x400f87 + '\x20' + _0x487b71['command']['13']);
            const _0x56183a = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x487b71['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x487b71['command']['22'] + ('\x20:\x20**0/' + _0x4fb803 + '**\x0a🔸\x20Boosts\x20') + _0x487b71['command']['28'] + ('\x20:\x20**' + _0x4fb803 + '/' + _0x4fb803 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x2e956d,
                'fields': _0x468aa5['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x468aa5['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x5bc5b5 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x400f87 + '\x20-\x20' + _0x487b71['command']['7'] + '\x20MrX' }
            };
            _0x2dd353(_0x11119d, _0x57bd3b, _0x487b71['command']['33'], 0xc8);
            return await _0x28abaa(_0x56183a);
        } else if (_0x4fb803 / 0x2 > _0x626b74 && _0x626b74 !== _0x4fb803 / 0x2) {
            _0x468aa5['unshift'](_0x400f87 + '\x20' + _0x487b71['command']['67']);
            const _0x302e3a = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x487b71['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x487b71['command']['22'] + ('\x20:\x20**0/' + _0x4fb803 + '**\x0a🔸\x20Boosts\x20') + _0x487b71['command']['28'] + ('\x20:\x20**' + _0x4fb803 + '/' + _0x4fb803 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x2e956d,
                'fields': _0x468aa5['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x468aa5['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x5bc5b5 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x400f87 + '\x20-\x20' + _0x487b71['command']['7'] + '\x20MrX' }
            };
            _0x2dd353(_0x11119d, _0x57bd3b, _0x487b71['command']['33'], 0xc8);
            return await _0x28abaa(_0x302e3a);
        }
        while (!_0x2b25c0 && _0x39dae6 < 0xf) {
            try {
                _0x2b25c0 = await _0x87e223(_0x2e956d);
                if (!_0x2b25c0) {
                    _0x39dae6++;
                    const _0x262034 = _0x39dae6 * 0xf;
                    await _0x42089b(_0x487b71['command']['97'] + '\x20' + _0x39dae6 + '/15\x20' + _0x487b71['command']['98'] + '\x20' + _0x262034 + '\x20' + _0x487b71['command']['99'] + ',\x20invoice_id:\x20' + _0x8563d0['invoice_id'] + '.', _0xa60ea8);
                    if (_0x39dae6 < 0xf) {
                        await new Promise(_0x358544 => setTimeout(_0x358544, 0xf * 0x3c * 0x3e8));
                    }
                }
            } catch (_0x2ef844) {
                console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:\x20' + _0x2ef844['message'] + ',\x20invoice_id:\x20' + _0x8563d0['invoice_id'] + '.');
                await _0x42089b('Delivery\x20Error,\x20invoice_id:\x20' + _0x8563d0['invoice_id'], 'log');
                _0x39dae6++;
                if (_0x39dae6 < 0xf) {
                    await new Promise(_0x294836 => setTimeout(_0x294836, 0xf * 0x3c * 0x3e8));
                }
            }
        }
        if (!_0x2b25c0) {
            return _0x2dd353(_0x11119d, _0x57bd3b, _0x487b71['command']['96'], 0xc8);
        }
        const _0x52c8eb = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x487b71['command']['23'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x487b71['command']['22'] + ('\x20:\x20**0/' + _0x4fb803 + '**\x0a🔸\x20Boosts\x20') + _0x487b71['command']['28'] + ('\x20:\x20**0/' + _0x4fb803 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x2e956d,
            'fields': _0x468aa5['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x468aa5['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0x5bc5b5 },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x400f87 + '\x20-\x20' + _0x487b71['command']['7'] + '\x20MrX' }
        };
        const _0x420cfc = await _0x28abaa(_0x52c8eb);
        const _0x59fe71 = _0x3777ac['readFileSync'](_0x55b396)['toString']()['split']('\x0a');
        for (let _0x49c79b = 0x0; _0x49c79b < _0x4fb803 / 0x2; _0x49c79b++) {
            let _0x1e8a99 = 0x0;
            async function _0x5dc65f(_0x5364bb = 0x0) {
                try {
                    const _0x1c6c63 = _0x59fe71[_0x49c79b];
                    const _0x3cf12e = await _0x18f338(_0x1c6c63);
                    const _0x275847 = await _0x29f98e['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x57b661 + '&machineid=' + _0x3e003c + '&shopname=' + _0x400f87 + '&mode=BOOST&guildid=' + _0x2e956d + '&bio=' + _0x308603 + '&clientid=' + _0x256319 + '&botclientsecret=' + _0x2421fa + '&bottoken=' + _0x5223a6 + '&tokenboost=' + _0x3cf12e, {}, { 'timeout': 0xf4240 });
                    const {
                        erreur: _0x36185c,
                        success: _0x22f17e
                    } = _0x275847['data'];
                    if (_0x468aa5['length'] >= _0x2eb635) {
                        _0x468aa5['pop']();
                    }
                    if (_0x22f17e === !![]) {
                        _0x21aca9++;
                        _0x468aa5['unshift']('✅\x20-\x20' + _0x487b71['command']['81'] + '\x20:\x20' + await _0x68af44(_0x3cf12e));
                        await _0x40e5fc(_0x1c6c63, _0x55b396);
                    } else if (_0x22f17e === ![]) {
                        _0x39a4dc++;
                        if (_0x36185c === 'invalid') {
                            _0x468aa5['unshift']('❌\x20-\x20' + _0x487b71['command']['80'] + '\x20:\x20' + await _0x68af44(_0x3cf12e));
                            await _0x40e5fc(_0x1c6c63, _0x55b396);
                        } else if (_0x36185c === 'perm') {
                            _0x468aa5['unshift']('⛔\x20-\x20' + _0x487b71['command']['79'] + '\x20:\x20' + await _0x68af44(_0x3cf12e));
                            if (_0x5364bb < 0x3) {
                                _0x5364bb++;
                                _0x468aa5['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x68af44(_0x3cf12e));
                                await _0x5dc65f(_0x5364bb);
                            }
                        } else if (_0x36185c === 'used') {
                            _0x468aa5['unshift']('⚠️\x20-\x20' + _0x487b71['command']['78'] + '\x20:\x20' + await _0x68af44(_0x3cf12e));
                            await _0x40e5fc(_0x1c6c63, _0x55b396);
                        } else {
                            _0x468aa5['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x68af44(_0x3cf12e));
                            if (_0x5364bb < 0x3) {
                                _0x5364bb++;
                                _0x468aa5['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x68af44(_0x3cf12e));
                                await _0x5dc65f(_0x5364bb);
                            }
                        }
                    }
                } catch {
                    _0x39a4dc++;
                    if (_0x5364bb < 0x3) {
                        _0x5364bb++;
                        _0x468aa5['unshift']('🔄️\x20-\x20retry');
                        await _0x5dc65f(_0x5364bb);
                    }
                    _0x468aa5['unshift']('⚠️\x20-\x20error\x20API');
                }
            }
            await _0x5dc65f(_0x1e8a99);
            const _0x102d2e = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x487b71['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x487b71['command']['22'] + ('\x20:\x20**' + _0x21aca9 * 0x2 + '/' + _0x4fb803 + '**\x0a🔸\x20Boosts\x20') + _0x487b71['command']['28'] + ('\x20:\x20**' + _0x39a4dc * 0x2 + '/' + _0x4fb803 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x2e956d,
                'fields': _0x468aa5['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x468aa5['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x5bc5b5 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x400f87 + '\x20-\x20' + _0x487b71['command']['7'] + '\x20MrX' }
            };
            await _0x2f702c(_0x420cfc, _0x102d2e);
        }
        const _0x63f1b = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x487b71['command']['21'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x487b71['command']['22'] + ('\x20:\x20**' + _0x21aca9 * 0x2 + '/' + _0x4fb803 + '**\x0a🔸\x20Boosts\x20') + _0x487b71['command']['28'] + ('\x20:\x20**' + _0x39a4dc * 0x2 + '/' + _0x4fb803 + '**\x0a📝\x20Server\x20id:\x20') + _0x2e956d,
            'fields': _0x468aa5['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x468aa5['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0x5bc5b5 },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x400f87 + '\x20-\x20' + _0x487b71['command']['7'] + '\x20MrX' }
        };
        await _0x2f702c(_0x420cfc, _0x63f1b);
        if (_0x21aca9 >= _0x4e3350) {
            await _0x42089b('Order\x20Delivered,\x20' + _0x487b71['command']['100'] + ('\x20(' + _0x21aca9 * 0x2 + '\x20boosts),\x20invoice_id:\x20' + _0x8563d0['invoice_id'] + '.'), 'log');
            _0x2dd353(_0x11119d, 'write', _0x487b71['command']['101'], 0xc8);
            return _0x2dd353(_0x11119d, _0x57bd3b, _0x487b71['command']['101'], 0xc8);
        } else {
            await _0x42089b('Delivery\x20Error,\x20' + _0x39a4dc * 0x2 + '\x20boosts\x20' + _0x487b71['command']['102'] + ',\x20invoice_id:\x20' + _0x8563d0['invoice_id'] + '.', 'log');
            _0x2dd353(_0x11119d, 'write', _0x487b71['command']['103'], 0xc8);
            return _0x2dd353(_0x11119d, _0x57bd3b, _0x487b71['command']['103'], 0xc8);
        }
    } catch (_0x327866) {
        console['error'](_0x327866);
        _0x2dd353(_0x11119d, _0x57bd3b, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
    }
};
const _0x46506a = (_0x51252a, _0x3beb49) => {
    if (!_0x3777ac['existsSync'](_0x2479d4)) {
        _0x51252a['writeHead'](0x194, { 'Content-Type': 'text/html' });
        _0x51252a['end']('<h1>Aucune\x20commande\x20trouvée</h1>');
        return;
    }
    const _0x39420a = JSON['parse'](_0x3777ac['readFileSync'](_0x2479d4));
    const _0x22ebc0 = _0x5e70b0 || 0x64;
    const _0x47ea9b = parseInt(_0x3beb49) || 0x1;
    const _0x2c2d3a = _0x39420a['length'];
    const _0x5c3753 = Math['ceil'](_0x2c2d3a / _0x22ebc0);
    const _0x522bf8 = (_0x47ea9b - 0x1) * _0x22ebc0;
    const _0x3e7d72 = _0x522bf8 + _0x22ebc0;
    const _0x3aade3 = _0x39420a['slice'](_0x522bf8, _0x3e7d72);
    const _0x42a4de = _0x39420a['filter'](_0x283baf => _0x283baf['status'] === 'completed')['length'];
    const _0x4fc042 = _0x39420a['reduce']((_0xf090d, _0x5bdbb8) => {
        const _0x2b697b = parseInt(_0x5bdbb8['amount'], 0xa);
        const _0x5270a6 = _0x2b697b * 0xe;
        return _0xf090d + _0x5270a6;
    }, 0x0);
    const _0x506fff = _0x39420a['reduce']((_0x33615a, _0x35e788) => {
        const _0x1a47a3 = parseFloat(_0x35e788['price']);
        return _0x33615a + (isNaN(_0x1a47a3) ? 0x0 : _0x1a47a3);
    }, 0x0);
    _0x51252a['writeHead'](0xc8, { 'Content-Type': 'text/html' });
    _0x51252a['end']('<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html\x20lang=\x22fr\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>Dashboard\x20des\x20Commandes</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20{\x20box-sizing:\x20border-box;\x20margin:\x200;\x20padding:\x200;\x20font-family:\x20\x27Inter\x27,\x20sans-serif;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x20background-color:\x20#111827;\x20color:\x20#e5e7eb;\x20display:\x20flex;\x20justify-content:\x20center;\x20padding:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.dashboard\x20{\x20width:\x20100%;\x20max-width:\x201200px;\x20padding:\x2020px;\x20background:\x20#1f2937;\x20border-radius:\x2010px;\x20box-shadow:\x200\x204px\x2010px\x20rgba(0,\x200,\x200,\x200.3);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20img\x20{\x20width:\x2080px;\x20margin-right:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20color:\x20#60a5fa;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20{\x20text-align:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.8rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201.2rem;\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-container\x20{\x20overflow-x:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x20width:\x20100%;\x20border-collapse:\x20collapse;\x20background-color:\x20#374151;\x20border-radius:\x2010px;\x20overflow:\x20hidden;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2012px;\x20text-align:\x20left;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th\x20{\x20background-color:\x20#2563eb;\x20color:\x20white;\x20text-transform:\x20uppercase;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:nth-child(even)\x20{\x20background-color:\x20#1f2937;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:hover\x20{\x20background-color:\x20#334155;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20{\x20text-align:\x20center;\x20margin-top:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a\x20{\x20margin:\x200\x205px;\x20padding:\x208px\x2015px;\x20background-color:\x20#2563eb;\x20color:\x20white;\x20border-radius:\x205px;\x20text-decoration:\x20none;\x20transition:\x200.3s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a:hover\x20{\x20background-color:\x20#1e40af;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20footer\x20{\x20text-align:\x20center;\x20margin-top:\x2030px;\x20font-size:\x200.9rem;\x20opacity:\x200.7;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2010px;\x20font-size:\x2014px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.5rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dashboard\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://media.bloumechat.com/media/PFq3HUI6Es.png\x22\x20alt=\x22Logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>InfinityBoost</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Dashboard\x20des\x20Commandes</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Total\x20Gagné\x20:\x20<span\x20id=\x22totalEarned\x22>' + _0x506fff['toFixed'](0x2) + '€</span>\x20|\x20Total\x20Boosts\x20:\x20<span\x20id=\x22totalBoosts\x22>' + _0x4fc042 + '</span>\x20|\x20Total\x20Commandes\x20:\x20<span\x20id=\x22totalCompletedOrders\x22>' + _0x42a4de + '</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Invoice\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Email</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Prix\x20(€)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Status</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Gateway</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Serveur\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x3aade3['map'](_0x1a7f5b => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x1a7f5b['invoice_id'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x1a7f5b['email'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + parseFloat(_0x1a7f5b['price'])['toFixed'](0x2) + '€</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x1a7f5b['status'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x1a7f5b['amount'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x1a7f5b['gateway'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x1a7f5b['serveurID'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>')['join']('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pagination\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x47ea9b > 0x1 ? '<a\x20href=\x22/orders?page=' + (_0x47ea9b - 0x1) + '\x22>&laquo;\x20Précédent</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Page\x20' + _0x47ea9b + '\x20/\x20' + _0x5c3753 + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x47ea9b < _0x5c3753 ? '<a\x20href=\x22/orders?page=' + (_0x47ea9b + 0x1) + '\x22>Suivant\x20&raquo;</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>&copy;\x202024\x20InfinityBoost.\x20Tous\x20droits\x20réservés.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a');
};
const _0x462b67 = _0x32672b['createServer'](async (_0x425afc, _0x534829) => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Nouvelle\x20requête\x20reçue:\x20' + _0x425afc['method'] + '\x20' + _0x425afc['url']);
    if (_0x425afc['method'] === 'POST') {
        let _0x4b937b = '';
        _0x425afc['on']('data', _0x4b71ab => {
            _0x4b937b += _0x4b71ab['toString']();
        });
        _0x425afc['on']('end', async () => {
            try {
                const _0x26a9e0 = JSON['parse'](_0x4b937b);
                const _0x2e66af = 'json';
                const _0x2fca6f = _0x4ffcc6['parse'](_0x425afc['url'], !![]);
                if (_0x26a9e0['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC') {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                    await _0x2a56db(_0x26a9e0, _0x2e66af, _0x534829);
                } else {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Event\x20non\x20supporté:', _0x26a9e0['event']);
                    _0x2dd353(_0x534829, _0x2e66af, 'Event\x20non\x20supporté', 0x190);
                }
            } catch (_0x14f3a3) {
                console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20parsing\x20JSON:', _0x14f3a3);
                _0x2dd353(_0x534829, 'json', 'Erreur\x20parsing\x20JSON', 0x190);
            }
        });
    } else if (_0x425afc['method'] === 'GET') {
        try {
            const _0x270a39 = _0x4ffcc6['parse'](_0x425afc['url'], !![]);
            const _0x5d6ff9 = _0x270a39['query'];
            const _0xb1d335 = _0x5d6ff9['page'] || '1';
            console['log']('[' + new Date()['toISOString']() + ']\x20Requête\x20GET\x20reçue\x20pour\x20' + _0x270a39['pathname'] + ',\x20params:', _0x5d6ff9);
            if (_0x270a39['pathname'] === '/orders') {
                console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20requête\x20/orders,\x20page:', _0xb1d335);
                _0x46506a(_0x534829, _0xb1d335);
            } else {
                console['log']('[' + new Date()['toISOString']() + ']\x20Route\x20non\x20trouvée:', _0x270a39['pathname']);
                _0x2dd353(_0x534829, 'json', 'Route\x20non\x20trouvée', 0x194);
            }
        } catch (_0x3ba548) {
            console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20du\x20traitement\x20de\x20la\x20requête\x20GET:', _0x3ba548);
            _0x2dd353(_0x534829, 'json', {
                'error': 'Erreur\x20interne\x20du\x20serveur',
                'details': _0x3ba548['message']
            }, 0x1f4);
        }
    } else {
        console['log']('[' + new Date()['toISOString']() + ']\x20Méthode\x20non\x20supportée:', _0x425afc['method']);
        _0x2dd353(_0x534829, 'json', 'Méthode\x20non\x20supportée', 0x195);
    }
});
_0x462b67['listen'](_0xf7ef8a, () => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Serveur\x20démarré\x20sur\x20http://' + _0xe5095a + ':' + _0xf7ef8a);
});
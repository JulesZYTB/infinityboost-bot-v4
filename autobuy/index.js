(function (_0x9b5726, _0x468a34) {
    const _0x18a26c = _0x1bfd;
    const _0x2074bd = _0x9b5726();
    while (!![]) {
        try {
            const _0x349c18 = parseInt(_0x18a26c(0x107)) / 0x1 * (-parseInt(_0x18a26c(0x10a)) / 0x2) + parseInt(_0x18a26c(0x106)) / 0x3 + parseInt(_0x18a26c(0x101)) / 0x4 * (-parseInt(_0x18a26c(0x102)) / 0x5) + parseInt(_0x18a26c(0x105)) / 0x6 * (-parseInt(_0x18a26c(0x100)) / 0x7) + -parseInt(_0x18a26c(0x108)) / 0x8 * (-parseInt(_0x18a26c(0x103)) / 0x9) + -parseInt(_0x18a26c(0x10b)) / 0xa * (parseInt(_0x18a26c(0x109)) / 0xb) + parseInt(_0x18a26c(0x104)) / 0xc;
            if (_0x349c18 === _0x468a34) {
                break;
            } else {
                _0x2074bd['push'](_0x2074bd['shift']());
            }
        } catch (_0x342838) {
            _0x2074bd['push'](_0x2074bd['shift']());
        }
    }
}(_0x44ae, 0x583f3));
const _0x1629b3 = require('http');
const _0xfd483f = require('url');
const _0x5f0fe5 = require('axios');
const _0xf7d15f = require('fs');
const _0x119501 = require('path');
const _0x2bafa5 = require('os');
const _0x342863 = require('gradient-string');
const _0x388e79 = './commandes.json';
const _0x2c5df9 = require('../config.json');
const {performOperation: _0x3c3d92} = require('../required/performOp');
const {WebhookClient: _0x5b9fe7} = require('discord.js');
const _0x7226f1 = require('line-by-line');
let _0x5b473e = _0x2c5df9['service']['name_shop'];
let _0x4d4f41 = _0x2c5df9['service']['banner'];
let _0x310850 = _0x2c5df9['apikey'];
let _0x1c3169 = _0x2c5df9['autobuy']['port'];
let _0x1c0654 = _0x2c5df9['autobuy']['host'];
let _0x293779 = _0x2c5df9['autobuy']['bio'];
let _0xfce5a = _0x2c5df9['autobuy']['shop_id_sellauth'];
let _0x3a7700 = _0x2c5df9['autobuy']['apikey_sellauth'];
let _0x540c20 = _0x2c5df9['autobuy']['discord_webhook_url_command_log'];
let _0x1bfecf = _0x2c5df9['autobuy']['discord_webhook_url_console'];
let _0x29fca4 = _0x2c5df9['autobuy']['orders_command_for_page'];
let _0x5f2f82 = _0x2c5df9['autobuy']['guildid_variable_Custom_Field'] || 'Serveur\x20ID';
let _0x4aa0a1 = _0x2c5df9['autobuy']['bio_variable_Custom_Field'] || 'Bio';
const _0x561576 = JSON['parse'](_0xf7d15f['readFileSync']('./api-translate/langs.json', 'utf-8'));
function _0x1bfd(_0x3ccaba, _0x3b350c) {
    const _0x44aefe = _0x44ae();
    _0x1bfd = function (_0x1bfdb2, _0x207c46) {
        _0x1bfdb2 = _0x1bfdb2 - 0x100;
        let _0x5a2c63 = _0x44aefe[_0x1bfdb2];
        return _0x5a2c63;
    };
    return _0x1bfd(_0x3ccaba, _0x3b350c);
}
const _0x56f2b2 = new _0x5b9fe7({ 'url': _0x1bfecf });
const _0x4b0624 = new _0x5b9fe7({ 'url': _0x540c20 });
const _0x596c9c = _0x2c5df9['service']['langue_shop'];
const _0x556f7d = _0x561576[_0x596c9c];
let _0x5573a3 = _0x2c5df9['bot']['clientid'];
let _0x9dc3f4 = _0x2c5df9['bot']['token'];
let _0x2607c8 = _0x2c5df9['bot']['clientsecret'];
let _0x509f02;
async function _0x3146cc() {
    return new Promise((_0x1877b9, _0x51fb8d) => {
        _0x3c3d92((_0x56e19f, _0x2ddece) => {
            if (_0x56e19f) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x51fb8d(_0x56e19f);
            } else {
                _0x509f02 = _0x2ddece;
                _0x1877b9(_0x509f02);
            }
        });
    });
}
async function _0x3d25c9(_0x25bb1a) {
    const _0x598e80 = _0x25bb1a['split'](':');
    if (_0x598e80['length'] === 0x3) {
        return _0x598e80[0x2];
    } else if (_0x598e80['length'] === 0x1) {
        return _0x25bb1a;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x25bb1a);
        return _0x25bb1a;
    }
}
async function _0x4a4c62(_0x35e2d8) {
    if (_0x35e2d8['length'] <= 0x6) {
        return _0x35e2d8;
    }
    const _0x208a9a = _0x35e2d8['slice'](0x0, 0x14);
    const _0x4601c3 = _0x35e2d8['slice'](-0xa);
    const _0x18fff6 = _0x35e2d8['length'] - _0x208a9a['length'] - _0x4601c3['length'];
    const _0x1c83bb = '' + _0x208a9a + '*'['repeat'](_0x18fff6 - 0x46) + _0x4601c3;
    return _0x1c83bb;
}
async function _0x1a5f3b(_0x525621) {
    if (_0x525621['length'] <= 0x6) {
        return _0x525621;
    }
    const _0x107d1f = _0x525621['slice'](0x0, 0x6);
    const _0x4b3c59 = _0x525621['slice'](-0xc);
    const _0x1e7d56 = _0x525621['length'] - _0x107d1f['length'] - _0x4b3c59['length'];
    const _0x3c3f67 = '' + _0x107d1f + '*'['repeat'](_0x1e7d56 - 0x2d) + _0x4b3c59;
    return _0x3c3f67;
}
async function _0xc6c73e(_0x24ae78, _0x1292a3) {
    let _0x2dcd06 = await _0x4a4c62(_0x24ae78);
    let _0x1fcb08 = await _0x38652a(_0x1292a3);
    let _0x1a8d4a = '';
    if (!_0xf7d15f['existsSync'](_0x1292a3)) {
        console['log'](_0x342863['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x5a295b = [];
    const _0x3fdf03 = new _0x7226f1(_0x1292a3);
    _0x3fdf03['on']('error', _0x371b5b => {
        console['error'](_0x342863['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x371b5b));
    });
    _0x3fdf03['on']('line', _0x368777 => {
        const _0x20a58b = _0x368777['trim']();
        if (!_0x20a58b['includes'](_0x24ae78['trim']())) {
            _0x5a295b['push'](_0x20a58b);
        }
    });
    _0x3fdf03['on']('end', async () => {
        if (_0x5a295b['length'] === 0x0 && _0x1fcb08 !== 0x1) {
            console['log'](_0x342863['retro']('⛔\x20-\x20Le\x20token\x20' + _0x2dcd06 + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x1fcb08 !== 0x1) {
            _0x1a8d4a = _0x5a295b['join'](_0x2bafa5['EOL']);
        } else {
            _0x1a8d4a = '';
        }
        _0xf7d15f['writeFile'](_0x1292a3, _0x1a8d4a, _0x2c25ae => {
            if (_0x2c25ae) {
                console['error'](_0x342863['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x2c25ae));
                return;
            }
            console['log'](_0x342863['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x2dcd06 + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x38652a(_0x3f8ff5) {
    try {
        const _0x1d7862 = _0xf7d15f['readFileSync'](_0x3f8ff5, 'utf-8');
        const _0x2f708a = _0x1d7862['split']('\x0a');
        const _0x42d310 = _0x2f708a['filter'](_0x44e619 => _0x44e619['trim']()['length'] > 0x0);
        return _0x42d310['length'];
    } catch (_0xa3e2f) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0xa3e2f);
        return 0x0;
    }
}
const _0x47883e = async (_0x510474, _0x424e1b = 'order') => {
    try {
        const _0x3f3ed6 = {
            'embeds': [{
                    'title': _0x424e1b === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                    'color': _0x424e1b === 'order' ? 0xff00 : 0x99ff,
                    'timestamp': new Date()['toISOString'](),
                    'fields': []
                }]
        };
        if (_0x424e1b === 'order') {
            const _0x23c7ec = parseFloat(_0x510474['quantity']) || 0x0;
            const _0x6bfb40 = parseFloat(_0x510474['nombre_boosts']) || 0x0;
            const _0x5c5413 = parseFloat(_0x510474['type_booster']) || 'N/A';
            const _0x1b2fc4 = parseFloat(_0x510474['price']) || 0x0;
            const _0x371c58 = (_0x23c7ec * _0x1b2fc4)['toFixed'](0x2);
            _0x3f3ed6['embeds'][0x0]['fields'] = [
                {
                    'name': '🆔\x20Invoice\x20ID',
                    'value': String(_0x510474['invoice_id']),
                    'inline': ![]
                },
                {
                    'name': '🏷️\x20Product',
                    'value': _0x510474['products_name'] ? _0x510474['products_name'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📧\x20Email',
                    'value': _0x510474['email'] ? _0x510474['email'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '👤\x20Server\x20ID',
                    'value': _0x510474['serveur_id'] ? _0x510474['serveur_id'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📦\x20Quantity',
                    'value': String(_0x23c7ec),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Number\x20boosts',
                    'value': String(_0x6bfb40),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Type\x20boosts',
                    'value': String(_0x5c5413) + 'm',
                    'inline': ![]
                },
                {
                    'name': '💰\x20Unit\x20Price',
                    'value': String(_0x1b2fc4) + '€',
                    'inline': ![]
                },
                {
                    'name': '💶\x20Total\x20Price',
                    'value': String(_0x371c58) + '€',
                    'inline': ![]
                },
                {
                    'name': '💳\x20Gateway',
                    'value': _0x510474['gateway'] ? _0x510474['gateway'] : 'N/A',
                    'inline': ![]
                }
            ];
        } else {
            _0x3f3ed6['embeds'][0x0]['description'] = _0x510474;
            if (_0x510474['includes']('Order\x20Delivered')) {
                _0x3f3ed6['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                _0x3f3ed6['embeds'][0x0]['color'] = 0xff00;
            } else if (_0x510474['includes']('Delivery\x20Error')) {
                _0x3f3ed6['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                _0x3f3ed6['embeds'][0x0]['color'] = 0xff0000;
            } else if (_0x510474['includes']('Duplicate\x20Order')) {
                _0x3f3ed6['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                _0x3f3ed6['embeds'][0x0]['color'] = 0xffa500;
            } else {
                _0x3f3ed6['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                _0x3f3ed6['embeds'][0x0]['color'] = 0xffa500;
            }
        }
        await _0x4b0624['send']({ 'embeds': [_0x3f3ed6['embeds'][0x0]] });
    } catch (_0x4a2ac9) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x4a2ac9['response']?.['data'] || _0x4a2ac9['message']);
    }
};
async function _0x443263(_0x5d5f2e) {
    try {
        const _0x221438 = await _0x56f2b2['send']({ 'embeds': [_0x5d5f2e] });
        return _0x221438['id'];
    } catch (_0x2f21cf) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20message:', _0x2f21cf['response']?.['data'] || _0x2f21cf['message']);
        throw _0x2f21cf;
    }
}
async function _0x2348d4(_0x2ed7e8, _0x298733) {
    try {
        await _0x56f2b2['editMessage'](_0x2ed7e8, { 'embeds': [_0x298733] });
    } catch (_0xe96ac9) {
        console['error']('Error\x20editing\x20Discord\x20webhook\x20message:', _0xe96ac9['response']?.['data'] || _0xe96ac9['message']);
        throw _0xe96ac9;
    }
}
const _0x3852e5 = (_0x18b42f, _0x3ba2e5, _0x54b16d, _0x2a5b46 = 0xc8) => {
    if (_0x3ba2e5 === 'write') {
        _0x18b42f['writeHead'](_0x2a5b46, { 'Content-Type': 'text/plain' });
        _0x18b42f['write'](_0x54b16d);
    } else {
        _0x18b42f['writeHead'](_0x2a5b46, { 'Content-Type': 'application/json' });
        _0x18b42f['end'](JSON['stringify'](_0x54b16d));
    }
};
const _0x31c1fd = async (_0x1f008e, _0x283fff = 0xc) => {
    try {
        const _0x35079b = await _0x5f0fe5['post']('https://panel.infinityboost.monster/api/api?APIKey=' + _0x310850 + '&machineid=' + _0x509f02 + '&mode=CHECK_BOT&id=' + _0x1f008e, {}, { 'timeout': 0xf4240 });
        const {erreur: _0x1bc922} = _0x35079b['data'];
        return _0x1bc922 !== 'bot';
    } catch (_0x589a3d) {
        console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:', _0x589a3d);
        return ![];
    }
};
const _0x17156d = async (_0xe5dde3, _0x291678, _0x132ab0) => {
    try {
        await _0x3146cc();
        const _0x494791 = _0xe5dde3['item'];
        if (!_0x494791) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
            return _0x3852e5(_0x132ab0, _0x291678, _0x556f7d['command']['106'], 0x190);
        }
        const _0x20e826 = parseInt(_0x494791['quantity'], 0xa) || 0x1;
        const _0x15042c = _0x494791['custom_fields']?.[_0x5f2f82];
        const _0x120567 = _0x494791['custom_fields']?.[_0x4aa0a1] || _0x293779;
        const _0xdf0edf = _0x494791['product']?.['name'];
        const _0x30b449 = '/stock/';
        let _0x26a25d = _0x119501['join'](__dirname, '..', _0x30b449, 'stock-1m.txt');
        let _0x1ee447 = _0x119501['join'](__dirname, '..', _0x30b449, 'stock-3m.txt');
        let _0x37b8c7;
        console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20pour\x20le\x20serveur:\x20' + _0x15042c);
        if (!_0x15042c || !_0xdf0edf) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20' + (!_0x15042c ? 'serveurID' : 'products_name'));
            return _0x3852e5(_0x132ab0, _0x291678, _0x556f7d['command']['105'], 0x190);
        }
        const _0x54db6c = _0xdf0edf['match'](/\[(\d+)\]/);
        const _0x15f4c9 = _0xdf0edf['match'](/boost (1|3) Mois/);
        if (!_0x54db6c || !_0x15f4c9) {
            await _0x47883e('Delivery\x20Error,\x20invoice_id:\x20' + _0x494791['invoice_id'], 'log');
            return _0x3852e5(_0x132ab0, _0x291678, _0x556f7d['command']['105'], 0xc8);
        }
        const _0x3f5bb4 = parseInt(_0x54db6c[0x1], 0xa);
        const _0x21d447 = _0x3f5bb4 * _0x20e826;
        const _0x567ce5 = parseInt(_0x15f4c9[0x1], 0xa);
        const _0x576334 = _0x567ce5 === 0x3 ? '3m' : '1m';
        if (_0x576334 === '1m') {
            _0x37b8c7 = _0x26a25d;
        } else if (_0x576334 === '3m') {
            _0x37b8c7 = _0x1ee447;
        }
        await _0x47883e({
            'invoice_id': _0x494791['invoice_id'],
            'serveur_id': _0x15042c,
            'quantity': _0x20e826,
            'price': _0x494791['price'],
            'mode': _0x291678,
            'products_name': _0xdf0edf,
            'gateway': _0xe5dde3['gateway'],
            'nombre_boosts': _0x21d447,
            'type_booster': _0x576334
        }, 'order');
        let _0x548725 = _0xf7d15f['existsSync'](_0x388e79) ? JSON['parse'](_0xf7d15f['readFileSync'](_0x388e79)) : [];
        if (_0x548725['find'](_0x2506a8 => _0x2506a8['invoice_id'] === _0x494791['invoice_id'])) {
            await _0x47883e('Duplicate\x20Order,\x20invoice_id:\x20' + _0x494791['invoice_id'], 'log');
            return _0x3852e5(_0x132ab0, _0x291678, _0x556f7d['command']['104'], 0xc8);
        }
        const _0x4e41c7 = {
            'invoice_id': _0x494791['invoice_id'],
            'email': _0x494791['email'],
            'amount': _0x20e826,
            'price': _0x494791['total_price'],
            'gateway': _0xe5dde3['gateway'],
            'serveurID': _0x15042c,
            'status': _0x494791['status'],
            'custom_fields': _0x494791['custom_fields'],
            'product_name': _0xdf0edf
        };
        _0x548725['push'](_0x4e41c7);
        _0xf7d15f['writeFileSync'](_0x388e79, JSON['stringify'](_0x548725, null, 0x2));
        let _0x2a7c3d = 0x0;
        let _0x1756c5 = 0x0;
        let _0x6a7fb4 = _0x21d447 / 0x2;
        let _0x28fab7 = ![];
        let _0xb97936 = 0x0;
        const _0x2ca68e = 0x6;
        let _0x999d24 = [];
        let _0x3bb10d = '[+]\x20' + _0x5b473e + '\x20initialisés.';
        if (_0x999d24['length'] >= _0x2ca68e) {
            _0x999d24['pop']();
        }
        _0x999d24['unshift'](_0x3bb10d);
        let _0x456528 = await _0x38652a(_0x37b8c7);
        if (_0x456528 === 0x0) {
            _0x999d24['unshift'](_0x5b473e + '\x20' + _0x556f7d['command']['13']);
            const _0x2a623e = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x556f7d['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x556f7d['command']['22'] + ('\x20:\x20**0/' + _0x21d447 + '**\x0a🔸\x20Boosts\x20') + _0x556f7d['command']['28'] + ('\x20:\x20**' + _0x21d447 + '/' + _0x21d447 + '**\x0a\x20Server\x20id:\x20') + _0x15042c,
                'fields': _0x999d24['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x999d24['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x4d4f41 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x5b473e + '\x20-\x20' + _0x556f7d['command']['7'] + '\x20MrX' }
            };
            _0x3852e5(_0x132ab0, _0x291678, _0x556f7d['command']['33'], 0xc8);
            return await _0x443263(_0x2a623e);
        } else if (_0x21d447 / 0x2 > _0x456528 && _0x456528 !== _0x21d447 / 0x2) {
            _0x999d24['unshift'](_0x5b473e + '\x20' + _0x556f7d['command']['67']);
            const _0x20be35 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x556f7d['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x556f7d['command']['22'] + ('\x20:\x20**0/' + _0x21d447 + '**\x0a🔸\x20Boosts\x20') + _0x556f7d['command']['28'] + ('\x20:\x20**' + _0x21d447 + '/' + _0x21d447 + '**\x0a\x20Server\x20id:\x20') + _0x15042c,
                'fields': _0x999d24['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x999d24['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x4d4f41 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x5b473e + '\x20-\x20' + _0x556f7d['command']['7'] + '\x20MrX' }
            };
            _0x3852e5(_0x132ab0, _0x291678, _0x556f7d['command']['33'], 0xc8);
            return await _0x443263(_0x20be35);
        }
        while (!_0x28fab7 && _0xb97936 < 0xc) {
            try {
                _0x28fab7 = await _0x31c1fd(_0x15042c);
                if (!_0x28fab7) {
                    _0xb97936++;
                    const _0x4fc431 = _0xb97936 * 0xa;
                    await _0x47883e(_0x556f7d['command']['97'] + '\x20' + _0xb97936 + '/12\x20' + _0x556f7d['command']['98'] + '\x20' + _0x4fc431 + '\x20' + _0x556f7d['command']['99'] + ',\x20invoice_id:\x20' + _0x494791['invoice_id'] + '.', _0x1bfecf);
                    if (_0xb97936 < 0xc) {
                        await new Promise(_0x1b508a => setTimeout(_0x1b508a, 0xa * 0x3c * 0x3e8));
                    }
                }
            } catch (_0x179c47) {
                console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:\x20' + _0x179c47['message'] + ',\x20invoice_id:\x20' + _0x494791['invoice_id'] + '.');
                await _0x47883e('Delivery\x20Error,\x20invoice_id:\x20' + _0x494791['invoice_id'], 'log');
                _0xb97936++;
                if (_0xb97936 < 0xc) {
                    await new Promise(_0x30c226 => setTimeout(_0x30c226, 0xa * 0x3c * 0x3e8));
                }
            }
        }
        if (!_0x28fab7) {
            return _0x3852e5(_0x132ab0, _0x291678, _0x556f7d['command']['96'], 0xc8);
        }
        const _0x5298ed = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x556f7d['command']['23'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x556f7d['command']['22'] + ('\x20:\x20**0/' + _0x21d447 + '**\x0a🔸\x20Boosts\x20') + _0x556f7d['command']['28'] + ('\x20:\x20**0/' + _0x21d447 + '**\x0a\x20Server\x20id:\x20') + _0x15042c,
            'fields': _0x999d24['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x999d24['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0x4d4f41 },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x5b473e + '\x20-\x20' + _0x556f7d['command']['7'] + '\x20MrX' }
        };
        const _0x52ea42 = await _0x443263(_0x5298ed);
        const _0x259ade = _0xf7d15f['readFileSync'](_0x37b8c7)['toString']()['split']('\x0a');
        for (let _0x2b3f90 = 0x0; _0x2b3f90 < _0x21d447 / 0x2; _0x2b3f90++) {
            try {
                const _0xcb4a11 = _0x259ade[_0x2b3f90];
                const _0x548ade = await _0x3d25c9(_0xcb4a11);
                const _0x46ef4c = await _0x5f0fe5['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x310850 + '&machineid=' + _0x509f02 + '&shopname=' + _0x5b473e + '&mode=BOOST&guildid=' + _0x15042c + '&bio=' + _0x120567 + '&clientid=' + _0x5573a3 + '&botclientsecret=' + _0x2607c8 + '&bottoken=' + _0x9dc3f4 + '&tokenboost=' + _0x548ade, {}, { 'timeout': 0xf4240 });
                const {
                    erreur: _0x1ebfc5,
                    success: _0x6a69ec
                } = _0x46ef4c['data'];
                if (_0x999d24['length'] >= _0x2ca68e) {
                    _0x999d24['pop']();
                }
                if (_0x6a69ec === !![]) {
                    _0x2a7c3d++;
                    _0x999d24['unshift']('✅\x20-\x20' + _0x556f7d['command']['81'] + '\x20:\x20' + await _0x1a5f3b(_0x548ade));
                    await _0xc6c73e(_0xcb4a11, _0x37b8c7);
                } else if (_0x6a69ec === ![]) {
                    _0x1756c5++;
                    if (_0x1ebfc5 === 'bot') {
                        _0x999d24['unshift']('⛔\x20-\x20' + _0x556f7d['command']['84'] + '\x20' + _0x556f7d['command']['107']);
                    } else if (_0x1ebfc5 === 'invalid') {
                        _0x999d24['unshift']('❌\x20-\x20' + _0x556f7d['command']['80'] + '\x20:\x20' + await _0x1a5f3b(_0x548ade));
                        await _0xc6c73e(_0xcb4a11, _0x37b8c7);
                    } else if (_0x1ebfc5 === 'perm') {
                        _0x999d24['unshift']('⛔\x20-\x20' + _0x556f7d['command']['79'] + '\x20:\x20' + await _0x1a5f3b(_0x548ade));
                    } else if (_0x1ebfc5 === 'used') {
                        _0x999d24['unshift']('⚠️\x20-\x20' + _0x556f7d['command']['78'] + '\x20:\x20' + await _0x1a5f3b(_0x548ade));
                        await _0xc6c73e(_0xcb4a11, _0x37b8c7);
                    } else {
                        _0x999d24['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x1a5f3b(_0x548ade));
                    }
                }
            } catch {
                _0x1756c5++;
                _0x999d24['unshift']('⚠️\x20-\x20error\x20API');
            }
            const _0x414ff0 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x556f7d['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x556f7d['command']['22'] + ('\x20:\x20**' + _0x2a7c3d * 0x2 + '/' + _0x21d447 + '**\x0a🔸\x20Boosts\x20') + _0x556f7d['command']['28'] + ('\x20:\x20**' + _0x1756c5 * 0x2 + '/' + _0x21d447 + '**\x0a\x20Server\x20id:\x20') + _0x15042c,
                'fields': _0x999d24['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x999d24['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x4d4f41 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x5b473e + '\x20-\x20' + _0x556f7d['command']['7'] + '\x20MrX' }
            };
            await _0x2348d4(_0x52ea42, _0x414ff0);
        }
        const _0x22c79a = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x556f7d['command']['21'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x556f7d['command']['22'] + ('\x20:\x20**' + _0x2a7c3d * 0x2 + '/' + _0x21d447 + '**\x0a🔸\x20Boosts\x20') + _0x556f7d['command']['28'] + ('\x20:\x20**' + _0x1756c5 * 0x2 + '/' + _0x21d447 + '**\x0a\x20Server\x20id:\x20') + _0x15042c,
            'fields': _0x999d24['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x999d24['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0x4d4f41 },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x5b473e + '\x20-\x20' + _0x556f7d['command']['7'] + '\x20MrX' }
        };
        await _0x2348d4(_0x52ea42, _0x22c79a);
        if (_0x2a7c3d >= _0x6a7fb4) {
            await _0x47883e('Order\x20Delivered,\x20' + _0x556f7d['command']['100'] + ('\x20(' + _0x2a7c3d * 0x2 + '\x20boosts),\x20invoice_id:\x20' + _0x494791['invoice_id'] + '.'), 'log');
            return _0x3852e5(_0x132ab0, _0x291678, _0x556f7d['command']['101'], 0xc8);
        } else {
            await _0x47883e('Delivery\x20Error,\x20' + _0x1756c5 * 0x2 + '\x20boosts\x20' + _0x556f7d['command']['102'] + ',\x20invoice_id:\x20' + _0x494791['invoice_id'] + '.', 'log');
            return _0x3852e5(_0x132ab0, _0x291678, _0x556f7d['command']['103'], 0xc8);
        }
    } catch (_0xf2ec75) {
        console['error'](_0xf2ec75);
        _0x3852e5(_0x132ab0, _0x291678, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
    }
};
const _0x19a33f = (_0x5a2dc9, _0x1cf0c8) => {
    if (!_0xf7d15f['existsSync'](_0x388e79)) {
        _0x5a2dc9['writeHead'](0x194, { 'Content-Type': 'text/html' });
        _0x5a2dc9['end']('<h1>Aucune\x20commande\x20trouvée</h1>');
        return;
    }
    const _0x20eee9 = JSON['parse'](_0xf7d15f['readFileSync'](_0x388e79));
    const _0x3e0f7e = _0x29fca4 || 0x64;
    const _0x29a572 = parseInt(_0x1cf0c8) || 0x1;
    const _0x2fbd78 = _0x20eee9['length'];
    const _0x38d6a2 = Math['ceil'](_0x2fbd78 / _0x3e0f7e);
    const _0x445dc0 = (_0x29a572 - 0x1) * _0x3e0f7e;
    const _0x58c841 = _0x445dc0 + _0x3e0f7e;
    const _0x315539 = _0x20eee9['slice'](_0x445dc0, _0x58c841);
    const _0x5449bc = _0x20eee9['filter'](_0x140a94 => _0x140a94['status'] === 'completed')['length'];
    const _0x4a888c = _0x20eee9['reduce']((_0x2d5838, _0x84265b) => {
        const _0x1f59f3 = parseInt(_0x84265b['amount'], 0xa);
        const _0x18612d = _0x1f59f3 * 0xe;
        return _0x2d5838 + _0x18612d;
    }, 0x0);
    const _0x1e7a44 = _0x20eee9['reduce']((_0x4104af, _0x2f7e42) => {
        const _0x306162 = parseFloat(_0x2f7e42['price']);
        return _0x4104af + (isNaN(_0x306162) ? 0x0 : _0x306162);
    }, 0x0);
    _0x5a2dc9['writeHead'](0xc8, { 'Content-Type': 'text/html' });
    _0x5a2dc9['end']('<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html\x20lang=\x22fr\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>Dashboard\x20des\x20Commandes</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20{\x20box-sizing:\x20border-box;\x20margin:\x200;\x20padding:\x200;\x20font-family:\x20\x27Inter\x27,\x20sans-serif;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x20background-color:\x20#111827;\x20color:\x20#e5e7eb;\x20display:\x20flex;\x20justify-content:\x20center;\x20padding:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.dashboard\x20{\x20width:\x20100%;\x20max-width:\x201200px;\x20padding:\x2020px;\x20background:\x20#1f2937;\x20border-radius:\x2010px;\x20box-shadow:\x200\x204px\x2010px\x20rgba(0,\x200,\x200,\x200.3);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20img\x20{\x20width:\x2080px;\x20margin-right:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20color:\x20#60a5fa;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20{\x20text-align:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.8rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201.2rem;\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-container\x20{\x20overflow-x:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x20width:\x20100%;\x20border-collapse:\x20collapse;\x20background-color:\x20#374151;\x20border-radius:\x2010px;\x20overflow:\x20hidden;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2012px;\x20text-align:\x20left;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th\x20{\x20background-color:\x20#2563eb;\x20color:\x20white;\x20text-transform:\x20uppercase;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:nth-child(even)\x20{\x20background-color:\x20#1f2937;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:hover\x20{\x20background-color:\x20#334155;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20{\x20text-align:\x20center;\x20margin-top:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a\x20{\x20margin:\x200\x205px;\x20padding:\x208px\x2015px;\x20background-color:\x20#2563eb;\x20color:\x20white;\x20border-radius:\x205px;\x20text-decoration:\x20none;\x20transition:\x200.3s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a:hover\x20{\x20background-color:\x20#1e40af;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20footer\x20{\x20text-align:\x20center;\x20margin-top:\x2030px;\x20font-size:\x200.9rem;\x20opacity:\x200.7;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2010px;\x20font-size:\x2014px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.5rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dashboard\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://media.bloumechat.com/media/PFq3HUI6Es.png\x22\x20alt=\x22Logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>InfinityBoost</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Dashboard\x20des\x20Commandes</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Total\x20Gagné\x20:\x20<span\x20id=\x22totalEarned\x22>' + _0x1e7a44['toFixed'](0x2) + '€</span>\x20|\x20Total\x20Boosts\x20:\x20<span\x20id=\x22totalBoosts\x22>' + _0x4a888c + '</span>\x20|\x20Total\x20Commandes\x20:\x20<span\x20id=\x22totalCompletedOrders\x22>' + _0x5449bc + '</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Invoice\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Email</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Prix\x20(€)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Status</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Gateway</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Serveur\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x315539['map'](_0x3112db => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x3112db['invoice_id'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x3112db['email'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + parseFloat(_0x3112db['price'])['toFixed'](0x2) + '€</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x3112db['status'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x3112db['amount'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x3112db['gateway'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x3112db['serveurID'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>')['join']('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pagination\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x29a572 > 0x1 ? '<a\x20href=\x22/orders?page=' + (_0x29a572 - 0x1) + '\x22>&laquo;\x20Précédent</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Page\x20' + _0x29a572 + '\x20/\x20' + _0x38d6a2 + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x29a572 < _0x38d6a2 ? '<a\x20href=\x22/orders?page=' + (_0x29a572 + 0x1) + '\x22>Suivant\x20&raquo;</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>&copy;\x202024\x20InfinityBoost.\x20Tous\x20droits\x20réservés.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a');
};
const _0x5ac10b = _0x1629b3['createServer'](async (_0xb143f4, _0x2c35db) => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Nouvelle\x20requête\x20reçue:\x20' + _0xb143f4['method'] + '\x20' + _0xb143f4['url']);
    if (_0xb143f4['method'] === 'POST') {
        let _0x467524 = '';
        _0xb143f4['on']('data', _0x3e428f => {
            _0x467524 += _0x3e428f['toString']();
        });
        _0xb143f4['on']('end', async () => {
            try {
                const _0x211aaa = JSON['parse'](_0x467524);
                const _0x3ae8c3 = 'json';
                const _0x16c521 = _0xfd483f['parse'](_0xb143f4['url'], !![]);
                if (_0x211aaa['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC') {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                    await _0x17156d(_0x211aaa, _0x3ae8c3, _0x2c35db);
                } else {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Event\x20non\x20supporté:', _0x211aaa['event']);
                    _0x3852e5(_0x2c35db, _0x3ae8c3, 'Event\x20non\x20supporté', 0x190);
                }
            } catch (_0x5c204) {
                console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20parsing\x20JSON:', _0x5c204);
                _0x3852e5(_0x2c35db, 'json', 'Erreur\x20parsing\x20JSON', 0x190);
            }
        });
    } else if (_0xb143f4['method'] === 'GET') {
        try {
            const _0xce6e2c = _0xfd483f['parse'](_0xb143f4['url'], !![]);
            const _0x370528 = _0xce6e2c['query'];
            const _0xeb0daf = _0x370528['page'] || '1';
            console['log']('[' + new Date()['toISOString']() + ']\x20Requête\x20GET\x20reçue\x20pour\x20' + _0xce6e2c['pathname'] + ',\x20params:', _0x370528);
            if (_0xce6e2c['pathname'] === '/orders') {
                console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20requête\x20/orders,\x20page:', _0xeb0daf);
                _0x19a33f(_0x2c35db, _0xeb0daf);
            } else {
                console['log']('[' + new Date()['toISOString']() + ']\x20Route\x20non\x20trouvée:', _0xce6e2c['pathname']);
                _0x3852e5(_0x2c35db, 'json', 'Route\x20non\x20trouvée', 0x194);
            }
        } catch (_0x54fa08) {
            console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20du\x20traitement\x20de\x20la\x20requête\x20GET:', _0x54fa08);
            _0x3852e5(_0x2c35db, 'json', {
                'error': 'Erreur\x20interne\x20du\x20serveur',
                'details': _0x54fa08['message']
            }, 0x1f4);
        }
    } else {
        console['log']('[' + new Date()['toISOString']() + ']\x20Méthode\x20non\x20supportée:', _0xb143f4['method']);
        _0x3852e5(_0x2c35db, 'json', 'Méthode\x20non\x20supportée', 0x195);
    }
});
function _0x44ae() {
    const _0x47f2ff = [
        '12016BxbORe',
        '22693jZXhza',
        '6KMHQOU',
        '2550PZiWJm',
        '2508387dDlJZp',
        '176332IMqXzu',
        '20SdvzPl',
        '4302bDBdoG',
        '6240660VhXTWB',
        '6uqWxaH',
        '723297CuBqep',
        '18971njPsVm'
    ];
    _0x44ae = function () {
        return _0x47f2ff;
    };
    return _0x44ae();
}
_0x5ac10b['listen'](_0x1c3169, () => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Serveur\x20démarré\x20sur\x20http://' + _0x1c0654 + ':' + _0x1c3169);
});
(function (_0x5d3a74, _0x4d5d95) {
    const _0x422f05 = _0x30ae;
    const _0x441655 = _0x5d3a74();
    while (!![]) {
        try {
            const _0x1fb920 = parseInt(_0x422f05(0x1f1)) / 0x1 + -parseInt(_0x422f05(0x1f4)) / 0x2 + parseInt(_0x422f05(0x1f2)) / 0x3 * (-parseInt(_0x422f05(0x1ed)) / 0x4) + -parseInt(_0x422f05(0x1f5)) / 0x5 * (parseInt(_0x422f05(0x1ef)) / 0x6) + -parseInt(_0x422f05(0x1f0)) / 0x7 * (-parseInt(_0x422f05(0x1f6)) / 0x8) + parseInt(_0x422f05(0x1f3)) / 0x9 * (parseInt(_0x422f05(0x1ee)) / 0xa) + -parseInt(_0x422f05(0x1f7)) / 0xb * (-parseInt(_0x422f05(0x1ec)) / 0xc);
            if (_0x1fb920 === _0x4d5d95) {
                break;
            } else {
                _0x441655['push'](_0x441655['shift']());
            }
        } catch (_0x402011) {
            _0x441655['push'](_0x441655['shift']());
        }
    }
}(_0x11fd, 0x7e71b));
const _0x5b230d = require('http');
const _0x22ae14 = require('url');
const _0x51e816 = require('axios');
const _0x383526 = require('fs');
const _0x512936 = require('path');
const _0x4952f9 = require('os');
function _0x11fd() {
    const _0x7a29c0 = [
        '9vibMBr',
        '1919626GcwhWv',
        '15QZMICb',
        '57120kAJuiS',
        '14707rsofNi',
        '21204tIpfMz',
        '18548qvSVRs',
        '665990cujyro',
        '1097154sixChM',
        '91FTJiuZ',
        '510636QDPLLR',
        '651KaFjKB'
    ];
    _0x11fd = function () {
        return _0x7a29c0;
    };
    return _0x11fd();
}
const _0x59bae6 = require('gradient-string');
const _0x2d3252 = './commandes.json';
const _0x2f7510 = require('../config.json');
const {performOperation: _0x2ee046} = require('../required/performOp');
const {WebhookClient: _0x219ffc} = require('discord.js');
const _0xf39674 = require('line-by-line');
let _0x20f883 = _0x2f7510['service']['name_shop'];
let _0x489c56 = _0x2f7510['service']['banner'];
let _0x2fa9a1 = _0x2f7510['apikey'];
let _0x3f5a29 = _0x2f7510['autobuy']['port'];
let _0x50739a = _0x2f7510['autobuy']['host'];
let _0x4d37f2 = _0x2f7510['autobuy']['bio'];
let _0x3dc46a = _0x2f7510['autobuy']['shop_id_sellauth'];
let _0x1cdcc6 = _0x2f7510['autobuy']['apikey_sellauth'];
let _0x2adea1 = _0x2f7510['autobuy']['discord_webhook_url_command_log'];
let _0x375f71 = _0x2f7510['autobuy']['discord_webhook_url_console'];
let _0x2ea349 = _0x2f7510['autobuy']['orders_command_for_page'];
let _0x3277e3 = _0x2f7510['autobuy']['guildid_variable_Custom_Field'] || 'Serveur\x20ID';
let _0xbae139 = _0x2f7510['autobuy']['bio_variable_Custom_Field'] || 'Bio';
const _0x42eb12 = JSON['parse'](_0x383526['readFileSync']('./api-translate/langs.json', 'utf-8'));
function _0x30ae(_0x560e0d, _0xe3d46b) {
    const _0x11fd1b = _0x11fd();
    _0x30ae = function (_0x30aed4, _0x1e671b) {
        _0x30aed4 = _0x30aed4 - 0x1ec;
        let _0x3b6b8a = _0x11fd1b[_0x30aed4];
        return _0x3b6b8a;
    };
    return _0x30ae(_0x560e0d, _0xe3d46b);
}
const _0x4341e7 = new _0x219ffc({ 'url': _0x375f71 });
const _0x5eeab0 = new _0x219ffc({ 'url': _0x2adea1 });
const _0x127bee = _0x2f7510['service']['langue_shop'];
const _0x1410f6 = _0x42eb12[_0x127bee];
let _0x15c50c = _0x2f7510['bot']['clientid'];
let _0x12035e = _0x2f7510['bot']['token'];
let _0x317e49 = _0x2f7510['bot']['clientsecret'];
let _0x4834f9;
async function _0x237ab0() {
    return new Promise((_0x4feecc, _0x555771) => {
        _0x2ee046((_0x638c88, _0x1cd77b) => {
            if (_0x638c88) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x555771(_0x638c88);
            } else {
                _0x4834f9 = _0x1cd77b;
                _0x4feecc(_0x4834f9);
            }
        });
    });
}
async function _0x53738f(_0x2ac865) {
    const _0x3903bd = _0x2ac865['split'](':');
    if (_0x3903bd['length'] === 0x3) {
        return _0x3903bd[0x2];
    } else if (_0x3903bd['length'] === 0x1) {
        return _0x2ac865;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x2ac865);
        return _0x2ac865;
    }
}
async function _0x151339(_0x3bab8c) {
    if (_0x3bab8c['length'] <= 0x6) {
        return _0x3bab8c;
    }
    const _0x4f631d = _0x3bab8c['slice'](0x0, 0x14);
    const _0x587cc5 = _0x3bab8c['slice'](-0xa);
    const _0x934e8e = _0x3bab8c['length'] - _0x4f631d['length'] - _0x587cc5['length'];
    const _0x3e4ccc = '' + _0x4f631d + '*'['repeat'](_0x934e8e - 0x46) + _0x587cc5;
    return _0x3e4ccc;
}
async function _0x4d01ce(_0x2c1b71) {
    if (_0x2c1b71['length'] <= 0x6) {
        return _0x2c1b71;
    }
    const _0x11643b = _0x2c1b71['slice'](0x0, 0x6);
    const _0x42d918 = _0x2c1b71['slice'](-0xc);
    const _0x153b80 = _0x2c1b71['length'] - _0x11643b['length'] - _0x42d918['length'];
    const _0x45b60e = '' + _0x11643b + '*'['repeat'](_0x153b80 - 0x2d) + _0x42d918;
    return _0x45b60e;
}
async function _0x360c3e(_0x5b1511, _0x12068d) {
    let _0x3deeae = await _0x151339(_0x5b1511);
    let _0x59e45b = await _0x3b490a(_0x12068d);
    let _0x716faa = '';
    if (!_0x383526['existsSync'](_0x12068d)) {
        console['log'](_0x59bae6['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x4495ce = [];
    const _0x44d8bc = new _0xf39674(_0x12068d);
    _0x44d8bc['on']('error', _0x4c5754 => {
        console['error'](_0x59bae6['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x4c5754));
    });
    _0x44d8bc['on']('line', _0x1218f2 => {
        const _0x32134b = _0x1218f2['trim']();
        if (!_0x32134b['includes'](_0x5b1511['trim']())) {
            _0x4495ce['push'](_0x32134b);
        }
    });
    _0x44d8bc['on']('end', async () => {
        if (_0x4495ce['length'] === 0x0 && _0x59e45b !== 0x1) {
            console['log'](_0x59bae6['retro']('⛔\x20-\x20Le\x20token\x20' + _0x3deeae + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x59e45b !== 0x1) {
            _0x716faa = _0x4495ce['join'](_0x4952f9['EOL']);
        } else {
            _0x716faa = '';
        }
        _0x383526['writeFile'](_0x12068d, _0x716faa, _0x28fbd3 => {
            if (_0x28fbd3) {
                console['error'](_0x59bae6['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x28fbd3));
                return;
            }
            console['log'](_0x59bae6['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x3deeae + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x3b490a(_0x11a936) {
    try {
        const _0x5b9d21 = _0x383526['readFileSync'](_0x11a936, 'utf-8');
        const _0x1c6409 = _0x5b9d21['split']('\x0a');
        const _0x3bab4d = _0x1c6409['filter'](_0x5558b6 => _0x5558b6['trim']()['length'] > 0x0);
        return _0x3bab4d['length'];
    } catch (_0x242422) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x242422);
        return 0x0;
    }
}
const _0x1f4097 = async (_0x49c18d, _0x31d00f = 'order') => {
    try {
        const _0x19bece = {
            'embeds': [{
                    'title': _0x31d00f === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                    'color': _0x31d00f === 'order' ? 0xff00 : 0x99ff,
                    'timestamp': new Date()['toISOString'](),
                    'fields': []
                }]
        };
        if (_0x31d00f === 'order') {
            const _0x1bc0de = parseFloat(_0x49c18d['quantity']) || 0x0;
            const _0x455aa1 = parseFloat(_0x49c18d['nombre_boosts']) || 0x0;
            const _0x2288f6 = parseFloat(_0x49c18d['type_booster']) || 'N/A';
            const _0x159396 = parseFloat(_0x49c18d['price']) || 0x0;
            const _0x32973a = (_0x1bc0de * _0x159396)['toFixed'](0x2);
            _0x19bece['embeds'][0x0]['fields'] = [
                {
                    'name': '🆔\x20Invoice\x20ID',
                    'value': String(_0x49c18d['invoice_id']),
                    'inline': ![]
                },
                {
                    'name': '🏷️\x20Product',
                    'value': _0x49c18d['products_name'] ? _0x49c18d['products_name'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📧\x20Email',
                    'value': _0x49c18d['email'] ? _0x49c18d['email'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '👤\x20Server\x20ID',
                    'value': _0x49c18d['serveur_id'] ? _0x49c18d['serveur_id'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📦\x20Quantity',
                    'value': String(_0x1bc0de),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Number\x20boosts',
                    'value': String(_0x455aa1),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Type\x20boosts',
                    'value': String(_0x2288f6) + 'm',
                    'inline': ![]
                },
                {
                    'name': '💰\x20Unit\x20Price',
                    'value': String(_0x159396) + '€',
                    'inline': ![]
                },
                {
                    'name': '💶\x20Total\x20Price',
                    'value': String(_0x32973a) + '€',
                    'inline': ![]
                },
                {
                    'name': '💳\x20Gateway',
                    'value': _0x49c18d['gateway'] ? _0x49c18d['gateway'] : 'N/A',
                    'inline': ![]
                }
            ];
        } else {
            _0x19bece['embeds'][0x0]['description'] = _0x49c18d;
            if (_0x49c18d['includes']('Order\x20Delivered')) {
                _0x19bece['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                _0x19bece['embeds'][0x0]['color'] = 0xff00;
            } else if (_0x49c18d['includes']('Delivery\x20Error')) {
                _0x19bece['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                _0x19bece['embeds'][0x0]['color'] = 0xff0000;
            } else if (_0x49c18d['includes']('Duplicate\x20Order')) {
                _0x19bece['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                _0x19bece['embeds'][0x0]['color'] = 0xffa500;
            } else {
                _0x19bece['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                _0x19bece['embeds'][0x0]['color'] = 0xffa500;
            }
        }
        await _0x5eeab0['send']({ 'embeds': [_0x19bece['embeds'][0x0]] });
    } catch (_0x53b6a5) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x53b6a5['response']?.['data'] || _0x53b6a5['message']);
    }
};
async function _0x2d4dc1(_0x22c973) {
    try {
        const _0x46c210 = await _0x4341e7['send']({ 'embeds': [_0x22c973] });
        return _0x46c210['id'];
    } catch (_0x478cb9) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20message:', _0x478cb9['response']?.['data'] || _0x478cb9['message']);
        throw _0x478cb9;
    }
}
async function _0x4197d0(_0x4cb821, _0x4399ea) {
    try {
        await _0x4341e7['editMessage'](_0x4cb821, { 'embeds': [_0x4399ea] });
    } catch (_0x2788fa) {
        console['error']('Error\x20editing\x20Discord\x20webhook\x20message:', _0x2788fa['response']?.['data'] || _0x2788fa['message']);
        throw _0x2788fa;
    }
}
const _0x50d2a8 = (_0x47fba8, _0x5d5d5d, _0x14711f, _0x447fa8 = 0xc8) => {
    if (_0x5d5d5d === 'write') {
        _0x47fba8['writeHead'](_0x447fa8, { 'Content-Type': 'text/plain' });
        _0x47fba8['write'](_0x14711f);
    } else {
        _0x47fba8['writeHead'](_0x447fa8, { 'Content-Type': 'application/json' });
        _0x47fba8['end'](JSON['stringify'](_0x14711f));
    }
};
const _0x3b00a7 = async (_0xbe56f5, _0x5c75a8 = 0xc) => {
    try {
        const _0x97b96 = await _0x51e816['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x2fa9a1 + '&machineid=' + _0x4834f9 + '&shopname=' + _0x20f883 + '&mode=CHECK_BOT&id=' + _0xbe56f5, {}, { 'timeout': 0xf4240 });
        const {erreur: _0x2e8576} = _0x97b96['data'];
        return _0x2e8576 !== 'bot';
    } catch (_0x18a589) {
        console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:', _0x18a589);
        return ![];
    }
};
const _0x21e499 = async (_0x13ad34, _0x459571, _0x7f5ee4) => {
    try {
        await _0x237ab0();
        const _0x3210d5 = _0x13ad34['item'];
        if (!_0x3210d5) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
            return _0x50d2a8(_0x7f5ee4, _0x459571, _0x1410f6['command']['106'], 0x190);
        }
        const _0x33b33f = parseInt(_0x3210d5['quantity'], 0xa) || 0x1;
        const _0x10aa1d = _0x3210d5['custom_fields']?.[_0x3277e3];
        const _0x23c8f2 = _0x3210d5['custom_fields']?.[_0xbae139] || _0x4d37f2;
        const _0x1269ae = _0x3210d5['product']?.['name'];
        const _0x218220 = '/stock/';
        let _0x53bdd8 = _0x512936['join'](__dirname, '..', _0x218220, 'stock-1m.txt');
        let _0x5e8345 = _0x512936['join'](__dirname, '..', _0x218220, 'stock-3m.txt');
        let _0x6857fa;
        console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20pour\x20le\x20serveur:\x20' + _0x10aa1d);
        if (!_0x10aa1d || !_0x1269ae) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20' + (!_0x10aa1d ? 'serveurID' : 'products_name'));
            return _0x50d2a8(_0x7f5ee4, _0x459571, _0x1410f6['command']['105'], 0x190);
        }
        const _0x3cd0a8 = _0x1269ae['match'](/\[(\d+)\]/);
        const _0x11c5e7 = _0x1269ae['match'](/boost (1|3) Mois/);
        if (!_0x3cd0a8 || !_0x11c5e7) {
            await _0x1f4097('Delivery\x20Error,\x20invoice_id:\x20' + _0x3210d5['invoice_id'], 'log');
            return _0x50d2a8(_0x7f5ee4, _0x459571, _0x1410f6['command']['105'], 0xc8);
        }
        const _0x1f4ab0 = parseInt(_0x3cd0a8[0x1], 0xa);
        const _0x2094ed = _0x1f4ab0 * _0x33b33f;
        const _0x17be32 = parseInt(_0x11c5e7[0x1], 0xa);
        const _0xb82d56 = _0x17be32 === 0x3 ? '3m' : '1m';
        if (_0xb82d56 === '1m') {
            _0x6857fa = _0x53bdd8;
        } else if (_0xb82d56 === '3m') {
            _0x6857fa = _0x5e8345;
        }
        await _0x1f4097({
            'invoice_id': _0x3210d5['invoice_id'],
            'serveur_id': _0x10aa1d,
            'quantity': _0x33b33f,
            'price': _0x3210d5['price'],
            'mode': _0x459571,
            'products_name': _0x1269ae,
            'gateway': _0x13ad34['gateway'],
            'nombre_boosts': _0x2094ed,
            'type_booster': _0xb82d56
        }, 'order');
        let _0x249a16 = _0x383526['existsSync'](_0x2d3252) ? JSON['parse'](_0x383526['readFileSync'](_0x2d3252)) : [];
        if (_0x249a16['find'](_0x1ada7d => _0x1ada7d['invoice_id'] === _0x3210d5['invoice_id'])) {
            await _0x1f4097('Duplicate\x20Order,\x20invoice_id:\x20' + _0x3210d5['invoice_id'], 'log');
            return _0x50d2a8(_0x7f5ee4, _0x459571, _0x1410f6['command']['104'], 0xc8);
        }
        const _0x3fa270 = {
            'invoice_id': _0x3210d5['invoice_id'],
            'email': _0x3210d5['email'],
            'amount': _0x33b33f,
            'price': _0x3210d5['total_price'],
            'gateway': _0x13ad34['gateway'],
            'serveurID': _0x10aa1d,
            'status': _0x3210d5['status'],
            'custom_fields': _0x3210d5['custom_fields'],
            'product_name': _0x1269ae
        };
        _0x249a16['push'](_0x3fa270);
        _0x383526['writeFileSync'](_0x2d3252, JSON['stringify'](_0x249a16, null, 0x2));
        let _0x5c8208 = 0x0;
        let _0x15f8fd = 0x0;
        let _0x300b31 = _0x2094ed / 0x2;
        let _0x4cc715 = ![];
        let _0x3c3e1a = 0x0;
        const _0x5fa405 = 0x6;
        let _0x595824 = [];
        let _0x488352 = '[+]\x20' + _0x20f883 + '\x20initialisés.';
        if (_0x595824['length'] >= _0x5fa405) {
            _0x595824['pop']();
        }
        _0x595824['unshift'](_0x488352);
        let _0x23244a = await _0x3b490a(_0x6857fa);
        if (_0x23244a === 0x0) {
            _0x595824['unshift'](_0x20f883 + '\x20' + _0x1410f6['command']['13']);
            const _0x57c029 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1410f6['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x1410f6['command']['22'] + ('\x20:\x20**0/' + _0x2094ed + '**\x0a🔸\x20Boosts\x20') + _0x1410f6['command']['28'] + ('\x20:\x20**' + _0x2094ed + '/' + _0x2094ed + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x10aa1d,
                'fields': _0x595824['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x595824['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x489c56 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x20f883 + '\x20-\x20' + _0x1410f6['command']['7'] + '\x20MrX' }
            };
            _0x50d2a8(_0x7f5ee4, _0x459571, _0x1410f6['command']['33'], 0xc8);
            return await _0x2d4dc1(_0x57c029);
        } else if (_0x2094ed / 0x2 > _0x23244a && _0x23244a !== _0x2094ed / 0x2) {
            _0x595824['unshift'](_0x20f883 + '\x20' + _0x1410f6['command']['67']);
            const _0x45f72e = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1410f6['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x1410f6['command']['22'] + ('\x20:\x20**0/' + _0x2094ed + '**\x0a🔸\x20Boosts\x20') + _0x1410f6['command']['28'] + ('\x20:\x20**' + _0x2094ed + '/' + _0x2094ed + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x10aa1d,
                'fields': _0x595824['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x595824['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x489c56 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x20f883 + '\x20-\x20' + _0x1410f6['command']['7'] + '\x20MrX' }
            };
            _0x50d2a8(_0x7f5ee4, _0x459571, _0x1410f6['command']['33'], 0xc8);
            return await _0x2d4dc1(_0x45f72e);
        }
        while (!_0x4cc715 && _0x3c3e1a < 0xf) {
            try {
                _0x4cc715 = await _0x3b00a7(_0x10aa1d);
                if (!_0x4cc715) {
                    _0x3c3e1a++;
                    const _0x28e7d8 = _0x3c3e1a * 0xf;
                    await _0x1f4097(_0x1410f6['command']['97'] + '\x20' + _0x3c3e1a + '/15\x20' + _0x1410f6['command']['98'] + '\x20' + _0x28e7d8 + '\x20' + _0x1410f6['command']['99'] + ',\x20invoice_id:\x20' + _0x3210d5['invoice_id'] + '.', _0x375f71);
                    if (_0x3c3e1a < 0xf) {
                        await new Promise(_0x59f199 => setTimeout(_0x59f199, 0xf * 0x3c * 0x3e8));
                    }
                }
            } catch (_0x4a8c50) {
                console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:\x20' + _0x4a8c50['message'] + ',\x20invoice_id:\x20' + _0x3210d5['invoice_id'] + '.');
                await _0x1f4097('Delivery\x20Error,\x20invoice_id:\x20' + _0x3210d5['invoice_id'], 'log');
                _0x3c3e1a++;
                if (_0x3c3e1a < 0xf) {
                    await new Promise(_0x42a436 => setTimeout(_0x42a436, 0xf * 0x3c * 0x3e8));
                }
            }
        }
        if (!_0x4cc715) {
            return _0x50d2a8(_0x7f5ee4, _0x459571, _0x1410f6['command']['96'], 0xc8);
        }
        const _0x14b5e3 = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1410f6['command']['23'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x1410f6['command']['22'] + ('\x20:\x20**0/' + _0x2094ed + '**\x0a🔸\x20Boosts\x20') + _0x1410f6['command']['28'] + ('\x20:\x20**0/' + _0x2094ed + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x10aa1d,
            'fields': _0x595824['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x595824['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0x489c56 },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x20f883 + '\x20-\x20' + _0x1410f6['command']['7'] + '\x20MrX' }
        };
        const _0x8e8b66 = await _0x2d4dc1(_0x14b5e3);
        const _0x5d12a3 = _0x383526['readFileSync'](_0x6857fa)['toString']()['split']('\x0a');
        for (let _0x3c3fa4 = 0x0; _0x3c3fa4 < _0x2094ed / 0x2; _0x3c3fa4++) {
            let _0x4d7ead = 0x0;
            async function _0x45bc1e(_0x1184d7 = 0x0) {
                try {
                    const _0x1b5a55 = _0x5d12a3[_0x3c3fa4];
                    const _0x39d44d = await _0x53738f(_0x1b5a55);
                    const _0x3179af = await _0x51e816['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x2fa9a1 + '&machineid=' + _0x4834f9 + '&shopname=' + _0x20f883 + '&mode=BOOST&guildid=' + _0x10aa1d + '&bio=' + _0x23c8f2 + '&clientid=' + _0x15c50c + '&botclientsecret=' + _0x317e49 + '&bottoken=' + _0x12035e + '&tokenboost=' + _0x39d44d, {}, { 'timeout': 0xf4240 });
                    const {
                        erreur: _0x54f1c9,
                        success: _0x264d25
                    } = _0x3179af['data'];
                    if (_0x595824['length'] >= _0x5fa405) {
                        _0x595824['pop']();
                    }
                    if (_0x264d25 === !![]) {
                        _0x5c8208++;
                        _0x595824['unshift']('✅\x20-\x20' + _0x1410f6['command']['81'] + '\x20:\x20' + await _0x4d01ce(_0x39d44d));
                        await _0x360c3e(_0x1b5a55, _0x6857fa);
                    } else if (_0x264d25 === ![]) {
                        _0x15f8fd++;
                        if (_0x54f1c9 === 'invalid') {
                            _0x595824['unshift']('❌\x20-\x20' + _0x1410f6['command']['80'] + '\x20:\x20' + await _0x4d01ce(_0x39d44d));
                            await _0x360c3e(_0x1b5a55, _0x6857fa);
                        } else if (_0x54f1c9 === 'perm') {
                            _0x595824['unshift']('⛔\x20-\x20' + _0x1410f6['command']['79'] + '\x20:\x20' + await _0x4d01ce(_0x39d44d));
                            if (_0x1184d7 < 0x3) {
                                _0x1184d7++;
                                _0x595824['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x4d01ce(_0x39d44d));
                                await _0x45bc1e(_0x1184d7);
                            }
                        } else if (_0x54f1c9 === 'used') {
                            _0x595824['unshift']('⚠️\x20-\x20' + _0x1410f6['command']['78'] + '\x20:\x20' + await _0x4d01ce(_0x39d44d));
                            await _0x360c3e(_0x1b5a55, _0x6857fa);
                        } else {
                            _0x595824['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x4d01ce(_0x39d44d));
                            if (_0x1184d7 < 0x3) {
                                _0x1184d7++;
                                _0x595824['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x4d01ce(_0x39d44d));
                                await _0x45bc1e(_0x1184d7);
                            }
                        }
                    }
                } catch {
                    _0x15f8fd++;
                    if (_0x1184d7 < 0x3) {
                        _0x1184d7++;
                        _0x595824['unshift']('🔄️\x20-\x20retry');
                        await _0x45bc1e(_0x1184d7);
                    }
                    _0x595824['unshift']('⚠️\x20-\x20error\x20API');
                }
            }
            await _0x45bc1e(_0x4d7ead);
            const _0x13ad84 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1410f6['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x1410f6['command']['22'] + ('\x20:\x20**' + _0x5c8208 * 0x2 + '/' + _0x2094ed + '**\x0a🔸\x20Boosts\x20') + _0x1410f6['command']['28'] + ('\x20:\x20**' + _0x15f8fd * 0x2 + '/' + _0x2094ed + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x10aa1d,
                'fields': _0x595824['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x595824['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x489c56 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x20f883 + '\x20-\x20' + _0x1410f6['command']['7'] + '\x20MrX' }
            };
            await _0x4197d0(_0x8e8b66, _0x13ad84);
        }
        const _0x1f850b = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1410f6['command']['21'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x1410f6['command']['22'] + ('\x20:\x20**' + _0x5c8208 * 0x2 + '/' + _0x2094ed + '**\x0a🔸\x20Boosts\x20') + _0x1410f6['command']['28'] + ('\x20:\x20**' + _0x15f8fd * 0x2 + '/' + _0x2094ed + '**\x0a📝\x20Server\x20id:\x20') + _0x10aa1d,
            'fields': _0x595824['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x595824['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0x489c56 },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x20f883 + '\x20-\x20' + _0x1410f6['command']['7'] + '\x20MrX' }
        };
        await _0x4197d0(_0x8e8b66, _0x1f850b);
        if (_0x5c8208 >= _0x300b31) {
            await _0x1f4097('Order\x20Delivered,\x20' + _0x1410f6['command']['100'] + ('\x20(' + _0x5c8208 * 0x2 + '\x20boosts),\x20invoice_id:\x20' + _0x3210d5['invoice_id'] + '.'), 'log');
            _0x50d2a8(_0x7f5ee4, 'write', _0x1410f6['command']['101'], 0xc8);
            return _0x50d2a8(_0x7f5ee4, _0x459571, _0x1410f6['command']['101'], 0xc8);
        } else {
            await _0x1f4097('Delivery\x20Error,\x20' + _0x15f8fd * 0x2 + '\x20boosts\x20' + _0x1410f6['command']['102'] + ',\x20invoice_id:\x20' + _0x3210d5['invoice_id'] + '.', 'log');
            _0x50d2a8(_0x7f5ee4, 'write', _0x1410f6['command']['103'], 0xc8);
            return _0x50d2a8(_0x7f5ee4, _0x459571, _0x1410f6['command']['103'], 0xc8);
        }
    } catch (_0x3721c1) {
        console['error'](_0x3721c1);
        _0x50d2a8(_0x7f5ee4, _0x459571, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
    }
};
const _0x3e0ceb = (_0x2c90a2, _0x30d511) => {
    if (!_0x383526['existsSync'](_0x2d3252)) {
        _0x2c90a2['writeHead'](0x194, { 'Content-Type': 'text/html' });
        _0x2c90a2['end']('<h1>Aucune\x20commande\x20trouvée</h1>');
        return;
    }
    const _0x5ae784 = JSON['parse'](_0x383526['readFileSync'](_0x2d3252));
    const _0x2259a6 = _0x2ea349 || 0x64;
    const _0x1214d1 = parseInt(_0x30d511) || 0x1;
    const _0x48cc95 = _0x5ae784['length'];
    const _0x329fcc = Math['ceil'](_0x48cc95 / _0x2259a6);
    const _0x4a453e = (_0x1214d1 - 0x1) * _0x2259a6;
    const _0x12e8ab = _0x4a453e + _0x2259a6;
    const _0x28bf3d = _0x5ae784['slice'](_0x4a453e, _0x12e8ab);
    const _0x41dc11 = _0x5ae784['filter'](_0x2d246c => _0x2d246c['status'] === 'completed')['length'];
    const _0x120a3a = _0x5ae784['reduce']((_0x161b0, _0x4adcbb) => {
        const _0x54e269 = parseInt(_0x4adcbb['amount'], 0xa);
        const _0x3d3686 = _0x54e269 * 0xe;
        return _0x161b0 + _0x3d3686;
    }, 0x0);
    const _0x3d6144 = _0x5ae784['reduce']((_0xf4773c, _0x4e6bde) => {
        const _0x25748e = parseFloat(_0x4e6bde['price']);
        return _0xf4773c + (isNaN(_0x25748e) ? 0x0 : _0x25748e);
    }, 0x0);
    _0x2c90a2['writeHead'](0xc8, { 'Content-Type': 'text/html' });
    _0x2c90a2['end']('<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html\x20lang=\x22fr\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>Dashboard\x20des\x20Commandes</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20{\x20box-sizing:\x20border-box;\x20margin:\x200;\x20padding:\x200;\x20font-family:\x20\x27Inter\x27,\x20sans-serif;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x20background-color:\x20#111827;\x20color:\x20#e5e7eb;\x20display:\x20flex;\x20justify-content:\x20center;\x20padding:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.dashboard\x20{\x20width:\x20100%;\x20max-width:\x201200px;\x20padding:\x2020px;\x20background:\x20#1f2937;\x20border-radius:\x2010px;\x20box-shadow:\x200\x204px\x2010px\x20rgba(0,\x200,\x200,\x200.3);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20img\x20{\x20width:\x2080px;\x20margin-right:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20color:\x20#60a5fa;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20{\x20text-align:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.8rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201.2rem;\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-container\x20{\x20overflow-x:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x20width:\x20100%;\x20border-collapse:\x20collapse;\x20background-color:\x20#374151;\x20border-radius:\x2010px;\x20overflow:\x20hidden;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2012px;\x20text-align:\x20left;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th\x20{\x20background-color:\x20#2563eb;\x20color:\x20white;\x20text-transform:\x20uppercase;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:nth-child(even)\x20{\x20background-color:\x20#1f2937;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:hover\x20{\x20background-color:\x20#334155;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20{\x20text-align:\x20center;\x20margin-top:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a\x20{\x20margin:\x200\x205px;\x20padding:\x208px\x2015px;\x20background-color:\x20#2563eb;\x20color:\x20white;\x20border-radius:\x205px;\x20text-decoration:\x20none;\x20transition:\x200.3s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a:hover\x20{\x20background-color:\x20#1e40af;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20footer\x20{\x20text-align:\x20center;\x20margin-top:\x2030px;\x20font-size:\x200.9rem;\x20opacity:\x200.7;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2010px;\x20font-size:\x2014px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.5rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dashboard\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://media.bloumechat.com/media/PFq3HUI6Es.png\x22\x20alt=\x22Logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>InfinityBoost</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Dashboard\x20des\x20Commandes</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Total\x20Gagné\x20:\x20<span\x20id=\x22totalEarned\x22>' + _0x3d6144['toFixed'](0x2) + '€</span>\x20|\x20Total\x20Boosts\x20:\x20<span\x20id=\x22totalBoosts\x22>' + _0x120a3a + '</span>\x20|\x20Total\x20Commandes\x20:\x20<span\x20id=\x22totalCompletedOrders\x22>' + _0x41dc11 + '</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Invoice\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Email</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Prix\x20(€)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Status</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Gateway</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Serveur\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x28bf3d['map'](_0x20b2ea => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x20b2ea['invoice_id'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x20b2ea['email'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + parseFloat(_0x20b2ea['price'])['toFixed'](0x2) + '€</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x20b2ea['status'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x20b2ea['amount'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x20b2ea['gateway'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x20b2ea['serveurID'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>')['join']('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pagination\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x1214d1 > 0x1 ? '<a\x20href=\x22/orders?page=' + (_0x1214d1 - 0x1) + '\x22>&laquo;\x20Précédent</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Page\x20' + _0x1214d1 + '\x20/\x20' + _0x329fcc + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x1214d1 < _0x329fcc ? '<a\x20href=\x22/orders?page=' + (_0x1214d1 + 0x1) + '\x22>Suivant\x20&raquo;</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>&copy;\x202024\x20InfinityBoost.\x20Tous\x20droits\x20réservés.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a');
};
const _0x4449b9 = _0x5b230d['createServer'](async (_0x507aa8, _0x249024) => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Nouvelle\x20requête\x20reçue:\x20' + _0x507aa8['method'] + '\x20' + _0x507aa8['url']);
    if (_0x507aa8['method'] === 'POST') {
        let _0x234aa6 = '';
        _0x507aa8['on']('data', _0x2c4847 => {
            _0x234aa6 += _0x2c4847['toString']();
        });
        _0x507aa8['on']('end', async () => {
            try {
                const _0x56f03e = JSON['parse'](_0x234aa6);
                const _0x32b815 = 'json';
                const _0x4a3888 = _0x22ae14['parse'](_0x507aa8['url'], !![]);
                if (_0x56f03e['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC') {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                    await _0x21e499(_0x56f03e, _0x32b815, _0x249024);
                } else {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Event\x20non\x20supporté:', _0x56f03e['event']);
                    _0x50d2a8(_0x249024, _0x32b815, 'Event\x20non\x20supporté', 0x190);
                }
            } catch (_0x651552) {
                console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20parsing\x20JSON:', _0x651552);
                _0x50d2a8(_0x249024, 'json', 'Erreur\x20parsing\x20JSON', 0x190);
            }
        });
    } else if (_0x507aa8['method'] === 'GET') {
        try {
            const _0x5cb6dd = _0x22ae14['parse'](_0x507aa8['url'], !![]);
            const _0x1ee327 = _0x5cb6dd['query'];
            const _0xb00461 = _0x1ee327['page'] || '1';
            console['log']('[' + new Date()['toISOString']() + ']\x20Requête\x20GET\x20reçue\x20pour\x20' + _0x5cb6dd['pathname'] + ',\x20params:', _0x1ee327);
            if (_0x5cb6dd['pathname'] === '/orders') {
                console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20requête\x20/orders,\x20page:', _0xb00461);
                _0x3e0ceb(_0x249024, _0xb00461);
            } else {
                console['log']('[' + new Date()['toISOString']() + ']\x20Route\x20non\x20trouvée:', _0x5cb6dd['pathname']);
                _0x50d2a8(_0x249024, 'json', 'Route\x20non\x20trouvée', 0x194);
            }
        } catch (_0x4c16a2) {
            console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20du\x20traitement\x20de\x20la\x20requête\x20GET:', _0x4c16a2);
            _0x50d2a8(_0x249024, 'json', {
                'error': 'Erreur\x20interne\x20du\x20serveur',
                'details': _0x4c16a2['message']
            }, 0x1f4);
        }
    } else {
        console['log']('[' + new Date()['toISOString']() + ']\x20Méthode\x20non\x20supportée:', _0x507aa8['method']);
        _0x50d2a8(_0x249024, 'json', 'Méthode\x20non\x20supportée', 0x195);
    }
});
_0x4449b9['listen'](_0x3f5a29, () => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Serveur\x20démarré\x20sur\x20http://' + _0x50739a + ':' + _0x3f5a29);
});
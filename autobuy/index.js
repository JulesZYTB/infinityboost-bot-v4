(function (_0x51a148, _0x475136) {
    const _0x228b1a = _0x3bae;
    const _0x29f828 = _0x51a148();
    while (!![]) {
        try {
            const _0xda0c64 = -parseInt(_0x228b1a(0x1c2)) / 0x1 * (parseInt(_0x228b1a(0x1c1)) / 0x2) + parseInt(_0x228b1a(0x1c0)) / 0x3 * (parseInt(_0x228b1a(0x1c5)) / 0x4) + parseInt(_0x228b1a(0x1c3)) / 0x5 * (parseInt(_0x228b1a(0x1bf)) / 0x6) + parseInt(_0x228b1a(0x1c4)) / 0x7 + parseInt(_0x228b1a(0x1bd)) / 0x8 + parseInt(_0x228b1a(0x1be)) / 0x9 + -parseInt(_0x228b1a(0x1c6)) / 0xa;
            if (_0xda0c64 === _0x475136) {
                break;
            } else {
                _0x29f828['push'](_0x29f828['shift']());
            }
        } catch (_0x5c958a) {
            _0x29f828['push'](_0x29f828['shift']());
        }
    }
}(_0x387f, 0xd1bb0));
const _0x1df006 = require('http');
const _0x130cbc = require('url');
const _0x405f39 = require('axios');
const _0x3019c7 = require('fs');
const _0x3c39ca = require('path');
const _0x488f06 = require('os');
const _0x18b869 = require('gradient-string');
const _0x5bc76d = './commandes.json';
const _0x35b4d7 = require('../config.json');
function _0x3bae(_0x782f90, _0x442b65) {
    const _0x387f1a = _0x387f();
    _0x3bae = function (_0x3bae22, _0x632019) {
        _0x3bae22 = _0x3bae22 - 0x1bd;
        let _0x1155df = _0x387f1a[_0x3bae22];
        return _0x1155df;
    };
    return _0x3bae(_0x782f90, _0x442b65);
}
const {performOperation: _0x4c2b55} = require('../required/performOp');
const {WebhookClient: _0x5e9de7} = require('discord.js');
const _0x274031 = require('line-by-line');
let _0x378f48 = _0x35b4d7['service']['name_shop'];
let _0x5efbd2 = _0x35b4d7['service']['banner'];
let _0x3d4694 = _0x35b4d7['apikey'];
let _0x27ffab = _0x35b4d7['autobuy']['port'];
let _0x1d27bf = _0x35b4d7['autobuy']['host'];
let _0x284b38 = _0x35b4d7['autobuy']['bio'];
let _0x4bca01 = _0x35b4d7['autobuy']['shop_id_sellauth'];
let _0x5ccb72 = _0x35b4d7['autobuy']['apikey_sellauth'];
let _0x4db450 = _0x35b4d7['autobuy']['discord_webhook_url_command_log'];
let _0x1ced72 = _0x35b4d7['autobuy']['discord_webhook_url_console'];
let _0x265f61 = _0x35b4d7['autobuy']['orders_command_for_page'];
let _0x1f0961 = _0x35b4d7['autobuy']['guildid_variable_Custom_Field'] || 'Serveur\x20ID';
let _0x579717 = _0x35b4d7['autobuy']['bio_variable_Custom_Field'] || 'Bio';
const _0x269183 = JSON['parse'](_0x3019c7['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x33057c = new _0x5e9de7({ 'url': _0x1ced72 });
const _0x142702 = new _0x5e9de7({ 'url': _0x4db450 });
const _0x52a8d7 = _0x35b4d7['service']['langue_shop'];
const _0x2d30cd = _0x269183[_0x52a8d7];
let _0xbe1552 = _0x35b4d7['bot']['clientid'];
function _0x387f() {
    const _0xd1da48 = [
        '1703712BbvfCN',
        '1FWHYuM',
        '2173135ROUgfq',
        '274071NAQJBR',
        '5030264HQcmBs',
        '35802180kFsjNa',
        '11532240CKVobj',
        '11241000eChWJZ',
        '18aioXax',
        '3SpGTmc'
    ];
    _0x387f = function () {
        return _0xd1da48;
    };
    return _0x387f();
}
let _0x744567 = _0x35b4d7['bot']['token'];
let _0x1c18a4 = _0x35b4d7['bot']['clientsecret'];
let _0x19d548;
async function _0x3b8a46() {
    return new Promise((_0x4e92d9, _0xe49a48) => {
        _0x4c2b55((_0x151bb0, _0x38d63a) => {
            if (_0x151bb0) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0xe49a48(_0x151bb0);
            } else {
                _0x19d548 = _0x38d63a;
                _0x4e92d9(_0x19d548);
            }
        });
    });
}
async function _0x50b135(_0x3361ab) {
    const _0x1d9923 = _0x3361ab['split'](':');
    if (_0x1d9923['length'] === 0x3) {
        return _0x1d9923[0x2];
    } else if (_0x1d9923['length'] === 0x1) {
        return _0x3361ab;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x3361ab);
        return _0x3361ab;
    }
}
async function _0x46bd7d(_0x351d54) {
    if (_0x351d54['length'] <= 0x6) {
        return _0x351d54;
    }
    const _0x5508a4 = _0x351d54['slice'](0x0, 0x14);
    const _0x117a24 = _0x351d54['slice'](-0xa);
    const _0x4ca751 = _0x351d54['length'] - _0x5508a4['length'] - _0x117a24['length'];
    const _0x2c7790 = '' + _0x5508a4 + '*'['repeat'](_0x4ca751 - 0x46) + _0x117a24;
    return _0x2c7790;
}
async function _0x516384(_0x2410b9) {
    if (_0x2410b9['length'] <= 0x6) {
        return _0x2410b9;
    }
    const _0x49b4bc = _0x2410b9['slice'](0x0, 0x6);
    const _0xfe4a96 = _0x2410b9['slice'](-0xc);
    const _0x3e99e5 = _0x2410b9['length'] - _0x49b4bc['length'] - _0xfe4a96['length'];
    const _0x330f83 = '' + _0x49b4bc + '*'['repeat'](_0x3e99e5 - 0x2d) + _0xfe4a96;
    return _0x330f83;
}
async function _0x34150c(_0x560083, _0x1908de) {
    let _0x1ff629 = await _0x46bd7d(_0x560083);
    let _0x47417b = await _0x3257b3(_0x1908de);
    let _0x36b394 = '';
    if (!_0x3019c7['existsSync'](_0x1908de)) {
        console['log'](_0x18b869['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0xce4a88 = [];
    const _0x4216b1 = new _0x274031(_0x1908de);
    _0x4216b1['on']('error', _0x5d72f5 => {
        console['error'](_0x18b869['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x5d72f5));
    });
    _0x4216b1['on']('line', _0x2abc7a => {
        const _0xaaeba0 = _0x2abc7a['trim']();
        if (!_0xaaeba0['includes'](_0x560083['trim']())) {
            _0xce4a88['push'](_0xaaeba0);
        }
    });
    _0x4216b1['on']('end', async () => {
        if (_0xce4a88['length'] === 0x0 && _0x47417b !== 0x1) {
            console['log'](_0x18b869['retro']('⛔\x20-\x20Le\x20token\x20' + _0x1ff629 + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x47417b !== 0x1) {
            _0x36b394 = _0xce4a88['join'](_0x488f06['EOL']);
        } else {
            _0x36b394 = '';
        }
        _0x3019c7['writeFile'](_0x1908de, _0x36b394, _0x25b217 => {
            if (_0x25b217) {
                console['error'](_0x18b869['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x25b217));
                return;
            }
            console['log'](_0x18b869['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x1ff629 + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x3257b3(_0x2ffec8) {
    try {
        const _0x323135 = _0x3019c7['readFileSync'](_0x2ffec8, 'utf-8');
        const _0x4fd6cc = _0x323135['split']('\x0a');
        const _0x7b354e = _0x4fd6cc['filter'](_0x2fe02b => _0x2fe02b['trim']()['length'] > 0x0);
        return _0x7b354e['length'];
    } catch (_0x37ffee) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x37ffee);
        return 0x0;
    }
}
const _0x4da502 = async (_0x656530, _0x86bdd7 = 'order') => {
    try {
        const _0x47d3e8 = {
            'embeds': [{
                    'title': _0x86bdd7 === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                    'color': _0x86bdd7 === 'order' ? 0xff00 : 0x99ff,
                    'timestamp': new Date()['toISOString'](),
                    'fields': []
                }]
        };
        if (_0x86bdd7 === 'order') {
            const _0x55f524 = parseFloat(_0x656530['quantity']) || 0x0;
            const _0x48b329 = parseFloat(_0x656530['nombre_boosts']) || 0x0;
            const _0x43a006 = parseFloat(_0x656530['type_booster']) || 'N/A';
            const _0xc5444c = parseFloat(_0x656530['price']) || 0x0;
            const _0x1b3336 = (_0x55f524 * _0xc5444c)['toFixed'](0x2);
            _0x47d3e8['embeds'][0x0]['fields'] = [
                {
                    'name': '🆔\x20Invoice\x20ID',
                    'value': String(_0x656530['invoice_id']),
                    'inline': ![]
                },
                {
                    'name': '🏷️\x20Product',
                    'value': _0x656530['products_name'] ? _0x656530['products_name'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📧\x20Email',
                    'value': _0x656530['email'] ? _0x656530['email'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '👤\x20Server\x20ID',
                    'value': _0x656530['serveur_id'] ? _0x656530['serveur_id'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📦\x20Quantity',
                    'value': String(_0x55f524),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Number\x20boosts',
                    'value': String(_0x48b329),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Type\x20boosts',
                    'value': String(_0x43a006) + 'm',
                    'inline': ![]
                },
                {
                    'name': '💰\x20Unit\x20Price',
                    'value': String(_0xc5444c) + '€',
                    'inline': ![]
                },
                {
                    'name': '💶\x20Total\x20Price',
                    'value': String(_0x1b3336) + '€',
                    'inline': ![]
                },
                {
                    'name': '💳\x20Gateway',
                    'value': _0x656530['gateway'] ? _0x656530['gateway'] : 'N/A',
                    'inline': ![]
                }
            ];
        } else {
            _0x47d3e8['embeds'][0x0]['description'] = _0x656530;
            if (_0x656530['includes']('Order\x20Delivered')) {
                _0x47d3e8['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                _0x47d3e8['embeds'][0x0]['color'] = 0xff00;
            } else if (_0x656530['includes']('Delivery\x20Error')) {
                _0x47d3e8['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                _0x47d3e8['embeds'][0x0]['color'] = 0xff0000;
            } else if (_0x656530['includes']('Duplicate\x20Order')) {
                _0x47d3e8['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                _0x47d3e8['embeds'][0x0]['color'] = 0xffa500;
            } else {
                _0x47d3e8['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                _0x47d3e8['embeds'][0x0]['color'] = 0xffa500;
            }
        }
        await _0x142702['send']({ 'embeds': [_0x47d3e8['embeds'][0x0]] });
    } catch (_0x385982) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x385982['response']?.['data'] || _0x385982['message']);
    }
};
async function _0x3196a7(_0x35e5dd) {
    try {
        const _0x48b3a2 = await _0x33057c['send']({ 'embeds': [_0x35e5dd] });
        return _0x48b3a2['id'];
    } catch (_0x55d43a) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20message:', _0x55d43a['response']?.['data'] || _0x55d43a['message']);
        throw _0x55d43a;
    }
}
async function _0x4ea383(_0x38b194, _0x4b9975) {
    try {
        await _0x33057c['editMessage'](_0x38b194, { 'embeds': [_0x4b9975] });
    } catch (_0x2f1cfb) {
        console['error']('Error\x20editing\x20Discord\x20webhook\x20message:', _0x2f1cfb['response']?.['data'] || _0x2f1cfb['message']);
        throw _0x2f1cfb;
    }
}
const _0x29b74b = (_0x36fefe, _0xa6431b, _0x2e3228, _0x3bb765 = 0xc8) => {
    if (_0xa6431b === 'write') {
        _0x36fefe['writeHead'](_0x3bb765, { 'Content-Type': 'text/plain' });
        _0x36fefe['write'](_0x2e3228);
    } else {
        _0x36fefe['writeHead'](_0x3bb765, { 'Content-Type': 'application/json' });
        _0x36fefe['end'](JSON['stringify'](_0x2e3228));
    }
};
const _0x4b6252 = async (_0x148280, _0x8c67f4 = 0xc) => {
    try {
        const _0x1958de = await _0x405f39['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x3d4694 + '&machineid=' + _0x19d548 + '&shopname=' + _0x378f48 + '&mode=CHECK_BOT&guildid=' + _0x148280 + '&clientid=' + _0xbe1552 + '&botclientsecret=' + _0x1c18a4 + '&bottoken=' + _0x744567, {}, { 'timeout': 0xf4240 });
        const {erreur: _0x1f73cf} = _0x1958de['data'];
        return _0x1f73cf !== 'bot';
    } catch (_0x39e2d7) {
        console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:', _0x39e2d7);
        return ![];
    }
};
const _0x4649bc = async (_0x15fa9c, _0x3e0367, _0xca685d) => {
    try {
        await _0x3b8a46();
        const _0x5daa55 = _0x15fa9c['item'];
        if (!_0x5daa55) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
            return _0x29b74b(_0xca685d, _0x3e0367, _0x2d30cd['command']['106'], 0x190);
        }
        const _0x44d9c4 = parseInt(_0x5daa55['quantity'], 0xa) || 0x1;
        const _0x21aa85 = _0x5daa55['custom_fields']?.[_0x1f0961];
        const _0x28ee86 = _0x5daa55['custom_fields']?.[_0x579717] || _0x284b38;
        const _0x45d036 = _0x5daa55['product']?.['name'];
        const _0x57696c = '/stock/';
        let _0x240ebd = _0x3c39ca['join'](__dirname, '..', _0x57696c, 'stock-1m.txt');
        let _0x416919 = _0x3c39ca['join'](__dirname, '..', _0x57696c, 'stock-3m.txt');
        let _0x3ce3f4;
        console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20pour\x20le\x20serveur:\x20' + _0x21aa85);
        if (!_0x21aa85 || !_0x45d036) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20' + (!_0x21aa85 ? 'serveurID' : 'products_name'));
            return _0x29b74b(_0xca685d, _0x3e0367, _0x2d30cd['command']['105'], 0x190);
        }
        const _0x119a73 = _0x45d036['match'](/\[(\d+)\]/);
        const _0x15fca2 = _0x45d036['match'](/boost (1|3) Mois/);
        if (!_0x119a73 || !_0x15fca2) {
            await _0x4da502('Delivery\x20Error,\x20invoice_id:\x20' + _0x5daa55['invoice_id'], 'log');
            return _0x29b74b(_0xca685d, _0x3e0367, _0x2d30cd['command']['105'], 0xc8);
        }
        const _0x2dcdce = parseInt(_0x119a73[0x1], 0xa);
        const _0x45e55e = _0x2dcdce * _0x44d9c4;
        const _0x56059a = parseInt(_0x15fca2[0x1], 0xa);
        const _0x27affb = _0x56059a === 0x3 ? '3m' : '1m';
        if (_0x27affb === '1m') {
            _0x3ce3f4 = _0x240ebd;
        } else if (_0x27affb === '3m') {
            _0x3ce3f4 = _0x416919;
        }
        await _0x4da502({
            'invoice_id': _0x5daa55['invoice_id'],
            'serveur_id': _0x21aa85,
            'quantity': _0x44d9c4,
            'price': _0x5daa55['price'],
            'mode': _0x3e0367,
            'products_name': _0x45d036,
            'gateway': _0x15fa9c['gateway'],
            'nombre_boosts': _0x45e55e,
            'type_booster': _0x27affb
        }, 'order');
        let _0x533b1e = _0x3019c7['existsSync'](_0x5bc76d) ? JSON['parse'](_0x3019c7['readFileSync'](_0x5bc76d)) : [];
        if (_0x533b1e['find'](_0x192c3b => _0x192c3b['invoice_id'] === _0x5daa55['invoice_id'])) {
            await _0x4da502('Duplicate\x20Order,\x20invoice_id:\x20' + _0x5daa55['invoice_id'], 'log');
            return _0x29b74b(_0xca685d, _0x3e0367, _0x2d30cd['command']['104'], 0xc8);
        }
        const _0x329222 = {
            'invoice_id': _0x5daa55['invoice_id'],
            'email': _0x5daa55['email'],
            'amount': _0x44d9c4,
            'price': _0x5daa55['total_price'],
            'gateway': _0x15fa9c['gateway'],
            'serveurID': _0x21aa85,
            'status': _0x5daa55['status'],
            'custom_fields': _0x5daa55['custom_fields'],
            'product_name': _0x45d036
        };
        _0x533b1e['push'](_0x329222);
        _0x3019c7['writeFileSync'](_0x5bc76d, JSON['stringify'](_0x533b1e, null, 0x2));
        let _0x205db6 = 0x0;
        let _0xdb425f = 0x0;
        let _0x46edb9 = _0x45e55e / 0x2;
        let _0x310057 = ![];
        let _0x345cc8 = 0x0;
        const _0x10b975 = 0x6;
        let _0x1c65d8 = [];
        let _0x544bd0 = '[+]\x20' + _0x378f48 + '\x20initialisés.';
        if (_0x1c65d8['length'] >= _0x10b975) {
            _0x1c65d8['pop']();
        }
        _0x1c65d8['unshift'](_0x544bd0);
        let _0x52743f = await _0x3257b3(_0x3ce3f4);
        if (_0x52743f === 0x0) {
            _0x1c65d8['unshift'](_0x378f48 + '\x20' + _0x2d30cd['command']['13']);
            const _0x4e98aa = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x2d30cd['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x2d30cd['command']['22'] + ('\x20:\x20**0/' + _0x45e55e + '**\x0a🔸\x20Boosts\x20') + _0x2d30cd['command']['28'] + ('\x20:\x20**' + _0x45e55e + '/' + _0x45e55e + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x21aa85,
                'fields': _0x1c65d8['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x1c65d8['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x5efbd2 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x378f48 + '\x20-\x20' + _0x2d30cd['command']['7'] + '\x20MrX' }
            };
            _0x29b74b(_0xca685d, _0x3e0367, _0x2d30cd['command']['33'], 0xc8);
            return await _0x3196a7(_0x4e98aa);
        } else if (_0x45e55e / 0x2 > _0x52743f && _0x52743f !== _0x45e55e / 0x2) {
            _0x1c65d8['unshift'](_0x378f48 + '\x20' + _0x2d30cd['command']['67']);
            const _0x3f2683 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x2d30cd['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x2d30cd['command']['22'] + ('\x20:\x20**0/' + _0x45e55e + '**\x0a🔸\x20Boosts\x20') + _0x2d30cd['command']['28'] + ('\x20:\x20**' + _0x45e55e + '/' + _0x45e55e + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x21aa85,
                'fields': _0x1c65d8['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x1c65d8['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x5efbd2 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x378f48 + '\x20-\x20' + _0x2d30cd['command']['7'] + '\x20MrX' }
            };
            _0x29b74b(_0xca685d, _0x3e0367, _0x2d30cd['command']['33'], 0xc8);
            return await _0x3196a7(_0x3f2683);
        }
        while (!_0x310057 && _0x345cc8 < 0xf) {
            try {
                _0x310057 = await _0x4b6252(_0x21aa85);
                if (!_0x310057) {
                    _0x345cc8++;
                    const _0x2993d5 = _0x345cc8 * 0xf;
                    await _0x4da502(_0x2d30cd['command']['97'] + '\x20' + _0x345cc8 + '/15\x20' + _0x2d30cd['command']['98'] + '\x20' + _0x2993d5 + '\x20' + _0x2d30cd['command']['99'] + ',\x20invoice_id:\x20' + _0x5daa55['invoice_id'] + '.', _0x1ced72);
                    if (_0x345cc8 < 0xf) {
                        await new Promise(_0x51e063 => setTimeout(_0x51e063, 0xf * 0x3c * 0x3e8));
                    }
                }
            } catch (_0x33024b) {
                console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:\x20' + _0x33024b['message'] + ',\x20invoice_id:\x20' + _0x5daa55['invoice_id'] + '.');
                await _0x4da502('Delivery\x20Error,\x20invoice_id:\x20' + _0x5daa55['invoice_id'], 'log');
                _0x345cc8++;
                if (_0x345cc8 < 0xf) {
                    await new Promise(_0xf46245 => setTimeout(_0xf46245, 0xf * 0x3c * 0x3e8));
                }
            }
        }
        if (!_0x310057) {
            return _0x29b74b(_0xca685d, _0x3e0367, _0x2d30cd['command']['96'], 0xc8);
        }
        const _0x98e664 = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x2d30cd['command']['23'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x2d30cd['command']['22'] + ('\x20:\x20**0/' + _0x45e55e + '**\x0a🔸\x20Boosts\x20') + _0x2d30cd['command']['28'] + ('\x20:\x20**0/' + _0x45e55e + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x21aa85,
            'fields': _0x1c65d8['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x1c65d8['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0x5efbd2 },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x378f48 + '\x20-\x20' + _0x2d30cd['command']['7'] + '\x20MrX' }
        };
        const _0xdf8ef3 = await _0x3196a7(_0x98e664);
        const _0x26d831 = _0x3019c7['readFileSync'](_0x3ce3f4)['toString']()['split']('\x0a');
        for (let _0x3638fd = 0x0; _0x3638fd < _0x45e55e / 0x2; _0x3638fd++) {
            let _0x5a0d9d = 0x0;
            async function _0x181a1d(_0x4747d9 = 0x0) {
                try {
                    const _0x482a34 = _0x26d831[_0x3638fd];
                    const _0x4fa932 = await _0x50b135(_0x482a34);
                    const _0x307036 = await _0x405f39['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x3d4694 + '&machineid=' + _0x19d548 + '&shopname=' + _0x378f48 + '&mode=BOOST&guildid=' + _0x21aa85 + '&bio=' + _0x28ee86 + '&clientid=' + _0xbe1552 + '&botclientsecret=' + _0x1c18a4 + '&bottoken=' + _0x744567 + '&tokenboost=' + _0x4fa932, {}, { 'timeout': 0xf4240 });
                    const {
                        erreur: _0x5b83f7,
                        success: _0x42326d
                    } = _0x307036['data'];
                    if (_0x1c65d8['length'] >= _0x10b975) {
                        _0x1c65d8['pop']();
                    }
                    if (_0x42326d === !![]) {
                        _0x205db6++;
                        _0x1c65d8['unshift']('✅\x20-\x20' + _0x2d30cd['command']['81'] + '\x20:\x20' + await _0x516384(_0x4fa932));
                        await _0x34150c(_0x482a34, _0x3ce3f4);
                    } else if (_0x42326d === ![]) {
                        _0xdb425f++;
                        if (_0x5b83f7 === 'invalid') {
                            _0x1c65d8['unshift']('❌\x20-\x20' + _0x2d30cd['command']['80'] + '\x20:\x20' + await _0x516384(_0x4fa932));
                            await _0x34150c(_0x482a34, _0x3ce3f4);
                        } else if (_0x5b83f7 === 'perm') {
                            _0x1c65d8['unshift']('⛔\x20-\x20' + _0x2d30cd['command']['79'] + '\x20:\x20' + await _0x516384(_0x4fa932));
                            if (_0x4747d9 < 0x3) {
                                _0x4747d9++;
                                _0x1c65d8['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x516384(_0x4fa932));
                                await _0x181a1d(_0x4747d9);
                            }
                        } else if (_0x5b83f7 === 'used') {
                            _0x1c65d8['unshift']('⚠️\x20-\x20' + _0x2d30cd['command']['78'] + '\x20:\x20' + await _0x516384(_0x4fa932));
                            await _0x34150c(_0x482a34, _0x3ce3f4);
                        } else {
                            _0x1c65d8['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x516384(_0x4fa932));
                            if (_0x4747d9 < 0x3) {
                                _0x4747d9++;
                                _0x1c65d8['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x516384(_0x4fa932));
                                await _0x181a1d(_0x4747d9);
                            }
                        }
                    }
                } catch {
                    _0xdb425f++;
                    if (_0x4747d9 < 0x3) {
                        _0x4747d9++;
                        _0x1c65d8['unshift']('🔄️\x20-\x20retry');
                        await _0x181a1d(_0x4747d9);
                    }
                    _0x1c65d8['unshift']('⚠️\x20-\x20error\x20API');
                }
            }
            await _0x181a1d(_0x5a0d9d);
            const _0x55236c = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x2d30cd['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x2d30cd['command']['22'] + ('\x20:\x20**' + _0x205db6 * 0x2 + '/' + _0x45e55e + '**\x0a🔸\x20Boosts\x20') + _0x2d30cd['command']['28'] + ('\x20:\x20**' + _0xdb425f * 0x2 + '/' + _0x45e55e + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x21aa85,
                'fields': _0x1c65d8['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x1c65d8['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x5efbd2 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x378f48 + '\x20-\x20' + _0x2d30cd['command']['7'] + '\x20MrX' }
            };
            await _0x4ea383(_0xdf8ef3, _0x55236c);
        }
        const _0x53b9f0 = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x2d30cd['command']['21'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x2d30cd['command']['22'] + ('\x20:\x20**' + _0x205db6 * 0x2 + '/' + _0x45e55e + '**\x0a🔸\x20Boosts\x20') + _0x2d30cd['command']['28'] + ('\x20:\x20**' + _0xdb425f * 0x2 + '/' + _0x45e55e + '**\x0a📝\x20Server\x20id:\x20') + _0x21aa85,
            'fields': _0x1c65d8['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0x1c65d8['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0x5efbd2 },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x378f48 + '\x20-\x20' + _0x2d30cd['command']['7'] + '\x20MrX' }
        };
        await _0x4ea383(_0xdf8ef3, _0x53b9f0);
        if (_0x205db6 >= _0x46edb9) {
            await _0x4da502('Order\x20Delivered,\x20' + _0x2d30cd['command']['100'] + ('\x20(' + _0x205db6 * 0x2 + '\x20boosts),\x20invoice_id:\x20' + _0x5daa55['invoice_id'] + '.'), 'log');
            _0x29b74b(_0xca685d, 'write', _0x2d30cd['command']['101'], 0xc8);
            return _0x29b74b(_0xca685d, _0x3e0367, _0x2d30cd['command']['101'], 0xc8);
        } else {
            await _0x4da502('Delivery\x20Error,\x20' + _0xdb425f * 0x2 + '\x20boosts\x20' + _0x2d30cd['command']['102'] + ',\x20invoice_id:\x20' + _0x5daa55['invoice_id'] + '.', 'log');
            _0x29b74b(_0xca685d, 'write', _0x2d30cd['command']['103'], 0xc8);
            return _0x29b74b(_0xca685d, _0x3e0367, _0x2d30cd['command']['103'], 0xc8);
        }
    } catch (_0x2d267a) {
        console['error'](_0x2d267a);
        _0x29b74b(_0xca685d, _0x3e0367, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
    }
};
const _0x19f12d = (_0x10fb5f, _0x20cc1a) => {
    if (!_0x3019c7['existsSync'](_0x5bc76d)) {
        _0x10fb5f['writeHead'](0x194, { 'Content-Type': 'text/html' });
        _0x10fb5f['end']('<h1>Aucune\x20commande\x20trouvée</h1>');
        return;
    }
    const _0x55c378 = JSON['parse'](_0x3019c7['readFileSync'](_0x5bc76d));
    const _0x5b369f = _0x265f61 || 0x64;
    const _0x278372 = parseInt(_0x20cc1a) || 0x1;
    const _0x2cf791 = _0x55c378['length'];
    const _0x10db11 = Math['ceil'](_0x2cf791 / _0x5b369f);
    const _0x1f5a5e = (_0x278372 - 0x1) * _0x5b369f;
    const _0x9352fb = _0x1f5a5e + _0x5b369f;
    const _0x24c771 = _0x55c378['slice'](_0x1f5a5e, _0x9352fb);
    const _0x48bead = _0x55c378['filter'](_0x1d3647 => _0x1d3647['status'] === 'completed')['length'];
    const _0x3d1ed0 = _0x55c378['reduce']((_0x59ca65, _0x349859) => {
        const _0x4d0b65 = parseInt(_0x349859['amount'], 0xa);
        const _0x4d2fee = _0x4d0b65 * 0xe;
        return _0x59ca65 + _0x4d2fee;
    }, 0x0);
    const _0x481db0 = _0x55c378['reduce']((_0x4cf3c2, _0x2c3370) => {
        const _0x2a5489 = parseFloat(_0x2c3370['price']);
        return _0x4cf3c2 + (isNaN(_0x2a5489) ? 0x0 : _0x2a5489);
    }, 0x0);
    _0x10fb5f['writeHead'](0xc8, { 'Content-Type': 'text/html' });
    _0x10fb5f['end']('<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html\x20lang=\x22fr\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>Dashboard\x20des\x20Commandes</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20{\x20box-sizing:\x20border-box;\x20margin:\x200;\x20padding:\x200;\x20font-family:\x20\x27Inter\x27,\x20sans-serif;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x20background-color:\x20#111827;\x20color:\x20#e5e7eb;\x20display:\x20flex;\x20justify-content:\x20center;\x20padding:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.dashboard\x20{\x20width:\x20100%;\x20max-width:\x201200px;\x20padding:\x2020px;\x20background:\x20#1f2937;\x20border-radius:\x2010px;\x20box-shadow:\x200\x204px\x2010px\x20rgba(0,\x200,\x200,\x200.3);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20img\x20{\x20width:\x2080px;\x20margin-right:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20color:\x20#60a5fa;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20{\x20text-align:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.8rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201.2rem;\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-container\x20{\x20overflow-x:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x20width:\x20100%;\x20border-collapse:\x20collapse;\x20background-color:\x20#374151;\x20border-radius:\x2010px;\x20overflow:\x20hidden;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2012px;\x20text-align:\x20left;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th\x20{\x20background-color:\x20#2563eb;\x20color:\x20white;\x20text-transform:\x20uppercase;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:nth-child(even)\x20{\x20background-color:\x20#1f2937;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:hover\x20{\x20background-color:\x20#334155;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20{\x20text-align:\x20center;\x20margin-top:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a\x20{\x20margin:\x200\x205px;\x20padding:\x208px\x2015px;\x20background-color:\x20#2563eb;\x20color:\x20white;\x20border-radius:\x205px;\x20text-decoration:\x20none;\x20transition:\x200.3s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a:hover\x20{\x20background-color:\x20#1e40af;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20footer\x20{\x20text-align:\x20center;\x20margin-top:\x2030px;\x20font-size:\x200.9rem;\x20opacity:\x200.7;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2010px;\x20font-size:\x2014px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.5rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dashboard\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://media.bloumechat.com/media/PFq3HUI6Es.png\x22\x20alt=\x22Logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>InfinityBoost</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Dashboard\x20des\x20Commandes</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Total\x20Gagné\x20:\x20<span\x20id=\x22totalEarned\x22>' + _0x481db0['toFixed'](0x2) + '€</span>\x20|\x20Total\x20Boosts\x20:\x20<span\x20id=\x22totalBoosts\x22>' + _0x3d1ed0 + '</span>\x20|\x20Total\x20Commandes\x20:\x20<span\x20id=\x22totalCompletedOrders\x22>' + _0x48bead + '</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Invoice\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Email</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Prix\x20(€)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Status</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Gateway</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Serveur\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x24c771['map'](_0x28282b => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x28282b['invoice_id'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x28282b['email'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + parseFloat(_0x28282b['price'])['toFixed'](0x2) + '€</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x28282b['status'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x28282b['amount'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x28282b['gateway'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x28282b['serveurID'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>')['join']('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pagination\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x278372 > 0x1 ? '<a\x20href=\x22/orders?page=' + (_0x278372 - 0x1) + '\x22>&laquo;\x20Précédent</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Page\x20' + _0x278372 + '\x20/\x20' + _0x10db11 + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x278372 < _0x10db11 ? '<a\x20href=\x22/orders?page=' + (_0x278372 + 0x1) + '\x22>Suivant\x20&raquo;</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>&copy;\x202024\x20InfinityBoost.\x20Tous\x20droits\x20réservés.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a');
};
const _0x392140 = _0x1df006['createServer'](async (_0x28ddb6, _0x1fe24c) => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Nouvelle\x20requête\x20reçue:\x20' + _0x28ddb6['method'] + '\x20' + _0x28ddb6['url']);
    if (_0x28ddb6['method'] === 'POST') {
        let _0x36b1ad = '';
        _0x28ddb6['on']('data', _0x203329 => {
            _0x36b1ad += _0x203329['toString']();
        });
        _0x28ddb6['on']('end', async () => {
            try {
                const _0x52499c = JSON['parse'](_0x36b1ad);
                const _0x659c0e = 'json';
                const _0x14d3f3 = _0x130cbc['parse'](_0x28ddb6['url'], !![]);
                if (_0x52499c['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC') {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                    await _0x4649bc(_0x52499c, _0x659c0e, _0x1fe24c);
                } else {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Event\x20non\x20supporté:', _0x52499c['event']);
                    _0x29b74b(_0x1fe24c, _0x659c0e, 'Event\x20non\x20supporté', 0x190);
                }
            } catch (_0x1eb263) {
                console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20parsing\x20JSON:', _0x1eb263);
                _0x29b74b(_0x1fe24c, 'json', 'Erreur\x20parsing\x20JSON', 0x190);
            }
        });
    } else if (_0x28ddb6['method'] === 'GET') {
        try {
            const _0xc2fd96 = _0x130cbc['parse'](_0x28ddb6['url'], !![]);
            const _0x4ac31a = _0xc2fd96['query'];
            const _0x4ba3cf = _0x4ac31a['page'] || '1';
            console['log']('[' + new Date()['toISOString']() + ']\x20Requête\x20GET\x20reçue\x20pour\x20' + _0xc2fd96['pathname'] + ',\x20params:', _0x4ac31a);
            if (_0xc2fd96['pathname'] === '/orders') {
                console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20requête\x20/orders,\x20page:', _0x4ba3cf);
                _0x19f12d(_0x1fe24c, _0x4ba3cf);
            } else {
                console['log']('[' + new Date()['toISOString']() + ']\x20Route\x20non\x20trouvée:', _0xc2fd96['pathname']);
                _0x29b74b(_0x1fe24c, 'json', 'Route\x20non\x20trouvée', 0x194);
            }
        } catch (_0x1ff55e) {
            console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20du\x20traitement\x20de\x20la\x20requête\x20GET:', _0x1ff55e);
            _0x29b74b(_0x1fe24c, 'json', {
                'error': 'Erreur\x20interne\x20du\x20serveur',
                'details': _0x1ff55e['message']
            }, 0x1f4);
        }
    } else {
        console['log']('[' + new Date()['toISOString']() + ']\x20Méthode\x20non\x20supportée:', _0x28ddb6['method']);
        _0x29b74b(_0x1fe24c, 'json', 'Méthode\x20non\x20supportée', 0x195);
    }
});
_0x392140['listen'](_0x27ffab, () => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Serveur\x20démarré\x20sur\x20http://' + _0x1d27bf + ':' + _0x27ffab);
});
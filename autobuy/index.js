(function (_0x2a8483, _0x2eafe0) {
    const _0xcb04e7 = _0x4f4b;
    const _0x5565e2 = _0x2a8483();
    while (!![]) {
        try {
            const _0x5dc43f = -parseInt(_0xcb04e7(0x165)) / 0x1 * (parseInt(_0xcb04e7(0x163)) / 0x2) + -parseInt(_0xcb04e7(0x166)) / 0x3 + parseInt(_0xcb04e7(0x168)) / 0x4 * (-parseInt(_0xcb04e7(0x16a)) / 0x5) + parseInt(_0xcb04e7(0x169)) / 0x6 + parseInt(_0xcb04e7(0x16c)) / 0x7 + -parseInt(_0xcb04e7(0x167)) / 0x8 * (parseInt(_0xcb04e7(0x16b)) / 0x9) + parseInt(_0xcb04e7(0x162)) / 0xa * (parseInt(_0xcb04e7(0x164)) / 0xb);
            if (_0x5dc43f === _0x2eafe0) {
                break;
            } else {
                _0x5565e2['push'](_0x5565e2['shift']());
            }
        } catch (_0x40b1b1) {
            _0x5565e2['push'](_0x5565e2['shift']());
        }
    }
}(_0x2a1a, 0xb9081));
const _0x593a4d = require('http');
const _0x1c3cb2 = require('url');
const _0x4c4431 = require('axios');
const _0x208cd9 = require('fs');
const _0xcb1633 = require('path');
const _0x3cd0d2 = require('os');
const _0x3a1be2 = require('gradient-string');
const _0x52308a = './commandes.json';
const _0x2ee6d4 = require('../config.json');
const {performOperation: _0x8b883a} = require('../required/performOp');
const {WebhookClient: _0x4cf71b} = require('discord.js');
const _0x2400fb = require('line-by-line');
let _0xdff70b = _0x2ee6d4['service']['name_shop'];
let _0x4f617b = _0x2ee6d4['service']['banner'];
function _0x4f4b(_0x52b554, _0x3e706c) {
    const _0x2a1a2a = _0x2a1a();
    _0x4f4b = function (_0x4f4b52, _0x5422a6) {
        _0x4f4b52 = _0x4f4b52 - 0x162;
        let _0x49dfa9 = _0x2a1a2a[_0x4f4b52];
        return _0x49dfa9;
    };
    return _0x4f4b(_0x52b554, _0x3e706c);
}
let _0x50483b = _0x2ee6d4['apikey'];
let _0x3ed20d = _0x2ee6d4['autobuy']['port'];
let _0x2c33b2 = _0x2ee6d4['autobuy']['host'];
let _0x3991f5 = _0x2ee6d4['autobuy']['bio'];
let _0x3a05c5 = _0x2ee6d4['autobuy']['shop_id_sellauth'];
let _0x593229 = _0x2ee6d4['autobuy']['autobuy_enabled'];
let _0x4af513 = _0x2ee6d4['autobuy']['apikey_sellauth'];
let _0xbdf14f = _0x2ee6d4['autobuy']['discord_webhook_url_command_log'];
let _0x1c4e50 = _0x2ee6d4['autobuy']['discord_webhook_url_console'];
let _0x59d861 = _0x2ee6d4['autobuy']['orders_command_for_page'];
let _0x27c004 = _0x2ee6d4['autobuy']['guildid_variable_Custom_Field'] || 'Serveur\x20ID';
let _0x3eb69f = _0x2ee6d4['autobuy']['bio_variable_Custom_Field'] || 'Bio';
let _0xc10b01 = _0x2ee6d4['autobuy']['check_bot'];
function _0x2a1a() {
    const _0x44e1aa = [
        '2428YWJDPH',
        '1791471EVrtYQ',
        '247IlJWBF',
        '2809437ygnMCG',
        '5797976fDUDCy',
        '1080thkQNQ',
        '1077810pUrgDv',
        '7370YUdUFb',
        '9VfCJXr',
        '8020929KGwpan',
        '110krWJUU'
    ];
    _0x2a1a = function () {
        return _0x44e1aa;
    };
    return _0x2a1a();
}
let _0x8273d8 = _0x2ee6d4['autobuy']['time_check_bot'];
let _0x4691a4;
let _0x1fa644;
if (_0x593229) {
    _0x4691a4 = new _0x4cf71b({ 'url': _0x1c4e50 });
    _0x1fa644 = new _0x4cf71b({ 'url': _0xbdf14f });
}
const _0x4c800d = JSON['parse'](_0x208cd9['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x20aa16 = _0x2ee6d4['service']['langue_shop'];
const _0x3f10d3 = _0x4c800d[_0x20aa16];
let _0x688f60 = _0x2ee6d4['bot']['clientid'];
let _0x708a6e = _0x2ee6d4['bot']['token'];
let _0x2e3952 = _0x2ee6d4['bot']['clientsecret'];
let _0x1e43fe;
async function _0x3e2bd1() {
    return new Promise((_0x121569, _0x4c56c0) => {
        _0x8b883a((_0x2a8022, _0x52aed3) => {
            if (_0x2a8022) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x4c56c0(_0x2a8022);
            } else {
                _0x1e43fe = _0x52aed3;
                _0x121569(_0x1e43fe);
            }
        });
    });
}
async function _0x40edbd(_0x406fde) {
    const _0x279005 = _0x406fde['split'](':');
    if (_0x279005['length'] === 0x3) {
        return _0x279005[0x2];
    } else if (_0x279005['length'] === 0x1) {
        return _0x406fde;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x406fde);
        return _0x406fde;
    }
}
async function _0xdd040e(_0x3a3fc3) {
    if (_0x3a3fc3['length'] <= 0x6) {
        return _0x3a3fc3;
    }
    const _0x1b3b97 = _0x3a3fc3['slice'](0x0, 0x14);
    const _0x319218 = _0x3a3fc3['slice'](-0xa);
    const _0x43bfca = _0x3a3fc3['length'] - _0x1b3b97['length'] - _0x319218['length'];
    const _0x52b85e = '' + _0x1b3b97 + '*'['repeat'](_0x43bfca - 0x46) + _0x319218;
    return _0x52b85e;
}
async function _0x57e389(_0x12d2e5) {
    if (_0x12d2e5['length'] <= 0x6) {
        return _0x12d2e5;
    }
    const _0x5a4bf4 = _0x12d2e5['slice'](0x0, 0x6);
    const _0x5b3a99 = _0x12d2e5['slice'](-0xc);
    const _0x593ca8 = _0x12d2e5['length'] - _0x5a4bf4['length'] - _0x5b3a99['length'];
    const _0x17c506 = '' + _0x5a4bf4 + '*'['repeat'](_0x593ca8 - 0x2d) + _0x5b3a99;
    return _0x17c506;
}
async function _0x210326(_0x3c25e9, _0x501400) {
    let _0x395291 = await _0xdd040e(_0x3c25e9);
    let _0x156e12 = await _0x1afd4a(_0x501400);
    let _0x434b13 = '';
    if (!_0x208cd9['existsSync'](_0x501400)) {
        console['log'](_0x3a1be2['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x5460e1 = [];
    const _0x5ce314 = new _0x2400fb(_0x501400);
    _0x5ce314['on']('error', _0x375602 => {
        console['error'](_0x3a1be2['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x375602));
    });
    _0x5ce314['on']('line', _0xd5563d => {
        const _0x33be50 = _0xd5563d['trim']();
        if (!_0x33be50['includes'](_0x3c25e9['trim']())) {
            _0x5460e1['push'](_0x33be50);
        }
    });
    _0x5ce314['on']('end', async () => {
        if (_0x5460e1['length'] === 0x0 && _0x156e12 !== 0x1) {
            console['log'](_0x3a1be2['retro']('⛔\x20-\x20Le\x20token\x20' + _0x395291 + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x156e12 !== 0x1) {
            _0x434b13 = _0x5460e1['join'](_0x3cd0d2['EOL']);
        } else {
            _0x434b13 = '';
        }
        _0x208cd9['writeFile'](_0x501400, _0x434b13, _0x2431ae => {
            if (_0x2431ae) {
                console['error'](_0x3a1be2['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x2431ae));
                return;
            }
            console['log'](_0x3a1be2['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x395291 + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x1afd4a(_0x71f1) {
    try {
        const _0x37bbff = _0x208cd9['readFileSync'](_0x71f1, 'utf-8');
        const _0x232212 = _0x37bbff['split']('\x0a');
        const _0x2393e1 = _0x232212['filter'](_0x1e5405 => _0x1e5405['trim']()['length'] > 0x0);
        return _0x2393e1['length'];
    } catch (_0xbc0fc3) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0xbc0fc3);
        return 0x0;
    }
}
async function _0x46b588(_0x12a9b6) {
    try {
        const _0x184f13 = await _0x4691a4['send']({ 'embeds': [_0x12a9b6] });
        return _0x184f13['id'];
    } catch (_0x4e0a50) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20message:', _0x4e0a50['response']?.['data'] || _0x4e0a50['message']);
        throw _0x4e0a50;
    }
}
async function _0x425097(_0x109b59, _0x60a88b) {
    try {
        await _0x4691a4['editMessage'](_0x109b59, { 'embeds': [_0x60a88b] });
    } catch (_0x552667) {
        console['error']('Error\x20editing\x20Discord\x20webhook\x20message:', _0x552667['response']?.['data'] || _0x552667['message']);
        throw _0x552667;
    }
}
async function _0x23cf71(_0x505596, _0x15ec1a) {
    try {
        const _0x28702e = _0xcb1633['dirname'](_0x15ec1a);
        if (!_0x208cd9['existsSync'](_0x28702e)) {
            _0x208cd9['mkdirSync'](_0x28702e, { 'recursive': !![] });
        }
        _0x208cd9['appendFileSync'](_0x15ec1a, _0x505596 + '\x0a');
        console['log'](_0x3a1be2['retro']('📄\x20-\x20AutoBuy\x20OUTPUT\x20sauvegardé\x20avec\x20succès.'));
        return !![];
    } catch (_0x463743) {
        console['error'](_0x3a1be2['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20sauvegarde\x20dans\x20' + _0x15ec1a + ':', _0x463743));
        return ![];
    }
}
async function _0x49df51(_0x1b62db, _0x1b441b) {
    try {
        const _0x2800df = '/autobuy/';
        const _0x33bbf8 = _0xcb1633['join'](__dirname, '..', _0x2800df, 'request-logs.json');
        if (!_0x208cd9['existsSync'](_0xcb1633['dirname'](_0x33bbf8))) {
            _0x208cd9['mkdirSync'](_0xcb1633['dirname'](_0x33bbf8), { 'recursive': !![] });
        }
        let _0x385b24 = [];
        if (_0x208cd9['existsSync'](_0x33bbf8)) {
            try {
                const _0x4bfd31 = _0x208cd9['readFileSync'](_0x33bbf8, 'utf8');
                _0x385b24 = JSON['parse'](_0x4bfd31);
            } catch (_0x421077) {
                console['error'](_0x3a1be2['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20JSON:'), _0x421077);
                _0x385b24 = [];
            }
        }
        const _0x2419cb = {
            'id': Date['now'](),
            'timestamp': new Date()['toISOString'](),
            'method': _0x1b62db['method'],
            'url': _0x1b62db['url'],
            'headers': _0x1b62db['headers'],
            'data': _0x1b441b || {},
            'userAgent': _0x1b62db['headers']['user-agent'] || 'Unknown'
        };
        const _0x91df65 = JSON['parse'](JSON['stringify'](_0x2419cb, (_0x384beb, _0x58a64e) => {
            return _0x58a64e === null || _0x58a64e === undefined ? undefined : _0x58a64e;
        }));
        _0x385b24['push'](_0x91df65);
        _0x208cd9['writeFileSync'](_0x33bbf8, JSON['stringify'](_0x385b24, null, 0x2));
        console['log'](_0x3a1be2['retro']('📝\x20-\x20Requête\x20enregistrée\x20dans\x20les\x20logs.'));
        return !![];
    } catch (_0x54df1b) {
        console['error'](_0x3a1be2['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27enregistrement\x20de\x20la\x20requête:'), _0x54df1b);
        return ![];
    }
}
async function _0x4ec6d8(_0x2bc6eb) {
    const _0x3e1efc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let _0x48e925 = '';
    for (let _0x427388 = 0x0; _0x427388 < _0x2bc6eb; _0x427388++) {
        const _0x417434 = Math['floor'](Math['random']() * _0x3e1efc['length']);
        _0x48e925 += _0x3e1efc['charAt'](_0x417434);
    }
    return _0x48e925;
}
if (_0x593229) {
    const _0x3f66c5 = async (_0x5e0a25, _0x31dd0c = 'order') => {
        try {
            const _0x2abe94 = {
                'embeds': [{
                        'title': _0x31dd0c === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                        'color': _0x31dd0c === 'order' ? 0xff00 : 0x99ff,
                        'timestamp': new Date()['toISOString'](),
                        'fields': []
                    }]
            };
            if (_0x31dd0c === 'order') {
                const _0x588b65 = parseFloat(_0x5e0a25['quantity']) || 0x0;
                const _0x4d80d8 = parseFloat(_0x5e0a25['nombre_boosts']) || 0x0;
                const _0xc07efc = parseFloat(_0x5e0a25['type_booster']) || 'N/A';
                const _0x465e09 = parseFloat(_0x5e0a25['price']) || 0x0;
                const _0x3ae1fb = (_0x588b65 * _0x465e09)['toFixed'](0x2);
                _0x2abe94['embeds'][0x0]['fields'] = [
                    {
                        'name': '🆔\x20Invoice\x20ID',
                        'value': String(_0x5e0a25['invoice_id']),
                        'inline': ![]
                    },
                    {
                        'name': '🏷️\x20Product',
                        'value': _0x5e0a25['products_name'] ? _0x5e0a25['products_name'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📧\x20Email',
                        'value': _0x5e0a25['email'] ? _0x5e0a25['email'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '👤\x20Server\x20ID',
                        'value': _0x5e0a25['serveur_id'] ? _0x5e0a25['serveur_id'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Quantity',
                        'value': String(_0x588b65),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Number\x20boosts',
                        'value': String(_0x4d80d8),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Type\x20boosts',
                        'value': String(_0xc07efc) + 'm',
                        'inline': ![]
                    },
                    {
                        'name': '💰\x20Unit\x20Price',
                        'value': String(_0x465e09) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💶\x20Total\x20Price',
                        'value': String(_0x3ae1fb) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💳\x20Gateway',
                        'value': _0x5e0a25['gateway'] ? _0x5e0a25['gateway'] : 'N/A',
                        'inline': ![]
                    }
                ];
            } else {
                _0x2abe94['embeds'][0x0]['description'] = _0x5e0a25;
                if (_0x5e0a25['includes']('Order\x20Delivered')) {
                    _0x2abe94['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                    _0x2abe94['embeds'][0x0]['color'] = 0xff00;
                } else if (_0x5e0a25['includes']('Delivery\x20Error')) {
                    _0x2abe94['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                    _0x2abe94['embeds'][0x0]['color'] = 0xff0000;
                } else if (_0x5e0a25['includes']('Duplicate\x20Order')) {
                    _0x2abe94['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                    _0x2abe94['embeds'][0x0]['color'] = 0xffa500;
                } else {
                    _0x2abe94['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                    _0x2abe94['embeds'][0x0]['color'] = 0xffa500;
                }
            }
            await _0x1fa644['send']({ 'embeds': [_0x2abe94['embeds'][0x0]] });
        } catch (_0x3f0c27) {
            console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x3f0c27['response']?.['data'] || _0x3f0c27['message']);
        }
    };
    const _0x4d82f3 = async (_0x31ce23, _0x2e25de = 'order') => {
        try {
            const _0x3ff1d8 = {
                'embeds': [{
                        'title': _0x2e25de === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                        'color': _0x2e25de === 'order' ? 0xff00 : 0x99ff,
                        'timestamp': new Date()['toISOString'](),
                        'fields': []
                    }]
            };
            if (_0x2e25de === 'order') {
                const _0x5ae16d = parseFloat(_0x31ce23['quantity']) || 0x0;
                const _0x4e1cea = parseFloat(_0x31ce23['nombre_boosts']) || 0x0;
                const _0x15a7fb = parseFloat(_0x31ce23['type_booster']) || 'N/A';
                const _0x4b2de3 = parseFloat(_0x31ce23['price']) || 0x0;
                const _0x486ea7 = (_0x5ae16d * _0x4b2de3)['toFixed'](0x2);
                _0x3ff1d8['embeds'][0x0]['fields'] = [
                    {
                        'name': '🆔\x20Invoice\x20ID',
                        'value': String(_0x31ce23['invoice_id']),
                        'inline': ![]
                    },
                    {
                        'name': '🏷️\x20Product',
                        'value': _0x31ce23['products_name'] ? _0x31ce23['products_name'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📧\x20Email',
                        'value': _0x31ce23['email'] ? _0x31ce23['email'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '👤\x20Server\x20ID',
                        'value': _0x31ce23['serveur_id'] ? _0x31ce23['serveur_id'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Quantity',
                        'value': String(_0x5ae16d),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Number\x20tokens',
                        'value': String(_0x4e1cea),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Type\x20tokens',
                        'value': String(_0x15a7fb) + 'm',
                        'inline': ![]
                    },
                    {
                        'name': '💰\x20Unit\x20Price',
                        'value': String(_0x4b2de3) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💶\x20Total\x20Price',
                        'value': String(_0x486ea7) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💳\x20Gateway',
                        'value': _0x31ce23['gateway'] ? _0x31ce23['gateway'] : 'N/A',
                        'inline': ![]
                    }
                ];
            } else {
                _0x3ff1d8['embeds'][0x0]['description'] = _0x31ce23;
                if (_0x31ce23['includes']('Order\x20Delivered')) {
                    _0x3ff1d8['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                    _0x3ff1d8['embeds'][0x0]['color'] = 0xff00;
                } else if (_0x31ce23['includes']('Delivery\x20Error')) {
                    _0x3ff1d8['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                    _0x3ff1d8['embeds'][0x0]['color'] = 0xff0000;
                } else if (_0x31ce23['includes']('Duplicate\x20Order')) {
                    _0x3ff1d8['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                    _0x3ff1d8['embeds'][0x0]['color'] = 0xffa500;
                } else {
                    _0x3ff1d8['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                    _0x3ff1d8['embeds'][0x0]['color'] = 0xffa500;
                }
            }
            await _0x1fa644['send']({ 'embeds': [_0x3ff1d8['embeds'][0x0]] });
        } catch (_0x352890) {
            console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x352890['response']?.['data'] || _0x352890['message']);
        }
    };
    const _0xa9bcf0 = (_0x30606b, _0x4a225b, _0x13be96, _0x103f9a = 0xc8) => {
        if (_0x4a225b === 'write') {
            _0x30606b['writeHead'](_0x103f9a, { 'Content-Type': 'text/plain' });
            _0x30606b['end'](_0x13be96);
        } else {
            _0x30606b['writeHead'](_0x103f9a, { 'Content-Type': 'application/json' });
            _0x30606b['end'](JSON['stringify'](_0x13be96));
        }
    };
    async function _0x4ea5c9(_0x12592e = 0x0, _0x36d025, _0x14916f, _0x2da529, _0x35c128) {
        const _0x549c67 = await _0x4c4431['post']('http://pastes.io/api/paste/create', {
            'content': _0x36d025,
            'status': 0x2,
            'expire': '1W',
            'title': _0x14916f + '-T0k3nN1tr0',
            'password': _0x35c128
        }, {
            'headers': {
                'Accept': 'application/json',
                'Authorization': 'Bearer\x2040d403ae833e6eec3dbe0fe2f219863d5df1767c51073e2e438e1bf4993711f3'
            }
        });
        if (_0x549c67['data'] && _0x549c67['data']['success']) {
            await _0x23cf71(_0x549c67['data']['success']['paste_url'] + '\x20password\x20:\x20' + _0x35c128, _0x2da529);
            return _0x549c67['data']['success']['paste_url'];
        } else if (_0x549c67['data'] && _0x549c67['data']['error']) {
            console['error']('Erreur\x20API:', _0x549c67['data']['error']);
            await new Promise(_0x10ed85 => setTimeout(_0x10ed85, 0xbb8));
            if (_0x12592e < 0x3) {
                await _0x4ea5c9(_0x12592e + 0x1, _0x36d025, _0x14916f);
            } else {
                return 'Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste\x20ratelimite.';
            }
        }
    }
    async function _0x378031(_0x254497, _0x4490d1, _0x1007ea) {
        try {
            let _0x42ab7a = [];
            _0x42ab7a['push']('Autobuy\x20dev\x20by\x20MrX');
            const _0x41050f = '/autobuy/output/';
            let _0x3ea465 = _0xcb1633['join'](__dirname, '..', _0x41050f, 'link.txt');
            let _0x470d68 = _0xcb1633['join'](__dirname, '..', _0x41050f, 'tokens_send.txt');
            let _0x219d64 = await _0x4ec6d8(0xa);
            const _0x589c13 = _0x208cd9['readFileSync'](_0x4490d1, 'utf8')['toString']()['split']('\x0a');
            for (let _0x302dfe = 0x0; _0x302dfe < Math['min'](_0x1007ea, _0x589c13['length']); _0x302dfe++) {
                const _0x50252e = _0x589c13[_0x302dfe]['trim']();
                if (_0x50252e) {
                    _0x42ab7a['push'](_0x50252e);
                    await new Promise(_0x372f20 => setTimeout(_0x372f20, 0x64));
                    await _0x210326(_0x50252e, _0x4490d1);
                } else {
                    _0x42ab7a['push'](_0x3f10d3['command']['33']);
                }
            }
            let _0xa138ff = _0x42ab7a['slice'](0x1)['join']('\x0a');
            await _0x23cf71(_0xa138ff, _0x470d68);
            return await _0x4ea5c9(0x0, _0xa138ff, _0x219d64, _0x3ea465, _0x254497);
        } catch (_0xf55803) {
            console['error']('Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste:\x20', _0xf55803);
            return null;
        }
    }
    const _0x40846c = async (_0x46e732, _0x4cbdc5 = 0xc) => {
        try {
            const _0x5d00b1 = await _0x4c4431['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x50483b + '&machineid=' + _0x1e43fe + '&shopname=' + _0xdff70b + '&mode=CHECK_BOT&guildid=' + _0x46e732 + '&clientid=' + _0x688f60 + '&botclientsecret=' + _0x2e3952 + '&bottoken=' + _0x708a6e, {}, { 'timeout': 0xf4240 });
            const {erreur: _0x18d1ee} = _0x5d00b1['data'];
            return _0x18d1ee !== 'bot';
        } catch (_0x4a0ba6) {
            console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:', _0x4a0ba6);
            return ![];
        }
    };
    const _0x1b6b5b = async (_0x54cbe6, _0x161768, _0x3da617) => {
        try {
            await _0x3e2bd1();
            const _0x41b64b = _0x54cbe6['item'];
            if (!_0x41b64b) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
                return _0xa9bcf0(_0x3da617, _0x161768, _0x3f10d3['command']['106'], 0x190);
            }
            const _0x1bd6e6 = parseInt(_0x41b64b['quantity'], 0xa) || 0x1;
            const _0x2869a3 = _0x41b64b['custom_fields']?.[_0x27c004];
            const _0x3936dc = _0x41b64b['custom_fields']?.[_0x3eb69f] || _0x3991f5;
            const _0x22670b = _0x41b64b['product']?.['name'];
            const _0x4ce576 = '/stock/';
            let _0x15b17f = _0xcb1633['join'](__dirname, '..', _0x4ce576, 'stock-1m.txt');
            let _0x2a50fb = _0xcb1633['join'](__dirname, '..', _0x4ce576, 'stock-3m.txt');
            let _0x51953e;
            console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20pour\x20le\x20serveur:\x20' + _0x2869a3);
            if (!_0x2869a3 || !_0x22670b) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20' + (!_0x2869a3 ? 'serveurID' : 'products_name'));
                return _0xa9bcf0(_0x3da617, _0x161768, _0x3f10d3['command']['105'], 0x190);
            }
            const _0x521f3d = _0x22670b['match'](/\[(\d+)\]/);
            const _0x2d19a0 = _0x22670b['match'](/boost (1|3) (Mois|Month|Months|mois)/i);
            if (!_0x521f3d || !_0x2d19a0) {
                await _0x3f66c5('Delivery\x20Error,\x20invoice_id:\x20' + _0x41b64b['invoice_id'], 'log');
                return _0xa9bcf0(_0x3da617, _0x161768, _0x3f10d3['command']['105'], 0xc8);
            }
            const _0x45f8f8 = parseInt(_0x521f3d[0x1], 0xa);
            const _0x24d789 = _0x45f8f8 * _0x1bd6e6;
            const _0x301a24 = parseInt(_0x2d19a0[0x1], 0xa);
            const _0x21ed79 = _0x301a24 === 0x3 ? '3m' : '1m';
            if (_0x21ed79 === '1m') {
                _0x51953e = _0x15b17f;
            } else if (_0x21ed79 === '3m') {
                _0x51953e = _0x2a50fb;
            }
            await _0x3f66c5({
                'invoice_id': _0x41b64b['invoice_id'],
                'serveur_id': _0x2869a3,
                'quantity': _0x1bd6e6,
                'price': _0x41b64b['price'],
                'mode': _0x161768,
                'products_name': _0x22670b,
                'gateway': _0x54cbe6['gateway'],
                'nombre_boosts': _0x24d789,
                'type_booster': _0x21ed79
            }, 'order');
            let _0x5a1362 = _0x208cd9['existsSync'](_0x52308a) ? JSON['parse'](_0x208cd9['readFileSync'](_0x52308a)) : [];
            if (_0x5a1362['find'](_0x1ab560 => _0x1ab560['invoice_id'] === _0x41b64b['invoice_id'])) {
                await _0x3f66c5('Duplicate\x20Order,\x20invoice_id:\x20' + _0x41b64b['invoice_id'], 'log');
                return _0xa9bcf0(_0x3da617, _0x161768, _0x3f10d3['command']['104'], 0xc8);
            }
            const _0x1c69b9 = {
                'invoice_id': _0x41b64b['invoice_id'],
                'email': _0x41b64b['email'],
                'amount': _0x1bd6e6,
                'price': _0x41b64b['total_price'],
                'gateway': _0x54cbe6['gateway'],
                'serveurID': _0x2869a3,
                'status': _0x41b64b['status'],
                'custom_fields': _0x41b64b['custom_fields'],
                'product_name': _0x22670b
            };
            _0x5a1362['push'](_0x1c69b9);
            _0x208cd9['writeFileSync'](_0x52308a, JSON['stringify'](_0x5a1362, null, 0x2));
            let _0x56f207 = 0x0;
            let _0x611d6a = 0x0;
            let _0x52cfcf = _0x24d789 / 0x2;
            let _0x588aa6 = ![];
            let _0x5d54b1 = 0x0;
            const _0xbfb355 = 0x6;
            let _0x3498fa = [];
            let _0x16d73d = '[+]\x20' + _0xdff70b + '\x20initialisés.';
            if (_0x3498fa['length'] >= _0xbfb355) {
                _0x3498fa['pop']();
            }
            _0x3498fa['unshift'](_0x16d73d);
            let _0x2456c2 = await _0x1afd4a(_0x51953e);
            if (_0x2456c2 === 0x0) {
                _0x3498fa['unshift'](_0xdff70b + '\x20' + _0x3f10d3['command']['13']);
                const _0xf8b3d2 = {
                    'color': 0x99ff,
                    'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x3f10d3['command']['23'] + '**\x20🚀',
                    'description': '🔹\x20Boosts\x20' + _0x3f10d3['command']['22'] + ('\x20:\x20**0/' + _0x24d789 + '**\x0a🔸\x20Boosts\x20') + _0x3f10d3['command']['28'] + ('\x20:\x20**' + _0x24d789 + '/' + _0x24d789 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x2869a3,
                    'fields': _0x3498fa['length'] > 0x0 ? [{
                            'name': 'Logs',
                            'value': '```\x0a' + _0x3498fa['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        }] : [],
                    'image': { 'url': _0x4f617b },
                    'timestamp': new Date()['toISOString'](),
                    'footer': { 'text': _0xdff70b + '\x20-\x20' + _0x3f10d3['command']['7'] + '\x20MrX' }
                };
                _0xa9bcf0(_0x3da617, _0x161768, _0x3f10d3['command']['33'], 0xc8);
                return await _0x46b588(_0xf8b3d2);
            } else if (_0x24d789 / 0x2 > _0x2456c2 && _0x2456c2 !== _0x24d789 / 0x2) {
                _0x3498fa['unshift'](_0xdff70b + '\x20' + _0x3f10d3['command']['67']);
                const _0x9c6001 = {
                    'color': 0x99ff,
                    'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x3f10d3['command']['23'] + '**\x20🚀',
                    'description': '🔹\x20Boosts\x20' + _0x3f10d3['command']['22'] + ('\x20:\x20**0/' + _0x24d789 + '**\x0a🔸\x20Boosts\x20') + _0x3f10d3['command']['28'] + ('\x20:\x20**' + _0x24d789 + '/' + _0x24d789 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x2869a3,
                    'fields': _0x3498fa['length'] > 0x0 ? [{
                            'name': 'Logs',
                            'value': '```\x0a' + _0x3498fa['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        }] : [],
                    'image': { 'url': _0x4f617b },
                    'timestamp': new Date()['toISOString'](),
                    'footer': { 'text': _0xdff70b + '\x20-\x20' + _0x3f10d3['command']['7'] + '\x20MrX' }
                };
                _0xa9bcf0(_0x3da617, _0x161768, _0x3f10d3['command']['33'], 0xc8);
                return await _0x46b588(_0x9c6001);
            }
            while (!_0x588aa6 && _0x5d54b1 < _0xc10b01) {
                try {
                    _0x588aa6 = await _0x40846c(_0x2869a3);
                    if (!_0x588aa6) {
                        _0x5d54b1++;
                        const _0x4697ea = _0x5d54b1 * _0x8273d8;
                        await _0x3f66c5(_0x3f10d3['command']['97'] + '\x20' + _0x5d54b1 + '/' + _0xc10b01 + '\x20' + _0x3f10d3['command']['98'] + '\x20' + _0x4697ea + '\x20' + _0x3f10d3['command']['99'] + ',\x20invoice_id:\x20' + _0x41b64b['invoice_id'] + '.', _0x1c4e50);
                        if (_0x5d54b1 < _0xc10b01) {
                            await new Promise(_0xc40b33 => setTimeout(_0xc40b33, _0x8273d8 * 0x3c * 0x3e8));
                        }
                    }
                } catch (_0x2d3d73) {
                    console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:\x20' + _0x2d3d73['message'] + ',\x20invoice_id:\x20' + _0x41b64b['invoice_id'] + '.');
                    await _0x3f66c5('Delivery\x20Error,\x20invoice_id:\x20' + _0x41b64b['invoice_id'], 'log');
                    _0x5d54b1++;
                    if (_0x5d54b1 < _0xc10b01) {
                        await new Promise(_0x2124f5 => setTimeout(_0x2124f5, _0x8273d8 * 0x3c * 0x3e8));
                    }
                }
            }
            if (!_0x588aa6) {
                return _0xa9bcf0(_0x3da617, _0x161768, _0x3f10d3['command']['96'], 0xc8);
            }
            const _0x17944a = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x3f10d3['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x3f10d3['command']['22'] + ('\x20:\x20**0/' + _0x24d789 + '**\x0a🔸\x20Boosts\x20') + _0x3f10d3['command']['28'] + ('\x20:\x20**0/' + _0x24d789 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x2869a3,
                'fields': _0x3498fa['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x3498fa['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x4f617b },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0xdff70b + '\x20-\x20' + _0x3f10d3['command']['7'] + '\x20MrX' }
            };
            const _0x550c60 = await _0x46b588(_0x17944a);
            const _0x4f081e = _0x208cd9['readFileSync'](_0x51953e)['toString']()['split']('\x0a');
            for (let _0x4f05e8 = 0x0; _0x4f05e8 < _0x24d789 / 0x2; _0x4f05e8++) {
                let _0x5f5a14 = 0x0;
                async function _0x52f586(_0x123037 = 0x0) {
                    try {
                        const _0x5c204b = _0x4f081e[_0x4f05e8];
                        const _0x47842c = await _0x40edbd(_0x5c204b);
                        const _0x1ddd8e = await _0x4c4431['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x50483b + '&machineid=' + _0x1e43fe + '&shopname=' + _0xdff70b + '&mode=BOOST&guildid=' + _0x2869a3 + '&bio=' + _0x3936dc + '&clientid=' + _0x688f60 + '&botclientsecret=' + _0x2e3952 + '&bottoken=' + _0x708a6e + '&tokenboost=' + _0x47842c, {}, { 'timeout': 0xf4240 });
                        const {
                            erreur: _0x1b3398,
                            success: _0x32ee49
                        } = _0x1ddd8e['data'];
                        if (_0x3498fa['length'] >= _0xbfb355) {
                            _0x3498fa['pop']();
                        }
                        if (_0x32ee49 === !![]) {
                            _0x56f207++;
                            _0x3498fa['unshift']('✅\x20-\x20' + _0x3f10d3['command']['81'] + '\x20:\x20' + await _0x57e389(_0x47842c));
                            await _0x210326(_0x5c204b, _0x51953e);
                        } else if (_0x32ee49 === ![]) {
                            if (_0x1b3398 === 'invalid') {
                                _0x611d6a++;
                                _0x3498fa['unshift']('❌\x20-\x20' + _0x3f10d3['command']['80'] + '\x20:\x20' + await _0x57e389(_0x47842c));
                                await _0x210326(_0x5c204b, _0x51953e);
                            } else if (_0x1b3398 === 'perm') {
                                _0x611d6a++;
                                _0x3498fa['unshift']('⛔\x20-\x20' + _0x3f10d3['command']['79'] + '\x20:\x20' + await _0x57e389(_0x47842c));
                                if (_0x123037 < 0x3) {
                                    _0x123037++;
                                    _0x3498fa['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x57e389(_0x47842c));
                                    await _0x52f586(_0x123037);
                                }
                            } else if (_0x1b3398 === 'used') {
                                _0x611d6a++;
                                _0x3498fa['unshift']('⚠️\x20-\x20' + _0x3f10d3['command']['78'] + '\x20:\x20' + await _0x57e389(_0x47842c));
                                await _0x210326(_0x5c204b, _0x51953e);
                            } else {
                                _0x3498fa['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x57e389(_0x47842c));
                                if (_0x123037 < 0x3) {
                                    _0x123037++;
                                    _0x3498fa['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x57e389(_0x47842c));
                                    await _0x52f586(_0x123037);
                                } else {
                                    _0x611d6a++;
                                }
                            }
                        }
                    } catch {
                        if (_0x123037 < 0x3) {
                            _0x123037++;
                            _0x3498fa['unshift']('🔄️\x20-\x20retry');
                            await _0x52f586(_0x123037);
                        } else {
                            _0x611d6a++;
                        }
                        _0x3498fa['unshift']('⚠️\x20-\x20error\x20API');
                    }
                }
                await _0x52f586(_0x5f5a14);
                const _0x5639a9 = {
                    'color': 0x99ff,
                    'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x3f10d3['command']['23'] + '**\x20🚀',
                    'description': '🔹\x20Boosts\x20' + _0x3f10d3['command']['22'] + ('\x20:\x20**' + _0x56f207 * 0x2 + '/' + _0x24d789 + '**\x0a🔸\x20Boosts\x20') + _0x3f10d3['command']['28'] + ('\x20:\x20**' + _0x611d6a * 0x2 + '/' + _0x24d789 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x2869a3,
                    'fields': _0x3498fa['length'] > 0x0 ? [{
                            'name': 'Logs',
                            'value': '```\x0a' + _0x3498fa['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        }] : [],
                    'image': { 'url': _0x4f617b },
                    'timestamp': new Date()['toISOString'](),
                    'footer': { 'text': _0xdff70b + '\x20-\x20' + _0x3f10d3['command']['7'] + '\x20MrX' }
                };
                await _0x425097(_0x550c60, _0x5639a9);
            }
            const _0x41c97e = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x3f10d3['command']['21'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x3f10d3['command']['22'] + ('\x20:\x20**' + _0x56f207 * 0x2 + '/' + _0x24d789 + '**\x0a🔸\x20Boosts\x20') + _0x3f10d3['command']['28'] + ('\x20:\x20**' + _0x611d6a * 0x2 + '/' + _0x24d789 + '**\x0a📝\x20Server\x20id:\x20') + _0x2869a3,
                'fields': _0x3498fa['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x3498fa['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x4f617b },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0xdff70b + '\x20-\x20' + _0x3f10d3['command']['7'] + '\x20MrX' }
            };
            await _0x425097(_0x550c60, _0x41c97e);
            if (_0x56f207 >= _0x52cfcf) {
                await _0x3f66c5('Order\x20Delivered,\x20' + _0x3f10d3['command']['100'] + ('\x20(' + _0x56f207 * 0x2 + '\x20boosts),\x20invoice_id:\x20' + _0x41b64b['invoice_id'] + '.'), 'log');
                return _0xa9bcf0(_0x3da617, _0x161768, _0x3f10d3['command']['101'], 0xc8);
            } else {
                await _0x3f66c5('Delivery\x20Error,\x20' + _0x611d6a * 0x2 + '\x20boosts\x20' + _0x3f10d3['command']['102'] + ',\x20invoice_id:\x20' + _0x41b64b['invoice_id'] + '.', 'log');
                return _0xa9bcf0(_0x3da617, _0x161768, _0x3f10d3['command']['103'], 0xc8);
            }
        } catch (_0x37f1e1) {
            console['error'](_0x37f1e1);
            return _0xa9bcf0(_0x3da617, _0x161768, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
        }
    };
    const _0x42732a = async (_0x5d0a00, _0xb3e3e5, _0xdc5fdb) => {
        try {
            await _0x3e2bd1();
            const _0x6f7d3b = _0x5d0a00['item'];
            if (!_0x6f7d3b) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
                return _0xa9bcf0(_0xdc5fdb, _0xb3e3e5, _0x3f10d3['command']['106'], 0x190);
            }
            const _0x3d2e28 = parseInt(_0x6f7d3b['quantity'], 0xa) || 0x1;
            const _0x30aca3 = _0x6f7d3b['custom_fields']?.[_0x27c004];
            const _0x1fd2fc = _0x6f7d3b['custom_fields']?.[_0x3eb69f] || _0x3991f5;
            const _0x22179b = _0x6f7d3b['product']?.['name'];
            const _0x28b428 = '/stock/';
            let _0x45869f = _0xcb1633['join'](__dirname, '..', _0x28b428, 'stock-1m.txt');
            let _0x4c838f = _0xcb1633['join'](__dirname, '..', _0x28b428, 'stock-3m.txt');
            let _0x270ae5;
            console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20!');
            if (!_0x22179b) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20products_name');
                return _0xa9bcf0(_0xdc5fdb, _0xb3e3e5, _0x3f10d3['command']['10'], 0x190);
            }
            const _0x5cab8e = _0x22179b['match'](/(token|Token) (1|3) (Mois|Month|Months|mois)/i);
            if (!_0x5cab8e) {
                await _0x4d82f3('Delivery\x20Error,\x20invoice_id:\x20' + _0x6f7d3b['invoice_id'], 'log');
                return _0xa9bcf0(_0xdc5fdb, _0xb3e3e5, _0x3f10d3['command']['119'], 0xc8);
            }
            const _0xd258bc = _0x3d2e28;
            const _0x5ddfeb = parseInt(_0x5cab8e[0x1], 0xa);
            const _0xbfe3b8 = _0x5ddfeb === 0x3 ? '3m' : '1m';
            if (_0xbfe3b8 === '1m') {
                _0x270ae5 = _0x45869f;
            } else if (_0xbfe3b8 === '3m') {
                _0x270ae5 = _0x4c838f;
            }
            await _0x4d82f3({
                'invoice_id': _0x6f7d3b['invoice_id'],
                'serveur_id': _0x30aca3,
                'quantity': _0x3d2e28,
                'price': _0x6f7d3b['price'],
                'mode': _0xb3e3e5,
                'products_name': _0x22179b,
                'gateway': _0x5d0a00['gateway'],
                'nombre_boosts': _0xd258bc,
                'type_booster': _0xbfe3b8
            }, 'order');
            let _0x51a513 = _0x208cd9['existsSync'](_0x52308a) ? JSON['parse'](_0x208cd9['readFileSync'](_0x52308a)) : [];
            if (_0x51a513['find'](_0x4c1bb5 => _0x4c1bb5['invoice_id'] === _0x6f7d3b['invoice_id'])) {
                await _0x4d82f3('Duplicate\x20Order,\x20invoice_id:\x20' + _0x6f7d3b['invoice_id'], 'log');
                return _0xa9bcf0(_0xdc5fdb, _0xb3e3e5, _0x3f10d3['command']['104'], 0xc8);
            }
            const _0x4692d8 = {
                'invoice_id': _0x6f7d3b['invoice_id'],
                'email': _0x6f7d3b['email'],
                'amount': _0x3d2e28,
                'price': _0x6f7d3b['total_price'],
                'gateway': _0x5d0a00['gateway'],
                'serveurID': _0x30aca3,
                'status': _0x6f7d3b['status'],
                'custom_fields': _0x6f7d3b['custom_fields'],
                'product_name': _0x22179b
            };
            _0x51a513['push'](_0x4692d8);
            _0x208cd9['writeFileSync'](_0x52308a, JSON['stringify'](_0x51a513, null, 0x2));
            let _0x30565d = await _0x1afd4a(_0x270ae5);
            if (_0x30565d === 0x0) {
                return _0xa9bcf0(_0xdc5fdb, _0xb3e3e5, _0x3f10d3['command']['33'], 0xc8);
            } else if (_0xd258bc > _0x30565d && _0x30565d !== _0xd258bc) {
                return _0xa9bcf0(_0xdc5fdb, _0xb3e3e5, _0x3f10d3['command']['33'], 0xc8);
            }
            const _0x460fa7 = await _0x4ec6d8(0xf);
            let _0x55508f = await _0x378031(_0x460fa7, _0x270ae5, _0xd258bc);
            if (_0x55508f) {
                await _0x4d82f3('Order\x20Delivered,\x20' + _0x3f10d3['command']['120'] + ('\x20(' + _0xd258bc + '\x20tokens),\x20invoice_id:\x20' + _0x6f7d3b['invoice_id'] + '.'), 'log');
                return _0xa9bcf0(_0xdc5fdb, _0xb3e3e5, _0x55508f + '\x20-\x20Password:\x20' + _0x460fa7, 0xc8);
            }
        } catch (_0x9f6f44) {
            console['error'](_0x9f6f44);
            return _0xa9bcf0(_0xdc5fdb, _0xb3e3e5, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
        }
    };
    const _0x1eb5c1 = (_0xb20090, _0x7beafe) => {
        if (!_0x208cd9['existsSync'](_0x52308a)) {
            _0xb20090['writeHead'](0x194, { 'Content-Type': 'text/html' });
            _0xb20090['end']('<h1>Aucune\x20commande\x20trouvée</h1>');
            return;
        }
        const _0x24698c = JSON['parse'](_0x208cd9['readFileSync'](_0x52308a));
        const _0x3ae3d1 = _0x59d861 || 0x64;
        const _0xba8f72 = parseInt(_0x7beafe) || 0x1;
        const _0x489783 = _0x24698c['length'];
        const _0x2498e0 = Math['ceil'](_0x489783 / _0x3ae3d1);
        const _0x1fbd72 = (_0xba8f72 - 0x1) * _0x3ae3d1;
        const _0x1ff100 = _0x1fbd72 + _0x3ae3d1;
        const _0x2a3620 = _0x24698c['slice'](_0x1fbd72, _0x1ff100);
        const _0x31dc7d = _0x24698c['filter'](_0x315bf9 => _0x315bf9['status'] === 'completed')['length'];
        const _0x345453 = _0x24698c['reduce']((_0x2ce1b1, _0x24c36b) => {
            const _0x2e6a0f = parseInt(_0x24c36b['amount'], 0xa);
            const _0x4bfa5c = _0x2e6a0f * 0xe;
            return _0x2ce1b1 + _0x4bfa5c;
        }, 0x0);
        const _0xb45f51 = _0x24698c['reduce']((_0x539e76, _0x177ff5) => {
            const _0xe55ce1 = parseFloat(_0x177ff5['price']);
            return _0x539e76 + (isNaN(_0xe55ce1) ? 0x0 : _0xe55ce1);
        }, 0x0);
        _0xb20090['writeHead'](0xc8, { 'Content-Type': 'text/html' });
        _0xb20090['end']('<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html\x20lang=\x22fr\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>Dashboard\x20des\x20Commandes</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20{\x20box-sizing:\x20border-box;\x20margin:\x200;\x20padding:\x200;\x20font-family:\x20\x27Inter\x27,\x20sans-serif;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x20background-color:\x20#111827;\x20color:\x20#e5e7eb;\x20display:\x20flex;\x20justify-content:\x20center;\x20padding:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.dashboard\x20{\x20width:\x20100%;\x20max-width:\x201200px;\x20padding:\x2020px;\x20background:\x20#1f2937;\x20border-radius:\x2010px;\x20box-shadow:\x200\x204px\x2010px\x20rgba(0,\x200,\x200,\x200.3);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20img\x20{\x20width:\x2080px;\x20margin-right:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20color:\x20#60a5fa;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20{\x20text-align:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.8rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201.2rem;\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-container\x20{\x20overflow-x:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x20width:\x20100%;\x20border-collapse:\x20collapse;\x20background-color:\x20#374151;\x20border-radius:\x2010px;\x20overflow:\x20hidden;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2012px;\x20text-align:\x20left;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th\x20{\x20background-color:\x20#2563eb;\x20color:\x20white;\x20text-transform:\x20uppercase;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:nth-child(even)\x20{\x20background-color:\x20#1f2937;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:hover\x20{\x20background-color:\x20#334155;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20{\x20text-align:\x20center;\x20margin-top:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a\x20{\x20margin:\x200\x205px;\x20padding:\x208px\x2015px;\x20background-color:\x20#2563eb;\x20color:\x20white;\x20border-radius:\x205px;\x20text-decoration:\x20none;\x20transition:\x200.3s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a:hover\x20{\x20background-color:\x20#1e40af;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20footer\x20{\x20text-align:\x20center;\x20margin-top:\x2030px;\x20font-size:\x200.9rem;\x20opacity:\x200.7;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2010px;\x20font-size:\x2014px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.5rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dashboard\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://media.bloumechat.com/media/PFq3HUI6Es.png\x22\x20alt=\x22Logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>InfinityBoost</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Dashboard\x20des\x20Commandes</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Total\x20Gagné\x20:\x20<span\x20id=\x22totalEarned\x22>' + _0xb45f51['toFixed'](0x2) + '€</span>\x20|\x20Total\x20Boosts\x20:\x20<span\x20id=\x22totalBoosts\x22>' + _0x345453 + '</span>\x20|\x20Total\x20Commandes\x20:\x20<span\x20id=\x22totalCompletedOrders\x22>' + _0x31dc7d + '</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Invoice\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Email</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Prix\x20(€)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Status</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Gateway</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Serveur\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x2a3620['map'](_0x146986 => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x146986['invoice_id'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x146986['email'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + parseFloat(_0x146986['price'])['toFixed'](0x2) + '€</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x146986['status'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x146986['amount'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x146986['gateway'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x146986['serveurID'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>')['join']('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pagination\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0xba8f72 > 0x1 ? '<a\x20href=\x22/orders?page=' + (_0xba8f72 - 0x1) + '\x22>&laquo;\x20Précédent</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Page\x20' + _0xba8f72 + '\x20/\x20' + _0x2498e0 + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0xba8f72 < _0x2498e0 ? '<a\x20href=\x22/orders?page=' + (_0xba8f72 + 0x1) + '\x22>Suivant\x20&raquo;</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>&copy;\x202024\x20InfinityBoost.\x20Tous\x20droits\x20réservés.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a');
    };
    const _0x1cbaca = _0x593a4d['createServer'](async (_0x45b15f, _0x36f9ed) => {
        console['log']('[' + new Date()['toISOString']() + ']\x20Nouvelle\x20requête\x20reçue:\x20' + _0x45b15f['method'] + '\x20' + _0x45b15f['url']);
        if (_0x45b15f['method'] === 'POST') {
            let _0x33a270 = '';
            _0x45b15f['on']('data', _0x37b575 => {
                _0x33a270 += _0x37b575['toString']();
            });
            _0x45b15f['on']('end', async () => {
                try {
                    const _0x264911 = JSON['parse'](_0x33a270);
                    const _0x20aed7 = 'json';
                    await _0x49df51(_0x45b15f, _0x264911);
                    const _0x55ebe7 = _0x1c3cb2['parse'](_0x45b15f['url'], !![]);
                    const _0x12dc9e = _0x55ebe7['pathname'];
                    if (_0x264911['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC' && _0x12dc9e === '/booster') {
                        console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                        await _0x1b6b5b(_0x264911, _0x20aed7, _0x36f9ed);
                    } else if (_0x264911['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC' && _0x12dc9e === '/send') {
                        console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                        await _0x42732a(_0x264911, _0x20aed7, _0x36f9ed);
                    } else {
                        console['log']('[' + new Date()['toISOString']() + ']\x20Event\x20non\x20supporté:', _0x264911['event']);
                        _0xa9bcf0(_0x36f9ed, _0x20aed7, 'Event\x20non\x20supporté', 0x190);
                    }
                } catch (_0x1d2559) {
                    console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20parsing\x20JSON:', _0x1d2559);
                    _0xa9bcf0(_0x36f9ed, 'json', 'Erreur\x20parsing\x20JSON', 0x190);
                }
            });
        } else if (_0x45b15f['method'] === 'GET') {
            try {
                const _0x5bfe92 = _0x1c3cb2['parse'](_0x45b15f['url'], !![]);
                const _0x32161c = _0x5bfe92['query'];
                const _0x17273c = _0x32161c['page'] || '1';
                console['log']('[' + new Date()['toISOString']() + ']\x20Requête\x20GET\x20reçue\x20pour\x20' + _0x5bfe92['pathname'] + ',\x20params:', _0x32161c);
                if (_0x5bfe92['pathname'] === '/orders') {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20requête\x20/orders,\x20page:', _0x17273c);
                    _0x1eb5c1(_0x36f9ed, _0x17273c);
                } else {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Route\x20non\x20trouvée:', _0x5bfe92['pathname']);
                    _0xa9bcf0(_0x36f9ed, 'json', 'Route\x20non\x20trouvée', 0x194);
                }
            } catch (_0xea2e20) {
                console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20du\x20traitement\x20de\x20la\x20requête\x20GET:', _0xea2e20);
                _0xa9bcf0(_0x36f9ed, 'json', {
                    'error': 'Erreur\x20interne\x20du\x20serveur',
                    'details': _0xea2e20['message']
                }, 0x1f4);
            }
        } else {
            console['log']('[' + new Date()['toISOString']() + ']\x20Méthode\x20non\x20supportée:', _0x45b15f['method']);
            _0xa9bcf0(_0x36f9ed, 'json', 'Méthode\x20non\x20supportée', 0x195);
        }
    });
    _0x1cbaca['listen'](_0x3ed20d, () => {
        console['log']('[' + new Date()['toISOString']() + ']\x20Serveur\x20démarré\x20sur\x20http://' + _0x2c33b2 + ':' + _0x3ed20d);
    });
} else {
    console['log']('[' + new Date()['toISOString']() + ']\x20Le\x20l\x27autobuy\x20est\x20déactivé,\x20il\x20sera\x20pas\x20lancé.');
}
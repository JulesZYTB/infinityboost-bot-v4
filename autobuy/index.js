(function (_0x104707, _0x20d8e5) {
    const _0x564991 = _0x1ac6;
    const _0x55e83b = _0x104707();
    while (!![]) {
        try {
            const _0x28575c = parseInt(_0x564991(0x1e0)) / 0x1 + parseInt(_0x564991(0x1de)) / 0x2 * (parseInt(_0x564991(0x1df)) / 0x3) + -parseInt(_0x564991(0x1e3)) / 0x4 + -parseInt(_0x564991(0x1e1)) / 0x5 * (parseInt(_0x564991(0x1dd)) / 0x6) + parseInt(_0x564991(0x1e5)) / 0x7 + parseInt(_0x564991(0x1e4)) / 0x8 * (-parseInt(_0x564991(0x1dc)) / 0x9) + parseInt(_0x564991(0x1e2)) / 0xa;
            if (_0x28575c === _0x20d8e5) {
                break;
            } else {
                _0x55e83b['push'](_0x55e83b['shift']());
            }
        } catch (_0x57dc6e) {
            _0x55e83b['push'](_0x55e83b['shift']());
        }
    }
}(_0x18a5, 0x92087));
const _0xe16a31 = require('http');
const _0x402f71 = require('url');
const _0x4cf23b = require('axios');
const _0x364b35 = require('fs');
const _0x2ebc65 = require('path');
const _0x5ee5b2 = require('os');
const _0x1deaf7 = require('gradient-string');
const _0x126698 = './commandes.json';
const _0x2d686b = require('../config.json');
const {performOperation: _0x26c381} = require('../required/performOp');
const {WebhookClient: _0x30c068} = require('discord.js');
const _0x14d8cb = require('line-by-line');
let _0x1094fd = _0x2d686b['service']['name_shop'];
let _0x36e33d = _0x2d686b['service']['banner'];
let _0x136662 = _0x2d686b['apikey'];
let _0x572d0f = _0x2d686b['autobuy']['port'];
let _0x10d5c8 = _0x2d686b['autobuy']['host'];
let _0x55541e = _0x2d686b['autobuy']['bio'];
let _0x790a59 = _0x2d686b['autobuy']['shop_id_sellauth'];
let _0x21d8a4 = _0x2d686b['autobuy']['autobuy_enabled'];
let _0x5bc9cd = _0x2d686b['autobuy']['apikey_sellauth'];
let _0x24b4d3 = _0x2d686b['autobuy']['discord_webhook_url_command_log'];
let _0x55407d = _0x2d686b['autobuy']['discord_webhook_url_console'];
let _0x476152 = _0x2d686b['autobuy']['orders_command_for_page'];
let _0x24ca43 = _0x2d686b['autobuy']['guildid_variable_Custom_Field'] || 'Serveur\x20ID';
let _0x2159b6 = _0x2d686b['autobuy']['bio_variable_Custom_Field'] || 'Bio';
let _0x2a2c5b = _0x2d686b['autobuy']['check_bot'];
let _0x114b6f = _0x2d686b['autobuy']['time_check_bot'];
function _0x18a5() {
    const _0xfb10b4 = [
        '1689867WQMYAF',
        '258JjiukS',
        '2nHZtgs',
        '961491oDmBai',
        '653622LJMSvv',
        '114770mUhcQF',
        '6181370MzOOyn',
        '967292RJkVRn',
        '8NRnjlK',
        '2957521ofCxTh'
    ];
    _0x18a5 = function () {
        return _0xfb10b4;
    };
    return _0x18a5();
}
let _0x141314;
let _0x226cfa;
if (_0x21d8a4) {
    _0x141314 = new _0x30c068({ 'url': _0x55407d });
    _0x226cfa = new _0x30c068({ 'url': _0x24b4d3 });
}
const _0x5a2ffb = JSON['parse'](_0x364b35['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x2dbd75 = _0x2d686b['service']['langue_shop'];
const _0x31a865 = _0x5a2ffb[_0x2dbd75];
let _0x21e097 = _0x2d686b['bot']['clientid'];
let _0x560bf0 = _0x2d686b['bot']['token'];
let _0x591ae6 = _0x2d686b['bot']['clientsecret'];
let _0x43d820;
async function _0x47f3fd() {
    return new Promise((_0x5dde55, _0x14fb40) => {
        _0x26c381((_0x4a2842, _0x4e1cb2) => {
            if (_0x4a2842) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x14fb40(_0x4a2842);
            } else {
                _0x43d820 = _0x4e1cb2;
                _0x5dde55(_0x43d820);
            }
        });
    });
}
async function _0x5adc10(_0x510ec6) {
    const _0x34894e = _0x510ec6['split'](':');
    if (_0x34894e['length'] === 0x3) {
        return _0x34894e[0x2];
    } else if (_0x34894e['length'] === 0x1) {
        return _0x510ec6;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x510ec6);
        return _0x510ec6;
    }
}
async function _0x3485ec(_0x3228fb) {
    if (_0x3228fb['length'] <= 0x6) {
        return _0x3228fb;
    }
    let _0x504e65 = Math['min'](0xf, Math['ceil'](_0x3228fb['length'] * 0.2));
    let _0x330258 = Math['min'](0xf, Math['ceil'](_0x3228fb['length'] * 0.1));
    const _0x4d1d1a = _0x3228fb['slice'](0x0, _0x504e65);
    const _0x1d9ebd = _0x3228fb['slice'](-_0x330258);
    const _0x1bad85 = _0x3228fb['length'] - _0x504e65 - _0x330258;
    return '' + _0x4d1d1a + '*'['repeat'](_0x1bad85 - 0x14) + _0x1d9ebd;
}
async function _0x58ca5a(_0x290bdb) {
    if (_0x290bdb['length'] <= 0x6) {
        return _0x290bdb;
    }
    const _0x50d884 = _0x290bdb['slice'](0x0, 0x6);
    const _0x18a05c = _0x290bdb['slice'](-0xc);
    const _0x2f2ddb = _0x290bdb['length'] - _0x50d884['length'] - _0x18a05c['length'];
    const _0xf09997 = '' + _0x50d884 + '*'['repeat'](_0x2f2ddb - 0x2d) + _0x18a05c;
    return _0xf09997;
}
async function _0x2f5eeb(_0x7589b8, _0x300d90) {
    let _0x45cd79 = await _0x3485ec(_0x7589b8);
    let _0x2a566a = await _0x3820ba(_0x300d90);
    let _0x4e9fb5 = '';
    if (!_0x364b35['existsSync'](_0x300d90)) {
        console['log'](_0x1deaf7['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x132c3c = [];
    const _0x13ff7e = new _0x14d8cb(_0x300d90);
    _0x13ff7e['on']('error', _0x29151a => {
        console['error'](_0x1deaf7['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x29151a));
    });
    _0x13ff7e['on']('line', _0x162be4 => {
        const _0x5a46d8 = _0x162be4['trim']();
        if (!_0x5a46d8['includes'](_0x7589b8['trim']())) {
            _0x132c3c['push'](_0x5a46d8);
        }
    });
    _0x13ff7e['on']('end', async () => {
        if (_0x132c3c['length'] === 0x0 && _0x2a566a !== 0x1) {
            console['log'](_0x1deaf7['retro']('⛔\x20-\x20Le\x20token\x20' + _0x45cd79 + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x2a566a !== 0x1) {
            _0x4e9fb5 = _0x132c3c['join'](_0x5ee5b2['EOL']);
        } else {
            _0x4e9fb5 = '';
        }
        _0x364b35['writeFile'](_0x300d90, _0x4e9fb5, _0x3dec6a => {
            if (_0x3dec6a) {
                console['error'](_0x1deaf7['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x3dec6a));
                return;
            }
            console['log'](_0x1deaf7['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x45cd79 + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
function _0x1ac6(_0x22fcfc, _0x4ef6a1) {
    const _0x18a5f5 = _0x18a5();
    _0x1ac6 = function (_0x1ac63d, _0x3a36ca) {
        _0x1ac63d = _0x1ac63d - 0x1dc;
        let _0x53b843 = _0x18a5f5[_0x1ac63d];
        return _0x53b843;
    };
    return _0x1ac6(_0x22fcfc, _0x4ef6a1);
}
async function _0x3820ba(_0x294354) {
    try {
        const _0x588f4d = _0x364b35['readFileSync'](_0x294354, 'utf-8');
        const _0x5ad974 = _0x588f4d['split']('\x0a');
        const _0x7494b0 = _0x5ad974['filter'](_0x19cd52 => _0x19cd52['trim']()['length'] > 0x0);
        return _0x7494b0['length'];
    } catch (_0x172c45) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x172c45);
        return 0x0;
    }
}
async function _0x5585c8(_0x38f13e) {
    try {
        const _0x5dbc36 = await _0x141314['send']({ 'embeds': [_0x38f13e] });
        return _0x5dbc36['id'];
    } catch (_0x2d7759) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20message:', _0x2d7759['response']?.['data'] || _0x2d7759['message']);
        throw _0x2d7759;
    }
}
async function _0x3559ac(_0x3c5ff9, _0x5c043d) {
    try {
        await _0x141314['editMessage'](_0x3c5ff9, { 'embeds': [_0x5c043d] });
    } catch (_0x57ce66) {
        console['error']('Error\x20editing\x20Discord\x20webhook\x20message:', _0x57ce66['response']?.['data'] || _0x57ce66['message']);
        throw _0x57ce66;
    }
}
async function _0x120e73(_0x355a96, _0x25979f) {
    try {
        const _0x102555 = _0x2ebc65['dirname'](_0x25979f);
        if (!_0x364b35['existsSync'](_0x102555)) {
            _0x364b35['mkdirSync'](_0x102555, { 'recursive': !![] });
        }
        _0x364b35['appendFileSync'](_0x25979f, _0x355a96 + '\x0a');
        console['log'](_0x1deaf7['retro']('📄\x20-\x20AutoBuy\x20OUTPUT\x20sauvegardé\x20avec\x20succès.'));
        return !![];
    } catch (_0x56e9a3) {
        console['error'](_0x1deaf7['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20sauvegarde\x20dans\x20' + _0x25979f + ':', _0x56e9a3));
        return ![];
    }
}
async function _0x5443ac(_0x316b64, _0x356f48) {
    try {
        const _0x156a7c = '/autobuy/';
        const _0x20550c = _0x2ebc65['join'](__dirname, '..', _0x156a7c, 'request-logs.json');
        if (!_0x364b35['existsSync'](_0x2ebc65['dirname'](_0x20550c))) {
            _0x364b35['mkdirSync'](_0x2ebc65['dirname'](_0x20550c), { 'recursive': !![] });
        }
        let _0x368f9c = [];
        if (_0x364b35['existsSync'](_0x20550c)) {
            try {
                const _0x47752f = _0x364b35['readFileSync'](_0x20550c, 'utf8');
                _0x368f9c = JSON['parse'](_0x47752f);
            } catch (_0x473d3e) {
                console['error'](_0x1deaf7['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20JSON:'), _0x473d3e);
                _0x368f9c = [];
            }
        }
        const _0x47dce3 = {
            'id': Date['now'](),
            'timestamp': new Date()['toISOString'](),
            'method': _0x316b64['method'],
            'url': _0x316b64['url'],
            'headers': _0x316b64['headers'],
            'data': _0x356f48 || {},
            'userAgent': _0x316b64['headers']['user-agent'] || 'Unknown'
        };
        const _0x1452bc = JSON['parse'](JSON['stringify'](_0x47dce3, (_0x4330df, _0x5a6147) => {
            return _0x5a6147 === null || _0x5a6147 === undefined ? undefined : _0x5a6147;
        }));
        _0x368f9c['push'](_0x1452bc);
        _0x364b35['writeFileSync'](_0x20550c, JSON['stringify'](_0x368f9c, null, 0x2));
        console['log'](_0x1deaf7['retro']('📝\x20-\x20Requête\x20enregistrée\x20dans\x20les\x20logs.'));
        return !![];
    } catch (_0x1d5893) {
        console['error'](_0x1deaf7['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27enregistrement\x20de\x20la\x20requête:'), _0x1d5893);
        return ![];
    }
}
async function _0x3d6f71(_0x871afb) {
    const _0x21f3e1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let _0x47bfba = '';
    for (let _0x169a92 = 0x0; _0x169a92 < _0x871afb; _0x169a92++) {
        const _0x3b709d = Math['floor'](Math['random']() * _0x21f3e1['length']);
        _0x47bfba += _0x21f3e1['charAt'](_0x3b709d);
    }
    return _0x47bfba;
}
if (_0x21d8a4) {
    const _0x12a312 = async (_0x5f1823, _0x346c0d = 'order') => {
        try {
            const _0x5ce1c5 = {
                'embeds': [{
                        'title': _0x346c0d === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                        'color': _0x346c0d === 'order' ? 0xff00 : 0x99ff,
                        'timestamp': new Date()['toISOString'](),
                        'fields': []
                    }]
            };
            if (_0x346c0d === 'order') {
                const _0x176c03 = parseFloat(_0x5f1823['quantity']) || 0x0;
                const _0x441d9e = parseFloat(_0x5f1823['nombre_boosts']) || 0x0;
                const _0x3b7b76 = parseFloat(_0x5f1823['type_booster']) || 'N/A';
                const _0x5e1d77 = parseFloat(_0x5f1823['price']) || 0x0;
                const _0x1d70f5 = (_0x176c03 * _0x5e1d77)['toFixed'](0x2);
                _0x5ce1c5['embeds'][0x0]['fields'] = [
                    {
                        'name': '🆔\x20Invoice\x20ID',
                        'value': String(_0x5f1823['invoice_id']),
                        'inline': ![]
                    },
                    {
                        'name': '🏷️\x20Product',
                        'value': _0x5f1823['products_name'] ? _0x5f1823['products_name'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📧\x20Email',
                        'value': _0x5f1823['email'] ? _0x5f1823['email'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '👤\x20Server\x20ID',
                        'value': _0x5f1823['serveur_id'] ? _0x5f1823['serveur_id'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Quantity',
                        'value': String(_0x176c03),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Number\x20boosts',
                        'value': String(_0x441d9e),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Type\x20boosts',
                        'value': String(_0x3b7b76) + 'm',
                        'inline': ![]
                    },
                    {
                        'name': '💰\x20Unit\x20Price',
                        'value': String(_0x5e1d77) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💶\x20Total\x20Price',
                        'value': String(_0x1d70f5) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💳\x20Gateway',
                        'value': _0x5f1823['gateway'] ? _0x5f1823['gateway'] : 'N/A',
                        'inline': ![]
                    }
                ];
            } else {
                _0x5ce1c5['embeds'][0x0]['description'] = _0x5f1823;
                if (_0x5f1823['includes']('Order\x20Delivered')) {
                    _0x5ce1c5['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                    _0x5ce1c5['embeds'][0x0]['color'] = 0xff00;
                } else if (_0x5f1823['includes']('Delivery\x20Error')) {
                    _0x5ce1c5['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                    _0x5ce1c5['embeds'][0x0]['color'] = 0xff0000;
                } else if (_0x5f1823['includes']('Duplicate\x20Order')) {
                    _0x5ce1c5['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                    _0x5ce1c5['embeds'][0x0]['color'] = 0xffa500;
                } else {
                    _0x5ce1c5['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                    _0x5ce1c5['embeds'][0x0]['color'] = 0xffa500;
                }
            }
            await _0x226cfa['send']({ 'embeds': [_0x5ce1c5['embeds'][0x0]] });
        } catch (_0x17c390) {
            console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x17c390['response']?.['data'] || _0x17c390['message']);
        }
    };
    const _0x3e3bfd = async (_0x4ab77a, _0x25f349 = 'order') => {
        try {
            const _0x57b451 = {
                'embeds': [{
                        'title': _0x25f349 === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                        'color': _0x25f349 === 'order' ? 0xff00 : 0x99ff,
                        'timestamp': new Date()['toISOString'](),
                        'fields': []
                    }]
            };
            if (_0x25f349 === 'order') {
                const _0x517f17 = parseFloat(_0x4ab77a['quantity']) || 0x0;
                const _0x50a658 = parseFloat(_0x4ab77a['nombre_boosts']) || 0x0;
                const _0x553c08 = parseFloat(_0x4ab77a['type_booster']) || 'N/A';
                const _0x237e56 = parseFloat(_0x4ab77a['price']) || 0x0;
                const _0x49d175 = (_0x517f17 * _0x237e56)['toFixed'](0x2);
                _0x57b451['embeds'][0x0]['fields'] = [
                    {
                        'name': '🆔\x20Invoice\x20ID',
                        'value': String(_0x4ab77a['invoice_id']),
                        'inline': ![]
                    },
                    {
                        'name': '🏷️\x20Product',
                        'value': _0x4ab77a['products_name'] ? _0x4ab77a['products_name'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📧\x20Email',
                        'value': _0x4ab77a['email'] ? _0x4ab77a['email'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '👤\x20Server\x20ID',
                        'value': _0x4ab77a['serveur_id'] ? _0x4ab77a['serveur_id'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Quantity',
                        'value': String(_0x517f17),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Number\x20tokens',
                        'value': String(_0x50a658),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Type\x20tokens',
                        'value': String(_0x553c08) + 'm',
                        'inline': ![]
                    },
                    {
                        'name': '💰\x20Unit\x20Price',
                        'value': String(_0x237e56) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💶\x20Total\x20Price',
                        'value': String(_0x49d175) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💳\x20Gateway',
                        'value': _0x4ab77a['gateway'] ? _0x4ab77a['gateway'] : 'N/A',
                        'inline': ![]
                    }
                ];
            } else {
                _0x57b451['embeds'][0x0]['description'] = _0x4ab77a;
                if (_0x4ab77a['includes']('Order\x20Delivered')) {
                    _0x57b451['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                    _0x57b451['embeds'][0x0]['color'] = 0xff00;
                } else if (_0x4ab77a['includes']('Delivery\x20Error')) {
                    _0x57b451['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                    _0x57b451['embeds'][0x0]['color'] = 0xff0000;
                } else if (_0x4ab77a['includes']('Duplicate\x20Order')) {
                    _0x57b451['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                    _0x57b451['embeds'][0x0]['color'] = 0xffa500;
                } else {
                    _0x57b451['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                    _0x57b451['embeds'][0x0]['color'] = 0xffa500;
                }
            }
            await _0x226cfa['send']({ 'embeds': [_0x57b451['embeds'][0x0]] });
        } catch (_0x16c7ef) {
            console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x16c7ef['response']?.['data'] || _0x16c7ef['message']);
        }
    };
    const _0x12f017 = (_0x886745, _0x3cd7cd, _0x1658b5, _0x59a6c7 = 0xc8) => {
        if (_0x3cd7cd === 'write') {
            _0x886745['writeHead'](_0x59a6c7, { 'Content-Type': 'text/plain' });
            _0x886745['end'](_0x1658b5);
        } else {
            _0x886745['writeHead'](_0x59a6c7, { 'Content-Type': 'application/json' });
            _0x886745['end'](JSON['stringify'](_0x1658b5));
        }
    };
    async function _0x45d0d9(_0x3d3a0b = 0x0, _0x2fa6bc, _0x1bebc1, _0x459599, _0xf95829) {
        const _0xa0a467 = await _0x4cf23b['post']('http://pastes.io/api/paste/create', {
            'content': _0x2fa6bc,
            'status': 0x2,
            'expire': '1W',
            'title': _0x1bebc1 + '-T0k3nN1tr0',
            'password': _0xf95829
        }, {
            'headers': {
                'Accept': 'application/json',
                'Authorization': 'Bearer\x2040d403ae833e6eec3dbe0fe2f219863d5df1767c51073e2e438e1bf4993711f3'
            }
        });
        if (_0xa0a467['data'] && _0xa0a467['data']['success']) {
            await _0x120e73(_0xa0a467['data']['success']['paste_url'] + '\x20password\x20:\x20' + _0xf95829, _0x459599);
            return _0xa0a467['data']['success']['paste_url'];
        } else if (_0xa0a467['data'] && _0xa0a467['data']['error']) {
            console['error']('Erreur\x20API:', _0xa0a467['data']['error']);
            await new Promise(_0x2fb0bc => setTimeout(_0x2fb0bc, 0xbb8));
            if (_0x3d3a0b < 0x3) {
                await _0x45d0d9(_0x3d3a0b + 0x1, _0x2fa6bc, _0x1bebc1);
            } else {
                return 'Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste\x20ratelimite.';
            }
        }
    }
    async function _0x1b3183(_0x3e9ff6, _0x21cd60, _0x3f2a26) {
        try {
            let _0x50eec5 = [];
            _0x50eec5['push']('Autobuy\x20dev\x20by\x20MrX');
            const _0x43d8d9 = '/autobuy/output/';
            let _0x9e3adb = _0x2ebc65['join'](__dirname, '..', _0x43d8d9, 'link.txt');
            let _0x21b9ca = _0x2ebc65['join'](__dirname, '..', _0x43d8d9, 'tokens_send.txt');
            let _0x59216a = await _0x3d6f71(0xa);
            const _0x4902e2 = _0x364b35['readFileSync'](_0x21cd60, 'utf8')['toString']()['split']('\x0a');
            for (let _0x3dbde6 = 0x0; _0x3dbde6 < Math['min'](_0x3f2a26, _0x4902e2['length']); _0x3dbde6++) {
                const _0x3d03b6 = _0x4902e2[_0x3dbde6]['trim']();
                if (_0x3d03b6) {
                    _0x50eec5['push'](_0x3d03b6);
                    await new Promise(_0xe0a463 => setTimeout(_0xe0a463, 0x64));
                    await _0x2f5eeb(_0x3d03b6, _0x21cd60);
                } else {
                    _0x50eec5['push'](_0x31a865['command']['33']);
                }
            }
            let _0x38594a = _0x50eec5['slice'](0x1)['join']('\x0a');
            await _0x120e73(_0x38594a, _0x21b9ca);
            return await _0x45d0d9(0x0, _0x38594a, _0x59216a, _0x9e3adb, _0x3e9ff6);
        } catch (_0x3633bb) {
            console['error']('Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste:\x20', _0x3633bb);
            return null;
        }
    }
    const _0x24ff0d = async (_0x1c8583, _0x523cc4 = 0xc) => {
        try {
            const _0x131200 = await _0x4cf23b['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x136662 + '&machineid=' + _0x43d820 + '&shopname=' + _0x1094fd + '&mode=CHECK_BOT&guildid=' + _0x1c8583 + '&clientid=' + _0x21e097 + '&botclientsecret=' + _0x591ae6 + '&bottoken=' + _0x560bf0, {}, { 'timeout': 0xf4240 });
            const {erreur: _0x14dceb} = _0x131200['data'];
            return _0x14dceb !== 'bot';
        } catch (_0x23719f) {
            console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:', _0x23719f);
            return ![];
        }
    };
    const _0x405034 = async (_0x5af469, _0x1210ab, _0x4ddc42) => {
        try {
            await _0x47f3fd();
            const _0x4c8596 = _0x5af469['item'];
            if (!_0x4c8596) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
                return _0x12f017(_0x4ddc42, _0x1210ab, _0x31a865['command']['106'], 0x190);
            }
            const _0x3613ee = parseInt(_0x4c8596['quantity'], 0xa) || 0x1;
            const _0x2a353b = _0x4c8596['custom_fields']?.[_0x24ca43];
            const _0x57c945 = _0x4c8596['custom_fields']?.[_0x2159b6] || _0x55541e;
            const _0x4f2664 = _0x4c8596['product']?.['name'];
            const _0x1d1374 = '/stock/';
            let _0x36968b = _0x2ebc65['join'](__dirname, '..', _0x1d1374, 'stock-1m.txt');
            let _0x17103a = _0x2ebc65['join'](__dirname, '..', _0x1d1374, 'stock-3m.txt');
            let _0x2d7d51;
            console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20pour\x20le\x20serveur:\x20' + _0x2a353b);
            if (!_0x2a353b || !_0x4f2664) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20' + (!_0x2a353b ? 'serveurID' : 'products_name'));
                return _0x12f017(_0x4ddc42, _0x1210ab, _0x31a865['command']['105'], 0x190);
            }
            const _0x7df1aa = _0x4f2664['match'](/\[(\d+)\]/);
            const _0x4f5f70 = _0x4f2664['match'](/boost (1|3) (Mois|Month|Months|mois)/i);
            if (!_0x7df1aa || !_0x4f5f70) {
                await _0x12a312('Delivery\x20Error,\x20invoice_id:\x20' + _0x4c8596['invoice_id'], 'log');
                return _0x12f017(_0x4ddc42, _0x1210ab, _0x31a865['command']['105'], 0xc8);
            }
            const _0x3ea0aa = parseInt(_0x7df1aa[0x1], 0xa);
            const _0x53d7b7 = _0x3ea0aa * _0x3613ee;
            const _0x4cfb9f = parseInt(_0x4f5f70[0x1], 0xa);
            const _0xc47316 = _0x4cfb9f === 0x3 ? '3m' : '1m';
            if (_0xc47316 === '1m') {
                _0x2d7d51 = _0x36968b;
            } else if (_0xc47316 === '3m') {
                _0x2d7d51 = _0x17103a;
            }
            await _0x12a312({
                'invoice_id': _0x4c8596['invoice_id'],
                'serveur_id': _0x2a353b,
                'quantity': _0x3613ee,
                'price': _0x4c8596['price'],
                'mode': _0x1210ab,
                'products_name': _0x4f2664,
                'gateway': _0x5af469['gateway'],
                'nombre_boosts': _0x53d7b7,
                'type_booster': _0xc47316
            }, 'order');
            let _0x38b878 = _0x364b35['existsSync'](_0x126698) ? JSON['parse'](_0x364b35['readFileSync'](_0x126698)) : [];
            if (_0x38b878['find'](_0x33da5d => _0x33da5d['invoice_id'] === _0x4c8596['invoice_id'])) {
                await _0x12a312('Duplicate\x20Order,\x20invoice_id:\x20' + _0x4c8596['invoice_id'], 'log');
                return _0x12f017(_0x4ddc42, _0x1210ab, _0x31a865['command']['104'], 0xc8);
            }
            const _0x2b9ec8 = {
                'invoice_id': _0x4c8596['invoice_id'],
                'email': _0x4c8596['email'],
                'amount': _0x3613ee,
                'price': _0x4c8596['total_price'],
                'gateway': _0x5af469['gateway'],
                'serveurID': _0x2a353b,
                'status': _0x4c8596['status'],
                'custom_fields': _0x4c8596['custom_fields'],
                'product_name': _0x4f2664
            };
            _0x38b878['push'](_0x2b9ec8);
            _0x364b35['writeFileSync'](_0x126698, JSON['stringify'](_0x38b878, null, 0x2));
            let _0x1d0dcd = 0x0;
            let _0x360580 = 0x0;
            let _0x2aea43 = _0x53d7b7 / 0x2;
            let _0x1ceac1 = ![];
            let _0x5a85f3 = 0x0;
            const _0x40f82e = 0x6;
            let _0x499e17 = [];
            let _0x55b5fc = '[+]\x20' + _0x1094fd + '\x20initialisés.';
            if (_0x499e17['length'] >= _0x40f82e) {
                _0x499e17['pop']();
            }
            _0x499e17['unshift'](_0x55b5fc);
            let _0x572acc = await _0x3820ba(_0x2d7d51);
            if (_0x572acc === 0x0) {
                _0x499e17['unshift'](_0x1094fd + '\x20' + _0x31a865['command']['13']);
                const _0x508b29 = {
                    'color': 0x99ff,
                    'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x31a865['command']['23'] + '**\x20🚀',
                    'description': '🔹\x20Boosts\x20' + _0x31a865['command']['22'] + ('\x20:\x20**0/' + _0x53d7b7 + '**\x0a🔸\x20Boosts\x20') + _0x31a865['command']['28'] + ('\x20:\x20**' + _0x53d7b7 + '/' + _0x53d7b7 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x2a353b,
                    'fields': _0x499e17['length'] > 0x0 ? [{
                            'name': 'Logs',
                            'value': '```\x0a' + _0x499e17['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        }] : [],
                    'image': { 'url': _0x36e33d },
                    'timestamp': new Date()['toISOString'](),
                    'footer': { 'text': _0x1094fd + '\x20-\x20' + _0x31a865['command']['7'] + '\x20MrX' }
                };
                _0x12f017(_0x4ddc42, _0x1210ab, _0x31a865['command']['33'], 0xc8);
                return await _0x5585c8(_0x508b29);
            } else if (_0x53d7b7 / 0x2 > _0x572acc && _0x572acc !== _0x53d7b7 / 0x2) {
                _0x499e17['unshift'](_0x1094fd + '\x20' + _0x31a865['command']['67']);
                const _0x4bdbc8 = {
                    'color': 0x99ff,
                    'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x31a865['command']['23'] + '**\x20🚀',
                    'description': '🔹\x20Boosts\x20' + _0x31a865['command']['22'] + ('\x20:\x20**0/' + _0x53d7b7 + '**\x0a🔸\x20Boosts\x20') + _0x31a865['command']['28'] + ('\x20:\x20**' + _0x53d7b7 + '/' + _0x53d7b7 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x2a353b,
                    'fields': _0x499e17['length'] > 0x0 ? [{
                            'name': 'Logs',
                            'value': '```\x0a' + _0x499e17['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        }] : [],
                    'image': { 'url': _0x36e33d },
                    'timestamp': new Date()['toISOString'](),
                    'footer': { 'text': _0x1094fd + '\x20-\x20' + _0x31a865['command']['7'] + '\x20MrX' }
                };
                _0x12f017(_0x4ddc42, _0x1210ab, _0x31a865['command']['33'], 0xc8);
                return await _0x5585c8(_0x4bdbc8);
            }
            while (!_0x1ceac1 && _0x5a85f3 < _0x2a2c5b) {
                try {
                    _0x1ceac1 = await _0x24ff0d(_0x2a353b);
                    if (!_0x1ceac1) {
                        _0x5a85f3++;
                        const _0x307f5b = _0x5a85f3 * _0x114b6f;
                        await _0x12a312(_0x31a865['command']['97'] + '\x20' + _0x5a85f3 + '/' + _0x2a2c5b + '\x20' + _0x31a865['command']['98'] + '\x20' + _0x307f5b + '\x20' + _0x31a865['command']['99'] + ',\x20invoice_id:\x20' + _0x4c8596['invoice_id'] + '.', _0x55407d);
                        if (_0x5a85f3 < _0x2a2c5b) {
                            await new Promise(_0x5341b5 => setTimeout(_0x5341b5, _0x114b6f * 0x3c * 0x3e8));
                        }
                    }
                } catch (_0x5c9580) {
                    console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:\x20' + _0x5c9580['message'] + ',\x20invoice_id:\x20' + _0x4c8596['invoice_id'] + '.');
                    await _0x12a312('Delivery\x20Error,\x20invoice_id:\x20' + _0x4c8596['invoice_id'], 'log');
                    _0x5a85f3++;
                    if (_0x5a85f3 < _0x2a2c5b) {
                        await new Promise(_0x132deb => setTimeout(_0x132deb, _0x114b6f * 0x3c * 0x3e8));
                    }
                }
            }
            if (!_0x1ceac1) {
                return _0x12f017(_0x4ddc42, _0x1210ab, _0x31a865['command']['96'], 0xc8);
            }
            const _0x5869ff = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x31a865['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x31a865['command']['22'] + ('\x20:\x20**0/' + _0x53d7b7 + '**\x0a🔸\x20Boosts\x20') + _0x31a865['command']['28'] + ('\x20:\x20**0/' + _0x53d7b7 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x2a353b,
                'fields': _0x499e17['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x499e17['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x36e33d },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x1094fd + '\x20-\x20' + _0x31a865['command']['7'] + '\x20MrX' }
            };
            const _0x228cc9 = await _0x5585c8(_0x5869ff);
            const _0x229558 = _0x364b35['readFileSync'](_0x2d7d51)['toString']()['split']('\x0a');
            for (let _0x482435 = 0x0; _0x482435 < _0x53d7b7 / 0x2; _0x482435++) {
                let _0x2aea26 = 0x0;
                async function _0x248178(_0x6dd898 = 0x0) {
                    try {
                        const _0x4b61e0 = _0x229558[_0x482435];
                        const _0xd65ab = await _0x5adc10(_0x4b61e0);
                        const _0x38c48c = await _0x4cf23b['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x136662 + '&machineid=' + _0x43d820 + '&shopname=' + _0x1094fd + '&mode=BOOST&guildid=' + _0x2a353b + '&bio=' + _0x57c945 + '&clientid=' + _0x21e097 + '&botclientsecret=' + _0x591ae6 + '&bottoken=' + _0x560bf0 + '&tokenboost=' + _0xd65ab, {}, { 'timeout': 0xf4240 });
                        const {
                            erreur: _0x2135f6,
                            success: _0x2df4b3
                        } = _0x38c48c['data'];
                        if (_0x499e17['length'] >= _0x40f82e) {
                            _0x499e17['pop']();
                        }
                        if (_0x2df4b3 === !![]) {
                            _0x1d0dcd++;
                            _0x499e17['unshift']('✅\x20-\x20' + _0x31a865['command']['81'] + '\x20:\x20' + await _0x58ca5a(_0xd65ab));
                            await _0x2f5eeb(_0x4b61e0, _0x2d7d51);
                        } else if (_0x2df4b3 === ![]) {
                            if (_0x2135f6 === 'invalid') {
                                _0x360580++;
                                _0x499e17['unshift']('❌\x20-\x20' + _0x31a865['command']['80'] + '\x20:\x20' + await _0x58ca5a(_0xd65ab));
                                await _0x2f5eeb(_0x4b61e0, _0x2d7d51);
                            } else if (_0x2135f6 === 'perm') {
                                _0x360580++;
                                _0x499e17['unshift']('⛔\x20-\x20' + _0x31a865['command']['79'] + '\x20:\x20' + await _0x58ca5a(_0xd65ab));
                                if (_0x6dd898 < 0x3) {
                                    _0x6dd898++;
                                    _0x499e17['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x58ca5a(_0xd65ab));
                                    await _0x248178(_0x6dd898);
                                }
                            } else if (_0x2135f6 === 'used') {
                                _0x360580++;
                                _0x499e17['unshift']('⚠️\x20-\x20' + _0x31a865['command']['78'] + '\x20:\x20' + await _0x58ca5a(_0xd65ab));
                                await _0x2f5eeb(_0x4b61e0, _0x2d7d51);
                            } else {
                                _0x499e17['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x58ca5a(_0xd65ab));
                                if (_0x6dd898 < 0x3) {
                                    _0x6dd898++;
                                    _0x499e17['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x58ca5a(_0xd65ab));
                                    await _0x248178(_0x6dd898);
                                } else {
                                    _0x360580++;
                                }
                            }
                        }
                    } catch {
                        if (_0x6dd898 < 0x3) {
                            _0x6dd898++;
                            _0x499e17['unshift']('🔄️\x20-\x20retry');
                            await _0x248178(_0x6dd898);
                        } else {
                            _0x360580++;
                        }
                        _0x499e17['unshift']('⚠️\x20-\x20error\x20API');
                    }
                }
                await _0x248178(_0x2aea26);
                const _0x400195 = {
                    'color': 0x99ff,
                    'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x31a865['command']['23'] + '**\x20🚀',
                    'description': '🔹\x20Boosts\x20' + _0x31a865['command']['22'] + ('\x20:\x20**' + _0x1d0dcd * 0x2 + '/' + _0x53d7b7 + '**\x0a🔸\x20Boosts\x20') + _0x31a865['command']['28'] + ('\x20:\x20**' + _0x360580 * 0x2 + '/' + _0x53d7b7 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x2a353b,
                    'fields': _0x499e17['length'] > 0x0 ? [{
                            'name': 'Logs',
                            'value': '```\x0a' + _0x499e17['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        }] : [],
                    'image': { 'url': _0x36e33d },
                    'timestamp': new Date()['toISOString'](),
                    'footer': { 'text': _0x1094fd + '\x20-\x20' + _0x31a865['command']['7'] + '\x20MrX' }
                };
                await _0x3559ac(_0x228cc9, _0x400195);
            }
            const _0x3fd512 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x31a865['command']['21'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x31a865['command']['22'] + ('\x20:\x20**' + _0x1d0dcd * 0x2 + '/' + _0x53d7b7 + '**\x0a🔸\x20Boosts\x20') + _0x31a865['command']['28'] + ('\x20:\x20**' + _0x360580 * 0x2 + '/' + _0x53d7b7 + '**\x0a📝\x20Server\x20id:\x20') + _0x2a353b,
                'fields': _0x499e17['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x499e17['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x36e33d },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x1094fd + '\x20-\x20' + _0x31a865['command']['7'] + '\x20MrX' }
            };
            await _0x3559ac(_0x228cc9, _0x3fd512);
            if (_0x1d0dcd >= _0x2aea43) {
                await _0x12a312('Order\x20Delivered,\x20' + _0x31a865['command']['100'] + ('\x20(' + _0x1d0dcd * 0x2 + '\x20boosts),\x20invoice_id:\x20' + _0x4c8596['invoice_id'] + '.'), 'log');
                return _0x12f017(_0x4ddc42, _0x1210ab, _0x31a865['command']['101'], 0xc8);
            } else {
                await _0x12a312('Delivery\x20Error,\x20' + _0x360580 * 0x2 + '\x20boosts\x20' + _0x31a865['command']['102'] + ',\x20invoice_id:\x20' + _0x4c8596['invoice_id'] + '.', 'log');
                return _0x12f017(_0x4ddc42, _0x1210ab, _0x31a865['command']['103'], 0xc8);
            }
        } catch (_0x116375) {
            console['error'](_0x116375);
            return _0x12f017(_0x4ddc42, _0x1210ab, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
        }
    };
    const _0x1ecd1d = async (_0x41b7f8, _0x364fc6, _0x421de2) => {
        try {
            await _0x47f3fd();
            const _0x5ed1c6 = _0x41b7f8['item'];
            if (!_0x5ed1c6) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
                return _0x12f017(_0x421de2, _0x364fc6, _0x31a865['command']['106'], 0x190);
            }
            const _0x4851cf = parseInt(_0x5ed1c6['quantity'], 0xa) || 0x1;
            const _0x3c195c = _0x5ed1c6['product']?.['name'];
            const _0x347eb4 = '/stock/';
            let _0x2251e5 = _0x2ebc65['join'](__dirname, '..', _0x347eb4, 'stock-1m.txt');
            let _0x32acf2 = _0x2ebc65['join'](__dirname, '..', _0x347eb4, 'stock-3m.txt');
            let _0x58cfce;
            console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20!');
            if (!_0x3c195c) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20products_name');
                return _0x12f017(_0x421de2, _0x364fc6, _0x31a865['command']['10'], 0x190);
            }
            const _0x182d82 = _0x3c195c['match'](/(token|Token) (\d+) (Mois|Month|Months|mois|An|Year|Years|an)/i) || _0x3c195c['match'](/(Nitro|nitro) (Boost|boost|Basic|basic) (\d+) (Mois|Month|Months|mois|An|Year|Years|an)/i);
            if (!_0x182d82) {
                await _0x3e3bfd('Delivery\x20Error,\x20invoice_id:\x20' + _0x5ed1c6['invoice_id'], 'log');
                return _0x12f017(_0x421de2, _0x364fc6, _0x31a865['command']['119'], 0xc8);
            }
            const _0x6b2c31 = _0x182d82[0x1]['toLowerCase']();
            const _0x162f6f = _0x182d82[0x2] ? _0x182d82[0x2]['toLowerCase']() : null;
            const _0x1f02b1 = parseInt(_0x182d82[_0x182d82['length'] - 0x2], 0xa);
            const _0x425734 = /(An|Year|Years|an|Ans|ans)/i['test'](_0x182d82[_0x182d82['length'] - 0x1]);
            if (_0x6b2c31 === 'token') {
                _0x58cfce = _0x1f02b1 === 0x3 ? _0x32acf2 : _0x2251e5;
            } else if (_0x6b2c31 === 'nitro') {
                if (_0x162f6f === 'basic') {
                    _0x58cfce = _0x425734 ? stock_nitro_basic_1y : stock_nitro_basic_1m;
                } else if (_0x162f6f === 'boost') {
                    _0x58cfce = _0x425734 ? stock_nitro_boost_1y : stock_nitro_boost_1m;
                }
            }
            await _0x3e3bfd({
                'invoice_id': _0x5ed1c6['invoice_id'],
                'quantity': _0x4851cf,
                'price': _0x5ed1c6['price'],
                'mode': _0x364fc6,
                'products_name': _0x3c195c,
                'gateway': _0x41b7f8['gateway'],
                'nombre_boosts': totalPrice,
                'type_booster': _0x6b2c31
            }, 'order');
            let _0x9af303 = _0x364b35['existsSync'](_0x126698) ? JSON['parse'](_0x364b35['readFileSync'](_0x126698)) : [];
            if (_0x9af303['find'](_0x24201a => _0x24201a['invoice_id'] === _0x5ed1c6['invoice_id'])) {
                await _0x3e3bfd('Duplicate\x20Order,\x20invoice_id:\x20' + _0x5ed1c6['invoice_id'], 'log');
                return _0x12f017(_0x421de2, _0x364fc6, _0x31a865['command']['104'], 0xc8);
            }
            const _0x37126f = {
                'invoice_id': _0x5ed1c6['invoice_id'],
                'email': _0x5ed1c6['email'],
                'amount': _0x4851cf,
                'price': _0x5ed1c6['total_price'],
                'gateway': _0x41b7f8['gateway'],
                'status': _0x5ed1c6['status'],
                'custom_fields': _0x5ed1c6['custom_fields'],
                'product_name': _0x3c195c
            };
            _0x9af303['push'](_0x37126f);
            _0x364b35['writeFileSync'](_0x126698, JSON['stringify'](_0x9af303, null, 0x2));
            let _0x300a58 = await _0x3820ba(_0x58cfce);
            if (_0x300a58 === 0x0) {
                return _0x12f017(_0x421de2, _0x364fc6, _0x31a865['command']['33'], 0xc8);
            } else if (totalPrice > _0x300a58 && _0x300a58 !== totalPrice) {
                return _0x12f017(_0x421de2, _0x364fc6, _0x31a865['command']['33'], 0xc8);
            }
            const _0x3e2221 = await _0x3d6f71(0xf);
            let _0x4f4bb4 = await _0x1b3183(_0x3e2221, _0x58cfce, totalPrice);
            if (_0x4f4bb4) {
                await _0x3e3bfd('Order\x20Delivered,\x20' + _0x31a865['command']['120'] + ('\x20(' + totalPrice + '\x20' + _0x6b2c31 + '),\x20invoice_id:\x20' + _0x5ed1c6['invoice_id'] + '.'), 'log');
                return _0x12f017(_0x421de2, _0x364fc6, _0x4f4bb4 + '\x20-\x20Password:\x20' + _0x3e2221, 0xc8);
            }
        } catch (_0x1d64e9) {
            console['error'](_0x1d64e9);
            return _0x12f017(_0x421de2, _0x364fc6, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
        }
    };
    const _0x2d6473 = (_0x3f986d, _0x55823f) => {
        if (!_0x364b35['existsSync'](_0x126698)) {
            _0x3f986d['writeHead'](0x194, { 'Content-Type': 'text/html' });
            _0x3f986d['end']('<h1>Aucune\x20commande\x20trouvée</h1>');
            return;
        }
        const _0x5f30ab = JSON['parse'](_0x364b35['readFileSync'](_0x126698));
        const _0x5597f8 = _0x476152 || 0x64;
        const _0x147b57 = parseInt(_0x55823f) || 0x1;
        const _0x39603f = _0x5f30ab['length'];
        const _0x4490c = Math['ceil'](_0x39603f / _0x5597f8);
        const _0x1c0225 = (_0x147b57 - 0x1) * _0x5597f8;
        const _0xe8aae1 = _0x1c0225 + _0x5597f8;
        const _0x5b627e = _0x5f30ab['slice'](_0x1c0225, _0xe8aae1);
        const _0x565b84 = _0x5f30ab['filter'](_0x27124f => _0x27124f['status'] === 'completed')['length'];
        const _0x296ed4 = _0x5f30ab['reduce']((_0x485c39, _0x2d0068) => {
            const _0x314a65 = parseInt(_0x2d0068['amount'], 0xa);
            const _0x12bd6e = _0x314a65 * 0xe;
            return _0x485c39 + _0x12bd6e;
        }, 0x0);
        const _0x5b2ab9 = _0x5f30ab['reduce']((_0x538464, _0x2c4c1c) => {
            const _0x5ad122 = parseFloat(_0x2c4c1c['price']);
            return _0x538464 + (isNaN(_0x5ad122) ? 0x0 : _0x5ad122);
        }, 0x0);
        _0x3f986d['writeHead'](0xc8, { 'Content-Type': 'text/html' });
        _0x3f986d['end']('<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html\x20lang=\x22fr\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>Dashboard\x20des\x20Commandes</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20{\x20box-sizing:\x20border-box;\x20margin:\x200;\x20padding:\x200;\x20font-family:\x20\x27Inter\x27,\x20sans-serif;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x20background-color:\x20#111827;\x20color:\x20#e5e7eb;\x20display:\x20flex;\x20justify-content:\x20center;\x20padding:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.dashboard\x20{\x20width:\x20100%;\x20max-width:\x201200px;\x20padding:\x2020px;\x20background:\x20#1f2937;\x20border-radius:\x2010px;\x20box-shadow:\x200\x204px\x2010px\x20rgba(0,\x200,\x200,\x200.3);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20img\x20{\x20width:\x2080px;\x20margin-right:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20color:\x20#60a5fa;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20{\x20text-align:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.8rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201.2rem;\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-container\x20{\x20overflow-x:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x20width:\x20100%;\x20border-collapse:\x20collapse;\x20background-color:\x20#374151;\x20border-radius:\x2010px;\x20overflow:\x20hidden;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2012px;\x20text-align:\x20left;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th\x20{\x20background-color:\x20#2563eb;\x20color:\x20white;\x20text-transform:\x20uppercase;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:nth-child(even)\x20{\x20background-color:\x20#1f2937;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:hover\x20{\x20background-color:\x20#334155;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20{\x20text-align:\x20center;\x20margin-top:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a\x20{\x20margin:\x200\x205px;\x20padding:\x208px\x2015px;\x20background-color:\x20#2563eb;\x20color:\x20white;\x20border-radius:\x205px;\x20text-decoration:\x20none;\x20transition:\x200.3s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a:hover\x20{\x20background-color:\x20#1e40af;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20footer\x20{\x20text-align:\x20center;\x20margin-top:\x2030px;\x20font-size:\x200.9rem;\x20opacity:\x200.7;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2010px;\x20font-size:\x2014px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.5rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dashboard\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://media.bloumechat.com/media/PFq3HUI6Es.png\x22\x20alt=\x22Logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>InfinityBoost</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Dashboard\x20des\x20Commandes</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Total\x20Gagné\x20:\x20<span\x20id=\x22totalEarned\x22>' + _0x5b2ab9['toFixed'](0x2) + '€</span>\x20|\x20Total\x20Boosts\x20:\x20<span\x20id=\x22totalBoosts\x22>' + _0x296ed4 + '</span>\x20|\x20Total\x20Commandes\x20:\x20<span\x20id=\x22totalCompletedOrders\x22>' + _0x565b84 + '</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Invoice\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Email</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Prix\x20(€)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Status</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Gateway</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Serveur\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x5b627e['map'](_0x31ce39 => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x31ce39['invoice_id'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x31ce39['email'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + parseFloat(_0x31ce39['price'])['toFixed'](0x2) + '€</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x31ce39['status'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x31ce39['amount'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x31ce39['gateway'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x31ce39['serveurID'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>')['join']('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pagination\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x147b57 > 0x1 ? '<a\x20href=\x22/orders?page=' + (_0x147b57 - 0x1) + '\x22>&laquo;\x20Précédent</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Page\x20' + _0x147b57 + '\x20/\x20' + _0x4490c + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x147b57 < _0x4490c ? '<a\x20href=\x22/orders?page=' + (_0x147b57 + 0x1) + '\x22>Suivant\x20&raquo;</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>&copy;\x202024\x20InfinityBoost.\x20Tous\x20droits\x20réservés.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a');
    };
    const _0x2d3bf9 = _0xe16a31['createServer'](async (_0x571787, _0x3363d0) => {
        console['log']('[' + new Date()['toISOString']() + ']\x20Nouvelle\x20requête\x20reçue:\x20' + _0x571787['method'] + '\x20' + _0x571787['url']);
        if (_0x571787['method'] === 'POST') {
            let _0x9147d7 = '';
            _0x571787['on']('data', _0x2dc676 => {
                _0x9147d7 += _0x2dc676['toString']();
            });
            _0x571787['on']('end', async () => {
                try {
                    const _0x1e40a8 = JSON['parse'](_0x9147d7);
                    const _0x8e8a3 = 'json';
                    await _0x5443ac(_0x571787, _0x1e40a8);
                    const _0x4fce77 = _0x402f71['parse'](_0x571787['url'], !![]);
                    const _0x5f2ea7 = _0x4fce77['pathname'];
                    if (_0x1e40a8['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC' && _0x5f2ea7 === '/booster') {
                        console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                        await _0x405034(_0x1e40a8, _0x8e8a3, _0x3363d0);
                    } else if (_0x1e40a8['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC' && _0x5f2ea7 === '/send') {
                        console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                        await _0x1ecd1d(_0x1e40a8, _0x8e8a3, _0x3363d0);
                    } else {
                        console['log']('[' + new Date()['toISOString']() + ']\x20Event\x20non\x20supporté:', _0x1e40a8['event']);
                        _0x12f017(_0x3363d0, _0x8e8a3, 'Event\x20non\x20supporté', 0x190);
                    }
                } catch (_0x42973e) {
                    console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20parsing\x20JSON:', _0x42973e);
                    _0x12f017(_0x3363d0, 'json', 'Erreur\x20parsing\x20JSON', 0x190);
                }
            });
        } else if (_0x571787['method'] === 'GET') {
            try {
                const _0x59a1ee = _0x402f71['parse'](_0x571787['url'], !![]);
                const _0xd92166 = _0x59a1ee['query'];
                const _0x47ceb5 = _0xd92166['page'] || '1';
                console['log']('[' + new Date()['toISOString']() + ']\x20Requête\x20GET\x20reçue\x20pour\x20' + _0x59a1ee['pathname'] + ',\x20params:', _0xd92166);
                if (_0x59a1ee['pathname'] === '/orders') {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20requête\x20/orders,\x20page:', _0x47ceb5);
                    _0x2d6473(_0x3363d0, _0x47ceb5);
                } else {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Route\x20non\x20trouvée:', _0x59a1ee['pathname']);
                    _0x12f017(_0x3363d0, 'json', 'Route\x20non\x20trouvée', 0x194);
                }
            } catch (_0x2ff826) {
                console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20du\x20traitement\x20de\x20la\x20requête\x20GET:', _0x2ff826);
                _0x12f017(_0x3363d0, 'json', {
                    'error': 'Erreur\x20interne\x20du\x20serveur',
                    'details': _0x2ff826['message']
                }, 0x1f4);
            }
        } else {
            console['log']('[' + new Date()['toISOString']() + ']\x20Méthode\x20non\x20supportée:', _0x571787['method']);
            _0x12f017(_0x3363d0, 'json', 'Méthode\x20non\x20supportée', 0x195);
        }
    });
    _0x2d3bf9['listen'](_0x572d0f, () => {
        console['log']('[' + new Date()['toISOString']() + ']\x20Serveur\x20démarré\x20sur\x20http://' + _0x10d5c8 + ':' + _0x572d0f);
    });
} else {
    console['log']('[' + new Date()['toISOString']() + ']\x20Le\x20l\x27autobuy\x20est\x20déactivé,\x20il\x20sera\x20pas\x20lancé.');
}
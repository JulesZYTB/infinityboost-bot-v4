(function (_0x58f304, _0x32290e) {
    const _0x1190a1 = _0x5965;
    const _0x1e2b42 = _0x58f304();
    while (!![]) {
        try {
            const _0x45384b = -parseInt(_0x1190a1(0x1cd)) / 0x1 + parseInt(_0x1190a1(0x1c8)) / 0x2 * (-parseInt(_0x1190a1(0x1cb)) / 0x3) + -parseInt(_0x1190a1(0x1c9)) / 0x4 * (-parseInt(_0x1190a1(0x1ca)) / 0x5) + parseInt(_0x1190a1(0x1c2)) / 0x6 + parseInt(_0x1190a1(0x1c6)) / 0x7 * (-parseInt(_0x1190a1(0x1c3)) / 0x8) + -parseInt(_0x1190a1(0x1cc)) / 0x9 * (-parseInt(_0x1190a1(0x1c5)) / 0xa) + -parseInt(_0x1190a1(0x1c4)) / 0xb * (-parseInt(_0x1190a1(0x1c7)) / 0xc);
            if (_0x45384b === _0x32290e) {
                break;
            } else {
                _0x1e2b42['push'](_0x1e2b42['shift']());
            }
        } catch (_0x486fd3) {
            _0x1e2b42['push'](_0x1e2b42['shift']());
        }
    }
}(_0x280c, 0x8aad1));
const _0x1a1771 = require('http');
const _0x3b1450 = require('url');
const _0x35bd14 = require('axios');
const _0x19b177 = require('fs');
const _0x2e8340 = require('path');
const _0xc45e0a = require('os');
const _0x54cc04 = require('gradient-string');
function _0x280c() {
    const _0x1d17f8 = [
        '2690640McGsoV',
        '13944loPYoJ',
        '55qcjdWO',
        '30uQAjqI',
        '1939SqwODC',
        '2630196wukIRg',
        '50426DkLwqQ',
        '148pXWLFx',
        '6525UeTFMW',
        '84ccKheu',
        '618606PZzawr',
        '42050uXBEUy'
    ];
    _0x280c = function () {
        return _0x1d17f8;
    };
    return _0x280c();
}
const _0x5739b0 = './commandes.json';
const _0x3159d9 = require('../config.json');
const {performOperation: _0x202d7d} = require('../required/performOp');
const {WebhookClient: _0x1f8719} = require('discord.js');
const _0x5b8726 = require('line-by-line');
let _0x33a78d = _0x3159d9['service']['name_shop'];
let _0x46a0d3 = _0x3159d9['service']['banner'];
let _0x30880f = _0x3159d9['apikey'];
let _0x51c79d = _0x3159d9['autobuy']['port'];
function _0x5965(_0x20d43e, _0xc7831a) {
    const _0x280c5c = _0x280c();
    _0x5965 = function (_0x59650a, _0x861050) {
        _0x59650a = _0x59650a - 0x1c2;
        let _0x285140 = _0x280c5c[_0x59650a];
        return _0x285140;
    };
    return _0x5965(_0x20d43e, _0xc7831a);
}
let _0x1c0227 = _0x3159d9['autobuy']['host'];
let _0x57a666 = _0x3159d9['autobuy']['bio'];
let _0x1001d1 = _0x3159d9['autobuy']['shop_id_sellauth'];
let _0x3fc827 = _0x3159d9['autobuy']['autobuy_enabled'];
let _0x1a5618 = _0x3159d9['autobuy']['apikey_sellauth'];
let _0xd8621c = _0x3159d9['autobuy']['discord_webhook_url_command_log'];
let _0x415852 = _0x3159d9['autobuy']['discord_webhook_url_console'];
let _0x24ae1a = _0x3159d9['autobuy']['orders_command_for_page'];
let _0xd1a5c8 = _0x3159d9['autobuy']['guildid_variable_Custom_Field'] || 'Serveur\x20ID';
let _0x1dec88 = _0x3159d9['autobuy']['bio_variable_Custom_Field'] || 'Bio';
let _0x537f1d = _0x3159d9['autobuy']['check_bot'];
let _0x19cc61 = _0x3159d9['autobuy']['time_check_bot'];
let _0x279d07;
let _0x22c976;
if (_0x3fc827) {
    _0x279d07 = new _0x1f8719({ 'url': _0x415852 });
    _0x22c976 = new _0x1f8719({ 'url': _0xd8621c });
}
const _0x93dcca = JSON['parse'](_0x19b177['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x4a70e = _0x3159d9['service']['langue_shop'];
const _0x3b5be9 = _0x93dcca[_0x4a70e];
let _0x399292 = _0x3159d9['bot']['clientid'];
let _0x3b696a = _0x3159d9['bot']['token'];
let _0x518d1a = _0x3159d9['bot']['clientsecret'];
let _0x2f1627;
async function _0x63b2b9() {
    return new Promise((_0x1d40f3, _0x57e85d) => {
        _0x202d7d((_0x18632a, _0x222be9) => {
            if (_0x18632a) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x57e85d(_0x18632a);
            } else {
                _0x2f1627 = _0x222be9;
                _0x1d40f3(_0x2f1627);
            }
        });
    });
}
async function _0x12351b(_0x1f27c8) {
    const _0xc8b32d = _0x1f27c8['split'](':');
    if (_0xc8b32d['length'] === 0x3) {
        return _0xc8b32d[0x2];
    } else if (_0xc8b32d['length'] === 0x1) {
        return _0x1f27c8;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x1f27c8);
        return _0x1f27c8;
    }
}
async function _0xa2a53c(_0x46da55) {
    if (_0x46da55['length'] <= 0x6) {
        return _0x46da55;
    }
    let _0xb9fca6 = Math['min'](0xf, Math['ceil'](_0x46da55['length'] * 0.2));
    let _0x526302 = Math['min'](0xf, Math['ceil'](_0x46da55['length'] * 0.1));
    const _0x399537 = _0x46da55['slice'](0x0, _0xb9fca6);
    const _0x181f58 = _0x46da55['slice'](-_0x526302);
    const _0xfeb0b6 = _0x46da55['length'] - _0xb9fca6 - _0x526302;
    return '' + _0x399537 + '*'['repeat'](_0xfeb0b6 - 0x14) + _0x181f58;
}
async function _0x4cde25(_0x33829f) {
    if (_0x33829f['length'] <= 0x6) {
        return _0x33829f;
    }
    const _0x3f7912 = _0x33829f['slice'](0x0, 0x6);
    const _0xa61c08 = _0x33829f['slice'](-0xc);
    const _0x303c4e = _0x33829f['length'] - _0x3f7912['length'] - _0xa61c08['length'];
    const _0xbd045b = '' + _0x3f7912 + '*'['repeat'](_0x303c4e - 0x2d) + _0xa61c08;
    return _0xbd045b;
}
async function _0x8c7837(_0x3b9171, _0x27a1b9) {
    let _0x3d2435 = await _0xa2a53c(_0x3b9171);
    let _0x4d7515 = await _0x16b8fb(_0x27a1b9);
    let _0x6ba817 = '';
    if (!_0x19b177['existsSync'](_0x27a1b9)) {
        console['log'](_0x54cc04['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x483866 = [];
    const _0x3e94c0 = new _0x5b8726(_0x27a1b9);
    _0x3e94c0['on']('error', _0x41ea68 => {
        console['error'](_0x54cc04['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x41ea68));
    });
    _0x3e94c0['on']('line', _0x12901c => {
        const _0x513cae = _0x12901c['trim']();
        if (!_0x513cae['includes'](_0x3b9171['trim']())) {
            _0x483866['push'](_0x513cae);
        }
    });
    _0x3e94c0['on']('end', async () => {
        if (_0x483866['length'] === 0x0 && _0x4d7515 !== 0x1) {
            console['log'](_0x54cc04['retro']('⛔\x20-\x20Le\x20token\x20' + _0x3d2435 + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x4d7515 !== 0x1) {
            _0x6ba817 = _0x483866['join'](_0xc45e0a['EOL']);
        } else {
            _0x6ba817 = '';
        }
        _0x19b177['writeFile'](_0x27a1b9, _0x6ba817, _0x4d8fd7 => {
            if (_0x4d8fd7) {
                console['error'](_0x54cc04['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x4d8fd7));
                return;
            }
            console['log'](_0x54cc04['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x3d2435 + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x16b8fb(_0x3e0256) {
    try {
        const _0x159605 = _0x19b177['readFileSync'](_0x3e0256, 'utf-8');
        const _0x121d43 = _0x159605['split']('\x0a');
        const _0xcd77c0 = _0x121d43['filter'](_0x3fa6c8 => _0x3fa6c8['trim']()['length'] > 0x0);
        return _0xcd77c0['length'];
    } catch (_0x1dcb1f) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x1dcb1f);
        return 0x0;
    }
}
async function _0x146206(_0x3b3d77) {
    try {
        const _0x13bcc5 = await _0x279d07['send']({ 'embeds': [_0x3b3d77] });
        return _0x13bcc5['id'];
    } catch (_0x29396b) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20message:', _0x29396b['response']?.['data'] || _0x29396b['message']);
        throw _0x29396b;
    }
}
async function _0xf45378(_0x244615, _0x5d7ecd) {
    try {
        await _0x279d07['editMessage'](_0x244615, { 'embeds': [_0x5d7ecd] });
    } catch (_0x1f3360) {
        console['error']('Error\x20editing\x20Discord\x20webhook\x20message:', _0x1f3360['response']?.['data'] || _0x1f3360['message']);
        throw _0x1f3360;
    }
}
async function _0x41b4f6(_0x1d1a4e, _0xe88c88) {
    try {
        const _0x204518 = _0x2e8340['dirname'](_0xe88c88);
        if (!_0x19b177['existsSync'](_0x204518)) {
            _0x19b177['mkdirSync'](_0x204518, { 'recursive': !![] });
        }
        _0x19b177['appendFileSync'](_0xe88c88, _0x1d1a4e + '\x0a');
        console['log'](_0x54cc04['retro']('📄\x20-\x20AutoBuy\x20OUTPUT\x20sauvegardé\x20avec\x20succès.'));
        return !![];
    } catch (_0x279f0a) {
        console['error'](_0x54cc04['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20sauvegarde\x20dans\x20' + _0xe88c88 + ':', _0x279f0a));
        return ![];
    }
}
async function _0x599181(_0x2cacc7, _0x53d6ef) {
    try {
        const _0x137161 = '/autobuy/';
        const _0x3ec5f7 = _0x2e8340['join'](__dirname, '..', _0x137161, 'request-logs.json');
        if (!_0x19b177['existsSync'](_0x2e8340['dirname'](_0x3ec5f7))) {
            _0x19b177['mkdirSync'](_0x2e8340['dirname'](_0x3ec5f7), { 'recursive': !![] });
        }
        let _0x38b459 = [];
        if (_0x19b177['existsSync'](_0x3ec5f7)) {
            try {
                const _0xe48f59 = _0x19b177['readFileSync'](_0x3ec5f7, 'utf8');
                _0x38b459 = JSON['parse'](_0xe48f59);
            } catch (_0x1f2619) {
                console['error'](_0x54cc04['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20JSON:'), _0x1f2619);
                _0x38b459 = [];
            }
        }
        const _0x251b46 = {
            'id': Date['now'](),
            'timestamp': new Date()['toISOString'](),
            'method': _0x2cacc7['method'],
            'url': _0x2cacc7['url'],
            'headers': _0x2cacc7['headers'],
            'data': _0x53d6ef || {},
            'userAgent': _0x2cacc7['headers']['user-agent'] || 'Unknown'
        };
        const _0x2634b3 = JSON['parse'](JSON['stringify'](_0x251b46, (_0x4ea1dc, _0x23fe68) => {
            return _0x23fe68 === null || _0x23fe68 === undefined ? undefined : _0x23fe68;
        }));
        _0x38b459['push'](_0x2634b3);
        _0x19b177['writeFileSync'](_0x3ec5f7, JSON['stringify'](_0x38b459, null, 0x2));
        console['log'](_0x54cc04['retro']('📝\x20-\x20Requête\x20enregistrée\x20dans\x20les\x20logs.'));
        return !![];
    } catch (_0x5f77fe) {
        console['error'](_0x54cc04['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27enregistrement\x20de\x20la\x20requête:'), _0x5f77fe);
        return ![];
    }
}
async function _0x59ab82(_0x17acee) {
    const _0x109740 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let _0x301728 = '';
    for (let _0x4cd08a = 0x0; _0x4cd08a < _0x17acee; _0x4cd08a++) {
        const _0x4b6a4d = Math['floor'](Math['random']() * _0x109740['length']);
        _0x301728 += _0x109740['charAt'](_0x4b6a4d);
    }
    return _0x301728;
}
if (_0x3fc827) {
    const _0x58936a = async (_0x203a04, _0x4750c9 = 'order') => {
        try {
            const _0x527d91 = {
                'embeds': [{
                        'title': _0x4750c9 === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                        'color': _0x4750c9 === 'order' ? 0xff00 : 0x99ff,
                        'timestamp': new Date()['toISOString'](),
                        'fields': []
                    }]
            };
            if (_0x4750c9 === 'order') {
                const _0x8c1010 = parseFloat(_0x203a04['quantity']) || 0x0;
                const _0x5248d5 = parseFloat(_0x203a04['nombre_boosts']) || 0x0;
                const _0xdc291a = parseFloat(_0x203a04['type_booster']) || 'N/A';
                const _0x1444ec = parseFloat(_0x203a04['price']) || 0x0;
                const _0x12c41f = (_0x8c1010 * _0x1444ec)['toFixed'](0x2);
                _0x527d91['embeds'][0x0]['fields'] = [
                    {
                        'name': '🆔\x20Invoice\x20ID',
                        'value': String(_0x203a04['invoice_id']),
                        'inline': ![]
                    },
                    {
                        'name': '🏷️\x20Product',
                        'value': _0x203a04['products_name'] ? _0x203a04['products_name'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📧\x20Email',
                        'value': _0x203a04['email'] ? _0x203a04['email'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '👤\x20Server\x20ID',
                        'value': _0x203a04['serveur_id'] ? _0x203a04['serveur_id'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Quantity',
                        'value': String(_0x8c1010),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Number\x20boosts',
                        'value': String(_0x5248d5),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Type\x20boosts',
                        'value': String(_0xdc291a) + 'm',
                        'inline': ![]
                    },
                    {
                        'name': '💰\x20Unit\x20Price',
                        'value': String(_0x1444ec) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💶\x20Total\x20Price',
                        'value': String(_0x12c41f) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💳\x20Gateway',
                        'value': _0x203a04['gateway'] ? _0x203a04['gateway'] : 'N/A',
                        'inline': ![]
                    }
                ];
            } else {
                _0x527d91['embeds'][0x0]['description'] = _0x203a04;
                if (_0x203a04['includes']('Order\x20Delivered')) {
                    _0x527d91['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                    _0x527d91['embeds'][0x0]['color'] = 0xff00;
                } else if (_0x203a04['includes']('Delivery\x20Error')) {
                    _0x527d91['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                    _0x527d91['embeds'][0x0]['color'] = 0xff0000;
                } else if (_0x203a04['includes']('Duplicate\x20Order')) {
                    _0x527d91['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                    _0x527d91['embeds'][0x0]['color'] = 0xffa500;
                } else {
                    _0x527d91['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                    _0x527d91['embeds'][0x0]['color'] = 0xffa500;
                }
            }
            await _0x22c976['send']({ 'embeds': [_0x527d91['embeds'][0x0]] });
        } catch (_0x52ff86) {
            console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x52ff86['response']?.['data'] || _0x52ff86['message']);
        }
    };
    const _0x19c646 = async (_0x962479, _0x53ed2c = 'order') => {
        try {
            const _0x34f60c = {
                'embeds': [{
                        'title': _0x53ed2c === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                        'color': _0x53ed2c === 'order' ? 0xff00 : 0x99ff,
                        'timestamp': new Date()['toISOString'](),
                        'fields': []
                    }]
            };
            if (_0x53ed2c === 'order') {
                const _0x3ebc32 = parseFloat(_0x962479['quantity']) || 0x0;
                const _0x1b1024 = parseFloat(_0x962479['nombre_boosts']) || 0x0;
                const _0x5e05eb = parseFloat(_0x962479['type_booster']) || 'N/A';
                const _0x1c3c12 = parseFloat(_0x962479['price']) || 0x0;
                const _0x4e6ac3 = (_0x3ebc32 * _0x1c3c12)['toFixed'](0x2);
                _0x34f60c['embeds'][0x0]['fields'] = [
                    {
                        'name': '🆔\x20Invoice\x20ID',
                        'value': String(_0x962479['invoice_id']),
                        'inline': ![]
                    },
                    {
                        'name': '🏷️\x20Product',
                        'value': _0x962479['products_name'] ? _0x962479['products_name'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📧\x20Email',
                        'value': _0x962479['email'] ? _0x962479['email'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '👤\x20Server\x20ID',
                        'value': _0x962479['serveur_id'] ? _0x962479['serveur_id'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Quantity',
                        'value': String(_0x3ebc32),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Number',
                        'value': String(_0x1b1024),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Type',
                        'value': String(_0x5e05eb) + 'm',
                        'inline': ![]
                    },
                    {
                        'name': '💰\x20Unit\x20Price',
                        'value': String(_0x1c3c12) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💶\x20Total\x20Price',
                        'value': String(_0x4e6ac3) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💳\x20Gateway',
                        'value': _0x962479['gateway'] ? _0x962479['gateway'] : 'N/A',
                        'inline': ![]
                    }
                ];
            } else {
                _0x34f60c['embeds'][0x0]['description'] = _0x962479;
                if (_0x962479['includes']('Order\x20Delivered')) {
                    _0x34f60c['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                    _0x34f60c['embeds'][0x0]['color'] = 0xff00;
                } else if (_0x962479['includes']('Delivery\x20Error')) {
                    _0x34f60c['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                    _0x34f60c['embeds'][0x0]['color'] = 0xff0000;
                } else if (_0x962479['includes']('Duplicate\x20Order')) {
                    _0x34f60c['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                    _0x34f60c['embeds'][0x0]['color'] = 0xffa500;
                } else {
                    _0x34f60c['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                    _0x34f60c['embeds'][0x0]['color'] = 0xffa500;
                }
            }
            await _0x22c976['send']({ 'embeds': [_0x34f60c['embeds'][0x0]] });
        } catch (_0x2c2f2f) {
            console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x2c2f2f['response']?.['data'] || _0x2c2f2f['message']);
        }
    };
    const _0x598ead = (_0x129bdf, _0x4d5a18, _0x8bf55f, _0x41cdb4 = 0xc8) => {
        if (_0x4d5a18 === 'write') {
            _0x129bdf['writeHead'](_0x41cdb4, { 'Content-Type': 'text/plain' });
            _0x129bdf['end'](_0x8bf55f);
        } else {
            _0x129bdf['writeHead'](_0x41cdb4, { 'Content-Type': 'application/json' });
            _0x129bdf['end'](JSON['stringify'](_0x8bf55f));
        }
    };
    async function _0x439d3d(_0x4551ab = 0x0, _0xbc395a, _0x20e9f5, _0x115a8c, _0x2b0011) {
        const _0x5143b4 = await _0x35bd14['post']('http://pastes.io/api/paste/create', {
            'content': _0xbc395a,
            'status': 0x2,
            'expire': '1W',
            'title': _0x20e9f5 + '-T0k3nN1tr0',
            'password': _0x2b0011
        }, {
            'headers': {
                'Accept': 'application/json',
                'Authorization': 'Bearer\x2040d403ae833e6eec3dbe0fe2f219863d5df1767c51073e2e438e1bf4993711f3'
            }
        });
        if (_0x5143b4['data'] && _0x5143b4['data']['success']) {
            await _0x41b4f6(_0x5143b4['data']['success']['paste_url'] + '\x20password\x20:\x20' + _0x2b0011, _0x115a8c);
            return _0x5143b4['data']['success']['paste_url'];
        } else if (_0x5143b4['data'] && _0x5143b4['data']['error']) {
            console['error']('Erreur\x20API:', _0x5143b4['data']['error']);
            await new Promise(_0x2e97fc => setTimeout(_0x2e97fc, 0xbb8));
            if (_0x4551ab < 0x3) {
                await _0x439d3d(_0x4551ab + 0x1, _0xbc395a, _0x20e9f5);
            } else {
                return 'Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste\x20ratelimite.';
            }
        }
    }
    async function _0x5a7c2a(_0x5eb655, _0x1b1d83, _0x598c63) {
        try {
            let _0x82fdc2 = [];
            _0x82fdc2['push']('Autobuy\x20dev\x20by\x20MrX');
            const _0x13dae7 = '/autobuy/output/';
            let _0x4e4100 = _0x2e8340['join'](__dirname, '..', _0x13dae7, 'link.txt');
            let _0x748f61 = _0x2e8340['join'](__dirname, '..', _0x13dae7, 'tokens_send.txt');
            let _0x328dc4 = await _0x59ab82(0xa);
            const _0x2c70cb = _0x19b177['readFileSync'](_0x1b1d83, 'utf8')['toString']()['split']('\x0a');
            for (let _0x51a8dc = 0x0; _0x51a8dc < Math['min'](_0x598c63, _0x2c70cb['length']); _0x51a8dc++) {
                const _0x2bbcb5 = _0x2c70cb[_0x51a8dc]['trim']();
                if (_0x2bbcb5) {
                    _0x82fdc2['push'](_0x2bbcb5);
                    await new Promise(_0x5786dd => setTimeout(_0x5786dd, 0x64));
                    await _0x8c7837(_0x2bbcb5, _0x1b1d83);
                } else {
                    _0x82fdc2['push'](_0x3b5be9['command']['33']);
                }
            }
            let _0x1214ee = _0x82fdc2['slice'](0x1)['join']('\x0a');
            await _0x41b4f6(_0x1214ee, _0x748f61);
            return await _0x439d3d(0x0, _0x1214ee, _0x328dc4, _0x4e4100, _0x5eb655);
        } catch (_0x5fe360) {
            console['error']('Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste:\x20', _0x5fe360);
            return null;
        }
    }
    const _0x16d098 = async (_0x2a7b07, _0x465275 = 0xc) => {
        try {
            const _0x44a442 = await _0x35bd14['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x30880f + '&machineid=' + _0x2f1627 + '&shopname=' + _0x33a78d + '&mode=CHECK_BOT&guildid=' + _0x2a7b07 + '&clientid=' + _0x399292 + '&botclientsecret=' + _0x518d1a + '&bottoken=' + _0x3b696a, {}, { 'timeout': 0xf4240 });
            const {erreur: _0x5566a3} = _0x44a442['data'];
            return _0x5566a3 !== 'bot';
        } catch (_0x1d4f7d) {
            console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:', _0x1d4f7d);
            return ![];
        }
    };
    const _0x1649c1 = async (_0xa5d3d9, _0x16242c, _0x38adae) => {
        try {
            await _0x63b2b9();
            const _0x41904d = _0xa5d3d9['item'];
            if (!_0x41904d) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
                return _0x598ead(_0x38adae, _0x16242c, _0x3b5be9['command']['106'], 0x190);
            }
            const _0xd8f693 = parseInt(_0x41904d['quantity'], 0xa) || 0x1;
            const _0x51bf70 = _0x41904d['custom_fields']?.[_0xd1a5c8];
            const _0x295f3e = _0x41904d['custom_fields']?.[_0x1dec88] || _0x57a666;
            const _0x3e97ae = _0x41904d['product']?.['name'];
            const _0x441630 = '/stock/';
            let _0xc4d0ad = _0x2e8340['join'](__dirname, '..', _0x441630, 'stock-1m.txt');
            let _0xca3849 = _0x2e8340['join'](__dirname, '..', _0x441630, 'stock-3m.txt');
            let _0x9dd2e6;
            console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20pour\x20le\x20serveur:\x20' + _0x51bf70);
            if (!_0x51bf70 || !_0x3e97ae) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20' + (!_0x51bf70 ? 'serveurID' : 'products_name'));
                return _0x598ead(_0x38adae, _0x16242c, _0x3b5be9['command']['105'], 0x190);
            }
            const _0x22a838 = _0x3e97ae['match'](/\[(\d+)\]/);
            const _0x59b5d6 = _0x3e97ae['match'](/boost (1|3) (Mois|Month|Months|mois)/i);
            if (!_0x22a838 || !_0x59b5d6) {
                await _0x58936a('Delivery\x20Error,\x20invoice_id:\x20' + _0x41904d['invoice_id'], 'log');
                return _0x598ead(_0x38adae, _0x16242c, _0x3b5be9['command']['105'], 0xc8);
            }
            const _0x96a82a = parseInt(_0x22a838[0x1], 0xa);
            const _0x2b735a = _0x96a82a * _0xd8f693;
            const _0x202366 = parseInt(_0x59b5d6[0x1], 0xa);
            const _0x3cc7fc = _0x202366 === 0x3 ? '3m' : '1m';
            if (_0x3cc7fc === '1m') {
                _0x9dd2e6 = _0xc4d0ad;
            } else if (_0x3cc7fc === '3m') {
                _0x9dd2e6 = _0xca3849;
            }
            await _0x58936a({
                'invoice_id': _0x41904d['invoice_id'],
                'serveur_id': _0x51bf70,
                'quantity': _0xd8f693,
                'price': _0x41904d['price'],
                'mode': _0x16242c,
                'products_name': _0x3e97ae,
                'gateway': _0xa5d3d9['gateway'],
                'nombre_boosts': _0x2b735a,
                'type_booster': _0x3cc7fc
            }, 'order');
            let _0x544e79 = _0x19b177['existsSync'](_0x5739b0) ? JSON['parse'](_0x19b177['readFileSync'](_0x5739b0)) : [];
            if (_0x544e79['find'](_0x404583 => _0x404583['invoice_id'] === _0x41904d['invoice_id'])) {
                await _0x58936a('Duplicate\x20Order,\x20invoice_id:\x20' + _0x41904d['invoice_id'], 'log');
                return _0x598ead(_0x38adae, _0x16242c, _0x3b5be9['command']['104'], 0xc8);
            }
            const _0x4f6a5b = {
                'invoice_id': _0x41904d['invoice_id'],
                'email': _0x41904d['email'],
                'amount': _0xd8f693,
                'price': _0x41904d['total_price'],
                'gateway': _0xa5d3d9['gateway'],
                'serveurID': _0x51bf70,
                'status': _0x41904d['status'],
                'custom_fields': _0x41904d['custom_fields'],
                'product_name': _0x3e97ae
            };
            _0x544e79['push'](_0x4f6a5b);
            _0x19b177['writeFileSync'](_0x5739b0, JSON['stringify'](_0x544e79, null, 0x2));
            let _0x3760e0 = 0x0;
            let _0x3061e5 = 0x0;
            let _0x37bd33 = _0x2b735a / 0x2;
            let _0x545e07 = ![];
            let _0x262443 = 0x0;
            const _0x1dc26e = 0x6;
            let _0xc0ef45 = [];
            let _0x39ee2a = '[+]\x20' + _0x33a78d + '\x20initialisés.';
            if (_0xc0ef45['length'] >= _0x1dc26e) {
                _0xc0ef45['pop']();
            }
            _0xc0ef45['unshift'](_0x39ee2a);
            let _0x1d93d2 = await _0x16b8fb(_0x9dd2e6);
            if (_0x1d93d2 === 0x0) {
                _0xc0ef45['unshift'](_0x33a78d + '\x20' + _0x3b5be9['command']['13']);
                const _0x106982 = {
                    'color': 0x99ff,
                    'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x3b5be9['command']['23'] + '**\x20🚀',
                    'description': '🔹\x20Boosts\x20' + _0x3b5be9['command']['22'] + ('\x20:\x20**0/' + _0x2b735a + '**\x0a🔸\x20Boosts\x20') + _0x3b5be9['command']['28'] + ('\x20:\x20**' + _0x2b735a + '/' + _0x2b735a + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x51bf70,
                    'fields': _0xc0ef45['length'] > 0x0 ? [{
                            'name': 'Logs',
                            'value': '```\x0a' + _0xc0ef45['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        }] : [],
                    'image': { 'url': _0x46a0d3 },
                    'timestamp': new Date()['toISOString'](),
                    'footer': { 'text': _0x33a78d + '\x20-\x20' + _0x3b5be9['command']['7'] + '\x20MrX' }
                };
                _0x598ead(_0x38adae, _0x16242c, _0x3b5be9['command']['33'], 0xc8);
                return await _0x146206(_0x106982);
            } else if (_0x2b735a / 0x2 > _0x1d93d2 && _0x1d93d2 !== _0x2b735a / 0x2) {
                _0xc0ef45['unshift'](_0x33a78d + '\x20' + _0x3b5be9['command']['67']);
                const _0x3d632c = {
                    'color': 0x99ff,
                    'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x3b5be9['command']['23'] + '**\x20🚀',
                    'description': '🔹\x20Boosts\x20' + _0x3b5be9['command']['22'] + ('\x20:\x20**0/' + _0x2b735a + '**\x0a🔸\x20Boosts\x20') + _0x3b5be9['command']['28'] + ('\x20:\x20**' + _0x2b735a + '/' + _0x2b735a + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x51bf70,
                    'fields': _0xc0ef45['length'] > 0x0 ? [{
                            'name': 'Logs',
                            'value': '```\x0a' + _0xc0ef45['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        }] : [],
                    'image': { 'url': _0x46a0d3 },
                    'timestamp': new Date()['toISOString'](),
                    'footer': { 'text': _0x33a78d + '\x20-\x20' + _0x3b5be9['command']['7'] + '\x20MrX' }
                };
                _0x598ead(_0x38adae, _0x16242c, _0x3b5be9['command']['33'], 0xc8);
                return await _0x146206(_0x3d632c);
            }
            while (!_0x545e07 && _0x262443 < _0x537f1d) {
                try {
                    _0x545e07 = await _0x16d098(_0x51bf70);
                    if (!_0x545e07) {
                        _0x262443++;
                        const _0x26bdcd = _0x262443 * _0x19cc61;
                        await _0x58936a(_0x3b5be9['command']['97'] + '\x20' + _0x262443 + '/' + _0x537f1d + '\x20' + _0x3b5be9['command']['98'] + '\x20' + _0x26bdcd + '\x20' + _0x3b5be9['command']['99'] + ',\x20invoice_id:\x20' + _0x41904d['invoice_id'] + '.', _0x415852);
                        if (_0x262443 < _0x537f1d) {
                            await new Promise(_0xc8c4f2 => setTimeout(_0xc8c4f2, _0x19cc61 * 0x3c * 0x3e8));
                        }
                    }
                } catch (_0x291e95) {
                    console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:\x20' + _0x291e95['message'] + ',\x20invoice_id:\x20' + _0x41904d['invoice_id'] + '.');
                    await _0x58936a('Delivery\x20Error,\x20invoice_id:\x20' + _0x41904d['invoice_id'], 'log');
                    _0x262443++;
                    if (_0x262443 < _0x537f1d) {
                        await new Promise(_0xdfcd41 => setTimeout(_0xdfcd41, _0x19cc61 * 0x3c * 0x3e8));
                    }
                }
            }
            if (!_0x545e07) {
                return _0x598ead(_0x38adae, _0x16242c, _0x3b5be9['command']['96'], 0xc8);
            }
            const _0x5e928f = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x3b5be9['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x3b5be9['command']['22'] + ('\x20:\x20**0/' + _0x2b735a + '**\x0a🔸\x20Boosts\x20') + _0x3b5be9['command']['28'] + ('\x20:\x20**0/' + _0x2b735a + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x51bf70,
                'fields': _0xc0ef45['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0xc0ef45['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x46a0d3 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x33a78d + '\x20-\x20' + _0x3b5be9['command']['7'] + '\x20MrX' }
            };
            const _0x4f95fa = await _0x146206(_0x5e928f);
            const _0x6cc9e2 = _0x19b177['readFileSync'](_0x9dd2e6)['toString']()['split']('\x0a');
            for (let _0x9a5c6 = 0x0; _0x9a5c6 < _0x2b735a / 0x2; _0x9a5c6++) {
                let _0x1ae169 = 0x0;
                async function _0x4833e5(_0x16a741 = 0x0) {
                    try {
                        const _0x4b2817 = _0x6cc9e2[_0x9a5c6];
                        const _0x126571 = await _0x12351b(_0x4b2817);
                        const _0x1648b8 = await _0x35bd14['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x30880f + '&machineid=' + _0x2f1627 + '&shopname=' + _0x33a78d + '&mode=BOOST&guildid=' + _0x51bf70 + '&bio=' + _0x295f3e + '&clientid=' + _0x399292 + '&botclientsecret=' + _0x518d1a + '&bottoken=' + _0x3b696a + '&tokenboost=' + _0x126571, {}, { 'timeout': 0xf4240 });
                        const {
                            erreur: _0x17665b,
                            success: _0x44f9f8
                        } = _0x1648b8['data'];
                        if (_0xc0ef45['length'] >= _0x1dc26e) {
                            _0xc0ef45['pop']();
                        }
                        if (_0x44f9f8 === !![]) {
                            _0x3760e0++;
                            _0xc0ef45['unshift']('✅\x20-\x20' + _0x3b5be9['command']['81'] + '\x20:\x20' + await _0x4cde25(_0x126571));
                            await _0x8c7837(_0x4b2817, _0x9dd2e6);
                        } else if (_0x44f9f8 === ![]) {
                            if (_0x17665b === 'invalid') {
                                _0x3061e5++;
                                _0xc0ef45['unshift']('❌\x20-\x20' + _0x3b5be9['command']['80'] + '\x20:\x20' + await _0x4cde25(_0x126571));
                                await _0x8c7837(_0x4b2817, _0x9dd2e6);
                            } else if (_0x17665b === 'perm') {
                                _0x3061e5++;
                                _0xc0ef45['unshift']('⛔\x20-\x20' + _0x3b5be9['command']['79'] + '\x20:\x20' + await _0x4cde25(_0x126571));
                                if (_0x16a741 < 0x3) {
                                    _0x16a741++;
                                    _0xc0ef45['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x4cde25(_0x126571));
                                    await _0x4833e5(_0x16a741);
                                }
                            } else if (_0x17665b === 'used') {
                                _0x3061e5++;
                                _0xc0ef45['unshift']('⚠️\x20-\x20' + _0x3b5be9['command']['78'] + '\x20:\x20' + await _0x4cde25(_0x126571));
                                await _0x8c7837(_0x4b2817, _0x9dd2e6);
                            } else {
                                _0xc0ef45['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x4cde25(_0x126571));
                                if (_0x16a741 < 0x3) {
                                    _0x16a741++;
                                    _0xc0ef45['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x4cde25(_0x126571));
                                    await _0x4833e5(_0x16a741);
                                } else {
                                    _0x3061e5++;
                                }
                            }
                        }
                    } catch {
                        if (_0x16a741 < 0x3) {
                            _0x16a741++;
                            _0xc0ef45['unshift']('🔄️\x20-\x20retry');
                            await _0x4833e5(_0x16a741);
                        } else {
                            _0x3061e5++;
                        }
                        _0xc0ef45['unshift']('⚠️\x20-\x20error\x20API');
                    }
                }
                await _0x4833e5(_0x1ae169);
                const _0x2ddaab = {
                    'color': 0x99ff,
                    'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x3b5be9['command']['23'] + '**\x20🚀',
                    'description': '🔹\x20Boosts\x20' + _0x3b5be9['command']['22'] + ('\x20:\x20**' + _0x3760e0 * 0x2 + '/' + _0x2b735a + '**\x0a🔸\x20Boosts\x20') + _0x3b5be9['command']['28'] + ('\x20:\x20**' + _0x3061e5 * 0x2 + '/' + _0x2b735a + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x51bf70,
                    'fields': _0xc0ef45['length'] > 0x0 ? [{
                            'name': 'Logs',
                            'value': '```\x0a' + _0xc0ef45['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        }] : [],
                    'image': { 'url': _0x46a0d3 },
                    'timestamp': new Date()['toISOString'](),
                    'footer': { 'text': _0x33a78d + '\x20-\x20' + _0x3b5be9['command']['7'] + '\x20MrX' }
                };
                await _0xf45378(_0x4f95fa, _0x2ddaab);
            }
            const _0x4bb0e9 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x3b5be9['command']['21'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x3b5be9['command']['22'] + ('\x20:\x20**' + _0x3760e0 * 0x2 + '/' + _0x2b735a + '**\x0a🔸\x20Boosts\x20') + _0x3b5be9['command']['28'] + ('\x20:\x20**' + _0x3061e5 * 0x2 + '/' + _0x2b735a + '**\x0a📝\x20Server\x20id:\x20') + _0x51bf70,
                'fields': _0xc0ef45['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0xc0ef45['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x46a0d3 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x33a78d + '\x20-\x20' + _0x3b5be9['command']['7'] + '\x20MrX' }
            };
            await _0xf45378(_0x4f95fa, _0x4bb0e9);
            if (_0x3760e0 >= _0x37bd33) {
                await _0x58936a('Order\x20Delivered,\x20' + _0x3b5be9['command']['100'] + ('\x20(' + _0x3760e0 * 0x2 + '\x20boosts),\x20invoice_id:\x20' + _0x41904d['invoice_id'] + '.'), 'log');
                return _0x598ead(_0x38adae, _0x16242c, _0x3b5be9['command']['101'], 0xc8);
            } else {
                await _0x58936a('Delivery\x20Error,\x20' + _0x3061e5 * 0x2 + '\x20boosts\x20' + _0x3b5be9['command']['102'] + ',\x20invoice_id:\x20' + _0x41904d['invoice_id'] + '.', 'log');
                return _0x598ead(_0x38adae, _0x16242c, _0x3b5be9['command']['103'], 0xc8);
            }
        } catch (_0x57a9f5) {
            console['error'](_0x57a9f5);
            return _0x598ead(_0x38adae, _0x16242c, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
        }
    };
    const _0x3771d2 = async (_0x397f45, _0x211a03, _0x234b32) => {
        try {
            await _0x63b2b9();
            const _0x588783 = _0x397f45['item'];
            if (!_0x588783) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
                return _0x598ead(_0x234b32, _0x211a03, _0x3b5be9['command']['106'], 0x190);
            }
            const _0x507472 = parseInt(_0x588783['quantity'], 0xa) || 0x1;
            const _0x3e82ee = _0x507472;
            const _0x53844a = _0x588783['product']?.['name'];
            const _0x5a6834 = '/stock/';
            let _0x40b33d = _0x2e8340['join'](__dirname, '..', _0x5a6834, 'stock-1m.txt');
            let _0x41c73b = _0x2e8340['join'](__dirname, '..', _0x5a6834, 'stock-3m.txt');
            let _0x4620ca;
            console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20!');
            if (!_0x53844a) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20products_name');
                return _0x598ead(_0x234b32, _0x211a03, _0x3b5be9['command']['10'], 0x190);
            }
            const _0x4321f9 = _0x53844a['match'](/(token|Token) (\d+) (Mois|Month|Months|mois|An|Year|Years|an)/i) || _0x53844a['match'](/(Nitro|nitro) (Boost|boost|Basic|basic) (\d+) (Mois|Month|Months|mois|An|Year|Years|an)/i);
            if (!_0x4321f9) {
                await _0x19c646('Delivery\x20Error,\x20invoice_id:\x20' + _0x588783['invoice_id'], 'log');
                return _0x598ead(_0x234b32, _0x211a03, _0x3b5be9['command']['119'], 0xc8);
            }
            const _0x34f207 = _0x4321f9[0x1]['toLowerCase']();
            const _0x5c5eee = _0x4321f9[0x2] ? _0x4321f9[0x2]['toLowerCase']() : null;
            const _0x11ad0f = parseInt(_0x4321f9[_0x4321f9['length'] - 0x2], 0xa);
            const _0x34f799 = /(An|Year|Years|an|Ans|ans)/i['test'](_0x4321f9[_0x4321f9['length'] - 0x1]);
            if (_0x34f207 === 'token') {
                _0x4620ca = _0x11ad0f === 0x3 ? _0x41c73b : _0x40b33d;
            } else if (_0x34f207 === 'nitro') {
                if (_0x5c5eee === 'basic') {
                    _0x4620ca = _0x34f799 ? stock_nitro_basic_1y : stock_nitro_basic_1m;
                } else if (_0x5c5eee === 'boost') {
                    _0x4620ca = _0x34f799 ? stock_nitro_boost_1y : stock_nitro_boost_1m;
                }
            }
            await _0x19c646({
                'invoice_id': _0x588783['invoice_id'],
                'quantity': _0x507472,
                'price': _0x588783['price'],
                'mode': _0x211a03,
                'products_name': _0x53844a,
                'gateway': _0x397f45['gateway'],
                'nombre_boosts': _0x507472,
                'type_booster': _0x34f207
            }, 'order');
            let _0x50e7a0 = _0x19b177['existsSync'](_0x5739b0) ? JSON['parse'](_0x19b177['readFileSync'](_0x5739b0)) : [];
            if (_0x50e7a0['find'](_0x5849d7 => _0x5849d7['invoice_id'] === _0x588783['invoice_id'])) {
                await _0x19c646('Duplicate\x20Order,\x20invoice_id:\x20' + _0x588783['invoice_id'], 'log');
                return _0x598ead(_0x234b32, _0x211a03, _0x3b5be9['command']['104'], 0xc8);
            }
            const _0x817db8 = {
                'invoice_id': _0x588783['invoice_id'],
                'email': _0x588783['email'],
                'amount': _0x507472,
                'price': _0x588783['total_price'],
                'gateway': _0x397f45['gateway'],
                'status': _0x588783['status'],
                'custom_fields': _0x588783['custom_fields'],
                'product_name': _0x53844a
            };
            _0x50e7a0['push'](_0x817db8);
            _0x19b177['writeFileSync'](_0x5739b0, JSON['stringify'](_0x50e7a0, null, 0x2));
            let _0x2d11f1 = await _0x16b8fb(_0x4620ca);
            if (_0x2d11f1 === 0x0) {
                return _0x598ead(_0x234b32, _0x211a03, _0x3b5be9['command']['33'], 0xc8);
            } else if (_0x3e82ee > _0x2d11f1 && _0x2d11f1 !== _0x3e82ee) {
                return _0x598ead(_0x234b32, _0x211a03, _0x3b5be9['command']['33'], 0xc8);
            }
            const _0x27133f = await _0x59ab82(0xf);
            let _0x4bfb74 = await _0x5a7c2a(_0x27133f, _0x4620ca, _0x3e82ee);
            if (_0x4bfb74) {
                await _0x19c646('Order\x20Delivered,\x20' + _0x3b5be9['command']['120'] + ('\x20(' + _0x3e82ee + '\x20' + _0x34f207 + '),\x20invoice_id:\x20' + _0x588783['invoice_id'] + '.'), 'log');
                return _0x598ead(_0x234b32, _0x211a03, _0x4bfb74 + '\x20-\x20Password:\x20' + _0x27133f, 0xc8);
            }
        } catch (_0x18ccc0) {
            console['error'](_0x18ccc0);
            return _0x598ead(_0x234b32, _0x211a03, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
        }
    };
    const _0x1f2eda = (_0x26bbd2, _0x438704) => {
        if (!_0x19b177['existsSync'](_0x5739b0)) {
            _0x26bbd2['writeHead'](0x194, { 'Content-Type': 'text/html' });
            _0x26bbd2['end']('<h1>Aucune\x20commande\x20trouvée</h1>');
            return;
        }
        const _0x2692fe = JSON['parse'](_0x19b177['readFileSync'](_0x5739b0));
        const _0x1d4631 = _0x24ae1a || 0x64;
        const _0x51ee68 = parseInt(_0x438704) || 0x1;
        const _0x82eaaa = _0x2692fe['length'];
        const _0x438b2e = Math['ceil'](_0x82eaaa / _0x1d4631);
        const _0x443f60 = (_0x51ee68 - 0x1) * _0x1d4631;
        const _0x46e784 = _0x443f60 + _0x1d4631;
        const _0x29c6ce = _0x2692fe['slice'](_0x443f60, _0x46e784);
        const _0x51bcaf = _0x2692fe['filter'](_0x4ad1e0 => _0x4ad1e0['status'] === 'completed')['length'];
        const _0x388470 = _0x2692fe['reduce']((_0x4a2fee, _0x1a8d51) => {
            const _0x466af1 = parseInt(_0x1a8d51['amount'], 0xa);
            const _0x438973 = _0x466af1 * 0xe;
            return _0x4a2fee + _0x438973;
        }, 0x0);
        const _0x2baee9 = _0x2692fe['reduce']((_0x21ea7b, _0xd11689) => {
            const _0x287d42 = parseFloat(_0xd11689['price']);
            return _0x21ea7b + (isNaN(_0x287d42) ? 0x0 : _0x287d42);
        }, 0x0);
        _0x26bbd2['writeHead'](0xc8, { 'Content-Type': 'text/html' });
        _0x26bbd2['end']('<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html\x20lang=\x22fr\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>Dashboard\x20des\x20Commandes</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20{\x20box-sizing:\x20border-box;\x20margin:\x200;\x20padding:\x200;\x20font-family:\x20\x27Inter\x27,\x20sans-serif;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x20background-color:\x20#111827;\x20color:\x20#e5e7eb;\x20display:\x20flex;\x20justify-content:\x20center;\x20padding:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.dashboard\x20{\x20width:\x20100%;\x20max-width:\x201200px;\x20padding:\x2020px;\x20background:\x20#1f2937;\x20border-radius:\x2010px;\x20box-shadow:\x200\x204px\x2010px\x20rgba(0,\x200,\x200,\x200.3);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20img\x20{\x20width:\x2080px;\x20margin-right:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20color:\x20#60a5fa;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20{\x20text-align:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.8rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201.2rem;\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-container\x20{\x20overflow-x:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x20width:\x20100%;\x20border-collapse:\x20collapse;\x20background-color:\x20#374151;\x20border-radius:\x2010px;\x20overflow:\x20hidden;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2012px;\x20text-align:\x20left;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th\x20{\x20background-color:\x20#2563eb;\x20color:\x20white;\x20text-transform:\x20uppercase;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:nth-child(even)\x20{\x20background-color:\x20#1f2937;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:hover\x20{\x20background-color:\x20#334155;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20{\x20text-align:\x20center;\x20margin-top:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a\x20{\x20margin:\x200\x205px;\x20padding:\x208px\x2015px;\x20background-color:\x20#2563eb;\x20color:\x20white;\x20border-radius:\x205px;\x20text-decoration:\x20none;\x20transition:\x200.3s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a:hover\x20{\x20background-color:\x20#1e40af;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20footer\x20{\x20text-align:\x20center;\x20margin-top:\x2030px;\x20font-size:\x200.9rem;\x20opacity:\x200.7;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2010px;\x20font-size:\x2014px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.5rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dashboard\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://media.bloumechat.com/media/PFq3HUI6Es.png\x22\x20alt=\x22Logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>InfinityBoost</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Dashboard\x20des\x20Commandes</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Total\x20Gagné\x20:\x20<span\x20id=\x22totalEarned\x22>' + _0x2baee9['toFixed'](0x2) + '€</span>\x20|\x20Total\x20Boosts\x20:\x20<span\x20id=\x22totalBoosts\x22>' + _0x388470 + '</span>\x20|\x20Total\x20Commandes\x20:\x20<span\x20id=\x22totalCompletedOrders\x22>' + _0x51bcaf + '</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Invoice\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Email</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Prix\x20(€)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Status</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Gateway</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Serveur\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x29c6ce['map'](_0x486df9 => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x486df9['invoice_id'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x486df9['email'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + parseFloat(_0x486df9['price'])['toFixed'](0x2) + '€</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x486df9['status'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x486df9['amount'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x486df9['gateway'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x486df9['serveurID'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>')['join']('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pagination\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x51ee68 > 0x1 ? '<a\x20href=\x22/orders?page=' + (_0x51ee68 - 0x1) + '\x22>&laquo;\x20Précédent</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Page\x20' + _0x51ee68 + '\x20/\x20' + _0x438b2e + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x51ee68 < _0x438b2e ? '<a\x20href=\x22/orders?page=' + (_0x51ee68 + 0x1) + '\x22>Suivant\x20&raquo;</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>&copy;\x202024\x20InfinityBoost.\x20Tous\x20droits\x20réservés.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a');
    };
    const _0x5be0a3 = _0x1a1771['createServer'](async (_0x3f7e35, _0x45cff7) => {
        console['log']('[' + new Date()['toISOString']() + ']\x20Nouvelle\x20requête\x20reçue:\x20' + _0x3f7e35['method'] + '\x20' + _0x3f7e35['url']);
        if (_0x3f7e35['method'] === 'POST') {
            let _0x3ea2f4 = '';
            _0x3f7e35['on']('data', _0x4b8475 => {
                _0x3ea2f4 += _0x4b8475['toString']();
            });
            _0x3f7e35['on']('end', async () => {
                try {
                    const _0x1f0345 = JSON['parse'](_0x3ea2f4);
                    const _0x56fd9d = 'json';
                    await _0x599181(_0x3f7e35, _0x1f0345);
                    const _0x170c29 = _0x3b1450['parse'](_0x3f7e35['url'], !![]);
                    const _0x59799 = _0x170c29['pathname'];
                    if (_0x1f0345['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC' && _0x59799 === '/booster') {
                        console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                        await _0x1649c1(_0x1f0345, _0x56fd9d, _0x45cff7);
                    } else if (_0x1f0345['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC' && _0x59799 === '/send') {
                        console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                        await _0x3771d2(_0x1f0345, _0x56fd9d, _0x45cff7);
                    } else {
                        console['log']('[' + new Date()['toISOString']() + ']\x20Event\x20non\x20supporté:', _0x1f0345['event']);
                        _0x598ead(_0x45cff7, _0x56fd9d, 'Event\x20non\x20supporté', 0x190);
                    }
                } catch (_0x54cf69) {
                    console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20parsing\x20JSON:', _0x54cf69);
                    _0x598ead(_0x45cff7, 'json', 'Erreur\x20parsing\x20JSON', 0x190);
                }
            });
        } else if (_0x3f7e35['method'] === 'GET') {
            try {
                const _0x54c0c6 = _0x3b1450['parse'](_0x3f7e35['url'], !![]);
                const _0x2c89a0 = _0x54c0c6['query'];
                const _0x52adb8 = _0x2c89a0['page'] || '1';
                console['log']('[' + new Date()['toISOString']() + ']\x20Requête\x20GET\x20reçue\x20pour\x20' + _0x54c0c6['pathname'] + ',\x20params:', _0x2c89a0);
                if (_0x54c0c6['pathname'] === '/orders') {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20requête\x20/orders,\x20page:', _0x52adb8);
                    _0x1f2eda(_0x45cff7, _0x52adb8);
                } else {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Route\x20non\x20trouvée:', _0x54c0c6['pathname']);
                    _0x598ead(_0x45cff7, 'json', 'Route\x20non\x20trouvée', 0x194);
                }
            } catch (_0xeda1fb) {
                console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20du\x20traitement\x20de\x20la\x20requête\x20GET:', _0xeda1fb);
                _0x598ead(_0x45cff7, 'json', {
                    'error': 'Erreur\x20interne\x20du\x20serveur',
                    'details': _0xeda1fb['message']
                }, 0x1f4);
            }
        } else {
            console['log']('[' + new Date()['toISOString']() + ']\x20Méthode\x20non\x20supportée:', _0x3f7e35['method']);
            _0x598ead(_0x45cff7, 'json', 'Méthode\x20non\x20supportée', 0x195);
        }
    });
    _0x5be0a3['listen'](_0x51c79d, () => {
        console['log']('[' + new Date()['toISOString']() + ']\x20Serveur\x20démarré\x20sur\x20http://' + _0x1c0227 + ':' + _0x51c79d);
    });
} else {
    console['log']('[' + new Date()['toISOString']() + ']\x20Le\x20l\x27autobuy\x20est\x20déactivé,\x20il\x20sera\x20pas\x20lancé.');
}

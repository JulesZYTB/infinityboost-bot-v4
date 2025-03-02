(function (_0x12695f, _0x1e3c3f) {
    const _0x50d182 = _0x99c8;
    const _0x3ae43a = _0x12695f();
    while (!![]) {
        try {
            const _0x4352ff = parseInt(_0x50d182(0x189)) / 0x1 + parseInt(_0x50d182(0x187)) / 0x2 + parseInt(_0x50d182(0x18c)) / 0x3 + -parseInt(_0x50d182(0x185)) / 0x4 + parseInt(_0x50d182(0x188)) / 0x5 * (-parseInt(_0x50d182(0x18b)) / 0x6) + parseInt(_0x50d182(0x18a)) / 0x7 + -parseInt(_0x50d182(0x186)) / 0x8;
            if (_0x4352ff === _0x1e3c3f) {
                break;
            } else {
                _0x3ae43a['push'](_0x3ae43a['shift']());
            }
        } catch (_0x59b5a5) {
            _0x3ae43a['push'](_0x3ae43a['shift']());
        }
    }
}(_0x5215, 0x1c273));
const _0x2aa21f = require('http');
const _0x5b0d25 = require('url');
const _0x5c1c9d = require('axios');
const _0xbe006b = require('fs');
const _0x27cc66 = require('path');
const _0x5717de = require('os');
const _0x1d59d2 = require('gradient-string');
const _0x4f403d = './commandes.json';
const _0x2fc545 = require('../config.json');
const {performOperation: _0x4d6481} = require('../required/performOp');
const {WebhookClient: _0x372293} = require('discord.js');
const _0x24de5c = require('line-by-line');
let _0x266762 = _0x2fc545['service']['name_shop'];
let _0x44ac75 = _0x2fc545['service']['banner'];
let _0x1f2349 = _0x2fc545['apikey'];
let _0x178e35 = _0x2fc545['autobuy']['port'];
let _0x420fe2 = _0x2fc545['autobuy']['host'];
function _0x5215() {
    const _0x230008 = [
        '83452ofPYHW',
        '452568BQWCOs',
        '290558HYuwZv',
        '202255QUBYhu',
        '17523QrQHzF',
        '345842vqsssU',
        '24CRgjWi',
        '427035TqBaUj'
    ];
    _0x5215 = function () {
        return _0x230008;
    };
    return _0x5215();
}
let _0x5e54f5 = _0x2fc545['autobuy']['bio'];
let _0x46d7e6 = _0x2fc545['autobuy']['shop_id_sellauth'];
function _0x99c8(_0x36327f, _0x405c03) {
    const _0x52154d = _0x5215();
    _0x99c8 = function (_0x99c85, _0x40d50c) {
        _0x99c85 = _0x99c85 - 0x185;
        let _0x3596a2 = _0x52154d[_0x99c85];
        return _0x3596a2;
    };
    return _0x99c8(_0x36327f, _0x405c03);
}
let _0x3a45ea = _0x2fc545['autobuy']['autobuy_enabled'];
let _0x32d7c9 = _0x2fc545['autobuy']['apikey_sellauth'];
let _0x15ad6a = _0x2fc545['autobuy']['discord_webhook_url_command_log'];
let _0x3a8859 = _0x2fc545['autobuy']['discord_webhook_url_console'];
let _0x3d1da6 = _0x2fc545['autobuy']['orders_command_for_page'];
let _0x52b6c9 = _0x2fc545['autobuy']['guildid_variable_Custom_Field'] || 'Serveur\x20ID';
let _0x66c1ad = _0x2fc545['autobuy']['bio_variable_Custom_Field'] || 'Bio';
let _0x12c067 = _0x2fc545['autobuy']['check_bot'];
let _0x1b1a7a = _0x2fc545['autobuy']['time_check_bot'];
let _0x1e8d4f;
let _0x33d9a8;
if (_0x3a45ea) {
    _0x1e8d4f = new _0x372293({ 'url': _0x3a8859 });
    _0x33d9a8 = new _0x372293({ 'url': _0x15ad6a });
}
const _0x192115 = JSON['parse'](_0xbe006b['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x4a713b = _0x2fc545['service']['langue_shop'];
const _0x1bda6e = _0x192115[_0x4a713b];
let _0x53590d = _0x2fc545['bot']['clientid'];
let _0x14d022 = _0x2fc545['bot']['token'];
let _0x13dfb8 = _0x2fc545['bot']['clientsecret'];
let _0x1f2e60;
async function _0x27bc44() {
    return new Promise((_0x50e348, _0x3a84e2) => {
        _0x4d6481((_0xe03ab9, _0x4cda1e) => {
            if (_0xe03ab9) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x3a84e2(_0xe03ab9);
            } else {
                _0x1f2e60 = _0x4cda1e;
                _0x50e348(_0x1f2e60);
            }
        });
    });
}
async function _0x28f8be(_0x4dac25) {
    const _0x155134 = _0x4dac25['split'](':');
    if (_0x155134['length'] === 0x3) {
        return _0x155134[0x2];
    } else if (_0x155134['length'] === 0x1) {
        return _0x4dac25;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x4dac25);
        return _0x4dac25;
    }
}
async function _0x15d278(_0x4f1d2b) {
    if (_0x4f1d2b['length'] <= 0x6) {
        return _0x4f1d2b;
    }
    const _0x143b7d = _0x4f1d2b['slice'](0x0, 0x14);
    const _0x2c5534 = _0x4f1d2b['slice'](-0xa);
    const _0x2cf105 = _0x4f1d2b['length'] - _0x143b7d['length'] - _0x2c5534['length'];
    const _0x49fc37 = '' + _0x143b7d + '*'['repeat'](_0x2cf105 - 0x46) + _0x2c5534;
    return _0x49fc37;
}
async function _0x3d95f7(_0x4d8751) {
    if (_0x4d8751['length'] <= 0x6) {
        return _0x4d8751;
    }
    const _0x3a11f8 = _0x4d8751['slice'](0x0, 0x6);
    const _0x226b86 = _0x4d8751['slice'](-0xc);
    const _0x359cef = _0x4d8751['length'] - _0x3a11f8['length'] - _0x226b86['length'];
    const _0x1109fe = '' + _0x3a11f8 + '*'['repeat'](_0x359cef - 0x2d) + _0x226b86;
    return _0x1109fe;
}
async function _0x56c654(_0xffe7f5, _0x24a3cc) {
    let _0x41f7ab = await _0x15d278(_0xffe7f5);
    let _0x5851b2 = await _0x216a39(_0x24a3cc);
    let _0x52558c = '';
    if (!_0xbe006b['existsSync'](_0x24a3cc)) {
        console['log'](_0x1d59d2['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x10dea4 = [];
    const _0x3eec06 = new _0x24de5c(_0x24a3cc);
    _0x3eec06['on']('error', _0x2b59c3 => {
        console['error'](_0x1d59d2['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0x2b59c3));
    });
    _0x3eec06['on']('line', _0x5e2c6d => {
        const _0x17e036 = _0x5e2c6d['trim']();
        if (!_0x17e036['includes'](_0xffe7f5['trim']())) {
            _0x10dea4['push'](_0x17e036);
        }
    });
    _0x3eec06['on']('end', async () => {
        if (_0x10dea4['length'] === 0x0 && _0x5851b2 !== 0x1) {
            console['log'](_0x1d59d2['retro']('⛔\x20-\x20Le\x20token\x20' + _0x41f7ab + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x5851b2 !== 0x1) {
            _0x52558c = _0x10dea4['join'](_0x5717de['EOL']);
        } else {
            _0x52558c = '';
        }
        _0xbe006b['writeFile'](_0x24a3cc, _0x52558c, _0x4c6fba => {
            if (_0x4c6fba) {
                console['error'](_0x1d59d2['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x4c6fba));
                return;
            }
            console['log'](_0x1d59d2['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x41f7ab + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x216a39(_0x408030) {
    try {
        const _0x4987d4 = _0xbe006b['readFileSync'](_0x408030, 'utf-8');
        const _0x197586 = _0x4987d4['split']('\x0a');
        const _0x1a0260 = _0x197586['filter'](_0x4dfacd => _0x4dfacd['trim']()['length'] > 0x0);
        return _0x1a0260['length'];
    } catch (_0x48cd10) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x48cd10);
        return 0x0;
    }
}
async function _0x3fd8d5(_0x2d4d79) {
    try {
        const _0x354c1f = await _0x1e8d4f['send']({ 'embeds': [_0x2d4d79] });
        return _0x354c1f['id'];
    } catch (_0x279243) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20message:', _0x279243['response']?.['data'] || _0x279243['message']);
        throw _0x279243;
    }
}
async function _0x5978b4(_0x53031f, _0x39ac99) {
    try {
        await _0x1e8d4f['editMessage'](_0x53031f, { 'embeds': [_0x39ac99] });
    } catch (_0x128db5) {
        console['error']('Error\x20editing\x20Discord\x20webhook\x20message:', _0x128db5['response']?.['data'] || _0x128db5['message']);
        throw _0x128db5;
    }
}
function _0x4df7ac(_0xe923a, _0x3d7c5c) {
    const _0x4bf8ce = _0xbe006b['readFileSync'](_0xe923a, 'utf8');
    let _0x49e66a = _0x4bf8ce['split']('\x0a');
    const _0x16b546 = _0x49e66a['splice'](0x0, _0x3d7c5c);
    _0x49e66a = _0x49e66a['filter'](_0x1b58ab => _0x1b58ab['trim']() !== '');
    _0xbe006b['writeFileSync'](_0xe923a, _0x49e66a['join']('\x0a'));
    return _0x16b546;
}
async function _0x4a09d9(_0x4638ad) {
    const _0x230fda = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let _0x11f146 = '';
    for (let _0xe2dafe = 0x0; _0xe2dafe < _0x4638ad; _0xe2dafe++) {
        const _0x2c9648 = Math['floor'](Math['random']() * _0x230fda['length']);
        _0x11f146 += _0x230fda['charAt'](_0x2c9648);
    }
    return _0x11f146;
}
if (_0x3a45ea) {
    const _0x16908b = async (_0x39f870, _0x42e368 = 'order') => {
        try {
            const _0x31fa19 = {
                'embeds': [{
                        'title': _0x42e368 === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                        'color': _0x42e368 === 'order' ? 0xff00 : 0x99ff,
                        'timestamp': new Date()['toISOString'](),
                        'fields': []
                    }]
            };
            if (_0x42e368 === 'order') {
                const _0x173fcb = parseFloat(_0x39f870['quantity']) || 0x0;
                const _0x1ee8b0 = parseFloat(_0x39f870['nombre_boosts']) || 0x0;
                const _0x34dedd = parseFloat(_0x39f870['type_booster']) || 'N/A';
                const _0x274e4a = parseFloat(_0x39f870['price']) || 0x0;
                const _0x5d3c78 = (_0x173fcb * _0x274e4a)['toFixed'](0x2);
                _0x31fa19['embeds'][0x0]['fields'] = [
                    {
                        'name': '🆔\x20Invoice\x20ID',
                        'value': String(_0x39f870['invoice_id']),
                        'inline': ![]
                    },
                    {
                        'name': '🏷️\x20Product',
                        'value': _0x39f870['products_name'] ? _0x39f870['products_name'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📧\x20Email',
                        'value': _0x39f870['email'] ? _0x39f870['email'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '👤\x20Server\x20ID',
                        'value': _0x39f870['serveur_id'] ? _0x39f870['serveur_id'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Quantity',
                        'value': String(_0x173fcb),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Number\x20boosts',
                        'value': String(_0x1ee8b0),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Type\x20boosts',
                        'value': String(_0x34dedd) + 'm',
                        'inline': ![]
                    },
                    {
                        'name': '💰\x20Unit\x20Price',
                        'value': String(_0x274e4a) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💶\x20Total\x20Price',
                        'value': String(_0x5d3c78) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💳\x20Gateway',
                        'value': _0x39f870['gateway'] ? _0x39f870['gateway'] : 'N/A',
                        'inline': ![]
                    }
                ];
            } else {
                _0x31fa19['embeds'][0x0]['description'] = _0x39f870;
                if (_0x39f870['includes']('Order\x20Delivered')) {
                    _0x31fa19['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                    _0x31fa19['embeds'][0x0]['color'] = 0xff00;
                } else if (_0x39f870['includes']('Delivery\x20Error')) {
                    _0x31fa19['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                    _0x31fa19['embeds'][0x0]['color'] = 0xff0000;
                } else if (_0x39f870['includes']('Duplicate\x20Order')) {
                    _0x31fa19['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                    _0x31fa19['embeds'][0x0]['color'] = 0xffa500;
                } else {
                    _0x31fa19['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                    _0x31fa19['embeds'][0x0]['color'] = 0xffa500;
                }
            }
            await _0x33d9a8['send']({ 'embeds': [_0x31fa19['embeds'][0x0]] });
        } catch (_0x20b477) {
            console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x20b477['response']?.['data'] || _0x20b477['message']);
        }
    };
    const _0x2e3d51 = async (_0x3f1865, _0x5622e9 = 'order') => {
        try {
            const _0x41203b = {
                'embeds': [{
                        'title': _0x5622e9 === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                        'color': _0x5622e9 === 'order' ? 0xff00 : 0x99ff,
                        'timestamp': new Date()['toISOString'](),
                        'fields': []
                    }]
            };
            if (_0x5622e9 === 'order') {
                const _0x51f462 = parseFloat(_0x3f1865['quantity']) || 0x0;
                const _0x573d1d = parseFloat(_0x3f1865['nombre_boosts']) || 0x0;
                const _0x43e4c5 = parseFloat(_0x3f1865['type_booster']) || 'N/A';
                const _0x27b238 = parseFloat(_0x3f1865['price']) || 0x0;
                const _0x35dd9b = (_0x51f462 * _0x27b238)['toFixed'](0x2);
                _0x41203b['embeds'][0x0]['fields'] = [
                    {
                        'name': '🆔\x20Invoice\x20ID',
                        'value': String(_0x3f1865['invoice_id']),
                        'inline': ![]
                    },
                    {
                        'name': '🏷️\x20Product',
                        'value': _0x3f1865['products_name'] ? _0x3f1865['products_name'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📧\x20Email',
                        'value': _0x3f1865['email'] ? _0x3f1865['email'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '👤\x20Server\x20ID',
                        'value': _0x3f1865['serveur_id'] ? _0x3f1865['serveur_id'] : 'N/A',
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Quantity',
                        'value': String(_0x51f462),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Number\x20tokens',
                        'value': String(_0x573d1d),
                        'inline': ![]
                    },
                    {
                        'name': '📦\x20Type\x20tokens',
                        'value': String(_0x43e4c5) + 'm',
                        'inline': ![]
                    },
                    {
                        'name': '💰\x20Unit\x20Price',
                        'value': String(_0x27b238) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💶\x20Total\x20Price',
                        'value': String(_0x35dd9b) + '€',
                        'inline': ![]
                    },
                    {
                        'name': '💳\x20Gateway',
                        'value': _0x3f1865['gateway'] ? _0x3f1865['gateway'] : 'N/A',
                        'inline': ![]
                    }
                ];
            } else {
                _0x41203b['embeds'][0x0]['description'] = _0x3f1865;
                if (_0x3f1865['includes']('Order\x20Delivered')) {
                    _0x41203b['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                    _0x41203b['embeds'][0x0]['color'] = 0xff00;
                } else if (_0x3f1865['includes']('Delivery\x20Error')) {
                    _0x41203b['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                    _0x41203b['embeds'][0x0]['color'] = 0xff0000;
                } else if (_0x3f1865['includes']('Duplicate\x20Order')) {
                    _0x41203b['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                    _0x41203b['embeds'][0x0]['color'] = 0xffa500;
                } else {
                    _0x41203b['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                    _0x41203b['embeds'][0x0]['color'] = 0xffa500;
                }
            }
            await _0x33d9a8['send']({ 'embeds': [_0x41203b['embeds'][0x0]] });
        } catch (_0x58b244) {
            console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x58b244['response']?.['data'] || _0x58b244['message']);
        }
    };
    const _0x166403 = (_0x53a881, _0x3cc91f, _0x663c0e, _0x176ed1 = 0xc8) => {
        if (_0x3cc91f === 'write') {
            _0x53a881['writeHead'](_0x176ed1, { 'Content-Type': 'text/plain' });
            _0x53a881['end'](_0x663c0e);
        } else {
            _0x53a881['writeHead'](_0x176ed1, { 'Content-Type': 'application/json' });
            _0x53a881['end'](JSON['stringify'](_0x663c0e));
        }
    };
    async function _0x1bb691(_0x3cf79b, _0xb5ba21, _0xb0a452, _0x20261f = 0x0) {
        try {
            let _0x222292 = await _0x4a09d9(0xa);
            let _0x4382e7 = _0x4df7ac(_0xb5ba21, _0xb0a452);
            let _0x513cfe = _0x4382e7['map'](_0x3a066c => _0x3a066c['replace'](/['\[\]]/g, ''));
            let _0x1e4a0d = _0x513cfe['join']('\x0a');
            const _0x1c59d3 = await _0x5c1c9d['post']('http://pastes.io/api/paste/create', {
                'content': _0x1e4a0d,
                'status': 0x2,
                'expire': '1W',
                'title': _0x222292 + '-T0k3nN1tr0',
                'password': _0x3cf79b
            }, {
                'headers': {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer\x2040d403ae833e6eec3dbe0fe2f219863d5df1767c51073e2e438e1bf4993711f3'
                }
            });
            if (_0x1c59d3['data']) {
                if (_0x1c59d3['data']['success']) {
                    return _0x1c59d3['data']['success']['paste_url'];
                } else if (_0x1c59d3['data']['error']) {
                    if (_0x20261f < 0x3) {
                        await new Promise(_0x484891 => setTimeout(_0x484891, 0xbb8));
                        return await _0x1bb691(_0x3cf79b, _0x20261f + 0x1);
                    } else {
                        return 'Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste.';
                    }
                }
            }
        } catch (_0x5dedf7) {
            console['error']('Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20paste:\x20', _0x5dedf7);
            return null;
        }
    }
    const _0x10fd90 = async (_0x393f44, _0x108c1f = 0xc) => {
        try {
            const _0x30d1d0 = await _0x5c1c9d['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x1f2349 + '&machineid=' + _0x1f2e60 + '&shopname=' + _0x266762 + '&mode=CHECK_BOT&guildid=' + _0x393f44 + '&clientid=' + _0x53590d + '&botclientsecret=' + _0x13dfb8 + '&bottoken=' + _0x14d022, {}, { 'timeout': 0xf4240 });
            const {erreur: _0x4b1569} = _0x30d1d0['data'];
            return _0x4b1569 !== 'bot';
        } catch (_0x181ac2) {
            console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:', _0x181ac2);
            return ![];
        }
    };
    const _0x47a958 = async (_0x38cf38, _0x245fc7, _0x3ad43b) => {
        try {
            await _0x27bc44();
            const _0x396ded = _0x38cf38['item'];
            if (!_0x396ded) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
                return _0x166403(_0x3ad43b, _0x245fc7, _0x1bda6e['command']['106'], 0x190);
            }
            const _0x29ef07 = parseInt(_0x396ded['quantity'], 0xa) || 0x1;
            const _0x5ab276 = _0x396ded['custom_fields']?.[_0x52b6c9];
            const _0x2a1ab1 = _0x396ded['custom_fields']?.[_0x66c1ad] || _0x5e54f5;
            const _0x3cedc1 = _0x396ded['product']?.['name'];
            const _0x5062e3 = '/stock/';
            let _0x4ee8ea = _0x27cc66['join'](__dirname, '..', _0x5062e3, 'stock-1m.txt');
            let _0x5a6943 = _0x27cc66['join'](__dirname, '..', _0x5062e3, 'stock-3m.txt');
            let _0x3739f5;
            console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20pour\x20le\x20serveur:\x20' + _0x5ab276);
            if (!_0x5ab276 || !_0x3cedc1) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20' + (!_0x5ab276 ? 'serveurID' : 'products_name'));
                return _0x166403(_0x3ad43b, _0x245fc7, _0x1bda6e['command']['105'], 0x190);
            }
            const _0x5b6761 = _0x3cedc1['match'](/\[(\d+)\]/);
            const _0x5ae0f7 = _0x3cedc1['match'](/boost (1|3) (Mois|Month|Months|mois)/i);
            if (!_0x5b6761 || !_0x5ae0f7) {
                await _0x16908b('Delivery\x20Error,\x20invoice_id:\x20' + _0x396ded['invoice_id'], 'log');
                return _0x166403(_0x3ad43b, _0x245fc7, _0x1bda6e['command']['105'], 0xc8);
            }
            const _0x169dcd = parseInt(_0x5b6761[0x1], 0xa);
            const _0x5dcec3 = _0x169dcd * _0x29ef07;
            const _0xbdf6f0 = parseInt(_0x5ae0f7[0x1], 0xa);
            const _0x157429 = _0xbdf6f0 === 0x3 ? '3m' : '1m';
            if (_0x157429 === '1m') {
                _0x3739f5 = _0x4ee8ea;
            } else if (_0x157429 === '3m') {
                _0x3739f5 = _0x5a6943;
            }
            await _0x16908b({
                'invoice_id': _0x396ded['invoice_id'],
                'serveur_id': _0x5ab276,
                'quantity': _0x29ef07,
                'price': _0x396ded['price'],
                'mode': _0x245fc7,
                'products_name': _0x3cedc1,
                'gateway': _0x38cf38['gateway'],
                'nombre_boosts': _0x5dcec3,
                'type_booster': _0x157429
            }, 'order');
            let _0x10b60c = _0xbe006b['existsSync'](_0x4f403d) ? JSON['parse'](_0xbe006b['readFileSync'](_0x4f403d)) : [];
            if (_0x10b60c['find'](_0x1185c7 => _0x1185c7['invoice_id'] === _0x396ded['invoice_id'])) {
                await _0x16908b('Duplicate\x20Order,\x20invoice_id:\x20' + _0x396ded['invoice_id'], 'log');
                return _0x166403(_0x3ad43b, _0x245fc7, _0x1bda6e['command']['104'], 0xc8);
            }
            const _0xe804e4 = {
                'invoice_id': _0x396ded['invoice_id'],
                'email': _0x396ded['email'],
                'amount': _0x29ef07,
                'price': _0x396ded['total_price'],
                'gateway': _0x38cf38['gateway'],
                'serveurID': _0x5ab276,
                'status': _0x396ded['status'],
                'custom_fields': _0x396ded['custom_fields'],
                'product_name': _0x3cedc1
            };
            _0x10b60c['push'](_0xe804e4);
            _0xbe006b['writeFileSync'](_0x4f403d, JSON['stringify'](_0x10b60c, null, 0x2));
            let _0x5dd33e = 0x0;
            let _0xf2eb0e = 0x0;
            let _0x7bfc21 = _0x5dcec3 / 0x2;
            let _0x380b7f = ![];
            let _0x334e83 = 0x0;
            const _0x290052 = 0x6;
            let _0x326151 = [];
            let _0x25db6a = '[+]\x20' + _0x266762 + '\x20initialisés.';
            if (_0x326151['length'] >= _0x290052) {
                _0x326151['pop']();
            }
            _0x326151['unshift'](_0x25db6a);
            let _0x279c66 = await _0x216a39(_0x3739f5);
            if (_0x279c66 === 0x0) {
                _0x326151['unshift'](_0x266762 + '\x20' + _0x1bda6e['command']['13']);
                const _0x1fd4ad = {
                    'color': 0x99ff,
                    'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1bda6e['command']['23'] + '**\x20🚀',
                    'description': '🔹\x20Boosts\x20' + _0x1bda6e['command']['22'] + ('\x20:\x20**0/' + _0x5dcec3 + '**\x0a🔸\x20Boosts\x20') + _0x1bda6e['command']['28'] + ('\x20:\x20**' + _0x5dcec3 + '/' + _0x5dcec3 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x5ab276,
                    'fields': _0x326151['length'] > 0x0 ? [{
                            'name': 'Logs',
                            'value': '```\x0a' + _0x326151['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        }] : [],
                    'image': { 'url': _0x44ac75 },
                    'timestamp': new Date()['toISOString'](),
                    'footer': { 'text': _0x266762 + '\x20-\x20' + _0x1bda6e['command']['7'] + '\x20MrX' }
                };
                _0x166403(_0x3ad43b, _0x245fc7, _0x1bda6e['command']['33'], 0xc8);
                return await _0x3fd8d5(_0x1fd4ad);
            } else if (_0x5dcec3 / 0x2 > _0x279c66 && _0x279c66 !== _0x5dcec3 / 0x2) {
                _0x326151['unshift'](_0x266762 + '\x20' + _0x1bda6e['command']['67']);
                const _0x388b1b = {
                    'color': 0x99ff,
                    'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1bda6e['command']['23'] + '**\x20🚀',
                    'description': '🔹\x20Boosts\x20' + _0x1bda6e['command']['22'] + ('\x20:\x20**0/' + _0x5dcec3 + '**\x0a🔸\x20Boosts\x20') + _0x1bda6e['command']['28'] + ('\x20:\x20**' + _0x5dcec3 + '/' + _0x5dcec3 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x5ab276,
                    'fields': _0x326151['length'] > 0x0 ? [{
                            'name': 'Logs',
                            'value': '```\x0a' + _0x326151['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        }] : [],
                    'image': { 'url': _0x44ac75 },
                    'timestamp': new Date()['toISOString'](),
                    'footer': { 'text': _0x266762 + '\x20-\x20' + _0x1bda6e['command']['7'] + '\x20MrX' }
                };
                _0x166403(_0x3ad43b, _0x245fc7, _0x1bda6e['command']['33'], 0xc8);
                return await _0x3fd8d5(_0x388b1b);
            }
            while (!_0x380b7f && _0x334e83 < _0x12c067) {
                try {
                    _0x380b7f = await _0x10fd90(_0x5ab276);
                    if (!_0x380b7f) {
                        _0x334e83++;
                        const _0x3a3f0e = _0x334e83 * _0x1b1a7a;
                        await _0x16908b(_0x1bda6e['command']['97'] + '\x20' + _0x334e83 + '/' + _0x12c067 + '\x20' + _0x1bda6e['command']['98'] + '\x20' + _0x3a3f0e + '\x20' + _0x1bda6e['command']['99'] + ',\x20invoice_id:\x20' + _0x396ded['invoice_id'] + '.', _0x3a8859);
                        if (_0x334e83 < _0x12c067) {
                            await new Promise(_0x4f1162 => setTimeout(_0x4f1162, _0x1b1a7a * 0x3c * 0x3e8));
                        }
                    }
                } catch (_0x5357b1) {
                    console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:\x20' + _0x5357b1['message'] + ',\x20invoice_id:\x20' + _0x396ded['invoice_id'] + '.');
                    await _0x16908b('Delivery\x20Error,\x20invoice_id:\x20' + _0x396ded['invoice_id'], 'log');
                    _0x334e83++;
                    if (_0x334e83 < _0x12c067) {
                        await new Promise(_0x47f8d5 => setTimeout(_0x47f8d5, _0x1b1a7a * 0x3c * 0x3e8));
                    }
                }
            }
            if (!_0x380b7f) {
                return _0x166403(_0x3ad43b, _0x245fc7, _0x1bda6e['command']['96'], 0xc8);
            }
            const _0x5d1fb2 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1bda6e['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x1bda6e['command']['22'] + ('\x20:\x20**0/' + _0x5dcec3 + '**\x0a🔸\x20Boosts\x20') + _0x1bda6e['command']['28'] + ('\x20:\x20**0/' + _0x5dcec3 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x5ab276,
                'fields': _0x326151['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x326151['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x44ac75 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x266762 + '\x20-\x20' + _0x1bda6e['command']['7'] + '\x20MrX' }
            };
            const _0x3523f4 = await _0x3fd8d5(_0x5d1fb2);
            const _0x4dcae8 = _0xbe006b['readFileSync'](_0x3739f5)['toString']()['split']('\x0a');
            for (let _0x384695 = 0x0; _0x384695 < _0x5dcec3 / 0x2; _0x384695++) {
                let _0x26b84a = 0x0;
                async function _0x4c2870(_0x563764 = 0x0) {
                    try {
                        const _0x859deb = _0x4dcae8[_0x384695];
                        const _0x2d7c95 = await _0x28f8be(_0x859deb);
                        const _0x579530 = await _0x5c1c9d['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x1f2349 + '&machineid=' + _0x1f2e60 + '&shopname=' + _0x266762 + '&mode=BOOST&guildid=' + _0x5ab276 + '&bio=' + _0x2a1ab1 + '&clientid=' + _0x53590d + '&botclientsecret=' + _0x13dfb8 + '&bottoken=' + _0x14d022 + '&tokenboost=' + _0x2d7c95, {}, { 'timeout': 0xf4240 });
                        const {
                            erreur: _0x12a3e3,
                            success: _0x49a50f
                        } = _0x579530['data'];
                        if (_0x326151['length'] >= _0x290052) {
                            _0x326151['pop']();
                        }
                        if (_0x49a50f === !![]) {
                            _0x5dd33e++;
                            _0x326151['unshift']('✅\x20-\x20' + _0x1bda6e['command']['81'] + '\x20:\x20' + await _0x3d95f7(_0x2d7c95));
                            await _0x56c654(_0x859deb, _0x3739f5);
                        } else if (_0x49a50f === ![]) {
                            _0xf2eb0e++;
                            if (_0x12a3e3 === 'invalid') {
                                _0x326151['unshift']('❌\x20-\x20' + _0x1bda6e['command']['80'] + '\x20:\x20' + await _0x3d95f7(_0x2d7c95));
                                await _0x56c654(_0x859deb, _0x3739f5);
                            } else if (_0x12a3e3 === 'perm') {
                                _0x326151['unshift']('⛔\x20-\x20' + _0x1bda6e['command']['79'] + '\x20:\x20' + await _0x3d95f7(_0x2d7c95));
                                if (_0x563764 < 0x3) {
                                    _0x563764++;
                                    _0x326151['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x3d95f7(_0x2d7c95));
                                    await _0x4c2870(_0x563764);
                                }
                            } else if (_0x12a3e3 === 'used') {
                                _0x326151['unshift']('⚠️\x20-\x20' + _0x1bda6e['command']['78'] + '\x20:\x20' + await _0x3d95f7(_0x2d7c95));
                                await _0x56c654(_0x859deb, _0x3739f5);
                            } else {
                                _0x326151['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x3d95f7(_0x2d7c95));
                                if (_0x563764 < 0x3) {
                                    _0x563764++;
                                    _0x326151['unshift']('🔄️\x20-\x20retry\x20for\x20:\x20' + await _0x3d95f7(_0x2d7c95));
                                    await _0x4c2870(_0x563764);
                                }
                            }
                        }
                    } catch {
                        _0xf2eb0e++;
                        if (_0x563764 < 0x3) {
                            _0x563764++;
                            _0x326151['unshift']('🔄️\x20-\x20retry');
                            await _0x4c2870(_0x563764);
                        }
                        _0x326151['unshift']('⚠️\x20-\x20error\x20API');
                    }
                }
                await _0x4c2870(_0x26b84a);
                const _0x1e07ce = {
                    'color': 0x99ff,
                    'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1bda6e['command']['23'] + '**\x20🚀',
                    'description': '🔹\x20Boosts\x20' + _0x1bda6e['command']['22'] + ('\x20:\x20**' + _0x5dd33e * 0x2 + '/' + _0x5dcec3 + '**\x0a🔸\x20Boosts\x20') + _0x1bda6e['command']['28'] + ('\x20:\x20**' + _0xf2eb0e * 0x2 + '/' + _0x5dcec3 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x5ab276,
                    'fields': _0x326151['length'] > 0x0 ? [{
                            'name': 'Logs',
                            'value': '```\x0a' + _0x326151['join']('\x0a') + '\x0a```',
                            'inline': ![]
                        }] : [],
                    'image': { 'url': _0x44ac75 },
                    'timestamp': new Date()['toISOString'](),
                    'footer': { 'text': _0x266762 + '\x20-\x20' + _0x1bda6e['command']['7'] + '\x20MrX' }
                };
                await _0x5978b4(_0x3523f4, _0x1e07ce);
            }
            const _0x49ea87 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x1bda6e['command']['21'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x1bda6e['command']['22'] + ('\x20:\x20**' + _0x5dd33e * 0x2 + '/' + _0x5dcec3 + '**\x0a🔸\x20Boosts\x20') + _0x1bda6e['command']['28'] + ('\x20:\x20**' + _0xf2eb0e * 0x2 + '/' + _0x5dcec3 + '**\x0a📝\x20Server\x20id:\x20') + _0x5ab276,
                'fields': _0x326151['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0x326151['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0x44ac75 },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x266762 + '\x20-\x20' + _0x1bda6e['command']['7'] + '\x20MrX' }
            };
            await _0x5978b4(_0x3523f4, _0x49ea87);
            if (_0x5dd33e >= _0x7bfc21) {
                await _0x16908b('Order\x20Delivered,\x20' + _0x1bda6e['command']['100'] + ('\x20(' + _0x5dd33e * 0x2 + '\x20boosts),\x20invoice_id:\x20' + _0x396ded['invoice_id'] + '.'), 'log');
                return _0x166403(_0x3ad43b, _0x245fc7, _0x1bda6e['command']['101'], 0xc8);
            } else {
                await _0x16908b('Delivery\x20Error,\x20' + _0xf2eb0e * 0x2 + '\x20boosts\x20' + _0x1bda6e['command']['102'] + ',\x20invoice_id:\x20' + _0x396ded['invoice_id'] + '.', 'log');
                return _0x166403(_0x3ad43b, _0x245fc7, _0x1bda6e['command']['103'], 0xc8);
            }
        } catch (_0x172de4) {
            console['error'](_0x172de4);
            return _0x166403(_0x3ad43b, _0x245fc7, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
        }
    };
    const _0x1f54ac = async (_0x1f443f, _0x45837e, _0x366344) => {
        try {
            await _0x27bc44();
            const _0x4d648d = _0x1f443f['item'];
            if (!_0x4d648d) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
                return _0x166403(_0x366344, _0x45837e, _0x1bda6e['command']['106'], 0x190);
            }
            const _0x477d81 = parseInt(_0x4d648d['quantity'], 0xa) || 0x1;
            const _0x1939d1 = _0x4d648d['custom_fields']?.[_0x52b6c9];
            const _0x1aef65 = _0x4d648d['custom_fields']?.[_0x66c1ad] || _0x5e54f5;
            const _0x1715d2 = _0x4d648d['product']?.['name'];
            const _0x3033bf = '/stock/';
            let _0x30d463 = _0x27cc66['join'](__dirname, '..', _0x3033bf, 'stock-1m.txt');
            let _0x4bf660 = _0x27cc66['join'](__dirname, '..', _0x3033bf, 'stock-3m.txt');
            let _0x457322;
            console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20!');
            if (!_0x1715d2) {
                console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20products_name');
                return _0x166403(_0x366344, _0x45837e, _0x1bda6e['command']['10'], 0x190);
            }
            const _0x1bcf3d = _0x1715d2['match'](/(token|Token) (1|3) (Mois|Month|Months|mois)/i);
            if (!_0x1bcf3d) {
                await _0x2e3d51('Delivery\x20Error,\x20invoice_id:\x20' + _0x4d648d['invoice_id'], 'log');
                return _0x166403(_0x366344, _0x45837e, _0x1bda6e['command']['119'], 0xc8);
            }
            const _0x2a8518 = _0x477d81;
            const _0x38e561 = parseInt(_0x1bcf3d[0x1], 0xa);
            const _0xfa5c1f = _0x38e561 === 0x3 ? '3m' : '1m';
            if (_0xfa5c1f === '1m') {
                _0x457322 = _0x30d463;
            } else if (_0xfa5c1f === '3m') {
                _0x457322 = _0x4bf660;
            }
            await _0x2e3d51({
                'invoice_id': _0x4d648d['invoice_id'],
                'serveur_id': _0x1939d1,
                'quantity': _0x477d81,
                'price': _0x4d648d['price'],
                'mode': _0x45837e,
                'products_name': _0x1715d2,
                'gateway': _0x1f443f['gateway'],
                'nombre_boosts': _0x2a8518,
                'type_booster': _0xfa5c1f
            }, 'order');
            let _0x50a433 = _0xbe006b['existsSync'](_0x4f403d) ? JSON['parse'](_0xbe006b['readFileSync'](_0x4f403d)) : [];
            if (_0x50a433['find'](_0x438445 => _0x438445['invoice_id'] === _0x4d648d['invoice_id'])) {
                await _0x2e3d51('Duplicate\x20Order,\x20invoice_id:\x20' + _0x4d648d['invoice_id'], 'log');
                return _0x166403(_0x366344, _0x45837e, _0x1bda6e['command']['104'], 0xc8);
            }
            const _0x38eb18 = {
                'invoice_id': _0x4d648d['invoice_id'],
                'email': _0x4d648d['email'],
                'amount': _0x477d81,
                'price': _0x4d648d['total_price'],
                'gateway': _0x1f443f['gateway'],
                'serveurID': _0x1939d1,
                'status': _0x4d648d['status'],
                'custom_fields': _0x4d648d['custom_fields'],
                'product_name': _0x1715d2
            };
            _0x50a433['push'](_0x38eb18);
            _0xbe006b['writeFileSync'](_0x4f403d, JSON['stringify'](_0x50a433, null, 0x2));
            let _0x2da4b5 = await _0x216a39(_0x457322);
            if (_0x2da4b5 === 0x0) {
                return _0x166403(_0x366344, _0x45837e, _0x1bda6e['command']['33'], 0xc8);
            } else if (_0x2a8518 > _0x2da4b5 && _0x2da4b5 !== _0x2a8518) {
                return _0x166403(_0x366344, _0x45837e, _0x1bda6e['command']['33'], 0xc8);
            }
            const _0x5ef62b = await _0x4a09d9(0xf);
            let _0x4e90be = await _0x1bb691(_0x5ef62b, _0x457322, _0x2a8518);
            await _0x2e3d51('Order\x20Delivered,\x20' + _0x1bda6e['command']['120'] + ('\x20(' + _0x2a8518 + '\x20tokens),\x20invoice_id:\x20' + _0x4d648d['invoice_id'] + '.'), 'log');
            return _0x166403(_0x366344, _0x45837e, _0x4e90be + '\x20-\x20Password:\x20' + _0x5ef62b, 0xc8);
        } catch (_0x2774f1) {
            console['error'](_0x2774f1);
            return _0x166403(_0x366344, _0x45837e, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
        }
    };
    const _0x3e32b3 = (_0x2f8fd4, _0x577d05) => {
        if (!_0xbe006b['existsSync'](_0x4f403d)) {
            _0x2f8fd4['writeHead'](0x194, { 'Content-Type': 'text/html' });
            _0x2f8fd4['end']('<h1>Aucune\x20commande\x20trouvée</h1>');
            return;
        }
        const _0xdbff18 = JSON['parse'](_0xbe006b['readFileSync'](_0x4f403d));
        const _0x5e81d6 = _0x3d1da6 || 0x64;
        const _0x45c228 = parseInt(_0x577d05) || 0x1;
        const _0x270f41 = _0xdbff18['length'];
        const _0x5e21ea = Math['ceil'](_0x270f41 / _0x5e81d6);
        const _0x79449 = (_0x45c228 - 0x1) * _0x5e81d6;
        const _0xda77a8 = _0x79449 + _0x5e81d6;
        const _0x5cb762 = _0xdbff18['slice'](_0x79449, _0xda77a8);
        const _0x1a9af3 = _0xdbff18['filter'](_0x347578 => _0x347578['status'] === 'completed')['length'];
        const _0x1888ad = _0xdbff18['reduce']((_0x50d499, _0x28c67d) => {
            const _0xd8b355 = parseInt(_0x28c67d['amount'], 0xa);
            const _0x265c0e = _0xd8b355 * 0xe;
            return _0x50d499 + _0x265c0e;
        }, 0x0);
        const _0x1c9189 = _0xdbff18['reduce']((_0xaf36b, _0x141b35) => {
            const _0x152d2f = parseFloat(_0x141b35['price']);
            return _0xaf36b + (isNaN(_0x152d2f) ? 0x0 : _0x152d2f);
        }, 0x0);
        _0x2f8fd4['writeHead'](0xc8, { 'Content-Type': 'text/html' });
        _0x2f8fd4['end']('<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html\x20lang=\x22fr\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>Dashboard\x20des\x20Commandes</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20{\x20box-sizing:\x20border-box;\x20margin:\x200;\x20padding:\x200;\x20font-family:\x20\x27Inter\x27,\x20sans-serif;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x20background-color:\x20#111827;\x20color:\x20#e5e7eb;\x20display:\x20flex;\x20justify-content:\x20center;\x20padding:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.dashboard\x20{\x20width:\x20100%;\x20max-width:\x201200px;\x20padding:\x2020px;\x20background:\x20#1f2937;\x20border-radius:\x2010px;\x20box-shadow:\x200\x204px\x2010px\x20rgba(0,\x200,\x200,\x200.3);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20img\x20{\x20width:\x2080px;\x20margin-right:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20color:\x20#60a5fa;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20{\x20text-align:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.8rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201.2rem;\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-container\x20{\x20overflow-x:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x20width:\x20100%;\x20border-collapse:\x20collapse;\x20background-color:\x20#374151;\x20border-radius:\x2010px;\x20overflow:\x20hidden;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2012px;\x20text-align:\x20left;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th\x20{\x20background-color:\x20#2563eb;\x20color:\x20white;\x20text-transform:\x20uppercase;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:nth-child(even)\x20{\x20background-color:\x20#1f2937;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:hover\x20{\x20background-color:\x20#334155;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20{\x20text-align:\x20center;\x20margin-top:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a\x20{\x20margin:\x200\x205px;\x20padding:\x208px\x2015px;\x20background-color:\x20#2563eb;\x20color:\x20white;\x20border-radius:\x205px;\x20text-decoration:\x20none;\x20transition:\x200.3s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a:hover\x20{\x20background-color:\x20#1e40af;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20footer\x20{\x20text-align:\x20center;\x20margin-top:\x2030px;\x20font-size:\x200.9rem;\x20opacity:\x200.7;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2010px;\x20font-size:\x2014px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.5rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dashboard\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://media.bloumechat.com/media/PFq3HUI6Es.png\x22\x20alt=\x22Logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>InfinityBoost</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Dashboard\x20des\x20Commandes</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Total\x20Gagné\x20:\x20<span\x20id=\x22totalEarned\x22>' + _0x1c9189['toFixed'](0x2) + '€</span>\x20|\x20Total\x20Boosts\x20:\x20<span\x20id=\x22totalBoosts\x22>' + _0x1888ad + '</span>\x20|\x20Total\x20Commandes\x20:\x20<span\x20id=\x22totalCompletedOrders\x22>' + _0x1a9af3 + '</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Invoice\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Email</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Prix\x20(€)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Status</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Gateway</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Serveur\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x5cb762['map'](_0x130db9 => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x130db9['invoice_id'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x130db9['email'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + parseFloat(_0x130db9['price'])['toFixed'](0x2) + '€</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x130db9['status'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x130db9['amount'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x130db9['gateway'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x130db9['serveurID'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>')['join']('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pagination\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x45c228 > 0x1 ? '<a\x20href=\x22/orders?page=' + (_0x45c228 - 0x1) + '\x22>&laquo;\x20Précédent</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Page\x20' + _0x45c228 + '\x20/\x20' + _0x5e21ea + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x45c228 < _0x5e21ea ? '<a\x20href=\x22/orders?page=' + (_0x45c228 + 0x1) + '\x22>Suivant\x20&raquo;</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>&copy;\x202024\x20InfinityBoost.\x20Tous\x20droits\x20réservés.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a');
    };
    const _0x392d39 = _0x2aa21f['createServer'](async (_0x2a414c, _0x286366) => {
        console['log']('[' + new Date()['toISOString']() + ']\x20Nouvelle\x20requête\x20reçue:\x20' + _0x2a414c['method'] + '\x20' + _0x2a414c['url']);
        if (_0x2a414c['method'] === 'POST') {
            let _0x1e121d = '';
            _0x2a414c['on']('data', _0x15d6ef => {
                _0x1e121d += _0x15d6ef['toString']();
            });
            _0x2a414c['on']('end', async () => {
                try {
                    const _0x26c4f6 = JSON['parse'](_0x1e121d);
                    const _0x3c8dab = 'json';
                    const _0x570206 = _0x5b0d25['parse'](_0x2a414c['url'], !![]);
                    const _0x221e16 = _0x570206['pathname'];
                    if (_0x26c4f6['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC' && _0x221e16 === '/booster') {
                        console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                        await _0x47a958(_0x26c4f6, _0x3c8dab, _0x286366);
                    } else if (_0x26c4f6['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC' && _0x221e16 === '/send') {
                        console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                        await _0x1f54ac(_0x26c4f6, _0x3c8dab, _0x286366);
                    } else {
                        console['log']('[' + new Date()['toISOString']() + ']\x20Event\x20non\x20supporté:', _0x26c4f6['event']);
                        _0x166403(_0x286366, _0x3c8dab, 'Event\x20non\x20supporté', 0x190);
                    }
                } catch (_0x46dc4c) {
                    console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20parsing\x20JSON:', _0x46dc4c);
                    _0x166403(_0x286366, 'json', 'Erreur\x20parsing\x20JSON', 0x190);
                }
            });
        } else if (_0x2a414c['method'] === 'GET') {
            try {
                const _0x5aaa7a = _0x5b0d25['parse'](_0x2a414c['url'], !![]);
                const _0x55045d = _0x5aaa7a['query'];
                const _0x2457b6 = _0x55045d['page'] || '1';
                console['log']('[' + new Date()['toISOString']() + ']\x20Requête\x20GET\x20reçue\x20pour\x20' + _0x5aaa7a['pathname'] + ',\x20params:', _0x55045d);
                if (_0x5aaa7a['pathname'] === '/orders') {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20requête\x20/orders,\x20page:', _0x2457b6);
                    _0x3e32b3(_0x286366, _0x2457b6);
                } else {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Route\x20non\x20trouvée:', _0x5aaa7a['pathname']);
                    _0x166403(_0x286366, 'json', 'Route\x20non\x20trouvée', 0x194);
                }
            } catch (_0x32faf5) {
                console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20du\x20traitement\x20de\x20la\x20requête\x20GET:', _0x32faf5);
                _0x166403(_0x286366, 'json', {
                    'error': 'Erreur\x20interne\x20du\x20serveur',
                    'details': _0x32faf5['message']
                }, 0x1f4);
            }
        } else {
            console['log']('[' + new Date()['toISOString']() + ']\x20Méthode\x20non\x20supportée:', _0x2a414c['method']);
            _0x166403(_0x286366, 'json', 'Méthode\x20non\x20supportée', 0x195);
        }
    });
    _0x392d39['listen'](_0x178e35, () => {
        console['log']('[' + new Date()['toISOString']() + ']\x20Serveur\x20démarré\x20sur\x20http://' + _0x420fe2 + ':' + _0x178e35);
    });
} else {
    console['log']('[' + new Date()['toISOString']() + ']\x20Le\x20l\x27autobuy\x20est\x20déactivé,\x20il\x20sera\x20pas\x20lancé.');
}
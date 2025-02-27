(function (_0x2759fb, _0x2f3a6d) {
    const _0xb7c910 = _0x5aa6;
    const _0x4c37b8 = _0x2759fb();
    while (!![]) {
        try {
            const _0x1f7e7f = parseInt(_0xb7c910(0x91)) / 0x1 * (parseInt(_0xb7c910(0x99)) / 0x2) + -parseInt(_0xb7c910(0x95)) / 0x3 * (parseInt(_0xb7c910(0x97)) / 0x4) + parseInt(_0xb7c910(0x96)) / 0x5 + parseInt(_0xb7c910(0x98)) / 0x6 + parseInt(_0xb7c910(0x93)) / 0x7 * (-parseInt(_0xb7c910(0x9a)) / 0x8) + parseInt(_0xb7c910(0x92)) / 0x9 * (parseInt(_0xb7c910(0x90)) / 0xa) + -parseInt(_0xb7c910(0x8f)) / 0xb * (parseInt(_0xb7c910(0x94)) / 0xc);
            if (_0x1f7e7f === _0x2f3a6d) {
                break;
            } else {
                _0x4c37b8['push'](_0x4c37b8['shift']());
            }
        } catch (_0x42724c) {
            _0x4c37b8['push'](_0x4c37b8['shift']());
        }
    }
}(_0x452e, 0xa7fa8));
const _0x59a60a = require('http');
const _0x38ba59 = require('url');
const _0x22edaf = require('axios');
const _0x1a9e20 = require('fs');
const _0x4e1359 = require('path');
const _0x2a77df = require('os');
const _0x1a9467 = require('gradient-string');
const _0x24d6b1 = './commandes.json';
const _0x144dbd = require('../config.json');
function _0x452e() {
    const _0x3fffff = [
        '4921130CCcdfZ',
        '752SLgksd',
        '2922900jTaiEc',
        '13894gxhSfG',
        '16ryzXFV',
        '36674TutRfl',
        '10TfHFBR',
        '99WBAFqt',
        '3621771yrBQLd',
        '812063auKulf',
        '3324gMDLWv',
        '11457TjLUXP'
    ];
    _0x452e = function () {
        return _0x3fffff;
    };
    return _0x452e();
}
const {performOperation: _0xa4f8e4} = require('../required/performOp');
const {WebhookClient: _0x400ef0} = require('discord.js');
const _0x5a4e3f = require('line-by-line');
let _0x3dc5c4 = _0x144dbd['service']['name_shop'];
let _0xf9d29d = _0x144dbd['service']['banner'];
let _0x32ad96 = _0x144dbd['apikey'];
let _0x2662d0 = _0x144dbd['autobuy']['port'];
let _0x56e29f = _0x144dbd['autobuy']['host'];
let _0x1b6513 = _0x144dbd['autobuy']['bio'];
let _0x478fff = _0x144dbd['autobuy']['shop_id_sellauth'];
let _0x20e6e3 = _0x144dbd['autobuy']['apikey_sellauth'];
let _0x318a96 = _0x144dbd['autobuy']['discord_webhook_url_command_log'];
let _0x6749a2 = _0x144dbd['autobuy']['discord_webhook_url_console'];
let _0x435176 = _0x144dbd['autobuy']['orders_command_for_page'];
let _0x3860f3 = _0x144dbd['autobuy']['guildid_variable_Custom_Field'] || 'Serveur\x20ID';
let _0x3faeb0 = _0x144dbd['autobuy']['bio_variable_Custom_Field'] || 'Bio';
const _0x4d0896 = JSON['parse'](_0x1a9e20['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x58f3d2 = new _0x400ef0({ 'url': _0x6749a2 });
function _0x5aa6(_0x1bcefc, _0x48028a) {
    const _0x452edb = _0x452e();
    _0x5aa6 = function (_0x5aa620, _0x1625b4) {
        _0x5aa620 = _0x5aa620 - 0x8f;
        let _0x562fd4 = _0x452edb[_0x5aa620];
        return _0x562fd4;
    };
    return _0x5aa6(_0x1bcefc, _0x48028a);
}
const _0x2f352b = new _0x400ef0({ 'url': _0x318a96 });
const _0x20b695 = _0x144dbd['service']['langue_shop'];
const _0x163a32 = _0x4d0896[_0x20b695];
let _0x2d11f1 = _0x144dbd['bot']['clientid'];
let _0x3f179e = _0x144dbd['bot']['token'];
let _0x3345c1 = _0x144dbd['bot']['clientsecret'];
let _0x5f0823;
async function _0x5bdb73() {
    return new Promise((_0xbd8868, _0x356758) => {
        _0xa4f8e4((_0x2b0147, _0x23e9be) => {
            if (_0x2b0147) {
                console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
                _0x356758(_0x2b0147);
            } else {
                _0x5f0823 = _0x23e9be;
                _0xbd8868(_0x5f0823);
            }
        });
    });
}
async function _0x1c6766(_0x2c810c) {
    const _0x55843a = _0x2c810c['split'](':');
    if (_0x55843a['length'] === 0x3) {
        return _0x55843a[0x2];
    } else if (_0x55843a['length'] === 0x1) {
        return _0x2c810c;
    } else {
        console['warn']('Format\x20non\x20valide:', _0x2c810c);
        return _0x2c810c;
    }
}
async function _0x94ef6e(_0x139a81) {
    if (_0x139a81['length'] <= 0x6) {
        return _0x139a81;
    }
    const _0x2268fe = _0x139a81['slice'](0x0, 0x14);
    const _0x45e01f = _0x139a81['slice'](-0xa);
    const _0x2bf43f = _0x139a81['length'] - _0x2268fe['length'] - _0x45e01f['length'];
    const _0x45b008 = '' + _0x2268fe + '*'['repeat'](_0x2bf43f - 0x46) + _0x45e01f;
    return _0x45b008;
}
async function _0x5da2ab(_0x5e7cca) {
    if (_0x5e7cca['length'] <= 0x6) {
        return _0x5e7cca;
    }
    const _0x4acf89 = _0x5e7cca['slice'](0x0, 0x6);
    const _0x25ee10 = _0x5e7cca['slice'](-0xc);
    const _0x5c559c = _0x5e7cca['length'] - _0x4acf89['length'] - _0x25ee10['length'];
    const _0x3ad808 = '' + _0x4acf89 + '*'['repeat'](_0x5c559c - 0x2d) + _0x25ee10;
    return _0x3ad808;
}
async function _0x2b1ea7(_0x54269c, _0x1bbb64) {
    let _0x596a31 = await _0x94ef6e(_0x54269c);
    let _0x18039b = await _0x1bd07b(_0x1bbb64);
    let _0x52dea2 = '';
    if (!_0x1a9e20['existsSync'](_0x1bbb64)) {
        console['log'](_0x1a9467['retro']('⛔\x20-\x20Le\x20fichier\x20n\x27existe\x20pas.'));
        return;
    }
    const _0x2aff2c = [];
    const _0x56e350 = new _0x5a4e3f(_0x1bbb64);
    _0x56e350['on']('error', _0xa1f65e => {
        console['error'](_0x1a9467['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:\x20' + _0xa1f65e));
    });
    _0x56e350['on']('line', _0x376aff => {
        const _0x35a56a = _0x376aff['trim']();
        if (!_0x35a56a['includes'](_0x54269c['trim']())) {
            _0x2aff2c['push'](_0x35a56a);
        }
    });
    _0x56e350['on']('end', async () => {
        if (_0x2aff2c['length'] === 0x0 && _0x18039b !== 0x1) {
            console['log'](_0x1a9467['retro']('⛔\x20-\x20Le\x20token\x20' + _0x596a31 + '\x20n\x27a\x20pas\x20été\x20trouvé\x20dans\x20le\x20fichier.'));
            return;
        }
        if (_0x18039b !== 0x1) {
            _0x52dea2 = _0x2aff2c['join'](_0x2a77df['EOL']);
        } else {
            _0x52dea2 = '';
        }
        _0x1a9e20['writeFile'](_0x1bbb64, _0x52dea2, _0x4b51e4 => {
            if (_0x4b51e4) {
                console['error'](_0x1a9467['retro']('⛔\x20-\x20Erreur\x20lors\x20de\x20l\x27écriture\x20du\x20fichier\x20:\x20' + _0x4b51e4));
                return;
            }
            console['log'](_0x1a9467['retro']('🗑️\x20-\x20Le\x20token\x20' + _0x596a31 + '\x20a\x20été\x20supprimé\x20avec\x20succès\x20du\x20fichier.'));
            return;
        });
    });
}
async function _0x1bd07b(_0x51362a) {
    try {
        const _0x27432b = _0x1a9e20['readFileSync'](_0x51362a, 'utf-8');
        const _0x4ed525 = _0x27432b['split']('\x0a');
        const _0x124c3b = _0x4ed525['filter'](_0x239624 => _0x239624['trim']()['length'] > 0x0);
        return _0x124c3b['length'];
    } catch (_0x5df5c2) {
        console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x5df5c2);
        return 0x0;
    }
}
const _0x42bf33 = async (_0x57e827, _0x1cc4d6 = 'order') => {
    try {
        const _0x1ac644 = {
            'embeds': [{
                    'title': _0x1cc4d6 === 'order' ? '🛍️\x20New\x20Order' : '📝\x20System\x20Log',
                    'color': _0x1cc4d6 === 'order' ? 0xff00 : 0x99ff,
                    'timestamp': new Date()['toISOString'](),
                    'fields': []
                }]
        };
        if (_0x1cc4d6 === 'order') {
            const _0x957f5f = parseFloat(_0x57e827['quantity']) || 0x0;
            const _0x36d9de = parseFloat(_0x57e827['nombre_boosts']) || 0x0;
            const _0x7f28 = parseFloat(_0x57e827['type_booster']) || 'N/A';
            const _0x311060 = parseFloat(_0x57e827['price']) || 0x0;
            const _0x1c79f9 = (_0x957f5f * _0x311060)['toFixed'](0x2);
            _0x1ac644['embeds'][0x0]['fields'] = [
                {
                    'name': '🆔\x20Invoice\x20ID',
                    'value': String(_0x57e827['invoice_id']),
                    'inline': ![]
                },
                {
                    'name': '🏷️\x20Product',
                    'value': _0x57e827['products_name'] ? _0x57e827['products_name'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📧\x20Email',
                    'value': _0x57e827['email'] ? _0x57e827['email'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '👤\x20Server\x20ID',
                    'value': _0x57e827['serveur_id'] ? _0x57e827['serveur_id'] : 'N/A',
                    'inline': ![]
                },
                {
                    'name': '📦\x20Quantity',
                    'value': String(_0x957f5f),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Number\x20boosts',
                    'value': String(_0x36d9de),
                    'inline': ![]
                },
                {
                    'name': '📦\x20Type\x20boosts',
                    'value': String(_0x7f28) + 'm',
                    'inline': ![]
                },
                {
                    'name': '💰\x20Unit\x20Price',
                    'value': String(_0x311060) + '€',
                    'inline': ![]
                },
                {
                    'name': '💶\x20Total\x20Price',
                    'value': String(_0x1c79f9) + '€',
                    'inline': ![]
                },
                {
                    'name': '💳\x20Gateway',
                    'value': _0x57e827['gateway'] ? _0x57e827['gateway'] : 'N/A',
                    'inline': ![]
                }
            ];
        } else {
            _0x1ac644['embeds'][0x0]['description'] = _0x57e827;
            if (_0x57e827['includes']('Order\x20Delivered')) {
                _0x1ac644['embeds'][0x0]['title'] = '✅\x20Order\x20Delivered';
                _0x1ac644['embeds'][0x0]['color'] = 0xff00;
            } else if (_0x57e827['includes']('Delivery\x20Error')) {
                _0x1ac644['embeds'][0x0]['title'] = '❌\x20Delivery\x20Error';
                _0x1ac644['embeds'][0x0]['color'] = 0xff0000;
            } else if (_0x57e827['includes']('Duplicate\x20Order')) {
                _0x1ac644['embeds'][0x0]['title'] = '⚠️\x20Duplicate\x20Order';
                _0x1ac644['embeds'][0x0]['color'] = 0xffa500;
            } else {
                _0x1ac644['embeds'][0x0]['title'] = '⚠️\x20Unknown\x20Event';
                _0x1ac644['embeds'][0x0]['color'] = 0xffa500;
            }
        }
        await _0x2f352b['send']({ 'embeds': [_0x1ac644['embeds'][0x0]] });
    } catch (_0x32b585) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20commands\x20logs:', _0x32b585['response']?.['data'] || _0x32b585['message']);
    }
};
async function _0x24348f(_0x302bd2) {
    try {
        const _0x208027 = await _0x58f3d2['send']({ 'embeds': [_0x302bd2] });
        return _0x208027['id'];
    } catch (_0x47ec99) {
        console['error']('Error\x20sending\x20Discord\x20webhook\x20message:', _0x47ec99['response']?.['data'] || _0x47ec99['message']);
        throw _0x47ec99;
    }
}
async function _0x21a19c(_0x218ee3, _0x2ca817) {
    try {
        await _0x58f3d2['editMessage'](_0x218ee3, { 'embeds': [_0x2ca817] });
    } catch (_0x33f777) {
        console['error']('Error\x20editing\x20Discord\x20webhook\x20message:', _0x33f777['response']?.['data'] || _0x33f777['message']);
        throw _0x33f777;
    }
}
const _0x21d1bb = (_0x53f8b4, _0x27e0da, _0x40d1d1, _0x3bf4a4 = 0xc8) => {
    if (_0x27e0da === 'write') {
        _0x53f8b4['writeHead'](_0x3bf4a4, { 'Content-Type': 'text/plain' });
        _0x53f8b4['write'](_0x40d1d1);
    } else {
        _0x53f8b4['writeHead'](_0x3bf4a4, { 'Content-Type': 'application/json' });
        _0x53f8b4['end'](JSON['stringify'](_0x40d1d1));
    }
};
const _0x4deae4 = async (_0x3db8e9, _0xc66706 = 0xc) => {
    try {
        const _0x606f88 = await _0x22edaf['post']('https://panel.infinityboost.monster/api/api?APIKey=' + _0x32ad96 + '&machineid=' + _0x5f0823 + '&mode=CHECK_BOT&id=' + _0x3db8e9, {}, { 'timeout': 0xf4240 });
        const {erreur: _0x2d511b} = _0x606f88['data'];
        return _0x2d511b !== 'bot';
    } catch (_0x5cb989) {
        console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:', _0x5cb989);
        return ![];
    }
};
const _0x522ac2 = async (_0x37f5dc, _0x18976f, _0x482470) => {
    try {
        await _0x5bdb73();
        const _0x1de07e = _0x37f5dc['item'];
        if (!_0x1de07e) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20item\x20manquantes');
            return _0x21d1bb(_0x482470, _0x18976f, _0x163a32['command']['106'], 0x190);
        }
        const _0x819f02 = parseInt(_0x1de07e['quantity'], 0xa) || 0x1;
        const _0x53ef35 = _0x1de07e['custom_fields']?.[_0x3860f3];
        const _0x1ee55b = _0x1de07e['custom_fields']?.[_0x3faeb0] || _0x1b6513;
        const _0xa93fb9 = _0x1de07e['product']?.['name'];
        const _0x19a767 = '/stock/';
        let _0x2ffabf = _0x4e1359['join'](__dirname, '..', _0x19a767, 'stock-1m.txt');
        let _0x148b29 = _0x4e1359['join'](__dirname, '..', _0x19a767, 'stock-3m.txt');
        let _0x33e6da;
        console['log']('[' + new Date()['toISOString']() + ']\x20Commande\x20reçue\x20pour\x20le\x20serveur:\x20' + _0x53ef35);
        if (!_0x53ef35 || !_0xa93fb9) {
            console['log']('[' + new Date()['toISOString']() + ']\x20Données\x20manquantes:\x20' + (!_0x53ef35 ? 'serveurID' : 'products_name'));
            return _0x21d1bb(_0x482470, _0x18976f, _0x163a32['command']['105'], 0x190);
        }
        const _0x311b90 = _0xa93fb9['match'](/\[(\d+)\]/);
        const _0x2d20c1 = _0xa93fb9['match'](/boost (1|3) Mois/);
        if (!_0x311b90 || !_0x2d20c1) {
            await _0x42bf33('Delivery\x20Error,\x20invoice_id:\x20' + _0x1de07e['invoice_id'], 'log');
            return _0x21d1bb(_0x482470, _0x18976f, _0x163a32['command']['105'], 0xc8);
        }
        const _0x1b085d = parseInt(_0x311b90[0x1], 0xa);
        const _0x1fcee4 = _0x1b085d * _0x819f02;
        const _0x4c7c69 = parseInt(_0x2d20c1[0x1], 0xa);
        const _0xdc36c3 = _0x4c7c69 === 0x3 ? '3m' : '1m';
        if (_0xdc36c3 === '1m') {
            _0x33e6da = _0x2ffabf;
        } else if (_0xdc36c3 === '3m') {
            _0x33e6da = _0x148b29;
        }
        await _0x42bf33({
            'invoice_id': _0x1de07e['invoice_id'],
            'serveur_id': _0x53ef35,
            'quantity': _0x819f02,
            'price': _0x1de07e['price'],
            'mode': _0x18976f,
            'products_name': _0xa93fb9,
            'gateway': _0x37f5dc['gateway'],
            'nombre_boosts': _0x1fcee4,
            'type_booster': _0xdc36c3
        }, 'order');
        let _0x39cfbb = _0x1a9e20['existsSync'](_0x24d6b1) ? JSON['parse'](_0x1a9e20['readFileSync'](_0x24d6b1)) : [];
        if (_0x39cfbb['find'](_0x4aa3a4 => _0x4aa3a4['invoice_id'] === _0x1de07e['invoice_id'])) {
            await _0x42bf33('Duplicate\x20Order,\x20invoice_id:\x20' + _0x1de07e['invoice_id'], 'log');
            return _0x21d1bb(_0x482470, _0x18976f, _0x163a32['command']['104'], 0xc8);
        }
        const _0x27e931 = {
            'invoice_id': _0x1de07e['invoice_id'],
            'email': _0x1de07e['email'],
            'amount': _0x819f02,
            'price': _0x1de07e['total_price'],
            'gateway': _0x37f5dc['gateway'],
            'serveurID': _0x53ef35,
            'status': _0x1de07e['status'],
            'custom_fields': _0x1de07e['custom_fields'],
            'product_name': _0xa93fb9
        };
        _0x39cfbb['push'](_0x27e931);
        _0x1a9e20['writeFileSync'](_0x24d6b1, JSON['stringify'](_0x39cfbb, null, 0x2));
        let _0x104d7b = 0x0;
        let _0x9d0acd = 0x0;
        let _0x1c7d6f = _0x1fcee4 / 0x2;
        let _0x6054a9 = ![];
        let _0x540ff7 = 0x0;
        const _0x5b7157 = 0x6;
        let _0xe1b3f0 = [];
        let _0x145b73 = '[+]\x20' + _0x3dc5c4 + '\x20initialisés.';
        if (_0xe1b3f0['length'] >= _0x5b7157) {
            _0xe1b3f0['pop']();
        }
        _0xe1b3f0['unshift'](_0x145b73);
        let _0x59dafb = await _0x1bd07b(_0x33e6da);
        if (_0x59dafb === 0x0) {
            _0xe1b3f0['unshift'](_0x3dc5c4 + '\x20' + _0x163a32['command']['13']);
            const _0xe4569a = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x163a32['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x163a32['command']['22'] + ('\x20:\x20**0/' + _0x1fcee4 + '**\x0a🔸\x20Boosts\x20') + _0x163a32['command']['28'] + ('\x20:\x20**' + _0x1fcee4 + '/' + _0x1fcee4 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x53ef35,
                'fields': _0xe1b3f0['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0xe1b3f0['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0xf9d29d },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x3dc5c4 + '\x20-\x20' + _0x163a32['command']['7'] + '\x20MrX' }
            };
            _0x21d1bb(_0x482470, _0x18976f, _0x163a32['command']['33'], 0xc8);
            return await _0x24348f(_0xe4569a);
        } else if (_0x1fcee4 / 0x2 > _0x59dafb && _0x59dafb !== _0x1fcee4 / 0x2) {
            _0xe1b3f0['unshift'](_0x3dc5c4 + '\x20' + _0x163a32['command']['67']);
            const _0x2c73c8 = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x163a32['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x163a32['command']['22'] + ('\x20:\x20**0/' + _0x1fcee4 + '**\x0a🔸\x20Boosts\x20') + _0x163a32['command']['28'] + ('\x20:\x20**' + _0x1fcee4 + '/' + _0x1fcee4 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x53ef35,
                'fields': _0xe1b3f0['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0xe1b3f0['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0xf9d29d },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x3dc5c4 + '\x20-\x20' + _0x163a32['command']['7'] + '\x20MrX' }
            };
            _0x21d1bb(_0x482470, _0x18976f, _0x163a32['command']['33'], 0xc8);
            return await _0x24348f(_0x2c73c8);
        }
        while (!_0x6054a9 && _0x540ff7 < 0xc) {
            try {
                _0x6054a9 = await _0x4deae4(_0x53ef35);
                if (!_0x6054a9) {
                    _0x540ff7++;
                    const _0x134653 = _0x540ff7 * 0xa;
                    await _0x42bf33(_0x163a32['command']['97'] + '\x20' + _0x540ff7 + '/12\x20' + _0x163a32['command']['98'] + '\x20' + _0x134653 + '\x20' + _0x163a32['command']['99'] + ',\x20invoice_id:\x20' + _0x1de07e['invoice_id'] + '.', _0x6749a2);
                    if (_0x540ff7 < 0xc) {
                        await new Promise(_0x37b746 => setTimeout(_0x37b746, 0xa * 0x3c * 0x3e8));
                    }
                }
            } catch (_0x17e28a) {
                console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20bot:\x20' + _0x17e28a['message'] + ',\x20invoice_id:\x20' + _0x1de07e['invoice_id'] + '.');
                await _0x42bf33('Delivery\x20Error,\x20invoice_id:\x20' + _0x1de07e['invoice_id'], 'log');
                _0x540ff7++;
                if (_0x540ff7 < 0xc) {
                    await new Promise(_0xf9003d => setTimeout(_0xf9003d, 0xa * 0x3c * 0x3e8));
                }
            }
        }
        if (!_0x6054a9) {
            return _0x21d1bb(_0x482470, _0x18976f, _0x163a32['command']['96'], 0xc8);
        }
        const _0x13e55d = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x163a32['command']['23'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x163a32['command']['22'] + ('\x20:\x20**0/' + _0x1fcee4 + '**\x0a🔸\x20Boosts\x20') + _0x163a32['command']['28'] + ('\x20:\x20**0/' + _0x1fcee4 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x53ef35,
            'fields': _0xe1b3f0['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0xe1b3f0['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0xf9d29d },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x3dc5c4 + '\x20-\x20' + _0x163a32['command']['7'] + '\x20MrX' }
        };
        const _0x7c580a = await _0x24348f(_0x13e55d);
        const _0x3daba5 = _0x1a9e20['readFileSync'](_0x33e6da)['toString']()['split']('\x0a');
        for (let _0x541de1 = 0x0; _0x541de1 < _0x1fcee4 / 0x2; _0x541de1++) {
            try {
                const _0x880494 = _0x3daba5[_0x541de1];
                const _0x495294 = await _0x1c6766(_0x880494);
                const _0x40bb0a = await _0x22edaf['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x32ad96 + '&machineid=' + _0x5f0823 + '&shopname=' + _0x3dc5c4 + '&mode=BOOST&guildid=' + _0x53ef35 + '&bio=' + _0x1ee55b + '&clientid=' + _0x2d11f1 + '&botclientsecret=' + _0x3345c1 + '&bottoken=' + _0x3f179e + '&tokenboost=' + _0x495294, {}, { 'timeout': 0xf4240 });
                const {
                    erreur: _0x31ab35,
                    success: _0x4d6546
                } = _0x40bb0a['data'];
                if (_0xe1b3f0['length'] >= _0x5b7157) {
                    _0xe1b3f0['pop']();
                }
                if (_0x4d6546 === !![]) {
                    _0x104d7b++;
                    _0xe1b3f0['unshift']('✅\x20-\x20' + _0x163a32['command']['81'] + '\x20:\x20' + await _0x5da2ab(_0x495294));
                    await _0x2b1ea7(_0x880494, _0x33e6da);
                } else if (_0x4d6546 === ![]) {
                    _0x9d0acd++;
                    if (_0x31ab35 === 'invalid') {
                        _0xe1b3f0['unshift']('❌\x20-\x20' + _0x163a32['command']['80'] + '\x20:\x20' + await _0x5da2ab(_0x495294));
                        await _0x2b1ea7(_0x880494, _0x33e6da);
                    } else if (_0x31ab35 === 'perm') {
                        _0xe1b3f0['unshift']('⛔\x20-\x20' + _0x163a32['command']['79'] + '\x20:\x20' + await _0x5da2ab(_0x495294));
                    } else if (_0x31ab35 === 'used') {
                        _0xe1b3f0['unshift']('⚠️\x20-\x20' + _0x163a32['command']['78'] + '\x20:\x20' + await _0x5da2ab(_0x495294));
                        await _0x2b1ea7(_0x880494, _0x33e6da);
                    } else {
                        _0xe1b3f0['unshift']('⚠️\x20-\x20error\x20:\x20' + await _0x5da2ab(_0x495294));
                    }
                }
            } catch {
                _0x9d0acd++;
                _0xe1b3f0['unshift']('⚠️\x20-\x20error\x20API');
            }
            const _0x3cfafa = {
                'color': 0x99ff,
                'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x163a32['command']['23'] + '**\x20🚀',
                'description': '🔹\x20Boosts\x20' + _0x163a32['command']['22'] + ('\x20:\x20**' + _0x104d7b * 0x2 + '/' + _0x1fcee4 + '**\x0a🔸\x20Boosts\x20') + _0x163a32['command']['28'] + ('\x20:\x20**' + _0x9d0acd * 0x2 + '/' + _0x1fcee4 + '**\x0a\x20📝\x20Server\x20id:\x20') + _0x53ef35,
                'fields': _0xe1b3f0['length'] > 0x0 ? [{
                        'name': 'Logs',
                        'value': '```\x0a' + _0xe1b3f0['join']('\x0a') + '\x0a```',
                        'inline': ![]
                    }] : [],
                'image': { 'url': _0xf9d29d },
                'timestamp': new Date()['toISOString'](),
                'footer': { 'text': _0x3dc5c4 + '\x20-\x20' + _0x163a32['command']['7'] + '\x20MrX' }
            };
            await _0x21a19c(_0x7c580a, _0x3cfafa);
        }
        const _0x55999c = {
            'color': 0x99ff,
            'title': 'AutoBuy\x20-\x20🚀\x20**Boost\x20' + _0x163a32['command']['21'] + '**\x20🚀',
            'description': '🔹\x20Boosts\x20' + _0x163a32['command']['22'] + ('\x20:\x20**' + _0x104d7b * 0x2 + '/' + _0x1fcee4 + '**\x0a🔸\x20Boosts\x20') + _0x163a32['command']['28'] + ('\x20:\x20**' + _0x9d0acd * 0x2 + '/' + _0x1fcee4 + '**\x0a📝\x20Server\x20id:\x20') + _0x53ef35,
            'fields': _0xe1b3f0['length'] > 0x0 ? [{
                    'name': 'Logs',
                    'value': '```\x0a' + _0xe1b3f0['join']('\x0a') + '\x0a```',
                    'inline': ![]
                }] : [],
            'image': { 'url': _0xf9d29d },
            'timestamp': new Date()['toISOString'](),
            'footer': { 'text': _0x3dc5c4 + '\x20-\x20' + _0x163a32['command']['7'] + '\x20MrX' }
        };
        await _0x21a19c(_0x7c580a, _0x55999c);
        if (_0x104d7b >= _0x1c7d6f) {
            await _0x42bf33('Order\x20Delivered,\x20' + _0x163a32['command']['100'] + ('\x20(' + _0x104d7b * 0x2 + '\x20boosts),\x20invoice_id:\x20' + _0x1de07e['invoice_id'] + '.'), 'log');
            return _0x21d1bb(_0x482470, _0x18976f, _0x163a32['command']['101'], 0xc8);
        } else {
            await _0x42bf33('Delivery\x20Error,\x20' + _0x9d0acd * 0x2 + '\x20boosts\x20' + _0x163a32['command']['102'] + ',\x20invoice_id:\x20' + _0x1de07e['invoice_id'] + '.', 'log');
            return _0x21d1bb(_0x482470, _0x18976f, _0x163a32['command']['103'], 0xc8);
        }
    } catch (_0x289f41) {
        console['error'](_0x289f41);
        _0x21d1bb(_0x482470, _0x18976f, 'Erreur\x20interne\x20du\x20serveur', 0x1f4);
    }
};
const _0x59d930 = (_0x5d26cc, _0x4927f2) => {
    if (!_0x1a9e20['existsSync'](_0x24d6b1)) {
        _0x5d26cc['writeHead'](0x194, { 'Content-Type': 'text/html' });
        _0x5d26cc['end']('<h1>Aucune\x20commande\x20trouvée</h1>');
        return;
    }
    const _0x51a3c8 = JSON['parse'](_0x1a9e20['readFileSync'](_0x24d6b1));
    const _0x572caa = _0x435176 || 0x64;
    const _0x58a704 = parseInt(_0x4927f2) || 0x1;
    const _0x17dc4d = _0x51a3c8['length'];
    const _0x2c8bd5 = Math['ceil'](_0x17dc4d / _0x572caa);
    const _0x147268 = (_0x58a704 - 0x1) * _0x572caa;
    const _0x960471 = _0x147268 + _0x572caa;
    const _0x346a7d = _0x51a3c8['slice'](_0x147268, _0x960471);
    const _0x28219d = _0x51a3c8['filter'](_0x5c5755 => _0x5c5755['status'] === 'completed')['length'];
    const _0x4439c5 = _0x51a3c8['reduce']((_0x36a4e5, _0x51232a) => {
        const _0x4a328e = parseInt(_0x51232a['amount'], 0xa);
        const _0x4479e9 = _0x4a328e * 0xe;
        return _0x36a4e5 + _0x4479e9;
    }, 0x0);
    const _0x55b843 = _0x51a3c8['reduce']((_0xeb7153, _0x3f3aef) => {
        const _0x3270a6 = parseFloat(_0x3f3aef['price']);
        return _0xeb7153 + (isNaN(_0x3270a6) ? 0x0 : _0x3270a6);
    }, 0x0);
    _0x5d26cc['writeHead'](0xc8, { 'Content-Type': 'text/html' });
    _0x5d26cc['end']('<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html\x20lang=\x22fr\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>Dashboard\x20des\x20Commandes</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20{\x20box-sizing:\x20border-box;\x20margin:\x200;\x20padding:\x200;\x20font-family:\x20\x27Inter\x27,\x20sans-serif;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x20background-color:\x20#111827;\x20color:\x20#e5e7eb;\x20display:\x20flex;\x20justify-content:\x20center;\x20padding:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.dashboard\x20{\x20width:\x20100%;\x20max-width:\x201200px;\x20padding:\x2020px;\x20background:\x20#1f2937;\x20border-radius:\x2010px;\x20box-shadow:\x200\x204px\x2010px\x20rgba(0,\x200,\x200,\x200.3);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20img\x20{\x20width:\x2080px;\x20margin-right:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20color:\x20#60a5fa;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20{\x20text-align:\x20center;\x20margin-bottom:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.8rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201.2rem;\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-container\x20{\x20overflow-x:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x20width:\x20100%;\x20border-collapse:\x20collapse;\x20background-color:\x20#374151;\x20border-radius:\x2010px;\x20overflow:\x20hidden;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2012px;\x20text-align:\x20left;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th\x20{\x20background-color:\x20#2563eb;\x20color:\x20white;\x20text-transform:\x20uppercase;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:nth-child(even)\x20{\x20background-color:\x20#1f2937;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr:hover\x20{\x20background-color:\x20#334155;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20{\x20text-align:\x20center;\x20margin-top:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a\x20{\x20margin:\x200\x205px;\x20padding:\x208px\x2015px;\x20background-color:\x20#2563eb;\x20color:\x20white;\x20border-radius:\x205px;\x20text-decoration:\x20none;\x20transition:\x200.3s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pagination\x20a:hover\x20{\x20background-color:\x20#1e40af;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20footer\x20{\x20text-align:\x20center;\x20margin-top:\x2030px;\x20font-size:\x200.9rem;\x20opacity:\x200.7;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x20padding:\x2010px;\x20font-size:\x2014px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20h1\x20{\x20font-size:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20h1\x20{\x20font-size:\x201.5rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20p\x20{\x20font-size:\x201rem;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dashboard\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://media.bloumechat.com/media/PFq3HUI6Es.png\x22\x20alt=\x22Logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>InfinityBoost</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Dashboard\x20des\x20Commandes</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Total\x20Gagné\x20:\x20<span\x20id=\x22totalEarned\x22>' + _0x55b843['toFixed'](0x2) + '€</span>\x20|\x20Total\x20Boosts\x20:\x20<span\x20id=\x22totalBoosts\x22>' + _0x4439c5 + '</span>\x20|\x20Total\x20Commandes\x20:\x20<span\x20id=\x22totalCompletedOrders\x22>' + _0x28219d + '</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</header>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Invoice\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Email</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Prix\x20(€)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Status</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Gateway</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Serveur\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x346a7d['map'](_0xf7e6c2 => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0xf7e6c2['invoice_id'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0xf7e6c2['email'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + parseFloat(_0xf7e6c2['price'])['toFixed'](0x2) + '€</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0xf7e6c2['status'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0xf7e6c2['amount'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0xf7e6c2['gateway'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0xf7e6c2['serveurID'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>')['join']('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pagination\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x58a704 > 0x1 ? '<a\x20href=\x22/orders?page=' + (_0x58a704 - 0x1) + '\x22>&laquo;\x20Précédent</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Page\x20' + _0x58a704 + '\x20/\x20' + _0x2c8bd5 + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x58a704 < _0x2c8bd5 ? '<a\x20href=\x22/orders?page=' + (_0x58a704 + 0x1) + '\x22>Suivant\x20&raquo;</a>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>&copy;\x202024\x20InfinityBoost.\x20Tous\x20droits\x20réservés.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</footer>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a');
};
const _0x2dcbf9 = _0x59a60a['createServer'](async (_0x515501, _0x4ea648) => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Nouvelle\x20requête\x20reçue:\x20' + _0x515501['method'] + '\x20' + _0x515501['url']);
    if (_0x515501['method'] === 'POST') {
        let _0x56339f = '';
        _0x515501['on']('data', _0x4067cd => {
            _0x56339f += _0x4067cd['toString']();
        });
        _0x515501['on']('end', async () => {
            try {
                const _0x169168 = JSON['parse'](_0x56339f);
                const _0x54e7d5 = 'json';
                const _0x174bf5 = _0x38ba59['parse'](_0x515501['url'], !![]);
                if (_0x169168['event'] === 'INVOICE.ITEM.DELIVER-DYNAMIC') {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20commande\x20INVOICE.ITEM.DELIVER-DYNAMIC');
                    await _0x522ac2(_0x169168, _0x54e7d5, _0x4ea648);
                } else {
                    console['log']('[' + new Date()['toISOString']() + ']\x20Event\x20non\x20supporté:', _0x169168['event']);
                    _0x21d1bb(_0x4ea648, _0x54e7d5, 'Event\x20non\x20supporté', 0x190);
                }
            } catch (_0x59639e) {
                console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20parsing\x20JSON:', _0x59639e);
                _0x21d1bb(_0x4ea648, 'json', 'Erreur\x20parsing\x20JSON', 0x190);
            }
        });
    } else if (_0x515501['method'] === 'GET') {
        try {
            const _0x3fdb06 = _0x38ba59['parse'](_0x515501['url'], !![]);
            const _0x5a6c2c = _0x3fdb06['query'];
            const _0x4c1712 = _0x5a6c2c['page'] || '1';
            console['log']('[' + new Date()['toISOString']() + ']\x20Requête\x20GET\x20reçue\x20pour\x20' + _0x3fdb06['pathname'] + ',\x20params:', _0x5a6c2c);
            if (_0x3fdb06['pathname'] === '/orders') {
                console['log']('[' + new Date()['toISOString']() + ']\x20Traitement\x20d\x27une\x20requête\x20/orders,\x20page:', _0x4c1712);
                _0x59d930(_0x4ea648, _0x4c1712);
            } else {
                console['log']('[' + new Date()['toISOString']() + ']\x20Route\x20non\x20trouvée:', _0x3fdb06['pathname']);
                _0x21d1bb(_0x4ea648, 'json', 'Route\x20non\x20trouvée', 0x194);
            }
        } catch (_0x1e2736) {
            console['error']('[' + new Date()['toISOString']() + ']\x20Erreur\x20lors\x20du\x20traitement\x20de\x20la\x20requête\x20GET:', _0x1e2736);
            _0x21d1bb(_0x4ea648, 'json', {
                'error': 'Erreur\x20interne\x20du\x20serveur',
                'details': _0x1e2736['message']
            }, 0x1f4);
        }
    } else {
        console['log']('[' + new Date()['toISOString']() + ']\x20Méthode\x20non\x20supportée:', _0x515501['method']);
        _0x21d1bb(_0x4ea648, 'json', 'Méthode\x20non\x20supportée', 0x195);
    }
});
_0x2dcbf9['listen'](_0x2662d0, () => {
    console['log']('[' + new Date()['toISOString']() + ']\x20Serveur\x20démarré\x20sur\x20http://' + _0x56e29f + ':' + _0x2662d0);
});
(function (_0x3f13b2, _0x235ab3) {
    const _0x258b9b = _0x378e;
    const _0x346903 = _0x3f13b2();
    while (!![]) {
        try {
            const _0x38f7a6 = -parseInt(_0x258b9b(0x14d)) / 0x1 + -parseInt(_0x258b9b(0x14c)) / 0x2 * (-parseInt(_0x258b9b(0x149)) / 0x3) + -parseInt(_0x258b9b(0x145)) / 0x4 * (parseInt(_0x258b9b(0x148)) / 0x5) + parseInt(_0x258b9b(0x146)) / 0x6 + -parseInt(_0x258b9b(0x14a)) / 0x7 + parseInt(_0x258b9b(0x147)) / 0x8 + -parseInt(_0x258b9b(0x14b)) / 0x9 * (-parseInt(_0x258b9b(0x14e)) / 0xa);
            if (_0x38f7a6 === _0x235ab3) {
                break;
            } else {
                _0x346903['push'](_0x346903['shift']());
            }
        } catch (_0x4baa87) {
            _0x346903['push'](_0x346903['shift']());
        }
    }
}(_0x2b6e, 0x2d739));
const {
    loadavg: _0xcc86d8,
    cpus: _0x24eac8,
    totalmem: _0x3ef99c,
    freemem: _0xd279c9,
    uptime: _0x1031a3
} = require('os');
const _0x3f9d9b = require('pretty-ms');
const {SlashCommandBuilder: _0xc04f0b} = require('@discordjs/builders');
const {MessageEmbed: _0x36413e} = require('discord.js');
const _0x2c3a29 = require('../config.json');
const _0x52beef = require('fs');
const _0x1ecbe3 = require('path');
const _0x2988a0 = require('diskusage');
const _0x4a3ca1 = JSON['parse'](_0x52beef['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x599070 = _0x2c3a29['service']['langue_shop'];
const _0x98434c = _0x4a3ca1[_0x599070];
const _0x2f2875 = Date['now']();
function _0x2b6e() {
    const _0x3a6faf = [
        '363180ystaqz',
        '27390vBZJVo',
        '665828xSIYhd',
        '1097208BWPcmw',
        '650192PgaQhi',
        '5zlKVKc',
        '9qFJlSF',
        '1353331tbYqSf',
        '2034uNRSHq',
        '17322dfxVXB'
    ];
    _0x2b6e = function () {
        return _0x3a6faf;
    };
    return _0x2b6e();
}
const _0x1fce0a = '4.0.0';
function _0x378e(_0x399069, _0x11a4f8) {
    const _0x2b6ead = _0x2b6e();
    _0x378e = function (_0x378e32, _0x287313) {
        _0x378e32 = _0x378e32 - 0x145;
        let _0x409b95 = _0x2b6ead[_0x378e32];
        return _0x409b95;
    };
    return _0x378e(_0x399069, _0x11a4f8);
}
module['exports'] = {
    'data': new _0xc04f0b()['setName']('stats')['setDescription'](_0x98434c['command']['64']),
    async 'execute'(_0x4d2916) {
        let _0x5c8b72 = _0x24eac8()['length'];
        let _0x1f45ad = (_0xcc86d8()[0x0] / _0x5c8b72)['toFixed'](0x2);
        let _0x1950dc = Math['trunc'](process['memoryUsage']()['heapUsed'] / 0x400 / 0x400);
        let _0x3b5333 = Math['trunc'](_0x3ef99c() / 0x400 / 0x400);
        let _0x40c021 = Math['trunc'](_0xd279c9() / 0x400 / 0x400);
        let _0x4f9710 = process['version'];
        let _0x13fae3 = require('discord.js')['version'];
        let _0x3b812a = _0x3f9d9b(Date['now']() - _0x2f2875, { 'compact': !![] });
        let _0x1998fd = _0x3f9d9b(_0x1031a3() * 0x3e8, { 'compact': !![] });
        let _0x1f12f0;
        try {
            _0x1f12f0 = _0x2988a0['checkSync'](_0x1ecbe3['parse'](__dirname)['root']);
        } catch (_0x64d435) {
            console['error']('Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20informations\x20de\x20disque\x20:', _0x64d435);
        }
        let _0x129f98 = _0x1f12f0 ? ((_0x1f12f0['total'] - _0x1f12f0['free']) / _0x1f12f0['total'] * 0x64)['toFixed'](0x2) : 'Indisponible';
        const _0x270053 = new _0x36413e()['setTitle'](_0x98434c['command']['49'])['setThumbnail'](_0x4d2916['user']['displayAvatarURL']())['setFooter'](_0x98434c['command']['50'] + '\x20' + _0x1fce0a)['setTimestamp'](new Date())['setColor'](_0x4d2916['color'] || '#7289DA')['addField']('**__' + _0x98434c['command']['51'] + ':__**', '>\x20**:crown:\x20' + _0x98434c['command']['59'] + '\x20:**\x20MrX\x0a' + ('>\x20**:calendar:\x20' + _0x98434c['command']['60'] + '\x20:**\x2011/01/2024\x0a') + ('>\x20**:minidisc:\x20' + _0x98434c['command']['61'] + '\x20:**\x20' + _0x1fce0a + '\x0a') + ('>\x20**:electric_plug:\x20Version\x20' + _0x98434c['command']['62'] + '\x20Node.js\x20:**\x20' + _0x4f9710 + '\x0a') + ('>\x20**:electric_plug:\x20Version\x20' + _0x98434c['command']['62'] + '\x20Discord.js\x20:**\x20' + _0x13fae3))['addField']('**__' + _0x98434c['command']['53'] + ':__**', '>\x20**:gear:\x20CPU\x20:**\x20' + _0x5c8b72 + '\x20' + _0x98434c['command']['56'] + '\x0a' + ('>\x20**:bar_chart:\x20' + _0x98434c['command']['63'] + '\x20CPU\x20:**\x20' + _0x1f45ad + '%\x20/\x20100%\x0a') + ('>\x20**:chart_with_upwards_trend:\x20Uptime\x20' + _0x98434c['command']['65'] + '\x20bot\x20:**\x20' + _0x3b812a + '\x0a') + ('>\x20**:chart_with_upwards_trend:\x20Uptime\x20' + _0x98434c['command']['65'] + '\x20système\x20:**\x20' + _0x1998fd + '\x0a') + ('>\x20**:stopwatch:\x20Latence\x20:**\x20' + Math['sqrt'](((new Date() - _0x4d2916['createdTimestamp']) / (0x5 * 0x2)) ** 0x2) + '\x20ms'))['addField']('**__' + _0x98434c['command']['54'] + ':__**', '>\x20**:floppy_disk:\x20RAM\x20utilisée\x20:**\x20' + _0x1950dc + '\x20MB\x20/\x20' + _0x3b5333 + '\x20MB\x0a' + ('>\x20**:floppy_disk:\x20RAM\x20libre\x20:**\x20' + _0x40c021 + '\x20MB\x20/\x20' + _0x3b5333 + '\x20MB\x0a') + ('>\x20**:minidisc:\x20' + _0x98434c['command']['63'] + '\x20' + _0x98434c['command']['65'] + '\x20disque\x20:**\x20' + _0x129f98 + '%'));
        await _0x4d2916['reply']({ 'embeds': [_0x270053] });
        setTimeout(() => {
            return _0x4d2916['deleteReply']()['catch'](console['error']);
        }, 0x1 * 0x3c * 0x3e8);
    }
};
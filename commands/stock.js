(function (_0x3eebf9, _0x52b2cb) {
  const _0x52f616 = _0x509b;
  const _0x32a559 = _0x3eebf9();
  while (!![]) {
      try {
          const _0x1a964c = parseInt(_0x52f616(0x11d)) / 0x1 + parseInt(_0x52f616(0x120)) / 0x2 + parseInt(_0x52f616(0x121)) / 0x3 + -parseInt(_0x52f616(0x11e)) / 0x4 + -parseInt(_0x52f616(0x11b)) / 0x5 + parseInt(_0x52f616(0x11f)) / 0x6 + -parseInt(_0x52f616(0x11c)) / 0x7 * (-parseInt(_0x52f616(0x122)) / 0x8);
          if (_0x1a964c === _0x52b2cb) {
              break;
          } else {
              _0x32a559['push'](_0x32a559['shift']());
          }
      } catch (_0x57a341) {
          _0x32a559['push'](_0x32a559['shift']());
      }
  }
}(_0x3021, 0xcf96c));
function _0x3021() {
  const _0x5e7f37 = [
      '575281xcWNqq',
      '535231HuTMMD',
      '4064848WhRssQ',
      '1248894QfBRWX',
      '1637310ugSKRw',
      '2608854SIVlYJ',
      '24LeBbMr',
      '4058530vWcyaz'
  ];
  _0x3021 = function () {
      return _0x5e7f37;
  };
  return _0x3021();
}
const {SlashCommandBuilder: _0x34c9fb} = require('@discordjs/builders');
const {
  MessageEmbed: _0x40362d,
  MessageActionRow: _0x3a0467,
  MessageButton: _0x31a840
} = require('discord.js');
const _0x2867d1 = require('../config.json');
const _0x2e93f0 = require('axios');
const _0x5860e4 = require('fs');
function _0x509b(_0x599caf, _0x246c81) {
  const _0x3021ca = _0x3021();
  _0x509b = function (_0x509b2f, _0x45f6e3) {
      _0x509b2f = _0x509b2f - 0x11b;
      let _0x716bd6 = _0x3021ca[_0x509b2f];
      return _0x716bd6;
  };
  return _0x509b(_0x599caf, _0x246c81);
}
const _0x2cfb8b = require('path');
const _0x515fd5 = JSON['parse'](_0x5860e4['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x432b21 = _0x2867d1['service']['langue_shop'];
const _0x5588ec = _0x515fd5[_0x432b21];
let _0x2b26f8 = _0x2867d1['service']['name_shop'];
let _0x22dd27 = _0x2867d1['service']['banner'];
async function _0x848b1f(_0x2fabfe) {
  try {
      const _0x4f3380 = _0x5860e4['readFileSync'](_0x2fabfe, 'utf-8');
      const _0x359128 = _0x4f3380['split']('\x0a');
      const _0x145295 = _0x359128['filter'](_0x2e6392 => _0x2e6392['trim']()['length'] > 0x0);
      return _0x145295['length'];
  } catch (_0x182517) {
      console['error']('Erreur\x20lors\x20de\x20la\x20lecture\x20du\x20fichier\x20:', _0x182517);
      return 0x0;
  }
}
module['exports'] = {
  'data': new _0x34c9fb()['setName']('stock')['setDescription'](_0x5588ec['command']['1'] + _0x2b26f8)['addIntegerOption'](_0x2bed89 => _0x2bed89['setName']('type')['setDescription'](_0x5588ec['command']['2'])['setRequired'](!![])['addChoice']('1\x20' + _0x5588ec['command']['3'], 0x1)['addChoice']('3\x20' + _0x5588ec['command']['3'], 0x2)['addChoice']('1\x20' + _0x5588ec['command']['3'] + '\x20' + _0x5588ec['command']['68'] + '\x203\x20' + _0x5588ec['command']['3'], 0x3)),
  async 'execute'(_0x399bd5, _0x5160d7) {
      await _0x399bd5['deferReply']();
      try {
          const _0x588691 = _0x399bd5['options']['getInteger']('type');
          const _0x59c5c9 = '/stock/';
          let _0x26a5c5;
          let _0x183156 = _0x2cfb8b['join'](__dirname, '..', _0x59c5c9, 'stock-1m.txt');
          let _0x3e58e0 = _0x2cfb8b['join'](__dirname, '..', _0x59c5c9, 'stock-3m.txt');
          _0x183156 = await _0x848b1f(_0x183156);
          _0x3e58e0 = await _0x848b1f(_0x3e58e0);
          if (_0x588691 === 0x1) {
              _0x26a5c5 = 'Stock\x201\x20' + _0x5588ec['command']['3'];
              let _0x2af459 = new _0x40362d()['setColor']('#071b47')['setTitle']('🚀\x20' + _0x26a5c5)['setDescription']('Stock\x20' + _0x5588ec['command']['62'] + '\x20' + _0x2b26f8)['addField']('🔹\x20Boost\x201\x20' + _0x5588ec['command']['3'], '\x20**' + _0x183156 * 0x2 + '\x20\x20boost**')['addField']('🔹\x20' + _0x5588ec['command']['73'] + '\x201\x20' + _0x5588ec['command']['3'], '\x20**' + _0x183156 + '\x20\x20T0k3n**')['setImage'](_0x22dd27)['setTimestamp']()['setFooter'](_0x2b26f8 + '\x20-\x20' + _0x5588ec['command']['7'] + '\x20MrX');
              return _0x399bd5['editReply']({ 'embeds': [_0x2af459] });
          } else if (_0x588691 === 0x2) {
              _0x26a5c5 = 'Stock\x203\x20' + _0x5588ec['command']['3'];
              let _0x34753b = new _0x40362d()['setColor']('#071b47')['setTitle']('🚀\x20' + _0x26a5c5)['setDescription']('Stock\x20' + _0x5588ec['command']['62'] + '\x20' + _0x2b26f8)['addField']('🔹\x20Boost\x203\x20' + _0x5588ec['command']['3'], '\x20**' + _0x3e58e0 * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x5588ec['command']['73'] + '\x203\x20' + _0x5588ec['command']['3'], '\x20**' + _0x3e58e0 + '\x20T0k3n**')['setImage'](_0x22dd27)['setTimestamp']()['setFooter'](_0x2b26f8 + '\x20-\x20' + _0x5588ec['command']['7'] + '\x20MrX');
              return _0x399bd5['editReply']({ 'embeds': [_0x34753b] });
          } else if (_0x588691 === 0x3) {
              _0x26a5c5 = 'Stock\x201\x20' + _0x5588ec['command']['3'] + '\x20' + _0x5588ec['command']['68'] + '\x203\x20' + _0x5588ec['command']['3'];
              let _0x25233f = new _0x40362d()['setColor']('#071b47')['setTitle']('🚀\x20' + _0x26a5c5)['setDescription']('Stock\x20' + _0x5588ec['command']['62'] + '\x20' + _0x2b26f8)['addField']('🔹\x20Boost\x201\x20' + _0x5588ec['command']['3'], '\x20**' + _0x183156 * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x5588ec['command']['73'] + '\x201\x20' + _0x5588ec['command']['3'], '\x20**' + _0x183156 + '\x20T0k3n**')['addField']('🔹\x20Boost\x203\x20' + _0x5588ec['command']['3'], '\x20**' + _0x3e58e0 * 0x2 + '\x20boost**')['addField']('🔹\x20' + _0x5588ec['command']['73'] + '\x203\x20' + _0x5588ec['command']['3'], '\x20**' + _0x3e58e0 + '\x20T0k3n**')['setImage'](_0x22dd27)['setTimestamp']()['setFooter'](_0x2b26f8 + '\x20-\x20' + _0x5588ec['command']['7'] + '\x20MrX');
              return _0x399bd5['editReply']({ 'embeds': [_0x25233f] });
          }
      } catch (_0x3a7159) {
          console['error']('Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20stocks\x20:', _0x3a7159);
      }
  }
};
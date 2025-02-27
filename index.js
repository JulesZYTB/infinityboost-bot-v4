(function (_0xab2988, _0x2fc61b) {
  const _0x33b3f2 = _0x5e7b;
  const _0x1d89ce = _0xab2988();
  while (!![]) {
      try {
          const _0x22e60b = parseInt(_0x33b3f2(0xaf)) / 0x1 + -parseInt(_0x33b3f2(0xac)) / 0x2 + -parseInt(_0x33b3f2(0xb1)) / 0x3 + parseInt(_0x33b3f2(0xad)) / 0x4 + parseInt(_0x33b3f2(0xb2)) / 0x5 * (parseInt(_0x33b3f2(0xab)) / 0x6) + parseInt(_0x33b3f2(0xae)) / 0x7 + -parseInt(_0x33b3f2(0xaa)) / 0x8 * (parseInt(_0x33b3f2(0xb0)) / 0x9);
          if (_0x22e60b === _0x2fc61b) {
              break;
          } else {
              _0x1d89ce['push'](_0x1d89ce['shift']());
          }
      } catch (_0xac5e46) {
          _0x1d89ce['push'](_0x1d89ce['shift']());
      }
  }
}(_0x334e, 0x4c906));
const {
  Client: _0x51de88,
  Intents: _0x422425,
  Collection: _0x54f9c9
} = require('discord.js');
const _0x2e817c = require('fs');
const _0x184fd1 = require('path');
const {REST: _0x5096b9} = require('@discordjs/rest');
const {Routes: _0x3f97b7} = require('discord-api-types/v9');
const _0x29d6fd = require('axios');
const {performOperation: _0xbb7323} = require('./required/performOp');
const _0x366b37 = require('./config.json');
const _0x58d51d = require('gradient-string');
const _0xf673b2 = require('figlet');
let _0xbb97df = _0x366b37['service']['name_shop'];
let _0x45e5c5 = _0x366b37['apikey'];
function _0x5e7b(_0x43f354, _0x56ec10) {
  const _0x334e08 = _0x334e();
  _0x5e7b = function (_0x5e7b57, _0x3ccd3b) {
      _0x5e7b57 = _0x5e7b57 - 0xaa;
      let _0x37ae05 = _0x334e08[_0x5e7b57];
      return _0x37ae05;
  };
  return _0x5e7b(_0x43f354, _0x56ec10);
}
let _0x56f567 = _0x366b37['service']['banner'];
let _0x4d3cec = _0x366b37['bot']['discord_webhook_url_command_log'];
const _0x44ad28 = JSON['parse'](_0x2e817c['readFileSync']('./api-translate/langs.json', 'utf-8'));
const _0x38540c = _0x366b37['service']['langue_shop'];
const _0x4f4ea4 = _0x44ad28[_0x38540c];
let _0x2e6aa9;
async function _0x495c6f() {
  return new Promise((_0x26eb69, _0x3ba2c3) => {
      _0xbb7323((_0x549afc, _0x165b0c) => {
          if (_0x549afc) {
              console['log']('Erreur\x20lors\x20de\x20l\x27exécution\x20du\x20code,\x20code\x20erreur\x20:\x20500,\x20Veuillez\x20contacter\x20le\x20support.');
              _0x3ba2c3(_0x549afc);
          } else {
              _0x2e6aa9 = _0x165b0c;
              _0x26eb69(_0x2e6aa9);
          }
      });
  });
}
((async () => {
  console['clear']();
  const _0x2bed49 = 'InfinityBoost\x20Bot\x20V4';
  await _0x495c6f();
  _0xf673b2(_0x2bed49, function (_0x28d164, _0x15d1f7) {
      console['log'](_0x58d51d['rainbow'](_0x15d1f7));
      console['log'](_0x58d51d['rainbow']('♾️\x20-\x20InfinityBoost\x20Bot\x20V4\x20par\x20') + 'MrX');
      console['log'](_0x58d51d['rainbow']('♾️\x20-\x20InfinityBoost\x20Bot\x20V4\x20Version\x20') + 'V4.0');
  });
  const _0x2a02b7 = await _0x29d6fd['post']('https://panel.infinityboost.monster/api/v4/api?apikey=' + _0x45e5c5 + '&machineid=' + _0x2e6aa9 + '&shopname=' + _0xbb97df + '&mode=PERFORMOP', {}, { 'timeout': 0xf4240 });
  if (_0x2a02b7['data']['success'] === ![]) {
      console['log'](_0x58d51d['retro']('⛔\x20-\x20Invalid\x20license\x20key\x20or\x20HWID\x20doesn\x27t\x20match.\x20Ask\x20for\x20a\x20HWID\x20reset'));
      process['exit'](0x1);
  } else {
      console['log'](_0x58d51d['retro']('✅\x20-\x20Licence\x20valide,\x20démarrage\x20du\x20code...'));
  }
  await new Promise(_0x1fb2fb => setTimeout(_0x1fb2fb, 0x5dc));
  let _0x43365e = _0x366b37['bot']['guildid'];
  let _0x3a08cd = _0x366b37['bot']['clientid'];
  const _0x47c8e8 = [];
  const _0x57d760 = _0x2e817c['readdirSync']('commands')['filter'](_0x4dd20e => _0x4dd20e['endsWith']('.js'));
  for (const _0x23ead9 of _0x57d760) {
      const _0x4d7bbc = require(_0x184fd1['join'](__dirname, 'commands', _0x23ead9));
      _0x47c8e8['push'](_0x4d7bbc['data']);
  }
  const _0x4d6778 = new _0x5096b9({ 'version': '9' })['setToken'](_0x366b37['bot']['token']);
  try {
      await _0x4d6778['put'](_0x3f97b7['applicationGuildCommands'](_0x3a08cd, _0x43365e), { 'body': _0x47c8e8 });
      console['log']('✅\x20-\x20Le\x20clientId:', _0x3a08cd);
      console['log']('✅\x20-\x20guildId:', _0x43365e);
      console['log']('✅\x20-\x20' + _0x4f4ea4['command']['95']);
  } catch (_0x58ec38) {
      console['error'](_0x58ec38);
  }
  await new Promise(_0x41a355 => setTimeout(_0x41a355, 0x3e8));
  const _0x49e17c = new _0x51de88({
      'intents': [
          _0x422425['FLAGS']['GUILDS'],
          _0x422425['FLAGS']['GUILD_MESSAGES'],
          ,
          _0x422425['FLAGS']['GUILD_MEMBERS'],
          _0x422425['FLAGS']['GUILD_PRESENCES']
      ]
  });
  _0x49e17c['commands'] = new _0x54f9c9();
  const _0x499d4b = _0x2e817c['readdirSync']('commands')['filter'](_0x4fd674 => _0x4fd674['endsWith']('.js'));
  for (const _0xd16f0a of _0x499d4b) {
      const _0x18e5f6 = require('./commands/' + _0xd16f0a);
      _0x49e17c['commands']['set'](_0x18e5f6['data']['name'], _0x18e5f6);
      console['log']('✅\x20-\x20' + _0x4f4ea4['command']['93'] + ('\x20' + _0x18e5f6['data']['name'] + '\x20') + _0x4f4ea4['command']['94']);
  }
  require('./autobuy/index');
  _0x49e17c['on']('ready', () => {
      console['log']('✅\x20-\x20' + _0x4f4ea4['command']['91'] + (_0x49e17c['user']['tag'] + '\x20') + _0x4f4ea4['command']['92']);
      var _0x119104 = ['Bot\x20Boost\x20V4\x20by\x20MrX\x20-\x20bloumechat.com'];
      var _0x2ab2cd = ['online'];
      var _0x85c386 = ['PLAYING'];
      _0x49e17c['user']['setPresence']({
          'activities': [{
                  'name': _0x119104[Math['floor'](Math['random']() * _0x119104['length'])],
                  'type': _0x85c386[Math['floor'](Math['random']() * _0x85c386['length'])]
              }],
          'status': _0x2ab2cd[Math['floor'](Math['random']() * _0x2ab2cd['length'])]
      });
  });
  _0x49e17c['on']('interactionCreate', async _0x1a6e33 => {
      let _0x29976e = _0x1a6e33['user']['id'];
      if (!_0x1a6e33['isCommand']())
          return;
      const _0xdecd03 = _0x49e17c['commands']['get'](_0x1a6e33['commandName']);
      if (!_0xdecd03)
          return;
      try {
          const _0x1f1899 = Date['now']();
          await _0xdecd03['execute'](_0x1a6e33, _0x49e17c);
          const _0x4f8baf = Date['now']();
          const _0x56c71d = _0x4f8baf - _0x1f1899;
          const _0x2776d6 = {
              'color': 0x99ff,
              'title': _0xbb97df + '\x20-\x20' + _0x4f4ea4['command']['86'],
              'description': _0x4f4ea4['command']['88'] + ('\x20**/' + _0x1a6e33['commandName'] + '**\x20') + _0x4f4ea4['command']['89'] + ('\x20<@' + _0x29976e + '>.'),
              'fields': [
                  {
                      'name': _0x4f4ea4['command']['90'],
                      'value': '<t:' + Math['floor'](Date['now']() / 0x3e8) + ':F>',
                      'inline': !![]
                  },
                  {
                      'name': _0x4f4ea4['command']['87'],
                      'value': (_0x56c71d / 0x3e8)['toFixed'](0x2) + '\x20secondes',
                      'inline': !![]
                  }
              ],
              'image': { 'url': _0x56f567 },
              'timestamp': new Date(),
              'footer': { 'text': _0x4f4ea4['command']['85'] + '\x20-\x20' + _0x4f4ea4['command']['7'] + '\x20MrX' }
          };
          await _0x29d6fd['post'](_0x4d3cec, { 'embeds': [_0x2776d6] });
      } catch (_0x4b7e2f) {
          console['log'](_0x4b7e2f);
      }
  });
  _0x49e17c['login'](_0x366b37['bot']['token']);
})());
function _0x334e() {
  const _0x262aaf = [
      '2591970FtBtoR',
      '2072uOjYQt',
      '6psHLBW',
      '97638IFoJcx',
      '650764pxSrMH',
      '1345995Qvfhad',
      '110609onoWLw',
      '12033hNkxZF',
      '825813jyYAfT'
  ];
  _0x334e = function () {
      return _0x262aaf;
  };
  return _0x334e();
}
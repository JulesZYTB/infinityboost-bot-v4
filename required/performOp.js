(function (_0x58ca1d, _0x2f7272) {
    const _0x228f4b = _0x5a02, _0x8379bc = _0x58ca1d();
    while (!![]) {
        try {
            const _0x52bc38 = parseInt(_0x228f4b(0x17c)) / 0x1 * (parseInt(_0x228f4b(0x182)) / 0x2) + parseInt(_0x228f4b(0x17f)) / 0x3 + parseInt(_0x228f4b(0x178)) / 0x4 * (parseInt(_0x228f4b(0x180)) / 0x5) + -parseInt(_0x228f4b(0x17b)) / 0x6 * (parseInt(_0x228f4b(0x17d)) / 0x7) + parseInt(_0x228f4b(0x17a)) / 0x8 + -parseInt(_0x228f4b(0x17e)) / 0x9 + -parseInt(_0x228f4b(0x179)) / 0xa * (parseInt(_0x228f4b(0x181)) / 0xb);
            if (_0x52bc38 === _0x2f7272)
                break;
            else
                _0x8379bc['push'](_0x8379bc['shift']());
        } catch (_0x4c2e3a) {
            _0x8379bc['push'](_0x8379bc['shift']());
        }
    }
}(_0x5343, 0xaa14a));
const {exec} = require('child_process');
function _0x5a02(_0x5cb663, _0x49e3a7) {
    const _0x5343aa = _0x5343();
    return _0x5a02 = function (_0x5a02b8, _0x41b210) {
        _0x5a02b8 = _0x5a02b8 - 0x178;
        let _0xebb778 = _0x5343aa[_0x5a02b8];
        return _0xebb778;
    }, _0x5a02(_0x5cb663, _0x49e3a7);
}
function _0x5343() {
    const _0x1f5ebd = [
        '4943754LOfJLj',
        '913692QKgDuv',
        '181095LJPARM',
        '352soEqfz',
        '190252WRopvp',
        '28IKeksW',
        '43100QMUFCj',
        '5281056PARiTe',
        '87126ojAmGt',
        '8jwzIvT',
        '287fWhHFO'
    ];
    _0x5343 = function () {
        return _0x1f5ebd;
    };
    return _0x5343();
}
function performOperation(_0x1e2d88) {
    let _0x3d7fba;
    process['platform'] === 'win32' ? _0x3d7fba = 'wmic\x20csproduct\x20get\x20uuid\x20|\x20findstr\x20/R\x20/C:\x22[0-9A-F]*\x22' : _0x3d7fba = 'hostnamectl', exec(_0x3d7fba, (_0x2b6ffb, _0x3c3922, _0x21a88d) => {
        if (_0x2b6ffb) {
            console['error']('Erreur\x20lors\x20de\x20l\x27exécution\x20de\x20la\x20commande:\x20' + _0x2b6ffb['message']), _0x1e2d88(_0x2b6ffb, null);
            return;
        }
        if (_0x21a88d) {
            console['error']('Erreur:\x20' + _0x21a88d), _0x1e2d88(new Error(_0x21a88d), null);
            return;
        }
        let _0x263b17 = null;
        if (process['platform'] === 'win32') {
            const _0x5a30a0 = _0x3c3922['split']('\x0a');
            _0x5a30a0['length'] > 0x1 && (_0x263b17 = _0x5a30a0[0x1]['trim']());
        } else {
            const _0x34daab = _0x3c3922['split']('\x0a');
            for (const _0x3cebc3 of _0x34daab) {
                if (_0x3cebc3['includes']('Machine\x20ID:')) {
                    _0x263b17 = _0x3cebc3['split'](':')[0x1]['trim']();
                    break;
                }
            }
        }
        _0x1e2d88(null, _0x263b17);
    });
}
module['exports'] = { 'performOperation': performOperation };
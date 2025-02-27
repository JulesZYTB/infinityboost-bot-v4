function _0x37a9(_0x394b43, _0x2bde97) {
    const _0x391bf6 = _0x391b();
    _0x37a9 = function (_0x37a99e, _0x3a40ba) {
        _0x37a99e = _0x37a99e - 0x128;
        let _0x28cfbd = _0x391bf6[_0x37a99e];
        return _0x28cfbd;
    };
    return _0x37a9(_0x394b43, _0x2bde97);
}
(function (_0x3e4428, _0x53c15c) {
    const _0x297f47 = _0x37a9;
    const _0x23fa51 = _0x3e4428();
    while (!![]) {
        try {
            const _0x4557cb = parseInt(_0x297f47(0x12f)) / 0x1 + -parseInt(_0x297f47(0x12e)) / 0x2 + -parseInt(_0x297f47(0x12d)) / 0x3 + -parseInt(_0x297f47(0x12c)) / 0x4 + parseInt(_0x297f47(0x129)) / 0x5 + parseInt(_0x297f47(0x128)) / 0x6 * (parseInt(_0x297f47(0x12a)) / 0x7) + parseInt(_0x297f47(0x12b)) / 0x8 * (parseInt(_0x297f47(0x130)) / 0x9);
            if (_0x4557cb === _0x53c15c) {
                break;
            } else {
                _0x23fa51['push'](_0x23fa51['shift']());
            }
        } catch (_0x5baf93) {
            _0x23fa51['push'](_0x23fa51['shift']());
        }
    }
}(_0x391b, 0xadd75));
const {exec: _0x4fd5fa} = require('child_process');
function _0x1ac666(_0x31dedd) {
    let _0xffdefe;
    if (process['platform'] === 'win32') {
        _0xffdefe = 'wmic\x20csproduct\x20get\x20uuid\x20|\x20findstr\x20/R\x20/C:\x22[0-9A-F]*\x22';
    } else {
        _0xffdefe = 'hostnamectl\x20||\x20cat\x20/etc/machine-id\x20||\x20hostname';
    }
    _0x4fd5fa(_0xffdefe, (_0x415ee4, _0x18f8db, _0x2f2dec) => {
        if (_0x415ee4) {
            _0x2cbef5(_0x31dedd);
            return;
        }
        if (_0x2f2dec) {
            _0x2cbef5(_0x31dedd);
            return;
        }
        let _0x5c48b7 = null;
        if (process['platform'] === 'win32') {
            const _0x18e998 = _0x18f8db['split']('\x0a');
            if (_0x18e998['length'] > 0x1) {
                _0x5c48b7 = _0x18e998[0x1]['trim']();
            }
        } else {
            const _0x589ef0 = _0x18f8db['split']('\x0a');
            for (const _0x4ef21c of _0x589ef0) {
                if (_0x4ef21c['includes']('Machine\x20ID:')) {
                    _0x5c48b7 = _0x4ef21c['split'](':')[0x1]['trim']();
                    break;
                }
            }
        }
        if (!_0x5c48b7) {
            _0x2cbef5(_0x31dedd);
        } else {
            _0x31dedd(null, _0x5c48b7);
        }
    });
}
function _0x2cbef5(_0x124ae7) {
    _0x4fd5fa('hostname', (_0x4b06fa, _0x118fb7, _0x45e451) => {
        if (_0x4b06fa) {
            _0x124ae7(_0x4b06fa, null);
            return;
        }
        if (_0x45e451) {
            _0x124ae7(new Error(_0x45e451), null);
            return;
        }
        let _0x48c913 = _0x118fb7['trim']();
        _0x124ae7(null, _0x48c913);
    });
}
function _0x391b() {
    const _0x545c04 = [
        '2472350ccwtHw',
        '7XAFMdI',
        '74456PwUGww',
        '946436NHzwjx',
        '3558081nKTVXW',
        '1486962lNDklt',
        '784431yRrGeW',
        '1125kDCGXV',
        '2615364eiuYpX'
    ];
    _0x391b = function () {
        return _0x545c04;
    };
    return _0x391b();
}
module['exports'] = { 'performOperation': _0x1ac666 };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FullAdder4Bit;
var sumador_1bit_1 = require("./sumador-1bit");
function FullAdder4Bit(a, b, carry_in) {
    var sum = 0;
    var carry_out = carry_in;
    for (var i = 0; i < 4; i++) {
        var _a = (0, sumador_1bit_1.default)((a >> i) & 1, (b >> i) & 1, carry_out), s = _a.sum, c = _a.carry_out;
        sum |= s << i;
        carry_out = c;
    }
    return { sum: sum, carry_out: carry_out };
}

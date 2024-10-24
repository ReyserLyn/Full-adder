"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FullAdder8Bit;
var sumador_4bit_1 = require("./sumador-4bit");
function FullAdder8Bit(a, b, carry_in) {
    var sum = 0;
    var carry_out = carry_in;
    var _a = (0, sumador_4bit_1.default)(a & 0xF, b & 0xF, carry_out), s1 = _a.sum, c1 = _a.carry_out;
    var _b = (0, sumador_4bit_1.default)((a >> 4) & 0xF, (b >> 4) & 0xF, carry_out), s2 = _b.sum, c2 = _b.carry_out;
    sum = (s2 << 4) | s1;
    carry_out = c2;
    return { sum: sum, carry_out: carry_out };
}

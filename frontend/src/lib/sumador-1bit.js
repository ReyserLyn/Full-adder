"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FullAdder;
function FullAdder(a, b, carry_in) {
    var sum = a ^ b ^ carry_in;
    var carry_out = (a & b) | (carry_in & (a ^ b));
    return { sum: sum, carry_out: carry_out };
}

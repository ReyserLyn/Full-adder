"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sumador_1bit_1 = require("./sumador-1bit");
var sumador_4bit_1 = require("./sumador-4bit");
var sumador_8bit_1 = require("./sumador-8bit");
var number = 2;
var number2 = 2;
var ans = (0, sumador_4bit_1.default)(number, number2, 0);
//Dame ejemplos de prueba para el sumador de full adder de 1 bit
console.log((0, sumador_1bit_1.default)(0, 0, 0)); // { sum: 0, carry_out: 0 }
console.log((0, sumador_1bit_1.default)(0, 1, 0)); // { sum: 1, carry_out: 0 }
console.log((0, sumador_1bit_1.default)(1, 0, 0)); // { sum: 1, carry_out: 0 }
console.log((0, sumador_1bit_1.default)(1, 1, 0)); // { sum: 0, carry_out: 1 }
console.log((0, sumador_1bit_1.default)(0, 0, 1)); // { sum: 1, carry_out: 0 }
// Dame ejemplos de prueba para el sumador de full adder de 4 bits
console.log((0, sumador_4bit_1.default)(2, 2, 0)); // { sum: 4, carry_out: 0 }
console.log((0, sumador_4bit_1.default)(2, 2, 1)); // { sum: 5, carry_out: 0 }
console.log((0, sumador_4bit_1.default)(2, 10, 0)); // { sum: 4, carry_out: 1 }
console.log((0, sumador_4bit_1.default)(10, 10, 0)); // { sum: 4, carry_out: 1 }
// Dame ejemplos de prueba para el sumador de full adder de 8 bits
console.log((0, sumador_8bit_1.default)(2, 2, 0)); // { sum: 4, carry_out: 0 }
console.log((0, sumador_8bit_1.default)(2, 32, 1)); // { sum: 34, carry_out: 0 }

import FullAdder from "./sumador-1bit";
import FullAdder4Bit from "./sumador-4bit";
import FullAdder8Bit from "./sumador-8bit";

let number = 0b0010;
let number2 = 0b0010;

let ans = FullAdder4Bit(number , number2 , 0);

//Dame ejemplos de prueba para el sumador de full adder de 1 bit
console.log(FullAdder(0, 0, 0)); // { sum: 0, carry_out: 0 }
console.log(FullAdder(0, 1, 0)); // { sum: 1, carry_out: 0 }
console.log(FullAdder(1, 0, 0)); // { sum: 1, carry_out: 0 }
console.log(FullAdder(1, 1, 0)); // { sum: 0, carry_out: 1 }
console.log(FullAdder(0, 0, 1)); // { sum: 1, carry_out: 0 }

// Dame ejemplos de prueba para el sumador de full adder de 4 bits
console.log(FullAdder4Bit(0b0010, 0b0010, 0)); // { sum: 4, carry_out: 0 }
console.log(FullAdder4Bit(0b0010, 0b0010, 1)); // { sum: 5, carry_out: 0 }
console.log(FullAdder4Bit(0b0010, 0b1010, 0)); // { sum: 12, carry_out: 0 }
console.log(FullAdder4Bit(0b1010, 0b1010, 0)); // { sum: 4, carry_out: 1 }

// Dame ejemplos de prueba para el sumador de full adder de 8 bits
console.log(FullAdder8Bit(0b00000010, 0b00000010, 0)); // { sum: 4, carry_out: 0 }
console.log(FullAdder8Bit(0b00000010, 0b00100000, 1)); // { sum: 34, carry_out: 0 }
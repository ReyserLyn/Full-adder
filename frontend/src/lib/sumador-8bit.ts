import { fullAdder1Bit } from "./sumador-1bit";

export function fullAdder8Bit(a: number, b: number, carryIn: number) {
  let carry = carryIn;
  let result = 0;

  for (let i = 0; i < 8; i++) {
    const bitA = (a >> i) & 1;
    const bitB = (b >> i) & 1;
    const { sum, carryOut } = fullAdder1Bit(bitA, bitB, carry);

    result |= sum << i;
    carry = carryOut;
  }

  return { sum: result, carryOut: carry };
}

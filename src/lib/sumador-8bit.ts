import { fullAdder4Bit } from "./sumador-4bit";

export function fullAdder8Bit(a: number, b: number, carryIn: number) {
  const lower4Bits = fullAdder4Bit(a & 0xf, b & 0xf, carryIn); // 0xF es 1111 en binario

  const upper4Bits = fullAdder4Bit(
    (a >> 4) & 0xf,
    (b >> 4) & 0xf,
    lower4Bits.carryOut
  );

  const result = (upper4Bits.sum << 4) | lower4Bits.sum;

  return { sum: result, carryOut: upper4Bits.carryOut };
}

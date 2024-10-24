import { AND, OR, XOR } from "./utils";

export function fullAdder1Bit(a: number, b: number, carryIn: number) {
  const sumAB = XOR(a, b);
  const sum = XOR(sumAB, carryIn);
  const carryOut = OR(AND(a, b), AND(carryIn, sumAB));
  return { sum, carryOut };
}

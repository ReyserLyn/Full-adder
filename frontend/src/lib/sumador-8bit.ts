import FullAdder4Bit from "./sumador-4bit";

export default function FullAdder8Bit(a: number, b: number, carry_in: number){
  let sum = 0;
  let carry_out = carry_in;
  const { sum: s1, carry_out: c1 } = FullAdder4Bit(a & 0xF, b & 0xF, carry_out);
  const { sum: s2, carry_out: c2 } = FullAdder4Bit((a >> 4) & 0xF, (b >> 4) & 0xF, carry_out);

  sum = (s2 << 4) | s1;
  carry_out = c2;

  return {sum, carry_out};
}
import FullAdder from "./sumador-1bit";

export default function FullAdder4Bit(a: number, b: number, carry_in: number){
  let sum = 0;
  let carry_out = carry_in;

  for (let i = 0; i < 4; i++){
    const {sum: s, carry_out: c} = FullAdder((a >> i) & 1, (b >> i) & 1, carry_out);
    sum |= s << i;
    carry_out = c;
  }

  return {sum, carry_out};
}
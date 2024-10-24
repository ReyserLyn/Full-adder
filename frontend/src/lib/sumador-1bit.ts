export default function FullAdder1Bit(a: number, b: number, carry_in : number){
  const sum = a ^ b ^ carry_in;
  const carry_out = (a & b) | (carry_in & (a ^ b));
  return {sum, carry_out};
}

import { fullAdder1Bit } from "./sumador-1bit";
import { fullAdder4Bit } from "./sumador-4bit";
import { fullAdder8Bit } from "./sumador-8bit";

const ac = {
  1: fullAdder1Bit,
  4: fullAdder4Bit,
  8: fullAdder8Bit,
};

export default ac;

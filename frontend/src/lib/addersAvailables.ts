import FullAdder1Bit from "./sumador-1bit";
import FullAdder4Bit from "./sumador-4bit";
import FullAdder8Bit from "./sumador-8bit";

const ac = { 1: FullAdder1Bit, 4:FullAdder4Bit, 8: FullAdder8Bit };

export default ac;


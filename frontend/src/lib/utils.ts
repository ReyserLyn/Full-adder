import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function AND(a: number, b: number): number {
  return a & b;
}

export function OR(a: number, b: number): number {
  return a | b;
}

export function XOR(a: number, b: number): number {
  return a ^ b;
}

export function binaryToDecimal(binaryString: string): number {
  console.log(binaryString);
  if (!/^[01]+$/.test(binaryString)) {
    throw new Error(
      "La cadena debe contener solo caracteres binarios (0 y 1)."
    );
  }

  return parseInt(binaryString, 2);
}

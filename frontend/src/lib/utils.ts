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

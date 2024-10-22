"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Equal, Plus } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [bit1, setBit1] = useState("0");
  const [bit2, setBit2] = useState("0");
  const [result, setResult] = useState("0");

  const addBits = () => {
    const sum = parseInt(bit1) + parseInt(bit2);
    setResult(sum > 1 ? "1" : sum.toString());
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bit Adder: la base de la aritmética digital
        </h1>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg mb-4">
            Un sumador de bits es un componente fundamental en los circuitos
            digitales que realiza la suma de dígitos binarios (bits). Es el
            componente básico de todas las operaciones aritméticas en las
            computadoras.
          </p>

          <div className="flex justify-center mb-8">
            <svg className="w-64 h-32" viewBox="0 0 240 120">
              <rect
                x="10"
                y="10"
                width="60"
                height="40"
                fill="none"
                stroke="currentColor"
              />
              <text x="40" y="35" textAnchor="middle" className="text-sm">
                Bit 1
              </text>
              <rect
                x="10"
                y="70"
                width="60"
                height="40"
                fill="none"
                stroke="currentColor"
              />
              <text x="40" y="95" textAnchor="middle" className="text-sm">
                Bit 2
              </text>
              <path d="M70 30 H100 V90 H70" fill="none" stroke="currentColor" />
              <rect
                x="100"
                y="40"
                width="80"
                height="40"
                fill="none"
                stroke="currentColor"
              />
              <text x="140" y="65" textAnchor="middle" className="text-sm">
                Bit Adder
              </text>
              <path d="M180 60 H220" fill="none" stroke="currentColor" />
              <text x="230" y="65" textAnchor="start" className="text-sm">
                Sum
              </text>
            </svg>
          </div>

          <p className="text-lg mb-8">
            Los sumadores de bits se pueden combinar para realizar sumas de
            números más grandes, formando la base de las unidades lógicas
            aritméticas (ALU) en los procesadores.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">¡Pruébalo!</h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Input
              type="text"
              value={bit1}
              onChange={(e) =>
                setBit1(e.target.value.replace(/[^01]/g, "").slice(-1))
              }
              className="w-16 text-center"
              maxLength={1}
            />
            <Plus size={24} />
            <Input
              type="text"
              value={bit2}
              onChange={(e) =>
                setBit2(e.target.value.replace(/[^01]/g, "").slice(-1))
              }
              className="w-16 text-center"
              maxLength={1}
            />
            <Equal size={24} />
            <div className="w-16 h-10 flex items-center justify-center border rounded">
              {result}
            </div>
          </div>
          <Button onClick={addBits} className="w-full">
            Add Bits
          </Button>
        </div>
      </div>
    </div>
  );
}

import {
  Binary,
  Check,
  ChevronRight,
  SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";

const addersList = [
  {
    name: "1 Bit",
    description: "Perfecto para operaciones binarias simples",
    color: "bg-green-500",
    features: [
      "Suma básica",
      "Ideal para principiantes",
      "Operaciones rápidas",
    ],
    href: "/sumador-1-bit",
  },
  {
    name: "4 Bits",
    description: "Ideal para cálculos del tamaño de un nibble",
    color: "bg-blue-500",
    features: [
      "Suma de nibbles",
      "Mayor precisión",
      "Uso en microcontroladores",
    ],
    href: "/sumador-4-bits",
  },
  {
    name: "8 Bits",
    description: "Potentes cálculos a nivel de byte",
    color: "bg-purple-500",
    features: [
      "Suma de bytes completos",
      "Alta capacidad",
      "Aplicaciones avanzadas",
    ],
    href: "/sumador-8-bits",
  },
];

export default function Adders() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros Sumadores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {addersList.map((sumador) => (
            <div
              key={sumador.name}
              className={`${sumador.color} rounded-lg shadow-lg flex flex-col overflow-hidden`}
            >
              <div className="p-6 text-white flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-bold mb-2">
                  Sumador de {sumador.name}
                </h3>
                <p className="mb-4">{sumador.description}</p>
                <ul className="mb-6">
                  {sumador.features.map((caracteristica, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <Check size={20} className="mr-2" />
                      {caracteristica}
                    </li>
                  ))}
                </ul>
                <Link
                  href={sumador.href}
                  className="inline-flex items-center text-white hover:underline font-medium"
                >
                  Más información <ChevronRight size={20} className="ml-1" />
                </Link>
              </div>
              <Link href={sumador.href}>
                <div className="bg-white p-4">
                  <div className="transition-all duration-300 hover:scale-105 flex justify-center items-center space-x-2 group">
                    <Binary
                      className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
                      size={48}
                    />
                    <SquareArrowOutUpRight
                      className="text-gray-300 group-hover:text-gray-500 transition-colors duration-300"
                      size={20}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

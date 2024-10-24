import FormAdder from "@/components/pages/sumador/FormAdder";
import Image from "next/image";

export default function Sumador1BitPage() {
  return (
    <main className="w-full">
      <div className="container py-16">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center py-5 text-gray-800">
          Sumador de 1 Bit
        </h1>

        <FormAdder size={1} />

        <div className="container flex flex-col gap-8">
          <p className="leading-7 text-gray-700">
            Un sumador de 1 bit es un circuito lógico que suma dos números
            binarios de un solo bit y produce una suma de 1 bit junto con un
            acarreo. Este tipo de sumador es fundamental en la aritmética
            binaria y se utiliza como componente básico en sumadores más
            complejos, como los sumadores de 4 y 8 bits.
          </p>

          <Image
            src={"/img/suma_binaria.webp"}
            width={500}
            height={250}
            alt="imagen del sumador de 1 bit"
            className="self-center my-8"
          />

          <h2 className="text-2xl font-semibold text-gray-800">
            Cómo Funciona
          </h2>
          <p className="leading-7 text-gray-700">
            El sumador de 1 bit utiliza tres entradas: los dos bits a sumar (A y
            B) y una entrada de acarreo (Carry In). El resultado de la suma se
            compone de dos salidas: la suma (Sum) y el acarreo de salida (Carry
            Out). La operación se realiza mediante compuertas lógicas:
          </p>

          <ul className="list-disc ml-5 leading-7 text-gray-700">
            <li>
              <strong>XOR:</strong> Para calcular la suma de A y B.
            </li>
            <li>
              <strong>AND:</strong> Para determinar si debe haber un acarreo.
            </li>
            <li>
              <strong>OR:</strong> Para combinar las señales de acarreo.
            </li>
          </ul>

          <Image
            src={"/img/sumador_1bit.webp"}
            width={500}
            height={250}
            alt="imagen del sumador de 1 bit"
            className="self-center my-8"
          />

          <h2 className="text-2xl font-semibold text-gray-800">Aplicaciones</h2>
          <p className="leading-7 text-gray-700">
            Los sumadores de 1 bit se utilizan en diversas aplicaciones,
            incluidas:
          </p>
          <ul className="list-disc ml-5 leading-7 text-gray-700">
            <li>Operaciones aritméticas en procesadores.</li>
            <li>Componentes en circuitos integrados.</li>
            <li>Fundamentos en la construcción de calculadoras digitales.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

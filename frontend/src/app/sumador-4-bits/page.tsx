import FormAdder from "@/components/pages/sumador/FormAdder";
import Image from "next/image";

export default function Sumador4BitsPage() {
  return (
    <main className="w-full">
      <div className="container py-16">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center py-5 text-gray-800">
          Sumador de 4 Bits
        </h1>
        <FormAdder size={4} />

        <div className="container flex flex-col gap-8">
          <p className="leading-7 text-gray-700">
            Un sumador de 4 bits es un circuito lógico que permite sumar dos
            números binarios de 4 bits. Al igual que el sumador de 1 bit, el
            sumador de 4 bits produce una suma y un acarreo, pero tiene la
            capacidad de operar sobre números más grandes. Este tipo de sumador
            se utiliza frecuentemente en computadoras y sistemas digitales para
            realizar operaciones aritméticas básicas.
          </p>

          <Image
            src={"/img/sumador_4bits.webp"}
            width={500}
            height={250}
            alt="imagen del sumador de 4 bits"
            className="self-center my-8"
          />

          <h2 className="text-2xl font-semibold text-gray-800">
            Funcionamiento
          </h2>
          <p className="leading-7 text-gray-700">
            Un sumador de 4 bits utiliza cuatro pares de entradas, donde cada
            par consta de un bit de cada número a sumar, además de una entrada
            de acarreo. La suma se realiza bit a bit utilizando múltiples
            instancias del sumador de 1 bit. El acarreo generado por cada suma
            se utiliza como entrada para la siguiente suma.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Lógica</h2>
          <p className="leading-7 text-gray-700">
            Se creó el sumador de 4 bits conectando sumadores completos en
            cascada de 1 bit, dicho proceso se observa mejor en el digrama de
            bloques del inicio.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Ejemplo</h2>
          <p className="leading-7 text-gray-700">
            Supongamos que queremos sumar los números binarios 1101 (13 en
            decimal) y 1011 (11 en decimal):
          </p>
          <ul className="list-disc ml-5 leading-7 text-gray-700">
            <li>1. Se suman los bits menos significativos (1 + 1):</li>
            <li>2. Se genera un acarreo.</li>
            <li>3. Se continúa con el siguiente bit.</li>
            <li>
              4. El proceso continúa hasta sumar todos los bits y obtener el
              resultado.
            </li>
          </ul>

          <Image
            src={"/img/ejemplo_sumador_4bits.webp"}
            width={500}
            height={250}
            alt="imagen del sumador de 4 bits"
            className="self-center my-8"
          />

          <h2 className="text-2xl font-semibold text-gray-800">Aplicaciones</h2>
          <p className="leading-7 text-gray-700">
            Los sumadores de 4 bits se utilizan en diversas aplicaciones,
            incluyendo:
          </p>
          <ul className="list-disc ml-5 leading-7 text-gray-700">
            <li>Operaciones aritméticas en microcontroladores.</li>
            <li>Componentes en circuitos integrados.</li>
            <li>
              Construcción de unidades aritmético-lógicas (ALU).
              <ul className="list-decimal ml-5 leading-7 text-gray-700">
                <li>
                  Un sumador de 4 bits se emplea en unidades aritmético-lógicas
                  (ALU) de procesadores de 4 bits, como en microprocesadores
                  antiguos o sistemas embebidos de bajo costo. Este circuito es
                  fundamental para realizar cálculos sencillos y operaciones
                  lógicas en dispositivos que no requieren manejar grandes
                  cantidades de datos, optimizando el rendimiento y reduciendo
                  el tamaño del hardware.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

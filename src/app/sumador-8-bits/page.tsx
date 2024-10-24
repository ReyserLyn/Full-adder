import FormAdder from "@/components/pages/sumador/FormAdder";
import Image from "next/image";

export default function Sumador8BitsPage() {
  return (
    <main className="w-full">
      <div className="container py-16">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center py-5 text-gray-800">
          Sumador de 8 Bits
        </h1>
        <FormAdder size={8} />

        <div className="flex flex-col gap-8">
          <p className="leading-7 text-gray-700">
            Un sumador de 8 bits es un circuito lógico más complejo que permite
            sumar dos números binarios de 8 bits. Al igual que en los sumadores
            de 1 y 4 bits, se produce una suma y un acarreo. Este tipo de
            sumador se utiliza en aplicaciones que requieren mayor capacidad
            aritmética, como en microprocesadores y sistemas de procesamiento de
            señales.
          </p>

          <Image
            src={"/img/sumador_8bits.webp"}
            width={500}
            height={250}
            alt="imagen del sumador de 8 bits"
            className="self-center my-8"
          />

          <h2 className="text-2xl font-semibold text-gray-800">
            Funcionamiento
          </h2>
          <p className="leading-7 text-gray-700">
            Un sumador de 8 bits utiliza un diseño jerárquico que combina dos
            sumadores de 4 bits. Cada sumador de 4 bits maneja 4 bits de los
            números a sumar y utiliza el acarreo generado por el sumador menos
            significativo como entrada para el sumador más significativo.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Lógica</h2>
          <p className="leading-7 text-gray-700">
            Para construir un sumador de 8 bits, puedes conectar dos sumadores
            de 4 bits en serie. El acarreo de salida del primer sumador (el de
            los bits menos significativos) se conecta a la entrada de acarreo
            del segundo sumador.
            <br />
            Los cuatro primeros bits (A0 a A3 y B0 a B3) se suman utilizando un
            sumador de 4 bits, y el acarreo generado se pasa como entrada al
            siguiente sumador de 4 bits, que suma los cuatro bits más
            significativos (A4 a A7 y B4 a B7).
          </p>

          <div className="flex lg:flex-row flex-col items-center justify-center">
            <Image
              src={"/img/ex1_sumador_8bits.webp"}
              width={500}
              height={250}
              alt="imagen del sumador de 8 bits"
              className="self-center my-8"
            />

            <Image
              src={"/img/ex2_sumador_8bits.webp"}
              width={500}
              height={250}
              alt="imagen del sumador de 8 bits"
              className="self-center my-8"
            />
          </div>

          <Image
            src={"/img/sumador_8.webp"}
            width={500}
            height={250}
            alt="imagen del sumador de 1 bit"
            className="self-center my-8"
          />

          <h2 className="text-2xl font-semibold text-gray-800">Ejemplo</h2>
          <p className="leading-7 text-gray-700">
            Consideremos sumar 01101000 (104 en decimal) y 00000111 (7 en
            decimal):
          </p>
          <ul className="list-disc ml-5 leading-7 text-gray-700">
            <li>1. Se suman los bits de menor peso.</li>
            <li>2. Se generan acarreos según sea necesario.</li>
            <li>3. Se combinan los resultados de los sumadores de 4 bits.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Aplicaciones</h2>
          <p className="leading-7 text-gray-700">
            Los sumadores de 8 bits son utilizados en:
          </p>
          <ul className="list-disc ml-5 leading-7 text-gray-700">
            <li>Controladores de hardware y sistemas embebidos.</li>
            <li>Sistemas de comunicación y procesamiento de datos.</li>
            <li>
              Microprocesadores para operaciones aritméticas.
              <ul className="list-disc ml-5 leading-7 text-gray-700">
                <li>
                  Un sumador de 8 bits puede ser útil en sistemas que necesitan
                  realizar operaciones aritméticas con números relativamente
                  grandes, como en microprocesadores o controladores. Es crucial
                  optimizar estos circuitos para maximizar la velocidad y
                  reducir el consumo de energía en dispositivos electrónicos.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

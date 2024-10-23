export default function Features() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          ¿Por qué elegir nuestros sumadores?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Precisión garantizada</h3>
            <p>
              Nuestros sumadores ofrecen resultados precisos en todas las
              operaciones binarias.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Fácil de usar</h3>
            <p>
              Interfaz intuitiva diseñada para principiantes y expertos por
              igual.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Versátil</h3>
            <p>
              Desde operaciones simples hasta cálculos complejos, tenemos el
              sumador adecuado para ti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

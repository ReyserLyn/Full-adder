import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bienvenido al Mundo de los Sumadores Binarios
            </h1>
            <p className="text-xl mb-6">
              Explora y aprende el poder de la suma binaria con nuestros
              sumadores
            </p>
            <Link href="/sumador-8-bits">
              <Button className="text-lg px-6 py-3" variant="shine">
                Comenzar ahora <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/logo.svg"
              alt="Ilustración de sumador binario"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Banner = () => {
    return ( 
      <section className="w-full h-full md:h-screen flex justify-center items-center mt-24 md:mt-0">
        <div className="relative w-full h-[550px] md:h-[900px] xl:h-[400px] 2xl:h-[500px] mx-5 lg:mx-20 rounded-lg overflow-auto flex justify-center items-center border border-gray-900">
          {/* Video de fondo con desenfoque */}
          <div className="hidden lg:flex absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              >
              <source src="/video/fondovideo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="lg:hidden flex absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              >
              <source src="/video/video3.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="absolute inset-0 bg-black/60"></div>
    
          <div className="absolute flex flex-col items-center justify-center">
            <div className="p-5 bg-opacity-50 rounded-l text-center max-w-3xl">
              <h1 className="font-bold tracking-tighter text-white text-3xl md:text-5xl">Punto de Venta <span className="text-3xl md:text-5xl text-green-400 font-bold">Aloha NCR</span></h1>
              <p className="mt-4 text-sm md:text-xl text-white font-semibold">El manejo de tu restaurante no tiene por qué ser difícil, cuando cuentas con una herramienta eficiente, escalable y fácil de usar, lo que resultará en más clientes satisfechos y leales.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-4">
              <Link href="/contactanos" scroll={false}>
                <Button className="w-40 bg-green-600 text-white hover:bg-green-500 cursor-pointer">Solicitar Demo <ArrowRight className="h-4 w-4"/></Button>
              </Link>
             <Link href="/productos" scroll={false}>
              <Button className="w-40 bg-white text-black hover:bg-gray-200 cursor-pointer">Ver Productos <ShoppingCart className="h-4 w-4"/></Button>
             </Link>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Banner;
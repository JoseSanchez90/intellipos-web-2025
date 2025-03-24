import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const SystemAloha = () => {
    return (
        <section id="#System" className="relative h-[580px] md:h-[900px] 2xl:h-[500px] mx-5 lg:mx-20 rounded-lg overflow-auto flex justify-center items-center border border-gray-900 mt-28 sm:mt-0">
            {/* Imagen de fondo con desenfoque */}
            <div className="hidden lg:flex absolute inset-0">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                >
                <source src="/video/video2.mp4" type="video/mp4" />
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
                <source src="/video/video4.mp4" type="video/mp4" />
            </video>
            </div>

            <div className="absolute inset-0 bg-black/70"></div>

            <div className="absolute max-w-5xl flex flex-col justify-center md:space-y-10 items-center space-y-4 xl:space-y-4 px-5">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Sistema <span className="text-green-500">Aloha</span> NCR</h2> 
                <p className="text-white md:text-xl text-center">Ofrecemos una solución completa para el sector de restaurantes que se adapta a cualquier tamaño y/o tipo de restaurante desde la operación de tu negocio hasta la fidelización de tus clientes</p>
                <div>
                <ul className="grid gap-2 text-left max-w-md mx-auto text-lg text-white">
                    {[
                        "Gestión de inventario en tiempo real",
                        "Procesamiento rápido de pagos",
                        "Informes y análisis detallados",
                        "Integración con sistemas de fidelización",
                        "Soporte técnico 24/7",
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="text-sm md:text-lg">{item}</span>
                        </li>
                    ))}
                    </ul>
                    <div className="mt-6 md:mt-10 xl:mt-6">
                        <Link href="/servicio">
                            <Button className="gap-1 bg-white hover:bg-gray-200 text-black cursor-pointer w-full">
                            Conocer Más <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>   
            </div>  
        </section>
     );
}
 
export default SystemAloha;
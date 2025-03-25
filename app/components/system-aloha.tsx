import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const SystemAloha = () => {
    return (
        <section className="w-full h-full md:h-screen flex flex-col justify-center items-center px-5 lg:px-20">
            <div className="relative w-full h-[580px] md:h-[900px] xl:h-[400px] 2xl:h-[500px] rounded-lg overflow-auto flex justify-center items-center border border-gray-900">
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

                <div className="absolute max-w-5xl flex flex-col justify-center items-center space-y-4 md:space-y-10 xl:space-y-4 px-5">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-center">¿Que ofrece <span className="text-green-500">IntelliPOS?</span></h2> 
                    <p className="text-white md:text-xl text-center">Ofrecemos una solución completa para el sector de restaurantes que se adapta a cualquier tamaño y/o tipo de restaurante desde la operación de tu negocio hasta la fidelización de tus clientes</p>
                    <div className="space-y-6">
                        <ul className="grid text-left max-w-2xl mx-auto text-lg text-white">
                        {[
                            "Soluciones POS, pedidos móviles, kioscos e integración con agregadores",
                            "Gestión de Pedidos y Cocina con pantallas interactivas y eficientes",
                            "Fidelización con pagos electrónicos, lealtad y transacciones seguras",
                            "Obten un mejor control y eficiencia en todas las órdenes de compra",
                            "Infraestructura y Soporte con hardware confiable y asistencia técnica",
                        ].map((item, index) => (
                            <li key={index} className="flex justify-start items-start gap-2">
                                <CheckCircle className="h-5 w-5 md:h-7 text-green-500" />
                                <span className="text-sm md:text-lg">{item}</span>
                            </li>
                        ))}
                        </ul>
                        <Link href="/servicio">
                            <Button className="gap-1 bg-green-600 text-white hover:bg-green-500 cursor-pointer w-full">Conocer Más <ArrowRight className="h-4 w-4" /></Button>
                        </Link>
                    </div>   
                </div>  
            </div>
        </section>
        
     );
}
 
export default SystemAloha;
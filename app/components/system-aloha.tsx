import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const SystemAloha = () => {
    return ( 
        <div className="relative h-[500px] mx-20 rounded-lg overflow-hidden flex justify-center items-center">
        {/* Imagen de fondo con desenfoque */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            >
            <source src="/video/video2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
            <div className="absolute max-w-3xl flex flex-col justify-center items-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Sistema <span className="text-green-500">Aloha</span> NCR</h2> 
                <p className="text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">Ofrecemos soluciones integrales para la gestión de tu negocio, desde el punto de venta hasta el análisis de datos</p>
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
                        <span>{item}</span>
                        </li>
                    ))}
                    </ul>
                    <div className="mt-6">
                        <Link href="/servicio">
                            <Button className="gap-1 bg-white hover:bg-gray-200 text-black cursor-pointer w-full">
                            Conocer Más <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>   
            </div>  
        </div>
     );
}
 
export default SystemAloha;
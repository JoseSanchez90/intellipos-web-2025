import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import bgproducts from "@/app/img/productos.jpg"
import bghardware from "@/app/img/bg-hardware.jpg"
import { Ripple } from "@/components/magicui/ripple";
import ProductsCarousel from "@/app/components/productsCarousel";
import presupuesto from "@/app/img/presupuesto.jpg"
import presupuestovertical from "@/app/img/presupuesto-vertical.jpg"

const Products = () => {

    return ( 
        <>
        {/* Dispositivos y Accesorios */}
        <section className="w-full h-screen flex flex-col justify-center items-center px-2">
            <div className="w-full flex flex-col justify-center items-center max-w-5xl gap-10 text-center">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="font-bold tracking-tighter text-3xl md:text-5xl">Hardware Certificado para <span className="text-green-400 font-bold">Aloha NCR</span></h2>
                    <p className="mt-4 text-muted-foreground text-center">Trabajamos con una variedad de marcas reconocidas y certificadas para garantizar la compatibilidad total con el sistema Aloha NCR. Desde terminales táctiles hasta impresoras térmicas y lectores de códigos, te ofrecemos soluciones confiables y eficientes para tu negocio.</p>
                </div>
                <div>
                    <ProductsCarousel />
                </div>
            </div>
        </section>

        {/* Hardware Compatible */}
        <section className="w-full h-full md:h-screen flex justify-center items-center">
            <div className="relative w-full h-[550px] md:h-[400px] 2xl:h-[500px] mx-5 md:mx-20 rounded-lg overflow-auto flex justify-center items-center border">
                {/* Imagen de fondo con desenfoque */}
                <div className="hidden sm:flex absolute inset-0">
                    <Image src={bgproducts} alt="nosotros background" fill className="object-cover bg-cover" />
                </div>
                <div className="sm:hidden flex absolute inset-0">
                    <Image src={bghardware} alt="nosotros background" fill className="object-cover bg-cover" />
                </div>

                <div className="absolute inset-0 bg-black/60"></div>
            
                <div className="absolute flex flex-col items-center justify-center">
                    <div className="p-5 bg-opacity-50 rounded-l text-center max-w-4xl">
                        <h1 className="font-bold tracking-tighter text-white text-3xl md:text-5xl">Hardware <span className="text-green-400 font-bold">Compatible</span></h1>
                        <p className="mt-4 text-sm md:text-xl text-white font-semibold">Ofrecemos equipos NCR con la última tecnología, reconocidos por su robustez y confiabilidad. Como la marca líder en Retail, Banca y Hospitalidad, contamos con una línea completa de soluciones para todas las necesidades, respaldadas por soporte de hardware a nivel nacional.</p>
                        <div className="mt-4">
                            <Link href="/contactanos">
                            <Button className="w-56 bg-white text-black hover:bg-gray-200 cursor-pointer">Ver Catálogo Completo <ArrowRight className="h-4 w-4" /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Obtén un Presupuesto a la Medida */}
        <section className="w-full h-screen flex justify-center items-center">
            <div className="relative w-full h-[550px] md:h-[400px] 2xl:h-[500px] mt-8 md:mt-0 mx-5 md:mx-20 rounded-lg overflow-auto flex justify-center items-center">
                {/* Imagen de fondo con desenfoque */}
                <div className="hidden md:flex absolute inset-0">
                    <Image src={presupuesto} alt="nosotros background" fill className="object-cover bg-cover" />
                </div>
                <div className="md:hidden flex absolute inset-0">
                    <Image src={presupuestovertical} alt="nosotros background" fill className="object-cover bg-cover" />
                </div>

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="absolute space-y-4 px-5">
                    <div className="space-y-4 flex flex-col justify-center items-center text-center">
                        <h1 className="font-bold tracking-tighter text-white text-3xl md:text-5xl">Obtén un Presupuesto <span className="text-green-400 font-bold">a la Medida</span></h1>
                        <div>
                            <p className="text-white">
                            Cada negocio es único, y su sistema de punto de venta también, dinos lo que necesitas y te ofreceremos la mejor solución
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center space-y-8">
                        <div className="flex flex-col justify-center items-start text-md md:text-lg font-normal space-y-1">
                            <p className="flex gap-2 text-white text-sm md:text-lg font-semibold"><Check className="text-green-500" />Número de terminales</p>
                            <p className="flex gap-2 text-white text-sm md:text-lg font-semibold"><Check className="text-green-500" />Cantidad de Impresoras</p>
                            <p className="flex gap-2 text-white text-sm md:text-lg font-semibold"><Check className="text-green-500" />Funciones y herramientas esenciales</p>
                            <p className="flex gap-2 text-white text-sm md:text-lg font-semibold"><Check className="text-green-500" />Soporte y mantenimiento</p>
                            <Link href="/contactanos" scroll={false} className="w-full flex justify-center items-center gap-2 mt-4">
                                <Button className="w-full bg-green-600 hover:bg-green-500 cursor-pointer">Obtener un presupuesto <ArrowRight/></Button>
                            </Link>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>

        {/* Solicitar Presupuesto */}
        <section className="w-full flex justify-center items-center">
            <div className="w-full h-[550px] md:h-screen flex flex-col justify-center items-center relative overflow-hidden">
                <div className="flex flex-col items-center justify-center space-y-8 z-10 px-5">
                    <div className="flex flex-col text-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿No encuentras <span className="text-green-500">lo que buscas?</span></h2>
                        <p className="text-muted-foreground md:text-lg">Contáctanos para una solución personalizada adaptada a tus necesidades específicas</p>
                    </div>
                    <div className="flex flex-col min-[400px]:flex-row">
                        <Link href="/contactanos">
                            <Button size="lg" className="gap-1 cursor-pointer text-white bg-green-600 hover:bg-green-500">
                            Solicitar presupuesto <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <Ripple mainCircleSize={100} />
                </div>
                <div className="flex md:hidden">
                    <Ripple mainCircleSize={10} />
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Products;
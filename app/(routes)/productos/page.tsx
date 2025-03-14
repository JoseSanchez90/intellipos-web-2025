import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import bgproducts from "@/app/img/productos.jpg"
import { Ripple } from "@/components/magicui/ripple";

const Products = () => {
    return ( 
        <>
        {/* Dispositivos y Accesorios */}
        <section className="w-full h-screen flex flex-col justify-center items-center">
            <div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="font-bold tracking-tighter text-3xl md:text-5xl">Dispositivos y <span className="text-green-400 font-bold">accesorios</span></h2>
                    <p className="mt-4 text-muted-foreground">Complementa tu sistema con nuestros dispositivos de alta calidad</p>
                </div>
                <div>
                    <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
                        {[
                        {
                            title: "Terminales Táctiles",
                            image: "/images/ncrhardware.png",
                            price: "Desde $799",
                        },
                        {
                            title: "Impresoras Térmicas",
                            image: "/images/tres.png",
                            price: "Desde $299",
                        },
                        {
                            title: "Lectores de Códigos",
                            image: "/images/lector.png",
                            price: "Desde $149",
                        },
                        {
                            title: "Cajones de Dinero",
                            image: "/images/cuatro.png",
                            price: "Desde $199",
                        },
                        ].map((device, index) => (
                        <Card key={index} className="w-60 overflow-hidden hover:shadow-lg shadow-gray-300 dark:shadow-gray-600">
                            <CardContent className="p-4 2xl:h-full flex flex-col items-center text-center">
                                <div className="h-32 2xl:h-full flex items-center justify-between mb-6">
                                    <Image
                                    src={device.image}
                                    width={150}
                                    height={150}
                                    alt={device.title}
                                    className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{device.title}</h3>
                                    <p className="mt-2 text-lg font-medium text-gray-600 dark:text-gray-400">{device.price}</p>
                                    <div className="mt-4 w-full">
                                        <Link href="/contactanos">
                                        <Button size="sm" className="w-full bg-green-600 hover:bg-green-500 text-white cursor-pointer">
                                            Más Información
                                        </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Hardware Compatible */}
        <section className="w-full h-screen flex justify-center items-center">
            <div className="relative w-full md:h-[500px] 2xl:h-[550px] mx-5 md:mx-20 rounded-lg overflow-auto flex justify-center items-center border">
                {/* Imagen de fondo con desenfoque */}
                <div className="hidden sm:flex absolute inset-0">
                    <Image src={bgproducts} alt="nosotros background" fill className="object-cover bg-cover" />
                </div>
                {/* <div className="sm:hidden flex absolute inset-0">
                    <Image src={fondo2} alt="nosotros background" fill className="object-cover bg-cover" />
                </div> */}

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
        
        {/* Sistema de Punto de Venta */}
        <section className="w-full h-screen flex flex-col justify-center items-center">
            <div className="w-full h-full py-20">
                <div className="space-y-2 flex flex-col justify-center items-center">
                    <h1 className="font-bold tracking-tighter text-3xl md:text-5xl">Sistema de Punto <span className="text-green-400 font-bold">de Venta</span></h1>
                    <p className="text-muted-foreground text-center">
                    Soluciones avanzadas para la gestión eficiente de tu negocio
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {[
                {
                    title: "Aloha POS Básico",
                    description: "Sistema esencial para pequeños negocios",
                    price: "$1,999",
                    features: [
                    "Interfaz intuitiva",
                    "Gestión de ventas",
                    "Informes básicos",
                    "Soporte técnico",
                    "1 terminal incluido",
                    ],
                },
                {
                    title: "Aloha POS Avanzado",
                    description: "Solución para negocios en crecimiento",
                    price: "$3,499",
                    features: [
                    "Todo lo del plan Básico",
                    "Gestión de inventario",
                    "Fidelización de clientes",
                    "Informes avanzados",
                    "2 terminales incluidos",
                    ],
                    highlighted: true,
                },
                {
                    title: "Aloha POS Enterprise",
                    description: "Para cadenas y grandes establecimientos",
                    price: "$5,999",
                    features: [
                    "Todo lo del plan Avanzado",
                    "Múltiples ubicaciones",
                    "Integración con ERP",
                    "Análisis predictivo",
                    "5 terminales incluidos",
                    ],
                },
                ].map((product, index) => (
              <Card key={index} className={`h-full relative hover:border-black hover:shadow-lg shadow-gray-300 dark:hover:border-white dark:shadow-gray-600 ${product.highlighted ? "" : ""}`}>
                {product.highlighted && (
                  <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Recomendado
                  </div>
                )}
                <CardContent className="px-6 py-2 flex flex-col h-full">
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{product.description}</p>
                  <div className="mt-4 text-3xl font-bold text-green-500">{product.price}</div>
                  <ul className="mt-4 space-y-2 text-left flex-grow">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span className="text-sm 2xl:text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/contactanos">
                      <Button className="w-full bg-green-600 hover:bg-green-500 text-white gap-1 cursor-pointer">
                        Solicitar Información <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
                ))}
            </div>
            </div>
        </section>

        {/* Solicitar Presupuesto */}
        <section className="w-full h-full flex justify-center items-center">
            <div className="w-full h-[400px] md:h-screen flex flex-col justify-center items-center relative overflow-hidden">
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
"use client"

import Image from "next/image";
import horizontalOne from "@/app/img/horizontal-1.jpg";
import horizontalTwo from "@/app/img/horizontal-2.jpg";
import vertical from "@/app/img/vertical.jpg";
import dynamic from "next/dynamic";
import { ArrowRight, BarChart, BookOpen, Check, Clock, Headphones, HeartHandshake, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import soporte from "@/app/img/soporte.jpg"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Ripple } from "@/components/magicui/ripple";
import { CarouselServices } from "@/app/components/carousel-services";
import { m } from "framer-motion";

    const ServicesGeneral = [
        {
            id: 1,
            icon: <Wrench className="h-10 w-10" />,
            title: "Instalación y Configuración",
            description: "Instalación profesional y configuración personalizada de sistemas Aloha NCR.",
        },
        {
            id: 2,
            icon: <BookOpen className="h-10 w-10" />,
            title: "Capacitación",
            description: "Programas de formación para que tu equipo aproveche al máximo el sistema.",
        },
        {
            id: 3,
            icon: <Headphones className="h-10 w-10" />,
            title: "Soporte Técnico",
            description: "Asistencia técnica continua para resolver cualquier incidencia rápidamente.",
        },
        {
            id: 4,
            icon: <BarChart className="h-10 w-10" />,
            title: "Consultoría",
            description: "Asesoramiento experto para optimizar tus procesos de negocio.",
        },
        {
            id: 5,
            icon: <Clock className="h-10 w-10" />,
            title: "Mantenimiento",
            description: "Servicios de mantenimiento preventivo y correctivo para tu sistema.",
        },
        {
            id: 6,
            icon: <HeartHandshake className="h-10 w-10" />,
            title: "Integración",
            description: "Integración con otros sistemas y plataformas para una gestión unificada.",
        },
    ]

    const Implementation = [
        {
            id: 1,
            step: "01",
            title: "Análisis de Necesidades",
            description: "Evaluamos tus requerimientos específicos y objetivos de negocio.",
          },
          {
            id: 2,
            step: "02",
            title: "Diseño de Solución",
            description: "Desarrollamos una solución personalizada adaptada a tu operativa.",
          },
          {
            id: 3,
            step: "03",
            title: "Implementación",
            description: "Instalamos y configuramos el sistema según las especificaciones acordadas.",
          },
          {
            id: 4,
            step: "04",
            title: "Capacitación",
            description: "Formamos a tu equipo para que aproveche al máximo el sistema.",
          },
          {
            id: 5,
            step: "05",
            title: "Seguimiento",
            description: "Realizamos un seguimiento continuo para asegurar el óptimo funcionamiento.",
          },
    ]

const Services = () => {

    const LottieAnimation = dynamic(() => import("@/app/components/LottieAnimation"), { ssr: false });

    return (
        <>
        <section className="h-full flex justify-center items-center">
            <div className="h-[550px] md:h-[500px] 2xl:h-[600px] mx-5 md:mx-20 flex justify-center items-center">
                {/* Grid principal con Bento Layout */}
                <div className="grid md:grid-cols-3 grid-rows-6 gap-4 w-full h-full relative">
                    {/* Imagen vertical grande (col-izquierda) */}
                    <div className="hidden md:flex relative col-span-1 row-span-6 rounded-2xl overflow-hidden shadow-lg">
                        <Image src={vertical} alt="fondo-vertical" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
                            <LottieAnimation />
                    </div>
                    {/* Imagen horizontal superior (col-derecha) */}
                    <div className="relative col-span-2 row-span-3 rounded-2xl overflow-hidden shadow-lg">
                        <Image src={horizontalOne} alt="fondo horizontal uno" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 z-10">
                            <h1 className="font-bold tracking-tighter text-white text-3xl md:text-5xl">
                                Nuestros <span className="text-green-400">Servicios</span>
                            </h1>
                            <p className="flex md:hidden mt-4 text-sm md:text-xl text-white font-semibold">
                            Ofrecemos las mejores soluciones integrales para la gestión de tu negocio con Aloha NCR.
                            </p>
                        </div>
                        
                    </div>

                    {/* Imagen horizontal inferior (col-derecha) */}
                    <div className="relative col-span-2 row-span-3 rounded-2xl overflow-hidden shadow-lg">
                        <Image src={horizontalTwo} alt="fondo horizontal dos" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
                        <div className="hidden md:flex  absolute inset-0 flex-col items-center justify-center text-center px-5 z-10">
                            <p className="mt-4 text-sm md:text-2xl text-white font-semibold max-w-xl">
                            Ofrecemos las mejores soluciones integrales para la gestión de tu negocio con Aloha NCR.
                            </p>
                        </div>
                        <div className="md:hidden flex relative rounded-2xl overflow-hidden shadow-lg pt-12">
                            <LottieAnimation />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Servicios Principales */}
        <section className="h-full flex flex-col justify-center items-center mx-5 lg:mt-24 2xl:mt-16">
            <div className="h-screen w-full flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="font-bold tracking-tighter text-3xl md:text-5xl">Servicios <span className="text-green-500 font-bold">Principales</span></h1>
                        <p className="text-muted-foreground text-center">Soluciones completas para optimizar tu negocio.</p>
                    </div>
                </div>
                <div className="hidden mx-auto md:grid max-w-5xl gap-2 md:gap-4 md:py-10 md:grid-cols-3 py-6">
                    {ServicesGeneral.map((value, id) => (
                        <Card key={id} className="relative overflow-hidden hover:shadow-lg dark:bg-black dark:shadow-gray-600 transition-all duration-150">
                            <CardContent className="flex flex-col items-center text-center space-y-2">
                                <div className="p-2 rounded-full bg-green-200 dark:text-black mb-2">{value.icon}</div>
                                <h3 className="text-lg md:text-xl font-bold">{value.title}</h3>
                                <p className="text-sm md:text-muted-foreground">{value.description}</p>
                            </CardContent>
                            <BorderBeam
                                duration={6}
                                size={200}
                                className="from-transparent via-green-500 to-transparent"
                            />
                        </Card>
                    ))}
                </div>
                <div className="flex md:hidden py-6">
                    <CarouselServices />
                </div>
            </div>
        </section>

        <section className="h-full flex justify-center items-center px-5 md:mx-20 lg:mt-16">
            <div className="relative w-full h-[580px] md:h-[500px] 2xl:h-[580px]  rounded-lg overflow-auto flex justify-center items-center border">
                {/* Imagen de fondo con desenfoque */}
                <div className="absolute inset-0">
                    <Image src={soporte} alt="nosotros background" fill className="object-cover bg-cover" />
                </div>

                    <div className="absolute inset-0 bg-black/60"></div>
            
                <div className="absolute flex flex-col items-center justify-center">
                    <div className="p-5 bg-opacity-50 rounded-l text-center max-w-4xl space-y-4 flex flex-col justify-center items-center">
                        <h1 className="font-bold tracking-tighter text-white text-3xl md:text-5xl">¿Como mejoramos la experiencia <span className="text-green-400 font-bold">de las Tiendas?</span></h1>
                        <div className="max-w-2xl">
                            {[
                                {
                                    id: 1,
                                    description: "Sistema con muy alta disponibilidad"
                                },
                                {
                                    id: 2,
                                    description: "Soporte en línea a todas las tiendas"
                                },
                                {
                                    id: 3,
                                    description: "Personal de Soporte certificado y con amplia experiencia"   
                                },
                                {
                                    id: 4,
                                    description: "Soporte y Mantenimiento de Equipos a Nivel Nacional"   
                                },
                                {
                                    id: 5,
                                    description: "Contratos de mantenimiento con estándares internacionales"   
                                },
                                {
                                    id: 6,
                                    description: "Reportes mensuales de atenciones y SLA"   
                                },
                            ].map((Coments, id) => (
                            <div key={id} className="flex flex-row justify-start items-end gap-2">
                               <Check className="text-green-500" /> <p className="mt-2 text-sm md:text-xl text-white font-semibold max-w-xl">{Coments.description}</p>
                            </div> 
                            ))
                            }
                        </div>
                        <Button className="w-48 mt-4 bg-white text-black hover:bg-gray-200 cursor-pointer">Contactar Servicio<ArrowRight className="h-4 w-4"/></Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Implementacion */}
        <section className="h-full flex justify-center items-center mx-5 mt-16 lg:mt-24">
            <div className="w-full h-screen flex flex-col items-center justify-center md:space-y-4 text-center">
                <div className="space-y-2">
                    <h1 className="font-bold tracking-tighter text-3xl md:text-5xl">Proceso de <span className="text-green-400 font-bold">Implementación</span></h1>
                    <p className="mt-4 text-muted-foreground text-center">
                        Nuestro enfoque metódico para garantizar una implementación exitosa
                    </p>
                </div>
                <div className="mx-auto max-w-4xl mt-4">
                    {Implementation.map((value, id) => (
                        <div key={id} className="flex items-start space-x-4 rounded-lg p-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-primary-foreground">
                            {value.step}
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="md:text-lg font-bold">{value.title}</h3>
                                <p className="text-sm md:text-md md:font-normal text-start">{value.description}</p>
                            </div>
                      </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="h-full flex justify-center items-center">
            <div className="w-full h-[400px] md:h-screen flex flex-col justify-center items-center relative overflow-hidden">
                <div className="flex flex-col items-center justify-center gap-8 z-10 px-5">
                    <div className="flex flex-col text-center gap-5">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Listo para mejorar tu <span className="text-green-500">negocio</span>?</h2>
                        <p className="mt-4 text-muted-foreground md:text-lg">Contáctanos hoy mismo para conocer cómo nuestros servicios pueden ayudarte</p>
                    </div>
                    <div className="flex flex-col min-[400px]:flex-row">
                        <Link href="/contactanos">
                            <Button size="lg" className="gap-1 cursor-pointer text-white bg-green-600 hover:bg-green-500">
                            Solicitar información <ArrowRight className="h-4 w-4" />
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
};

export default Services;
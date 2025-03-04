"use client"

import Image from "next/image";
import horizontalOne from "@/app/img/horizontal-1.jpg";
import horizontalTwo from "@/app/img/horizontal-2.jpg";
import vertical from "@/app/img/vertical.jpg";
import dynamic from "next/dynamic";
import { ArrowRight, BarChart, BookOpen, Clock, Headphones, HeartHandshake, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import soporte from "@/app/img/soporte.jpg"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Ripple } from "@/components/magicui/ripple";

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
        <div className="h-[500px] 2xl:h-[600px] mx-20 flex justify-center items-center">
            {/* Grid principal con Bento Layout */}
            <div className="grid grid-cols-3 grid-rows-6 gap-4 w-full h-full relative">
                {/* Imagen vertical grande (col-izquierda) */}
                <div className="relative col-span-1 row-span-6 rounded-2xl overflow-hidden shadow-lg">
                    <Image src={vertical} alt="fondo-vertical" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
                        <LottieAnimation />
                </div>
                {/* Imagen horizontal superior (col-derecha) */}
                <div className="relative col-span-2 row-span-3 rounded-2xl overflow-hidden shadow-lg">
                    <Image src={horizontalOne} alt="fondo horizontal uno" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 z-10">
                        <h1 className="text-5xl text-white font-bold">
                            Nuestros <span className="text-green-400">Servicios</span>
                        </h1>
                    </div>
                </div>

                {/* Imagen horizontal inferior (col-derecha) */}
                <div className="relative col-span-2 row-span-3 rounded-2xl overflow-hidden shadow-lg">
                    <Image src={horizontalTwo} alt="fondo horizontal dos" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 z-10">
                        <p className="mt-4 text-2xl text-white font-semibold max-w-xl">
                        Ofrecemos las mejores soluciones integrales para la gestión de tu negocio con Aloha NCR.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Servicios Principales */}
        <section id="Services" className="h-full flex flex-col justify-center items-center mt-20 lg:mt-36 2xl:mt-40 mb-20">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Servicios <span className="text-green-500 font-bold">Principales</span></h1>
                    <p className="mt-4 text-xl font-semibold">Soluciones completas para optimizar tu negocio.</p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {ServicesGeneral.map((value, id) => (
                    <Card key={id} className="relative overflow-hidden hover:shadow-lg dark:bg-black dark:shadow-gray-600 transition-all duration-150">
                    <CardContent className="flex flex-col items-center text-center space-y-2">
                      <div className="p-2 rounded-full bg-green-200 dark:text-black mb-2">{value.icon}</div>
                      <h3 className="text-xl font-bold">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                    <BorderBeam
                        duration={6}
                        size={200}
                        className="from-transparent via-green-500 to-transparent"
                    />
                  </Card>
                ))}
            </div>
        </section>

        <section id="Support" className="relative h-[500px] 2xl:h-[580px] mx-20 rounded-lg overflow-auto flex justify-center items-center border">
            {/* Imagen de fondo con desenfoque */}
            <div className="absolute inset-0">
                <Image src={soporte} alt="nosotros background" fill className="object-cover bg-cover" />
            </div>

                <div className="absolute inset-0 bg-black/60"></div>
        
            <div className="absolute flex flex-col items-center justify-center">
                <div className="p-5 bg-opacity-50 rounded-l text-center max-w-4xl space-y-4">
                    <h1 className="text-5xl text-white font-bold">Soporte Técnico <span className="text-5xl text-green-400 font-bold">Especializado</span></h1>
                    <p className="mt-4 text-xl text-white font-semibold">En IntelliPOS entendemos la importancia de contar con un sistema de punto de venta siempre operativo. Por eso, ofrecemos servicios de soporte técnico especializado disponibles 24/7.</p>
                    <Button className="w-48 bg-white text-black hover:bg-gray-200 cursor-pointer">Contactar Soporte<ArrowRight className="h-4 w-4"/></Button>
                </div>
            </div>
        </section>

        {/* Implementacion */}
        <section id="Implementacion" className="h-full flex flex-col justify-center items-center mt-20 lg:mt-36 2xl:mt-40 mb-20">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-5xl font-bold">Proceso de <span className="text-5xl text-green-400 font-bold">Implementación</span></h1>
                    <p className="mt-4 text-xl font-semibold">
                        Nuestro enfoque metódico para garantizar una implementación exitosa
                    </p>
                </div>
                <div className="mx-auto max-w-4xl py-6">
                    {Implementation.map((value, id) => (
                        <div key={id} className="flex items-start space-x-4 rounded-lg p-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-primary-foreground">
                            {value.step}
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-xl font-bold">{value.title}</h3>
                                <p className="text-muted-foreground text-start">{value.description}</p>
                            </div>
                      </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="Bussisnes" className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-8 z-10">
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Listo para mejorar tu <span className="text-green-500">negocio</span>?</h2>
                    <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Contáctanos hoy mismo para conocer cómo nuestros servicios pueden ayudarte</p>
                </div>
                <div className="flex flex-col min-[400px]:flex-row">
                    <Link href="/contactanos">
                        <Button size="lg" className="gap-1 cursor-pointer text-white bg-green-600 hover:bg-green-500">
                        Solicitar información <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
            <div>
            <Ripple mainCircleSize={100} />
            </div>
                
        </section>
        </>
    );
};

export default Services;
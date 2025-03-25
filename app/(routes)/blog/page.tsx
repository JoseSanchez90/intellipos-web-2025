
"use client"

import { CarouselBlog } from "@/app/components/carousel-blog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

const Blog = () => {


    const Noticias = [
        {
            id: 1,
            img: "/images/1.jpg",
            category: "Restaurantes",
            title: "Los 10 principales beneficios de usar el software POS para restaurantes",
            description: "Descubre cómo un sistema de punto de venta moderno puede mejorar la eficiencia.",
            date: "15 de Marzo, 2024",
            link: "https://upkeep.com/es/learning/top-10-benefits-of-using-restaurant-pos-software/"
        },
        {
            id: 2,
            img: "/images/2.jpg",
            category: "Inventario",
            title: "¿Por qué implementar un sistema POS en tu restaurante?",
            description: "Guía completa sobre los sistemas de punto de venta: qué son, cómo funcionan y por qué son esenciales.",
            date: "28 de Febrero, 2024",
            link: "https://www.covermanager.com/es/como-optimizar-la-gestion-de-inventarios-en-restaurantes/"
        },
        {
            id: 3,
            img: "/images/3.jpg",
            category: "Tendencias",
            title: "Cómo elegir el mejor sistema POS para tu negocio",
            description: "La elección de un sistema de puntos de venta (POS) es sin duda una de las decisiones más importantes para tu empresa en materia de pagos.",
            date: "10 de Febrero, 2024",
            link: "https://stripe.com/es/resources/more/how-to-choose-a-pos-system"
        },
        {
            id: 4,
            img: "/images/noticias2.jpg",
            category: "Implementacion",
            title: "El Futuro de los Sistemas POS de Retail",
            description: "¿Alguna vez te has preguntado sobre la velocidad con la que evoluciona la tecnología minorista, especialmente en el ámbito de los sistemas de Punto de Venta (POS)?.",
            date: "5 de Marzo, 2023",
            link: "https://www.hulkapps.com/es/blogs/ecommerce-hub/el-futuro-de-los-sistemas-pos-de-retail-principales-tendencias-que-configuran-la-industria"
        },
        {
            id: 5,
            img: "/images/noticias1.jpg",
            category: "Seguridad",
            title: "Ncr Aloha: Todo Lo Que Necesitas Saber 2024",
            description: "NCR Aloha es una destacada solución tecnológica para restaurantes, compatible con Deliverect. En esta guía introductoria NCR Aloha 101, exploraremos las funciones claves, además de compartir consejos valiosos para una implementación eficaz.",
            date: "18 de Febrero, 2023",
            link: "https://www.deliverect.com/es/blog/sistemas-tpv/ncr-aloha-todo-lo-que-necesitas-saber"
        },
        {
            id: 6,
            img: "/images/NCR-Voyix.png",
            category: "Marketing",
            title: "Aumenta tus ventas usando sistemas POS",
            description: "Los sistemas de punto de venta permiten transacciones comerciales entre el cliente y la empresa. El sistema POS es una red computarizada que muestra exactamente qué productos se han vendido diariamente o mensualmente, cuánto dinero has ganado con las ventas y cuántos productos quedan en tu bodega.",
            date: "3 de Enero, 2023",
            link: "https://datascope.io/es/blog/aumenta-tus-ventas-usando-sistemas-pos/"
        },
    ]

    return ( 
        <section className="w-full h-full flex flex-col justify-center items-center px-2 md:px-20 space-y-4 pb-10 mt-16">
            <div className="pt-6 text-center">
                <h2 className="font-bold tracking-tighter text-3xl md:text-5xl">Blog de <span className="text-green-400">Intelli</span>POS</h2>
                <p className="mt-2 text-muted-foreground text-center">Noticias, consejos y tendencias sobre sistemas Aloha NCR</p>
            </div>
            <div className="w-full h-full">
                <div className="h-full p-4">
                    <div className="hidden w-full h-full p-4 md:grid grid-cols-3 gap-6">
                        {Noticias.map((value, id) => (
                            <Card key={id} className="h-full border border-gray-200 dark:border-gray-800 transition-all duration-200 hover:shadow-lg hover:shadow-gray-400 dark:hover:shadow-gray-700">
                                <CardContent className="h-full flex flex-col justify-between space-y-2">
                                    <div className="space-y-3">
                                        <div>
                                            <Image src={value.img} alt="image" width={400} height={100} className="object-cover rounded-lg" />
                                        </div>
                                        <div>
                                            <span className="rounded-full bg-green-100 text-green-600 py-0.5 px-2 text-sm font-semibold">{value.category}</span>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold leading-tight">{value.title}</p>
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground line-clamp-3">{value.description}</p>
                                        </div>
                                        <div className="flex justify-start items-center space-x-2">
                                            <Calendar className="h-4 w-4" />
                                            <span>{value.date}</span>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <Button asChild className="bg-green-600 hover:bg-green-500">
                                            <a href={value.link} target="_blank" rel="noopener noreferrer">Leer más <ArrowRight /></a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="flex md:hidden">
                        <CarouselBlog />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Blog;
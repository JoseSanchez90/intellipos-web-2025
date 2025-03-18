
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
            title: "5 Ventajas de Implementar un Sistema Aloha NCR en tu Restaurante",
            description: "Descubre cómo un sistema Aloha NCR puede transformar la operativa de tu restaurante y mejorar la experiencia de tus clientes.",
            date: "15 de Junio, 2023",
            link: "https://www.deliverect.com/es-co/blog/sistemas-tpv/ncr-aloha-todo-lo-que-necesitas-saber"
        },
        {
            id: 2,
            img: "/images/2.jpg",
            category: "Inventario",
            title: "Cómo Optimizar la Gestión de Inventario con Aloha NCR",
            description: "Aprende a utilizar las funcionalidades de gestión de inventario de Aloha NCR para reducir costos y evitar pérdidas.",
            date: "28 de Mayo, 2023",
            link: "https://www.deliverect.com/es-co/blog/sistemas-tpv/ncr-aloha-todo-lo-que-necesitas-saber"
        },
        {
            id: 3,
            img: "/images/3.jpg",
            category: "Tendencias",
            title: "Tendencias en Sistemas de Punto de Venta para 2023",
            description: "Análisis de las principales tendencias en sistemas POS que están transformando el sector retail y hostelería.",
            date: "10 de Abril, 2023",
            link: "https://www.deliverect.com/es-co/blog/sistemas-tpv/ncr-aloha-todo-lo-que-necesitas-saber"
        },
        {
            id: 4,
            img: "/images/4.jpg",
            category: "Implementacion",
            title: "Guía Completa: Migración a Aloha NCR desde Otros Sistemas",
            description: "Todo lo que necesitas saber para migrar exitosamente desde tu sistema actual a Aloha NCR sin interrupciones.",
            date: "5 de Marzo, 2023",
            link: "https://www.deliverect.com/es-co/blog/sistemas-tpv/ncr-aloha-todo-lo-que-necesitas-saber"
        },
        {
            id: 5,
            img: "/images/2.jpg",
            category: "Seguridad",
            title: "Seguridad en Sistemas de Punto de Venta: Mejores Prácticas",
            description: "Recomendaciones para proteger tu sistema POS y los datos de tus clientes frente a amenazas cibernéticas.",
            date: "18 de Febrero, 2023",
            link: "https://www.deliverect.com/es-co/blog/sistemas-tpv/ncr-aloha-todo-lo-que-necesitas-saber"
        },
        {
            id: 6,
            img: "/images/2.jpg",
            category: "Marketing",
            title: "Cómo Aumentar las Ventas con Programas de Fidelización en Aloha NCR",
            description: "Estrategias efectivas para implementar programas de fidelización utilizando las funcionalidades de Aloha NCR.",
            date: "3 de Enero, 2023",
            link: "https://www.deliverect.com/es-co/blog/sistemas-tpv/ncr-aloha-todo-lo-que-necesitas-saber"
        },
    ]

    return ( 
        <section className="w-full h-full flex flex-col justify-center items-center px-20 space-y-4 pb-10 mt-16">
            <div className="pt-6">
                <h2 className="font-bold tracking-tighter text-3xl md:text-5xl">Blog de <span className="text-green-400">Intelli</span>POS</h2>
                <p className="mt-2 text-muted-foreground text-center">Noticias, consejos y tendencias sobre sistemas Aloha NCR</p>
            </div>
            <div className="w-full h-full grid grid-cols-6 grid-rows-6">
                <div className="h-full col-span-5 row-span-6 p-4">
                    <div className=" w-full h-full p-4 grid grid-cols-3 gap-6">
                        {Noticias.map((value, id) => (
                            <Card key={id} className="h-full border border-gray-200 dark:border-gray-700" >
                                <CardContent className="h-full flex flex-col justify-between space-y-4">
                                    <div className="">
                                        <div>
                                            <Image src={value.img} alt="image" width={400} height={100} className="object-cover rounded-lg" />
                                        </div>
                                        <div className="pb-2 pt-8">
                                            <span className="rounded-full bg-green-100 text-green-600 py-0.5 px-2 text-sm font-semibold">{value.category}</span>
                                        </div>
                                        <div className="py-2">
                                            <p className="text-xl font-bold leading-tight">{value.title}</p>
                                        </div>
                                        <div className="py-2">
                                            <p className="text-muted-foreground line-clamp-3">{value.description}</p>
                                        </div>
                                        <div className="flex justify-start items-center space-x-2 py-2">
                                            <Calendar className="h-4 w-4" />
                                            <span>{value.date}</span>
                                        </div>
                                    </div>
                                    <div >
                                        <Button className="cursor-pointer" >Leer más <ArrowRight/></Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="row-span-6 col-start-6 my-8 space-y-8">
                    <div className="flex flex-col border border-gray-200 p-4 rounded-lg">
                        <div>1</div>
                    </div>
                    <div className="flex flex-col border border-gray-200 p-4 rounded-lg">
                        <div>2</div>
                    </div>  
                </div>
            </div>
        </section>
     );
}
 
export default Blog;
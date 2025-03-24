import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {  Award, Clock, Leaf, Lightbulb, Shield, Users, } from "lucide-react"

const Valores = [
    {
        id: 1,
        icon: <Award className="h-10 w-10" />,
        title: "Excelencia",
        description: "Nos esforzamos por superar las expectativas en cada proyecto que emprendemos."
    },
    {
        id: 2,
        icon: <Users className="h-10 w-10" />,
        title: "Colaboración",
        description: "Trabajamos estrechamente con nuestros clientes para entender sus necesidades y ofrecer soluciones personalizadas."
    },
    {
        id: 3,
        icon: <Clock className="h-10 w-10" />,
        title: "Compromiso",
        description: "Nos comprometemos con el éxito de nuestros clientes, ofreciendo soporte continuo y soluciones a largo plazo."
    },
    {
        id: 4,
        icon: <Lightbulb className="h-10 w-10" />,
        title: "Innovación",
        description:
          "Buscamos constantemente nuevas formas de mejorar nuestros productos y servicios para mantenernos a la vanguardia del sector.",
      },
      {
        id: 5,
        icon: <Shield className="h-10 w-10" />,
        title: "Integridad",
        description:
          "Actuamos con honestidad y transparencia en todas nuestras operaciones, construyendo relaciones basadas en la confianza.",
      },
      {
        id: 6,
        icon: <Leaf className="h-10 w-10" />,
        title: "Responsabilidad",
        description:
          "Asumimos la responsabilidad de nuestras acciones y nos comprometemos con prácticas sostenibles y éticas en nuestro negocio.",
      },
]


export function CarouselValores() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-2xs h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Valores.map((value, id) => (
          <CarouselItem key={id}>
            <div className="p-1">
              <Card className="w-full h-64 flex flex-col justify-center items-center">
                <CardContent className="w-full h-full flex flex-col items-center text-center space-y-2">
                  <div className="p-2 rounded-full bg-green-200 dark:text-black mb-2">{value.icon}</div>
                  <h3 className="md:text-xl font-bold">{value.title}</h3>
                  <p className="text-sm md:text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

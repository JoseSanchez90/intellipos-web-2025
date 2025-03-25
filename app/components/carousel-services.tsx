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
import { BarChart, BookOpen, Clock, Headphones, HeartHandshake, Wrench } from "lucide-react"
import { BorderBeam } from "@/components/magicui/border-beam"

const ServicesGeneral = [
  {
      id: 1,
      icon: <Wrench className="h-8 w-8" />,
      title: "Instalación y Configuración",
      description: "Instalación profesional y configuración personalizada de sistemas Aloha NCR.",
  },
  {
      id: 2,
      icon: <BookOpen className="h-8 w-8" />,
      title: "Capacitación",
      description: "Programas de formación para que tu equipo aproveche al máximo el sistema.",
  },
  {
      id: 3,
      icon: <Headphones className="h-8 w-8" />,
      title: "Soporte Técnico",
      description: "Asistencia técnica continua para resolver cualquier incidencia rápidamente.",
  },
  {
      id: 4,
      icon: <BarChart className="h-8 w-8" />,
      title: "Consultoría",
      description: "Asesoramiento experto para optimizar tus procesos de negocio.",
  },
  {
      id: 5,
      icon: <Clock className="h-8 w-8" />,
      title: "Mantenimiento",
      description: "Servicios de mantenimiento preventivo y correctivo para tu sistema.",
  },
  {
      id: 6,
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "Integración",
      description: "Integración con otros sistemas y plataformas para una gestión unificada.",
  },
]


export function CarouselServices() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-2xs h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {ServicesGeneral.map((value, id) => (
          <CarouselItem key={id}>
            <div className="p-1">
              <Card className="h-48 relative overflow-hidden">
                <CardContent className="flex flex-col items-center text-center space-y-2">
                  <div className="p-2 rounded-full bg-green-200 dark:text-black mb-2">{value.icon}</div>
                  <h3 className="md:text-xl font-bold">{value.title}</h3>
                  <p className="text-sm md:text-muted-foreground">{value.description}</p>
                </CardContent>
                <BorderBeam
                    duration={6}
                    size={200}
                    className="from-transparent via-green-500 to-transparent"
                />
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

import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { ArrowRight, BriefcaseBusiness, User } from "lucide-react";

const reviews = [
      {
        id: 1,
        name: "Alex Paredes",
        title: "Area de Soporte",
        body: "Analista de Sistemas",
        img: "/images/AlexParedes.png",
      },
      {
        id: 2,
        name: "Daniel Quispe",
        title: "Area de Soporte",
        body: "Analista de Sistemas",
        img: "/images/user.png",
      },
      {
        id: 3,
        name: "Jose Castro",
        title: "Area de Soporte",
        body: "Analista de Sistemas",
        img: "/images/user.png",
      },
      {
        id: 4,
        name: "Jose Sanchez",
        title: "Area de Soporte",
        body: "Analista de Sistemas",
        img: "/images/user.png",
      },
      {
        id: 5,
        name: "Jose Carrasco",
        title: "Area de Desarrollo",
        body: "Programador .NET",
        img: "/images/user.png",
      },
      {
        id: 6,
        name: "Henrry Ordinola",
        title: "Area de Soporte",
        body: "Coordinador TI",
        img: "/images/user.png",
      },
]

const firstRow = reviews.slice(0, reviews.length / 1)

const ReviewCard = ({
    img,
    name,
    title,
    body,
}:{
    img: string;
    name: string;
    title: string;
    body: string;
}) => {
    return (
        <figure
      className={cn(
        "relative h-40 w-72 cursor-default overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-100",
        // dark styles
        "dark:bg-gray-500/[.1] dark:hover:bg-gray-50/[.1]",
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <img className="rounded-full" width="80" height="80" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm lg:text-lg font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs lg:text-sm text-green-600 dark:text-white/40 flex justify-start items-center gap-1"><BriefcaseBusiness width={16} /> {title}</p>
        </div>
      </div>
      <blockquote className="flex justify-start gap-2 items-center mt-2 text-sm lg:text-normal font-medium text-gray-500"><User width={14} /> {body}</blockquote>
    </figure>
    )
}

const TeamCarousel = () => {
    return ( 
        <section className="w-full h-full flex flex-col justify-center items-center overflow-hidden gap-10 mt-10 mb-40 md:mt-20 md:mb-40">
          <div className="h-full space-y-6">
                <div className="flex flex-col justify-center items-center space-y-2 md:space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Nuestro <span className="text-green-500">Equipo</span></h2>
                  <p className="text-muted-foreground md:text-lg">Profesionales dedicados a tu éxito</p>
                </div>
                <div className="relative flex max-w-5xl 2xl:max-w-7xl flex-col items-center justify-center overflow-hidden">
                  <Marquee className="[--duration:40s]">
                      {firstRow.map((review) => (
                      <ReviewCard key={review.id} {...review} />
                      ))}
                  </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
          </div>
        </section>
     );
}
 
export default TeamCarousel;

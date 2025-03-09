import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
    {
        id: 1,
        name: "Ing. Juan Carlos",
        title: "@ppp",
        body: "Gerente General IntelliPOS",
        img: "/images/user.png"
    },
    {
        id: 2,
        name: "Ing. Renan Urteaga",
        title: "@ccc",
        body: "Gerente IntelliPOS",
        img: "/images/user.png"
    },
      {
        id: 3,
        name: "Alex Paredes",
        title: "@Ing. de Sistemas",
        body: "Analista de Sistemas",
        img: "/images/AlexParedes.png",
      },
      {
        id: 4,
        name: "Daniel Quispe",
        title: "@Ing. de Sistemas",
        body: "Analista de Sistemas",
        img: "/images/user.png",
      },
      {
        id: 5,
        name: "Jose Castro",
        title: "@Ing. de Sistemas",
        body: "Analista de Sistemas",
        img: "/images/user.png",
      },
      {
        id: 6,
        name: "Jose Sanchez",
        title: "@Tecnico Informatica",
        body: "Analista de Sistemas",
        img: "/images/user.png",
      },
      {
        id: 7,
        name: "Jose Carrasco",
        title: "@Ing. de Sistemas",
        body: "Programador .NET",
        img: "/images/user.png",
      },
      {
        id: 8,
        name: "Henrry Ordinola",
        title: "@james",
        body: "Coordinador TI",
        img: "/images/user.png",
      },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2);

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
        "relative h-32 w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-100",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <img className="rounded-full" width="64" height="64" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{title}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
    )
}

const TeamCarousel = () => {
    return ( 
        <section className="w-full h-full flex flex-col justify-center items-center overflow-hidden gap-10 mt-48 mb-32 md:mt-0 md:mb-40">
          <div className="h-full space-y-6">
                <div className="flex flex-col justify-center items-center gap-5">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Nuestro <span className="text-green-500">Equipo</span></h2>
                  <p className="text-muted-foreground text-center">Profesionales dedicados a tu éxito</p>
                </div>
                <div className="relative flex max-w-5xl 2xl:max-w-7xl flex-col items-center justify-center overflow-hidden">
                  <Marquee pauseOnHover className="[--duration:30s]">
                      {firstRow.map((review) => (
                      <ReviewCard key={review.id} {...review} />
                      ))}
                  </Marquee>
                  <Marquee reverse pauseOnHover className="[--duration:30s]">
                      {secondRow.map((review) => (
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

import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
      {
        id: 1,
        img: "/images/3a.png",
      },
      {
        id: 2,
        img: "/images/chuck.png",
      },
      {
        id: 3,
        img: "/images/ihop.png",
      },
      {
        id: 4,
        img: "/images/Applebees.png",
      },
      {
        id: 5,
        img: "/images/rocket.png",
      },
      {
        id: 6,
        img: "/images/Palermo.png",
      },
      {
        id: 7,
        img: "/images/tada.png",
      },
      {
        id: 8,
        img: " /images/elperuanito.png",
      },
]

const firstRow = reviews.slice(0, reviews.length / 1)
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
}:{
    img: string;
}) => {
    return (
        <figure className={cn(
            "relative sm:h-40 w-60 sm:w-80 overflow-hidden rounded-xl border-none",
            // light styles
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            // dark styles
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}>
            
                <img className="rounded-lg" width="full" height="full" alt="" src={img} />

        </figure>
    )
}

const Clients = () => {
    return ( 
      <section className="w-full h-full md:h-screen flex flex-col justify-center items-center mt-32 md:mt-0">
            <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden gap-10">
              <div className="flex flex-col justify-center items-center gap-5">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Nuestros <span className="text-green-500">Clientes</span></h2>
                  <p className="text-muted-foreground md:text-lg text-center">Empresas que confían en IntelliPOS para sus operaciones diarias</p>
              </div>
              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-5">
                  <Marquee className="[--duration:50s]">
                      {firstRow.map((review) => (
                          <ReviewCard key={review.id} {...review} />
                      ))}
                  </Marquee>
                  {/* <Marquee reverse pauseOnHover className="[--duration:30s]">
                      {secondRow.map((review) => (
                          <ReviewCard key={review.id} {...review} />
                      ))}
                  </Marquee> */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
              </div>
          </div>
      </section>
        
     );
}
 
export default Clients;

import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
      {
        id: 1,
        img: "/images/NCR_LOGO.png",
      },
      {
        id: 2,
        img: "/images/3NSTAR_LOGO.png",
      },
      {
        id: 3,
        img: "/images/SOLUX_LOGO.png",
      },
      {
        id: 4,
        img: "/images/HP_LOGO.png",
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
            
                <img className="rounded-lg cursor-pointer" width="full" height="full" alt="" src={img} />

        </figure>
    )
}

const ProductsCarousel = () => {
    return ( 
        <section className="w-full max-w-5xl h-full flex flex-col justify-center items-center overflow-hidden">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
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
        </section>
     );
}
 
export default ProductsCarousel;


import { Ripple } from "@/components/magicui/ripple";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Ready = () => {
    return ( 
        <section className="w-full h-full md:h-screen flex flex-col justify-center items-center relative overflow-hidden ">
            <div className="flex flex-col h-[600px] items-center justify-center gap-8 z-10">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">¿Listo para optimizar <span className="text-green-500">tu negocio</span>?</h2>
                    <p className="text-muted-foreground md:text-lg text-center">Contáctanos hoy mismo para una demostración personalizada</p>
                </div>
                <div className="flex gap-5 min-[400px]:flex-row">
                    <Link href="/contactanos">
                        <Button size="lg" className="gap-1 cursor-pointer text-white bg-green-600 hover:bg-green-500">
                        Contáctanos <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href="/productos">
                        <Button size="lg" variant="outline" className="cursor-pointer dark:bg-white dark:text-black hover:dark:bg-gray-200">
                        Ver Productos
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
        </section>
     );
}
 
export default Ready;
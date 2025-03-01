import { BorderBeam } from "@/components/magicui/border-beam";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MonitorSmartphone } from "lucide-react";

const CardHome = () => {
    return ( 
        <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-flex items-center rounded-full border border-primary/20 dark:text-black bg-green-100 px-4 py-2 text-sm font-semibold text-primary">
                        ¿Por qué elegirnos?
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ventajas de <span className="text-green-500">Intelli</span>POS
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Descubre por qué los mejores negocios confían en nuestras soluciones Aloha NCR
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 max-w-5xl gap-20">
                <Card className="relative w-[350px] overflow-hidden hover:shadow-lg dark:shadow-gray-600 transition-all duration-150">
                    <CardHeader className="flex justify-center items-center">
                        <div className="p-2 rounded-full bg-green-100 mb-2">
                            <MonitorSmartphone className="h-10 w-10 text-black" />
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2 text-center">
                        <CardTitle>Interfaz Intuitiva</CardTitle>
                        <CardDescription>Diseñada para facilitar la operación y reducir el tiempo de capacitación.</CardDescription>
                    </CardContent>
                    <BorderBeam
                        duration={6}
                        size={200}
                        className="from-transparent via-green-500 to-transparent"
                    />
                </Card>
                <Card className="relative w-[350px] overflow-hidden hover:shadow-lg dark:shadow-gray-600 transition-all duration-150">
                    <CardHeader className="flex justify-center items-center">
                        <div className="p-2 rounded-full bg-green-100 mb-2">
                            <MonitorSmartphone className="h-10 w-10 text-black" />
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2 text-center">
                        <CardTitle>Interfaz Intuitiva</CardTitle>
                        <CardDescription>Diseñada para facilitar la operación y reducir el tiempo de capacitación.</CardDescription>
                    </CardContent>
                    <BorderBeam
                        duration={6}
                        size={200}
                        className="from-transparent via-green-500 to-transparent"
                    />
                </Card>
                <Card className="relative w-[350px] overflow-hidden hover:shadow-lg dark:shadow-gray-600 transition-all duration-150">
                    <CardHeader className="flex justify-center items-center">
                        <div className="p-2 rounded-full bg-green-100 mb-2">
                            <MonitorSmartphone className="h-10 w-10 text-black" />
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2 text-center">
                        <CardTitle>Interfaz Intuitiva</CardTitle>
                        <CardDescription>Diseñada para facilitar la operación y reducir el tiempo de capacitación.</CardDescription>
                    </CardContent>
                    <BorderBeam
                        duration={6}  
                        size={200}
                        className="from-transparent via-green-500 to-transparent"
                    />
                </Card>
            </div>
        </div>
     );
}
 
export default CardHome;
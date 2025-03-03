import Image from "next/image";
import fondo from "@/app/img/fondonosotros.jpg"
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import hands from "@/app/img/hands.gif"
import plane from "@/app/img/plane.gif"
import { Award, Clock, Users } from "lucide-react";
import user from "@/app/img/user.png"
import { SpinningText } from "@/components/magicui/spinning-text";

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
]

const Team = [
    {
        id: 1,
        image: <Image src={user} alt="" /> ,
        name: "Alex Paredes",
        position: "Analista de Sistemas",
    },
    {
        id: 2,
        image: <Image src={user} alt="" /> ,
        name: "Daniel Quispe",
        position: "Analista de Sistemas",
    },
    {
        id: 3,
        image: <Image src={user} alt="" /> ,
        name: "Jose Castro",
        position: "Analista de Sistemas",
    },
    {
        id: 4,
        image: <Image src={user} alt="" /> ,
        name: "Jose Sanchez",
        position: "Analista de Sistemas",
    },
    {
        id: 5,
        image: <Image src={user} alt="" /> ,
        name: "Jose Carrasco",
        position: "Programador .NET",
    },
    {
        id: 6,
        image: <Image src={user} alt="" /> ,
        name: "Henrry Ordinola",
        position: "Coordinador",
    },
]

const About = () => {
    return ( 
        <>
            <div className="relative h-[500px] 2xl:h-[580px] mx-20 rounded-lg overflow-hidden flex justify-center items-center border">
                {/* Imagen de fondo con desenfoque */}
                <div className="absolute inset-0">
                <Image src={fondo} alt="nosotros background" fill className="object-cover bg-cover" />
                </div>

                <div className="absolute inset-0 bg-black/60"></div>
        
                <div className="absolute flex flex-col items-center justify-center">
                <div className="p-5 bg-opacity-50 rounded-l text-center max-w-4xl">
                    <h1 className="text-5xl text-white font-bold">Sobre <span className="text-5xl text-green-400 font-bold">Intelli</span>POS</h1>
                    <p className="mt-4 text-xl text-white font-semibold">Conoce nuestra historia y misión como proveedores líderes de sistemas Aloha NCR IntelliPOS nació en 2005 con la visión de transformar la manera en que los negocios gestionan sus operaciones de venta. Desde entonces, nos hemos convertido en líderes en la implementación de sistemas Aloha NCR, ayudando a cientos de empresas a optimizar sus procesos y mejorar la experiencia de sus clientes.</p>
                </div>
                </div>
            </div>

            <div className="mx-20 h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="p-5 bg-opacity-50 rounded-l text-center max-w-3xl">
                        <h1 className="text-5xl font-bold">Nuestra <span className="text-5xl text-green-400 font-bold">Mision</span> y <span className="text-5xl text-green-400 font-bold">Vision</span></h1>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                    <Card className="relative overflow-hidden hover:shadow-lg dark:bg-black dark:shadow-gray-600 transition-all duration-150">
                        <CardContent className="p-6">
                            <div className="flex justify-center items-center gap-10 mb-4">
                                <h3 className="text-xl font-bold">Misión</h3>
                                <Image src={hands} alt="manos" className="w-12" />
                            </div>
                            <p className="text-muted-foreground">
                            Proporcionar soluciones tecnológicas innovadoras que permitan a nuestros clientes optimizar sus
                            operaciones, incrementar su eficiencia y mejorar la experiencia de sus usuarios finales, contribuyendo
                            así al crecimiento y éxito de sus negocios.
                            </p>
                        </CardContent>
                        <BorderBeam
                            duration={6}
                            size={200}
                            className="from-transparent via-green-500 to-transparent"
                        />
                    </Card>
                    <Card className="relative overflow-hidden hover:shadow-lg dark:bg-black dark:shadow-gray-600 transition-all duration-150">
                        <CardContent className="p-6">
                            <div className="flex justify-center items-center gap-10 mb-4">
                                <h3 className="text-xl font-bold">Visión</h3>
                                <Image src={plane} alt="manos" className="w-12" />
                            </div> 
                            <p className="text-muted-foreground">
                            Ser reconocidos como el socio tecnológico de referencia en el sector de sistemas de punto de venta,
                            liderando la innovación y estableciendo nuevos estándares de calidad y servicio en la industria.
                            </p>
                        </CardContent>
                        <BorderBeam
                            duration={6}
                            size={200}
                            className="from-transparent via-green-500 to-transparent"
                        />
                    </Card>
                </div>
            </div>

            <div className="h-screen mx-20 flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros <span className="text-green-500">Valores</span></h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Los principios que guían nuestro trabajo diario</p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
                    {Valores.map((value, id) => (
                        <Card key={id} className="relative overflow-hidden hover:shadow-lg dark:bg-black dark:shadow-gray-600 transition-all duration-150">
                        <CardContent className="flex flex-col items-center text-center space-y-2">
                          <div className="p-2 rounded-full bg-green-200 dark:text-black mb-2">{value.icon}</div>
                          <h3 className="text-xl font-bold">{value.title}</h3>
                          <p className="text-muted-foreground">{value.description}</p>
                        </CardContent>
                        <BorderBeam
                            duration={6}
                            size={200}
                            className="from-transparent via-green-500 to-transparent"
                        />
                      </Card>
                    ))}
                </div>
            </div>

            <div className="h-screen flex justify-center items-center mx-20 mb-20 2xl:mb-0">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestro <span className="text-green-500">Equipo</span></h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Profesionales dedicados a tu éxito</p>
                    </div>
                    <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
                        {Team.map((value, id) => (
                            <Card key={id} className="w-72 h-full relative overflow-hidden hover:shadow-lg dark:bg-black dark:shadow-gray-600 transition-all duration-150">
                                <CardContent className="flex flex-col items-center text-center space-y-2">
                                    <div className="relative h-full overflow-hidden rounded-full">
                                        <SpinningText className="text-green-600 text-md font-bold top-14">intellipos - intellipos - </SpinningText>
                                        <div className="h-28 w-28">{value.image}</div>
                                    </div>
                                    <h3 className="text-xl font-bold">{value.name}</h3>
                                    <p className="text-sm text-primary">{value.position}</p>
                                </CardContent>
                                <BorderBeam
                                    duration={6}
                                    size={200}
                                    className="from-transparent via-green-500 to-transparent"
                                />
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default About;
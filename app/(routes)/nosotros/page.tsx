import Image from "next/image";
import fondo from "@/app/img/fondonosotros.jpg"
import fondo2 from "@/app/img/nosotros.jpg"
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import hands from "@/app/img/hands.gif"
import plane from "@/app/img/plane.gif"
import { Award, Clock, Users } from "lucide-react";
import TeamCarousel from "@/app/components/teamCarousel";

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

const About = () => {
    return ( 
        <>
            <section className="w-full h-screen flex justify-center items-center">
                <div className="relative w-full h-[550px] md:h-[900px] xl:h-[400px] 2xl:h-[500px] md:mt-0 mx-5 xl:mx-20 rounded-lg overflow-auto flex justify-center items-center border">
                    {/* Imagen de fondo con desenfoque */}
                    <div className="hidden sm:flex absolute inset-0">
                        <Image src={fondo} alt="nosotros background" fill className="object-cover bg-cover" />
                    </div>
                    <div className="sm:hidden flex absolute inset-0">
                        <Image src={fondo2} alt="nosotros background" fill className="object-cover bg-cover" />
                    </div>

                    <div className="absolute inset-0 bg-black/60"></div>
            
                    <div className="absolute flex flex-col items-center justify-center">
                        <div className="p-5 bg-opacity-50 rounded-l text-center max-w-5xl">
                            <h1 className="font-bold tracking-tighter text-white text-3xl md:text-5xl">Somos <span className="text-green-400 font-bold">IntelliPOS, </span>representantes de la Corporación <span className="text-green-400 font-bold">Aloha NCR</span></h1>
                            <p className="mt-4 text-sm md:text-xl text-white font-semibold">Aloha NCR es una solución de software líder en el sector de la hospitalidad, con 30 años de experiencia y presencia en más de 100,000 restaurantes a nivel mundial. Reconocida como una de las 10 mejores soluciones en su categoría, Aloha NCR se especializa en la gestión eficiente de operaciones en restaurantes, brindando tecnología innovadora y confiable. En Perú, está disponible a través de IntelliPOS S.A.C. desde 2017, ofreciendo soporte y adaptación a las necesidades del mercado local.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mision y Vision */}
            <section className="h-full flex flex-col justify-center gap-5 items-center mx-5 md:mx-20 ">
                <div className="w-full h-screen space-y-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="p-5 bg-opacity-50 rounded-l text-center max-w-3xl">
                            <h1 className="font-bold tracking-tighter text-3xl md:text-5xl">Nuestra <span className="text-green-400 font-bold">Mision</span> y <span className="text-green-400 font-bold">Vision</span></h1>
                        </div>
                    </div>
                    <div className="max-w-5xl grid lg:grid-cols-2 gap-6 md:py-12 mx-auto">
                        <Card className="relative overflow-hidden hover:shadow-lg dark:shadow-gray-600 transition-all duration-150">
                            <CardContent className="md:p-6">
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
                        <Card className="relative h overflow-hidden hover:shadow-lg dark:shadow-gray-600 transition-all duration-150">
                            <CardContent className="md:p-6">
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
            </section>

            {/* Nuestros Valores */}
            <section className="h-screen mx-5 md:mx-20 flex flex-col justify-center items-center">
                <div className="h-screen space-y-6 md:space-y-2">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="font-bold tracking-tighter text-3xl md:text-5xl">Nuestros <span className="text-green-500">Valores</span></h2>
                            <p className="mt-4 text-muted-foreground md:text-lg">Los principios que guían nuestro trabajo diario</p>
                        </div>
                    </div>
                    <div className="mx-auto w-72 md:w-full grid md:max-w-5xl gap-4 md:gap-6 md:py-12 md:grid-cols-3">
                        {Valores.map((value, id) => (
                            <Card key={id} className="relative overflow-hidden hover:shadow-lg dark:shadow-gray-600 transition-all duration-150">
                                <CardContent className="flex flex-col items-center text-center space-y-2">
                                <div className="p-2 rounded-full bg-green-200 dark:text-black mb-2">{value.icon}</div>
                                <h3 className="text-lg md:text-xl font-bold">{value.title}</h3>
                                <p className="text-sm md:text-muted-foreground">{value.description}</p>
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
            </section>
            
            {/* Equipo */}
            <TeamCarousel />
        </>
     );
}
 
export default About;
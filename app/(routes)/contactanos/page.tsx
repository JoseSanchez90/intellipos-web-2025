import { Building, Handshake, Mail, PencilLine, Phone, Send, User } from "lucide-react";
import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Separator } from "@radix-ui/react-dropdown-menu";

const Contact = () => {
    return ( 
        <section className="w-full h-full md:h-screen flex flex-col justify-center items-center space-y-4 px-5 my-22 md:px-20 md:my-28 2xl:my-24">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center text-center">
                    <h2 className="font-bold tracking-tighter text-3xl md:text-5xl">Estamos aquí <span className="text-green-400">para ayudarte</span></h2>
                    <p className="mt-2 text-muted-foreground text-center">Nuestro equipo está listo para responder tus preguntas y ayudarte a encontrar la solución perfecta para tu negocio.</p>
                </div>
                <div className="h-full flex flex-col md:grid md:grid-cols-2 w-full gap-10 mt-16">
                    {/* Envianos un mensaje */}
                    <div>
                        <div className="space-y-6">
                            <h3 className="font-bold tracking-tighter text-xl md:text-3xl text-center">Envianos un <span className="text-green-400">mensaje</span></h3>
                            <div>
                                <form className="space-y-4 md:space-y-0">
                                    <div className="space-y-4 md:space-y-0">
                                        <div className="flex flex-col md:flex-row gap-5 md:space-y-4">
                                            <div className="w-full space-y-2">
                                                <div className="flex justify-start items-center gap-2">
                                                    <User size={16} className="text-green-600"/>
                                                    <label>Nombre completo</label>
                                                </div>
                                                <input type="text" className="w-full py-2 px-3 rounded-lg border border-gray-400 outline-green-500" placeholder="Juan Perez" />
                                            </div>
                                            <div className="w-full space-y-2">
                                                <div className="flex justify-start items-center gap-2">
                                                    <Mail size={16} className="text-green-600"/>
                                                    <label>Correo electronico</label>
                                                </div>
                                                <input type="email" className="w-full py-2 px-3 rounded-lg border border-gray-400 outline-green-500" placeholder="Juan@ejemplo.com" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-5 md:space-y-4">
                                            <div className="w-full space-y-2">
                                                <div className="flex justify-start items-center gap-2">
                                                    <Phone size={16} className="text-green-600"/>
                                                    <label>Telefono</label>
                                                </div>
                                                <input type="number" className="w-full py-2 px-3 rounded-lg border border-gray-400 outline-green-500 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]" placeholder="987654321" />
                                            </div>
                                            <div className="w-full space-y-2">
                                                <div className="flex justify-start items-center gap-2">
                                                    <Building size={16} className="text-green-600"/>
                                                    <label>Empresa</label>
                                                </div>
                                                <input type="text" className="w-full py-2 px-3 rounded-lg border border-gray-400 outline-green-500" placeholder="Nombre de tu empresa" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex flex-row gap-2 items-center">
                                                <Handshake size={16} className="text-green-600"/>
                                                <h4>Asunto</h4>
                                            </div>
                                            <Select>
                                                <SelectTrigger className="w-full rounded-lg border border-gray-400">
                                                    <SelectValue placeholder="Selecciona un asunto" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="light">Información general</SelectItem>
                                                    <SelectItem value="dark">Solicitud de demostración</SelectItem>
                                                    <SelectItem value="system">Cotización</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex flex-row gap-2 items-center">
                                                <PencilLine size={16} className="text-green-600"/>
                                                <h4>Mensaje</h4>
                                            </div>
                                            <textarea name="" id="" placeholder="¿En que podemos ayudarte?" className="outline-green-500 border border-gray-400 rounded-lg py-2 px-3 w-full h-full resize-none" cols={5} rows={3} />
                                        </div>
                                        <div className="w-full">
                                            <Button type="submit" className="w-full cursor-pointer bg-green-600 hover:bg-green-500"><Send/> Enviar mensaje</Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Separator className="flex sm:hidden" />
                    {/* Ubicacion */}
                    <div>
                        <div className="space-y-4">
                            <h3 className="font-bold tracking-tighter text-xl md:text-3xl text-center">Puedes <span className="text-green-400">visitarnos</span></h3>
                            <iframe className="w-full h-[300px] border rounded-lg shadow-lg shadow-gray-400 dark:shadow-gray-600" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.9529615889487!2d-77.001032725307!3d-12.11537104318117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7ef85e810b1%3A0xbceae79c8d14b4ed!2sC.%20Sanzio%20150%2C%20Surquillo%2015038!5e0!3m2!1ses-419!2spe!4v1742829165817!5m2!1ses-419!2spe" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>    
                        <div className="w-full flex flex-col md:grid md:grid-cols-2 mt-10 gap-5">
                            <Card className="relative overflow-hidden flex flex-col justify-center items-center transition-all duration-150 space-y-2">
                                <CardContent className="flex flex-col justify-center items-center">
                                    <Mail className="text-green-600"/>
                                    <p className="font-bold">Email</p>
                                    <p className="text-green-600">Contacto@intellipos.com.pe</p>
                                </CardContent>
                                <BorderBeam
                                    duration={10}
                                    size={200}
                                    className="from-transparent via-green-500 to-transparent"
                                />
                            </Card>
                            <Card className="relative overflow-hidden flex flex-col justify-center items-center transition-all duration-150 space-y-2">
                                <CardContent className="flex flex-col justify-center items-center">
                                    <Phone className="text-green-600"/>
                                    <p className="font-bold">Telefono</p>
                                    <p className="text-green-600">(01) 776 9520</p>
                                </CardContent>
                                <BorderBeam
                                    duration={10}
                                    size={200}
                                    className="from-transparent via-green-500 to-transparent"
                                />
                            </Card>
                        </div>                  
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;
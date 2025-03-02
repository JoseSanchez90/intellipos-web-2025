import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return ( 
    <footer className="bg-gray-100 dark:bg-black">
        <div className="w-full py-6 px-4 lg:px-8 flex justify-center items-center">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-center">
                <span className="text-green-500">Intelli</span>POS
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Soluciones de punto de venta Aloha NCR para restaurantes y comercios.
              </p>
              <div className="flex flex-row justify-center space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <FaFacebook className="w-5 h-5 hover:text-blue-600" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <FaLinkedin className="w-5 h-5 hover:text-blue-700" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="hidden w-full md:flex justify-center">
              <div>
                <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2 text-sm">
                    <li>
                    <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                        Inicio
                    </Link>
                    </li>
                    <li>
                    <Link href="/nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                        Nosotros
                    </Link>
                    </li>
                    <li>
                    <Link href="/servicio" className="text-muted-foreground hover:text-primary transition-colors">
                        Servicio
                    </Link>
                    </li>
                    <li>
                    <Link href="/productos" className="text-muted-foreground hover:text-primary transition-colors">
                        Productos
                    </Link>
                    </li>
                </ul>
              </div>
            </div>
            <div className="hidden w-full md:flex justify-center">
              <div>
                <h3 className="text-lg font-semibold mb-4">Recursos</h3>
                <ul className="space-y-2 text-sm">
                    <li>
                    <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                        Blog
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        Soporte Técnico
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        Documentación
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        FAQ
                    </Link>
                    </li>
                </ul>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground">Av. Principal #123, Ciudad</li>
                    <li className="text-muted-foreground">info@intellipos.com</li>
                    <li className="text-muted-foreground">+1 (555) 123-4567</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-10 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} IntelliPOS. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;
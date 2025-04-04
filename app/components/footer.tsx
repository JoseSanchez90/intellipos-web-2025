import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return ( 
    <footer className="h-full bg-gray-100 dark:bg-black">
        <div className="w-full h-full py-6 px-4 lg:px-8 flex justify-center">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex justify-center items-center gap-0.5">
                <p className="text-2xl sm:text-3xl font-extrabold text-green-600 letter-logo">Intelli</p><span className="text-xl sm:text-2xl font-extrabold md:font-bold text-white bg-green-600 px-1.5 py-0.5 rounded-lg">POS</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Soluciones de punto de venta Aloha NCR para restaurantes y comercios.
              </p>
              <div className="flex flex-row justify-center space-x-4">
                <Link href="https://www.facebook.com/intelliposperu2" target="_autoblank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <FaFacebook className="w-5 h-5 hover:text-blue-600" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://www.linkedin.com/company/intellipos-sac/" target="_autoblank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
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
                      <Link href="/" scroll={false} className="text-muted-foreground hover:text-primary transition-colors">
                          Inicio
                      </Link>
                    </li>
                    <li>
                      <Link href="/nosotros" scroll={false} className="text-muted-foreground hover:text-primary transition-colors">
                          Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link href="/servicio" scroll={false} className="text-muted-foreground hover:text-primary transition-colors">
                          Servicio
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos" scroll={false} className="text-muted-foreground hover:text-primary transition-colors">
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
                    <Link href="/blog" scroll={false} className="text-muted-foreground hover:text-primary transition-colors">
                        Blog
                    </Link>
                    </li>
                    <li>
                    <Link href="contactanos" scroll={false} className="text-muted-foreground hover:text-primary transition-colors">
                        Contáctanos
                    </Link>
                    </li>
                </ul>
              </div>
            </div>
            <div className="hidden w-full md:flex justify-center">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground">Calle Sanzio #150, Surquillo</li>
                    <li className="text-muted-foreground">contacto@intellipos.com.pe</li>
                    <li className="text-muted-foreground">(01) 776 9520</li>
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
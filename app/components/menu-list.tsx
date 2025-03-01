"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';

const MenuList = () => {

    const pathname = usePathname();

    return ( 
        <div className="flex justify-center items-center gap-6">
            <Link href="/" className={`relative group hover:text-green-600 hover:dark:text-green-400 ${pathname === '/' ? 'text-green-600 dark:text-green-400' : ''}`}>
                Inicio
                <span className={`absolute -bottom-1 left-0 w-full h-[2.5px] bg-green-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${pathname === '/' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>

            <Link href="/nosotros" className={`relative group hover:text-green-600 hover:dark:text-green-400 ${pathname === '/nosotros' ? 'text-green-600 dark:text-green-400' : ''}`}>
                Nosotros
                <span className={`absolute -bottom-1 left-0 w-full h-[2.5px] bg-green-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${pathname === '/nosotros' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>

            <Link href="/servicio" className={`relative group hover:text-green-600 ${pathname === '/servicio' ? 'text-green-600 dark:text-green-400' : ''}`}>
                Servicio
                <span className={`absolute -bottom-1 left-0 w-full h-[2.5px] bg-green-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${pathname === '/servicio' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>

            <Link href="/productos" className={`relative group hover:text-green-600 ${pathname === '/productos' ? 'text-green-600 dark:text-green-400' : ''}`}>
                Productos
                <span className={`absolute -bottom-1 left-0 w-full h-[2.5px] bg-green-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${pathname === '/productos' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>

            <Link href="/blog" className={`relative group hover:text-green-600 ${pathname === '/blog' ? 'text-green-600 dark:text-green-400' : ''}`}>
                Blog
                <span className={`absolute -bottom-1 left-0 w-full h-[2.5px] bg-green-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${pathname === '/blog' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>

            <Link href="/contactanos" className={`relative group hover:text-green-600 ${pathname === '/contactanos' ? 'text-green-600 dark:text-green-400' : ''}`}>
                Contáctanos
                <span className={`absolute -bottom-1 left-0 w-full h-[2.5px] bg-green-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${pathname === '/contactanos' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>
        </div>
     );
}
 
export default MenuList;
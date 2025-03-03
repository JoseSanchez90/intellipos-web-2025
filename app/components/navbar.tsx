"use client"

import MenuList from "./menu-list";
import MenuListMobile from "./menu-list-mobile";
import { ModeToggle } from "./toggle";
import { usePathname } from 'next/navigation';
import { useEffect } from "react";

const Navbar = () => {

    const pathname = usePathname();
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, [pathname]); // Se ejecuta cuando cambia la URL

    return ( 
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-black/10 w-full h-20 flex flex-row justify-between items-center px-10 lg:px-24">
            <div>
                <a href="/" className="text-2xl font-extrabold text-green-500">INTELLI<span className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">POS</span></a>
            </div>
            <div className="hidden md:flex">
                <MenuList />
            </div>
            <div className="flex md:hidden">
                <MenuListMobile />
            </div>
            <div>
                <ModeToggle />
            </div>
        </nav>
     );
}
 
export default Navbar;
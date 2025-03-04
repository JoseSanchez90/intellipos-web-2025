"use client"

import MenuListMobile from "./menu-list-mobile";
import { ModeToggle } from "./toggle";
import { useRouter } from 'next/navigation';
import { MenuList } from "./menu-list";
import { useEffect } from "react";

const Navbar = () => {

    const router = useRouter()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []); // Se ejecuta cuando cambia la URL

    return ( 
        <nav className="md:sticky md:top-0 md:z-50 md:backdrop-blur-sm bg-white/70 dark:bg-black/50 flex justify-between items-center p-4 px-5 sm:px-28 2xl:px-48">
            <h1 className="text-xl sm:text-2xl font-extrabold text-green-500 cursor-pointer" onClick={() => router.push("/")}>INTELLI<span className="text-xl sm:text-2xl font-extrabold text-gray-800 dark:text-gray-100">POS</span></h1>
            <div className="hidden lg:flex">
                <MenuList />
            </div>
            <div className="flex lg:hidden">
                <MenuListMobile />
            </div>
            <ModeToggle />           
        </nav>
     );
}
 
export default Navbar;
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
        <nav className="md:sticky md:top-0 md:z-50 md:backdrop-blur-sm bg-white/70 dark:bg-black/50 flex justify-between items-center py-6 px-6 md:px-28 2xl:px-32">
            <div className="flex items-center space-x-0.5">
                <button onClick={() => router.push("/")} className="flex cursor-pointer">
                    <h1 className="text-xl sm:text-3xl font-extrabold text-green-600 cursor-pointer letter-logo">Intelli</h1>
                    <span className="text-xl sm:text-2xl font-bold text-white bg-green-600 px-1.5 py-0.5 rounded-lg dark:text-gray-100">POS</span>
                </button>
            </div>
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
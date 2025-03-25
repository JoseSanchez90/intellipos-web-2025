"use client"

import MenuListMobile from "./menu-list-mobile";
import { ModeToggle } from "./toggle";
import { useRouter } from 'next/navigation';
import { MenuList } from "./menu-list";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []); // Se ejecuta cuando cambia la URL

      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return ( 
        <nav className="w-full flex justify-center items-center">
            <div className={`fixed top-0 z-50 flex justify-between items-center py-4 px-6 md:px-28 2xl:px-32 transition-all duration-500 ${isScrolled ? "backdrop-blur-sm bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-gray-700 md:rounded-full md:px-20 text-sm md:mt-3 w-full md:w-[80%] transform" : "text-base w-full"}`}>
                <div className="flex items-center space-x-0.5">
                    <Link href="/" scroll={false} className="flex justify-center items-center gap-0.5 cursor-pointer">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-green-600 cursor-pointer letter-logo">Intelli</h1>
                        <span className="text-xl sm:text-2xl font-extrabold md:font-bold text-white bg-green-600 px-1.5 py-0.5 rounded-lg">POS</span>
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <MenuList />
                </div>
                <div className="flex lg:hidden">
                    <MenuListMobile />
                </div>
                <div>
                  <ModeToggle />  
                </div>   
            </div>        
        </nav>
     );
}
 
export default Navbar;
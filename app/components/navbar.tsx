"use client"

import MenuListMobile from "./menu-list-mobile";
import { ModeToggle } from "./toggle";
import { useRouter } from 'next/navigation';
import { MenuList } from "./menu-list";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    const router = useRouter()

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
            <section className={`fixed top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-black/0 flex justify-between items-center py-4 px-6 md:px-28 2xl:px-32 transition-all duration-500 ${isScrolled ? "shadow-lg dark:shadow-gray-600 md:rounded-full bg-slate-100 dark:bg-black/80 md:px-20 text-sm md:mt-4 mx-2 w-full md:w-[85%] transform" : "text-base w-full"}`}>
                <div className="flex items-center space-x-0.5">
                    <button onClick={() => router.push("/")} className="flex justify-center items-center gap-0.5 cursor-pointer">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-green-600 cursor-pointer letter-logo">Intelli</h1>
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
            </section>        
        </nav>
     );
}
 
export default Navbar;
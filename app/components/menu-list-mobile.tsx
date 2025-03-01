import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";
import { MdMenuOpen } from "react-icons/md";

const MenuListMobile = () => {
    return ( 
        <Popover>
            <PopoverTrigger>
                <MdMenuOpen size={24} />
            </PopoverTrigger>
            <PopoverContent className="w-40">
                <div className="flex flex-col justify-center items-start">
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/servicio">Servicio</Link>
                    <Link href="/productos">Productos</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contactanos">Contáctanos</Link>
                </div>
            </PopoverContent>
        </Popover>
     );
}
 
export default MenuListMobile;
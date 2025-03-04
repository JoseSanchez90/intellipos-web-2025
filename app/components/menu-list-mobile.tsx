import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MenuListMobile = () => {

    const [open, setOpen] = useState(false);
    const closePopover = () => setOpen(false);

    return ( 
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                <Menu size={32} />
            </PopoverTrigger>
            <PopoverContent onClick={() => setOpen(!open)} className="w-40">
                <div className="flex flex-col justify-center items-start">
                    <Link href="/nosotros" className="block" onClick={closePopover}>Nosotros</Link>
                    <Link href="/servicio" className="block" onClick={closePopover}>Servicio</Link>
                    <Link href="/productos" className="block" onClick={closePopover}>Productos</Link>
                    <Link href="/blog" className="block" onClick={closePopover}>Blog</Link>
                    <Link href="/contactanos" className="block" onClick={closePopover}>Contáctanos</Link>
                </div>
            </PopoverContent>
        </Popover>
     );
}
 
export default MenuListMobile;
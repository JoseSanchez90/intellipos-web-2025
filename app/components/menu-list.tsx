"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function MenuList() {

  const pathname = usePathname();

  return (
    <nav className="w-full flex flex-row items-center justify-between gap-5">
      {[
        { href: "/", label: "Inicio" },
        { href: "/nosotros", label: "Nosotros" },
        { href: "/servicio", label: "Servicio" },
        { href: "/productos", label: "Productos" },
        { href: "/blog", label: "Blog" },
        { href: "/contactanos", label: "Contáctanos" },
      ].map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "text-sm font-medium transition-colors relative group",
            pathname === href ? "text-green-600" : "text-foreground/60"
          )}
          scroll={false}
        >
          {label}
          <span
            className={cn(
              "absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full",
              pathname === href ? "w-full" : "bg-black dark:bg-gray-400"
            )}
          ></span>
        </Link>
      ))}
    </nav>
  )
}
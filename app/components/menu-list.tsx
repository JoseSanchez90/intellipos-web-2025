"use client"

import { usePathname } from 'next/navigation';
import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function MenuList() {

  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref scroll={false}>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}>
              Inicio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/nosotros" legacyBehavior passHref scroll={false}>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}>
              Nosotros
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/servicio" legacyBehavior passHref scroll={false}>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}>
              Servicio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/productos" legacyBehavior passHref scroll={false}>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}>
              Productos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref scroll={false}>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contactanos" legacyBehavior passHref scroll={false}>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}>
              Contáctanos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"

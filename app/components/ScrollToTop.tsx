"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname(); // Detecta cambios de URL

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]); // Se ejecuta cada vez que cambia la URL

  return null; // No renderiza nada, solo ejecuta la lógica
}

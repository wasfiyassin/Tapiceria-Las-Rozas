"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Sofás", href: "/servicios/tapizado-sofas" },
    { name: "Sillones", href: "/servicios/tapizado-sillones" },
    { name: "Restauración", href: "/servicios/restauracion-muebles" },
    { name: "Cabeceros", href: "/servicios/cabeceros-a-medida" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contacto", href: "/contacto" },
];

export function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menú</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                {/* VisuallyHidden title for accessibility requirement if needed, or use proper Title */}
                <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
                <nav className="flex flex-col gap-4 mt-8">
                    <div className="font-serif text-xl font-bold mb-4 text-primary">Tapicería Las Rozas</div>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                                "text-lg font-medium transition-colors hover:text-primary",
                                "block py-2"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mt-8 pt-8 border-t">
                        <Button className="w-full gap-2" size="lg" asChild>
                            <a href="tel:+34631543707">
                                <Phone className="h-4 w-4" />
                                Llamar Ahora
                            </a>
                        </Button>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    );
}

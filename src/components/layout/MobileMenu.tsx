"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
            <SheetContent side="right" className="w-full sm:w-[400px] flex flex-col justify-center items-center border-l-0 bg-white/95 backdrop-blur-xl">
                {/* VisuallyHidden title for accessibility requirement */}
                <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>

                <nav className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-2xl font-bold mb-8 text-primary/90 tracking-tight"
                    >
                        Tapicería Las Rozas
                    </motion.div>

                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.href}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 + index * 0.05, duration: 0.2 }}
                            className="w-full"
                        >
                            <Link
                                href={link.href}
                                onClick={() => setOpen(false)}
                                prefetch={true}
                                className={cn(
                                    "text-2xl font-medium transition-all duration-300 hover:text-primary hover:scale-105",
                                    "block py-2 text-center w-full"
                                )}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + navLinks.length * 0.05, duration: 0.3 }}
                        className="mt-8 pt-8 w-full"
                    >
                        <Button className="w-full h-14 text-xl gap-2 shadow-xl bg-green-600 hover:bg-green-700 animate-pulse" size="lg" asChild>
                            <a href="tel:+34631543707">
                                <Phone className="h-6 w-6" />
                                Llamar Ahora
                            </a>
                        </Button>
                        <p className="text-center text-sm text-muted-foreground mt-6 font-medium">
                            Madrid • Las Rozas
                        </p>
                    </motion.div>
                </nav>
            </SheetContent>
        </Sheet>
    );
}

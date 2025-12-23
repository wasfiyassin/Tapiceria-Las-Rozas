"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MobileMenu = dynamic(() => import("./MobileMenu").then(mod => mod.MobileMenu), {
    ssr: false
});

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-b shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-serif text-2xl font-bold text-primary tracking-tight">
                    Tapicería Las Rozas
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/servicios" className="text-sm font-medium hover:text-primary transition-colors">
                        Servicios
                    </Link>
                    <Link href="/portfolio" className="text-sm font-medium hover:text-primary transition-colors">
                        Proyectos
                    </Link>
                    <Link href="/contacto" className="text-sm font-medium hover:text-primary transition-colors">
                        Contacto
                    </Link>
                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Button className="hidden md:flex gap-2" size="sm" asChild>
                        <a href="tel:+34631543707">
                            <Phone className="h-4 w-4" />
                            <span className="hidden lg:inline">+34 631 543 707</span>
                            <span className="lg:hidden">Llamar</span>
                        </a>
                    </Button>

                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}

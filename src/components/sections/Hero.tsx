import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with LCP Optimization */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Maestro tapicero trabajando en un sillón clásico en Las Rozas"
                    fill
                    className="object-cover"
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 100vw, 100vw"
                    quality={80}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88/1nPQAJMQNi71Hq0AAAAABJRU5ErkJggg==" // Generic dark blur
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
                <div className="max-w-3xl space-y-6">
                    <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <span className="text-white text-sm font-medium tracking-wide upppercase">Tapicería Las Rozas</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight drop-shadow-md">
                        Restauración Artesanal <br className="hidden md:block" /> de Muebles y Sofás
                    </h1>

                    <p className="text-lg md:text-xl text-gray-100 max-w-xl leading-relaxed drop-shadow-sm">
                        Damos una segunda vida a tus muebles con tejidos premium y acabados impecables.
                        Servicio de <strong>tapicero a domicilio</strong> en <span className="font-semibold text-white">Las Rozas, Majadahonda, Pozuelo, Aravaca y La Moraleja</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                        <Button size="lg" className="font-semibold text-lg px-8 py-6 h-auto" asChild>
                            <Link href="/contacto">
                                Pedir Presupuesto Gratis
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 h-auto bg-white/10 hover:bg-white/20 text-white border-white/40 backdrop-blur-sm" asChild>
                            <Link href="/servicios">
                                Ver Nuestros Trabajos
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

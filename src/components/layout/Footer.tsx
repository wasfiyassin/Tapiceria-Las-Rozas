import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-100 py-12 md:py-16">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">Tapicería Las Rozas</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Artesanos de la tapicería y restauración de muebles.
                        Calidad, precisión y materiales de lujo para dar una segunda vida a tus piezas favoritas.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="https://instagram.com" className="hover:text-white transition-colors" aria-label="Síguenos en Instagram"><Instagram className="h-5 w-5" /></a>
                        <a href="https://facebook.com" className="hover:text-white transition-colors" aria-label="Síguenos en Facebook"><Facebook className="h-5 w-5" /></a>
                    </div>
                </div>

                {/* Services Links */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Nuestros Servicios</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/servicios/tapizado-sofas" className="hover:text-white transition-colors">Tapizado de Sofás</Link></li>
                        <li><Link href="/servicios/tapizado-sillones" className="hover:text-white transition-colors">Sillones y Butacas</Link></li>
                        <li><Link href="/servicios/cabeceros-a-medida" className="hover:text-white transition-colors">Cabeceros a Medida</Link></li>
                        <li><Link href="/servicios/restauracion-muebles" className="hover:text-white transition-colors">Restauración de Muebles</Link></li>
                        <li><Link href="/servicios" className="hover:text-white transition-colors">Ver todos los servicios</Link></li>
                    </ul>
                </div>

                {/* Service Areas */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Zonas de Servicio</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Las Rozas de Madrid</li>
                        <li>Molino de la Hoz</li>
                        <li>La Chopera</li>
                        <li>Punta Galea</li>
                        <li>Majadahonda</li>
                        <li>Pozuelo de Alarcón</li>
                        <li>La Moraleja</li>
                        <li>El Cantizal</li>
                        <li>Aravaca</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Contacto</h4>
                    <div className="space-y-3 text-sm text-gray-400">
                        <a href="tel:+34631543707" className="flex items-center gap-3 hover:text-white transition-colors">
                            <Phone className="h-4 w-4 shrink-0" />
                            +34 631 543 707
                        </a>
                        <a href="mailto:tapicerialasrozas@hotmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                            <Mail className="h-4 w-4 shrink-0" />
                            tapicerialasrozas@hotmail.com
                        </a>
                        <div className="flex items-start gap-3">
                            <MapPin className="h-4 w-4 shrink-0 mt-1" />
                            <span>Calle Bruselas,<br />Las Rozas de Madrid, 28232</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-400">
                <p>&copy; {new Date().getFullYear()} Tapicería Las Rozas. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

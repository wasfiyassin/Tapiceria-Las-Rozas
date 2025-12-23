import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Tapizado de Sofás",
        description: "Renovamos sofás, cheslongs y rinconeras con telas antimanchas Aquaclean.",
        href: "/servicios/tapizado-sofas",
        image: "/images/sofa.png",
    },
    {
        title: "Sillones y Butacas",
        description: "Retapizado de orejeros, butacas descalzadoras y sillones relax a domicilio.",
        href: "/servicios/tapizado-sillones",
        image: "/images/armchair.png",
    },
    {
        title: "Cabeceros a Medida",
        description: "Diseñamos el cabecero de tus sueños en terciopelo, lino o polipiel.",
        href: "/servicios/cabeceros-a-medida",
        image: "/images/headboard.png",
    },
    {
        title: "Restauración de Muebles",
        description: "Encolado de sillas, barnizado a muñequilla y tratamientos de ebanistería.",
        href: "/servicios/restauracion-muebles",
        image: "/images/restoration.png",
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="bg-gray-50 py-20 border-b">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Nuestros Servicios de Tapicería</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ofrecemos soluciones integrales para todos tus muebles tapizados, combinando técnicas tradicionales con materiales de vanguardia.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map((service) => (
                        <Link key={service.href} href={service.href} className="group block space-y-4">
                            <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">{service.title}</h2>
                                    <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                                </div>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Materials & Technicques Section */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-center mb-10">Materiales y Técnicas Artesanales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-primary">Tejidos Premium</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• <strong>Aquaclean®:</strong> Tecnología antimanchas (limpieza solo con agua).</li>
                                <li>• <strong>Terciopelo:</strong> Elegancia y suavidad extrema.</li>
                                <li>• <strong>Lino Lavado:</strong> Naturalidad y frescura para ambientes modernos.</li>
                                <li>• <strong>Piel y Polipiel:</strong> Resistencia y acabados clásicos.</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-primary">Técnicas Tradicionales</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• <strong>Capitoné:</strong> Pliegues abotonados hechos a mano uno a uno.</li>
                                <li>• <strong>Cinchado:</strong> Refuerzo estructural manual con cincha de yute.</li>
                                <li>• <strong>Muelles:</strong> Atado de muelles para máxima durabilidad.</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-primary">Acabados de Ebanistería</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• <strong>Barnizado a Muñequilla:</strong> Brillo natural y profundo.</li>
                                <li>• <strong>Encolado:</strong> Fijación de estructuras con colas de alta resistencia.</li>
                                <li>• <strong>Tratamientos:</strong> Anti-carcoma y nutrición de madera.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* B2B Section */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-stone-200 shadow-sm max-w-5xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">Servicios para Profesionales</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Ofrecemos soluciones de tapicería a gran escala para <strong>Hoteles, Restaurantes y Clínicas</strong>.
                            Garantizamos tejidos ignífugos certificados y cumplimiento estricto de plazos.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                            {[
                                { label: "HOTELES", icon: "Building2" },
                                { label: "RESTAURANTES", icon: "Utensils" },
                                { label: "CLÍNICAS", icon: "Stethoscope" },
                                { label: "INTERIORISTAS", icon: "PenTool" }
                            ].map((item) => (
                                <div key={item.label} className="p-4 bg-gray-50 rounded-lg border border-gray-100 flex flex-col items-center justify-center gap-2 group hover:bg-white hover:shadow-md transition-all">
                                    <span className="font-serif text-sm font-semibold text-gray-900 tracking-wide">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/contacto" className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                            Solicitar Tarifa Profesional
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingContact />
        </main>
    );
}

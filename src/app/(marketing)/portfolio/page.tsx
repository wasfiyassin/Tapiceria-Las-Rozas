import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DynamicFloatingContact } from "@/components/layout/DynamicFloatingContact";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Proyectos y Restauraciones | Tapicería Las Rozas",
    description: "Galería de trabajos realizados. Antes y después de sofás, sillones y muebles restaurados en Las Rozas y Madrid.",
};

const projects = [
    {
        id: 1,
        title: "Restauración Sofá Chesterfield",
        category: "Restauración",
        image: "/images/projects/chester.png",
        description: "Recuperación completa de piel y capitoné artesanal."
    },
    {
        id: 2,
        title: "Sillón Orejero Velvet",
        category: "Tapizado",
        image: "/images/armchair.png", // Reusing high-q 8k asset
        description: "Tapizado en terciopelo azul noche antimanchas."
    },
    {
        id: 3,
        title: "Sillas Comedor Lino",
        category: "Tapizado",
        image: "/images/projects/chairs.png",
        description: "Juego de 6 sillas tapizadas en lino natural lavado."
    },
    {
        id: 4,
        title: "Cabecero Capitoné Beige",
        category: "A Medida",
        image: "/images/headboard.png", // Reusing high-q 8k asset
        description: "Fabricación a medida para cama de 180cm."
    },
    {
        id: 5,
        title: "Butaca Mid-Century",
        category: "Restauración",
        image: "/images/restoration.png", // Reusing Restoration asset
        description: "Restauración de madera y retapizado en bouclé."
    },
    {
        id: 6,
        title: "Sofá Rinconera Moderno",
        category: "Tapizado",
        image: "/images/sofa.png", // Reusing high-q 8k asset
        description: "Cambio de espumas y tela Aquaclean para familia numerosa."
    }
];

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="bg-gray-50 py-20 border-b">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Nuestros Proyectos</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Una muestra de la dedicación y el detalle que ponemos en cada pieza.
                        El antes y el después de muebles con historia.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                <span className="text-xs font-medium uppercase tracking-wider bg-primary/90 px-2 py-1 rounded-sm mb-2 inline-block">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold font-serif mb-1">{project.title}</h3>
                                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
            <DynamicFloatingContact />
        </main>
    );
}

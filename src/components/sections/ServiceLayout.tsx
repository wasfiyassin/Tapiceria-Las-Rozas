import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";

interface ServiceLayoutProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    children: React.ReactNode;
}

export function ServiceLayout({ title, description, imageSrc, imageAlt, children }: ServiceLayoutProps) {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Service Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{title}</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">{description}</p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <Button variant="ghost" asChild className="mb-8 pl-0 hover:pl-2 transition-all">
                    <Link href="/servicios" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                        <ArrowLeft className="h-4 w-4" />
                        Volver a Servicios
                    </Link>
                </Button>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3 prose prose-lg prose-gray max-w-none">
                        {children}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3 space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                            <h3 className="text-xl font-bold mb-4 font-serif">Solicita Presupuesto</h3>
                            <p className="text-sm text-gray-500 mb-6">
                                Recibes respuesta en menos de 24h. Incluye recogida y entrega gratuita.
                            </p>
                            {/* Simplified form or full form? Full form is good. */}
                            <QuoteForm />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <FloatingContact />
        </main>
    );
}

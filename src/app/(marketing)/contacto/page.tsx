import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto Tapicería Las Rozas | Pide tu Presupuesto",
    description: "Contacta con nosotros para tapizar tus muebles. Taller en Las Rozas. Atendemos WhatsApp y llamadas. Presupuesto sin compromiso.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Header */}
            <section className="bg-gray-50 py-16 md:py-24 border-b">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Hablemos de tu Proyecto</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Estamos aquí para asesorarte. Cuéntanos qué necesitas y te responderemos en menos de 24 horas.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12 md:py-20 -mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info Card */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 font-serif">Información de Contacto</h2>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">Teléfono y WhatsApp</p>
                                        <a href="tel:+34631543707" className="text-lg text-gray-600 hover:text-primary transition-colors">
                                            +34 631 543 707
                                        </a>
                                        <p className="text-sm text-gray-500 mt-1">Atención rápida por WhatsApp</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <div>
                                            <p className="font-semibold text-gray-900 mb-1">Email</p>
                                            <a href="mailto:lasrozastapicero@gmail.com" className="text-lg text-gray-600 hover:text-primary transition-colors">
                                                lasrozastapicero@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">Taller y Oficina</p>
                                        <p className="text-gray-600">
                                            Calle Bruselas<br />
                                            28232 Las Rozas de Madrid, Madrid
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">*Atendemos con cita previa</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                                        <Clock className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">Horario</p>
                                        <p className="text-gray-600">Lunes a Viernes: 09:00 - 20:00</p>
                                        <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <QuoteForm />
                    </div>

                </div>
            </section>

            {/* Map (Placeholder for visual aesthetic) */}
            <section className="h-[400px] w-full bg-gray-200 relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12139.736687009363!2d-3.8745!3d40.4936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41840555555555%3A0x1234567890abcdef!2sLas%20Rozas%20de%20Madrid%2C%20Madrid!5e0!3m2!1ses!2ses!4v1600000000000!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(100%) opacity(0.8)" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de ubicación Las Rozas"
                ></iframe>
            </section>

            <Footer />
        </main>
    );
}

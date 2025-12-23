import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CheckCircle2, Truck, Ruler, ShieldCheck, Armchair, Sofa, Hammer, BedDouble, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const QuoteForm = dynamic(() => import("@/components/forms/QuoteForm").then(mod => mod.QuoteForm));
import { DynamicFloatingContact } from "@/components/layout/DynamicFloatingContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-gray-600">Especialistas en recuperación y diseño de mobiliario tapizado.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Tapizado de Sofás"
              description="Renovamos tu sofá con las mejores telas antimanchas del mercado."
              icon={<Sofa className="h-8 w-8" />}
              href="/servicios/tapizado-sofas"
              color="bg-blue-50 text-blue-600"
            />
            <ServiceCard
              title="Sillones y Butacas"
              description="Recuperamos la comodidad y estética de tus piezas favoritas."
              icon={<Armchair className="h-8 w-8" />}
              href="/servicios/tapizado-sillones"
              color="bg-amber-50 text-amber-600"
            />
            <ServiceCard
              title="Cabeceros"
              description="Diseños a medida para dar personalidad a tu dormitorio."
              icon={<BedDouble className="h-8 w-8" />}
              href="/servicios/cabeceros-a-medida"
              color="bg-purple-50 text-purple-600"
            />
            <ServiceCard
              title="Restauración"
              description="Trabajos artesanales en madera y estructuras antiguas."
              icon={<Hammer className="h-8 w-8" />}
              href="/servicios/restauracion-muebles"
              color="bg-emerald-50 text-emerald-600"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature
              icon={<Truck className="h-8 w-8 text-primary" />}
              title="Tapicero a Domicilio"
              description="Recogida y entrega gratuita en Las Rozas, Majadahonda y toda la zona noroeste."
            />
            <Feature
              icon={<ShieldCheck className="h-8 w-8 text-primary" />}
              title="Sin Intermediarios"
              description="Trato directo con el artesano. Taller propio, precios justos y máxima calidad."
            />
            <Feature
              icon={<Ruler className="h-8 w-8 text-primary" />}
              title="A Medida"
              description="Adaptamos cada pieza a tus gustos y necesidades específicas."
            />
            <Feature
              icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
              title="Artesanía Pura"
              description="Más de 20 años de experiencia restaurando muebles clásicos y modernos."
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-28 relative overflow-hidden" id="presupuesto">
        {/* Simple background pattern or color */}
        <div className="absolute inset-0 bg-primary/5 -z-10" />

        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              ¿Listo para renovar tus muebles?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cuéntanos qué necesitas y te enviaremos un <strong>presupuesto detallado sin compromiso</strong> en menos de 24 horas.
              Adjunta fotos por WhatsApp para una valoración más rápida.
            </p>

            <ul className="space-y-4">
              {["Asesoramiento gratuito en telas (Aquaclean, etc.)", "Tapizado de sofás, cheslong y rinconeras", "Precios transparentes y sin sorpresas"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
      <DynamicFloatingContact />
    </main>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center space-y-4">
      <div className="p-3 bg-primary/10 rounded-full">
        {icon}
      </div>
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}

function ServiceCard({ title, description, icon, href, color }: { title: string, description: string, icon: React.ReactNode, href: string, color: string }) {
  return (
    <div className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-500 text-sm mb-4 leading-relaxed">{description}</p>
      <Link href={href} className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-primary transition-colors">
        Ver detalles
        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}

import { ServiceLayout } from "@/components/sections/ServiceLayout";
import { ServiceFAQ } from "@/components/sections/ServiceFAQ";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "☑️ Restauración de Muebles y Ebanistería | Barnizado a Muñequilla",
    description: "Taller de restauración en Las Rozas. Encolado de sillas, tratamiento anti-carcoma y barnizado tradicional. Recuperamos tus muebles antiguos.",
};

export default function RestauracionMueblesPage() {
    return (
        <ServiceLayout
            title="Restauración y Ebanistería"
            description="Taller propio de ebanistería. Encolado de sillas, barnizado a muñequilla y recuperación de muebles antiguos."
            imageSrc="/images/restoration.png"
            imageAlt="Detalle de madera restaurada"
        >
            <h2>Tratamiento Integral de la Madera</h2>
            <p>
                Un buen tapizado no sirve de nada si la estructura cruje o tiene carcoma.
                En Tapicería Las Rozas ofrecemos un servicio completo de restauración.
            </p>

            <h3>Nuestros Servicios de Ebanistería</h3>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Encolado de estructuras:</strong> Desmontamos y volvemos a encolar sillas y sofás que se mueven.</li>
                <li><strong>Barnizado y Lacado:</strong> Desde goma laca tradicional a muñequilla hasta lacados modernos en cabina.</li>
                <li><strong>Tratamiento Anti-Carcoma:</strong> Curativo y preventivo mediante inyección y congelación.</li>
                <li><strong>Reparación de golpes y arañazos:</strong> Masillado y teñido para igualar el color original.</li>
            </ul>

            <p className="mt-6 mb-12">
                Ideal para cómodas, aparadores, mesas de comedor y sillería antigua.
            </p>

            {/* Detailed Process Section */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Proceso de Ebanistería</h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Decapado y Limpieza</h4>
                            <p className="text-gray-600">Eliminamos barnices viejos y ceras acumuladas mediante lijado manual o decapantes suaves, respetando la pátina original de la madera.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Tratamiento de Carcoma</h4>
                            <p className="text-gray-600">Si detectamos xilófagos, aplicamos tratamiento curativo por inyección y preventivo de larga duración. Garantizamos la eliminación total.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Reintegración y Encolado</h4>
                            <p className="text-gray-600">Sustituimos piezas rotas con madera de la misma época y veta. Encolamos las uniones debilitadas usando colas de alta resistencia y gatos de apriete.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">4</div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Acabado Tradicional</h4>
                            <p className="text-gray-600">Aplicamos goma laca a muñequilla para un brillo espejo natural, o ceras de anticuario para acabados mate y sedosos. Nutrimos la madera en profundidad.</p>
                        </div>
                    </div>
                </div>
            </div>

            <ServiceFAQ
                items={[
                    {
                        question: "¿Podéis cambiar el color de mis muebles de madera?",
                        answer: "Sí. Podemos lacar muebles oscuros en blanco, gris o cualquier color carta RAL para modernizarlos, o al revés, teñir maderas claras para darles un tono nogal o caoba más señorial."
                    },
                    {
                        question: "¿Cómo sé si mi mueble tiene carcoma?",
                        answer: "Busca pequeños agujeros redondos (como la cabeza de un alfiler) y, sobre todo, serrín muy fino ('polilla') debajo del mueble. Si ves esto, aíslalo y llámanos urgentemente."
                    },
                    {
                        question: "¿Restauráis muebles con marquetería o incrustaciones?",
                        answer: "Sí, somos especialistas en ebanistería fina. Reintegramos faltas de chapa, nácar o hueso conservando el dibujo original."
                    },
                    {
                        question: "¿Hacéis presupuesto a domicilio?",
                        answer: "Para restauración, preferimos ver fotos primero para valorar la viabilidad. Si es viable, nos desplazamos gratuitamente a Las Rozas, Majadahonda y toda la zona noroeste para la valoración final."
                    }
                ]}
            />

            {/* Local SEO Block */}
            <div className="mt-12 p-6 bg-stone-50 rounded-lg text-sm text-gray-500">
                <p>
                    <strong>Taller de Restauración en Madrid Noroeste:</strong> Recogemos y entregamos muebles restaurados en
                    <em> Pozuelo, Aravaca, Torrelodones y Majadahonda</em>.
                    Trabajamos para clientes particulares y anticuarios de <em>El Rastro</em> y <em>Barrio de Salamanca</em>.
                </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 my-8">
                <h4 className="text-lg font-bold text-primary mb-2">¿Tienes una pieza especial?</h4>
                <p className="mb-4">
                    Consúltanos sin compromiso. Valoramos la antigüedad y el estado de conservación de tu mueble.
                </p>
                <Button asChild>
                    <Link href="/contacto">Pedir Valoración</Link>
                </Button>
            </div>
        </ServiceLayout>
    );
}

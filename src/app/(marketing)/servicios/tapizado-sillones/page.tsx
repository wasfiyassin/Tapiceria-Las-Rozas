import { ServiceLayout } from "@/components/sections/ServiceLayout";
import { ServiceFAQ } from "@/components/sections/ServiceFAQ";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "☑️ Tapizado de Sillones y Butacas | Orejeros y Relax a Medida",
    description: "Recupera tus sillones clásicos con telas exclusivas (Terciopelo, Lino). Restauración de butacas descalzadoras y sillones de diseño en Las Rozas.",
};

export default function TapizadoSillonesPage() {
    return (
        <ServiceLayout
            title="Restauración de Sillones y Butacas"
            description="Expertos en orejeros, butacas descalzadoras y sillones de diseño. Recuperamos la comodidad original."
            imageSrc="/images/armchair.png"
            imageAlt="Artesano trabajando en un sillón clásico"
        >
            <h2>El valor de un buen sillón</h2>
            <p>
                Muchas butacas antiguas tienen maderas nobles y formas que ya no se fabrican.
                Nuestro trabajo es respetar esa esencia pero actualizando el confort (nuevas espumas, muelles)
                y la estética con telas contemporáneas.
            </p>

            <h3>Tipos de piezas que trabajamos</h3>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Butacas Orejeras:</strong> Un clásico que nunca muere. Ideal para telas estampadas o terciopelos.</li>
                <li><strong>Sillones Relax:</strong> Retapizamos y revisamos mecanismos.</li>
                <li><strong>Sillas de Comedor:</strong> Rejuvenecemos tu comedor completo, reforzando las estructuras si es necesario.</li>
                <li><strong>Piezas de Herencia:</strong> Tratamos con máximo cuidado muebles con valor sentimental.</li>
            </ul>


            <ServiceFAQ
                items={[
                    {
                        question: "¿Retapizáis sillones relax eléctricos?",
                        answer: "Sí, mantenemos el mecanismo original (revisándolo y engrasándolo) y cambiamos solo el tapizado, respetando las holguras necesarias para que se mueva bien."
                    },
                    {
                        question: "¿Tenéis telas clásicas para butacas antiguas?",
                        answer: "Contamos con damascos, brocados y otomanes de las mejores firmas (Gancedo, Güell Lamadrid) para respetar la estética de época."
                    },
                    {
                        question: "¿Recogéis solo un sillón?",
                        answer: "Por supuesto. No hay pedido mínimo. Recogemos y entregamos en tu domicilio sin coste adicional en nuestra zona de reparto."
                    }
                ]}
            />

            {/* Local SEO Block */}
            <div className="mt-12 p-6 bg-stone-50 rounded-lg text-sm text-gray-500">
                <p>
                    <strong>Tapicero de Sillones en Majadahonda y Pozuelo:</strong> Especialistas en butacas descalzadoras y
                    sillones de lactancia. Atendemos en <em> Valdemarín, El Plantío y Florida</em>.
                </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 my-8">
                <h4 className="text-lg font-bold text-primary mb-2">¿Tienes dudas con la tela?</h4>
                <p className="mb-4">
                    Disponemos de catálogos de Gancedo, Romo, Güell Lamadrid y tecnologías antimanchas.
                    Te asesoramos para encontrar el equilibrio entre diseño y durabilidad.
                </p>
                <Button asChild>
                    <Link href="/contacto">Ver Muestrarios</Link>
                </Button>
            </div>
        </ServiceLayout>
    );
}

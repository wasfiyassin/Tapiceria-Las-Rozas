import { ServiceLayout } from "@/components/sections/ServiceLayout";
import { ServiceFAQ } from "@/components/sections/ServiceFAQ";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "☑️ Cabeceros a Medida | Capitoné Artesanal y Diseños Exclusivos",
    description: "Fabricación propia de cabeceros tapizados. Elige tu tela y diseño. Capitoné auténtico hecho a mano. Calidad garantizada en Las Rozas.",
};

export default function CabecerosPage() {
    return (
        <ServiceLayout
            title="Cabeceros a Medida"
            description="Diseño y fabricación de cabeceros a medida en Las Rozas. Capitoné, lino y terciopelo."
            imageSrc="/images/headboard.png"
            imageAlt="Dormitorio con cabecero tapizado a medida"
        >
            <h2>Diseño sin límites</h2>
            <p>
                No te conformes con medidas estándar. Fabricamos el cabecero que imagines, adaptado al ancho de tu cama
                y a la altura de tus techos, salvando enchufes o interruptores si es necesario.
            </p>

            <h3>Estilos y Acabados</h3>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Capitoné Artesanal:</strong> El clásico abotonado con pliegues hechos a mano uno a uno.</li>
                <li><strong>Con Tachuelas:</strong> En acabados bronce, plata vieja o cromo para un toque sofisticado.</li>
                <li><strong>Lisos con vivos:</strong> Minimalistas y elegantes, resaltando la textura de la tela (lino, terciopelo).</li>
                <li><strong>Formas personalizadas:</strong> Rectos, con curvas, orejeros...</li>
            </ul>

            {/* Process Section */}
            <div className="mb-16 mt-12">
                <h2 className="text-2xl font-bold mb-6">Fabricación a Medida (Paso a Paso)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-bold text-primary mb-2">1. Diseño y Medidas</h4>
                        <p className="text-sm text-gray-600">Tomamos medidas exactas de tu cama y pared. Diseñamos la forma (recto, curvo, orejero) sobre plano.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-bold text-primary mb-2">2. Estructura y Espumado</h4>
                        <p className="text-sm text-gray-600">Cortamos el tablero de madera DM de 19mm y pegamos espuma de alta densidad para un tacto mullido.</p>
                    </div>
                </div>
            </div>

            <ServiceFAQ
                items={[
                    {
                        question: "¿Cómo se instala el cabecero?",
                        answer: "Nosotros nos encargamos. Si va a pared, usamos herrajes de colgar reforzados. Si va al suelo, colocamos patas regulables para salvar el rodapié."
                    },
                    {
                        question: "¿Tardáis mucho en hacerlo?",
                        answer: "El plazo medio es de 15 días laborables desde la elección de la tela. Al ser fabricación propia en nuestro taller de Las Rozas, controlamos los tiempos."
                    },
                    {
                        question: "¿Puedo poner mi propia tela?",
                        answer: "Sí, aunque recomendamos nuestras telas Aquaclean por garantía, aceptamos tela del cliente (cobrando solo mano de obra y estructura)."
                    }
                ]}
            />

            {/* Local SEO Block */}
            <div className="mt-12 p-6 bg-stone-50 rounded-lg text-sm text-gray-500">
                <p>
                    <strong>Cabeceros Tapizados en Las Rozas:</strong> Servicio a domicilio en todas las urbanizaciones:
                    <em> Monteclaro, Montealina, La Finca y Somosaguas</em>.
                    Diseños exclusivos para dormitorios principales e infantiles.
                </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 my-8">
                <h4 className="text-lg font-bold text-primary mb-2">Combínalo con una banqueta</h4>
                <p className="mb-4">
                    También fabricamos banquetas pie de cama y arcones abatibles a juego con el cabecero para ganar almacenamiento extra.
                </p>
                <Button asChild>
                    <Link href="/contacto">Pedir Presupuesto</Link>
                </Button>
            </div>
        </ServiceLayout>
    );
}

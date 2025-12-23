import { ServiceLayout } from "@/components/sections/ServiceLayout";
import { Button } from "@/components/ui/button";
import { ServiceFAQ } from "@/components/sections/ServiceFAQ";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "☑️ Tapizado de Sofás en Las Rozas | Telas Aquaclean y Taller Propio",
    description: "Especialistas en retapizado de sofás, cheslong y rinconeras. Telas antimanchas de alta calidad. Sin intermediarios. Servicio en Las Rozas y Majadahonda.",
};

export default function TapizadoSofasPage() {
    return (
        <ServiceLayout
            title="Renovación y Tapizado de Sofás"
            description="Especialistas en retapizado de sofás, cheslong, rinconeras y conjuntos 3+2. Telas Aquaclean de fácil limpieza."
            imageSrc="/images/sofa.png"
            imageAlt="Sofá tapizado en tela bouclé en un salón de Las Rozas"
        >
            <h2>¿Por qué retapizar su sofá en lugar de comprar uno nuevo?</h2>
            <p>
                Un buen sofá tiene un &quot;esqueleto&quot; de madera maciza que los muebles modernos <em>low cost</em> ya no ofrecen.
                Al retapizar, no solo conservas una estructura de calidad superior, sino que personalizas cada detalle:
                desde la densidad de la espuma hasta la textura exacta de la tela.
            </p>

            <h3>Calidad Estructural y Diseño Personalizado</h3>
            <p>
                Revisamos las cinchas, cambiamos las espumas vencidas por rellenos de alta densidad (HR) y
                reforzamos las uniones. El resultado es un sofá que estrena vida, mejor que el primer día.
            </p>

            <h3>Telas Antimanchas Aquaclean</h3>
            <p>
                Trabajamos con las mejores editoriales de tejidos. Recomendamos especialmente las tecnologías
                antimanchas como <strong>Aquaclean</strong> o <strong>Crevin</strong>, ideales para hogares con
                niños y mascotas en zonas residenciales como <em>Molino de la Hoz</em> o <em>La Chopera</em>.
            </p>

            <h2>Nuestro Proceso en Las Rozas</h2>
            <ol>
                <li>
                    <strong>Valoración:</strong> Envíanos fotos por WhatsApp y te damos una estimación inicial.
                </li>
                <li>
                    <strong>Elección de Tela:</strong> Vamos a tu domicilio con muestrarios físicos para que veas las telas en tu propia luz.
                </li>
                <li>
                    <strong>Recogida Gratuita:</strong> Recogemos tu sofá en todo Las Rozas, Majadahonda, Torrelodones y Pozuelo.
                </li>
                <li>
                    <strong>Entrega e Instalación:</strong> Te lo devolvemos totalmente renovado en 10-15 días.
                </li>
            </ol>

            {/* Detailed Process Section */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Nuestro Proceso de Restauración</h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Desmontaje y Valoración</h4>
                            <p className="text-gray-600">Retiramos cuidadosamente la tela antigua (&quot;desguarnecido&quot;). Inspeccionamos el armazón de madera para detectar holguras o carcoma. Si es necesario, encolamos la estructura.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Sustitución de Interiores</h4>
                            <p className="text-gray-600">Es el paso más importante. Cambiamos las cinchas elásticas o muelles vencidos. Renovamos las espumas de asiento (recomendamos HR 35kg o 40kg) y rellenamos los respaldos con fibra hueca siliconada para máximo confort.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Corte y Confección</h4>
                            <p className="text-gray-600">Cortamos la tela elegida (Aquaclean, Lino, Terciopelo) patronando sobre el propio sofá. Cosemos con hilo de alta resistencia y remallamos las costuras internas.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">4</div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Acabados Finales</h4>
                            <p className="text-gray-600">Colocamos vivos, tachuelas o pasamanería. Vaporizamos la tela para eliminar cualquier arruga y realizamos un control de calidad final antes de la entrega.</p>
                        </div>
                    </div>
                </div>
            </div>

            <ServiceFAQ
                items={[
                    {
                        question: "¿Merece la pena retapizar un sofá viejo?",
                        answer: "Absolutamente sí, si la estructura es buena. Un sofá de hace 15-20 años suele tener armazones de madera maciza (haya o pino) que ya no se encuentran en los sofás modernos 'low cost'. Al retapizar, obtienes un mueble 'mejor que nuevo' por un precio similar a uno de gama media, pero con la calidad de uno de gama alta."
                    },
                    {
                        question: "¿Cuánto cuesta tapizar un sofá de 3 plazas?",
                        answer: "El precio varía según la tela elegida y el estado interior. Como referencia orientativa, la mano de obra suele partir de los 450-600€, a lo que hay que sumar los metros de tela (un 3 plazas necesita unos 12-14 metros). Para un presupuesto exacto, envíanos una foto por WhatsApp."
                    },
                    {
                        question: "¿Qué tela me recomendáis si tengo gatos?",
                        answer: "Sin duda, las colecciones de Aquaclean con tecnología Safe Front o las telas de la marca Crevin. Son tejidos con una barrera física que evita que las uñas penetren en la trama, evitando que se deshilachen. Además, se limpian solo con agua y son anti-pelos."
                    },
                    {
                        question: "¿Hacéis recogida a domicilio?",
                        answer: "Sí, el servicio de recogida y entrega es totalmente gratuito en Las Rozas, Majadahonda, Pozuelo, Torrelodones, Boadilla y toda la zona noroeste de Madrid. Nosotros nos encargamos de bajarlo y subirlo."
                    }
                ]}
            />

            {/* Local SEO Block */}
            <div className="mt-12 p-6 bg-stone-50 rounded-lg text-sm text-gray-500">
                <p>
                    <strong>Servicio de Tapicería en Las Rozas y Alrededores:</strong> Atendemos diariamente en zonas como
                    <em> El Cantizal, Molino de la Hoz, La Marazuela, Punta Galea y Parque Empresarial</em>.
                    También cubrimos <em>La Moraleja, Aravaca y Pozuelo de Alarcón</em>.
                    Llevamos los muestrarios de tela a tu domicilio sin compromiso.
                </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 my-8">
                <h4 className="text-lg font-bold text-primary mb-2">¿Tienes un modelo específico?</h4>
                <p className="mb-4">
                    Somos expertos en tapizar marcas de prestigio y modelos complejos: Chester, sofás italianos,
                    Natuzzi, relax motorizados y grandes rinconeras a medida.
                </p>
                <Button asChild>
                    <Link href="/contacto">Consultar por mi modelo</Link>
                </Button>
            </div>
        </ServiceLayout>
    );
}

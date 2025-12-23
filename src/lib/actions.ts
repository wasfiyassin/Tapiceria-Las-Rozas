"use server";

import { z } from "zod";
import { Resend } from "resend";

const formSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
    phone: z.string().regex(/^[679]\d{8}$/, "Introduce un número de teléfono válido (9 dígitos)."),
    email: z.string().email("Introduce un email válido."),
    serviceType: z.enum(["sofa", "sillon", "silla", "cabecero", "otro"]),
    message: z.string().optional(),
});

export type FormState = {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitQuote(prevState: FormState, formData: FormData): Promise<FormState> {
    const rawFormData = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        serviceType: formData.get("serviceType"),
        message: formData.get("message"),
    };

    const validatedFields = formSchema.safeParse(rawFormData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Por favor, corrige los errores en el formulario.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, phone, serviceType, message } = validatedFields.data;

    try {
        const { data, error } = await resend.emails.send({
            from: 'Presupuestos Web <onboarding@resend.dev>',
            to: ['tapicerolasrozas@hotmail.com'],
            subject: `Nuevo Presupuesto: ${name} - ${serviceType}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1 style="color: #333;">Nueva Solicitud de Presupuesto</h1>
                    <p>Has recibido una nueva solicitud desde la web.</p>
                    
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 10px 0;"><strong>Teléfono:</strong> <a href="tel:${phone}" style="color: #0066cc; text-decoration: none; font-weight: bold;">${phone}</a></p>
                        <p style="margin: 10px 0;"><strong>Tipo de Servicio:</strong> ${serviceType}</p>
                    </div>

                    <div style="border: 1px solid #eee; padding: 20px; border-radius: 8px;">
                        <h3 style="margin-top: 0;">Mensaje del Cliente:</h3>
                        <p style="white-space: pre-wrap; color: #555;">${message || "Sin mensaje adicional."}</p>
                    </div>

                    <p style="color: #888; font-size: 12px; margin-top: 30px; text-align: center;">
                        Este correo fue enviado desde el formulario de contacto de Tapicería Las Rozas.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error("Resend Error:", error);
            // In development/without domain verification, we might hit errors if 'to' is not the verified email.
            // But user said 'tapicerialasrozas@hotmail.com' is the email, which presumably is the one they registered with or verified.
            return {
                success: false,
                message: "Hubo un error al enviar la solicitud. Inténtalo de nuevo.",
            };
        }

        return {
            success: true,
            message: "¡Gracias! Hemos recibido tu solicitud correctamente. Te contactaremos en breve con tu presupuesto.",
        };

    } catch (e) {
        console.error("Server Error:", e);
        return {
            success: false,
            message: "Error interno del servidor. Por favor, llámanos directamente.",
        };
    }
}

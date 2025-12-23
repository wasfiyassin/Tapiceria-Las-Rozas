"use server";

import { z } from "zod";

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

    // Simulate server delay and processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(`[SIMULATION] Enviando email a: tapicerialasrozas@hotmail.com`);
    console.log("Datos del formulario:", validatedFields.data);

    // TODO: Integrate Resend or Nodemailer. 
    // Example: await resend.emails.send({ from: '...', to: 'tapicerialasrozas@hotmail.com', ... })

    return {
        success: true,
        message: "¡Gracias! Tu solicitud ha sido registrada correctamente. (Modo Simulación: No se envió email real).",
    };
}

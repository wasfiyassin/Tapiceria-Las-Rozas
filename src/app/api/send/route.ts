import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error("RESEND_API_KEY is missing");
            return NextResponse.json({ error: 'Server configuration error: Missing API Key' }, { status: 500 });
        }

        const resend = new Resend(apiKey);

        const body = await request.json();
        const { name, email, phone, serviceType, message } = body;

        // Validación básica
        if (!name || !email || !phone) {
            return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: 'Tapicería Las Rozas <onboarding@resend.dev>', // Usamos onboarding para asegurar que funcione sin dominio verificado
            to: ['lasrozastapicero@gmail.com'],
            replyTo: email, // Para responder directamente al cliente
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

        if (data.error) {
            console.error("Resend Error:", data.error);
            return NextResponse.json({ error: data.error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("Server API Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

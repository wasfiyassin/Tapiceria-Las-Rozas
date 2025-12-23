"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { submitQuote, FormState } from "@/lib/actions";
import { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
    phone: z.string().regex(/^[679]\d{8}$/, "Introduce un número de teléfono válido."),
    email: z.string().email("Introduce un email válido."),
    serviceType: z.enum(["sofa", "sillon", "silla", "cabecero", "otro"]),
    message: z.string().optional(),
});

export function QuoteForm() {
    const [isPending, startTransition] = useTransition();
    const [state, setState] = useState<FormState>({ success: false, message: "" });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            serviceType: "sofa",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        startTransition(async () => {
            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => {
                if (value) formData.append(key, value);
            });

            const result = await submitQuote(state, formData);
            setState(result);

            if (result.success) {
                form.reset();
            }
        });
    }

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-border">
            <h3 className="text-2xl font-serif font-bold mb-6 text-primary">Solicita Presupuesto Gratuito</h3>

            {state.success ? (
                <div className="bg-gray-900 text-white p-4 rounded-md mb-6 border border-gray-800">
                    <p className="font-medium text-center">{state.message}</p>
                </div>
            ) : null}

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre completo</FormLabel>
                                <FormControl>
                                    <Input placeholder="Juan Pérez" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Teléfono</FormLabel>
                                    <FormControl>
                                        <Input placeholder="600 000 000" type="tel" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="juan@email.com" type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>¿Qué necesitas tapizar?</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona un servicio" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="sofa">Sofá</SelectItem>
                                        <SelectItem value="sillon">Sillón / Butaca</SelectItem>
                                        <SelectItem value="silla">Sillas (Comedor/Oficina)</SelectItem>
                                        <SelectItem value="cabecero">Cabecero</SelectItem>
                                        <SelectItem value="otro">Otros (Cojines, etc.)</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Detalles (Opcional)</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Describe brevemente el estado del mueble o la tela que buscas..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full" size="lg" disabled={isPending}>
                        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isPending ? "Enviando..." : "Pedir Presupuesto"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                        O llámanos directamente al <a href="tel:+34631543707" className="underline hover:text-primary transition-colors">+34 631 543 707</a>
                    </p>
                </form>
            </Form>
        </div>
    );
}

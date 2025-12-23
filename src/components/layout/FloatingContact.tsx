"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FloatingContact() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* WhatsApp Button */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
            >
                <Button
                    size="icon"
                    className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg relative overflow-visible"
                    asChild
                >
                    <a
                        href="https://wa.me/34631543707?text=Hola,%20quisiera%20un%20presupuesto%20para%20tapizar..."
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contactar por WhatsApp"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 -z-10"
                        />
                        <MessageCircle className="h-8 w-8" fill="currentColor" />
                    </a>
                </Button>
            </motion.div>

            {/* Phone Button */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
            >
                <Button
                    size="icon"
                    className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                    asChild
                >
                    <a href="tel:+34631543707" aria-label="Llamar por teléfono">
                        <Phone className="h-7 w-7" />
                    </a>
                </Button>
            </motion.div>
        </div>
    );
}

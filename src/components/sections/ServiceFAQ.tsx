"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
    question: string;
    answer: string;
}

interface ServiceFAQProps {
    items: FAQItem[];
}

export function ServiceFAQ({ items }: ServiceFAQProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Preguntas Frecuentes</h3>
            <Accordion type="single" collapsible className="w-full">
                {items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-primary hover:no-underline">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

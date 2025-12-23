import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { StructuredData } from "@/components/seo/StructuredData";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Tapicería Las Rozas | Tapiceros Artesanos y Restauración de Muebles",
  description: "Tapiceros en Las Rozas de Madrid. Especialistas en tapizado de sofás, sillones y restauración de muebles. Recogida a domicilio en Molino de la Hoz, La Chopera, Punta Galea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          playfair.variable
        )}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

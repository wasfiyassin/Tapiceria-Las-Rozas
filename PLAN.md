# PLAN.md - Tapicería Las Rozas

## 1. Resumen del Proyecto
Creación de una web corporativa de alto rendimiento para un negocio de tapicería de lujo. El foco está en el SEO local, la velocidad (Core Web Vitals) y una estética premium minimalista.

## 2. Stack Tecnológico

### Core
- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript (Strict Mode)
- **Estilos**: Tailwind CSS (v3.4+ o v4 según estabilidad)
- **Componentes**: Shadcn/UI (Radix UI + Tailwind)
- **Iconos**: Lucide React

### Formularios & Backend
- **Formularios**: React Hook Form
- **Validación**: Zod
- **Backend/API**: React Server Actions (sin API REST tradicional)
- **Email (Futuro)**: Preparado para Resend/Nodemailer

### Optimización & Animaciones
- **Fuentes**: `next/font/google` (Inter + Playfair Display)
- **Animaciones**: Framer Motion (para el botón flotante y menú móvil)
- **Imágenes**: `next/image` con priorización LCP

## 3. Estructura de Directorios (SEO-Optimized)

```text
src/
├── app/
│   ├── (marketing)/           # Route Group (no afecta URL)
│   │   ├── page.tsx           # Landing Page (Home)
│   │   ├── servicios/
│   │   │   ├── page.tsx       # Índice de servicios
│   │   │   ├── tapizado-sofas/
│   │   │   ├── tapizado-sillones/
│   │   │   └── restauracion-muebles/
│   │   ├── contacto/
│   │   └── portfolio/
│   ├── layout.tsx             # Root Layout (Fuentes, SEO global)
│   └── global-error.tsx
├── components/
│   ├── ui/                    # Atomos (Buttons, Inputs - Shadcn)
│   ├── layout/                # Navbar, Footer, MobileMenu
│   ├── forms/                 # QuoteForm, ContactForm
│   ├── sections/              # Hero, Features, Reviews
│   └── seo/                   # StructuredData (JSON-LD)
├── lib/
│   ├── utils.ts               # cn() helper
│   └── actions.ts             # Server Actions (submitQuote)
└── public/
    └── images/                # Assets optimizados
```

## 4. Componentes Clave

1.  **Navbar**: Sticky, `backdrop-blur-md`, responsive.
2.  **FloatingContact**: Botón dual (WhatsApp/Teléfono) fijo en esquina inferior derecha. Z-index alto.
3.  **QuoteForm**: Validación robusta (Zod), Z-pattern layout, feedback visual inmediato.
4.  **StructuredData**: Componente invisible que inyecta JSON-LD para `HomeGoodsStore`.

## 5. Librerías a Instalar

```bash
# Core
npx create-next-app@latest . --typescript --tailwind --eslint

# UI & Icons
npx shadcn-ui@latest init
npm install lucide-react framer-motion clsx tailwind-merge class-variance-authority

# Forms
npm install react-hook-form zod @hookform/resolvers

# UI Components (Shadcn installation commands)
npx shadcn-ui@latest add button input textarea select label sheet dialog
```

## 6. Estrategia de Implementación

1.  **Setup**: Inicializar proyecto y configurar fuentes/estilos globales.
2.  **Estructura**: Crear rutas y layouts vacíos.
3.  **Componentes**: Desarrollar Navbar, Footer y UI básica.
4.  **Funcionalidad**: Implementar QuoteForm con Server Actions.
5.  **Contenido & SEO**: Rellenar textos, generar imágenes con IA, insertar JSON-LD.
6.  **Pulido**: Ajustar animaciones, contrastes y espaciados.

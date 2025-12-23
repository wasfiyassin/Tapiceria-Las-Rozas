import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://tapicerialasrozas.com"; // Change this to your real domain

    // Static routes
    const routes = [
        "",
        "/servicios",
        "/servicios/tapizado-sofas",
        "/servicios/tapizado-sillones",
        "/servicios/restauracion-muebles",
        "/servicios/cabeceros-a-medida",
        "/portfolio",
        "/contacto",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return routes;
}

export function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HomeGoodsStore",
        "name": "Tapicería Las Rozas",
        "image": "https://tapicerialasrozas.com/images/hero.png",
        "@id": "https://tapicerialasrozas.com",
        "url": "https://tapicerialasrozas.com",
        "telephone": "+34631543707",
        "email": "tapicerialasrozas@hotmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Calle Bruselas",
            "addressLocality": "Las Rozas de Madrid",
            "postalCode": "28232",
            "addressRegion": "Madrid",
            "addressCountry": "ES"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.4936,
            "longitude": -3.8745
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "20:00"
        },
        "areaServed": [
            "Las Rozas de Madrid",
            "Molino de la Hoz",
            "La Chopera",
            "Punta Galea",
            "Majadahonda",
            "Pozuelo de Alarcón"
        ],
        "sameAs": [
            "https://www.instagram.com/tapicerialasrozas",
            "https://www.facebook.com/tapicerialasrozas"
        ],
        "priceRange": "$$"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

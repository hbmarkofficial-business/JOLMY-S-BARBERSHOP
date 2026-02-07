import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Augsburg | JOLMY'S BARBERSHOP</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop JOLMY'S BARBERSHOP in Augsburg für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Augsburg"
        />
        <link rel="canonical" href="https://gentlemanscut.de" />

        {/* Open Graph */}
        <meta property="og:title" content="JOLMY'S BARBERSHOP | Premium Barbershop Augsburg" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Augsburg bei JOLMY'S BARBERSHOP."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gentlemanscut.de" />
        <meta property="og:image" content="https://gentlemanscut.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JOLMY'S BARBERSHOP | Premium Barbershop Augsburg" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://gentlemanscut.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "JOLMY'S BARBERSHOP",
            "image": "https://gentlemanscut.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Waterloostraße 9",
              "addressLocality": "Augsburg",
              "postalCode": "86165",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.3705",
              "longitude": "10.8978"
            },
            "url": "https://gentlemanscut.de",
            "telephone": "+49 821 20935313",
            "openingHours": "Mo-Fr 09:00-18:30, Sa 09:00-15:30",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/jolmysbarbershop",
              "https://www.instagram.com/jolmysbarbershop"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

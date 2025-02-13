import { Header } from "./Header";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { AboutUs } from "./AboutUs";
import { FeaturedProjects } from "./FeaturedProjects";
import { Testimonials } from "./Testimonials";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";
export const Main = () => {
    return (
        <>
            <Header />
            <main className="pt-24 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm z-10 container mx-auto px-4">
                {/* Sección de Encabezado */}
                <Hero />

                {/* Sección de Servicios */}
                <Services />

                {/* Sección Sobre Nosotros */}
                <AboutUs />

                {/* Proyectos Destacados */}
                <FeaturedProjects />

                {/* Testimonios */}
                <Testimonials />

                {/* Formulario de Contacto */}
                <ContactForm />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
};

import { useState } from "react";
import DownIcon from "../assets/DownIcon.svg"; // Asegúrate de que la ruta sea correcta

export const Hero = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollToServices = () => {
        const servicesSection = document.getElementById("NuestrosServicios");
        if (servicesSection) {
            setIsScrolling(true);
            servicesSection.scrollIntoView({ behavior: "smooth" })
            setTimeout(() => setIsScrolling(false), 12000); // Duración de la animación
        }
    };

    return (
        <section id="Home" className="relative min-h-[90vh]  flex flex-col justify-center items-start bg-[rgba(255,255,255,0.1)] text-white">
            <h1 className="text-4xl font-bold text-balance md:w-3/4">Transformamos tus ideas en  soluciones tecnológicas innovadoras</h1>
            <p className="mt-4 text-balance  md:w-3/4">Expertos en Análisis de Datos, Desarrollo Web y Consultoría Tecnológica para  impulsar tu negocio.</p>
            <a href="#Contacto" className="mt-6 bg-blue text-blue-900 z-30 px-4 py-2 rounded">Descubre cómo podemos ayudarte</a>
            <div className={`absolute left-0 right-0 bottom-10 max-md:bottom-20  animate-bounce transition-transform duration-1000 ${isScrolling ? 'translate-y-5' : ''}`}>
                <a onClick={scrollToServices} style={{ cursor: 'pointer' }} className="flex justify-center transition-all duration-600 items-center  text-center" href="#NuestrosServicios">
                    <img src={DownIcon} alt="Flecha hacia abajo" className="flex justify-center items-center  h-6 w-6" />
                </a>
            </div>
        </section>
    )
}

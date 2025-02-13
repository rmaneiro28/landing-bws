import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import HamburgerIcon from "../assets/MenuBarsIcon.svg";
import HomeIcon from "../assets/HomeIcon.svg";
import AboutIcon from "../assets/AboutUsIcon.svg";
import ServicesIcon from "../assets/ServicesIcon.svg";
import ProjectsIcon from "../assets/ProjectsIcon.svg";
import TestimonialsIcon from "../assets/TestimonialsIcon.svg";
import ContactIcon from "../assets/ContactIcon.svg";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const links = [{ id: 1, href: "#Home", text: "Inicio" }, { id: 2, href: "#SobreNosotros", text: "Sobre Nosotros" }, { id: 3, href: "#NuestrosServicios", text: "Nuestros Servicios" }, { id: 4, href: "#ProyectosDestacados", text: "Proyectos Destacados" }, { id: 5, href: "#Testimonios", text: "Testimonios" }, { id: 6, href: "#Contacto", text: "Contacto" }]
    return (
        <header className={`fixed top-0 left-0 w-full z-10 transition-transform duration-300 backdrop-blur-sm bg-white/70 shadow-md shadow-slate-400`}>
            <div className="max-md:px-10 px-20 py-4 flex justify-between items-center">
                <img src={Logo} className="h-16" alt="Logo" />
                <nav className="hidden md:flex">
                    <ul className="flex gap-6 text-sm">
                        {links.map((link) => (
                            <li key={link.id}>
                                <a href={link.href} className="hover:text-blue-500 transition-colors duration-300">{link.text}</a>
                            </li>
                        ))
                        }
                    </ul>
                </nav>
                <button className="md:hidden" onClick={toggleMenu}>
                    <img src={HamburgerIcon} alt="Menu" className="h-8 w-8" />
                </button>
            </div>
            {menuOpen && (
                <nav className="md:hidden bg-white shadow-md shadow-slate-400 rounded-lg py-4 px-8">
                    <ul className="flex flex-col gap-4">
                        <NavLink className={"flex items-center  gap-4"} to="/" onClick={toggleMenu}>
                            <img src={HomeIcon} alt="Inicio" className="h-4 w-4" />Inicio
                        </NavLink>
                        <NavLink className={"flex items-center gap-4"} to="#QuienesSomos" onClick={toggleMenu}>
                            <img src={AboutIcon} alt="Quiénes Somos" className="h-4 w-4" />Quiénes Somos
                        </NavLink>
                        <NavLink className={"flex items-center gap-4"} to="#NuestrosServicios" onClick={toggleMenu}>
                            <img src={ServicesIcon} alt="Nuestros Servicios" className="h-4 w-4" />Nuestros Servicios
                        </NavLink>
                        <NavLink className={"flex items-center gap-4"} to="#Proyectos" onClick={toggleMenu}>
                            <img src={ProjectsIcon} alt="Proyectos Destacados" className="h-4 w-4" />Proyectos Destacados
                        </NavLink>
                        <NavLink className={"flex items-center gap-4"} to="#Testimonios" onClick={toggleMenu}>
                            <img src={TestimonialsIcon} alt="Testimonios" className="h-4 w-4" />Testimonios
                        </NavLink>
                        <NavLink className={"flex items-center gap-4"} to="#Contacto" onClick={toggleMenu}>
                            <img src={ContactIcon} alt="Contacto" className="h-4 w-4" />Contacto
                        </NavLink>
                    </ul>
                </nav>
            )}
        </header>
    );
};
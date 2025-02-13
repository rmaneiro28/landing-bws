import { useState } from "react";
import Logo from "../assets/Logo.png";
import HamburgerIcon from "../assets/MenuBarsIcon.svg";
import HomeIcon from "../assets/HomeIcon.svg";
import AboutIcon from "../assets/AboutUsIcon.svg";
import ServicesIcon from "../assets/ServicesIcon.svg";
import ProjectsIcon from "../assets/ProjectsIcon.svg";
import TestimonialsIcon from "../assets/TestimonialsIcon.svg";
import ContactIcon from "../assets/ContactIcon.svg";
import { Link } from "react-router";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const links = [{ id: 1, href: "/", text: "Inicio", icon: HomeIcon }, { id: 2, href: "#SobreNosotros", text: "Sobre Nosotros", icon: AboutIcon }, { id: 3, href: "#NuestrosServicios", text: "Nuestros Servicios", icon: ServicesIcon }, { id: 4, href: "#ProyectosDestacados", text: "Proyectos Destacados", icon: ProjectsIcon }, { id: 5, href: "#Testimonios", text: "Testimonios", icon: TestimonialsIcon }, { id: 6, href: "#Contacto", text: "Contacto", icon: ContactIcon }]
    return (
        <header className={`fixed top-0 left-0 w-full z-10 transition-transform duration-300 backdrop-blur-sm bg-white/70 shadow-md shadow-slate-400`}>
            <div className="max-md:px-10 px-20 py-4 flex justify-between items-center">
                <Link to="/" reloadDocument>
                    <img src={Logo} className="h-16" alt="Logo" />
                </Link>
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
                    <ul className="flex flex-col gap-2">
                        {links.map((link) => (
                            <li key={link.id} onClick={toggleMenu} className="cursor-pointer hover:bg-blue hover:text-white rounded-lg py-2 px-4">
                                <a href={link.href} className="transition-colors duration-300 flex gap-4 items-center "><img src={link.icon} alt="Inicio" className="h-4 w-4 hover:text-blue hover:fill-blue " />{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};
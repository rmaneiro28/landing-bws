import Logo from "../assets/Logo.png";
import Instagram from "../assets/Instagram.svg"
import LinkedIn from "../assets/LinkedIn.svg"
import Twitter from "../assets/Twitter.svg"
export const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue to-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col items-center z-20 bg-white p-2 rounded-md mb-4 md:mb-0">
                    <img src={Logo} alt="Logo" className="h-12 mr-2" />
                </div>
                <div className="mb-4 md:mb-0">
                    <p className="text-lg font-bold text-white">Contáctanos</p>
                    <p className="text-white">Email: bwsolutions@gmail.com</p>
                    <p className="text-white">Teléfono: +123 456 7890</p>
                </div>
                <div className="mb-4 md:mb-0">
                    <p className="text-lg font-bold text-white mb-2">Síguenos</p>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/bw_solutions/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="" /></a> <a href="https://www.instagram.com/bw_solutions/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="" /></a> <a href="https://www.instagram.com/bw_solutions/" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="" /></a>
                    </div>
                </div>
                <div className="mb-4 md:mb-0">
                    <p className="text-center text-white">© {new Date().getFullYear()} BW Solutions C.A - Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}; 
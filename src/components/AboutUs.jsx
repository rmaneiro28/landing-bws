import SobreNosotros from "../assets/SobreNosotros.png"
import ShieldIcon from "../assets/Shield.svg"
import FocusIcon from "../assets/FocusIcon.svg"
import InnovationIcon from "../assets/InnovationIcon.svg"
export const AboutUs = () => {
    return (
        <section id="SobreNosotros" className=" py-28">
            <p className="text-lg font-bold text-center text-blue">Sobre Nosotros</p>
            <h2 className="text-4xl max-md:text-2xl text-center text-balance mt-4">Somos un equipo de profesionales  apasionados por la tecnología y la innovación.</h2>
            <div className=" mt-20 flex max-md:flex-col justify-center gap-4 items-center ">
                <img src={SobreNosotros} alt="Sobre Nosotros" className="w-2/4 rounded-lg max-md:w-full" />
                <p className="text-center text-balance">Con años de experiencia en el sector, ayudamos  a empresas de todos los tamaños a alcanzar sus  metas mediante soluciones tecnológicas de vanguardia.</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-20 max-md:grid-cols-1 max-md:gap-8">
                <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-md flex flex-col items-center gap-4">
                    <img className="h-16 w-16" src={InnovationIcon} alt="" />
                    <p className="font-bold mb-2">Innovación constante</p>
                </div>
                <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-md flex flex-col items-center gap-4">
                    <img className="h-16 w-16" src={FocusIcon} alt="" />
                    <p className="font-bold mb-2">Enfoque en resultados</p>
                </div>
                <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg  shadow-md flex flex-col items-center gap-4">
                    <img className="h-16 w-16" src={ShieldIcon} alt="" />
                    <p className="font-bold mb-2">Transparencia y confianza</p>
                </div>
            </div>
        </section>
    )
}

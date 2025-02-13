import SobreNosotros from "../assets/SobreNosotros.png"
import ShieldIcon from "../assets/Shield.svg"
import FocusIcon from "../assets/FocusIcon.svg"
import InnovationIcon from "../assets/InnovationIcon.svg"
export const AboutUs = () => {
    return (
        <section id="SobreNosotros" className="bg-white py-28">
            <p className="text-lg font-bold text-center text-blue">Sobre Nosotros</p>
            <h5 className="text-4xl text-center mt-4">Somos un equipo de profesionales <br /> apasionados por la tecnología y la innovación.</h5>
            <div className=" mt-20 flex justify-center gap-4 items-center ">
                <img src={SobreNosotros} alt="Sobre Nosotros" className="w-2/4 rounded-lg" />
                <p className="text-right text-balance">Con años de experiencia en el sector, ayudamos <br /> a empresas de todos los tamaños a alcanzar sus <br /> metas mediante soluciones tecnológicas de vanguardia.</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-20">
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center gap-4">
                    <img className="h-16 w-16" src={InnovationIcon} alt="" />
                    <p className="font-bold mb-2">Innovación constante</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center gap-4">
                    <img className="h-16 w-16" src={FocusIcon} alt="" />
                    <p className="font-bold mb-2">Enfoque en resultados</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center gap-4">
                    <img className="h-16 w-16" src={ShieldIcon} alt="" />
                    <p className="font-bold mb-2">Transparencia y confianza</p>
                </div>
            </div>
        </section>
    )
}

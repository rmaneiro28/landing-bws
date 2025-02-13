import AnalysisData from "../assets/Analysis.png"
import Consulting from "../assets/Consulting.png"
import Code from "../assets/Code.png"

export const Services = () => {
    return (
        <section id="NuestrosServicios" className="py-28">
            <p className="text-blue text-lg pb-2 font-bold   text-center">Nuestros Servicios</p>
            <h2 className="text-4xl max-md:text-2xl font-bold text-center text-balance">Ofrecemos soluciones tecnológicas  personalizadas para ayudarte a alcanzar  tus objetivos.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                <div className="border bg-white/80 backdrop-blur-md pb-6 rounded-lg shadow shadow-slate-400">
                    <img src={AnalysisData} alt="Análisis de Datos" className="h-56 w-full mx-auto" />
                    <h3 className="text-xl pt-4 font-semibold text-center mb-4">Análisis de Datos</h3>
                    <hr className="border-blue flex items-center justify-center w-28  mx-auto mb-4" />
                    <p className="px-4 text-center">Ofrecemos soluciones personalizadas para ayudarte a alcanzar tus objetivos.</p>
                </div>
                <div className="border bg-white/80 backdrop-blur-md  pb-6 rounded-lg shadow shadow-slate-400">
                    <img src={Consulting} alt="Consultoría Tecnológica" className="h-56 w-full mx-auto" />
                    <h3 className="text-xl pt-4 font-semibold text-center mb-4">Consultoría Tecnológica</h3>
                    <hr className="border-blue flex items-center justify-center w-28  mx-auto mb-4" />
                    <p className="px-4 text-center">Te ayudamos a identificar las mejores herramientas y estrategias tecnológicas para tu negocio.</p>
                </div>
                <div className="border bg-white/80 backdrop-blur-md pb-6 rounded-lg shadow shadow-slate-400">
                    <img src={Code} alt="Análisis de Datos" className="h-56 w-full mx-auto" />
                    <h3 className="text-xl pt-4 font-semibold text-center mb-4">Desarrollo Web</h3>
                    <hr className="border-blue flex items-center justify-center w-28  mx-auto mb-4" />
                    <p className="px-4 text-center">Creamos sitios web y aplicaciones a medida, optimizados para rendimiento y experiencia de usuario.</p>
                </div>
                {/* Repite para otros servicios */}
            </div>
        </section>
    );
}; 
import { Header } from "./Header";
import AnalysisData from "../assets/Analysis.png"
import Consulting from "../assets/Consulting.png"
import Code from "../assets/Code.png"
import SobreNosotros from "../assets/SobreNosotros.png"
import ShieldIcon from "../assets/Shield.svg"
import FocusIcon from "../assets/FocusIcon.svg"
import InnovationIcon from "../assets/InnovationIcon.svg"
import CMI from "../assets/CMI.png"
import AlphaMonitor from "../assets/AlphaMonitor.png"
import TableroControl from "../assets/Tablero de Control.png"
export const Main = () => {
    return (
        <>
            <Header />
            <main className="pt-24 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm z-10 container mx-auto px-4">
                {/* Sección de Encabezado */}
                <section id="Home" className="min-h-[90vh]  flex flex-col justify-center items-start bg-[rgba(255,255,255,0.1)])] text-white">
                    <h1 className="text-4xl font-bold">Transformamos tus ideas en  soluciones <br />tecnológicas innovadoras</h1>
                    <p className="mt-4">Expertos en Análisis de Datos, Desarrollo Web y Consultoría Tecnológica para <br /> impulsar tu negocio.</p>
                    <button className="mt-6 bg-blue text-blue-900 px-4 py-2 rounded">Descubre cómo podemos ayudarte</button>
                </section>

                {/* Sección de Servicios */}
                <section id="NuestrosServicios" className="py-28">
                    <p className="text-blue text-lg pb-2 font-bold   text-center">Nuestros Servicios</p>
                    <h2 className="text-3xl font-bold text-center">Ofrecemos soluciones tecnológicas <br /> personalizadas para ayudarte a alcanzar  tus<br /> objetivos.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        <div className="border pb-6 rounded-lg shadow shadow-slate-400">
                            <img src={AnalysisData} alt="Análisis de Datos" className="h-56 w-full mx-auto" />
                            <h3 className="text-xl pt-4 font-semibold text-center mb-4">Análisis de Datos</h3>
                            <hr className="border-blue flex items-center justify-center w-28  mx-auto mb-4" />
                            <p className="px-4 text-center">Ofrecemos soluciones personalizadas para ayudarte a alcanzar tus objetivos.</p>
                        </div>
                        <div className="border  pb-6 rounded-lg shadow shadow-slate-400">
                            <img src={Consulting} alt="Consultoría Tecnológica" className="h-56 w-full mx-auto" />
                            <h3 className="text-xl pt-4 font-semibold text-center mb-4">Consultoría Tecnológica</h3>
                            <hr className="border-blue flex items-center justify-center w-28  mx-auto mb-4" />
                            <p className="px-4 text-center">Te ayudamos a identificar las mejores herramientas y estrategias tecnológicas para tu negocio.</p>
                        </div>
                        <div className="border pb-6 rounded-lg shadow shadow-slate-400">
                            <img src={Code} alt="Análisis de Datos" className="h-56 w-full mx-auto" />
                            <h3 className="text-xl pt-4 font-semibold text-center mb-4">Desarrollo Web</h3>
                            <hr className="border-blue flex items-center justify-center w-28  mx-auto mb-4" />
                            <p className="px-4 text-center">Creamos sitios web y aplicaciones a medida, optimizados para rendimiento y experiencia de usuario.</p>
                        </div>
                        {/* Repite para otros servicios */}
                    </div>
                </section>

                {/* Sección Sobre Nosotros */}
                <section id="SobreNosotros" className="bg-gray-100 py-28">
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

                {/* Proyectos Destacados */}
                <section id="ProyectosDestacados" className="py-28">
                    <p className="text-lg font-bold text-center text-blue">Proyectos Destacados</p>
                    <h5 className="text-4xl text-center mt-4">Resultados que hablan por sí mismos</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white p-6 rounded-lg shadow-md shadow-slate-400">
                            <img className="h-48 w-full object-cover mb-4" src={CMI} alt="" />
                            <h3 className="text-xl font-bold mb-2">Dashboard Centro de Mando Integral</h3>
                            <p className="text-gray-600 mb-4">Desarrollo de un dashboard interactivo que permita visualizar y monitorear los indicadores clave de desempeño (KPIs) alineados con los objetivos estratégicos de la empresa, basado en la metodología del Cuadro de Mando Integral (CMI).</p>
                            <a href="#" className="text-blue hover:underline">Ver más</a>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md shadow-slate-400">
                            <img className="h-48 w-full object-cover mb-4" src={TableroControl} alt="" />
                            <h3 className="text-xl font-bold mb-2">Tablero de Control de calidad de datos</h3>
                            <p className="text-gray-600 mb-4">Desarrollamos un tablero de control interactivo que permite monitorear y mejorar la calidad de los datos en una organización, identificando errores, inconsistencias y duplicados, y asegurando la integridad y confiabilidad de la información</p>
                            <a href="#" className="text-blue hover:underline">Ver más</a>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md shadow-slate-400  ">
                            <img className="h-48 w-full object-cover mb-4" src={AlphaMonitor} alt="" />
                            <h3 className="text-xl font-bold mb-2">AlphaMonitor</h3>
                            <p className="text-gray-600 mb-4">Desarrollamos una solución integral para monitorear en tiempo real las transacciones de bases de datos y los procesos de jobs, identificando fallos, cuellos de botella y oportunidades de optimización, asegurando la estabilidad y eficiencia de los sistemas.</p>
                            <a href="#" className="text-blue hover:underline">Ver más</a>
                        </div>

                    </div>
                </section>

                {/* Testimonios */}
                <section id="Testimonios" className="bg-gray-100 py-28">
                    <h2 className="text-3xl font-bold text-center">Lo que dicen nuestros clientes</h2>
                    <div className="flex justify-center mt-6">
                        <div className="border p-4 rounded-lg mx-4">
                            <p>Excelente servicio y atención.</p>
                            <p>- Cliente Satisfecho</p>
                        </div>
                        {/* Repite para otros testimonios */}
                    </div>
                </section>

                {/* Formulario de Contacto */}
                <section id="Contacto" className="py-28">
                    <h2 className="text-3xl font-bold text-center">¿Listo para transformar tu negocio?</h2>
                    <form className="max-w-lg mx-auto mt-6">
                        <input type="text" placeholder="Nombre" className="border p-2 w-full mb-4" required />
                        <input type="text" placeholder="Empresa" className="border p-2 w-full mb-4" required />
                        <input type="tel" placeholder="Teléfono" className="border p-2 w-full mb-4" required />
                        <input type="email" placeholder="Correo Electrónico" className="border p-2 w-full mb-4" required />
                        <textarea placeholder="Mensaje" className="border p-2 w-full mb-4" required></textarea>
                        <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded">Enviar Mensaje</button>
                    </form>
                </section>
            </main>
        </>
    );
};

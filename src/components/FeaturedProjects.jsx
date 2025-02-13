import CMI from "../assets/CMI.png"
import AlphaMonitor from "../assets/AlphaMonitor.png"
import TableroControl from "../assets/Tablero de Control.png"

export const FeaturedProjects = () => {
    return (
        <section id="ProyectosDestacados" className="py-28">
            <p className="text-lg font-bold text-center text-blue">Proyectos Destacados</p>
            <h2 className="text-4xl max-md:text-2xl text-center mt-4">Resultados que hablan por sí mismos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className=" p-6 rounded-lg shadow-md bg-white shadow-slate-400">
                    <img className="h-48 w-full object-cover mb-4" src={CMI} alt="" />
                    <h3 className="text-xl font-bold mb-2">Dashboard Cuadro de Mando Integral</h3>
                    <p className="text-gray-600 mb-4 text-balance">Desarrollo de un dashboard interactivo que permita visualizar y monitorear los indicadores clave de desempeño (KPIs) alineados con los objetivos estratégicos de la empresa, basado en la metodología del Cuadro de Mando Integral (CMI).</p>
                    <a href="#" className="text-blue hover:underline">Ver más</a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md shadow-slate-400">
                    <img className="h-48 w-full object-cover mb-4" src={TableroControl} alt="" />
                    <h3 className="text-xl font-bold mb-2">Tablero de Control de calidad de datos</h3>
                    <p className="text-gray-600 mb-4 text-balance">Desarrollamos un tablero de control interactivo que permite monitorear y mejorar la calidad de los datos en una organización, identificando errores, inconsistencias y duplicados, y asegurando la integridad y confiabilidad de la información</p>
                    <a href="#" className="text-blue hover:underline">Ver más</a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md shadow-slate-400  ">
                    <img className="h-48 w-full object-cover mb-4" src={AlphaMonitor} alt="" />
                    <h3 className="text-xl font-bold mb-2">AlphaMonitor</h3>
                    <p className="text-gray-600 mb-4 text-balance">Desarrollamos una solución integral para monitorear en tiempo real las transacciones de bases de datos y los procesos de jobs, identificando fallos, cuellos de botella y oportunidades de optimización, asegurando la estabilidad y eficiencia de los sistemas.</p>
                    <a href="#" className="text-blue hover:underline">Ver más</a>
                </div>

            </div>
        </section>
    );
}; 
export const Testimonials = () => {
    return (
        <section id="Testimonios" className="bg-white py-28">
            <p className="text-blue text-lg pb-2 font-bold   text-center">Testimonios</p>
            <h2 className="text-3xl font-bold text-center">Lo que dicen nuestros clientes</h2>
            <div className="flex flex-col md:flex-row justify-center mt-6">
                <div className="border p-4 rounded-lg shadow-lg mx-4 mb-4">
                    <p className="italic">Excelente servicio y atención. Me ayudaron a alcanzar mis objetivos tecnológicos.</p>
                    <p className="font-bold mt-2">- Cliente Satisfecho</p>
                </div>
                <div className="border p-4 rounded-lg shadow-lg mx-4 mb-4">
                    <p className="italic">El equipo es muy profesional y siempre está dispuesto a ayudar.</p>
                    <p className="font-bold mt-2">- Otro Cliente Satisfecho</p>
                </div>
                {/* Repite para otros testimonios */}
            </div>
        </section>
    );
}; 
export const ContactForm = () => {
    return (
        <section id="Contacto" className="py-28">
            <p className="text-blue text-lg pb-2 font-bold   text-center">Contacto</p>
            <h2 className="text-3xl font-bold text-center">¿Listo para transformar tu negocio?</h2>
            <form className="max-w-lg mx-auto mt-6 bg-white p-6 rounded-lg shadow-lg">
                <input type="text" placeholder="Nombre" className="border p-2 w-full mb-4 rounded" required />
                <input type="text" placeholder="Empresa" className="border p-2 w-full mb-4 rounded" required />
                <input type="tel" placeholder="Teléfono" className="border p-2 w-full mb-4 rounded" required />
                <input type="email" placeholder="Correo Electrónico" className="border p-2 w-full mb-4 rounded" required />
                <textarea placeholder="Mensaje" className="border p-2 w-full mb-4 rounded" required></textarea>
                <button type="submit" className="bg-blue text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ">Enviar Mensaje</button>
            </form>
        </section>
    );
}; 
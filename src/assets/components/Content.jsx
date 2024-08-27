const Content = () => {
    return (
    <div className="contenedor__principal">
        <aside>
            <h2>Sabías que...</h2>
            <ul>
                <li><strong>Delfín: </strong>Los Delfines duermen con un ojo cerrado y el otro abierto.</li>
                <li><strong>Cóndor: </strong>Puede volar más de 300 km en un solo día.</li>
                <li><strong>Jaguar: </strong>A los jaguares les encanta nadar.</li>
                <li><strong>Coral: </strong>Los corales son animales.</li>
                <li><strong>Hienas: </strong>Son depredadores eficientes capaces de digerir huesos, cuernos e incluso los dientes de sus presas.</li>
            </ul>
        </aside>
        <main>
            <section className="contenedor__animales">
                <h2>Reino Animal: Un maravilloso tejido de vida</h2>
                <p>El Reino Animal es un vibrante mosaico de formas y colores, donde cada criatura, desde las majestuosas aves en vuelo hasta los pequeños insectos en el suelo, desempeñan un papel esencial en el equilibrio de la vida. Con una asombrosa diversidad de especies, nos muestra la maravilla de la adaptación y la interconexión de la naturaleza. En su esplendor, encontramos un reflejo de la belleza y la complejidad del mundo natural, invitándonos a admirar,
                    respetar y proteger este precioso legado de vida..</p>
            </section>
            <section className="contenedor__imagenes">
                <figure>
                        <img src="/public/imagenes/tortuga.jpg" alt="Animales Acuáticos" />
                </figure>
                <figure>
                    <img src="/public/imagenes/colibri.jpg" alt="Animales Aéreos" />
                </figure>
                <figure>
                    <img src="/public/imagenes/jaguar.jpg" alt="Animales Terrestres" />
                </figure>
                <figure>
                    <img src="/public/imagenes/erizo.jpg" alt="Reino Animal" />
                </figure>
            </section>
        </main>
    </div>
    )
}
export default Content
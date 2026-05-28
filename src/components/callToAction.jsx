import '../css/callToActionContent.css';
export default function CallToAction () {
    return (
        <section className="ctasection">
            <div className="ctacontainer">
                <h2>¿Listo para comenzar tu aventura?</h2>
                <p>
                    Únete a millones de jugadores que ya disfrutan de la mejor experiencia de juego
                </p>
                <div className="ctabuttons">
                    <a href="#" className="ctabutton primary">
                        Crear Cuenta Gratis
                    </a>
                    <a href="#" className="ctabutton secondary">
                        Ver Tráiler
                    </a>
                </div>
            </div>
        </section>
    );
}
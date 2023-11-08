import "./CorrouselHome.css";

function CarrouselHome() {
    return (
        <>
            <div
                id="carouselExampleInterval"
                class="carousel slide"
                data-bs-ride="carousel">
                <div class="carousel-inner container">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <div className="gridCarrousel">
                            <div className="infoCard">
                                <img src="../src/assets/icono-01.png" alt="" />
                                <h3>Dimensionamiento</h3>
                                <p>
                                    Te brindamos la clave para un sistema
                                    perfectamente adaptado a tus necesidades.
                                    Calculamos la solución óptima que garantice
                                    el máximo ahorr o y comodidad.
                                </p>
                            </div>
                            <div className="infoCard">
                                <img src="../src/assets/icono-02.png" alt="" />
                                <h3>Instalación</h3>
                                <p>
                                    Garantizamos una instalación profesional y
                                    segur a que asegurará el funcionamiento de
                                    tu sistema para que disfrutes de agua
                                    caliente sostenible todo el año.
                                </p>
                            </div>
                            <div className="infoCard">
                                <img
                                    style={{ width: "120px" }}
                                    src="../src/assets/icono-03.png"
                                    alt=""
                                />
                                <h3>Mantenimiento</h3>
                                <p>
                                    Te ofrecemos tranquilidad y rendimiento
                                    continuo. Nos ocupamos de inspeccionar,
                                    limpiar y mantener tu termotanque solar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="20000">
                        <div className="infoCard">
                            <div className="gridCarrousel">
                                <div className="infoCard">
                                    <img
                                        style={{ width: "120px" }}
                                        src="../src/assets/icono-05.png"
                                        alt=""
                                    />
                                    <h3>Asesoramiento Personalizado</h3>
                                    <p>
                                        Estamos comprometidos a mantener tu
                                        inversión en energía limpia en perfectas
                                        condiciones.
                                    </p>
                                </div>
                                <div className="infoCard titleD">
                                    <img
                                        style={{ width: "120px" }}
                                        src="../src/assets/icono-06.png"
                                        alt=""
                                    />
                                    <h3 className="titleD">Trayectoria</h3>
                                    <p>
                                        Nuestro equipo cuenta con un equipo
                                        especializado, lo que garantiza
                                        productos de calidad y confianza.
                                    </p>
                                </div>
                                <div className="infoCard titleE">
                                    <img
                                        // style={{ width: "120px" }}
                                        src="../src/assets/icono-07.png"
                                        alt=""
                                    />
                                    <h3>Garantía</h3>
                                    <p>
                                        Los productos que ofrecemos tienen
                                        garantía para que puedas realizar tu
                                        compra con mayor confianza.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="infoCard">
                            <div className="gridCarrousel">
                                <div className="infoCard">
                                    <img
                                        style={{ width: "120px" }}
                                        src="../src/assets/icono-06.png"
                                        alt=""
                                    />
                                    <h3>Garantía</h3>
                                    <p>
                                        Los productos que ofrecemos tienen gar
                                        antía para que puedas realizar tu compra
                                        con mayor confianza.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev">
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next">
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default CarrouselHome;

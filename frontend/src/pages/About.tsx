function About() {
    return (
        <div>
            <div className="py-5" style={{background: "linear-gradient(135deg, #384186 0%, #13b09c 100%)"}}>
                <div className="container">
                    <h1
                        className="display-4 text-center mb-3 fade-in"
                        style={{color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.2)"}}
                    >
                        Sobre Nosotros
                    </h1>
                    <p
                        className="lead text-center fade-in"
                        style={{color: "rgba(255,255,255,0.95)", maxWidth: "700px", margin: "0 auto"}}
                    >
                        Conoce nuestra historia, misión y valores
                    </p>
                </div>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card shadow-lg border-0 mb-4 fade-in">
                            <div className="card-body p-4">
                                <p className="lead">
                                    Ofrecemos servicios integrales en el ámbito de recursos humanos y desarrollo organizacional.
                                    Nuestro objetivo principal es potenciar el capital humano de las organizaciones a través de
                                    soluciones personalizadas basadas en estudios rigurosos.
                                </p>
                            </div>
                        </div>

                        <div className="row mt-5 fade-in">
                            <div className="col-md-6 mb-4">
                                <div className="card h-100 shadow-sm border-0" style={{overflow: "hidden"}}>
                                    <div className="card-body">
                                        <div
                                            style={{
                                                background: "linear-gradient(135deg, #384186 0%, #13b09c 100%)",
                                                margin: "-1.5rem -1.5rem 1rem",
                                                padding: "1.5rem",
                                                borderRadius: "0",
                                            }}
                                        >
                                            <h3 className="card-title mb-0" style={{color: "white"}}>
                                                Nuestra Misión
                                            </h3>
                                        </div>
                                        <p className="card-text mt-3">
                                            Potenciar el capital humano de las organizaciones mediante soluciones personalizadas y
                                            estudios rigurosos que garanticen el éxito empresarial.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="card h-100 shadow-sm border-0" style={{overflow: "hidden"}}>
                                    <div className="card-body">
                                        <div
                                            style={{
                                                background: "linear-gradient(135deg, #13b09c 0%, #e94b35 100%)",
                                                margin: "-1.5rem -1.5rem 1rem",
                                                padding: "1.5rem",
                                                borderRadius: "0",
                                            }}
                                        >
                                            <h3 className="card-title mb-0" style={{color: "white"}}>
                                                Nuestra Visión
                                            </h3>
                                        </div>
                                        <p className="card-text mt-3">
                                            Ser la empresa líder en servicios de recursos humanos, reconocida por nuestra
                                            integridad, profesionalismo y compromiso con el desarrollo organizacional.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

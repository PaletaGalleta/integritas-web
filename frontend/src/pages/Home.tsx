import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faUsers,
    faChartLine,
    faFlask,
    faBrain,
    faClipboardList,
    faFileAlt,
    faBullseye,
    faSearchPlus,
    faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import SEO from "../components/SEO";

function Home() {
    const services = [
        {
            id: "socioeconomicos",
            title: "Estudios Socioeconómicos",
            icon: faChartLine,
            description: "Investigación completa del entorno social y económico con visitas domiciliarias",
            link: "/servicios/socioeconomicos",
            features: [
                "Análisis del entorno",
                "Visita domiciliaria / Virtual",
                "Verificación de identidad",
                "Referencias laborales",
            ],
        },
        {
            id: "toxicologicas",
            title: "Pruebas Toxicológicas",
            icon: faFlask,
            description: "Detección de drogas y medicamentos para mantener un ambiente laboral seguro",
            link: "/servicios/toxicologicas",
            features: ["Prueba de orina", "Resultados rápidos", "Prevención de riesgos", "Certificación profesional"],
        },
        {
            id: "psicologicas",
            title: "Evaluaciones Psicológicas",
            icon: faBrain,
            description: "Baterías psicológicas y entrevistas con psicólogas certificadas",
            link: "/servicios/psicologicas",
            features: ["Baterías psicológicas", "Entrevista profesional", "Perfil del candidato", "Evaluación de competencias"],
        },
        {
            id: "encuestas",
            title: "Encuesta Web",
            icon: faClipboardList,
            description: "Recopilación de información para determinar accesibilidad, competencia y percepción",
            link: "/servicios/encuestas",
            features: ["Encuestas digitales", "Análisis estadístico", "Reportes detallados"],
        },
        {
            id: "curriculum",
            title: "Currículum Certificado",
            icon: faFileAlt,
            description: "Validación de datos y certificaciones profesionales o académicas del candidato",
            link: "/servicios/curriculum",
            features: ["Revisión documental", "Verificación de datos", "Acreditación de títulos", "Reporte certificado"],
        },
        {
            id: "reclutamiento",
            title: "Reclutamiento de Personal",
            icon: faUsers,
            description: "Búsqueda y selección de candidatos ideales mediante un proceso estructurado de 6 pasos",
            link: "/servicios/reclutamiento",
            features: ["Oferta del puesto", "Búsqueda especializada", "Selección rigurosa", "Reporte objetivo"],
        },
    ];

    return (
        <div>
            <SEO
                title="Inicio"
                description="Integritas ofrece servicios profesionales en gestión de talento humano: estudios socioeconómicos, evaluaciones psicológicas, pruebas toxicológicas, reclutamiento y selección de personal en México."
                keywords="recursos humanos México, RRHH, estudios socioeconómicos, evaluaciones psicológicas, pruebas toxicológicas, reclutamiento, selección de personal, gestión de talento humano, CDMX"
                canonicalUrl="/"
            />
            {/* Hero Section */}
            <section
                className="position-relative py-5"
                style={{minHeight: "70vh", background: "linear-gradient(135deg, #384186 0%, #13b09c 100%)"}}
            >
                <div style={{position: "absolute", inset: 0, overflow: "hidden", zIndex: 0}}>
                    <img
                        src="/logo.svg"
                        alt="Background"
                        style={{
                            height: "150vh",
                            width: "auto",
                            right: 0,
                            bottom: 0,
                            position: "absolute",
                            transform: "translate(50%, 50%)",
                            opacity: 0.08,
                            pointerEvents: "none",
                            objectFit: "cover",
                        }}
                    />
                </div>

                <div
                    className="container d-flex flex-column align-items-center justify-content-center text-center"
                    style={{position: "relative", zIndex: 1, minHeight: "60vh"}}
                >
                    <img src="/logo_full_white.svg" alt="Logo Integritas" style={{maxWidth: "18rem"}} className="mb-4 fade-in" />

                    <h1 className="display-4 fade-in" style={{color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.2)"}}>
                        Potenciamos el Capital Humano de tu Organización
                    </h1>
                    <p className="lead mb-4 fade-in" style={{maxWidth: "700px", color: "rgba(255,255,255,0.95)"}}>
                        Servicios integrales en recursos humanos y desarrollo organizacional basados en estudios rigurosos y
                        profesionalismo
                    </p>

                    <div className="d-flex gap-3 flex-wrap justify-content-center fade-in">
                        <Link
                            to="/servicios"
                            className="btn btn-light btn-lg"
                            style={{fontWeight: "600", boxShadow: "0 4px 15px rgba(0,0,0,0.2)"}}
                        >
                            Ver Servicios
                        </Link>
                        <Link
                            to="/contacto"
                            className="btn btn-outline-light btn-lg"
                            style={{fontWeight: "600", borderWidth: "2px"}}
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-5 text-brand fade-in">Nuestros Servicios</h2>
                        <p className="lead text-muted fade-in">Soluciones personalizadas para el éxito de tu empresa</p>
                    </div>

                    <div className="row g-4">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className="col-md-6 col-lg-4 fade-in"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <div className="card h-100 shadow-sm hover-card border-0" style={{overflow: "hidden"}}>
                                    <div className="card-body">
                                        <div
                                            className="text-center mb-3"
                                            style={{
                                                background: "linear-gradient(135deg, #384186 0%, #13b09c 100%)",
                                                margin: "-1.5rem -1.5rem 1rem",
                                                padding: "2rem",
                                                borderRadius: "0",
                                            }}
                                        >
                                            <FontAwesomeIcon icon={service.icon} size="3x" style={{color: "white"}} />
                                        </div>
                                        <h5 className="card-title text-primary text-center mb-3">{service.title}</h5>
                                        <p className="card-text text-muted mb-3">{service.description}</p>
                                        <ul className="list-unstyled small mb-3">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="mb-2">
                                                    <span className="text-primary">✓</span> {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to={service.link} className="btn btn-outline-primary w-100">
                                            Más Información
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-5" style={{background: "linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%)"}}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-6 text-brand fade-in">¿Por Qué Elegirnos?</h2>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4 fade-in">
                            <div
                                className="text-center p-4"
                                style={{
                                    background: "white",
                                    borderRadius: "15px",
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                    height: "100%",
                                }}
                            >
                                <div
                                    className="mb-3"
                                    style={{
                                        background: "linear-gradient(135deg, #384186 0%, #13b09c 100%)",
                                        width: "80px",
                                        height: "80px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto",
                                    }}
                                >
                                    <FontAwesomeIcon icon={faBullseye} size="2x" style={{color: "white"}} />
                                </div>
                                <h4 className="text-primary">Profesionalismo</h4>
                                <p className="text-muted">
                                    Equipo altamente capacitado con años de experiencia en recursos humanos
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 fade-in" style={{animationDelay: "0.1s"}}>
                            <div
                                className="text-center p-4"
                                style={{
                                    background: "white",
                                    borderRadius: "15px",
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                    height: "100%",
                                }}
                            >
                                <div
                                    className="mb-3"
                                    style={{
                                        background: "linear-gradient(135deg, #13b09c 0%, #e94b35 100%)",
                                        width: "80px",
                                        height: "80px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto",
                                    }}
                                >
                                    <FontAwesomeIcon icon={faSearchPlus} size="2x" style={{color: "white"}} />
                                </div>
                                <h4 className="text-primary">Rigor y Precisión</h4>
                                <p className="text-muted">Estudios detallados y verificación exhaustiva de información</p>
                            </div>
                        </div>
                        <div className="col-md-4 fade-in" style={{animationDelay: "0.2s"}}>
                            <div
                                className="text-center p-4"
                                style={{
                                    background: "white",
                                    borderRadius: "15px",
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                    height: "100%",
                                }}
                            >
                                <div
                                    className="mb-3"
                                    style={{
                                        background: "linear-gradient(135deg, #e94b35 0%, #384186 100%)",
                                        width: "80px",
                                        height: "80px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto",
                                    }}
                                >
                                    <FontAwesomeIcon icon={faHandshake} size="2x" style={{color: "white"}} />
                                </div>
                                <h4 className="text-primary">Integridad</h4>
                                <p className="text-muted">Compromiso con la ética, transparencia y confidencialidad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5">
                <div className="container">
                    <div
                        className="card shadow-lg border-0 text-white fade-in"
                        style={{background: "linear-gradient(135deg, #e94b35 0%, #384186 100%)"}}
                    >
                        <div className="card-body text-center p-5">
                            <h2 className="display-5 mb-3">¿Listo para Potenciar tu Equipo?</h2>
                            <p className="lead mb-4">
                                Contáctanos hoy y descubre cómo podemos ayudarte a encontrar y desarrollar el mejor talento
                            </p>
                            <div className="d-flex gap-3 flex-wrap justify-content-center">
                                <Link to="/contacto" className="btn btn-light btn-lg">
                                    Solicitar Información
                                </Link>
                                <Link to="/nosotros" className="btn btn-outline-light btn-lg">
                                    Conocer Más
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;

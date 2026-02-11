import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers, faChartLine, faFlask, faBrain, faClipboardList, faFileAlt} from "@fortawesome/free-solid-svg-icons";

function Services() {
    const services = [
        {
            id: "socioeconomicos",
            title: "Estudios Socioeconómicos",
            icon: faChartLine,
            description: "Investigación y análisis del entorno social y económico del candidato",
            link: "/servicios/socioeconomicos",
        },
        {
            id: "toxicologicas",
            title: "Pruebas Toxicológicas",
            icon: faFlask,
            description: "Detección de drogas o medicamentos para mantener un ambiente laboral seguro",
            link: "/servicios/toxicologicas",
        },
        {
            id: "psicologicas",
            title: "Evaluaciones Psicológicas",
            icon: faBrain,
            description: "Baterías psicológicas para verificar el perfil del candidato",
            link: "/servicios/psicologicas",
        },
        {
            id: "encuestas",
            title: "Encuesta Web",
            icon: faClipboardList,
            description: "Recopilación de información para determinar accesibilidad y percepción",
            link: "/servicios/encuestas",
        },
        {
            id: "curriculum",
            title: "Currículum Certificado",
            icon: faFileAlt,
            description: "Validación de datos y certificaciones profesionales o académicas",
            link: "/servicios/curriculum",
        },
        {
            id: "reclutamiento",
            title: "Reclutamiento de Personal",
            icon: faUsers,
            description: "Búsqueda y selección de candidatos ideales para tu organización",
            link: "/servicios/reclutamiento",
        },
    ];

    return (
        <div>
            <div className="py-5" style={{background: "linear-gradient(135deg, #384186 0%, #13b09c 100%)"}}>
                <div className="container">
                    <h1
                        className="display-4 text-center mb-3 fade-in"
                        style={{color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.2)"}}
                    >
                        Nuestros Servicios
                    </h1>
                    <p
                        className="lead text-center fade-in"
                        style={{color: "rgba(255,255,255,0.95)", maxWidth: "700px", margin: "0 auto"}}
                    >
                        Soluciones profesionales para la gestión de tu talento humano
                    </p>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="col-md-6 col-lg-4 mb-4 fade-in"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <div className="card h-100 shadow-sm hover-card border-0" style={{overflow: "hidden"}}>
                                <div className="card-body text-center">
                                    <div
                                        className="mb-3"
                                        style={{
                                            background: "linear-gradient(135deg, #384186 0%, #13b09c 100%)",
                                            margin: "-1.5rem -1.5rem 1rem",
                                            padding: "2rem",
                                            borderRadius: "0",
                                        }}
                                    >
                                        <FontAwesomeIcon icon={service.icon} size="3x" style={{color: "white"}} />
                                    </div>
                                    <h5 className="card-title text-primary">{service.title}</h5>
                                    <p className="card-text">{service.description}</p>
                                    <Link to={service.link} className="btn btn-outline-primary mt-3">
                                        Ver Detalles
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;

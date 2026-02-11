import {Link, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBriefcase,
    faMapMarkerAlt,
    faClock,
    faLaptopHouse,
    faBuilding,
    faHome,
    faGraduationCap,
    faChartLine,
    faCheckCircle,
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

interface Job {
    id: string;
    postedDate: string;
    location: string;
    title: string;
    responsibilities: string[];
    salary: string;
    ageRange: string;
    type: string;
    horario: string;
    zona: string;
    benefits: string[];
    education?: string;
    priorExperience?: string;
    experienceYears?: string;
    additionalInfo?: string;
    active: boolean;
}

function JobDetails() {
    const {id} = useParams<{id: string}>();
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/jobs.json")
            .then(response => response.json())
            .then(data => {
                const foundJob = data.find((j: Job) => j.id === id);
                setJob(foundJob || null);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error loading job:", error);
                setLoading(false);
            });
    }, [id]);

    const getTypeIcon = (type: string) => {
        switch (type.toLowerCase()) {
            case "remoto":
                return faHome;
            case "híbrido":
                return faLaptopHouse;
            case "presencial":
                return faBuilding;
            default:
                return faBriefcase;
        }
    };

    const getTimeAgo = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return "Publicado hoy";
        if (diffDays === 1) return "Publicado ayer";
        if (diffDays < 7) return `Publicado hace ${diffDays} días`;
        if (diffDays < 30) return `Publicado hace ${Math.floor(diffDays / 7)} semanas`;
        return `Publicado hace ${Math.floor(diffDays / 30)} meses`;
    };

    if (loading) {
        return (
            <div className="container py-5">
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (!job) {
        return (
            <div className="container py-5">
                <div className="alert alert-warning text-center">
                    <h4>Vacante no encontrada</h4>
                    <p>La vacante que buscas no existe o ya no está disponible.</p>
                    <Link to="/bolsa-trabajo" className="btn btn-primary">
                        Ver todas las vacantes
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="py-5" style={{background: "linear-gradient(135deg, #384186 0%, #13b09c 100%)"}}>
                <div className="container">
                    <h1
                        className="display-4 text-center mb-3 fade-in"
                        style={{color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.2)"}}
                    >
                        Detalle de Vacante
                    </h1>
                    <p
                        className="lead text-center fade-in"
                        style={{color: "rgba(255,255,255,0.95)", maxWidth: "700px", margin: "0 auto"}}
                    >
                        Información completa de la oportunidad laboral
                    </p>
                </div>
            </div>
            <div className="container py-5">
                <nav aria-label="breadcrumb" className="fade-in">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/bolsa-trabajo">Bolsa de Trabajo</Link>
                        </li>
                        <li className="breadcrumb-item active">{job.title}</li>
                    </ol>
                </nav>

                <div className="row">
                    <div className="col-lg-8">
                        {/* Header */}
                        <div className="card shadow-lg border-0 mb-4 fade-in">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <div>
                                        <h1 className="display-5 text-brand mb-2">{job.title}</h1>
                                    </div>
                                    <span
                                        className={`badge ${
                                            job.type === "Remoto"
                                                ? "bg-success"
                                                : job.type === "Híbrido"
                                                  ? "bg-info"
                                                  : "bg-secondary"
                                        } fs-6`}
                                    >
                                        <FontAwesomeIcon icon={getTypeIcon(job.type)} className="me-2" />
                                        {job.type}
                                    </span>
                                </div>

                                <div className="row g-3 mb-3">
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-primary" />
                                            <span>
                                                <strong>Ubicación:</strong>
                                                {job.zona ? ` ${job.zona},` : ""} {job.location}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center">
                                            <FontAwesomeIcon icon={faClock} className="me-2 text-primary" />
                                            <span>
                                                <strong>Edad:</strong> {job.ageRange}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center">
                                            <FontAwesomeIcon icon={faClock} className="me-2 text-primary" />
                                            <span>
                                                <strong>Horario:</strong> {job.horario}
                                            </span>
                                        </div>
                                    </div>
                                    {job.experienceYears && (
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faChartLine} className="me-2 text-primary" />
                                                <span>
                                                    <strong>Años de Experiencia:</strong> {job.experienceYears}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                    {job.education && (
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faGraduationCap} className="me-2 text-primary" />
                                                <span>
                                                    <strong>Educación:</strong> {job.education}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <p className="text-muted small mb-0">{getTimeAgo(job.postedDate)}</p>
                            </div>
                        </div>

                        {/* Prior Experience */}
                        {job.priorExperience && (
                            <div className="card shadow-sm border-0 mb-4 fade-in">
                                <div className="card-body">
                                    <h4 className="text-primary mb-3">Experiencia Previa</h4>
                                    <p className="mb-0">{job.priorExperience}</p>
                                </div>
                            </div>
                        )}

                        {/* Responsibilities */}
                        <div className="card shadow-sm border-0 mb-4 fade-in">
                            <div className="card-body">
                                <h4 className="text-primary mb-3">Responsabilidades</h4>
                                <ul className="list-unstyled">
                                    {job.responsibilities.map((resp, index) => (
                                        <li key={index} className="mb-2">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                                            {resp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Additional Info */}
                        {job.additionalInfo && (
                            <div className="card shadow-sm border-0 mb-4 fade-in">
                                <div className="card-body">
                                    <h4 className="text-primary mb-3">Información Adicional</h4>
                                    <p className="mb-0">{job.additionalInfo}</p>
                                </div>
                            </div>
                        )}

                        {/* Benefits */}
                        <div className="card shadow-sm border-0 mb-4 fade-in">
                            <div className="card-body">
                                <h4 className="text-primary mb-3">Beneficios</h4>
                                <ul className="list-unstyled">
                                    {job.benefits.map((benefit, index) => (
                                        <li key={index} className="mb-2">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <div className="sticky-top" style={{top: "100px"}}>
                            {/* Apply Button */}
                            <div className={`card shadow-lg mb-4 fade-in ${job.active ? "border-primary" : "border-secondary"}`}>
                                <div className="card-body text-center p-4">
                                    <h5 className="card-title mb-3">
                                        {job.active ? "¿Te interesa esta vacante?" : "Vacante No Disponible"}
                                    </h5>
                                    {job.active ? (
                                        <>
                                            <Link
                                                to="/contacto"
                                                className="btn btn-primary btn-lg w-100 mb-3"
                                                style={{fontSize: "1.25rem", padding: "1rem"}}
                                            >
                                                <FontAwesomeIcon icon={faBriefcase} className="me-2" />
                                                Postularme
                                            </Link>
                                            <p className="small text-muted mb-0">
                                                Serás redirigido a nuestra página de contacto para enviar tu solicitud
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                className="btn btn-secondary btn-lg w-100 mb-3"
                                                style={{fontSize: "1.25rem", padding: "1rem"}}
                                                disabled
                                            >
                                                <FontAwesomeIcon icon={faBriefcase} className="me-2" />
                                                Postulaciones Cerradas
                                            </button>
                                            <p className="small text-muted mb-0">
                                                Esta vacante ya no está aceptando postulaciones
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Back to listings */}
                            <div className="card shadow-sm fade-in">
                                <div className="card-body">
                                    <Link to="/bolsa-trabajo" className="btn btn-outline-primary w-100">
                                        <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                                        Ver todas las vacantes
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDetails;

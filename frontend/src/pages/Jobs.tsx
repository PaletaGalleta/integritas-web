import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faMapMarkerAlt, faLaptopHouse, faBuilding, faHome} from "@fortawesome/free-solid-svg-icons";

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

function Jobs() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<string>("all");

    useEffect(() => {
        fetch("/jobs.json")
            .then(response => response.json())
            .then(data => {
                setJobs(data.filter((job: Job) => job.active));
                setLoading(false);
            })
            .catch(error => {
                console.error("Error loading jobs:", error);
                setLoading(false);
            });
    }, []);

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

    const filteredJobs = filter === "all" ? jobs : jobs.filter(job => job.type.toLowerCase() === filter.toLowerCase());

    const getTimeAgo = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return "Hoy";
        if (diffDays === 1) return "Ayer";
        if (diffDays < 7) return `Hace ${diffDays} días`;
        if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`;
        return `Hace ${Math.floor(diffDays / 30)} meses`;
    };

    return (
        <div>
            <div className="py-5" style={{background: "linear-gradient(135deg, #384186 0%, #13b09c 100%)"}}>
                <div className="container">
                    <h1
                        className="display-4 text-center mb-3 fade-in"
                        style={{color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.2)"}}
                    >
                        Bolsa de Trabajo
                    </h1>
                    <p
                        className="lead text-center fade-in"
                        style={{color: "rgba(255,255,255,0.95)", maxWidth: "700px", margin: "0 auto"}}
                    >
                        Encuentra tu próxima oportunidad profesional
                    </p>
                </div>
            </div>
            <div className="container py-5">
                {/* Filters */}
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="card shadow-sm fade-in">
                            <div className="card-body">
                                <div className="d-flex flex-wrap gap-2 justify-content-center">
                                    <button
                                        className={`btn ${filter === "all" ? "btn-primary" : "btn-outline-primary"}`}
                                        onClick={() => setFilter("all")}
                                    >
                                        Todas
                                    </button>
                                    <button
                                        className={`btn ${filter === "remoto" ? "btn-primary" : "btn-outline-primary"}`}
                                        onClick={() => setFilter("remoto")}
                                    >
                                        <FontAwesomeIcon icon={faHome} className="me-2" />
                                        Remoto
                                    </button>
                                    <button
                                        className={`btn ${filter === "híbrido" ? "btn-primary" : "btn-outline-primary"}`}
                                        onClick={() => setFilter("híbrido")}
                                    >
                                        <FontAwesomeIcon icon={faLaptopHouse} className="me-2" />
                                        Híbrido
                                    </button>
                                    <button
                                        className={`btn ${filter === "presencial" ? "btn-primary" : "btn-outline-primary"}`}
                                        onClick={() => setFilter("presencial")}
                                    >
                                        <FontAwesomeIcon icon={faBuilding} className="me-2" />
                                        Presencial
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Job Listings */}
                <div className="row">
                    {loading ? (
                        <div className="col-12 text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                        </div>
                    ) : filteredJobs.length === 0 ? (
                        <div className="col-12">
                            <div className="alert alert-info text-center">No hay vacantes disponibles en este momento.</div>
                        </div>
                    ) : (
                        filteredJobs.map((job, index) => (
                            <div
                                key={job.id}
                                className="col-md-6 col-lg-4 mb-4 fade-in"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <div className="card h-100 shadow-sm hover-card border-0" style={{overflow: "hidden"}}>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-start mb-3">
                                            <h5 className="card-title text-primary mb-0">{job.title}</h5>
                                            <span
                                                className={`badge ${
                                                    job.type === "Remoto"
                                                        ? "bg-success"
                                                        : job.type === "Híbrido"
                                                          ? "bg-info"
                                                          : "bg-secondary"
                                                }`}
                                            >
                                                <FontAwesomeIcon icon={getTypeIcon(job.type)} className="me-1" />
                                                {job.type}
                                            </span>
                                        </div>

                                        <div className="mb-2 small">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-primary" />
                                            {job.location}
                                        </div>

                                        <div className="mb-3 small text-muted">Edad: {job.ageRange}</div>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-muted">{getTimeAgo(job.postedDate)}</small>
                                            <Link to={`/bolsa-trabajo/${job.id}`} className="btn btn-outline-primary btn-sm">
                                                Ver Detalles
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Jobs;

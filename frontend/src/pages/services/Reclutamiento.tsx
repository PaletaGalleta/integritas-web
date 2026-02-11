import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";

function Reclutamiento() {
    const proceso = [
        "Oferta del puesto requerido",
        "Búsqueda de personal adecuado",
        "Selección de candidatos para el puesto solicitado",
        "Investigación de la información proporcionada por candidatos",
        "Entrevista proactiva a candidatos",
        "Reporte objetivo por candidato",
    ];

    return (
        <div className="container py-5">
            <nav aria-label="breadcrumb" className="fade-in">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/servicios">Servicios</Link>
                    </li>
                    <li className="breadcrumb-item active">Reclutamiento de Personal</li>
                </ol>
            </nav>

            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h1 className="display-4 text-brand mb-4 fade-in">
                        <FontAwesomeIcon icon={faUsers} className="me-3" />
                        Reclutamiento de Personal
                    </h1>

                    <div className="card shadow-sm mb-4 fade-in">
                        <div className="card-body p-4">
                            <p className="lead">
                                Ofrecemos un servicio completo de reclutamiento y selección de personal, garantizando que
                                encuentres a los candidatos más calificados para tu organización.
                            </p>
                        </div>
                    </div>

                    <div className="card shadow-sm mb-4 fade-in">
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">Proceso de Reclutamiento</h3>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {proceso.map((paso, index) => (
                                    <li key={index} className="list-group-item d-flex align-items-start">
                                        <span className="badge bg-primary rounded-pill me-3 mt-1">{index + 1}</span>
                                        <span>{paso}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-5 fade-in">
                        <Link to="/contacto" className="btn btn-primary btn-lg">
                            Solicitar Servicio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reclutamiento;

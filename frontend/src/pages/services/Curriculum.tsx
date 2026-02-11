import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileAlt, faGraduationCap, faBriefcase, faTrophy} from "@fortawesome/free-solid-svg-icons";

function Curriculum() {
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
                    <li className="breadcrumb-item active">Currículum Certificado</li>
                </ol>
            </nav>

            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h1 className="display-4 text-brand mb-4 fade-in">
                        <FontAwesomeIcon icon={faFileAlt} className="me-3" />
                        Currículum Certificado
                    </h1>

                    <div className="card shadow-sm mb-4 fade-in">
                        <div className="card-body p-4">
                            <p className="lead">
                                Con el objetivo de validar datos proporcionados por el candidato, en su Curriculum Vitae se
                                realiza una investigación puntual de la información y se acreditan las certificaciones
                                profesionales o académicas como evidencia de habilidades y conocimientos.
                            </p>
                        </div>
                    </div>

                    <div className="card shadow-sm mb-4 fade-in">
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">Proceso de Certificación</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-start">
                                        <span
                                            className="badge bg-primary rounded-circle me-3 mt-1"
                                            style={{
                                                width: "30px",
                                                height: "30px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            1
                                        </span>
                                        <div>
                                            <h5>Revisión Documental</h5>
                                            <p className="mb-0">Análisis detallado de toda la información del CV</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-start">
                                        <span
                                            className="badge bg-primary rounded-circle me-3 mt-1"
                                            style={{
                                                width: "30px",
                                                height: "30px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            2
                                        </span>
                                        <div>
                                            <h5>Verificación de Datos</h5>
                                            <p className="mb-0">Validación de información con fuentes oficiales</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-start">
                                        <span
                                            className="badge bg-primary rounded-circle me-3 mt-1"
                                            style={{
                                                width: "30px",
                                                height: "30px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            3
                                        </span>
                                        <div>
                                            <h5>Certificaciones</h5>
                                            <p className="mb-0">Acreditación de títulos y certificaciones profesionales</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-start">
                                        <span
                                            className="badge bg-primary rounded-circle me-3 mt-1"
                                            style={{
                                                width: "30px",
                                                height: "30px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            4
                                        </span>
                                        <div>
                                            <h5>Reporte Final</h5>
                                            <p className="mb-0">Documento certificado con resultados de la validación</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row fade-in">
                        <div className="col-md-4 mb-3">
                            <div className="card text-center h-100 border-primary">
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faGraduationCap} size="3x" className="text-primary" />
                                    <h5 className="card-title mt-3">Académico</h5>
                                    <p className="card-text">Validación de títulos y grados académicos</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card text-center h-100 border-primary">
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faBriefcase} size="3x" className="text-primary" />
                                    <h5 className="card-title mt-3">Profesional</h5>
                                    <p className="card-text">Verificación de experiencia laboral</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card text-center h-100 border-primary">
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faTrophy} size="3x" className="text-primary" />
                                    <h5 className="card-title mt-3">Certificaciones</h5>
                                    <p className="card-text">Validación de cursos y certificaciones</p>
                                </div>
                            </div>
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

export default Curriculum;

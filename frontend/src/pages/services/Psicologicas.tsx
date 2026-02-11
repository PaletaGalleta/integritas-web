import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBrain, faClipboardList, faComments} from "@fortawesome/free-solid-svg-icons";

function Psicologicas() {
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
                    <li className="breadcrumb-item active">Evaluaciones Psicológicas</li>
                </ol>
            </nav>

            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h1 className="display-4 text-brand mb-4 fade-in">
                        <FontAwesomeIcon icon={faBrain} className="me-3" />
                        Evaluaciones Psicológicas
                    </h1>

                    <div className="card shadow-sm mb-4 fade-in">
                        <div className="card-body p-4">
                            <p className="lead">
                                Por medio de Baterías Psicológicas y entrevista con una de nuestras psicólogas se verifica que el
                                evaluado actúe dentro del marco de conducta que dicta la normatividad institucional y se apegue al
                                perfil del puesto.
                            </p>
                        </div>
                    </div>

                    <div className="row fade-in">
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h4 className="card-title text-primary">
                                        <FontAwesomeIcon icon={faClipboardList} className="me-2" />
                                        Baterías Psicológicas
                                    </h4>
                                    <p className="card-text">
                                        Aplicamos pruebas psicométricas especializadas para evaluar diferentes aspectos de la
                                        personalidad, habilidades cognitivas y competencias del candidato.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h4 className="card-title text-primary">
                                        <FontAwesomeIcon icon={faComments} className="me-2" />
                                        Entrevista Profesional
                                    </h4>
                                    <p className="card-text">
                                        Nuestras psicólogas certificadas realizan entrevistas profundas para comprender mejor el
                                        perfil del candidato y su adecuación al puesto.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card shadow-sm mb-4 fade-in">
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">Áreas de Evaluación</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <ul>
                                        <li>Personalidad y temperamento</li>
                                        <li>Habilidades cognitivas</li>
                                        <li>Inteligencia emocional</li>
                                        <li>Capacidad de liderazgo</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul>
                                        <li>Trabajo en equipo</li>
                                        <li>Manejo del estrés</li>
                                        <li>Adaptabilidad</li>
                                        <li>Valores y ética profesional</li>
                                    </ul>
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

export default Psicologicas;

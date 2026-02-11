import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFlask} from "@fortawesome/free-solid-svg-icons";

function Toxicologicas() {
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
                    <li className="breadcrumb-item active">Pruebas Toxicológicas</li>
                </ol>
            </nav>

            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h1 className="display-4 text-brand mb-4 fade-in">
                        <FontAwesomeIcon icon={faFlask} className="me-3" />
                        Pruebas Toxicológicas
                    </h1>

                    <div className="card shadow-sm mb-4 fade-in">
                        <div className="card-body p-4">
                            <p className="lead">
                                Se realizan pruebas toxicológicas que buscan detectar la presencia de drogas o medicamentos en el
                                cuerpo del evaluado.
                            </p>
                        </div>
                    </div>

                    <div className="card shadow-sm mb-4 fade-in">
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">Prueba Toxicológica de Orina</h3>
                        </div>
                        <div className="card-body">
                            <p>
                                Por medio de la Prueba Toxicológica de Orina se buscará evitar riesgos laborales dentro de tu área
                                de trabajo; esto ayudará a mantener un mejor ambiente laboral entre los trabajadores de tu Empresa
                                o Institución.
                            </p>

                            <div className="row mt-4">
                                <div className="col-md-6 mb-3">
                                    <div className="card bg-light h-100">
                                        <div className="card-body">
                                            <h5 className="card-title text-primary">✓ Beneficios</h5>
                                            <ul className="mb-0">
                                                <li>Prevención de riesgos laborales</li>
                                                <li>Ambiente laboral seguro</li>
                                                <li>Cumplimiento normativo</li>
                                                <li>Protección de empleados</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="card bg-light h-100">
                                        <div className="card-body">
                                            <h5 className="card-title text-primary">⚡ Características</h5>
                                            <ul className="mb-0">
                                                <li>Resultados rápidos y confiables</li>
                                                <li>Proceso no invasivo</li>
                                                <li>Certificación profesional</li>
                                                <li>Confidencialidad garantizada</li>
                                            </ul>
                                        </div>
                                    </div>
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

export default Toxicologicas;

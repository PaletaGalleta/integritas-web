import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboardList, faBullseye, faChartBar} from "@fortawesome/free-solid-svg-icons";

function Encuestas() {
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
                    <li className="breadcrumb-item active">Encuesta Web</li>
                </ol>
            </nav>

            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h1 className="display-4 text-brand mb-4 fade-in">
                        <FontAwesomeIcon icon={faClipboardList} className="me-3" />
                        Encuesta Web
                    </h1>

                    <div className="card shadow-sm mb-4 fade-in">
                        <div className="card-body p-4">
                            <p className="lead">
                                Recopilación de información a manera de encuesta para determinar accesibilidad, competencia,
                                demanda y percepción general del local.
                            </p>
                        </div>
                    </div>

                    <div className="row fade-in">
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 border-primary">
                                <div className="card-body">
                                    <h4 className="card-title text-primary">
                                        <FontAwesomeIcon icon={faBullseye} className="me-2" />
                                        Objetivos
                                    </h4>
                                    <ul>
                                        <li>Medir la accesibilidad del local</li>
                                        <li>Evaluar la competencia en el área</li>
                                        <li>Determinar la demanda del mercado</li>
                                        <li>Conocer la percepción general</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 border-primary">
                                <div className="card-body">
                                    <h4 className="card-title text-primary">
                                        <FontAwesomeIcon icon={faChartBar} className="me-2" />
                                        Metodología
                                    </h4>
                                    <ul>
                                        <li>Encuestas digitales personalizadas</li>
                                        <li>Análisis estadístico de resultados</li>
                                        <li>Reportes detallados y gráficos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="alert alert-info fade-in" role="alert">
                        <h5 className="alert-heading">💡 Información Importante</h5>
                        <p className="mb-0">
                            Nuestras encuestas web están diseñadas para obtener información valiosa que te ayudará a tomar
                            decisiones estratégicas para tu negocio o proyecto.
                        </p>
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

export default Encuestas;

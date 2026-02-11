import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine} from "@fortawesome/free-solid-svg-icons";

function Socioeconomicos() {
    const pasos = [
        {
            numero: 1,
            descripcion:
                "Investigación y análisis del entorno social y económico del candidato, proporcionando información clara para su base de datos.",
        },
        {
            numero: 2,
            descripcion:
                "Visita presencial o virtual al domicilio del candidato obteniendo evidencias visuales (fotografías), verificando su identidad por medio de documentos oficiales originales proporcionados por el candidato.",
        },
        {
            numero: 3,
            descripcion:
                "Investigación de antecedentes laborales y referencias personales, corroborando datos proporcionados por el candidato.",
        },
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
                    <li className="breadcrumb-item active">Estudios Socioeconómicos</li>
                </ol>
            </nav>

            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h1 className="display-4 text-brand mb-4 fade-in">
                        <FontAwesomeIcon icon={faChartLine} className="me-3" />
                        Estudios Socioeconómicos
                    </h1>

                    <div className="card shadow-sm mb-4 fade-in">
                        <div className="card-body p-4">
                            <p className="lead">
                                Realizamos estudios socioeconómicos completos que te permiten conocer el entorno social y
                                económico de tus candidatos, garantizando decisiones informadas en tus procesos de contratación.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-primary mb-4 fade-in">Proceso del Estudio</h3>

                    {pasos.map((paso, index) => (
                        <div
                            key={paso.numero}
                            className="card shadow-sm mb-3 fade-in"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <div className="card-body">
                                <div className="d-flex align-items-start">
                                    <div
                                        className="badge bg-primary rounded-circle me-3"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "1.2rem",
                                        }}
                                    >
                                        {paso.numero}
                                    </div>
                                    <p className="mb-0">{paso.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    ))}

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

export default Socioeconomicos;

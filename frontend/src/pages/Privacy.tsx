import {Link} from "react-router-dom";

function Privacy() {
    return (
        <div>
            <div className="py-5" style={{background: "linear-gradient(135deg, #384186 0%, #13b09c 100%)"}}>
                <div className="container">
                    <h1
                        className="display-4 fw-bold text-center mb-3 fade-in"
                        style={{color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.2)"}}
                    >
                        Aviso de Privacidad
                    </h1>
                    <p
                        className="lead text-center fade-in"
                        style={{color: "rgba(255,255,255,0.95)", maxWidth: "700px", margin: "0 auto"}}
                    >
                        Protección y manejo de tus datos personales
                    </p>
                </div>
            </div>
            <div className="container py-5">
                <nav aria-label="breadcrumb" className="fade-in">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="breadcrumb-item active">Aviso de Privacidad</li>
                    </ol>
                </nav>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card shadow-sm mb-4 fade-in border-0">
                            <div className="card-body p-4">
                                <h5 className="text-primary mb-3">Identidad y Domicilio del Responsable</h5>
                                <p>
                                    <strong>Integritas</strong> (en adelante "Integritas" o "el Responsable"), con domicilio en
                                    México, es responsable del tratamiento de tus datos personales.
                                </p>
                            </div>
                        </div>

                        <div className="card shadow-sm mb-4 fade-in">
                            <div className="card-body p-4">
                                <h5 className="text-primary mb-3">Datos Personales que Recabamos</h5>
                                <p>
                                    Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar tus datos
                                    personales de distintas formas:
                                </p>
                                <ul>
                                    <li>Cuando nos los proporcionas directamente</li>
                                    <li>Cuando visitas nuestro sitio web o utilizas nuestros servicios en línea</li>
                                    <li>Cuando obtenemos información a través de otras fuentes permitidas por la ley</li>
                                </ul>
                                <p className="mb-2">
                                    <strong>Los datos personales que recabamos incluyen:</strong>
                                </p>
                                <ul>
                                    <li>Datos de identificación (nombre, dirección, teléfono, correo electrónico)</li>
                                    <li>Datos laborales (empresa, puesto, experiencia profesional)</li>
                                    <li>Datos académicos (estudios, certificaciones)</li>
                                    <li>Datos patrimoniales y financieros (cuando aplique)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card shadow-sm mb-4 fade-in">
                            <div className="card-body p-4">
                                <h5 className="text-primary mb-3">Finalidades del Tratamiento</h5>
                                <p>
                                    <strong>Finalidades Primarias:</strong>
                                </p>
                                <ul>
                                    <li>Prestación de servicios de reclutamiento y selección de personal</li>
                                    <li>Realización de estudios socioeconómicos</li>
                                    <li>Aplicación de evaluaciones psicológicas</li>
                                    <li>Verificación de información y referencias</li>
                                    <li>Comunicación relacionada con los servicios contratados</li>
                                </ul>
                                <p>
                                    <strong>Finalidades Secundarias:</strong>
                                </p>
                                <ul>
                                    <li>Envío de información sobre nuevos servicios</li>
                                    <li>Mejora de nuestros servicios</li>
                                    <li>Fines estadísticos y de calidad</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card shadow-sm mb-4 fade-in">
                            <div className="card-body p-4">
                                <h5 className="text-primary mb-3">Derechos ARCO</h5>
                                <p>
                                    Tienes derecho a conocer qué datos personales tenemos de ti, para qué los utilizamos y las
                                    condiciones del uso que les damos (Acceso). Asimismo, es tu derecho solicitar la corrección de
                                    tu información personal en caso de que esté desactualizada, sea inexacta o incompleta
                                    (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando consideres
                                    que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerte al uso de
                                    tus datos personales para fines específicos (Oposición).
                                </p>
                                <p>
                                    Para ejercer tus derechos ARCO, puedes enviar una solicitud a:
                                    <strong> contacto@integritasservicios.com</strong>
                                </p>
                            </div>
                        </div>

                        <div className="card shadow-sm mb-4 fade-in">
                            <div className="card-body p-4">
                                <h5 className="text-primary mb-3">Transferencia de Datos</h5>
                                <p>
                                    Tus datos personales pueden ser compartidos con terceros únicamente para el cumplimiento de
                                    las finalidades descritas en este aviso, tales como empresas contratantes, instituciones
                                    educativas para verificación de datos, y autoridades cuando sea requerido por ley.
                                </p>
                            </div>
                        </div>

                        <div className="card shadow-sm mb-4 fade-in">
                            <div className="card-body p-4">
                                <h5 className="text-primary mb-3">Medidas de Seguridad</h5>
                                <p>
                                    Integritas ha implementado medidas de seguridad administrativas, técnicas y físicas para
                                    proteger tus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o
                                    tratamiento no autorizado.
                                </p>
                            </div>
                        </div>

                        <div className="card shadow-sm mb-4 fade-in">
                            <div className="card-body p-4">
                                <h5 className="text-primary mb-3">Cambios al Aviso de Privacidad</h5>
                                <p>
                                    Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al
                                    presente aviso de privacidad. Estas modificaciones estarán disponibles en nuestro sitio web.
                                </p>
                            </div>
                        </div>

                        <div className="card shadow-sm mb-4 fade-in bg-light">
                            <div className="card-body p-4">
                                <p className="mb-0 small text-muted">
                                    <strong>Última actualización:</strong> Febrero 2025
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-4 fade-in">
                            <Link to="/" className="btn btn-outline-primary">
                                Volver al Inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Privacy;

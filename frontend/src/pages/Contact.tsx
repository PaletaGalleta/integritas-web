import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope, faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <div>
            <div className="py-5" style={{background: "linear-gradient(135deg, #384186 0%, #13b09c 100%)"}}>
                <div className="container">
                    <h1
                        className="display-4 text-center mb-3 fade-in"
                        style={{color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.2)"}}
                    >
                        Contáctanos
                    </h1>
                    <p
                        className="lead text-center fade-in"
                        style={{color: "rgba(255,255,255,0.95)", maxWidth: "700px", margin: "0 auto"}}
                    >
                        Estamos aquí para ayudarte con tus necesidades de recursos humanos
                    </p>
                </div>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card shadow-lg border-0 fade-in">
                            <div className="card-body p-5">
                                <div className="row mb-4">
                                    <div className="col-md-6 mb-3">
                                        <div className="d-flex align-items-start">
                                            <div className="me-3">
                                                <FontAwesomeIcon icon={faPhone} size="2x" className="text-primary" />
                                            </div>
                                            <div>
                                                <h5 className="text-primary">Teléfono Oficina</h5>
                                                <p className="mb-0">
                                                    <a href="tel:5547525404" className="text-decoration-none">
                                                        55 4752 5404
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="d-flex align-items-start">
                                            <div className="me-3">
                                                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-primary" />
                                            </div>
                                            <div>
                                                <h5 className="text-primary">WhatsApp</h5>
                                                <p className="mb-0">
                                                    <a
                                                        href="https://wa.me/525523272448"
                                                        className="text-decoration-none"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        55 2327 2448
                                                    </a>
                                                    <br />
                                                    <a
                                                        href="https://wa.me/525633090394"
                                                        className="text-decoration-none"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        56 3309 0394
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-6 mb-3">
                                        <div className="d-flex align-items-start">
                                            <div className="me-3">
                                                <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-primary" />
                                            </div>
                                            <div>
                                                <h5 className="text-primary">Email</h5>
                                                <p className="mb-0">
                                                    <a
                                                        href="mailto:contacto@integritasservicios.com"
                                                        className="text-decoration-none"
                                                    >
                                                        contacto@integritasservicios.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="d-flex align-items-start">
                                            <div className="me-3">
                                                <FontAwesomeIcon icon={faGlobe} size="2x" className="text-primary" />
                                            </div>
                                            <div>
                                                <h5 className="text-primary">Sitio Web</h5>
                                                <p className="mb-0">
                                                    <a
                                                        href="https://www.integritasservicios.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-decoration-none"
                                                    >
                                                        www.integritasservicios.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mt-5">
                                    <a href="mailto:contacto@integritasservicios.com" className="btn btn-primary btn-lg">
                                        Enviar Mensaje
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

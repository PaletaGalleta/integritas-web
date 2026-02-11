import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="bg-light mt-auto py-4 border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5 className="text-brand">Integritas</h5>
                        <p className="small text-muted">Servicios profesionales en gestión de talento humano</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h6 className="text-primary">Enlaces Rápidos</h6>
                        <ul className="list-unstyled small">
                            <li>
                                <Link to="/" className="text-decoration-none text-muted">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/nosotros" className="text-decoration-none text-muted">
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios" className="text-decoration-none text-muted">
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacto" className="text-decoration-none text-muted">
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link to="/aviso-privacidad" className="text-decoration-none text-muted">
                                    Aviso de Privacidad
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h6 className="text-primary">Contacto</h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2">
                                <a href="tel:5547525404" className="text-decoration-none text-muted">
                                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                                    55 4752 5404
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="https://wa.me/525523272448"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none text-muted"
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
                                    55 2327 2448
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="mailto:contacto@integritasservicios.com" className="text-decoration-none text-muted">
                                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                    contacto@integritasservicios.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="text-center small text-muted">© 2026 Integritas | Servicios Profesionales</div>
            </div>
        </footer>
    );
}

export default Footer;

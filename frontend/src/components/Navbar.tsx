import {Link, useLocation} from "react-router-dom";
import {useState} from "react";

function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path: string) => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src="/logo_full.svg" alt="Integritas" height="40" className="me-2" />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-controls="navbarNav"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive("/")}`} to="/" onClick={() => setIsOpen(false)}>
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive("/nosotros")}`} to="/nosotros" onClick={() => setIsOpen(false)}>
                                Nosotros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isActive("/servicios")}`}
                                to="/servicios"
                                onClick={() => setIsOpen(false)}
                            >
                                Servicios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isActive("/bolsa-trabajo")}`}
                                to="/bolsa-trabajo"
                                onClick={() => setIsOpen(false)}
                            >
                                Bolsa de Trabajo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive("/contacto")}`} to="/contacto" onClick={() => setIsOpen(false)}>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

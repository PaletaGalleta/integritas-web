import {HashRouter as Router, Routes, Route} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Reclutamiento from "./pages/services/Reclutamiento";
import Socioeconomicos from "./pages/services/Socioeconomicos";
import Toxicologicas from "./pages/services/Toxicologicas";
import Psicologicas from "./pages/services/Psicologicas";
import Encuestas from "./pages/services/Encuestas";
import Curriculum from "./pages/services/Curriculum";
import "./styles/custom.css";

function App() {
    return (
        <HelmetProvider>
            <Router>
                <ScrollToTop />
                <div className="d-flex flex-column min-vh-100">
                    <Navbar />
                    <div className="flex-grow-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/nosotros" element={<About />} />
                            <Route path="/servicios" element={<Services />} />
                            <Route path="/contacto" element={<Contact />} />
                            <Route path="/aviso-privacidad" element={<Privacy />} />
                            <Route path="/bolsa-trabajo" element={<Jobs />} />
                            <Route path="/bolsa-trabajo/:id" element={<JobDetails />} />
                            <Route path="/servicios/reclutamiento" element={<Reclutamiento />} />
                            <Route path="/servicios/socioeconomicos" element={<Socioeconomicos />} />
                            <Route path="/servicios/toxicologicas" element={<Toxicologicas />} />
                            <Route path="/servicios/psicologicas" element={<Psicologicas />} />
                            <Route path="/servicios/encuestas" element={<Encuestas />} />
                            <Route path="/servicios/curriculum" element={<Curriculum />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;

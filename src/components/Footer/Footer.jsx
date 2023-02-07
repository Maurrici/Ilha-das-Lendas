import { Row, Col } from "react-bootstrap";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="footer">
            <Row>
                <Col sm={12} md className="d-flex flex-column">
                    <Link to="https://www.instagram.com/ilhadaslendas/"><FaInstagram />@ilhadaslendas</Link>
                    <a href="https://twitter.com/ilhadaslendas"><FaTwitter/> @ilhadaslendas</a>
                    <a href="https://www.youtube.com/@ilhadaslendas"><FaYoutube />Ilha</a>
                </Col>
                <Col sm={12} md className="d-flex flex-column align-items-end">
                    <a href="https://github.com/Maurrici"><FaGithub />Maurrici</a>
                    <a href="https://www.linkedin.com/in/maurrici/"><FaLinkedin/>Maurício dos Santos</a>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;
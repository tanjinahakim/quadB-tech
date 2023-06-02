import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
        <Container>
          <Row>
            <Col md={6} className="mb-3">
              <h5>Contact</h5>
              <p>Email: example@example.com</p>
              <p>Phone: 123-456-7890</p>
            </Col>
            <Col md={6} className="mb-3">
              <h5>Follow Us</h5>
              <div>
                <a href="#" className="text-light me-2">
                  <FaFacebook className="fs-1"></FaFacebook>
                </a>
                <a href="#" className="text-light me-2">
                  <FaTwitter  className="fs-1"></FaTwitter>
                </a>
                <a href="#" className="text-light me-2">
                  <FaInstagram  className="fs-1"></FaInstagram>
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p className="mb-0">&copy; 2023 Holiday Nights. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
};

export default Footer;
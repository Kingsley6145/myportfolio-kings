import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* Added your name with the text-logo class to match the Navbar */}
            <span className="text-logo">KINGSLEY</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* LinkedIn - Searching for Kingsley Ombongi */}
              <a href="https://www.linkedin.com/search/results/all/?keywords=Kingsley%20Ombongi" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              
              {/* Facebook - Searching for Kingsley Ombongi */}
              <a href="https://www.facebook.com/search/top?q=Kingsley%20Ombongi" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Facebook" />
              </a>
              
              {/* Instagram - its_kingslee */}
              <a href="https://www.instagram.com/its_kingslee" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
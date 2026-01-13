import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import polycrestImg from "../assets/img/polycrest.png"; 
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Polycrest Kids",
      description: "Creativity & Game Dev",
      imgUrl: polycrestImg,
      projectUrl: "https://polycrest-kids1.web.app/",
    },
    {
      title: "Mobile Banking App",
      description: "Developed using Flutter & Dart",
      imgUrl: projImg2,
      projectUrl: "#",
    },
    {
      title: "Fitness Tracker",
      description: "UI/UX Design & React Native",
      imgUrl: projImg3,
      projectUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "JavaScript & Advanced CSS",
      imgUrl: projImg1,
      projectUrl: "#",
    },
    {
      title: "Real Estate Portal",
      description: "React Frontend Architecture",
      imgUrl: projImg2,
      projectUrl: "#",
    },
    {
      title: "Food Delivery App",
      description: "Cross-platform Flutter App",
      imgUrl: projImg3,
      projectUrl: "#",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  My portfolio features a diverse range of digital solutions crafted with precision and performance in mind. 
                  I leverage <strong>React</strong> and <strong>JavaScript</strong> to build dynamic, responsive web applications, 
                  and <strong>Flutter</strong> to deliver seamless, high-performance mobile experiences across iOS and Android. 
                  Every project is a blend of clean architecture and user-centric design.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
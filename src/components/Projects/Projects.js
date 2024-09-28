import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import myLogo from "../../Assets/logo.svg";
import Wasender from "../../Assets/Projects/WaSender.png";
import vitHub from "../../Assets/Projects/Vithub.png";
import ToDoEase from "../../Assets/Projects/ToDoEas.png";
import ADBTOOLKIT from "../../Assets/Projects/ADBTOOLKIT.png";
import elmaram from "../../Assets/Projects/ELMARAM.png";
import akgames from "../../Assets/Projects/AKGames.png";
import CodeMinifyer from "../../Assets/Projects/code-Editor.png";
import Rsto from "../../Assets/Projects/Rsto.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Wasender}
              isBlog={false}
              title="WAsender"
              description="app can send whatsApp message with timer,  || Portfolio website"
              demoLink="https://hamdymohamedak.github.io/WasSender/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myLogo}
              isBlog={false}
              title="ak-macros"
              description="Powerful Features of AK-Macros Library
              Discover the capabilities of AK-Macros for efficient Rust development"
              demoLink="https://ak-macros.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vitHub}
              isBlog={false}
              title="vitHub"
              description="vitHub is a website for animals you can at website contact with vit doctors and at blog page you can see The most famous animal diseases and More "
              demoLink="https://hamdymohamedak.github.io/vithub/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDoEase}
              isBlog={false}
              title="TODOEASE"
              description="TODOLIST,Record your notes and ideas at LocalSTORAGE, and you can also arrange them and create different lists for different ideas"
              demoLink="https://to-do-ease.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ADBTOOLKIT}
              isBlog={false}
              title="ADBTOOLKIT"
              description="A tool that uses ADB and scrcpy to connect your phone's IP to Windows without writing code in the command line."
              demoLink="https://github.com/hamdymohamedak/ADBtoolKit/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elmaram}
              isBlog={false}
              title="EL-Maram pharmacy"
              description="An application to order delivery medications from Al Maram Pharmacies in Alexandria"
              demoLink="https://elmaram.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={akgames}
              isBlog={false}
              title="AKGames"
              description="download games for free Now with AKGames its a website have games for download it for free"
              demoLink="https://akgames.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CodeMinifyer}
              isBlog={false}
              title="CodeMinifyer"
              description="CSS code minifyer for more performance to your WebSite"
              demoLink="https://hamdymohamedak.github.io/code_minifyer-/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rsto}
              isBlog={false}
              title="Rsto-Medical"
              description="Rsto is a Medical Company & PORTFOLIO"
              demoLink="https://rsto.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

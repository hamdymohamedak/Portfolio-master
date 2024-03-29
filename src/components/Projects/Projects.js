import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="WAsender"
              description="app can send whatsApp message with timer,  || Portfolio website"
              demoLink="https://hamdymohamedak.github.io/WasSender/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TODOEASE"
              description="TODOLIST,Record your notes and ideas at LocalSTORAGE, and you can also arrange them and create different lists for different ideas"
              demoLink="https://to-do-ease.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CodeMinifyer"
              description="CSS code minifyer for more performance to your WebSite"
              demoLink="https://hamdymohamedak.github.io/code_minifyer-/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ADBTOOLKIT"
              description="A tool that uses ADB and scrcpy to connect your phone's IP to Windows without writing code in the command line."
              demoLink="https://github.com/hamdymohamedak/ADBtoolKit/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="EL-Maram pharmacy"
              description="An application to order delivery medications from Al Maram Pharmacies in Alexandria"
              demoLink="https://elmaram.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="AKGames"
              description="download games for free Now with AKGames its a website have games for download it for free"
              demoLink="https://akgames.vercel.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

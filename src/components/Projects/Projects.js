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
import myLogo from "../../Assets/logo.svg";
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
              imgPath={"https://hamdymohamedak.github.io/vithub/img/home.png"}
              isBlog={false}
              title="vitHub"
              description="vitHub is a website for animals you can at website contact with vit doctors and at blog page you can see The most famous animal diseases and More "
              demoLink="https://hamdymohamedak.github.io/vithub/"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CodeMinifyer"
              description="CSS code minifyer for more performance to your WebSite"
              demoLink="https://hamdymohamedak.github.io/code_minifyer-/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

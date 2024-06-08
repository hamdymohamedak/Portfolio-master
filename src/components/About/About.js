import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {


  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
      </Container>
      <div className="githubTopics">
        <img src="https://camo.githubusercontent.com/de9a1957995418a769f84929bf9545d0d96516740ea933ae9193a367cb8ea0e6/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d68616d64796d6f68616d6564616b267468656d653d6461726b26686964655f626f726465723d7472756526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565" />
        <img src="https://camo.githubusercontent.com/ad09b1bf9b9acbcae04b125617d23441c34d9ff867e282c00492a4dde829e626/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d68616d64796d6f68616d6564616b267468656d653d6461726b26686964655f626f726465723d74727565" />
        <img src="https://camo.githubusercontent.com/ebb0e1001a73d4044252cda202bf50f8da9cf91024af7f7dcd879f339f3ef623/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d68616d64796d6f68616d6564616b267468656d653d6461726b26686964655f626f726465723d7472756526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565266c61796f75743d636f6d70616374" />
      </div>
    </Container>
  );
}

export default About;

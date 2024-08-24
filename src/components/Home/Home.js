import React, { Suspense, lazy } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import { AnimatedText,WaveText } from "../../LaRose";
const Home2 = lazy(() => import("./Home2"));

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name">
                  <WaveText delay={0.35} animationType="zoomIn">
                    Hamdy-Mohamed
                  </WaveText>
                </strong>
                {/* <WaveText  RoseName="main-name">Hamdy-Mohamed</WaveText> */}
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Home2 />
      </Suspense>
    </section>
  );
}

export default Home;

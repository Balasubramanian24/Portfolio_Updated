import React from "react";
import { Button, Container } from "react-bootstrap";
import bg5 from "../assets/images/bg5.webp";

const Home = () => (
  <section
    id="home"
    className="bg-light py-5 section text-center"
    style={{
      backgroundImage: `url(${bg5})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
      display: "flex",         
      flexDirection: "column",     
      justifyContent: "center",   
      alignItems: "center",       
    }}
  >
    <Container>
      <h1 className="display-4 fw-bold text-primary">
        Hi, I'm Balasubramanian!
      </h1>
      <p className="lead text-primary">A passionate Full Stack Developer (MERN Stack)</p>
      <div className="mt-4">
        <Button
          variant="warning"
          size="sm"
          href="/assets/images/Bala_FullStack__Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </Button>
        <Button variant="primary" size="sm" href="#projects" className="ms-2">
          View My Work
        </Button>
        <Button variant="primary" size="sm" href="#contact" className="ms-2">
          Let's Talk
        </Button>
      </div>
    </Container>
  </section>
);

export default Home;

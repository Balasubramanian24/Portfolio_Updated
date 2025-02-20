import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="text-center py-4 bg-dark text-light mt-auto">
    <Container>
      <p>Connect with me:</p>
      <div className="d-flex justify-content-center gap-3">
        <a href="https://github.com/Balasubramanian24" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/balasubramanianpalani/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
        <a href="mailto:spalanibala46@gmail.com"><FaEnvelope size={30} /></a>
      </div>
      <p className="mt-3">&copy; {new Date().getFullYear()} Balasubramanian Portfolio. All rights reserved.</p>
    </Container>
  </footer>
);

export default Footer;

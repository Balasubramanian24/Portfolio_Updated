import React, { useState, useEffect } from "react";
import { Navbar as BSNavbar, Nav, Container, Button } from "react-bootstrap";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [theme, setTheme] = useState("dark");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPos = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveLink(section);
          }
        }
      });

      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (section) => {
    setActiveLink(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-light");
  };

  return (
    <>
      <BSNavbar
        bg={theme}
        variant={theme}
        expand="lg"
        fixed="top"
        className={`shadow-sm py-3 transition-navbar ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}
      >
        <Container>
          <BSNavbar.Brand href="#home">
            Port<span className="text-primary">folio</span>
          </BSNavbar.Brand>
          <Button variant="outline-primary" className="me-2" onClick={toggleTheme}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </Button>
          <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BSNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Projects", id: "projects" },
                { name: "Skills", id: "skills" },
                { name: "Contact", id: "contact" },
              ].map((link) => (
                <Nav.Link
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`nav-item-custom ${activeLink === link.id ? "active-link" : ""}`}
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>

      <style>{`
        .nav-item-custom {
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-item-custom::after {
          content: "";
          width: 0%;
          height: 2px;
          background: #0d6efd;
          position: absolute;
          bottom: 0;
          left: 0;
          transition: width 0.3s ease;
        }
        .nav-item-custom:hover::after,
        .active-link::after {
          width: 100%;
        }
        .transition-navbar {
          transition: transform 0.3s ease-in-out;
        }
        .navbar-hidden {
          transform: translateY(-100%);
        }
        .navbar-visible {
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default Navbar;
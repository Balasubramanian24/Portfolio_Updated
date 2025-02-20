import React from "react";
import bg1 from "../assets/images/bg1.jpg";

const About = () => {
  return (
    <section id="about" className="py-5 section" data-aos="fade-left"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',         // Ensures the image covers the entire area
        backgroundPosition: 'center',    // Centers the image
        backgroundRepeat: 'no-repeat',   // Prevents image repetition
        width: '100vw',                  // Full viewport width
        height: '100vh',
        display: "flex",         
        flexDirection: "column",     
        justifyContent: "center",   
        alignItems: "center",
    }}
    >
    <div className="container">
      <div
        className="row align-items-center about-me-section p-4 rounded shadow"
        style={{
        marginTop: "-25px", 
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Adds a dark background with opacity
        backdropFilter: "blur(5px)", // Adds a blur effect for a glassy look
        }}
      >
        <div className="col-12">
          <h2 className="text-warning text-center mb-4">About Me</h2>
          <p style={{ color: "#fff" }}>
            I am a <strong>Full-Stack Web Developer</strong> with a passion for building dynamic and user-friendly applications. I developed an eye for
            detail and structured design. During my second year in that role, I completed a <strong>Front-End Development course</strong>, which sparked
            my transition into web development.
          </p>
          <p style={{ color: "#fff" }}>
            I have since expanded my expertise by completing a{" "} <strong>Full-Stack Web Development course</strong>, honing my skills in
            HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Express, and PostgreSQL.
          </p>
          <p style={{ color: "#fff" }}>
            <strong>Currently</strong>, I specialize in <strong>MERN stack</strong>{" "} development, integrating MongoDB, Express, React, and Node.js to create
            scalable and efficient web applications. My recent work includes developing a <strong>Project Management Task application</strong>{" "}
            featuring Redux, Tailwind, Headless UI, user authentication, real-time collaboration (Socket.IO), and advanced task management.
          </p>
          <p style={{ color: "#fff" }}>
            I am passionate about solving real-world problems through technology, focusing on scalability, user experience, and performance optimization.
            My goal is to build impactful applications that enhance productivity and user engagement.
          </p>
        </div>
      </div>
    </div>

    </section>
  );
};

export default About;
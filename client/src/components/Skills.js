import React from "react";
import 'devicon/devicon.min.css';
import bg2 from "../assets/images/bg2.jpg";

const Skills = () => {
  return (
    <section id="skills" className="py-5 section" data-aos="fade-up"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',         
        backgroundPosition: 'center',    
        backgroundRepeat: 'no-repeat',   
        width: '100vw',                  
        height: '100vh', 
        display: "flex",         
        flexDirection: "column",     
        justifyContent: "center",   
        alignItems: "center",
    }}
    >
      <div className="container">
        <h2 className="text-center mb-5 text-danger">Skills</h2>
        <div className="row text-center">
          {[
            { icon: "fab fa-html5", color: "text-danger", name: "HTML5" },
            { icon: "fab fa-css3", color: "text-primary", name: "CSS3" },
            { icon: "fab fa-bootstrap", color: "text-primary", name: "Bootstrap" },
            { icon: "fab fa-js", color: "text-warning", name: "JavaScript" },
            { icon: "fab fa-react", color: "text-info", name: "ReactJS" },
            { icon: "fas fa-server", color: "text-success", name: "Express" },
            { icon: "fab fa-node", color: "text-success", name: "Node.js" },
            { icon: "devicon-mongodb-plain colored", color: "", name: "MongoDB" },
            { icon: "fas fa-database", color: "text-primary", name: "PostgreSQL",  },
          ].map((skill, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="skill-card p-4 rounded shadow-sm bg-white">
                <i className={`${skill.icon} fa-3x ${skill.color}`} />
                <p className="mt-3 fw-bold">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
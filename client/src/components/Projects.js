import React from "react";
import BestBg from "../assets/images/BestBg.webp"
import ActualWeather from "../assets/images/ActualWeather.png"
import NotesBuddy from "../assets/images/NotesBuddy.png"
import shopeasy from "../assets/images/shopeasy.webp"


const Projects = () => {
  return (
    <section id="projects" className="bg-light py-5 section" data-aos="fade-right"
      style={{
                 backgroundImage: `url(${BestBg})`,
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
        <h2 className="text-center mb-4 text-dark">My Projects</h2>
        <div className="row g-4">
          {/* Notes Buddy */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src={NotesBuddy}
                className="card-img-top"
                alt="Notes Buddy"
                style={{ width: "15%" }}
              />
              <div className="card-body">
                <h5 className="card-title">Notes Buddy</h5>
                <p className="card-text">
                  A simple, user-friendly application to manage daily tasks efficiently. Demonstrates basic CRUD functionality and responsive design. Added user-friendly features like tagging and filtering notes.
                </p>
                <a
                  href="https://notesbuddyin.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary p-2 m-2"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Balasubramanian24/todo-list-Javascript"
                  className="btn btn-primary p-2 m-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* Actual Weather */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src={ActualWeather}
                className="card-img-top"
                alt="Actual Weather"
                style={{ width: "15%" }}
              />
              <div className="card-body">
                <h5 className="card-title">Actual Weather</h5>
                <p className="card-text">
                  A weather application allowing users to search for current weather conditions worldwide. Built using HTML, CSS, and JavaScript with OpenWeather API integration. 
                </p>
                <a
                  href="https://actualweatherin.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary m-2 p-2"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Balasubramanian24/WeatherApplication"
                  className="btn btn-primary p-2 m-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* Shopeasy */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src={shopeasy}
                className="card-img-top"
                alt="Shopeasy"
                style={{ width: "15%" }}
              />
              <div className="card-body">
                <h5 className="card-title">Shopeasy</h5>
                <p className="card-text">
                  A fully responsive e-commerce website built with ReactJS and Bootstrap. Uses DummyJSON API for product data, with features like categories, product details, and shopping cart.
                </p>
                <a
                  href="https://shopeasyin.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary p-2 m-2"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Balasubramanian24/ShoppingCart_ReactJs"
                  className="btn btn-primary p-2 m-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

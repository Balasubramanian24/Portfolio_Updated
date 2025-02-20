import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formMessage, setFormMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  //contact form submission handling

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMessage("");
    setError(false);

    const API_URL = import.meta.env.VITE_API_URL || ""; //vercel deployment

    if (formData.name && formData.email && formData.message) {
      try {
        setIsLoading(true);
        const res = await axios.post(`{API_URL}/api/contact`, formData);
        setFormMessage(res.data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } catch (err) {
        console.error("Error:", err);
        setError(true);
        setFormMessage(
          err.response?.data?.error || "Failed to send message. Please try again."
        );
      } finally {
        setIsLoading(false);
      }
    } else {
      setError(true);
      setFormMessage("Please fill in all fields.");
    }
  };

  return (
    <section
      id="contact"
      className="section bg-dark text-light py-5"
      data-aos="zoom-in"
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Me</h2>
          <p className="text-secondary">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form
              className="bg-light text-dark p-4 rounded shadow"
              id="contactform"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-4 rounded-pill"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
            {formMessage && (
              <div
                id="formMessage"
                className={`mt-3 text-center ${
                  error ? "text-danger" : "text-success"
                }`}
              >
                {formMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

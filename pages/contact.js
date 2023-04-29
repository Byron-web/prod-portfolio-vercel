import React from "react";
import Navbar from "./navbar";

const contact = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>
          Please feel free to contact me using the information below. I look
          forward to hearing from you!
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <a href="mailto:byron@gmail.com">byron@gmail.com</a>
          </div>
          <div className="contact-item">
            <a href="tel:+1234567890">(123) 456-7890</a>
          </div>
          <div className="contact-item">
            <span>123 Main St, Johannesburg, South Africa</span>
          </div>
        </div>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <style jsx>{`
        .contact-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 5rem;
          background-color: #8b8b8b;
          height: 78.2vh;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 3rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          margin: 1rem 0;
        }

        .contact-item i {
          margin-right: 1rem;
        }

        .contact-item a {
          color: #000;

          text-decoration: none;
        }

        .social-links {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }

        .social-links a {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #000;
          color: #fff;
          height: 50px;
          width: 50px;
          border-radius: 50%;
          margin: 0 1rem;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .social-links a:hover {
          background-color: #1e1e1e;
        }
      `}</style>
    </div>
  );
};

export default contact;

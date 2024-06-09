import React from "react";
import "../styles/contactCard.css";

const ContactCard = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="status">
          <span className="status-indicator"></span>
          Available for new opportunities
        </div>
        <h2>
          Contact me<span className="highlight"> .</span>
        </h2>
        <p>
          From design to development, I can help you with your web development
          projects.
        </p>
        <div className="contact-details">
          <div className="contact-detail">
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            (+41) (0)76 585 68 22
          </div>
          <div className="contact-detail">
            <span role="img" aria-label="email">
              📧
            </span>{" "}
            kervella.ronan@hotmail.com
          </div>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Fullname" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone" />
        <input type="text" placeholder="Subject of your message" />
        <textarea placeholder="Message"></textarea>
        <button className="contact-button">SEND</button>
      </form>
    </div>
  );
};

export default ContactCard;

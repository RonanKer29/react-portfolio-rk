import React from "react";
import "../styles/contactCard.css";
import { FaPaperPlane } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div className="contact-card">
      <div className="contact-message">
        <h1>
          Say, <br />
          Hello{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
      </div>
      <div className="contact-input">
        <textarea placeholder="Click to message" rows="3"></textarea>
        <button type="button">
          <FaPaperPlane size={24} />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;

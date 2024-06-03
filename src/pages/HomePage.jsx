import React from "react";
import AnimatedText from "../components/AnimatedText";
import "../styles/home-page.css";
import "../styles/animated-text.css";
import "../styles/social-links.css";
import photo from "../assets/photo-japon.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const HomePage = () => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="home-page">
      <div className="image-and-text">
        <div className="text-container">
          <div className="presentation-name">
            <p>Hi there, I'm -</p>
            <h1>Ronan Kervella</h1>
          </div>

          <div className="animated-text-container">
            I am a passionate{" "}
            <span className="align-inline">
              <AnimatedText text=" Fullstack Developer" />
            </span>
            , currently enhancing my skills in building interactive and
            responsive web applications with Node.js and React. With a solid
            background in HTML, CSS, and JavaScript, I am focused on improving
            user experiences and web application performance. From design to
            development, I can help you with your web development projects.
          </div>
          <div className="social-links">
            <div
              className="social-button"
              onClick={() =>
                handleLinkClick("https://www.linkedin.com/in/ronankerv/")
              }
            >
              <FaLinkedin size={24} className="social-icon" />
              Linkedin
            </div>
            <div
              className="social-button"
              onClick={() => handleLinkClick("https://github.com/RonanKer29")}
            >
              <FaGithub size={24} className="social-icon" />
              Github
            </div>
            <div
              className="social-button"
              onClick={() =>
                handleLinkClick("mailto:kervella.ronan@hotmail.com")
              }
            >
              <IoIosMail size={24} className="social-icon" />
              kervella.ronan@hotmail.com
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={photo} alt="Ronan Kervella" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

//  <div className="image-and-text">
//    <img src={photo} alt="Office" className="office-image" />
//  </div>;

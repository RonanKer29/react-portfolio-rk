import React, { useEffect, useState } from "react";
import AnimatedText from "../components/AnimatedText";
import "../styles/home-page.css";
import "../styles/animated-text.css";
import "../styles/social-links.css";
import "../styles/skills.css";
import photo from "../assets/photo-japon.jpg";
import { FaLinkedin, FaGithub, FaFigma, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRubyonrails, SiPostgresql, SiHeroku } from "react-icons/si";
import CardContainer from "../components/CardContainer";
import ContactCard from "../components/ContactCard";

const HomePage = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [animatedTextVisible, setAnimatedTextVisible] = useState(false);

  useEffect(() => {
    const textContainer = document.querySelector(".text-container");
    const imageContainer = document.querySelector(".image-container");

    setTimeout(() => {
      textContainer.classList.add("appear");
      setTextVisible(true);
    }, 100);

    setTimeout(() => {
      imageContainer.classList.add("appear");
    }, 250);
  }, []);

  useEffect(() => {
    if (textVisible) {
      setTimeout(() => {
        setAnimatedTextVisible(true);
      }, 200); // Déclencher l'animation du texte après 0,5 seconde
    }
  }, [textVisible]);

  const handleLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const projects = [
    {
      className: "project-card",
      backgroundImage: "url_of_project_image_1",
      title: "Project 1",
      description: "Description of project 1",
      content: <a href="project_link_1">Learn more</a>,
    },
    {
      className: "project-card",
      backgroundImage: "url_of_project_image_2",
      title: "Project 2",
      description: "Description of project 2",
      content: <a href="project_link_2">Learn more</a>,
    },
    // Add more projects as needed
  ];

  return (
    <div className="home-page" id="home">
      <div className="image-and-text" id="about">
        <div className="text-container">
          <div className="presentation-name">
            <p>Hi there, I'm -</p>
            <h1>Ronan Kervella</h1>
          </div>

          <div className="animated-text-container">
            I am a passionate{" "}
            <span className="align-inline">
              {animatedTextVisible && (
                <AnimatedText text=" Fullstack Developer" />
              )}
            </span>
            , currently enhancing my skills in building interactive and
            responsive web applications with Node.js and React. With a solid
            background in Rails, JavaScript, React , HTML and CSS I am focused
            on improving user experiences and web application performance. From
            design to development, I can help you with your web development
            projects.
          </div>
          <div className="social-links">
            <div
              className="social-button"
              onClick={() =>
                handleLinkClick("https://www.linkedin.com/in/ronankerv/")
              }
            >
              <FaLinkedin size={24} className="social-icon" />
              <span className="social-text">Linkedin</span>
            </div>
            <div
              className="social-button"
              onClick={() => handleLinkClick("https://github.com/RonanKer29")}
            >
              <FaGithub size={24} className="social-icon" />
              <span className="social-text">Github</span>
            </div>
            <div
              className="social-button"
              onClick={() =>
                handleLinkClick("mailto:kervella.ronan@hotmail.com")
              }
            >
              <IoIosMail size={24} className="social-icon" />
              <span className="social-text">kervella.ronan@hotmail.com</span>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={photo} alt="Ronan Kervella" className="profile-image" />
        </div>
      </div>
      <div className="skills-section" id="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-column">
            <h3>Design</h3>
            <ul>
              <li>
                <FaFigma />
                Figma
              </li>
              <li>
                <RiTailwindCssFill />
                Tailwind
              </li>
            </ul>
          </div>
          <div className="skills-column">
            <h3>Front-end</h3>
            <ul>
              <li>
                <IoLogoJavascript />
                JavaScript
              </li>
              <li>
                <FaReact />
                React
              </li>
            </ul>
          </div>
          <div className="skills-column">
            <h3>Back-end</h3>
            <ul>
              <li>
                <SiRubyonrails />
                Rails
              </li>
              <li>
                <SiPostgresql />
                PostgreSQL
              </li>
            </ul>
          </div>
          <div className="skills-column">
            <h3>Other</h3>
            <ul>
              <li>
                <FaGithub />
                Git & GitHub
              </li>
              <li>
                <SiHeroku />
                Heroku
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="projects-section" id="projects">
        <h2>Projects</h2>
        <CardContainer cards={projects} />
      </div>
      <div className="contact-page" id="contact">
        <ContactCard />
      </div>
    </div>
  );
};

export default HomePage;

//  <div className="image-and-text">
//    <img src={photo} alt="Office" className="office-image" />
//  </div>;

import React from "react";
import AnimatedText from "../components/AnimatedText";
import "../styles/home-page.css";
import "../styles/animated-text.css";
import photo from "../assets/photo-ronan.jpg";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="image-and-text">
        <img src={photo} alt="Office" className="office-image" />
      </div>
      <div className="animated-text-container">
        <AnimatedText text=" Fullstack Developer." />
      </div>
      <div className="presentation">
        From design to development, I can help you with your web development
        projects.
      </div>
    </div>
  );
};

export default HomePage;

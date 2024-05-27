import React from "react";
import AnimatedText from "../components/AnimatedText";
import "../styles/home-page.css";
import "../styles/animated-text.css";
import photo from "../assets/photo-ronan.jpg";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="animated-container">
        <div className="image-container">
          <img src={photo} alt="Ronan Kervella" className="animated-image" />
        </div>
        <div className="animated-text-container">
          <AnimatedText text=" Fullstack Developer." />
        </div>
        <div className="presentation">
          From design to development, I can help you with your web development
          projects.
        </div>
      </div>
    </div>
  );
};

export default HomePage;

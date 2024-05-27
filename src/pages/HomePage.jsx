import React from "react";
import SimpleAnimatedText from "../components/AnimatedText";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="animated-text-container">
        <SimpleAnimatedText text="  Fullstack Developer." />
      </div>
      <div className="presentation">
        From design to development, I can help you with your web development
        projects.
      </div>
    </div>
  );
};

export default HomePage;

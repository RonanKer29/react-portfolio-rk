import React from "react";
import Card from "./Card";
import "../styles/about.css";

const CardContainer = ({ cards }) => {
  return (
    <div className="about-page">
      {cards.map((card, index) => (
        <Card
          key={index}
          className={card.className}
          backgroundImage={card.backgroundImage}
        >
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          {card.content}
        </Card>
      ))}
    </div>
  );
};

export default CardContainer;

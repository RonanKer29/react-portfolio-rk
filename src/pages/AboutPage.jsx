import React from "react";
import CardContainer from "../components/CardContainer";
import image1 from "../assets/bgMain.png";
import image2 from "../assets/bgSpace.png";

const cards = [
  {
    className: "primary",
    backgroundImage: image1,
    title: "Card Title",
    description: "This is a customizable card.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores ad labore est assumenda commodi distinctio culpa quae consequatur iste.",
  },
  {
    className: "dark",
    backgroundImage: image2,
    title: "Another Card",
    description: "Another example of a card with custom content.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum autem reprehenderit quisquam aliquam delectus repellendus. Eveniet sit facere pariatur consequatur error, expedita laboriosam consectetur minima in eaque possimus corporis, molestiae earum labore doloribus voluptate officiis aliquam porro impedit, ducimus sapiente quia. Iusto exercitationem, iste culpa sit consectetur accusamus distinctio.",
  },
  {
    className: "light",
    backgroundImage: image1,
    title: "Default Card",
    description: "This card uses the default styles.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, obcaecati. Quisquam quae tenetur animi, error maiores sapiente odit labore fuga fugit consequatur, molestiae optio ut natus voluptates facilis sit eligendi officiis laboriosam architecto cupiditate officia modi dolorem excepturi! Officia ipsam magnam dolores consectetur earum aperiam illo, facere provident quia asperiores?",
  },
];

const AboutPage = () => {
  return <CardContainer cards={cards} />;
};

export default AboutPage;

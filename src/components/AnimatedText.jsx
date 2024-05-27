import React, { useState, useEffect } from "react";
import "../styles/animated-text.css";

const AnimatedText = ({ text, delay = 80 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (typeof text !== "string") {
      return;
    }

    let index = 0;
    setDisplayedText(""); // Reset displayedText when text changes

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => {
          const updatedText = prev + (text[index] || "");

          return updatedText;
        });
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [text, delay]);

  return <span className="animated-text">{displayedText}</span>;
};

export default AnimatedText;

// import React, { useState, useEffect } from "react";
// import "../styles/animated-text.css";

// const AnimatedText = ({ text, delay = 100 }) => {
//   const [displayedText, setDisplayedText] = useState("");

//   useEffect(() => {
//     if (typeof text !== "string") {
//       console.error("The 'text' prop should be a string.");
//       return;
//     }

//     let index = 0;
//     setDisplayedText(""); // Reset displayedText when text changes

//     const intervalId = setInterval(() => {
//       if (index < text.length) {
//         setDisplayedText((prev) => {
//           console.log(`Updating displayedText: ${prev + text[index]}`); // Log each update
//           return prev + text[index];
//         });
//         index++;
//       } else {
//         clearInterval(intervalId);
//       }
//     }, delay);

//     return () => clearInterval(intervalId); // Cleanup interval on component unmount
//   }, [text, delay]);

//   return <span className="animated-text">{displayedText}</span>;
// };

// export default AnimatedText;

// import React, { useState, useEffect } from "react";
// import "../styles/animated-text.css";

// const AnimatedText = ({ text, delay = 100 }) => {
//   const [displayedText, setDisplayedText] = useState("");

//   useEffect(() => {
//     let index = 0;
//     const intervalId = setInterval(() => {
//       if (index < text.length) {
//         setDisplayedText((prev) => prev + text[index]);
//         index++;
//       } else {
//         clearInterval(intervalId);
//       }
//     }, delay);

//     return () => clearInterval(intervalId); // Cleanup interval on component unmount
//   }, [text, delay]);

//   return <span className="animated-text">{displayedText}</span>;
// };

// export default AnimatedText;

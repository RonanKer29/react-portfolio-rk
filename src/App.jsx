import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./styles/animated-text.css";
import "./styles/card.css";
import "./styles/navbar.css";

function App() {
  return (
    <Router>
      <div className="global-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <div className="global-container">
//       <Navbar />;
//       <div className="content">
//         <Card className="primary">
//           <h2>Card Title</h2>
//           <p>This is a customizable card.</p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Necessitatibus asperiores ad labore est assumenda commodi distinctio
//           culpa quae consequatur iste.
//         </Card>
//         <Card className="dark">
//           <h2>Another Card</h2>
//           <p>Another example of a card with custom content.</p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum
//           autem reprehenderit quisquam aliquam delectus repellendus. Eveniet sit
//           facere pariatur consequatur error, expedita laboriosam consectetur
//           minima in eaque possimus corporis, molestiae earum labore doloribus
//           voluptate officiis aliquam porro impedit, ducimus sapiente quia. Iusto
//           exercitationem, iste culpa sit consectetur accusamus distinctio.
//         </Card>
//         <Card className="light">
//           <h2>Default Card</h2>
//           <p>This card uses the default styles.</p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
//           obcaecati. Quisquam quae tenetur animi, error maiores sapiente odit
//           labore fuga fugit consequatur, molestiae optio ut natus voluptates
//           facilis sit eligendi officiis laboriosam architecto cupiditate officia
//           modi dolorem excepturi! Officia ipsam magnam dolores consectetur earum
//           aperiam illo, facere provident quia asperiores?
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default App;

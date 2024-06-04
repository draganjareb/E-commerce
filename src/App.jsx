import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import "./App.css";
import Homepage from "./features/HomePage/Homepage";
import About from "./features/About/About";
import Contact from "./features/Contact/Contact";
import Offer from "./features/Offer/Offer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offer" element={<Offer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import "./App.css";
import Homepage from "./features/HomePage/Homepage";
import About from "./features/About/About";
import Contact from "./features/Contact/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

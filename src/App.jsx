import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import "./App.css";
import Homepage from "./features/HomePage/Homepage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

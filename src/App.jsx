import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

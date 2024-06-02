import "../About/about.style.css";
import AboutPageOne from "./components/AboutPageOne";
import AboutPageTwo from "./components/AboutPageTwo";
import AboutPageThree from "./components/AboutPageThree";

const About = () => {
  return (
    <div className="pageAboutWrapper">
      <div className="pageAboutHolder">
        <AboutPageOne />
        <AboutPageTwo />
        <AboutPageThree />
      </div>
    </div>
  );
};

export default About;

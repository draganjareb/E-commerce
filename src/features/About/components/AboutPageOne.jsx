import "../styles/aboutPageOne.style.css";
import pictures1 from "../../../assets/workCollective.jpg";

const AboutPageOne = () => {
  return (
    <div className="aboutPageOneWrapper">
      <div className="aboutPageOneHolder">
        <div className="aboutPageOneLeftSite">
          <h1>About Us</h1>
          <p>
            HubSpor company and culture a lot like out product. They are
            crafted, not combbled, for delightful experience.
          </p>
        </div>
        <div className="divPictures1">
          <img src={pictures1} alt="work collective" className="pictures1" />
        </div>
      </div>
    </div>
  );
};

export default AboutPageOne;

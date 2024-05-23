import Button from "../../../components/button/Button";
import headphone from "../../../assets/headphones.png";
import engadget from "../../../assets/engadget.png";
import tcLogo from "../../../assets/tcLogo.png";
import wired from "../../../assets/wired.png";
import logoX from "../../../assets/logoX.png";
import consumed from "../../../assets/consumer.png";
import "../styles/pageOne.style.css";

const PageOne = () => {
  return (
    <div className="pageOneWrapper">
      <div className="pageOneHolder">
        <div className="pageOneText">
          <div className="pageOneLeftSite">
            <h1>FRESH BEATIFUL</h1>
            <h1>INOVATIVE</h1>
            <hr></hr>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button label="ORDER NOW" />
          </div>
          <img src={headphone} alt="headphone" className="headphone" />
        </div>
      </div>
      <div className="pageOneFooter">
        <img src={engadget} alt="engadget" />
        <img src={tcLogo} alt="tcLogo" />
        <img src={logoX} alt="logox" />
        <img src={consumed} alt="consumed" />
        <img src={wired} alt="wired" className="wired" />
      </div>
    </div>
  );
};

export default PageOne;

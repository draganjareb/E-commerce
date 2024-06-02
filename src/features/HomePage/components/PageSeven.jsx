import Button from "../../../components/button/Button";
import "../styles/pageSeven.style.css";
import headphone from "../../../assets/headphones.png";

const PageSeven = () => {
  return (
    <div className="pageSevenWrapper">
      <div className="pageSevenHolder">
        <div className="pageSevenText">
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
      <div className="pageSevenFooterText">
        <h3>
          Copyright symbol © or the word “copyright" notice depends on the type
          of work or content
        </h3>
      </div>
    </div>
  );
};

export default PageSeven;

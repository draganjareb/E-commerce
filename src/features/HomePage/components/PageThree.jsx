import "../styles/pageThree.style.css";
import Button from "../../../components/button/Button";
import headphone2 from "../../../assets/headphone2.png";

const PageThree = () => {
  return (
    <div className="pageThreeWrapper ">
      <div className="pageThreeHolder">
        <div className="pageThreeText">
          <div className="text">
            <h1>SHOWCASE APPS, INNOVATIVE TECH OR BISNINESSES</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <Button label="ORDER NOW" className="pageThreeButton" />
          </div>
        </div>
        <div className="pageThreeRightSite">
          <img src={headphone2} alt="headphone" className="pageThreeImg" />
        </div>
      </div>
    </div>
  );
};

export default PageThree;

import Button from "../../../components/button/Button";
import "./../styles/pageFive.style.css";
import check from "../../../assets/check.png";

const PageFive = () => {
  return (
    <div className="pageFiveWrapper">
      <div className="pageFiveHolder">
        <div className="pageFiveTop">
          <h2>Product Information</h2>
          <div className="inputAndButton">
            <input placeholder="Enter Yours Email Here" />
            <Button label="Get Product Information" />
          </div>
        </div>
        <div className="pageFiveBottom">
          <div className="pageFiveBottomText">
            <h2>Feature your best sellers.</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable.
            </p>
          </div>
          <div className="pageFiveUl">
            <ul>
              <li>
                <img src={check} alt="check" />
                It uses a dictionary of over Latin Words as necessary
              </li>
              <li>
                <img src={check} alt="check" />
                Combined with handful od model sentence structure iorem
              </li>
              <li>
                <img src={check} alt="check" />
                Lorem Ipsum which looks reasonable a handful
              </li>
              <li>
                <img src={check} alt="check" />
                It uses a dictionary of over Latin words as necessery
              </li>
              <li>
                <img src={check} alt="check" />
                Combined with handful od model sentence structure iorem
              </li>
              <li>
                <img src={check} alt="check" />
                Lorem Ipsum which looks reasonable a handful
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFive;

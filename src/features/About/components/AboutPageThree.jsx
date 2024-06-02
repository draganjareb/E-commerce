import "../styles/aboutPageThree.style.css";
import pictures3 from "../../../assets/workCollective3.jpg";

const AboutPageThree = () => {
  return (
    <div className="aboutPageThreeWrapper">
      <div className="aboutPageThreeHolder">
        <div className="aboutPageThreeLeftSite">
          <h2>Our Story</h2>
          <p>
            In 2004, fellow MIT graduate students Brian Halligan and Dharmesh
            Shah noticed a major shift in the way people shop and purchase
            product.Buyers did not want to be interrupted by ads, they wanted
            helpful information. in 2006, they founded HubSpot to help companies
            use that shift to grow better with inbound marketing.
          </p>
        </div>
        <div className="divPictures1">
          <img src={pictures3} alt="work collective" className="pictures1" />
        </div>
      </div>
    </div>
  );
};

export default AboutPageThree;

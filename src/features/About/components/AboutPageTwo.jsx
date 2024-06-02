import "../styles/aboutPageTwo.style.css";
import pictures2 from "../../../assets/workCollective2.jpg";

const AboutPageTwo = () => {
  return (
    <div className="aboutPageTwoWrapper">
      <div className="aboutPageTwoHolder">
        <div className="divPictures2">
          <img src={pictures2} alt="workCollective" className="pictures2" />
        </div>
        <div className="aboutPageTwoRightSite">
          <h2>Our Mission: Helping Millions of Organizations Grow Better</h2>
          <p>
            We belive not just in growing bigger, but in growing better. And
            growing better means aligning the success of your own business with
            the success of your customers. Win-win!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPageTwo;

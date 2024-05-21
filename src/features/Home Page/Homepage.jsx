import Button from "../../components/button/Button";
import headphone from "../../assets/headphones.png";
import "./homepage.style.css";

const Homepage = () => {
  return (
    <div className="pageOneWrapper">
      <div className="pageOneHolder">
        <div className="pageOneText">
          <h1>Fresh Beautiful.</h1>
          <h1>Innovative.</h1>
          <hr></hr>
          <h3>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </h3>
          <Button label="ORDER HOW" className="button" />
        </div>
        <div className="pageOneImages">
          <img src={headphone} alt="headphones" className="headphone" />
        </div>
      </div>
      <div className="pageOneBottom"></div>
    </div>
  );
};

export default Homepage;

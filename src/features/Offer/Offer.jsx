import "./offer.style.css";
import { items } from "../../data/itemsdata";
import heart from "../../assets/heartIcon.png";
import stars from "../../assets/stars.png";
import Button from "../../components/button/Button";

const Offer = () => {
  return (
    <div className="offerWrapper">
      <div className="offerHolder">
        <div className="offerCard">
          {items.map((item) => (
            <div key={item.id} className="offer">
              <div className="offerImageTag">
                <img src={item.image} className="offerPictures" />
                <div className="heartBackground">
                  <img
                    src={heart}
                    alt={item.name}
                    className="offerHeartPictures"
                  />
                </div>
              </div>
              <div className="offerDataTag">
                <div>
                  <div className="price">
                    <h2>{item.name}</h2>
                    <div className="priceDiv">
                      <span>$</span>
                      <h2>{item.price}</h2>
                    </div>
                  </div>
                  <p>{item.description}</p>
                  <div className="starsAndNumber">
                    <div className="stars">
                      <img src={stars} alt="stars" className="starsPictures" />
                      <img src={stars} alt="stars" className="starsPictures" />
                      <img src={stars} alt="stars" className="starsPictures" />
                      <img src={stars} alt="stars" className="starsPictures" />
                      <img src={stars} alt="stars" className="starsPictures" />
                    </div>
                    <h4>{item.number}</h4>
                  </div>
                  <Button label="Add to Cart" className="offerButton" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;

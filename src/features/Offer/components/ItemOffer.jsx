import heart from "../../../assets/heart.webp";
import stars from "../../../assets/stars.png";
import Button from "../../../components/button/Button";
import { useOrderCartStore } from "../../../store/OrderStore/order.store";

//ovo je kao Item.jsx

const ItemOffer = ({ item }) => {
  const { addItemToOrderCart } = useOrderCartStore();

  return (
    <div>
      <div className="offerHolder">
        <div key={item.id} className="offer">
          <div className="offerImageTag">
            <img src={item.image} className="offerPictures" />
            <div className="heartBackground">
              <img src={heart} alt={item.name} className="offerHeartPictures" />
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
              <Button
                label="Add to Cart"
                className="offerButton"
                onClickHandler={addItemToOrderCart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemOffer;

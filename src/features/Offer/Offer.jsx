import "./offer.style.css";
import { items } from "../../data/itemsdata";
import ItemOffer from "./components/ItemOffer";

//to je kao Items.jsx
const Offer = () => {
  return (
    <div className="offerWrapper">
      <div className="offerHolder">
        <div className="offerCard">
          {items.map((item) => (
            <ItemOffer key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;

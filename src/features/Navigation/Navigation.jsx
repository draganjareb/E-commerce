import { Link } from "react-router-dom";
import "./Navigation.style.css";
import ecommerce from "../../assets/ecommerce.png";
import shopCart from "../../assets/shopping-cart.png";

const Navigation = () => {
  return (
    <div className="navigationHolder">
      <img src={ecommerce} alt="ecommerce" className="e_commerce" />
      <div className="navigation_link">
        <Link to={{ pathname: "/" }}>Home Page</Link>
        <Link to={{ pathname: "/offer" }}>Offer</Link>
        <Link to={{ pathname: "/order" }}>How to order?</Link>
        <Link to={{ pathname: "/about" }}>About</Link>
        <Link to={{ pathname: "/contact" }}>Contact</Link>
      </div>
      <img src={shopCart} alt="shopcart" className="shoppingCart" />
    </div>
  );
};

export default Navigation;

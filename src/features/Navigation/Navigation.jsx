import { Link } from "react-router-dom";
import Cart from "../../assets/shopping-cart.png";
import "./Navigation.style.css";
import E_commerce from "../../assets/E-Commerce-Logo.png";

const Navigation = () => {
  return (
    <div className="navigationHolder">
      <img src={E_commerce} alt="E_commenrce" className="e_commerce" />
      <div className="navigation_link">
        <Link to={{ pathname: "/" }}>Home Page</Link>
        <Link to={{ pathname: "/offer" }}>Offer</Link>
        <Link to={{ pathname: "/order" }}>How to order?</Link>
        <Link to={{ pathname: "/about" }}>About</Link>
        <Link to={{ pathname: "/contact" }}>Contact</Link>
      </div>
      <img src={Cart} alt="shopping_cart" className="shopping_cart" />
    </div>
  );
};

export default Navigation;

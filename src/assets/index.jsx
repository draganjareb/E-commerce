import headphone from "./headphones.png";
import shopping from "./shopping-cart.png";
import ecommerce from "./ecommerce.png";
import consumer from "./consumer.png";
import engadget from "./engadget.png";
import logoX from "./logoX.png";
import tcLogo from "./tcLogo.png";
import wired from "./wired.png";

const ShopingCart = () => {
  return <img src={shopping} alt="shopcart" className="shoppingCart" />;
};

const HeadPhones = () => {
  return <img src={headphone} alt="headphone" className="headphone" />;
};

const ECommerce = () => {
  return <img src={ecommerce} alt="e-commerce" className="e_commerce" />;
};

const Consumer = () => {
  return <img src={consumer} alt="consumer" />;
};

const Engadget = () => {
  return <img src={engadget} alt="engadget" />;
};

const LogoX = () => {
  return <img src={logoX} alt="logoX" />;
};

const TcLogo = () => {
  return <img src={tcLogo} alt="tcLogo" />;
};

const Wired = () => {
  return <img src={wired} alt="wired" />;
};

export default {
  ShopingCart,
  HeadPhones,
  ECommerce,
  Consumer,
  Engadget,
  LogoX,
  TcLogo,
  Wired,
};

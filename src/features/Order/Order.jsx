import "./order.style.css";
import recycleBin from "../../assets/recycleBin.png";
import headphone from "../../assets/headphone1.png";
import Button from "../../components/button/Button";

const Order = () => {
  return (
    <div className="orderWrapper">
      <div className="orderHolder">
        <h1>Cart</h1>
        <hr></hr>
        <div className="orderCart">
          <img src={headphone} alt="name" className="cartProductPictures" />
          <div className="orderCartText">
            <div className="nameAndDescription">
              <h2>Naziv uredjaja</h2>
              <h4>Description</h4>
            </div>
            <div className="quantity">
              <span>-</span>
              <span>0</span>
              <span>+</span>
            </div>
            <h2>$ PRICE</h2>
            <img src={recycleBin} alt="recycleBin" className="recycleBin" />
          </div>
        </div>
        <hr></hr>
        <div className="inputAndButton">
          <input placeholder="PROMOCODE" className="inputCart" />
          <Button label="Apply" />
        </div>
        <h3>20% off discount</h3>
        <hr className="horizontalLine" />
        <div className="orderData">
          <div className="orderDataLeft">
            <h2>Subtotal</h2>
            <p>Discount</p>
            <p className="tax">Tax</p>
          </div>
          <div className="orderDataRight">
            <h2>$5454.00</h2>
            <div className="popust">
              <p>(20%)</p>
              <p>-454.00</p>
            </div>
            <p>-141.00</p>
          </div>
        </div>
        <hr className="horizontalLine" />
        <div className="total">
          <h2>Total</h2>
          <h2>$43165.00</h2>
        </div>
        <div className="buttonBlue">
          <Button label="Proceed to checkout" />
        </div>
        <div className="buttonWhite">
          <Button label="Continue shopping" />
        </div>
      </div>
    </div>
  );
};

export default Order;

import "./order.style.css";
import Button from "../../components/button/Button";
import ItemOrder from "./components/ItemOrder";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const router = useNavigate();
  const checkOutPage = () => {
    router("/check");
  };

  return (
    <div className="orderWrapper">
      <div className="orderHolder">
        <h1>Cart</h1>
        <hr></hr>
        <ItemOrder />
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
              <p>0.00</p>
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
          <Button label="Proceed to checkout" onClickHandler={checkOutPage} />
        </div>
        <div className="buttonWhite">
          <Button label="Continue shopping" />
        </div>
      </div>
    </div>
  );
};

export default Order;

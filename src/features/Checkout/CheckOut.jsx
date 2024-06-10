import "./checkOut.style.css";
import Button from "../../components/button/Button";
import lock from "../../assets/lock.png";

const CheckOut = () => {
  return (
    <div className="checkWrapper">
      <div className="checkHolder">
        <div className="delivery">
          <div className="deliveryAddress">
            <h2>Delilvery Address</h2>
            <div className="inputTag nameAndLastName">
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
            </div>
            <p>
              <u>+ Add Your Company Name</u>
            </p>
          </div>
          <div className="inputTag">
            <input placeholder="Street Address" />
            <input placeholder="Apt/Suite/Floor(Optional)" />
            <div className="inputTag city">
              <input placeholder="City" />
              <input placeholder="State" />
              <input placeholder="Zip Code" />
            </div>
            <div className="checkBox check1">
              <input type="checkbox" />
              <p>Use billing address</p>
            </div>
          </div>
        </div>
        <div className="contactInfo">
          <h2>Contact Info</h2>
          <div className="inputTag contactInput">
            <input placeholder="Enter For Order Tracking" />
            <input placeholder="Phone for Delivery Contact" />
          </div>
          <div className="lockAndText">
            <img src={lock} alt="lock" className="lock" />

            <p>
              Yor privacy is important to us. View our privacy policy here.We
              will only contact you if there an issuewith your order.{" "}
              <b>
                We`ll also look for coupons associated with you email and phone
                number
              </b>
            </p>
          </div>
          <div className="check2">
            <input type="checkbox" />
            <p>Get text alert for your order on your mobile</p>
          </div>
        </div>
        <Button label="Proceed to Saving & Payment" />
      </div>
    </div>
  );
};

export default CheckOut;

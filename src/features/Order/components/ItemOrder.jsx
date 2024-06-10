import { useOrderCartStore } from "../../../store/OrderStore/order.store";
import "./itemOrder.style.css";
import recycleBin from "../../../assets/recycleBin.png";

const ItemOrder = () => {
  const {
    cart,
    removeItemFromOrderCart,
    decreaseItemQuantity,
    increaseItemQuantity,
  } = useOrderCartStore();

  return (
    <div>
      {cart.length ? (
        <div className="cartWrapper">
          {cart.map((item) => (
            <div className="orderCart" key={item.id}>
              <img
                src={item.image}
                alt="name"
                className="cartProductPictures"
              />
              <div className="orderCartText">
                <div className="nameAndDescription">
                  <h2>{item.name}</h2>
                  <h4>{item.desription}</h4>
                </div>
                <div className="quantity">
                  <span onClick={() => decreaseItemQuantity(item.id)}>-</span>
                  <span>{item.quantity}</span>
                  <span onClick={() => increaseItemQuantity(item.id)}>+</span>
                </div>
                <h2>${item.price}</h2>
                <img
                  src={recycleBin}
                  alt="recycleBin"
                  className="recycleBin"
                  onClick={() => removeItemFromOrderCart()}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2>No item in cart</h2>
      )}
    </div>
  );
};

export default ItemOrder;

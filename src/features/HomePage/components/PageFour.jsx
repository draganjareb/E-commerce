import Button from "../../../components/button/Button";
import "../styles/pageFour.style.css";

const PageFour = () => {
  const offer = [
    {
      images:
        "https://purepng.com/public/uploads/large/purepng.com-headphoneelectronics-headset-headphone-941524669594jcbtd.png",
      type: "Simple",
      text: "Simple Device with Mountly Service",
      price: "$19",
    },
    {
      images:
        "https://purepng.com/public/uploads/large/purepng.com-headphoneelectronics-headset-headphone-941524669594jcbtd.png",
      type: "Standard",
      text: "Simple Device with Mountly Service",
      price: "$29",
    },
    {
      images:
        "https://purepng.com/public/uploads/large/purepng.com-headphoneelectronics-headset-headphone-941524669594jcbtd.png",
      type: "Best Offer",
      text: "Simple Device with Mountly Service",
      price: "$39",
    },
  ];

  return (
    <div className="pageFourWrapper">
      <div className="pageFourHolder">
        <div className="pageFourTitle">
          <h1>Our Packages</h1>
        </div>
        <div className="pageFourOffer">
          {offer.map((item) => (
            <div key={item.id} className="pageFourCard">
              <div>
                <img src={item.images} alt={item.text} />
              </div>
              <div className="cartText">
                <h2>{item.type}</h2>
                <p>{item.text}</p>
                <h1>{item.price}</h1>
                <Button label="SHOP NOW" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageFour;

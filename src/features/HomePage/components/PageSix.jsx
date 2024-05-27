import "../styles/pageSix.style.css";

const PageSix = () => {
  const profile = [
    {
      image:
        "https://i.pinimg.com/736x/b1/88/c6/b188c6801ad1d71d3c962c6e4aa2d0cf.jpg",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      firstName: "JOHN SMITH",
    },
    {
      image:
        "https://wallpapers.com/images/hd/cartoon-profile-pictures-3opqz8op53khmhjp.jpg",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      firstName: "STEVEN HILL",
    },
    {
      image:
        "https://i.pinimg.com/736x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      firstName: "DAVID JACKSON",
    },
  ];

  return (
    <div className="pageSixWrapper">
      <div className="pageSixHolder">
        <h2>What Our Clients Say</h2>
        <div className="clients">
          {profile.map((item) => (
            <div key={item.id} className="pageSixCard">
              <img src={item.image} alt={item.firstName} />
              <p>{item.text}</p>
              <h3>{item.firstName}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageSix;

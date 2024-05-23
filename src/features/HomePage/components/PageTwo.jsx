import "../styles/pageTwo.style.css";

const PageTwo = () => {
  const data = [
    {
      images:
        "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png",
      txt: "FREE UPDATES",
      paragraph:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
    {
      images: "https://cdn-icons-png.flaticon.com/512/69/69890.png",
      txt: "EASY TO USE",
      paragraph:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
    {
      images: "https://static.thenounproject.com/png/17471-200.png",
      txt: "TRENDY DESIGN",
      paragraph:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
  ];

  return (
    <div className="pageTwoWrapper">
      <div className="pageTwoHolder">
        <div>
          <h2>Beatiful presentations made easy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
        <div className="pageTwoCard">
          {data.map((item) => (
            <div key={item.id} className="pageTwoTitle">
              <img src={item.images} alt={item.txt} />
              <h2>{item.txt}</h2>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageTwo;

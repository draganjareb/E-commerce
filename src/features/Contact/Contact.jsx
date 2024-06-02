import "./contact.style.css";
import Button from "../../components/button/Button";
import navigation from "../../assets/navTag.png";
import phone from "../../assets/phoneIcon.png";

const Contact = () => {
  return (
    <div className="contactPageWrapper">
      <div className="contactPageHolder">
        <div className="contactPageLeftSite">
          <h1>Get in touch</h1>
          <div className="leftSiteTop">
            <p>
              Use onr contact form for all information requests or contact us
              directly using the contact information below.
            </p>
            <p>Feel free to get in touch with us via email or phone</p>
          </div>
          <hr></hr>
          <div className="leftSiteBottom">
            <div className="imagesAndData">
              <img
                src={navigation}
                alt="navigationTag"
                className="contactPictures"
              />
              <div className="contactData">
                <h2>Our Office Location</h2>
                <p>The Interior Design Studio Company </p>
                <p>The Courtyard, Al Quoz, Colorado, USA</p>
              </div>
            </div>
            <div className="imagesAndData">
              <img src={phone} alt="phone" className="contactPictures" />
              <div className="contactData">
                <h2>Phone (Landline)</h2>
                <p>+912 3 567 8987</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contactPageRightSite">
          <div className="contactPageRightSiteData">
            <h2>Get started with a free quotation</h2>
            <div className="inputData">
              <div className="inputDiv">
                <p>Name</p>
                <input placeholder="Enter your name" />
              </div>
              <div className="inputDiv">
                <p>Email</p>
                <input placeholder="Enter a valid email adress" />
              </div>
              <div className="inputDivMessage">
                <p>Message</p>
                <input
                  placeholder="Enter your message"
                  className="inputMessage"
                />
              </div>
            </div>
            <div className="acceptTag">
              <input type="checkbox" />
              <p>I accept the</p>
              <span>Terms of Service</span>
            </div>
            <Button label="Submit your request" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

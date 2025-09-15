import "./Contact.scss";
import {
  BsFacebook,
  AiFillInstagram,
  TiSocialTwitter,
  AiFillGoogleCircle,
  BiLogoPinterest,
} from "../../utils/constant";
function Contact() {
  return (
    <div className="contact">
      {/* unusal margin.padding surrounding add  wrapper inside actual content*/}
      <div className="wrapper">
        <h3>be in touch with us:</h3>
        <form
          action="https://formspree.io/f/xleylrjz"
          method="POST"
          className="contact-form"
        >
          <input type="email" name="" placeholder="Enter your email..." />
          <input type="hidden" name="message" value="..." />

          <button type="submit">JOIN US</button>
        </form>
        <div className="social-media-icons">
          <BsFacebook />
          <AiFillInstagram />
          <AiFillGoogleCircle />
          <TiSocialTwitter />
          <BiLogoPinterest />
        </div>
      </div>
    </div>
  );
}

export default Contact;

import {
  BiLogoInstagram,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h2 className="footer-title">Offmarket </h2>
      <p className="footer-description">
        Offmarket is a big website where you will find great products on
        webInfoOptions .Here each product is delivered with very smoothy process
      </p>
      <div className="social-sites-cntr">
        <BiLogoInstagram className="logo" />
        <BiLogoFacebookCircle className="logo" />
        <BiLogoLinkedinSquare className="logo" />
      </div>

      <div className="foooter-conatct-container">
        <div>
          <p className="tag">adress</p>
          <p className="equal">416209,Rjarampuri</p>
          <p className="equal">City, Kolhapur</p>
        </div>
        <div>
          <p className="tag">Contacts </p>
          <p className="equal">Email : offmarket17@gmail.com</p>
          <p className="equal">Contact : 765 9276 489</p>
          <p className="equal">fax: (02324) 22 00 26</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

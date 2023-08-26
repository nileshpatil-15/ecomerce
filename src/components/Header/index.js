
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {


  return (
    <nav className="navbar">
      <Link className="nav-item" to="/">
        <img className="webLogo" src="shoppingLogo.jpg"  alt="shop" />
      </Link>
      <ul className="shoppingOptions">
        <li>
          <Link className="nav-item" to="/products">
            EVERYTHING
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/products">
            WOMEN
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/products">
            MEN
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/products">
            ACCESSORIES
          </Link>
        </li>
      </ul>
      <ul className="webInfoOptions">
        <li>
          <Link className="nav-item" to="/">
            ABOUT
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;

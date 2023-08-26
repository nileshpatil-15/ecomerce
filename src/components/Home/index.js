import { useNavigate } from "react-router-dom";
import "./index.css";

const Home = () => {
  let imageStyle = {
    height: "500px",
    width: "100vw",
    backgroundImage: 'url("shoppingGirl7.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
  };

  const navigate = useNavigate();

  function handleClick() {
    navigate("/products");
  }

  return (
    <div className="home-banner-container" style={imageStyle}>
      <div className="banner-title-and-button">
        <h1 className="banner-title">LETS'S EXPOLRE UNIQUE PRODUCTS</h1>
        <button className="shop-button" onClick={handleClick}>
          SHOP NOW
        </button>

      </div>
    </div>
  );
};
export default Home;

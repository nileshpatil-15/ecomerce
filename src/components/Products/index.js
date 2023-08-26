import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import "./index.css";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();
  let imageStyle = {
    height: "500px",
    width: "100vw",
    backgroundImage: 'url("banner7.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
  };


  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }) 
      .then(function (res) {
        return res.json();
      }) 
      .then(function (myJson) {
        setData(myJson);
      });
  };


  const handleBuy = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="products-container" style={imageStyle}>
      <div className="products-inner-container">
        <div className="input-container">
          <input
            className="input-element"
            type="search"
            placeholder="What are you looking for ..."
          />
          <GrSearch className="search-icon" />
        </div>
        <ul className="products-list-container">
          {data &&
            data.length > 0 &&
            data.map((item) => {
              return (
                <li key={item.id} className="product-card">
                  <img className="product-img" src={item.thumbnail} alt='product' />
                  <hr />
                  <div className="card-description-container">
                    <div className="productName-and-buyButton-container">
                      <p className="product-name same">{item.title}</p>
                      <button
                        className="buy-btn"
                        onClick={() => {
                          handleBuy(item.id);
                        }}
                      >
                        BUY NOW
                      </button>
                    </div>
                    <p className="product-price same">
                      <span>Price: $</span> {item.price}
                    </p>
                    <p className="product-description same">
                      
                      <span>description: </span> {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default Products;
// GoSearch

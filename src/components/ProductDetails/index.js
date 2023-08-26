import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "./index.css";
import { products } from "../../constants";

const ProductDetails = () => {
  const [item, setData] = useState([]);

  const { id } = useParams();
 
  const productItem = products.filter((item) => item.id === parseInt(id));

  useEffect(() => {
    setData(productItem[0]);
    // eslint-disable-next-line
  },[]);

  return (
    <div className="product-details-container">
      <div className="product-details-Inner-container">
        <img className="detailed-img" src={item.thumbnail} alt="product" />
        <div className="product-description-container">
          <h2 className="details-title common">{item.title}</h2>
          <div className="details-mini-container">
            <p className="details-description common">
              <span>Details :</span>
              {item.details}
            </p>
          </div>

          <p className="details-rating common">
            <span>Rating : </span>
            {item.rating}
          </p>
          <div className="incease-decrease-btn common">
            <p className="operator">+</p>
            <p className="quantity">1</p>
            <p className="operator">-</p>
          </div>
          <p className=" details-price common">
            <span>Price :</span> {item.price}
          </p>
        <a href={`https://amazon.com/`} target="_blank"> <button className="buy-btn" >BUY NOW</button></a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

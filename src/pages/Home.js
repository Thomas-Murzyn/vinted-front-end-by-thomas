import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vinted-api-le-reacteur.herokuapp.com/offers"
        );

        setData(response.data);
        setIsLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return !isLoading ? (
    <div>...Downloading</div>
  ) : (
    <div>
      <h1>Welcome to Vinted</h1>
      {data.allOffers.map((offer, index) => {
        return (
          <div>
            <p>{offer.product_name}</p>
            <p>{offer.product_price}</p>
            <img className="offer-image" src={offer.product_image.url} alt="" />
          </div>
        );
      })}
      {/* <Link to="/offer">Allez sur la page Offer</Link> */}
    </div>
  );
};

export default Home;

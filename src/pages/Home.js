import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Items from "../components/Items";

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
      <div className="content">
        {data.allOffers.map((offer, index) => {
          return (
            <Link className="offer-link" key={offer.id} to="/offer">
              <Items offer={offer} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

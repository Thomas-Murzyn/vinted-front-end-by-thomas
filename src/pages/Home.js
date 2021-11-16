import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Items from "../components/Items";
import Hero from "../components/Hero";

const Home = ({ search, priceFilter, priceMin, priceMax }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        // if search on fait une requête avec ?title=(search) sinon on requête tous.
        if (search) {
          response = await axios.get(
            `https://vinted-api-le-reacteur.herokuapp.com/offers?title=${search}&sort=${priceFilter}&priceMin=${priceMin}&priceMax=${priceMax}`
          );
        } else {
          response = await axios.get(
            `https://vinted-api-le-reacteur.herokuapp.com/offers?sort=${priceFilter}&priceMin=${priceMin}&priceMax=${priceMax}`
          );
        }

        setData(response.data);
        setIsLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [search, priceFilter, priceMax, priceMin]);

  return !isLoading ? (
    <div>...Downloading</div>
  ) : (
    <>
      <Hero />
      <div>
        <div className="content">
          {data.allOffers.map((offer, index) => {
            return (
              <Link
                className="offer-link"
                key={offer._id}
                to={`/offer/${offer._id}`}
              >
                <Items offer={offer} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;

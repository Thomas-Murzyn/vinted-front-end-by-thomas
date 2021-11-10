import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://vinted-api-le-reacteur.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return !isLoading ? (
    <div>...Downloading</div>
  ) : (
    <div className="offer">
      <img src={data.offer.product_image.url} alt="" className="offer-image" />
      <div className="offer-description">offer</div>
    </div>
  );
};

export default Offer;

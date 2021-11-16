import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

const Offer = ({ isConnect }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const dataKey = []; // dataKey nous servira à extraire les key de l'array product_details

  const navigate = useNavigate();

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
  }, [id]);

  if (isLoading) {
    for (let i = 0; i < data.offer.product_details.length; i++) {
      dataKey.push(Object.keys(data.offer.product_details[i]));
    }
  }

  return !isLoading ? (
    <div>...Downloading</div>
  ) : (
    <div className="container-offer">
      <div className="offer">
        <img
          src={data.offer.product_image.secure_url}
          alt=""
          className="offer-image"
        />
        <div className="container-offer-description">
          <h2>{data.offer.product_price}€</h2>
          {/* Details */}
          <div className="offer-description">
            <div>
              {/* On map à travers dataKey pour extraire chaque key */}
              {dataKey.map((elem, index) => {
                return <p key={index}>{elem}</p>;
              })}
            </div>
            <div>
              {/* On map à travers product_details indice datakey[index] pour extraire chaque valeur */}
              {data.offer.product_details.map((elem, index) => {
                return <p key={index}>{elem[dataKey[index]].toUpperCase()}</p>;
              })}
            </div>
          </div>
          {/* Description product */}
          <h3>{data.offer.product_name}</h3>
          <p className="descr">{data.offer.product_description}</p>
          <button
            onClick={() => {
              // isConnect ? navigate("/payment") : navigate("/login");
              console.log(isConnect);
              if (isConnect) {
                navigate("/payment", {
                  state: {
                    title: data.offer.product_name,
                    price: data.offer.product_price,
                  },
                });
              } else {
                navigate("/login");
              }
            }}
            className="buy"
          >
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;

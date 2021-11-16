import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import Cookies from "js-cookie";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cardElements = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElements, {
        name: Cookies.get("userId"),
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-payment">
        <h6>Résumé de la commande</h6>
        <ul>
          <li>
            <span>Commande</span>
            <span>price</span>
          </li>
          <li>
            <span>Frais de protection acheteur</span>
            <span>0.40€</span>
          </li>
          <li>
            <span>Frais de port</span>
            <span>0.80€</span>
          </li>
        </ul>
        <CardElement />
        <button type="submit">Valider</button>
      </form>
    </>
  );
};

export default CheckoutForm;

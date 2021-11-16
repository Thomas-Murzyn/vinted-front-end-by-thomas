import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router";

const stripePromise = loadStripe(
  "pk_test_51JwQnrJFbql4c6yPt4ZSZjTQg8DwNaVAAw4CIfbdq7n0I5zl2FtWxgtKxeXTo5ZGKYr11YeeL5EDrx5D2BXCzDGX005tc8fuC1"
);

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm title={title} price={price} />
    </Elements>
  );
};

export default Payment;

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Vinted</h1>
      <Link to="/offer">Allez sur la page Offer</Link>
    </div>
  );
};

export default Home;

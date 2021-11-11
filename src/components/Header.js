import logo from "../assets/Vinted-logo.svg.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <nav>
        <Link to="/signup">S'inscrire</Link>
        <Link to="/login">Se connecter</Link>
      </nav>
    </header>
  );
};

export default Header;

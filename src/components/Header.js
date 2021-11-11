import logo from "../assets/Vinted-logo.svg.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ isConnect, setIsConnect }) => {
  return (
    <header>
      <img src={logo} alt="" />
      <input type="text" placeholder="Recherche des articles " />
      <nav>
        {isConnect ? (
          <>
            {" "}
            <button
              onClick={() => {
                setIsConnect(Cookies.remove("token"));
              }}
            >
              Se déconnecter
            </button>{" "}
            <button>Vends tes articles</button>{" "}
          </>
        ) : (
          <>
            {" "}
            <Link to="/signup">S'inscrire</Link>
            <Link to="/login">Se connecter</Link>{" "}
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

import logo from "../assets/Vinted-logo.svg.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Filter from "./Filter";

const Header = ({ isConnect, setIsConnect, search, setSearch }) => {
  const navigate = useNavigate();
  return (
    <header>
      <img
        onClick={() => {
          navigate("/");
        }}
        src={logo}
        alt=""
      />
      <Filter setSearch={setSearch} search={search} />

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

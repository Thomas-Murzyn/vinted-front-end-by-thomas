import logo from "../assets/Vinted-logo.svg.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Filter from "./Filter";

const Header = ({
  isConnect,
  setIsConnect,
  search,
  setSearch,
  priceFilter,
  setPriceFilter,
}) => {
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
      <Filter
        setPriceFilter={setPriceFilter}
        priceFilter={priceFilter}
        setSearch={setSearch}
        search={search}
      />

      <nav>
        {isConnect ? (
          <>
            {" "}
            <button
              onClick={() => {
                Cookies.remove("token");
                setIsConnect(null);
              }}
            >
              Se déconnecter
            </button>{" "}
            <Link
              to={isConnect ? `/offer/publish` : `/login`}
              className="go-publish"
            >
              Vends tes articles
            </Link>
          </>
        ) : (
          <>
            {" "}
            <Link to="/signup">S'inscrire</Link>
            <Link to="/login">Se connecter</Link>{" "}
            <Link
              to={isConnect ? `/offer/publish` : `/login`}
              className="go-publish"
            >
              Vends tes articles
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

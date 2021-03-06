import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router";

const LogIn = ({ isConnect, setIsConnect, userId, setUserId }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isWrong, setIsWrong] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        email: mail,
        password: password,
      };

      const response = await axios.post(
        "https://vinted-api-le-reacteur.herokuapp.com/user/login",
        data
      );

      const token = response.data.token;
      console.log(response.data);
      Cookies.set("token", token, { expires: 7 });
      Cookies.set("userId", response.data.id, { expires: 7 });
      setIsConnect(Cookies.get("token"));
      setUserId(response.data.id);

      navigate("/");
    } catch (error) {
      setIsWrong(true);
      console.log(error.message);
    }
  };

  return (
    <div className="signup-login">
      <form onSubmit={handleSubmit}>
        <h3>Se connecter</h3>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="submit"
          value="Se connecter"
          className="submit-login-button"
        />
        {isWrong && (
          <p className="wrong">Le mot de passe ou le mail ne sont pas bon.</p>
        )}
      </form>
    </div>
  );
};

export default LogIn;

import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

const LogIn = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        email: mail,
        password: password,
      };

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        data
      );

      const token = response.data.token;
      Cookies.set("token", token, { expires: 7 });
    } catch (error) {
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

        <input type="submit" value="Se connecter" />
      </form>
    </div>
  );
};

export default LogIn;

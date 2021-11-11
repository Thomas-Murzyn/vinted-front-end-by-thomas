import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsLetter] = useState(false);

  const handleSubmit = async (event) => {
    try {
      const data = {
        username: username,
        email: mail,
        password: password,
        newsletter: newsletter,
      };
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        data
      );

      const token = response.data.token; // Récupération du token

      Cookies.set("token", token, { expires: 7 });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-login">
      <form onSubmit={handleSubmit}>
        <h3>S'inscrire</h3>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(e) => setUserName(e.target.value)}
        />
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

        <div className="newsletter-container">
          <input
            name="newsletter"
            type="checkbox"
            onChange={(e) => setNewsLetter(!newsletter)}
          />
          <label htmlFor="newletter">S'inscrire à la newsletter</label>
        </div>

        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default SignUp;

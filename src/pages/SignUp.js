const SignUp = () => {
  return (
    <div className="signup">
      <form>
        <h3>S'inscrire</h3>
        <input type="text" placeholder="Nom d'utilisateur" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />

        <div className="newsletter-container">
          <input name="newsletter" type="checkbox" />
          <label for="newletter">S'inscrire à la newsletter</label>
        </div>

        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default SignUp;

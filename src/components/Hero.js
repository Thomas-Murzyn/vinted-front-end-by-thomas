import banner from "../assets/banner.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={banner} alt="hero img" />
      <div>
        <h1>Prêts à faire du tri dans vos placards ?</h1>
        <button>Vends maintenant</button>
        <p>Découvrir comment ça marche</p>
      </div>
    </div>
  );
};

export default Hero;

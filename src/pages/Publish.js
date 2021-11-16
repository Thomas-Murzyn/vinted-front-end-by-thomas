import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

import { useState } from "react";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState();
  const [color, setColor] = useState("");
  const [picture, setPicure] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const token = Cookies.get("token");
      console.log(token);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", Number(price));
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://vinted-api-le-reacteur.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      const offerId = response.data.result._id;
      console.log(offerId);
      navigate(`/offer/${offerId}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="publish">
      <h2>Vends tes articles</h2>
      <form onSubmit={handleSubmit} className="publish-form">
        <div className="publish-input-wrapper picture-publish-container">
          <label htmlFor="file">Choisir une photo</label>
          <input
            onChange={(e) => setPicure(e.target.files[0])}
            type="file"
            name="file"
            className="picture-file"
          />
        </div>

        <div className="publish-input-wrapper">
          <div className="publish-input-container">
            <div>
              <h5>Titre</h5>
            </div>
            <div>
              <input
                placeholder="ex: Chemise Sézane verte"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className="publish-input-container">
            <div>
              <h5>Décris ton article</h5>
            </div>
            <div>
              <textarea
                placeholder="ex: porté quelquefois"
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                rows="3"
              />
            </div>
          </div>
        </div>

        <div className="publish-input-wrapper">
          <div className="publish-input-container">
            <div>
              <h5>Marque</h5>
            </div>
            <div>
              <input
                placeholder="ex: Zara"
                onChange={(e) => setBrand(e.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className="publish-input-container">
            <div>
              <h5>Taille</h5>
            </div>
            <div>
              <input
                placeholder="ex: L / 40 / 12"
                onChange={(e) => setSize(e.target.value)}
                type="text"
              />
            </div>
          </div>

          <div className="publish-input-container">
            <div>
              <h5>Couleur</h5>
            </div>
            <div>
              <input
                placeholder="ex: Fushia"
                onChange={(e) => setColor(e.target.value)}
                type="text"
              />
            </div>
          </div>

          <div className="publish-input-container">
            <div>
              <h5>Etat</h5>
            </div>
            <div>
              <input
                placeholder="ex: Neuf avec étiquette"
                onChange={(e) => setCondition(e.target.value)}
                type="text"
              />
            </div>
          </div>

          <div className="publish-input-container">
            <div>
              <h5>Lieu</h5>
            </div>
            <div>
              <input
                placeholder="ex: Paris"
                onChange={(e) => setCity(e.target.value)}
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="publish-input-wrapper">
          <div className="publish-input-container">
            <div>
              <h5>Prix</h5>
            </div>
            <div>
              <input
                placeholder="0,00€"
                onChange={(e) => setPrice(e.target.value)}
                type="number"
              />
            </div>
          </div>

          <div className="checkbox-container">
            <div></div>
            <div>
              <input
                type="checkbox"
                id="echange"
                name="echange"
                className="echange"
              />
              <span>Je suis intéressé(e) par les échanges</span>
            </div>
          </div>
        </div>

        <input className="submit-publish" type="submit" value="Ajouter" />
      </form>
    </div>
  );
};

export default Publish;

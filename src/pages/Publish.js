import axios from "axios";
import Cookies from "js-cookie";

import { useState } from "react";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicure] = useState({});

  const token = Cookies.get("token");

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("condition", condition);
  formData.append("city", city);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("picture", picture);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="publish">
      <h2>Vends tes articles</h2>
      <form onSubmit={handleSubmit} className="publish-form">
        <div>
          <input onChange={(e) => setPicure(e.target.files[0])} type="file" />
        </div>

        <div className="publish-input-wrapper">
          <div className="publish-input-container">
            <div>
              <h5>Titre</h5>
            </div>
            <div>
              <input onChange={(e) => setTitle(e.target.value)} type="text" />
            </div>
          </div>
          <div className="publish-input-container">
            <div>
              <h5>Décris ton article</h5>
            </div>
            <div>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                rows="4"
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
              <input onChange={(e) => setBrand(e.target.value)} type="text" />
            </div>
          </div>
          <div className="publish-input-container">
            <div>
              <h5>Taille</h5>
            </div>
            <div>
              <input onChange={(e) => setSize(e.target.value)} type="text" />
            </div>
          </div>

          <div className="publish-input-container">
            <div>
              <h5>Couleur</h5>
            </div>
            <div>
              <input onChange={(e) => setColor(e.target.value)} type="text" />
            </div>
          </div>

          <div className="publish-input-container">
            <div>
              <h5>Etat</h5>
            </div>
            <div>
              <input
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
              <input onChange={(e) => setCity(e.target.value)} type="text" />
            </div>
          </div>
        </div>

        <div className="publish-input-wrapper">
          <div className="publish-input-container">
            <div>
              <h5>Prix</h5>
            </div>
            <div>
              <input onChange={(e) => setPrice(e.target.value)} type="text" />
            </div>
          </div>
          <div>
            <input type="checkbox" />
          </div>
        </div>

        <input type="submit" value="Ajouter" />
      </form>
    </div>
  );
};

export default Publish;

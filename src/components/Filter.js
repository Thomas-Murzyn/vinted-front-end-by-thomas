import { useState } from "react";

const Filter = ({ search, setSearch, priceFilter, setPriceFilter }) => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div className="filter">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Recherche des articles"
      />

      <div className="price-filter-container">
        <p>Trier par prix : </p>
        <div
          style={{ justifyContent: isCheck ? "flex-end" : "flex-start" }}
          className="check-price"
        >
          <div
            className="check-price-button"
            onClick={() => {
              setIsCheck(!isCheck);

              if (isCheck) {
                setPriceFilter("price-asc");
              } else {
                setPriceFilter("price-desc");
              }
            }}
          >
            {isCheck ? <span>⬆</span> : <span>⬇</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

import { useState } from "react";

const Filter = ({
  priceMin,
  setPriceMin,
  search,
  setSearch,
  priceFilter,
  setPriceFilter,
  setPriceMax,
  priceMax,
}) => {
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
                setPriceFilter("asc");
              } else {
                setPriceFilter("desc");
              }
            }}
          >
            {isCheck ? <span>⬆</span> : <span>⬇</span>}
          </div>
        </div>
        <div className="sort-by-price">
          <label htmlFor="sort-min">Prix min</label>
          <input
            name="sort-min"
            type="number"
            onChange={(e) => {
              setPriceMin(e.target.value);
            }}
          />
          <label htmlFor="sort-max">Prix max</label>
          <input
            name="sort-max"
            type="number"
            onChange={(e) => {
              setPriceMax(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;

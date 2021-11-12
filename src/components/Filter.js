const Filter = ({ search, setSearch }) => {
  return (
    <div className="filter">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Recherche des articles"
      />
    </div>
  );
};

export default Filter;

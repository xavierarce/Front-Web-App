import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <img
        className="icon-lupa"
        alt="icon-lupa"
        src={require("../../assets/Lupa.svg").default}
      />
      <div className="search-bar-input">
        <input
          className="search-bar-input"
          placeholder="Busca por ciudades (Guayaquil, Cuenca, Quito)"
        />
      </div>
    </div>
  );
}

export default SearchBar;

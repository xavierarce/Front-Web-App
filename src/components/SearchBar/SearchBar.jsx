import "./SearchBar.css";

function SearchBar({onChange}) {
  return (
    <div className="search-bar">
      <img
        className="icon-lupa"
        alt="icon-lupa"
        src={require("../../assets/icons/Lupa.svg").default}
      />
        <input
          className="search-bar-input"
          placeholder="Busca por ciudades (Guayaquil, Cuenca, Quito)"
          onChange={onChange}
        />
    </div>
  );
}

export default SearchBar;

import CustomButton from "../CustomButton/CustomButton";
import "./SearchBar.css";

function SearchBar({ onChange, onSubmit, value, placeholder }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="search-bar">
        <img
          className="icon-lupa"
          alt="icon-lupa"
          src={require("../../assets/icons/Lupa.svg").default}
        />
        <input
          className="search-bar-input"
          placeholder={
            placeholder || "Busca por ciudades (Guayaquil, Cuenca, Quito)"
          }
          value={value}
          onChange={onChange}
        />
        <CustomButton pattern={"blue-small"} content={"Buscar"} />
      </div>
    </form>
  );
}

export default SearchBar;

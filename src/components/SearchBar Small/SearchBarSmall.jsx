import "./SearchBarSmall.css";

function SearchBarSmall() {
  return (
    <div className="small-search-bar">
      <img
        className="lupa-small"
        alt="Shape"
        src={require("../../assets/Lupa.svg").default}
      />
      <div className="small-search-bar-text-wrapper">
        <input
          className="small-search-bar-text-wrapper"
          placeholder="Encuentra tu proximo hogar!"
        />
      </div>
    </div>
  );
}

export default SearchBarSmall;

import { useNavigate } from "react-router-dom";
import ImagesCuadruple from "../../components/ImagesCuadruple/ImagesCuadruple";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";
import { useState } from "react";
import { ASSETSFAKEDATA } from "../../AssetsFakeData";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(searchTerm === "" ? "/bienes" : `/bienes?buscar=${searchTerm}`);
  };

  return (
    <div className="home">
      <div className="tiulo-searchBar">
        <h2 className="slogan">
          Encuentra tu hogar
          <br />
          Sin preocupaciones
        </h2>
        <SearchBar
          onSubmit={handleSearch}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ImagesCuadruple assets={ASSETSFAKEDATA} />
      <div className="home-page-description">
        <div className="home-description-text">
          <h2 className="home-page-description-title">
            Un Proceso Seguro y Fácil para Encontrar tu Hogar Ideal
          </h2>
          <p className="home-page-description-text">
            Queremos asegurarnos de que encuentres tu hogar ideal de manera
            fácil y segura. Nuestro proceso es rigurosamente verificado y
            filtrado, permitiendo que solo personas confiables lo completen con
            éxito. Sigue estos simples pasos para hacerlo tuyo:
          </p>
        </div>
        <div className="home-page-steps">
          <div className="step-card">
            <h3>1. Encuentra tu Apartamento en línea</h3>
          </div>
          <div className="step-card">
            <h3>2. Solicita una Visita Virtual o Física</h3>
          </div>
          <div className="step-card">
            <h3>3. Firma el Contrato</h3>
          </div>
          <div className="step-card">
            <h3>4. Mudanza</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

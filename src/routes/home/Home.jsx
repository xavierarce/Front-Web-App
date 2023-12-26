import { useNavigate } from "react-router-dom";
import ImagesCuadruple from "../../components/ImagesCuadruple/ImagesCuadruple";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";
import { useState } from "react";
import ASSETSFAKEDATA from "../../AssetsFakeData";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      navigate(`/bienes`);
    } else {
      navigate(`/bienes?buscar=${searchTerm}`);
    }
  };

  return (
    <div className="home">
      <div className="tiulo-searchBar">
        <h2 className="slogan">
          Encuentra tu hogar
          <br /> Sin Preocupaciones
        </h2>
        <SearchBar
          onSubmit={handleSearch}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ImagesCuadruple assets={ASSETSFAKEDATA} />
      <div className="texto-bellow">
        <div className="encuentra-tu-proximo">ENCUENTRA TU PROXIMO HOGAR</div>
        <p className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet consectetur. Et augue vitae natoque lorem
          donec vestibulum eu lacinia. Nisl tempor hendrerit posuere amet
          semper. Senectus imperdiet bibendum sit ut pharetra tristique sed. Mi
          integer netus tincidunt a tortor eu ullamcorper tellus nullam.
          <br />
          Lacus sit duis pellentesque pellentesque. Pulvinar elit sed feugiat
          non. Feugiat magna ut faucibus proin. Accumsan aliquam urna ac sapien
          commodo varius urna eu ultricies. Vitae quis ac sit egestas dolor.
          <br />
          Lorem ipsum dolor sit amet consectetur. Et augue vitae natoque lorem
          donec vestibulum eu lacinia. Nisl tempor hendrerit posuere amet
          semper. Senectus imperdiet bibendum sit ut pharetra tristique sed. Mi
          integer netus tincidunt a tortor eu ullamcorper tellus nullam.
          <br />
          Lacus sit duis pellentesque pellentesque. Pulvinar elit sed feugiat
          non. Feugiat magna ut faucibus proin. Accumsan aliquam urna ac sapien
          commodo varius urna eu ultricies. Vitae quis ac sit egestas dolor.
        </p>
      </div>
    </div>
  );
}

export default Home;

import ImagesCuadruple from "../../components/ImagesCuadruple/ImagesCuadruple";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="tiulo-searchBar">
        <h2 className="titulo-home">Realiza todo desde tu casa</h2>
        <SearchBar />
      </div>
      <ImagesCuadruple />
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

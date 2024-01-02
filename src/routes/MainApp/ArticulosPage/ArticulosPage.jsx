import { ArticleSections } from "../../../AssetsFakeData";
import "./ArticulosPage.css";

function ArticulosPage() {
  return (
    <div className="articulos-page">
      <div className="articulos-page-top">
        <h2 className="articulos-page-title">Articulos</h2>
        <p className="articulos-page-subtitle">
          Aqui encontraras una guias en general, informacion sobre ciudades,
          posibles consejos, o incluso referencias para hacer en tus lugares
          cercanos. No dudes en consultar!
        </p>
      </div>
      <div className={"articulos-page-sections-container"}>
        {ArticleSections.map((section, idx) => {
          const { name, imgUrl } = section;
          return (
            <div key={idx} className="article-page-section" style={{backgroundImage:`url(${imgUrl})`}}>
              <div className="section-name">{name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArticulosPage;

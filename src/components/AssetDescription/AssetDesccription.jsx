import "./AssetDescription.css";

function CaractericticaP({ carac }) {
  const caracList = Object.keys(carac)
  console.log(carac,'ds');
  console.log(caracList,'List');
  if (carac === true) {
    return <h2>{`${carac.key}`} = Yes</h2>;
  }
  return <h2>{`${carac}`} = No</h2>;
}

function AssetDescription({ asset }) {
  const {
    title,
    address,
    apartamento: { descripcion ,caracteristicas },
  } = asset;

  return (
    <div className="asset-page-descripcion-container">
      <div>
        <h2 className="asset-page-title">{title}</h2>
        <p className="asset-page-title">{address}</p>
      </div>
      <p className="asset-page-description">{descripcion} </p>
      <h2>Caracteristicas</h2>
    <CaractericticaP carac={caracteristicas}/>
    
    </div>
  );
}

export default AssetDescription;

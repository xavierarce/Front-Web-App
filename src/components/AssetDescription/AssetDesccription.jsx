import "./AssetDescription.css";

function AssetDescription({ asset }) {
  const { title, address, apartamento } = asset;
  const { descriptions } = apartamento;

  return (
    <div className="asset-page-descripcion-container">
        <h2 className="asset-page-title">{title}</h2>
        <p className="asset-page-title">{address}</p>
        {descriptions.map((des, idx) => (
          <p className="asset-page-description" key={idx}>{des[`description${idx + 1}`]}</p>
        ))}
    </div>
  );
}

export default AssetDescription;

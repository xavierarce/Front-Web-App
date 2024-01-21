import ApartmentCard from "../ApartmentCard/ApartmentCard";
import LoadingSpinner from "../LoadingSpiner/LoadingSpinner";

import "./ImagesCuadruple.css";

function ImagesCuadruple({ assets }) {

  if (!assets) {
    return <LoadingSpinner/>
  }


  return (
    <div className="home-imagenes-container">
      <div className="home-imagenes">
        {assets.slice(0, 6).map((asset, idx) => (
          <ApartmentCard key={idx} asset={asset}/>
        ))}
      </div>
    </div>
  );
}

export default ImagesCuadruple;

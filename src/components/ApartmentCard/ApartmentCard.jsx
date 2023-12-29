import "./ApartmentCard.css";
import Location from "../../assets/icons/locationIcon.svg";
import { Link } from "react-router-dom";

function ApartmentCard({ asset }) {
  console.log(asset);
  const { id, title, city, address, imageURL } = asset;
  
  return (
    <Link className='apartment-card-Link'  to={`/bienes/${id}`} >
      <div className="apartment-card">
        <img className="apartment-card-image" alt="Rectangle" src={imageURL} />
        <div className="apartment-card-title">{title}</div>
        <div className="apartment-card-description">{address} </div>
        <div className="apartment-card-ciudad">
          <img className="icon-location" alt="icon-lupa" src={Location} />
          <div className="ciudad-teext">{city}</div>
        </div>
      </div>
    </Link>
  );
}

export default ApartmentCard;

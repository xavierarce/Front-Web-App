import "./AssetOnlIst.css";
import WifiIcon from "../../assets/icons/wifi-svgrepo-com.svg";
import CustomButton from "../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

function AssetOnList({id, title, address, description, value, imgUrl }) {
  const navigate =useNavigate()
  
  function navigateTo (){
    navigate(`${id}`)
  } 

  return (
    <div className="asset-on-list">
      <div className="asset-on-list-description">
        <div className="asset-on-list-title-description">
          <div className="asset-on-list-title-address">
            <b className="asset-on-list-title">{title}</b>
            <p className="asset-on-list-address">{address}</p>
          </div>
          <p className="asset-on-list-description-text">{description} </p>
        </div>
        <div className="icons">
          {Array.from({ length: 10 }).map((_, index) => (
            <img
              className="asset-on-list-icon"
              key={index}
              src={WifiIcon}
              alt={`icons${index}`}
            />
          ))}
        </div>
        <div className="asset-on-list-buttons">
          <div>
            <b>{value}</b>
          </div>
          <CustomButton pattern={"blue"} content={"Detalles"} onButtonClick={navigateTo}/>
        </div>
      </div>
      <img className="asset-on-list-image" alt={imgUrl} src={imgUrl} />
    </div>
  );
}

export default AssetOnList;

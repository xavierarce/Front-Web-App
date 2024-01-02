import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./OwnerCard.css";
import { IoCloseCircle } from "react-icons/io5";
import FormInput from "../FormInput/FormInput";

const OwnerCard = ({ ownerOnCard, setCardPop, setOwnerOnCard }) => {
  const [userContent, setUserContent] = useState(ownerOnCard);
  const [isOnModify, setIsOnModify] = useState(false);

  const onModifiOnwer = () => {
    setIsOnModify(true);
  };

  const onSaveModification = () => setIsOnModify(false);

  const onInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("asset")) {
      // Handle modification for asset titles
      const assetIndex = parseInt(name.substring(5)) - 1; // Extract the asset index
      setUserContent((prevUserContent) => {
        const updatedAssets = [...prevUserContent.assets];
        updatedAssets[assetIndex] = {
          ...updatedAssets[assetIndex],
          title: value,
        };
        return { ...prevUserContent, assets: updatedAssets };
      });
    } else {
      // Handle modifications for other user-related inputs
      setUserContent((prevUserContent) => ({
        ...prevUserContent,
        [name]: value,
      }));
    }
  };

  const closePopUp = () => {
    setCardPop(false);
    setOwnerOnCard(null);
  };
  const { name, phoneNumber, city, assets } = ownerOnCard;
  console.log(userContent , 'userContent');

  return (
    <div className="ownercard-Overlay ">
      <div className="ownercard-container">
        <IoCloseCircle
          className="ownercard-close"
          color="white"
          size="3rem"
          onClick={closePopUp}
        />
        <div className="ownercard-content">
          <div className="ownercard-modify">
            <CustomButton
              onButtonClick={onModifiOnwer}
              content={"Modificar"}
              pattern={"blue-small"}
            />
          </div>
          <h2 className="ownercard-asset-text">
            {name} - {city}
          </h2>
          <p className="ownercard-asset-text">Telefono: {phoneNumber}</p>
          <div className="ownercard-assets-container">
            {!isOnModify ? (
              assets.map((asset, idx) => {
                const { type, city, address, title } = asset;
                return (
                  <div key={idx} className="ownercard-asset">
                    <b className="ownercard-asset-text">
                      {title}&nbsp;&nbsp;&nbsp;
                      <span className="ownercard-asset-type">
                        {type.toUpperCase()}
                      </span>
                    </b>
                    <p className="ownercard-asset-text">
                      {city}, {address}
                    </p>
                  </div>
                );
              })
            ) : (
              <form>
                <FormInput
                  onChange={onInputChange}
                  divClassName={"Form-Input-Section"}
                  pattern={"text-input"}
                  label={"Nombre:"}
                  name={"name"}
                  value={userContent.name}
                />
                <FormInput
                  onChange={(e) => onInputChange(e)}
                  divClassName={"Form-Input-Section"}
                  pattern={"text-input"}
                  label={"Telefono:"}
                  name={"phoneNumber"}
                  value={userContent.phoneNumber}
                />
                <FormInput
                  onChange={(e) => onInputChange(e)}
                  divClassName={"Form-Input-Section"}
                  pattern={"text-input"}
                  label={"Ciudad:"}
                  name={"city"}
                  value={userContent.city}
                />
                {userContent.assets.map((asset, idx) => {
                  return (
                    <div key={idx}>
                      <FormInput
                        onChange={(e) => onInputChange(e)}
                        divClassName={"Form-Input-Section"}
                        pattern={"text-input"}
                        label={`Bien ${idx + 1}`}
                        name={`asset${idx + 1}`}
                        value={userContent.assets[idx].title}
                      />
                    </div>
                  );
                })}
                <CustomButton
                  content={"Guardar modificación"}
                  pattern={"blue-small"}
                  type={"button"}
                  onButtonClick={onSaveModification}
                />
              </form>
            )}
            {}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerCard;

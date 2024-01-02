import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./NewOwnerCard.css";
import { IoCloseCircle } from "react-icons/io5";
import FormInput from "../FormInput/FormInput";
import { FaAlignCenter } from "react-icons/fa";

const DEFAULTOWNERFIELDS = {
  name: "",
  phoneNumber: "",
  city: "",
  assets: [
    {
      title: "",
      address: "",
    },
    {
      title: "",
      address: "",
    },
  ],
};

const NewOwnerCard = ({ setNewOwnerPop }) => {
  const [userContent, setUserContent] = useState(DEFAULTOWNERFIELDS);

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

  const onSaveOwner = () => {
    alert(JSON.stringify(userContent));
    closePopUp()
  };

  const closePopUp = () => {
    setNewOwnerPop(false);
  };
  // const { name, phoneNumber, city, assets } = ownerOnCard;
  console.log(userContent, "userContent");

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
              content={"Guardar Propietario"}
              pattern={"blue-small"}
              type={"button"}
              onButtonClick={onSaveOwner}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewOwnerCard;

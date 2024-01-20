// import { FaGoogle } from "react-icons/fa";
import CustomButton from "../CustomButton/CustomButton";
import "./DeleteAssetPopUp.css";
import { IoCloseCircle } from "react-icons/io5";

const DeleteAssetPopUp = ({ option, asset, close, deleteImage }) => {
  return (
    <div className="ModalOverlay ">
      <div className="ModalOverlayX">
        <IoCloseCircle
          className="IoCloseCircle"
          color="white"
          size="3rem"
          onClick={close}
        />
        <div className="ModalContent ">
          <div className="authenticate-signin">
            <h2 className="authenticate-signin-title">
              Estas seguro que deseas{" "}
              <span style={{ color: "red" }}>{option}</span>, el siguiente bien:
            </h2>
            <p className="authenticate-signin-title">{asset.title}</p>
            <CustomButton
              content={option}
              pattern={"red"}
              onButtonClick={deleteImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAssetPopUp;

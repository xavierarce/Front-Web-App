// import { FaGoogle } from "react-icons/fa";
import "./LoadingSpinner.css";

const LoadingSpinner = ({ option, asset, close, deleteImage }) => {
  return (
    <div className="ModalOverlay ">
      <div className="ModalOverlayX">
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

// import { FaGoogle } from "react-icons/fa";
import "./LoadingSpinerLocal.css";

const LoadingSpinerLocal = ({ option, asset, close, deleteImage }) => {
  return (
      <div className="loading-local-background">
        <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinerLocal;

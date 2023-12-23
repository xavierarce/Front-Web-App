import Room1 from "./Images/Room1.png";
import Room2 from "./Images/Room2.png";
import Room3 from "./Images/Room3.png";
import Room4 from "./Images/Room4.png";
import './ImagesCuadruple.css'

function ImagesCuadruple() {
  const IMAGES = [Room1, Room2, Room3, Room4];

  return (
    <div className="imagenes">
      {IMAGES.map((image, idx) => (
        <img key={idx} className="rectangle" alt={`Rectangle ${idx + 1}`} src={image} />
      ))}
    </div>
  );
}

export default ImagesCuadruple;

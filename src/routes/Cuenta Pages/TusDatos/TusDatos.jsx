import "./TusDatos.css";
import { FakeUser } from "../../../AssetsFakeData";
import UserInfoTag from "../../../components/UserInfoTag/UserInfoTag";
import { useOutletContext } from "react-router-dom";
import CustomButton from "../../../components/CustomButton/CustomButton";

const TusDatos = () => {
  const [userOnInterface] = useOutletContext();

  if (userOnInterface) {
    const {
      name,
      lastname,
      email,
      nationality,
      occupation,
      institution,
      phoneNumber,
      numberId,
    } = userOnInterface;
    const { profilePic } = FakeUser;

    return (
      <section className="tus-datos-page">
        <img className="tus-datos-foto" alt="Profile" src={profilePic} />
        <div className="tus-datos-info-container">
          <header className="tus-datos-header">
            <h2 className="tus-datos-name">
              {name} {lastname}
            </h2>
            <p className="tus-datos-nacionalidad">{nationality}</p>
            <p className="tus-datos-nacionalidad">CI. {numberId}</p>
          </header>
          <div className="tus-datos-datas-inputs-container">
            <div className="tus-datos-modificar-container">
              <CustomButton pattern={"blue-small"} content={"Modificar"} />
            </div>
            <div className="tus-datos-section-container">
              <h3 className="info-title">Coordenadas</h3>
              <UserInfoTag label={"Email"} display={email} />
              <UserInfoTag label={"Telefono"} display={phoneNumber} />
            </div>
            <div className="tus-datos-section-container">
              <h3 className="info-title">Situación</h3>
              <UserInfoTag label={"Profesión"} display={occupation} />
              {institution && (
                <UserInfoTag label={"Institucion"} display={institution} />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default TusDatos;

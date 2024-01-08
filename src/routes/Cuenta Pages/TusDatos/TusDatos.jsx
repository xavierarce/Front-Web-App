import React, { useContext } from "react";
import "./TusDatos.css";
import { FakeUser } from "../../../AssetsFakeData";
import UserInfoTag from "../../../components/UserInfoTag/UserInfoTag";
import { AuthContext } from "../../../Context/Login.context";

function TusDatos() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const {
    name,
    lastname,
    email,
    nationality,
    profession,
    institution,
    phoneNumber,
    profilePic,
  } = currentUser;
  return (
    <section className="tus-datos-page">
      <img className="tus-datos-foto" alt="Profile" src={profilePic} />
      <div className="tus-datos-info-container">
        <header className="tus-datos-header">
          <h2 className="tus-datos-name">
            {name} {lastname}
          </h2>
          <p className="tus-datos-nacionalidad">{nationality}</p>
        </header>
        <div className="tus-datos-datas-inputs-container">
          <div className="tus-datos-modificar-container">
            <button className="tus-datos-modificar">Modificar</button>
          </div>
          <div className="tus-datos-section-container">
            <h3 className="info-title">Coordenadas</h3>
            <UserInfoTag label={"Email"} display={email} />
            <UserInfoTag label={"Telefono"} display={phoneNumber} />
          </div>
          <div className="tus-datos-section-container">
            <h3 className="info-title">Situación</h3>
            <UserInfoTag label={"Profesión"} display={profession} />
            <UserInfoTag label={"Institucion"} display={institution} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TusDatos;

import React from "react";
import "./TusDatos.css";
import FotoUsuario from "../../assets/Usuario foto.svg";
import FormInput from "../../components/FormInput/FormInput";
import UserInfoTag from "../../components/UserInfoTag/UserInfoTag";
import { FakeUser } from "../../AssetsFakeData";

console.log(FakeUser, "sd");

function TusDatos() {
  const { name, email, nacionality, profession, institution, phoneNumber, profilePic } =
    FakeUser;
  return (
    <section className="tus-datos-page">
      <img className="tus-datos-foto" alt="Profile" src={profilePic} />
      <div className="tus-datos-info-container">
        <header className="tus-datos-header">
          <h2 className="tus-datos-name">Xavier Arce Completo</h2>
          <p className="tus-datos-nacionalidad">Nacionalidad</p>
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
            <UserInfoTag label={'Profesión'} display={profession}/>
            <UserInfoTag label={'Institucion'} display={institution}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TusDatos;

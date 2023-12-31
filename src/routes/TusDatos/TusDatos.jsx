import React from "react";
import "./TusDatos.css";
import FotoUsuario from "../../assets/Usuario foto.svg";
import FormInput from "../../components/FormInput/FormInput";

function TusDatos() {
  return (
    <section className="tus-datos-page">
      <img className="tus-datos-foto" alt="Profile" src={FotoUsuario} />
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
            <FormInput
              label={"Email"}
              type={"email"}
              placeholder={"Email"}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
            />
            <FormInput
              label={"Telefono"}
              type={"phone"}
              placeholder={"Telefono"}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
            />
          </div>
          <div className="tus-datos-section-container">
            <h3 className="info-title">Situación</h3>
            <FormInput
              label={"Profesion"}
              type={"text"}
              placeholder={"Profesion"}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
            />
            <FormInput
              label={"Institucion"}
              type={"text"}
              placeholder={"Institucion"}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TusDatos;

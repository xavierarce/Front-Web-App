import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <h2 className="NavBar-Name">Tu Hogar Seguro</h2>
      <div className="Nav-Links">
        <div className="Nav-Sections">
          <div className="NavBar-Sections-Item">Articulos</div>
          <div className="NavBar-Sections-Item">Quienes somos</div>
          <div className="NavBar-Sections-Item">Contactanos</div>
        </div>
        <div className="NavBar-Buttons">
          <div className="NavBar-SignIn-Container">
            <h2 className="NavBar-SignIn-Button">Eres Propietario?</h2>
          </div>
          <div className="NavBar-SignIn-Container">
            <h2 className="NavBar-SignIn-Button">Inicia Seción</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

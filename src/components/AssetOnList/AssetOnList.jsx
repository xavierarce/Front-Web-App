import CartButton from "./CartButton";
import IconCarList from "./IconCartList";
import './AssetOnlIst.css'

function AssetOnList() {
  return (
    <div className="bien-en-lista">
      <div className="texto-bien">
        <div className="title-description">
          <div className="titulo-direccion">
            <div className="nombre-principal">Nombre Principal</div>
            <div className="div">Area (aprox)</div>
          </div>
          <p className="lorem-ipsum-dolor">
            Lorem Ipsum Dolor Sit Amet Consectetur. Semper Nulla Tortor
            Imperdiet Et Etiam. Leo Nunc Quam Purus Magnis Quis Justo. Lorem
            Ipsum Dolor Sit Amet Consectetur. Semper Nulla Tortor Imperdiet Et
            Etiam. Leo Nunc Quam Purus Magnis Quis Justo.
          </p>
        </div>
        <div className="icons">
          <IconCarList
            className="icon-car-list-instance"
            divClassName="design-component-instance-node"
          />
          <IconCarList
            className="icon-car-list-2"
            divClassName="design-component-instance-node"
          />
          <IconCarList
            className="icon-car-list-3"
            divClassName="design-component-instance-node"
          />
          <IconCarList
            className="icon-car-list-4"
            divClassName="design-component-instance-node"
          />
          <IconCarList
            className="icon-car-list-5"
            divClassName="design-component-instance-node"
          />
          <IconCarList
            className="icon-car-list-6"
            divClassName="design-component-instance-node"
          />
          <IconCarList
            className="icon-car-list-7"
            divClassName="design-component-instance-node"
          />
          <IconCarList
            className="icon-car-list-8"
            divClassName="design-component-instance-node"
          />
        </div>
        <div className="botones">
          <CartButton
            className="car-button"
            divClassName="cart-button-instance"
            text="Caracteristicas"
          />
          
          <CartButton
            className="price-tag"
            divClassName="price-tag-2"
            text="$000"
          />
        </div>
      </div>
      <img className="rectangle" alt="Rectangle" src="rectangle-13.png" />
    </div>
  );
}

export default AssetOnList;

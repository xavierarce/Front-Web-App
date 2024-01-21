import "./QuienesSomosPage.css";
import LogoCompleto from "../../../assets/Logo-Completo.svg";

const QuienesSomosPage = () => {
  return (
    <div className="quienes-somos-page">
      <img
        className="quienes-somos-image"
        src={LogoCompleto}
        alt={"Hogar-Seguro"}
      />
      <p className="quienes-somos-description">
        En Punto Inmobiliario, forjamos una historia de más de dos décadas
        dedicadas a crear hogares. Empezamos como una empresa familiar,
        comprometidos con la visión de ofrecer seguridad y compañía emocional a
        quienes buscaban su refugio perfecto.
      </p>

      <p className="quienes-somos-description">
        Hace ocho años, nos unimos a una nueva colaboradora, lo que amplió
        nuestra capacidad para ofrecer servicios de calidad. Actualmente, con un
        enfoque informático, estamos guiando a Punto Inmobiliario hacia la
        modernidad, introduciendo la empresa a la era digital. Estamos
        comprometidos a ofrecer una plataforma online segura y eficiente.
      </p>

      <p className="quienes-somos-description">
        Nuestra misión es ir más allá de las transacciones inmobiliarias;
        aspiramos a ser el faro que ilumina el camino hacia propiedades seguras
        y accesibles para todos en Ecuador. Comprendemos los desafíos de
        seguridad en el país y hemos decidido migrar la mayoría de nuestras
        operaciones al mundo digital, redefiniendo cómo se llevan a cabo las
        transacciones inmobiliarias, eliminando preocupaciones y riesgos
        asociados con el entorno físico.
      </p>
      <p className="quienes-somos-description">
        En Punto Inmobiliario, nos comprometemos a proporcionar el mejor
        servicio posible, utilizando nuestra experiencia y un deseo genuino de
        ayudar a las personas a encontrar su hogar ideal. Buscamos transformar
        hogares y la forma en que se construye la seguridad en cada transacción
        inmobiliaria en Ecuador.
      </p>
    </div>
  );
};

export default QuienesSomosPage;

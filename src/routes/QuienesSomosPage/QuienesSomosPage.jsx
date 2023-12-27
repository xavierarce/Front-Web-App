import "./QuienesSomosPage.css";

const img1 =
  "https://media.istockphoto.com/id/1186618062/photo/real-estate-investment-real-estate-value.jpg?s=612x612&w=0&k=20&c=X-o8bBZaW0uohle3OxUipQrqaxpDwereL969wJ2mQSI=";
const img2 =
  "https://i.pinimg.com/736x/32/59/75/3259751eb4e94902b24f302c29da7ddb.jpg";
const img3 =
  "https://www.shutterstock.com/image-photo/real-estate-agent-offer-house-260nw-363324191.jpg";
const img4 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmQpBwkUrmf_bznftjq1bx5Sg1fdGy1Z2iQ&usqp=CAU";
const img5 =
  "https://us.123rf.com/450wm/tascha1/tascha12005/tascha1200500278/148410851-two-confident-business-man-shaking-hands-during-a-meeting-in-the-office-success-dealing-greeting-and.jpg?ver=6";

function QuienesSomosPage() {
  return (
    <div className="quienes-somos-page">
      <h2 className="quienes-somos-title">Sobre Nosotros</h2>

      <div className="quienes-somos-section">
        <img className="quienes-somos-image" src={img1} alt={img1} />
        <p className="quienes-somos-description">
          Somos Punto Inmobiliario, una agencia inmobiliaria con más de 20 años
          de experiencia en el mercado. Iniciamos como una empresa familiar,
          fundada por mi madre, quien ha dedicado dos décadas al mundo
          inmobiliario, brindando seguridad y compañía emocional a aquellos que
          buscan su hogar perfecto.
        </p>
      </div>

      <div className="quienes-somos-section">
        <p className="quienes-somos-description">
          Hace aproximadamente 8 años, se unió a nosotros una amiga cercana de
          mi madre, ampliando nuestra capacidad para ofrecer servicios de
          calidad. Ahora, con mi formación en informática, estoy llevando a
          Punto Inmobiliario al siguiente nivel, impulsando la empresa hacia la
          era digital y ofreciendo una plataforma online segura y eficiente.
        </p>
        <img className="quienes-somos-image" src={img2} alt={img2} />
      </div>

      <div className="quienes-somos-section">
        <img className="quienes-somos-image" src={img3} alt={img3} />
        <p className="quienes-somos-description">
          Nuestra misión es brindar seguridad y comodidad a quienes buscan
          alquilar o comprar propiedades en Ecuador. Queremos eliminar las
          preocupaciones de seguridad al hacer que todo el proceso sea accesible
          en línea. Desde la búsqueda de candidatos hasta la exhibición de
          propiedades, todo se realiza de manera segura y eficiente en nuestra
          plataforma.
        </p>
      </div>

      <div className="quienes-somos-section">
        <p className="quienes-somos-description">
          Entendemos los desafíos de seguridad que enfrentamos en nuestro país,
          por eso hemos decidido llevar la mayoría de nuestras operaciones al
          mundo digital. Queremos proteger a nuestros clientes, propietarios y a
          nosotros mismos de las amenazas y riesgos asociados con transacciones
          físicas.
        </p>
        <img className="quienes-somos-image" src={img4} alt={img4} />
      </div>

      <div className="quienes-somos-section">
        <img className="quienes-somos-image" src={img5} alt={img5} />
        <p className="quienes-somos-description">
          Nuestro compromiso es proporcionar el mejor servicio posible,
          aprovechando nuestra experiencia y el deseo genuino de ayudar a las
          personas a encontrar su hogar ideal. Al simplificar el proceso para
          los propietarios y mantener a salvo a nuestros clientes, buscamos
          revolucionar la forma en que se llevan a cabo las transacciones
          inmobiliarias en Ecuador.
        </p>
      </div>
    </div>
  );
}

export default QuienesSomosPage;

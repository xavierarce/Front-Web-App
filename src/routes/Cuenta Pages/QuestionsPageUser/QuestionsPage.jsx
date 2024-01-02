import CustomButton from "../../../components/CustomButton/CustomButton";
import "./QuestionsPageUser.css";

const Conversations = [
  {
    Title: "Encontrando el Hogar Perfecto",
    LastMessage: "¿Qué características son imprescindibles para tu nuevo apartamento?",
    imageURL: "https://api.slingacademy.com/public/sample-photos/1.jpeg",
  },
  {
    Title: "Decoración de Interiores",
    LastMessage: "¿Alguna recomendación para la decoración de mi nuevo apartamento?",
    imageURL: "https://api.slingacademy.com/public/sample-photos/2.jpeg",
  },
  {
    Title: "Consejos para Mudarse",
    LastMessage: "¿Cuáles son tus mejores consejos para hacer una mudanza sin problemas?",
    imageURL: "https://api.slingacademy.com/public/sample-photos/3.jpeg",
  },
  // Add more conversation titles and last messages as needed
];

function QuestionsPageUser() {
  return (
    <div className="favoritos-section">
      <h2 className="favoritos-page-title">Tus preguntas</h2>
      <div className="favorito-page-favoritos-container">
        {Conversations.map((conversation, idx) => {
          return (
            <div key={idx} className="favorito-page-card">
              <div className="favorito-page-card-description">
                <h3>{conversation.Title}</h3>
                <p>Last Message: {conversation.LastMessage}</p>
                <CustomButton
                  content={"Join Conversation"}
                  pattern={"blue-small"}
                />
              </div>
              <img
                className="favorito-page-img"
                alt={`${conversation.title}`}
                src={conversation.imageURL}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionsPageUser;

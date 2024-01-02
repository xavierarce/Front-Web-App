import ContactanosForm from "../../../components/ContactanosForm/ContactanosForm";
import "./ContactanosPage.css";

function ContactanosPage() {
  return (
    <div className="contact-page">
      <h2 className="contact-page-title">¡Contáctanos!</h2>
      <p className="contact-page-subtitle">
        ¿Tienes alguna duda? <br /> No dudes en contactarnos, estamos aquí para ayudarte a conseguir lo que necesitas.
      </p>
      <ContactanosForm />
    </div>
  );
}

export default ContactanosPage;

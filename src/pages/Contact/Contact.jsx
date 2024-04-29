// Importando Imagens:
import ImageWhatsapp from "../../assets/iconWhatsapp.svg";

// Importando CSS:
import styles from "../Contact/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContainerInfosLeft}>
        <h3>Preparado para começar sua jornada?</h3>
        <p>
          Clique no botão ao lado para conversar <br />
          com um de nossos atendentes.
        </p>
      </div>
      <div className={styles.contactContainerInfosRight}>
        <p>Falar com consultor</p>
        <img src={ImageWhatsapp} alt="Imagem da logom do WhatsApp" />
      </div>
    </div>
  );
};

export default Contact;

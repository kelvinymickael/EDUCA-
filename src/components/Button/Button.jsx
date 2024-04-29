// Importando Icons:
import { PiArrowRightThin } from "react-icons/pi";

// Importando CSS:
import styles from "../Button/Button.module.css";

const Button = ({ contentButton }) => {
  return (
    <button>
      {contentButton}
      {contentButton === "Conheça os cursos" ? <PiArrowRightThin /> : null}
    </button>
  );
};

export default Button;

// Importando Components:
import Button from "../../components/Button/Button";

// Importando Imagem:
import heroBanner from "../../assets/heroBanner.png";

// Importando CSS:
import styles from "../Home/Home.module.css";

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.homeContainerInfosText}>
        <p>
          <span>50% off</span> comece hoje mesmo
        </p>
        <h1>
          Estude onde <br />e quando quiser
        </h1>
        <p>
          Aprenda a inovar e alcance sues objetivos com nossa <br />
          escola de cursos de tecnologia de ponta.
        </p>
        <Button contentButton={"Conheça os cursos"} />
      </div>
      <div className={styles.homeContainerInfosImage}>
        <img src={heroBanner} alt="Imagem de uma mulher segurando um tablet" />
      </div>
    </section>
  );
};

export default Home;

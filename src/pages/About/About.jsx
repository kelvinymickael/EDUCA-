// Importando Components:
import Button from "../../components/Button/Button";

// Importando Imagem:
import imgWoman from "../../assets/imgAbout.png";

// Importando CSS:
import styles from "../About/About.module.css";

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutContainerInfosLeft}>
        <img src={imgWoman} alt="Imagem de uma mulher segurando livros" />
      </div>
      <div className={styles.aboutContainerInfosRight}>
        <h2>
          Construa seu futuro em uma das melhor escolas de tecnologia do Brasil
        </h2>
        <p>
          Nossa escola de cursos de tecnologia oferece programas de formação de
          alta qualidade para ajudar os alunos a alcançarem seus objetivos e se
          destacarem no mercado. Com uma equipe de instrutores altamente
          qualificados e tecnologias avançadas, nós preparamos nossos alunos
          para o futuro da tecnologia.
        </p>
        <Button contentButton={"Matricular agora!"} />
      </div>
    </section>
  );
};

export default About;

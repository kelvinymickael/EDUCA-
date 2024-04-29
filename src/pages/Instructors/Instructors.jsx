// Importando Imagens:
import ImageEmilyDavis from "../../assets/imgWoman.png"

// Importando CSS:
import styles from "../Instructors/Instructors.module.css";

const Instructors = () => {
  return (
    <section className={styles.instructContainer}>
      <h2>nossos instrutores</h2>
      <div className={styles.instructContainerCards}>
        <article className={styles.instructContainerCard}>
          <img src={ImageEmilyDavis} alt="Imagem de uma mulher com óculos sorrindo" />
          <span>Emily Davis</span>
        </article>
        <article className={styles.instructContainerCard}>
          <img src={ImageEmilyDavis} alt="Imagem de uma mulher com óculos sorrindo" />
          <span>Emily Davis</span>
        </article>
        <article className={styles.instructContainerCard}>
          <img src={ImageEmilyDavis} alt="Imagem de uma mulher com óculos sorrindo" />
          <span>Emily Davis</span>
        </article>
        <article className={styles.instructContainerCard}>
          <img src={ImageEmilyDavis} alt="Imagem de uma mulher com óculos sorrindo" />
          <span>Emily Davis</span>
        </article>
        <p>Nossos professores são os melhores do mercado, com anos de experiência e conhecimento profundo em suas áreas de especialização. Eles estão comprometidos em fornecer aos nossos alunos a melhor educação possível, com uma abordagem inovadora e personalizada para o ensino. Venha descobrir por si mesmo por que nossos professores são considerados os melhores do setor.</p>
        <article className={styles.instructContainerCard}>
          <img src={ImageEmilyDavis} alt="Imagem de uma mulher com óculos sorrindo" />
          <span>Emily Davis</span>
        </article>
        <article className={styles.instructContainerCard}>
          <img src={ImageEmilyDavis} alt="Imagem de uma mulher com óculos sorrindo" />
          <span>Emily Davis</span>
        </article>
        <article className={styles.instructContainerCard}>
          <img src={ImageEmilyDavis} alt="Imagem de uma mulher com óculos sorrindo" />
          <span>Emily Davis</span>
        </article>
        <article className={styles.instructContainerCard}>
          <img src={ImageEmilyDavis} alt="Imagem de uma mulher com óculos sorrindo" />
          <span>Emily Davis</span>
        </article>
      </div>
    </section>
  );
};

export default Instructors;

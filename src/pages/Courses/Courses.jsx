// Importando Imagens:
import ImageClassRooom from "../../assets/kidsinschool.png";
import ImageIconsStars from "../../assets/starsicon.png";

// Importando CSS:
import styles from "../Courses/Courses.module.css";

const Courses = () => {
  return (
    <section className={styles.coursesContainer}>
      <h2>cursos em destaque</h2>
      <div className={styles.coursesContainerCards}>
        <article className={styles.coursesContainerCard}>
          <img src={ImageClassRooom} alt="Crianças na sala de aula" />
          <p>Análise e desenvolvimento de sistemas</p>
          <div className={styles.coursesContainerPriceAndAvaliation}>
            <span>R$ 299,00</span>
            <div>
              <img src={ImageIconsStars} alt="Imagens de estrelas" />
            </div>
          </div>
        </article>
        <article className={styles.coursesContainerCard}>
          <img src={ImageClassRooom} alt="Crianças na sala de aula" />
          <p>Análise e desenvolvimento de sistemas</p>
          <div className={styles.coursesContainerPriceAndAvaliation}>
            <span>R$ 299,00</span>
            <div>
              <img src={ImageIconsStars} alt="Imagens de estrelas" />
            </div>
          </div>
        </article>
        <article className={styles.coursesContainerCard}>
          <img src={ImageClassRooom} alt="Crianças na sala de aula" />
          <p>Análise e desenvolvimento de sistemas</p>
          <div className={styles.coursesContainerPriceAndAvaliation}>
            <span>R$ 299,00</span>
            <div>
              <img src={ImageIconsStars} alt="Imagens de estrelas" />
            </div>
          </div>
        </article>
        <article className={styles.coursesContainerCard}>
          <img src={ImageClassRooom} alt="Crianças na sala de aula" />
          <p>Análise e desenvolvimento de sistemas</p>
          <div className={styles.coursesContainerPriceAndAvaliation}>
            <span>R$ 299,00</span>
            <div>
              <img src={ImageIconsStars} alt="Imagens de estrelas" />
            </div>
          </div>
        </article>
        <article className={styles.coursesContainerCard}>
          <img src={ImageClassRooom} alt="Crianças na sala de aula" />
          <p>Análise e desenvolvimento de sistemas</p>
          <div className={styles.coursesContainerPriceAndAvaliation}>
            <span>R$ 299,00</span>
            <div>
              <img src={ImageIconsStars} alt="Imagens de estrelas" />
            </div>
          </div>
        </article>
        <article className={styles.coursesContainerCard}>
          <img src={ImageClassRooom} alt="Crianças na sala de aula" />
          <p>Análise e desenvolvimento de sistemas</p>
          <div className={styles.coursesContainerPriceAndAvaliation}>
            <span>R$ 299,00</span>
            <div>
              <img src={ImageIconsStars} alt="Imagens de estrelas" />
            </div>
          </div>
        </article>
        <article className={styles.coursesContainerCard}>
          <img src={ImageClassRooom} alt="Crianças na sala de aula" />
          <p>Análise e desenvolvimento de sistemas</p>
          <div className={styles.coursesContainerPriceAndAvaliation}>
            <span>R$ 299,00</span>
            <div>
              <img src={ImageIconsStars} alt="Imagens de estrelas" />
            </div>
          </div>
        </article>
        <article className={styles.coursesContainerCard}>
          <img src={ImageClassRooom} alt="Crianças na sala de aula" />
          <p>Análise e desenvolvimento de sistemas</p>
          <div className={styles.coursesContainerPriceAndAvaliation}>
            <span>R$ 299,00</span>
            <div>
              <img src={ImageIconsStars} alt="Imagens de estrelas" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Courses;

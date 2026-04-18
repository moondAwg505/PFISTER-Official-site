import Title from "../../components/ui/Title/title";
import styles from "./about.module.css";
import React from "react";

interface IAboutId {
  id?: string;
}

export const About: React.FC<IAboutId> = ({ id }) => {
  return (
    <section id={id} className={styles.about_section}>
      <Title className={styles.white_title}>Company</Title>
      <article className={styles.block_text}>
        <p className={styles.text}>
          Since 1948, we have been creating more than just cars - we have been
          crafting engineering masterpieces. Our mission is to deliver absolute
          control and timeless design, all while maintaining a sensible price.
        </p>
        <p className={styles.text}>
          We stay at the forefront of technology, creating more sophisticated
          and breathtaking vehicles with every passing year.
        </p>
        <p className={styles.text}>
          Let PFISTER be your first true sports car.
        </p>
      </article>
    </section>
  );
};

export default About;

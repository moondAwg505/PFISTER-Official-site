import styles from "./hero.module.css";
import { Logo } from "../../components/ui/Logo";
import neonImage from "../../assets/Image/Pfister_Neon.jpg";
import React from "react";

export const Hero = () => {
    return (
  <section className={styles.section}>
    <article className={styles.position_text}>
    <Logo className={styles.hero_logo}/>
    <p className={styles.hero_text}>Neon</p>
    </article>
    <img className={styles.neon} src={neonImage} alt="Pfister Neon" />
  </section>
    )
};

export default Hero

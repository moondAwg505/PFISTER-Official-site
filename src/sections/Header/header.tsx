import styles from "./header.module.css";
import { Logo } from "../../components/ui/Logo";
import React from "react";

export const Header: React.FC = () => {
  // Функция якоря для кнопок
  const scrollToElement = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={styles.header}>
      <Logo className={styles.header_logo} />
      <button
        className={styles.button}
        onClick={() => scrollToElement("company")}
      >
        Company
      </button>
      <button
        className={styles.button}
        onClick={() => scrollToElement("model")}
      >
        Model
      </button>
      <button
        className={styles.button}
        onClick={() => scrollToElement("other_models")}
      >
        Other models
      </button>
      <button
        className={styles.button}
        onClick={() => scrollToElement("support")}
      >
        Support
      </button>
    </header>
  );
};

export default Header;

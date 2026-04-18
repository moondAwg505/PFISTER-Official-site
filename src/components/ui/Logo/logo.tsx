import styles from "./logo.module.css";

// Интрейфей класса, что бы прописать стили для логотипа в разных компонентах
interface ILogoProps {
  className?: string;
}

export const Logo: React.FC<ILogoProps> = ({ className }) => {
  return (
    <a
      href="#"
      className={`${styles.logo_default} ${className || ""}`}
      aria-label="Pfister Home"
    >
      PFISTER
    </a>
  );
};

export default Logo;

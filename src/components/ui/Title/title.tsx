import styles from "./title.module.css";
import React from "react";

// Передаём пропсы в компонента, чтобы не переписывать его при каждом изменении текста в заголовке
interface ITitleProps {
  children: React.ReactNode;
  className?: string;
}

// Универсальный компонент заголовка
export const Title: React.FC<ITitleProps> = ({ children, className }) => {
  return (
    <h2 className={`${styles.title_default} ${className || ""}`}>{children}</h2>
  );
};

export default Title;

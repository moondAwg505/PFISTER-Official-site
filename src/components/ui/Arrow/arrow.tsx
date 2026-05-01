// Создание стрелдолчек для слайдера
import style from "./arrow.module.css";
import React from "react";

// Что будет принимать компонет
interface IArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

export const Arrow = ({ direction, onClick }: IArrowProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${style.arrowBtn} ${style[direction]}`}
      aria-label={`Arrow ${direction}`}
    />
  );
};

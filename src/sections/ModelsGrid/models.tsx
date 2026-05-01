import { Title } from "../../components/ui/Title";
import styles from "./models.module.css";
import React from "react";

// Импорт изображений
import cometImg from "../../assets/Image/Pfister_Comet_S2.jpg";
import growlerImg from "../../assets/Image/Pfister_Growler.jpg";
import astronImg from "../../assets/Image/Pfister_Astron.jpg";
import neon2Img from "../../assets/Image/Pfister_Neon_2.jpg";

interface IModelId {
  id?: string;
}

export const ModelGrid: React.FC<IModelId> = ({id}) => {
  const Model = [
    { name: "Comet", img: cometImg },
    { name: "Growler", img: growlerImg },
    { name: "Astron", img: astronImg },
    { name: "Neon", img: neon2Img },
  ];

  return (
    <section id={id} className={styles.modelSection}>
      <Title className={styles.titleModelSection}>Model</Title>
      <article className={styles.modelGrid}>
          {Model.map((car) => (
            <div key={car.name} className={styles.modelsItem}>
              <img className={styles.itemImg} src={car.img} alt={car.name} />
              <h3 className={styles.itemTitle}>{car.name}</h3>
            </div>
          ))}
      </article>
    </section>
  );
};
import { Title } from "../../components/ui/Title";
import styles from "./models.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

// Импорт изображений
import cometImg from "../../assets/Image/Pfister_Comet_S2.jpg";
import growlerImg from "../../assets/Image/Pfister_Growler.jpg";
import astronImg from "../../assets/Image/Pfister_Astron.jpg";
import neon2Img from "../../assets/Image/Pfister_Neon_2.jpg";

interface IModelId {
  id?: string;
}

export const ModelGrid: React.FC<IModelId> = ({ id }) => {

  const navigate = useNavigate()
  const Model = [
    { name: "Comet", img: cometImg },
    { name: "Growler", img: growlerImg },
    { name: "Astron", img: astronImg },
    { name: "Neon", img: neon2Img },
  ];

  const handleCardClick = (carName: string) => {
    navigate(`/models${carName.toLowerCase()}`)
  }

  return (
    <section id={id} className={styles.modelSection}>
      <Title className={styles.titleModelSection}>Models</Title>
      <article className={styles.modelGrid}>
        {Model.map((car) => (
          <div key={car.name} className={styles.modelsItem} onClick={() => handleCardClick(car.name)}>
            <div className={styles.itemInner}>
              <img className={styles.itemImg} src={car.img} alt={car.name} />
              <h3 className={styles.itemTitle}>{car.name}</h3>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default ModelGrid
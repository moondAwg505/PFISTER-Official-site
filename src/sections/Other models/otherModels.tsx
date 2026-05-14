// Импорты
import { Arrow } from "../../components/ui/Arrow";
import { Title } from "../../components/ui/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import React, { useRef } from "react";
import "swiper/css";
import style from "./otherModels.module.css";

// Импорт изображений
import xtremeImg from "../../assets/Image/Pfister_X-treme.jpg";
import astraleImg from "../../assets/Image/Pfister_Astrale.jpg";
import red811Img from "../../assets/Image/Pfister_811.jpg";
import { Logo } from "../../components/ui/Logo";

interface IOtherModelId {
  id?: string;
}

// Массив авто
const cars = [
  { id: 1, name: "X-treme", img: xtremeImg },
  { id: 2, name: "Astrale", img: astraleImg },
  { id: 3, name: "811", img: red811Img },
];

export const OtherModels: React.FC<IOtherModelId> = ({ id }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section id={id} className={style.sectionSlider}>
      <Title className={style.sectionSliderTitle}>Other models</Title>
      <div className={style.sliderWrapper}>
        {/* Кастомные стрелки для слайдера */}
        <div className={style.navigation}>
          <Arrow
            direction="left"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <Arrow
            direction="right"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
        {/* Настройка слайдера */}
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          className={style.slider}
        >
          {/* Слайдер */}
          {cars.map((car) => (
            <SwiperSlide key={car.id}>
              <div className={style.sliderItem}>
                <img src={car.img} alt={car.name} className={style.sliderImg} />
                <div className={style.textOverlay}>
                  <Logo className={style.slider_item_logo} />
                  <h3 className={style.sliderTitle}>{car.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

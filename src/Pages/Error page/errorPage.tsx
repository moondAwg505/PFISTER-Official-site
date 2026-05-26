import React from "react";
import Footer from "../../sections/Footer/footer";
import { Title } from "../../components/ui/Title";
import style from "./errorPage.module.css";

import cometErrorImg from "../../assets/Image/Pfister_Error_404.png";

export const ErrorPage = () => {
  return (
    <div className={style.errorSection}>
    <section className={style.errorItemSection}>
      <Title className={style.errorTitle}>Oops!</Title>
      <img className={style.errorPfister} src={cometErrorImg} alt="Error 404" />
      <p className={style.errorText}>Page not found</p>
    </section>
    <Footer/>
    </div>
  );
};

import style from "./footer.module.css";
import { Logo } from "../../components/ui/Logo";
import React from "react";

interface IFooter {
  id?: string;
}

export const Footer: React.FC<IFooter> = ({ id }) => {
  // Зпрашивает актульную дату
  const currentYear = new Date().getFullYear();

  return (
    <section id={id} className={style.footer_section}>
      <a className={style.email} href="mailto:pfistercomp@gmail.com">
        pfistercomp@gmail.com
      </a>
      <Logo className={style.footer_logo} />
      <p className={style.copirate_company}>©{currentYear} Pfister company</p>
    </section>
  );
};

export default Footer;

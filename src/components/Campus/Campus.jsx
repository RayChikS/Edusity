import React from "react";
import css from "./Campus.module.css";
import { Title } from "../Title/Title";
import gallery1 from "../../assets/gallery-1.png";
import gallery2 from "../../assets/gallery-2.png";
import gallery3 from "../../assets/gallery-3.png";
import gallery4 from "../../assets/gallery-4.png";
import arrow from "../../assets/white-arrow.png";

export const Campus = () => {
  return (
    <div className={css.campus} id="campus">
      <Title subtitle="Gallery" title="Campus Photos" />
      <ul className={css.campusList}>
        <li className={css.listItem}>
          <img className={css.listImg} src={gallery1} alt="image" />
        </li>
        <li className={css.listItem}>
          <img className={css.listImg} src={gallery2} alt="image" />
        </li>
        <li className={css.listItem}>
          <img className={css.listImg} src={gallery3} alt="image" />
        </li>
        <li className={css.listItem}>
          <img className={css.listImg} src={gallery4} alt="image" />
        </li>
      </ul>
      <button className={`btn ${css.darkBtn}`}>
        See more here
        <img src={arrow} alt="arrow icon" />
      </button>
    </div>
  );
};

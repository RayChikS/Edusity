import React from "react";
import css from "./Title.module.css";

export const Title = ({ subtitle, title }) => {
  return (
    <div className={css.titleContent}>
      <p className={css.subtitle}>{subtitle}</p>
      <h2 className={css.title}>{title}</h2>
    </div>
  );
};

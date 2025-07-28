import React from "react";
import css from "./Hero.module.css";
import darkArrow from "../../assets/dark-arrow.png";

export const Hero = () => {
  return (
    <div className={css.hero}>
      <div className="container">
        <div className={css.heroText}>
          <h1 className={css.title}>
            We Ensure better aducation for a better world
          </h1>
          <p className={css.subtitle}>
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education
          </p>
          <button className="btn">
            Explore more <img className="btnImg" src={darkArrow} alt="dark arrow icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import css from "./About.module.css";
import aboutPng from "../../assets/about.png";
import playIcon from "../../assets/play-icon.png";

export const About = () => {
  return (
    <div className={css.about} id="about">
      <div className={css.aboutLeft}>
        <img className={css.aboutImg} src={aboutPng} alt="about" />
        <img className={css.playIcon} src={playIcon} alt="about" />
      </div>
      <div className={css.aboutRight}>
        <h3 className={css.aboutSubtitle}>ABOUT UNIVERSITY</h3>
        <h2 className={css.aboutTitle}>Nurturing Tomorrow's Leaders Today</h2>
        <p className={css.aboutText}>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needeaboutS to excel in the dynamic field of education.
        </p>
        <p className={css.aboutText}>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impactaboutSin classrooms, schools, and communities.
        </p>
        <p className={css.aboutText}>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

import React from "react";
import css from "./Programs.module.css";
import program1 from "../../assets/program-1.png";
import program2 from "../../assets/program-2.png";
import program3 from "../../assets/program-3.png";
import programIcon1 from "../../assets/program-icon-1.png";
import programIcon2 from "../../assets/program-icon-2.png";
import programIcon3 from "../../assets/program-icon-3.png";
import { Title } from "../Title/Title";

export const Programs = () => {
  return (
    <div className={css.programs} id="program">
      <Title subtitle="Our PROGRAMS" title="What We Offer" />
      <ul className={css.programsList}>
        <li className={css.programListItem}>
          <img className={css.programItemImg} src={program1} alt="card" />
          <div className={css.caption}>
            <img className={css.captionIcon} src={programIcon1} alt="icon" />
            <p className={css.captionText}>Graduation Degree</p>
          </div>
        </li>
        <li className={css.programListItem}>
          <img className={css.programItemImg} src={program2} alt="card" />
          <div className={css.caption}>
            <img className={css.captionIcon} src={programIcon2} alt="icon" />
            <p className={css.captionText}>Masters Degree</p>
          </div>
        </li>
        <li className={css.programListItem}>
          <img className={css.programItemImg} src={program3} alt="card" />
          <div className={css.caption}>
            <img className={css.captionIcon} src={programIcon3} alt="icon" />
            <p className={css.captionText}>Post Graduation</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

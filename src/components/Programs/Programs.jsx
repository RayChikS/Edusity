import React from "react";
import css from "./Programs.module.css";
import program1 from "../../assets/program-1.png";
import program2 from "../../assets/program-2.png";
import program3 from "../../assets/program-3.png";

export const Programs = () => {
  return (
    <div className={css.programs}>
      <ul>
        <li className={css.program}>
          <img src="" alt="" />
        </li>
        <li className={css.program}>
          <img src="" alt="" />
        </li>
        <li className={css.program}>
          <img src="" alt="" />
        </li>
      </ul>
    </div>
  );
};

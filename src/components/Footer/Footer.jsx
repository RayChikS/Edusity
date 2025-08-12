import React from "react";
import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <p>© 2024 Edusity. All rights reserved.</p>
      <ul className={css.terms}>
        <li className={css.termsItem}>
          <a href="#">Terms of Services</a>
        </li>
        <li className={css.termsItem}>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
    </footer>
  );
};

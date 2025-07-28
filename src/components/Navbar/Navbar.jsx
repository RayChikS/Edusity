import React from "react";
import css from "./Navbar.module.css";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="container">
      <img className={css.logo} src={logo} alt="logo image" />
      <ul className={css.navList}>
        <li className={css.navListItem}>Home</li>
        <li className={css.navListItem}>Program</li>
        <li className={css.navListItem}>About us</li>
        <li className={css.navListItem}>Campus</li>
        <li className={css.navListItem}>Testimonials</li>
        <li className={css.navListItem}>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

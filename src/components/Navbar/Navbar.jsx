import React, { useEffect, useState } from "react";
import css from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import burger from "../../assets/menu-icon.png";

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? css.darkBar : ""}`}>
      <img className={css.logo} src={logo} alt="logo image" />
      <ul className={`${css.navList} ${mobileMenu ? "" : css.hideMobileMenu}`}>
        <li className={css.navListItem}>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className={css.navListItem}>
          <Link to="program" smooth={true} offset={-100} duration={500}>
            Program
          </Link>
        </li>
        <li className={css.navListItem}>
          <Link to="about" smooth={true} offset={-100} duration={500}>
            About us
          </Link>
        </li>
        <li className={css.navListItem}>
          <Link to="campus" smooth={true} offset={-100} duration={500}>
            Campus
          </Link>
        </li>
        <li className={css.navListItem}>
          <Link to="testimonials" smooth={true} offset={-100} duration={500}>
            Testimonials
          </Link>
        </li>
        <li className={css.navListItem}>
          <Link to="contact" smooth={true} offset={-100} duration={500}>
            <button className="btn">Contact us</button>
          </Link>
        </li>
      </ul>
      <img
        className={css.burgerIcon}
        src={burger}
        alt="menu"
        onClick={toggleMenu}
      />
    </nav>
  );
};

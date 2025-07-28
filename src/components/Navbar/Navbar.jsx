import css from "./Navbar.module.css";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo image" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
};

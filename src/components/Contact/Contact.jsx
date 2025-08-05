import React from "react";
import css from "./Contact.module.css";
import { Title } from "../Title/Title";

export const Contact = () => {
  return (
    <div className={css.contact}>
      <Title subtitle="Contact Us" title="Get in Touch" />
    </div>
  );
};

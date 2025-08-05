import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Programs } from "./components/Programs/Programs";
import { About } from "./components/About/About";
import { Campus } from "./components/Campus/Campus";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Contact } from "./components/Contact/Contact";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Programs />
        <About />
        <Campus />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

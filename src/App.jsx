import React, { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Programs } from "./components/Programs/Programs";
import { About } from "./components/About/About";
import { Campus } from "./components/Campus/Campus";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { VideoPlayer } from "./components/VideoPlayer/VideoPlayer";

export const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Programs />
        <About setPlayState={setPlayState} />
        <Campus />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

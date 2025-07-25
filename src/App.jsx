import React from "react";
import gsap from "gsap";
import Navbar from "./components/Navbar.jsx";

import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/Hero.jsx";
import Coctails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Coctails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
};

export default App;

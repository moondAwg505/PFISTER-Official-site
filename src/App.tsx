import { About } from "./sections/About";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import React from "react";

interface IIdSectionProps {
  id?: string;
}

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About id="about" />
      {/* <ModelsGrid id="model" />
      <Other_models id="other_models" />
      <Footer id="support" /> */}
    </div>
  );
}

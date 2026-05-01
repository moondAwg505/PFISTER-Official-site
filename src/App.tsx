import { About } from "./sections/About";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { ModelGrid } from "./sections/ModelsGrid";
import React from "react";

interface IIdSectionProps {
  id?: string;
}

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About id="company" />
      <ModelGrid id="model" />
      {/* <Other_models id="other_models" />
      <Footer id="support" />  */}
    </div>
  );
}

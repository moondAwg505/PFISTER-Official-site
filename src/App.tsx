import { About } from "./sections/About";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { ModelGrid } from "./sections/ModelsGrid";
import React from "react";
import { OtherModels } from "./sections/Other models";

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
      <OtherModels id="Other models" />
      {/* <Footer id="support" />  */}
    </div>
  );
}

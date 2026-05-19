import { About } from "./sections/About";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { ModelGrid } from "./sections/ModelsGrid";
import { OtherModels } from "./sections/Other models";
import { Footer } from "./sections/Footer/footer";

interface IIdSectionProps {
  id?: string;
}

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About id="company" />
      <ModelGrid id="models" />
      <OtherModels id="other_models" />
      <Footer id="support" />
    </div>
  );
}

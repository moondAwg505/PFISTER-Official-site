import { About } from "./sections/About";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { ModelGrid } from "./sections/ModelsGrid";
import { OtherModels } from "./sections/Other models";
import { Footer } from "./sections/Footer/footer";
import { ErrorPage } from "./Pages/Error page";
import { Route, Routes } from "react-router-dom";

interface IIdSectionProps {
  id?: string;
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Hero />
            <About id="company" />
            <ModelGrid id="models" />
            <OtherModels id="other_models" />
            <Footer id="support" />
          </>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

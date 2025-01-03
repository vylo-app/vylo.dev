import "./App.css";
import { AiToolsCTA } from "./blocks/CTA/AiTools/ui";
import { CvTemplatesCTA } from "./blocks/CTA/CvTemplates/ui";
import Header from "./blocks/Header/ui";
import { HeroSection } from "./blocks/HeroSection/ui";

function App() {
  return (
    <div className="w-full pt-4">
      <Header />
      <HeroSection />
      <CvTemplatesCTA />
      <AiToolsCTA />
    </div>
  );
}

export default App;

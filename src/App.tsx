import { MainSection } from "@/components/herosection";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navbar";
function App() {
  return (
    <>
      <Navigation />
      <MainSection />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </>
  );
}

export default App;

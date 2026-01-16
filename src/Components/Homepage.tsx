import Footer from "./Footer";
import { Navigation, MainSection, Projects } from "./HeroSection";
import { Experience } from "./SectionTwo";
import { Skills } from "./Skills";

export default function Homepage() {
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

import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WorkSection } from "./components/WorkSection";
import { WritingSection } from "./components/WritingSection";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <WritingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

import AboutMe from "./about-me";
import Contacts from "./contacts";
import Introduction from "./introduction";
import Projects from "./projects";
import Skills from "./skills";

export default function Home() {
  return (
    <main className="min-h-screen relative z-0">
      <Introduction />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
    </main>
  );
}

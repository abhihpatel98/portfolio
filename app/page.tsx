import AboutMe from "./about-me";
import Contacts from "./contacts";
import Footer from "./footer";
import Introduction from "./introduction";
import Projects from "./projects";
import Skills from "./skills";

export default function Home() {
  return (
    <main>
      <Introduction />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
    </main>
  );
}

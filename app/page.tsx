import Header from "./components/Header";
import Main from "./components/Main";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import VantaBackground from "./components/VantaBackground";
import Contact from "./components/Contact";
import WorkExperiences from "./components/WorkExperiences";
import SoftSkills from "./components/SoftSkills";
import HardSkills from "./components/HardSkills";
import Education from "./components/Education";


export default function Home() {

  return (
    <VantaBackground>
    <div className="flex flex-col">
      <Header />
      <Main />
      <Resume />
      <Education />
      <WorkExperiences />
      <HardSkills />
      <SoftSkills />
      <Projects />
      <Contact />
    </div>
    </VantaBackground>
  );
}

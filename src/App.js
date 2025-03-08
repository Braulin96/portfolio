import HeroSection from "sections/HeroSection/HeroSection";
// import Navbar from "components/Navbar/Navbar";
import AboutMe from "components/AboutMe";
import MyProjects from "components/MyProjects";
import ProjectsList from "components/ProjectsList";
import Skills from "components/Skills";
import Progress from "components/Progress";
import Contact from "components/Contact";

import Navbar from "sections/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <MyProjects />
      <ProjectsList />
      <Skills />
      <Progress />
      <Contact />
    </div>
  );
}

export default App;

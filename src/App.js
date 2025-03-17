
import Navbar from "sections/Navbar/Navbar";
import HeroSection from "sections/HeroSection/HeroSection";
import AboutMe from "sections/AboutMe/AboutMe";
import MyProjects from "sections/MyProjects/MyProjects";
import Skills from "sections/Skills/Skills";
import Footer from "sections/Footer/Footer";
import ProjectsList from "sections/ProjectList/ProjectList";

function App() {
  return (
    <div className="App flex flex-col gap-y-[10px]">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <MyProjects />
      <ProjectsList />
      <Skills />
      <Footer/>
    </div>
  );
}

export default App;

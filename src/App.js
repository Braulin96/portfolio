
import Navbar from "sections/Navbar/Navbar";
import HeroSection from "sections/HeroSection/HeroSection";
import AboutMe from "sections/AboutMe/AboutMe";
import MyProjects from "sections/MyProjects/MyProjects";
import Skills from "sections/Skills/Skills";
import Footer from "sections/Footer/Footer";
import ProjectsList from "sections/ProjectList/ProjectList";
import CustomModal from "components/CustomModal/CustomModal";

function App() {
  return (
    <div className="App flex flex-col gap-y-[10px]">
      <Navbar />
      <HeroSection />
      <CustomModal/>
      <AboutMe />
      <MyProjects />
      <ProjectsList />
      <Skills />
      <Footer/>
    </div>
  );
}

export default App;

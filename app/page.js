import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Certification from "./components/Certification";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
export default function Home() {
  return (
    <main>
      <Banner />
      <About /> 
      <Skills />
      <Certification />
      <Projects />
      <Experience />
    </main>
  );
}

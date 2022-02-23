import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<>
        <Hero/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      </>} />
      <Route exact path="/about" element={<AboutMe/>} />
      <Route exact path="/skills" element={<Skills/>} />
      <Route exact path="/projects" element={<Projects/>} />
      <Route exact path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

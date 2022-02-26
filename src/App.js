import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ProjectsContainer from "./components/ProjectsContainer";
import Skills from "./components/Skills";
import Contact from "./components/Contact"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<>
          <Banner />
          <About />
          <Skills />
          <ProjectsContainer />
          <Contact />
        </>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<ProjectsContainer />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import About from "./components/About";
import React, { useState } from "react";
import Banner from "./components/Banner";
// import Navbar from "./components/Navbar";
import ProjectsContainer from "./components/ProjectsContainer";
import Skills from "./components/Skills";
import Contact from "./components/Contact"
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";

export const ThemeContext = React.createContext({});

function App() {

  const [theme,setTheme] = useState("white");

  return (

    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route exact path="/" element={

    <ThemeContext.Provider value={{theme,setTheme}}>
      <Banner />
      <Nav />
      <About />
      <Skills />
      <ProjectsContainer />
      <Contact />
    </ThemeContext.Provider>


    // } />
    //   <Route exact path="/about" element={<About />} />
    //   <Route exact path="/skills" element={<Skills />} />
    //   <Route exact path="/projects" element={<ProjectsContainer />} />
    //   <Route exact path="/contact" element={<Contact />} />
    // </Routes>
    // </BrowserRouter> */}
  );
}

export default App;

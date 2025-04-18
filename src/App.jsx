import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar.jsx"
import Home from "./sections/Home.jsx"
import AboutMe from "./sections/AboutMe.jsx"
import Projects from "./sections/Projects.jsx"
import ContactMe from "./sections/ContactMe.jsx"

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div >
  )
}

export default App

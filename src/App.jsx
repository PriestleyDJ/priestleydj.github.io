import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar.jsx"
import Home from "./sections/Home.jsx"
import AboutMe from "./sections/AboutMe.jsx"
import Projects from "./sections/Projects.jsx"
import ContactMe from "./sections/ContactMe.jsx"

function App() {
  return (
    <div>
      <div className="min-h-screen w-full flex flex-col items-center justify-center">
        <section className="min-h-screen w-full flex bg-blue-300 items-center justify-center">
          <Home />
        </section>
        <section className="min-h-screen w-full flex bg-red-300 items-center justify-center">
          <AboutMe />
        </section>
        <section className="min-h-screen w-full flex bg-green-300 items-center justify-center">
          <Projects />
        </section>
        <section className="min-h-screen w-full flex bg-yellow-300 items-center justify-center">
          <ContactMe />
        </section>
      </div>
    </div>
  )
}

export default App

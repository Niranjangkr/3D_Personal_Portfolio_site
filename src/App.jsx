import React from "react";
import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Connect, Blog } from "./components";


const App = () => {
  return (
  <BrowserRouter>
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Connect />
    <Blog/>
    {/* <Feedbacks />  */} {/*createed but not used need some changes */}
    <div className="relative z-0">
        <Contact />
        <StarsCanvas/>
    </div>
   </div>
  </BrowserRouter>
  )
}

export default App

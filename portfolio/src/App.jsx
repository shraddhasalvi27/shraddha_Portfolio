
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from './sections/About.jsx';
import Projects from "./sections/Projects.jsx";
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
const App =()=>{
  return (
    <main className="max-w-7xl mx-auto relative" >
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )

}

export default App;
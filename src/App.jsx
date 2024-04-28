
import React from 'react'
import Intro from './components/Intro.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useEffect, useState } from 'react'
import { ThemeProvider } from './context.js/Context.js'
import RingLoader from "react-spinners/ClipLoader";
function App() {
  const [themeMode, setThemeMode] = useState("dark")
 
const [loading, setLoading] = useState(false)
useEffect(()=>
{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  }, 8000)
}, [])
 const lightTheme =()=>{
  setThemeMode("light")
 }

 const darkTheme =()=>
 {
  setThemeMode("dark")
 }

 useEffect(()=>
{
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])
useEffect(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}, []);
  return (
    <>
    {
      loading ?
      <RingLoader
      color={"#0096FF"}
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
      :
<ThemeProvider value={{themeMode, lightTheme, darkTheme }}>
     <Navbar/>
     <section id="home">
     <Intro/>
     </section>

     <section id="about">
     <About/>
     <Skills/>
     </section>
     <section id="projects">
     <Projects/>
     </section>
     <section id="contact">
     <Contact/>
     </section>
     <Footer/>
     </ThemeProvider>
    }
     
    </>
  )
}

export default App

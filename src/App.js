import React from "react"
import Footer from "./Footer"
import FooterMobile from "./FooterMobile"
import AboutUs from "./AboutUs"
import AboutUsMobile from "./AboutUsMobile"
import Contact from "./Contact"
import ContactMobile from "./ContactMobile"
import Questions from "./Questions"
import QuestionsMobile from "./QuestionsMobile"
import Services from "./Services"
import ServicesMobile from "./ServicesMobile"
import WhyUs from "./WhyUs"
import WhyUsMobile from "./WhyUsMobile"
import Navbar from "./Navbar"
import LandingPage from "./LandingPage"
import LandingPageMobile from "./LandingPageMobile"
import Portfolio from "./Portfolio"

function App() {
  //render either the desktop component or mobile component start
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener("resize", function() {
      setWindowWidth(window.innerWidth)
    } 

    )}, [] )
  //To render either the desktop component or mobile component end

  //Dark mode or light mode start
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)}
  //Dark mode or light mode end

  return (

    <div className={darkMode? "container-fluid app-dark": "container-fluid app-light"}>
      <Navbar 
                                darkMode={darkMode} 
                                toggleDarkMode={toggleDarkMode}
                                />
      {windowWidth > 768 && <LandingPage 
                                darkMode={darkMode} 
                                toggleDarkMode={toggleDarkMode}
                                />}  
      {windowWidth <= 768 && <LandingPageMobile 
                                darkMode={darkMode} 
                                toggleDarkMode={toggleDarkMode}
                                />} 

      {windowWidth > 768 && <WhyUs 
                                darkMode={darkMode} 
                                toggleDarkMode={toggleDarkMode}
                                />}   
      {windowWidth <= 768 && <WhyUsMobile 
                                darkMode={darkMode} 
                                toggleDarkMode={toggleDarkMode}
                                />}  

      {windowWidth > 768 && <Services/>}  
      {windowWidth <= 768 && <ServicesMobile/>} 

      {windowWidth > 768 && <Questions 
                                darkMode={darkMode} 
                                toggleDarkMode={toggleDarkMode}
                                />}   
      {windowWidth <= 768 && <QuestionsMobile 
                                darkMode={darkMode} 
                                toggleDarkMode={toggleDarkMode}
                                />}  

      {windowWidth > 768 && <Portfolio/>}  
      {windowWidth <= 768 && <Portfolio/>} 

      {windowWidth > 992 && <Contact 
                                darkMode={darkMode} 
                                toggleDarkMode={toggleDarkMode}
                                />}   
      {windowWidth <= 992 && <ContactMobile 
                                darkMode={darkMode} 
                                toggleDarkMode={toggleDarkMode}
                                />} 

      {windowWidth > 768 && <AboutUs 
                                darkMode={darkMode} 
                                toggleDarkMode={toggleDarkMode}
                                />}   
      {windowWidth <= 768 && <AboutUsMobile 
                                darkMode={darkMode} 
                                toggleDarkMode={toggleDarkMode}
                                />}   

      {windowWidth > 768 && <Footer 
                                darkMode={darkMode} 
                                toggleDarkMode={toggleDarkMode}
                                />}  
      {windowWidth <= 768 && <FooterMobile
                                darkMode={darkMode} 
                                toggleDarkMode={toggleDarkMode}
                                />} 
    </div>

  );
}

export default App;


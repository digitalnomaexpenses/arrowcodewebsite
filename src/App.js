import React from "react"
import Navbar from "./Desktop_Components/Navbar"
import LandingPage from "./Desktop_Components/LandingPage"
import WhyUs from "./Desktop_Components/WhyUs"
import Services from "./Desktop_Components/Services"
import Portfolio from "./Desktop_Components/Portfolio"
import Questions from "./Desktop_Components/Questions"
import Contact from "./Desktop_Components/Contact"
import AboutUs from "./Desktop_Components/AboutUs"
import Footer from "./Desktop_Components/Footer"


import LandingPageMobile from "./Mobile_Components/LandingPageMobile"
import WhyUsMobile from "./Mobile_Components/WhyUsMobile"
import ServicesMobile from "./Mobile_Components/ServicesMobile"
import QuestionsMobile from "./Mobile_Components/QuestionsMobile"
import ContactMobile from "./Mobile_Components/ContactMobile"
import AboutUsMobile from "./Mobile_Components/AboutUsMobile"
import FooterMobile from "./Mobile_Components/FooterMobile"


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


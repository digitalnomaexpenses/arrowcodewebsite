import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./Desktop_Components/Navbar"
import Portfolio from "./Desktop_Components/Portfolio"


const LandingPage = React.lazy(() => import('./Desktop_Components/LandingPage'))
const LandingPageMobile = React.lazy(() => import('./Mobile_Components/LandingPageMobile'))

const WhyUs = React.lazy(() => import('./Desktop_Components/WhyUs'))
const WhyUsMobile = React.lazy(() => import('./Mobile_Components/WhyUsMobile'))

const Services = React.lazy(() => import('./Desktop_Components/Services'))
const ServicesMobile = React.lazy(() => import('./Mobile_Components/ServicesMobile'))

const Questions = React.lazy(() => import('./Desktop_Components/Questions'))
const QuestionsMobile = React.lazy(() => import('./Mobile_Components/QuestionsMobile'))

const Contact = React.lazy(() => import('./Desktop_Components/Contact'))
const ContactMobile = React.lazy(() => import('./Mobile_Components/ContactMobile'))

const AboutUs = React.lazy(() => import('./Desktop_Components/AboutUs'))
const AboutUsMobile = React.lazy(() => import('./Mobile_Components/AboutUsMobile'))

const Footer = React.lazy(() => import('./Desktop_Components/Footer'))
const FooterMobile = React.lazy(() => import('./Mobile_Components/FooterMobile'))


function AppAlt() {
  //render either the desktop component or mobile component start
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener("resize", function() {
      setWindowWidth(window.innerWidth)
    } 

    )}, [] )
  //To render either the desktop component or mobile component end

  //Dark mode or light mode start
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)}
  //Dark mode or light mode end

  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {windowWidth >= 768 ? 
                <LandingPage
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode}/> : 
                <LandingPageMobile
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode}/>}
            </Suspense>}
        />

        <Route 
          path="/why"
          element={
            <Suspense fallback = {<div>Loading...</div>}>
              {windowWidth >=768 ? 
                <WhyUs
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode}/> : 
                <WhyUsMobile
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode}/>}
            </Suspense>}
        />
        
        <Route 
          path="/"
          element={
            <Suspense fallback = {<div>Loading...</div>}>
            {windowWidth >=768 ? <Services/> : <ServicesMobile/>}
          </Suspense>}
        />

        <Route 
          path="/" 
          element={
            <Suspense fallback = {<div>Loading...</div>}>
              {windowWidth >=768 ? 
                <Questions
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode}/> : 
                <QuestionsMobile
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode}/>}
            </Suspense>
          }
        />

        <Route 
          path="/"
          element={
            <Suspense fallback = {<div>Loading...</div>}>
              {windowWidth >=768 ? 
                <Contact
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode}/> : 
                <ContactMobile
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode}/>}
            </Suspense>
          }
        />

        <Route 
          path="/"
          element={
            <Suspense fallback = {<div>Loading...</div>}>
              {windowWidth >=768 ? 
                <AboutUs
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode}/> : 
                <AboutUsMobile
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode}/>}
            </Suspense>
          }
        />
          
        <Route 
          path="/"
          element={
            <Suspense fallback = {<div>Loading...</div>}>
              {windowWidth >=768 ? 
                <Footer
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode}/> : 
                <FooterMobile
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode}/>}
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppAlt;


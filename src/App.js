import React from "react"
import Home from "./Pages/Home.jsx"
import TermsAndConditions from "./Pages/TermsAndConditions.js"
import PrivacyPolicy from "./Pages/PrivacyPolicy.js"

import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener("resize", function() {
      setWindowWidth(window.innerWidth)
    } 

    )}, [] )

  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)}

  return (
    <div className={darkMode? "container-fluid app-dark": "container-fluid app-light"}>
    <Routes>
      <Route path="/" element={<Home
                                    darkMode={darkMode}
                                    windowWidth={windowWidth}
                                    toggleDarkMode={toggleDarkMode}/>}/>
      <Route path="/terms-and-conditions" element={<TermsAndConditions 
                                                      darkMode={darkMode}
                                                      toggleDarkMode={toggleDarkMode}/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy 
                                                darkMode={darkMode} 
                                                toggleDarkMode={toggleDarkMode}/>}/>
    </Routes>
    </div>

  );
}

export default App;


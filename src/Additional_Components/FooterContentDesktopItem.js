import React from "react"

export default function FooterContentDesktopItem(fprops) {
	return(
		<>
			<div className="col-4">
				<div className="d-flex flex-column">
					<div className="footer-heading pb-4 pe-5">
						<img className="img-fluid" src={fprops.fDarkMode? "./SVGs/logo-7-dark-mode.svg" : "./SVGs/logo-7.svg"}/>
					</div>
					<p className="footer-text pe-5 pb-3">{fprops.text}</p>
					<div className="d-flex flex-row pt-xl-4">
						<img 
							src={fprops.fDarkMode ? 
								"../SVGs/Footer/facebook-icon-dark.svg" : "../SVGs/Footer/facebook-icon.svg"} 
							className="img-fluid pe-lg-2 pe-3"/>
						<img 
							src={fprops.fDarkMode ? 
								"../SVGs/Footer/linkedin-icon-dark.svg" : "../SVGs/Footer/linkedin-icon.svg"}
							className="img-fluid pe-lg-2 pe-3"/>
						<img 
							src={fprops.fDarkMode ? 
								"../SVGs/Footer/twitter-icon-dark.svg" : "../SVGs/Footer/twitter-icon.svg"}
							className="img-fluid pe-lg-2 pe-3"/>
						<img 
							src={fprops.fDarkMode ? 
								"../SVGs/Footer/instagram-icon-dark.svg" : "../SVGs/Footer/instagram-icon.svg"}
							className="img-fluid pe-lg-2 pe-3"/>
					</div>
				</div>
			</div>
			<div className="col">
				<ul className="footer-nav-list">
					<li className="pb-4">{fprops.menu_1}</li>
					<li className="pb-4">{fprops.menu_2}</li>
					<li className="pb-4">{fprops.menu_3}</li>
					<li className="pb-4">{fprops.menu_4}</li>
					<li>{fprops.menu_5}</li>
				</ul>
			</div>
			<div className="col-5">
				<div d-flex flex-column>
					<h4 className="footer-heading pb-4">{fprops.title}</h4>
					<p className="footer-text">{fprops.timings_1}</p>
					<p className="footer-text">{fprops.timings_2}</p>
					<p className="footer-text pb-4">{fprops.timings_3}</p>
					<div className="d-flex flex-row">
						<img 
							src={fprops.fDarkMode ? 
								"../SVGs/Footer/email-icon-dark.svg" : "../SVGs/Footer/email-icon.svg"} 
							className="img-fluid pe-2"/>
						<p className="footer-text">{fprops.email}</p>
					</div>
				</div>
			</div>
		</>
	)
}
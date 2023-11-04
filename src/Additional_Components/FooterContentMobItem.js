import React from "react"

export default function FooterContentMobItem(fmobprops) {
	return(
		<>
			<div className="footer-heading-mobile pb-2 pt-2">
				<img className="img-fluid" src={fmobprops.fMobDarkMode? "./SVGs/logo-7-dark-mode.svg" : "./SVGs/logo-7.svg"}/>
			</div>
			<div className="footer-text-mobile">{fmobprops.text}</div>
			<div className="d-flex flex-row pt-2">
				<img 
					src={fmobprops.fMobDarkMode ? 
						"../SVGs/Footer/facebook-icon-dark.svg" : "../SVGs/Footer/facebook-icon.svg"} 
					className="img-fluid pe-4"/>
				<img 
					src={fmobprops.fMobDarkMode ? 
						"../SVGs/Footer/linkedin-icon-dark.svg" : "../SVGs/Footer/linkedin-icon.svg"} 
					className="img-fluid pe-4"/>
				<img 
					src={fmobprops.fMobDarkMode ? 
						"../SVGs/Footer/twitter-icon-dark.svg" : "../SVGs/Footer/twitter-icon.svg"} 
					className="img-fluid pe-4"/>
				<img 
					src={fmobprops.fMobDarkMode ? 
						"../SVGs/Footer/instagram-icon-dark.svg" : "../SVGs/Footer/instagram-icon.svg"} 
					className="img-fluid pe-4"/>
			</div>
			<div className="footer-nav-list-mobile pb-2 pt-3">{fmobprops.menu_1}</div>
			<div className="footer-nav-list-mobile pb-2">{fmobprops.menu_2}</div>
			<div className="footer-nav-list-mobile pb-2">{fmobprops.menu_3}</div>
			<div className="footer-nav-list-mobile pb-4">{fmobprops.menu_4}</div>
			<div className="footer-nav-list-mobile pb-4">{fmobprops.menu_5}</div>
			<div className="footer-heading-mobile pb-2 pt-1">{fmobprops.title}</div>
			<div className="footer-text-mobile pb-1 pe-5">{fmobprops.timings_1}</div>
			<div className="footer-text-mobile">{fmobprops.timings_2}</div>
			<div className="footer-text-mobile pb-3">{fmobprops.timings_3}</div>
			<div className="d-flex flex-row">
				<img 
					src={fmobprops.fMobDarkMode ? 
						"../SVGs/Footer/email-icon-dark.svg" : "../SVGs/Footer/email-icon.svg"} 
					className="img-fluid pe-2"/>
				<div className="footer-text-mobile">{fmobprops.email}</div>
			</div>
		</>
	)
}
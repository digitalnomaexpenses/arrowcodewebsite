import React from "react"

export default function FooterMobile(props) {
	return(
		<div className="container pt-5 pb-5">
			<div className={props.darkMode ? "footer-mobile dark": "footer-mobile light"}>
				<div className="d-flex flex-column p-4">
					<div className="footer-heading-mobile pb-2 pt-2">Arrow Code Developers</div>
					<div className="footer-text-mobile">
						We help you become digitally savvy. Get online and grow your business
					</div>
					<div className="d-flex flex-row pt-2">
						<img src={props.darkMode ? "facebook-icon-dark.svg" : "facebook-icon.svg"} className="img-fluid pe-4"/>
						<img src={props.darkMode ? "linkedin-icon-dark.svg" : "linkedin-icon.svg"} className="img-fluid pe-4"/>
						<img src={props.darkMode ? "twitter-icon-dark.svg" : "twitter-icon.svg"} className="img-fluid pe-4"/>
						<img src={props.darkMode ? "instagram-icon-dark.svg" : "instagram-icon.svg"} className="img-fluid pe-4"/>
					</div>
					<div className="footer-nav-list-mobile pb-2 pt-3">Home</div>
					<div className="footer-nav-list-mobile pb-2">About Us</div>
					<div className="footer-nav-list-mobile pb-2">Privacy Policy</div>
					<div className="footer-nav-list-mobile pb-4">Get in touch</div>
					<div className="footer-headinng-mobile pb-2 pt-1">Arrow Code Developers</div>
					<div className="footer-text-mobile pb-1 pe-5">Working Hours:</div>
					<div className="footer-text-mobile">Mon - Fri</div>
					<div className="footer-text-mobile pb-3">10 AM - 5 PM IST</div>
					<div className="d-flex flex-row">
						<img src={props.darkMode ? "email-icon-dark.svg" : "email-icon.svg"} className="img-fluid pe-2"/>
						<div className="footer-text-mobile">inquiries@arrowcode.com</div>
					</div>
				</div>

			</div>
		</div>
	)
}
import React from "react"

export default function Footer(props) {
	return(
		<div className="container pt-5 pb-5">
			<div className={props.darkMode ? "footer d-flex flex-row p-5 dark": "footer d-flex flex-row p-5 light"}>
				<div className="col-4">
					<div className="d-flex flex-column">
						<div className="footer-heading pb-4 pe-5">Arrow Code Developers</div>
						<div className="footer-text pe-5 pb-3">We help you become digitally savvy. Get online and grow your business</div>
						<div className="d-flex flex-row pt-xl-4">
							<img src={props.darkMode ? "facebook-icon-dark.svg" : "facebook-icon.svg"} className="img-fluid pe-lg-2 pe-3"/>
							<img src={props.darkMode ? "linkedin-icon-dark.svg" : "linkedin-icon.svg"} className="img-fluid pe-lg-2 pe-3"/>
							<img src={props.darkMode ? "twitter-icon-dark.svg" : "twitter-icon.svg"} className="img-fluid pe-lg-2 pe-3"/>
							<img src={props.darkMode ? "instagram-icon-dark.svg" : "instagram-icon.svg"} className="img-fluid pe-lg-2 pe-3"/>
						</div>
					</div>
				</div>
				<div className="col">
					<ul className="footer-nav-list">
						<li className="pb-4">Home</li>
						<li className="pb-4">About Us</li>
						<li className="pb-4">Privacy Policy</li>
						<li>Get in Touch</li>
					</ul>
				</div>
				<div className="col-5">
					<div d-flex flex-column>
						<div className="footer-heading pb-4">Arrow Code Developers</div>
						<div className="footer-text">Working Hours:</div>
						<div className="footer-text">Mon - Fri</div>
						<div className="footer-text pb-4">10 AM - 5 PM IST</div>
						<div className="d-flex flex-row">
							<img src={props.darkMode ? "email-icon-dark.svg" : "email-icon.svg"} className="img-fluid pe-2"/>
							<div className="footer-text">inquiries@arrowcode.com</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
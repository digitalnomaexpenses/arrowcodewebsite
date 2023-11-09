import React from "react"
import {Link} from "react-router-dom"

export default function TermsAndConditions(props) {
	return(
		<section className={`container pt-5 pb-5 ps-3 pe-3 ${props.darkMode ? "ppdark": ""}`}>
			<div className="minor-page-navbar pb-3">
				<Link to="/" className="minor-page-back-button">
					<div className="minor-page-navbar-back-button">
						<img 
						src={props.darkMode? 
							"../SVGs/Minor_Pages/back-darkmode.svg": "../SVGs/Minor_Pages/back-lightmode.svg"}
						className="img-fluid"/>
						<p>Back</p>
					</div>
				</Link>	
				<div onClick={props.toggleDarkMode} className="pe-3 darkMode-toggler-icon">
       	     		<img src={`./SVGs/Navbar/${props.darkMode? "moon.svg" : "sun.svg"}`}/>
    			</div>
			</div>

			<h3 className="text-center section-heading pb-3">Privacy <span>Policy</span></h3>
			<p className="minor-page-text pb-3">Your privacy is important to us. This Privacy Policy outlines how [Your Company Name] ("we," "us," "our") collects, uses, and protects your personal information when you use our website and services. By accessing our website and using our services, you consent to the practices described in this Privacy Policy.</p>

			<h5 className="minor-page-heading pt-3 pb-1">1. Information We Collect:</h5>
			<p className="minor-page-text">We may collect the following types of information:</p>
			<ul className="minor-page-text pb-3">
				<li>Personal Information: This may include your name, email address, phone number, and other contact details when you voluntarily provide them to us.</li>
				<li>Usage Data: We may collect information about how you use our website, including your IP address, browser type, and device information.</li>
				<li>Cookies and Tracking Technologies: We may use cookies and similar tracking technologies to enhance your experience on our website and gather data about your interactions with our content.</li>
			</ul>

			<h5 className="minor-page-heading pt-3 pb-1">2. How We Use Your Information:</h5>
			<p className="minor-page-text">We may use your information for the following purposes:</p>
			<ul className="minor-page-text pb-3">
				<li>To provide and maintain our services.</li>
				<li>To communicate with you, respond to your inquiries, and send you updates and promotional materials.</li>
				<li>To improve our website and services based on user feedback.</li>
				<li>To monitor and analyze usage patterns and trends.</li>
				<li>To comply with legal obligations.</li>
			</ul>

			<h5 className="minor-page-heading pt-3 pb-1">3. Disclosure of Your Information:</h5>
			<p className="minor-page-text">We may share your information with:</p>
			<ul className="minor-page-text pb-3">
				<li>Third-party service providers that assist us in providing and maintaining our services.</li>
				<li>Law enforcement or government agencies when required by law or to protect our rights and legal interests.</li>
			</ul>

			<h5 className="minor-page-heading pt-3 pb-1">4. Your Choices:</h5>
			<p className="minor-page-text">You have the right to:</p>
			<ul className="minor-page-text pb-3">
				<li>Access, update, or delete your personal information.</li>
				<li>Opt-out of receiving promotional communications.</li>
				<li>Disable cookies through your browser settings.</li>
			</ul>


			<h5 className="minor-page-heading pt-3 pb-1">5. Security:</h5>
			<p className="minor-page-text pb-3">We implement reasonable security measures to protect your personal information from unauthorized access and disclosure. However, no method of data transmission over the internet is completely secure, and we cannot guarantee the security of your data.</p>
			

			<h5 className="minor-page-heading pt-3 pb-1">6. Changes to this Privacy Policy:</h5>
			<p className="minor-page-text pb-3">We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. Please review this Privacy Policy regularly to stay informed about how we are protecting your information.</p>
			

			<h5 className="minor-page-heading pt-3 pb-1">7. Contact Us:</h5>
			<p className="minor-page-text pb-3">For any questions or concerns related to this Privacy Policy or your personal information, please contact us at: [Your Contact Information]</p>
			

			<h5 className="minor-page-heading pt-3 pb-1">8. Governing Law:</h5>
			<p className="minor-page-text">This Privacy Policy is governed by the laws of India. Any legal disputes will be resolved in the courts of [Specify Jurisdiction]. By using our website and services, you acknowledge that you have read, understood, and agree to this Privacy Policy.</p>

			<small className="pp-update">Last Updated: 15<sup>th</sup> November 2023</small>
		</section>
	)
}
import React from "react"
import FormMobile from "./FormMobile"

export default function ContactMobile(props) {
	const [formDarkMode, setFormDarkMode] = React.useState(props.darkMode)
	return(

		<div className=" container pt-5">
			<div className={props.darkMode ? "d-flex flex-column contact-mobile dark pt-5 pe-4 ps-4 pb-5" : "d-flex flex-column contact-mobile light pt-5 pe-4 ps-4 pb-5"}>
				<div className="contact-heading-mobile pb-4 text-center">Let's Work<span> Together</span></div>
				<div className="contact-text-mobile pb-4 text-center ps-5 pe-5">
					We're thrilled that you're considering us for your 
					web development needs. Whether you have 
					a project in mind, questions about our services
				</div>
				<div className="contact-heading-mobile pb-4 text-center">How To <span>Reach </span>Us</div>
				<div className="contact-text-timings-mobile pb-1 text-center">Phone:Your Phone Number</div>
				<div className="contact-text-timings-mobile pb-1 text-center">Email:inquires@arrowcodedevelopers.com</div>
				<div className="contact-text-timings-mobile pb-1 text-center">Monday - Friday </div>
				<div className="contact-text-timings-mobile pb-1 text-center"> 9:00 AM to 5 PM IST </div>
				<FormMobile 
					formDarkMode={props.darkMode}
				/>
			</div>
		</div>
	)
}
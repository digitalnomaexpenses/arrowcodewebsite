import React from "react"
import Form from "./Form"


export default function Contact(props) {
	const [formDarkMode, setFormDarkMode] = React.useState(props.darkMode)
	return(
		<div className="container pt-5">
			<div className={props.darkMode ? "contact dark" : "contact light"}>
				<div className="d-flex flex-row p-5">
					<div className="col-lg-6 col-5 pt-lg-5 pt-2">
						<div className="contact-heading pb-4">Let's Work<span> Together</span></div>
						<div className="contact-text pe-5 pb-5">
							We're thrilled that you're considering us for your 
							web development needs. Whether you have 
							a project in mind, questions about our services
						</div>
						<div className="contact-heading-timings pb-4 pt-1">How To <span>Reach </span>Us</div>
						<div className="contact-text-timings pe-5 pb-2">Phone:Your Phone Number</div>
						<div className="contact-text-timings pe-5 pb-2">Email:inquires@arrowcodedevelopers.com</div>
						<div className="contact-text-timings pe-5 pb-2">Monday - Friday: 9:00 AM to 5 PM IST </div>
					</div>
					<div className="col">
						<Form 
							formDarkMode={props.darkMode}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
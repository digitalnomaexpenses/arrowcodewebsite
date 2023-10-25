import React from "react"
import Form from "./Form"
import { useInView } from 'react-intersection-observer'


export default function Contact(props) {

	//intersection observer lazy loading or animation start
	const { ref: contactRef, inView: contactVisibility } = useInView();
 	//intersection observer lazy loading or animation start

	const [formDarkMode, setFormDarkMode] = React.useState(props.darkMode)
	return(
		<div 
		className="container pt-5"
		ref={contactRef}>
			<div className={props.darkMode ? "contact dark" : "contact light"}>
				<div className="d-flex flex-row p-5">
					<div className={`col-lg-6 col-5 pt-lg-5 pt-2 ${contactVisibility ? "contact-div-animation" : ""}`}>
						<div className="contact-heading pb-4">Let's Work<span> Together</span></div>
						<div className="contact-text pe-5 pb-5">
							We're thrilled that you're considering us for your 
							web development needs. Whether you have 
							a project in mind, questions about our services
						</div>
						<div 
							className={`contact-heading-timings pb-4 pt-1 ${contactVisibility ? "ctt-1-animation" : ""}`}>
							How To <span>Reach </span>Us
						</div>
						<div 
							className={`contact-text-timings pe-5 pb-2 ${contactVisibility ? "ctt-2-animation" : ""}`}>
							Phone:Your Phone Number</div>
						<div 
							className={`contact-text-timings pe-5 pb-2 ${contactVisibility ? "ctt-3-animation" : ""}`}>
							Email:inquires@arrowcodedevelopers.com</div>
						<div 
							className={`contact-text-timings pe-5 pb-2 ${contactVisibility ? "ctt-4-animation" : ""}`}>
							Monday - Friday: 9:00 AM to 5 PM IST </div>
						</div>
					<div className={contactVisibility ? "contact-form-animation col" : "col"}>
						<Form 
							formDarkMode={props.darkMode}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
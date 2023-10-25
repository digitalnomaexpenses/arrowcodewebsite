import React from "react"
import FormMobile from "./FormMobile"
import { useInView } from 'react-intersection-observer'

export default function ContactMobile(props) {
	const [formDarkMode, setFormDarkMode] = React.useState(props.darkMode)

	//intersection observer lazy loading or animation start
	const { ref: contactMobileRef, inView: contactMobileVisibility } = useInView();
 	//intersection observer lazy loading or animation start
	return(

		<div 
		className=" container pt-5"
		ref= {contactMobileRef}>
			<div className={`d-flex flex-column contact-mobile pt-5 pe-4 ps-4 pb-5 ${props.darkMode ? "dark" : "light"}`}>
				<div className={`contact-heading-mobile pb-4 text-center ${contactMobileVisibility ? "contact-heading-mobile-animation": ""}`}>Let's Work<span> Together</span></div>
				<div className={`contact-text-mobile pb-4 text-center ps-5 pe-5 ${contactMobileVisibility ? "contact-text-mobile-animation" : ""}`}>
					We're thrilled that you're considering us for your 
					web development needs. Whether you have 
					a project in mind, questions about our services
				</div>
				<div className={`contact-heading-mobile pb-4 text-center ${contactMobileVisibility ? "contact-heading-mobile-timings-animation" : ""}`}>How To <span>Reach </span>Us</div>
				<div className={`contact-text-timings-mobile pb-1 text-center ${contactMobileVisibility ? "cttm-1-animation" : ""}`}>Phone:Your Phone Number</div>
				<div className={`contact-text-timings-mobile pb-1 text-center ${contactMobileVisibility ? "cttm-2-animation" : ""}`}>Email:inquires@arrowcodedevelopers.com</div>
				<div className={`contact-text-timings-mobile pb-1 text-center ${contactMobileVisibility ? "cttm-3-animation" : ""}`}>Monday - Friday </div>
				<div className={`contact-text-timings-mobile pb-1 text-center ${contactMobileVisibility ? "cttm-4-animation" : ""}`}> 9:00 AM to 5 PM IST </div>
				<div className={contactMobileVisibility ? "form-mobile-animation" : ""}>
					<FormMobile 
					formDarkMode={props.darkMode}
				/>
				</div>
				
			</div>
		</div>
	)
}
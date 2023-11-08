import React from "react"
import { useInView } from 'react-intersection-observer'

import Form from "../Content-Components/contact-form"
import FormMobile from "../Content-Components/contact-form-mobile"

import Contact_JSON from "../JSONs/contact"
import Contact_JSON_Component_Desktop from "../Content-Components/contact-desktop"
import Contact_JSON_Component_Mobile from "../Content-Components/contact-mobile"


export default function Contact(props) {

	const { ref: contactRef, inView: contactVisibility } = useInView();

 	let Contact_JSON_Content_Desktop = Contact_JSON.map(eachElement => (
			<Contact_JSON_Component_Desktop
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				s_title_1={eachElement.s_title_1}
				s_title_span={eachElement.s_title_span}
				s_title_2={eachElement.s_title_2}
				phone={eachElement.phone}
				email={eachElement.email}
				timings={eachElement.timings}
				isVisible={contactVisibility}
			/>
		))

 	let Contact_JSON_Content_Mobile = Contact_JSON.map(eachElement => (
			<Contact_JSON_Component_Mobile
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				s_title_1={eachElement.s_title_1}
				s_title_span={eachElement.s_title_span}
				s_title_2={eachElement.s_title_2}
				phone={eachElement.phone}
				email={eachElement.email}
				timings={eachElement.timings}
				isVisible={contactVisibility}
			/>
		))

	const [formDarkMode, setFormDarkMode] = React.useState(props.darkMode)

	return(
		<section 
			className="container pt-5"
			ref={contactRef}
			id="contact">

			{
				props.windowWidth >992 &&

				<div className={props.darkMode ? "contact dark" : "contact light"}>
					<div className="d-flex flex-row p-5">
						<div className={`col-lg-6 col-5 pt-lg-5 pt-2 ${contactVisibility ? "contact-div-animation" : ""}`}>
						{Contact_JSON_Content_Desktop}
						</div>
						<div className={contactVisibility ? "contact-form-animation col" : "col"}>
							<Form 
								formDarkMode={props.darkMode}
							/>
						</div>
					</div>
				</div> 

			}

			{
				props.windowWidth <=992 && 

				<div className={`d-flex flex-column contact-mobile pt-5 pe-4 ps-4 pb-5 ${props.darkMode ? "dark" : "light"}`}>
					{Contact_JSON_Content_Mobile}
					<div className={contactVisibility ? "form-mobile-animation" : ""}>
						<FormMobile 
						formDarkMode={props.darkMode}
					/>
					</div>
				</div>
			}
			
		</section>
	)
}
import React from "react"
import FormMobile from "./FormMobile"
import { useInView } from 'react-intersection-observer'

import JSON_ContactContent from "../Additional_Components/JSONs/JSON_ContactContent.js"
import ContactContentMobItem from "../Additional_Components/ContactContentMobItem.js"

export default function ContactMobile(props) {
	const [formDarkMode, setFormDarkMode] = React.useState(props.darkMode)

	const { ref: contactMobileRef, inView: contactMobileVisibility } = useInView();

	let ContactMobContentElement = JSON_ContactContent.map(eachElement => (
			<ContactContentMobItem
				key={eachElement.title}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				s_title_1={eachElement.s_title_1}
				s_title_span={eachElement.s_title_span}
				s_title_2={eachElement.s_title_2}
				phone={eachElement.phone}
				email={eachElement.email}
				timings={eachElement.timings}
				isVisible={contactMobileVisibility}
			/>
		))
	return(

		<div 
		className=" container pt-5"
		ref= {contactMobileRef}>
			<div className={`d-flex flex-column contact-mobile pt-5 pe-4 ps-4 pb-5 ${props.darkMode ? "dark" : "light"}`}>
				{ContactMobContentElement}
				<div className={contactMobileVisibility ? "form-mobile-animation" : ""}>
					<FormMobile 
					formDarkMode={props.darkMode}
				/>
				</div>
				
			</div>
		</div>
	)
}
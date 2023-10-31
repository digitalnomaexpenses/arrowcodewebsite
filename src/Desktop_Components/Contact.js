import React from "react"
import Form from "./Form"
import { useInView } from 'react-intersection-observer'

import JSON_ContactContent from "../Additional_Components/JSONs/JSON_ContactContent.js"
import ContactContentDesktopItem from "../Additional_Components/ContactContentDesktopItem.js"


export default function Contact(props) {

	//intersection observer lazy loading or animation start
	const { ref: contactRef, inView: contactVisibility } = useInView();
 	//intersection observer lazy loading or animation start

 	let ContactContentElement = JSON_ContactContent.map(eachElement => (
			<ContactContentDesktopItem
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
				isVisible={contactVisibility}
			/>
		))

	const [formDarkMode, setFormDarkMode] = React.useState(props.darkMode)
	return(
		<div 
		className="container pt-5"
		ref={contactRef}>
			<div className={props.darkMode ? "contact dark" : "contact light"}>
				<div className="d-flex flex-row p-5">
					<div className={`col-lg-6 col-5 pt-lg-5 pt-2 ${contactVisibility ? "contact-div-animation" : ""}`}>
					{ContactContentElement}
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
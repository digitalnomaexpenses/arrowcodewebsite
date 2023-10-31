import React from "react"

import JSON_FooterContent from "../Additional_Components/JSONs/JSON_FooterContent.js"
import FooterContentDesktopItem from "../Additional_Components/FooterContentDesktopItem.js"

export default function Footer(props) {

	let FooterContentElement = JSON_FooterContent.map(eachElement => (
			<FooterContentDesktopItem
				key={eachElement.id}
				id={eachElement.id}
				logo_title={eachElement.logo_title}
				text={eachElement.text}
				menu_1={eachElement.menu_1}
				menu_2={eachElement.menu_2}
				menu_3={eachElement.menu_3}
				menu_4={eachElement.menu_4}
				menu_5={eachElement.menu_5}
				title={eachElement.title}
				timings_1={eachElement.timings_1}
				timings_2={eachElement.timings_2}
				timings_3={eachElement.timings_3}
				email={eachElement.email}
				fDarkMode={props.darkMode}
			/>
		))

	return(
		<div className="container pt-5 pb-5">
			<div className={` footer d-flex flex-row p-5 ${props.darkMode ? "dark": "light"}`}>
				{FooterContentElement}
			</div>
		</div>
	)
}
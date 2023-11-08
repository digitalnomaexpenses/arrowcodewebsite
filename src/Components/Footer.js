import React from "react"

import Footer_JSON from "../JSONs/footer"
import Footer_JSON_Component_Desktop from "../Content-Components/footer-desktop"
import Footer_JSON_Component_Mobile from "../Content-Components/footer-mobile"

export default function Footer(props) {

	let Footer_JSON_Content_Desktop = Footer_JSON.map(eachElement => (
			<Footer_JSON_Component_Desktop
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

	let Footer_JSON_Content_Mobile = Footer_JSON.map(eachElement => (
			<Footer_JSON_Component_Mobile
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
				fMobDarkMode={props.darkMode}
			/>
		))

	return(

		<footer className="container pt-5 pb-5" id="footer">
			{
				props.windowWidth > 992 &&

				<div className={` footer d-flex flex-row p-5 ${props.darkMode ? "dark": "light"}`}>
					{Footer_JSON_Content_Desktop}
				</div>

			}
			
			{
				props.windowWidth <= 992 &&

				<div className={props.darkMode ? "footer-mobile dark": "footer-mobile light"}>
					<div className="d-flex flex-column p-4">
						{Footer_JSON_Content_Mobile}
					</div>
				</div>
			}
		</footer>
	)
}
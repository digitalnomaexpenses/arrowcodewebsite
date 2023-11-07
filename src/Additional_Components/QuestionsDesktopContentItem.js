import React from "react"
import {Link, Element} from "react-scroll"

export default function QuestionsDesktopContentItem(qcontentprops) {
	return (
		<>
			<h3
				className={`section-heading pb-4 ${qcontentprops.isVisible ? "questions-lhs-animation" : ""}`}>
				{qcontentprops.title}<span>{qcontentprops.title_span}</span>
			</h3>
			<p className={`section-text pb-4 ${qcontentprops.isVisible ? "questions-lhs-animation" : ""}`}>
				{qcontentprops.text}
			</p>
			<div className={`ps-5 pe-5 pt-5 ms-4 ${qcontentprops.isVisible ? "questions-button-pulse-animation" : ""}`}>
				<button className="questions-button-shine">
					<Link to="contact" smooth={true} duration={5}>{qcontentprops.button_text}</Link>
				</button>
			</div>
		</>	
	)
}
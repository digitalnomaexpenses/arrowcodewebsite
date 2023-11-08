import React from "react"
import {Link, Element} from "react-scroll"

export default function QuestionsDesktopContentItem(props) {
	return (
		<>
			<h3
				className={`section-heading pb-4 ${props.isVisible ? "questions-lhs-animation" : ""}`}>
				{props.title}<span>{props.title_span}</span>
			</h3>
			<p className={`section-text pb-4 ${props.isVisible ? "questions-lhs-animation" : ""}`}>
				{props.text}
			</p>
			<div className={`ps-5 pe-5 pt-5 ms-4 ${props.isVisible ? "questions-button-pulse-animation" : ""}`}>
				<button className="questions-button-shine">
					<Link to="contact" smooth={true} duration={5}>{props.button_text}</Link>
				</button>
			</div>
		</>	
	)
}
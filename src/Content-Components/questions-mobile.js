import React from "react"
import {Link, Element} from "react-scroll"

export default function QuestionsMobContentItem(props) {
	return (
		<>
			<h3 
				className={`section-heading pb-3 text-center ${props.isVisible ? "ques-head-mob-animation" : ""}`}>
				{props.title}<span>{props.title_span}</span>
			</h3>
			<p 
				className={`section-text pb-4 text-center ${props.isVisible ? "ques-text-mob-animation" : ""}`}>
				{props.text}
			</p>
			<div className="text-center pt-3 pb-3">
				<button className={`questions-buttonMobile ${props.isVisible ? "ques-button-mob-animation" : ""}`}>
					<Link to="contact" smooth={true} duration={5}>{props.button_text}</Link>
				</button>
			</div>
		</>	
	)
}
import React from "react"
import {Link, Element} from "react-scroll"

export default function QuestionsMobContentItem(qmobprops) {
	return (
		<>
			<h3 
				className={`section-heading pb-3 text-center ${qmobprops.isVisible ? "ques-head-mob-animation" : ""}`}>
				{qmobprops.title}<span>{qmobprops.title_span}</span>
			</h3>
			<p 
				className={`section-text pb-4 text-center ${qmobprops.isVisible ? "ques-text-mob-animation" : ""}`}>
				{qmobprops.text}
			</p>
			<div className="text-center pt-3 pb-3">
				<button className={`questions-buttonMobile ${qmobprops.isVisible ? "ques-button-mob-animation" : ""}`}>
					<Link to="contact" smooth={true} duration={5}>{qmobprops.button_text}</Link>
				</button>
			</div>
		</>	
	)
}
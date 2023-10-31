import React from "react"

export default function QuestionsDesktopContentItem(qcontentprops) {
	return (
		<>
			<div 
				className={`questions-heading pb-4 ${qcontentprops.isVisible ? "questions-lhs-animation" : ""}`}>
				{qcontentprops.title}<span>{qcontentprops.title_span}</span>
			</div>
			<div className={`questions-text pb-4 ${qcontentprops.isVisible ? "questions-lhs-animation" : ""}`}>{qcontentprops.text}</div>
			<div className={`ps-5 pe-5 pt-5 ms-4 ${qcontentprops.isVisible ? "questions-button-pulse-animation" : ""}`}>
				<button className="questions-button-shine" href="#">{qcontentprops.button_text}</button>
			</div>
		</>	
	)
}
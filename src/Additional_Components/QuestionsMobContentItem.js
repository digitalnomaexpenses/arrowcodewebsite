import React from "react"

export default function QuestionsMobContentItem(qmobprops) {
	return (
		<>
			<div 
				className={`questions-heading-mobile pb-3 text-center ${qmobprops.isVisible ? "ques-head-mob-animation" : ""}`}>
				{qmobprops.title}<span>{qmobprops.title_span}</span>
			</div>
			<div className={`questions-text-mobile pb-4 text-center ${qmobprops.isVisible ? "ques-text-mob-animation" : ""}`}>{qmobprops.text}</div>
			<div className="text-center pt-3 pb-3">
				<button className={`questions-buttonMobile ${qmobprops.isVisible ? "ques-button-mob-animation" : ""}`} href="#">{qmobprops.button_text}</button>
			</div>
		</>	
	)
}
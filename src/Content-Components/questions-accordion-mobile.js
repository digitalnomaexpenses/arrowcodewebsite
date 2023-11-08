import React from "react"

export default function QuestionsAccordionMobItem(props) {
	return(
		<div 
			className=	{
				`accordion-item 
				${props.qMobAccDarkMode ? "dark-accordion" : ""} 
				${props.isVisible ? `${props.id}_m_animation` : ""}`
			} 
			style={{background: props.qMobAccDarkMode ? "#303030" : "rgba(255, 255, 255, 1)"}}>
			<h4 className="accordion-header">
			  <button 
			  	className={`accordion-button accordion-button-mobile collapsed ${props.qMobAccDarkMode ? "dark-accordion " : ""}`} 
			  	type="button" 
			  	data-bs-toggle="collapse" 
			  	data-bs-target={`#${props.id}`} 
			  	aria-expanded="false" 
			  	aria-controls={props.id}>
			  	{props.question}
			  </button>
			</h4>
			<div id={props.id} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
			  <p className="accordion-body accordion-body-mobile text-justify">{props.answer}</p>
			</div>
		</div>
	)
}
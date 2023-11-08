import React from "react"

export default function QuestionsAccordionDesktopItem(props) {
	return(
		<div 
			className=	{
				`accordion-item 
				${props.qDarkMode ? "dark-accordion" : ""} 
				${props.isVisible ? `${props.id}_animation` : ""}`
			} 
			style={{background: props.qDarkMode ? "#303030" : "rgba(255, 255, 255, 1)"}}>
			<h4 className="accordion-header">
			  <button 
			  	className={`accordion-button collapsed ${props.qDarkMode ? "dark-accordion" : ""}`} 
			  	type="button" 
			  	data-bs-toggle="collapse" 
			  	data-bs-target={`#${props.id}`} 
			  	aria-expanded="false" 
			  	aria-controls={props.id}>
			    {props.question}
			  </button>
			</h4>
			<div id={props.id} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
			  <p className="accordion-body">{props.answer}</p>
			</div>
		</div>
	)
}
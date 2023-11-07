import React from "react"

export default function QuestionsAccordionDesktopItem(qprops) {
	return(
		<div 
			className=	{
				`accordion-item 
				${qprops.qDarkMode ? "dark-accordion" : ""} 
				${qprops.isVisible ? `${qprops.id}_animation` : ""}`
			} 
			style={{background: qprops.qDarkMode ? "#303030" : "rgba(255, 255, 255, 1)"}}>
			<h4 className="accordion-header">
			  <button 
			  	className={`accordion-button collapsed ${qprops.qDarkMode ? "dark-accordion" : ""}`} 
			  	type="button" 
			  	data-bs-toggle="collapse" 
			  	data-bs-target={`#${qprops.id}`} 
			  	aria-expanded="false" 
			  	aria-controls={qprops.id}>
			    {qprops.question}
			  </button>
			</h4>
			<div id={qprops.id} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
			  <p className="accordion-body">{qprops.answer}</p>
			</div>
		</div>
	)
}
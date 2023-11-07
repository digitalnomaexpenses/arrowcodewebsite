import React from "react"

export default function QuestionsAccordionMobItem(qmobaccprops) {
	return(
		<div 
			className=	{
				`accordion-item 
				${qmobaccprops.qMobAccDarkMode ? "dark-accordion" : ""} 
				${qmobaccprops.isVisible ? `${qmobaccprops.id}_m_animation` : ""}`
			} 
			style={{background: qmobaccprops.qMobAccDarkMode ? "#303030" : "rgba(255, 255, 255, 1)"}}>
			<h4 className="accordion-header">
			  <button 
			  	className={`accordion-button accordion-button-mobile collapsed ${qmobaccprops.qMobAccDarkMode ? "dark-accordion " : ""}`} 
			  	type="button" 
			  	data-bs-toggle="collapse" 
			  	data-bs-target={`#${qmobaccprops.id}`} 
			  	aria-expanded="false" 
			  	aria-controls={qmobaccprops.id}>
			  	{qmobaccprops.question}
			  </button>
			</h4>
			<div id={qmobaccprops.id} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
			  <p className="accordion-body accordion-body-mobile text-justify">{qmobaccprops.answer}</p>
			</div>
		</div>
	)
}
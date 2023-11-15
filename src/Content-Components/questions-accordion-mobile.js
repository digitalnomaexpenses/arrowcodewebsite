import React, {useRef} from "react"
import {motion, useInView as FramerMotionUseInView} from "framer-motion"

export default function QuestionsAccordionMobItem(props) {

	const ref = useRef(null);
	const itemInView = FramerMotionUseInView(ref, { once: true })

	return(
		<div
			ref={ref} 
			className={
				`accordion-item 
				${props.qMobAccDarkMode ? "dark-accordion" : ""} 
				${itemInView ? `${props.id}_m_animation` : ""}`
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
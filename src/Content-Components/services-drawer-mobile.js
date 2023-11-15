import React, {useRef} from "react"
import {motion, useInView as FramerMotionUseInView} from "framer-motion"

export default function ServicesItem(props) {

	const ref = useRef(null);
	const itemInView = FramerMotionUseInView(ref, { once: true })

	return(
		<div
			ref={ref}
			className={`services-list-item-mobile pt-2 pb-2 ${itemInView ? `${props.id}-mob-animation` : ""}`}>
			<div 
				data-bs-toggle="collapse" 
				data-bs-target={`#${props.id}`} 
				aria-expanded="false" 
				aria-controls={props.id}
				className="d-flex flex-row justify-content-start"
				role="button">
					<h4 className="services-item-number pe-3">{props.number}</h4>
					<h4 className="w-100 services-item-title">{props.title}</h4>
					<h4 className="services-item-number"> &#43;</h4>
			</div>
			<p className="services-list-desc-mobile p-1 collapse" id={props.id}>{props.desc}</p>
		</div>	
)}
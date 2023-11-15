import React, {useRef} from "react"
import {motion, useScroll, useTransform} from "framer-motion"

export default function ServicesItem(props) {

		return(
		<div
			className="mb-lg-3 pb-2 mb-4 services-list-item">
			<div 
				data-bs-toggle="collapse" 
				data-bs-target={`#${props.id}`} 
				aria-expanded="false" 
				aria-controls={props.id}
				className="d-flex flex-row justify-content-start"
				role="button">
					<h4 className=" pe-2 services-item-number">{props.number}</h4>
					<h4 className="w-100 services-item-title">{props.title}</h4>
					<h4 className="services-item-title"> &#43; </h4>
			</div>
			<p className="services-list-desc collapse pt-3" id={props.id}>{props.desc}</p>
		</div>	
)}
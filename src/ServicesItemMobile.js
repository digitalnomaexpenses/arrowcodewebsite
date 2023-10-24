import React from "react"

export default function ServicesItem(props) {
	return(
		<div className="services-list-item-mobile pt-2 pb-2">
			<div 
				data-bs-toggle="collapse" 
				data-bs-target={`#${props.id}`} 
				aria-expanded="false" 
				aria-controls={props.id}
				className="d-flex flex-row justify-content-start"
				role="button">
					<div className="services-item-number pe-3">{props.number}</div>
					<div className="w-100">{props.title}</div>
					<div> &#43;</div>
			</div>
			<div className="services-list-desc-mobile p-1 collapse" id={props.id}>{props.desc}</div>
		</div>	
)}
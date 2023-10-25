import React from "react"
import { useInView } from 'react-intersection-observer'

export default function ServicesItem(props) {

	const { ref: serviceItemsRef, inView: servicesItemVisibility } = useInView();

	return(
		<div 
			ref={serviceItemsRef}
			className={`mb-lg-3 pb-2 mb-4 services-list-item ${servicesItemVisibility ? `${props.id}-animation` : ""}`}>
			<div 
				data-bs-toggle="collapse" 
				data-bs-target={`#${props.id}`} 
				aria-expanded="false" 
				aria-controls={props.id}
				className="d-flex flex-row justify-content-start"
				role="button">
				<div className=" pe-2 services-item-number">{props.number}</div>
				<div className="w-100">{props.title}</div>
				<div 
					> 
					&#43;
				</div>
			</div>
			<div className="services-list-desc collapse pt-3" id={props.id}>{props.desc}</div>
		</div>	
)}
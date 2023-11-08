import React from "react"

export default function ServicesContentDesktopItem(props) {
	return(
		<div className="d-flex flex-column">
			<h3 
				className={`section-heading pb-4 ${props.isVisible ? "services-lhs-animation" : ""}`}>
				{props.title}
				<span>{props.title_span}</span>
			</h3>
			<p 
				className={`section-text pe-5 pb-3 ${props.isVisible ? "services-lhs-animation" : ""}`}>
				{props.text}
			</p>
		</div>
	)
}
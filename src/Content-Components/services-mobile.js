import React from "react"

export default function ServicesContentMobItem(props) {
	return (
		<>
			<h3 
				className={`section-heading pb-4 ${props.isVisible ? "s-mob-animation-1" : ""}`}>
				{props.title}
				<span>{props.title_span}</span>
			</h3>
			<p 
				className={`section-text text-center ${props.isVisible ? "s-mob-animation-2" : ""}`}>
				{props.text}
			</p>
		</>
	)
}
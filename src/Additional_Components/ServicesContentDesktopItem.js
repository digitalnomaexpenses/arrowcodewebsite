import React from "react"

export default function ServicesContentDesktopItem(sprops) {
	return(
		<div className="d-flex flex-column">
			<h3 
				className={`section-heading pb-4 ${sprops.isVisible ? "services-lhs-animation" : ""}`}>
				{sprops.title}
				<span>{sprops.title_span}</span>
			</h3>
			<p 
				className={`section-text pe-5 pb-3 ${sprops.isVisible ? "services-lhs-animation" : ""}`}>
				{sprops.text}
			</p>
		</div>
	)
}
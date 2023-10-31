import React from "react"

export default function ServicesContentDesktopItem(sprops) {
	return(
		<div className="d-flex flex-column">
			<div 
				className={`services-heading pb-4 ${sprops.isVisible ? "services-lhs-animation" : ""}`}>
				{sprops.title}<span>{sprops.title_span}</span></div>
			<div className={`pe-5 services-text pb-3 ${sprops.isVisible ? "services-lhs-animation" : ""}`}>{sprops.text}</div>
		</div>
	)
}
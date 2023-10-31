import React from "react"

export default function ServicesContentMobItem(sermobprops) {
	return (
		<>
			<div 
				className={`services-heading-mobile pb-4 ${sermobprops.isVisible ? "s-mob-animation-1" : ""}`}>
				{sermobprops.title}<span>{sermobprops.title_span}</span>
			</div>
			<div className={`services-text-mobile text-center ${sermobprops.isVisible ? "s-mob-animation-2" : ""}`}>{sermobprops.text}</div>
		</>
	)
}
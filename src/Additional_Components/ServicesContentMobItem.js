import React from "react"

export default function ServicesContentMobItem(sermobprops) {
	return (
		<>
			<h3 
				className={`section-heading pb-4 ${sermobprops.isVisible ? "s-mob-animation-1" : ""}`}>
				{sermobprops.title}
				<span>{sermobprops.title_span}</span>
			</h3>
			<p 
				className={`section-text text-center ${sermobprops.isVisible ? "s-mob-animation-2" : ""}`}>
				{sermobprops.text}
			</p>
		</>
	)
}
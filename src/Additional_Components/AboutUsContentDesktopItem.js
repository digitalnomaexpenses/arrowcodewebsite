import React from "react"

export default function AboutUsContentDesktopItem(abprops) {
	return(
		<>
			<h3 className="section-heading pb-3">{abprops.title}<span>{abprops.title_span}</span></h3>
			<p className="section-text pb-3">{abprops.text}</p>
		</>
		
	)
}


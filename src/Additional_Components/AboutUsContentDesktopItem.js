import React from "react"

export default function AboutUsContentDesktopItem(abprops) {
	return(
		<>
			<div className="about-us-heading pb-3">{abprops.title}<span>{abprops.title_span}</span></div>
			<div className="about-us-text pb-3">{abprops.text}</div>
		</>
		
	)
}


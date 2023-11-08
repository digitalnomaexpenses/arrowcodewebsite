import React from "react"

export default function AboutUsContentDesktopItem(props) {
	return(
		<>
			<h3 className="section-heading pb-3">{props.title}<span>{props.title_span}</span></h3>
			<p className="section-text pb-3">{props.text}</p>
		</>
		
	)
}


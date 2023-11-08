import React from "react"

export default function ContactContentDesktopItem(props) {
	return(
		<>
			<h3 className="section-heading pb-4">{props.title}<span>{props.title_span}</span></h3>
			<p className="section-text pe-5 pb-5">{props.text}</p>
			<h4 
				className={`contact-heading-timings pb-4 pt-1 ${props.isVisible ? "ctt-1-animation" : ""}`}>
				{props.s_title_1}<span>{props.s_title_span}</span>{props.s_title_2}
			</h4>
			<p 
				className={`contact-text-timings pe-5 pb-2 ${props.isVisible ? "ctt-2-animation" : ""}`}>
				{props.phone}
			</p>
			<p 
				className={`contact-text-timings pe-5 pb-2 ${props.isVisible ? "ctt-3-animation" : ""}`}>
				{props.email}
			</p>
			<p 
				className={`contact-text-timings pe-5 pb-2 ${props.isVisible ? "ctt-4-animation" : ""}`}>
				{props.timings}
			</p>

		</>
	)
}
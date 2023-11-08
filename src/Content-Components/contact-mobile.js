import React from "react"

export default function ContactContentDesktopItem(props) {
	return(
		<>
			<h3 
				className={`section-heading pb-4 text-center ${props.isVisible ? "contact-heading-mobile-animation": ""}`}>
				{props.title}<span>{props.title_span}</span>
			</h3>
			<p 
				className={`section-text pb-4 text-center ps-5 pe-5 ${props.isVisible ? "contact-text-mobile-animation" : ""}`}>
				{props.text}
			</p>
			<h4 
				className={`contact-heading-timings pb-4 text-center ${props.isVisible ? "contact-heading-mobile-timings-animation" : ""}`}>
				{props.s_title_1}
				<span>{props.s_title_span}</span>
				{props.s_title_2}
			</h4>
			<p
				className={`contact-text-timings-mobile pb-1 text-center ${props.isVisible ? "cttm-1-animation" : ""}`}>
				{props.phone}
			</p>
			<p
				className={`contact-text-timings-mobile pb-1 text-center ${props.isVisible ? "cttm-2-animation" : ""}`}>
				{props.email}
			</p>
			<p 
				className={`contact-text-timings-mobile pb-1 text-center ${props.isVisible ? "cttm-3-animation" : ""}`}>
				{props.timings}
			</p>
		</>
	)
}
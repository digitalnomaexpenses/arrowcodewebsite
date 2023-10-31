import React from "react"

export default function ContactContentDesktopItem(conprops) {
	return(
		<>
			<div className="contact-heading pb-4">{conprops.title}<span>{conprops.title_span}</span></div>
			<div className="contact-text pe-5 pb-5">{conprops.text}</div>
			<div 
				className={`contact-heading-timings pb-4 pt-1 ${conprops.isVisible ? "ctt-1-animation" : ""}`}>
				{conprops.s_title_1}<span>{conprops.s_title_span}</span>{conprops.s_title_2}
			</div>
			<div 
				className={`contact-text-timings pe-5 pb-2 ${conprops.isVisible ? "ctt-2-animation" : ""}`}>
				{conprops.phone}</div>
			<div 
				className={`contact-text-timings pe-5 pb-2 ${conprops.isVisible ? "ctt-3-animation" : ""}`}>
				{conprops.email}</div>
			<div 
				className={`contact-text-timings pe-5 pb-2 ${conprops.isVisible ? "ctt-4-animation" : ""}`}>
				{conprops.timings}
			</div>

		</>
	)
}
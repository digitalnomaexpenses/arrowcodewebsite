import React from "react"

export default function ContactContentDesktopItem(conprops) {
	return(
		<>
			<h3 className="section-heading pb-4">{conprops.title}<span>{conprops.title_span}</span></h3>
			<p className="section-text pe-5 pb-5">{conprops.text}</p>
			<h4 
				className={`contact-heading-timings pb-4 pt-1 ${conprops.isVisible ? "ctt-1-animation" : ""}`}>
				{conprops.s_title_1}<span>{conprops.s_title_span}</span>{conprops.s_title_2}
			</h4>
			<p 
				className={`contact-text-timings pe-5 pb-2 ${conprops.isVisible ? "ctt-2-animation" : ""}`}>
				{conprops.phone}
			</p>
			<p 
				className={`contact-text-timings pe-5 pb-2 ${conprops.isVisible ? "ctt-3-animation" : ""}`}>
				{conprops.email}
			</p>
			<p 
				className={`contact-text-timings pe-5 pb-2 ${conprops.isVisible ? "ctt-4-animation" : ""}`}>
				{conprops.timings}
			</p>

		</>
	)
}
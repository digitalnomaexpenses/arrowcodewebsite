import React from "react"

export default function ContactContentDesktopItem(conmobprops) {
	return(
		<>
			<h3 
				className={`section-heading pb-4 text-center ${conmobprops.isVisible ? "contact-heading-mobile-animation": ""}`}>
				{conmobprops.title}<span>{conmobprops.title_span}</span>
			</h3>
			<p 
				className={`section-text pb-4 text-center ps-5 pe-5 ${conmobprops.isVisible ? "contact-text-mobile-animation" : ""}`}>
				{conmobprops.text}
			</p>
			<h4 
				className={`contact-heading-timings pb-4 text-center ${conmobprops.isVisible ? "contact-heading-mobile-timings-animation" : ""}`}>
				{conmobprops.s_title_1}
				<span>{conmobprops.s_title_span}</span>
				{conmobprops.s_title_2}
			</h4>
			<p
				className={`contact-text-timings-mobile pb-1 text-center ${conmobprops.isVisible ? "cttm-1-animation" : ""}`}>
				{conmobprops.phone}
			</p>
			<p
				className={`contact-text-timings-mobile pb-1 text-center ${conmobprops.isVisible ? "cttm-2-animation" : ""}`}>
				{conmobprops.email}
			</p>
			<p 
				className={`contact-text-timings-mobile pb-1 text-center ${conmobprops.isVisible ? "cttm-3-animation" : ""}`}>
				{conmobprops.timings}
			</p>
		</>
	)
}
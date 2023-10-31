import React from "react"

export default function ContactContentDesktopItem(conmobprops) {
	return(
		<>
			<div 
				className={`contact-heading-mobile pb-4 text-center ${conmobprops.isVisible ? "contact-heading-mobile-animation": ""}`}>
				{conmobprops.title}<span>{conmobprops.title_span}</span>
			</div>
			<div 
				className={`contact-text-mobile pb-4 text-center ps-5 pe-5 ${conmobprops.isVisible ? "contact-text-mobile-animation" : ""}`}>
				{conmobprops.text}
			</div>
			<div 
				className={`contact-heading-mobile pb-4 text-center ${conmobprops.isVisible ? "contact-heading-mobile-timings-animation" : ""}`}>
				{conmobprops.s_title_1}
				<span>{conmobprops.s_title_span}</span>
				{conmobprops.s_title_2}
			</div>
			<div 
				className={`contact-text-timings-mobile pb-1 text-center ${conmobprops.isVisible ? "cttm-1-animation" : ""}`}>
				{conmobprops.phone}
			</div>
			<div 
				className={`contact-text-timings-mobile pb-1 text-center ${conmobprops.isVisible ? "cttm-2-animation" : ""}`}>
				{conmobprops.email}
			</div>
			<div 
				className={`contact-text-timings-mobile pb-1 text-center ${conmobprops.isVisible ? "cttm-3-animation" : ""}`}>
				{conmobprops.timings}
			</div>
		</>
	)
}
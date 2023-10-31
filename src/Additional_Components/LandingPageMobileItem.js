import React from "react"

export default function LandingPageMobileItem(props) {
	return(
		<>
			<div className="lp-title-mobile pb-3 text-center">{props.title}<span>{props.title_span}</span></div>
			<div className="lp-text-mobile ps-5 pe-5 text-center pb-5">
				{props.text}
			</div>
			<div className="text-center pb-5">
				<button className="lp-buttonMobile" href="#">{props.button_text}</button>
			</div>
		</>
	)
}
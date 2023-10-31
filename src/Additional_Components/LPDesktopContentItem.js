import React from "react"

export default function LandingPageDesktopItem(props) {
	return(
			<div className="d-flex flex-column lp-title-and-text pt-5 ps-3">
				<div className="lp-title pb-3">{props.title}<span>{props.title_span}</span></div>
				<div className="lp-text">{props.text}</div>
				<div className="col pt-4">
					<div className="pt-5">
						<button className="lp-button-shine" href="#">{props.button_text}</button>
					</div>
				</div>
			</div>

	)
}
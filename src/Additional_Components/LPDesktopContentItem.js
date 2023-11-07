import React from "react"
import {Link, Element} from "react-scroll"

export default function LandingPageDesktopItem(props) {
	return(
			<div className="d-flex flex-column lp-title-and-text pt-5 ps-3">
				<h1 className="lp-title pb-3">{props.title}<span>{props.title_span}</span></h1>
				<h4 className="lp-text">{props.text}</h4>
				<div className="col pt-4">
					<div className="pt-5">
						<button className="lp-button-shine">
							<Link to="contact" duration={5} smooth={true}>{props.button_text}</Link>
						</button>
					</div>
				</div>
			</div>

	)
}
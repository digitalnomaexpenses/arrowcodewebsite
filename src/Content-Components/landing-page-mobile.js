import React from "react"
import {Link, Element} from "react-scroll"

export default function LandingPageMobileItem(props) {
	return(
		<>
			<h1 className="lp-title-mobile pb-3 text-center">{props.title}<span>{props.title_span}</span></h1>
			<h4 className="lp-text-mobile ps-5 pe-5 text-center pb-5">
				{props.text}
			</h4>
			<div className="text-center pb-5">
				<button className="lp-buttonMobile">
					<Link to="contact" duration={5} smooth={true}>{props.button_text}</Link>
				</button>
			</div>
		</>
	)
}
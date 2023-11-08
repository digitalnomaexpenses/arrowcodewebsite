import React from "react"
import Why_Us_SVG from "../SVG-Components/why-us.js"

export default function WhyUsMobContentItem(props) {
	return(
		<>
			<h3 className={`
				section-heading pb-3 text-center
				${props.ysMobDarkMode ? "ws-dark-border" : "ws-light-border"}
				${props.isVisible ? "y-us-m-animation-1" : ""}`}>
				{props.title}<span>{props.title_span}</span>
			</h3>
			<div className="pt-3 why-us-svg-div">
				<Why_Us_SVG/>
			</div>
			<div className={`d-flex flex-row ps-2 pe-2 pt-3 pb-4 ${props.isVisible ? "y-us-m-animation-2" : ""}`}>
				<div>
					<img 
						src={props.ysMobDarkMode ? 
							"../SVGs/Why_Us/why-us-arrow-mobile-dark.svg" : 
							"../SVGs/Why_Us/why-us-arrow-mobile-light.svg"}/>
				</div>
				<div className="d-flex flex-column">
					<h4 className="why-us-points-heading-mobile">{props.p_title_1}</h4>
					<p className="why-us-points-text-mobile text-justify">{props.p_text_1}</p>
				</div>
			</div>
			<div className={`d-flex flex-row ps-2 pe-2 pb-4 ${props.isVisible ? "y-us-m-animation-3" : ""}`}>
				<div>
					<img 
						src={props.ysMobDarkMode ? 
							"../SVGs/Why_Us/why-us-arrow-mobile-dark.svg":"../SVGs/Why_Us/why-us-arrow-mobile-light.svg"}/>
				</div>
				<div className="d-flex flex-column">
					<h4 className="why-us-points-heading-mobile">{props.p_title_2}</h4>
					<p className="why-us-points-text-mobile text-justify">{props.p_text_2}</p>
				</div>
			</div>
			<div className={`d-flex flex-row ps-2 pe-2 pb-4 ${props.isVisible ? "y-us-m-animation-4" : ""}`}>
				<div>
					<img 
						src={props.ysMobDarkMode ? 
							"../SVGs/Why_Us/why-us-arrow-mobile-dark.svg":"../SVGs/Why_Us/why-us-arrow-mobile-light.svg"}/>
				</div>
				<div className="d-flex flex-column">
					<h4 className="why-us-points-heading-mobile">{props.p_title_3}</h4>
					<p className="why-us-points-text-mobile text-justify">{props.p_text_3}</p>
				</div>
			</div>
		</>
	)
}
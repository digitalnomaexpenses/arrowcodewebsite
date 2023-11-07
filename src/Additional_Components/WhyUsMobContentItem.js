import React from "react"
import WhyUsSVG from "../SVGs/WhyUsSVG.js"

export default function WhyUsMobContentItem(ysmobprops) {
	return(
		<>
			<h3 className={`
				section-heading pb-3 text-center
				${ysmobprops.ysMobDarkMode ? "ws-dark-border" : "ws-light-border"}
				${ysmobprops.isVisible ? "y-us-m-animation-1" : ""}`}>
				{ysmobprops.title}<span>{ysmobprops.title_span}</span>
			</h3>
			<div className="pt-2 pb-2 ps-5 pe-5 why-us-svg-div">
				<WhyUsSVG/>
			</div>
			<div className={`d-flex flex-row ps-5 pe-5 pt-3 pb-4 ${ysmobprops.isVisible ? "y-us-m-animation-2" : ""}`}>
				<div>
					<img 
						src={ysmobprops.ysMobDarkMode ? 
							"../SVGs/Why_Us/why-us-arrow-mobile-dark.svg":"../SVGs/Why_Us/why-us-arrow-mobile-light.svg"}/>
				</div>
				<div className="d-flex flex-column">
					<h4 className="why-us-points-heading-mobile">{ysmobprops.p_title_1}</h4>
					<p className="why-us-points-text-mobile text-justify">{ysmobprops.p_text_1}</p>
				</div>
			</div>
			<div className={`d-flex flex-row ps-5 pe-5 pb-4 ${ysmobprops.isVisible ? "y-us-m-animation-3" : ""}`}>
				<div>
					<img 
						src={ysmobprops.ysMobDarkMode ? 
							"../SVGs/Why_Us/why-us-arrow-mobile-dark.svg":"../SVGs/Why_Us/why-us-arrow-mobile-light.svg"}/>
				</div>
				<div className="d-flex flex-column">
					<h4 className="why-us-points-heading-mobile">{ysmobprops.p_title_2}</h4>
					<p className="why-us-points-text-mobile text-justify">{ysmobprops.p_text_2}</p>
				</div>
			</div>
			<div className={`d-flex flex-row ps-5 pe-5 pb-4 ${ysmobprops.isVisible ? "y-us-m-animation-4" : ""}`}>
				<div>
					<img 
						src={ysmobprops.ysMobDarkMode ? 
							"../SVGs/Why_Us/why-us-arrow-mobile-dark.svg":"../SVGs/Why_Us/why-us-arrow-mobile-light.svg"}/>
				</div>
				<div className="d-flex flex-column">
					<h4 className="why-us-points-heading-mobile">{ysmobprops.p_title_3}</h4>
					<p className="why-us-points-text-mobile text-justify">{ysmobprops.p_text_3}</p>
				</div>
			</div>
		</>
	)
}
import React from "react"
import WhyUsSVG from "../SVGs/WhyUsSVG.js"

export default function WhyUsMobContentItem(ysmobprops) {
	return(
		<>
			<div className={`
					why-us-mobile-heading pb-3 text-center
					${ysmobprops.ysMobDarkMode ? "ws-dark-border" : "ws-light-border"}
					${ysmobprops.isVisible ? "y-us-m-animation-1" : ""}`}>
					{ysmobprops.title}<span>{ysmobprops.title_span}</span>
				</div>
				<WhyUsSVG />
				<div className={`d-flex flex-row pt-3 pb-4 ${ysmobprops.isVisible ? "y-us-m-animation-2" : ""}`}>
					<div>
						<img 
							src={ysmobprops.ysMobDarkMode ? 
								"../SVGs/Why_Us/why-us-arrow-mobile-dark.svg":"../SVGs/Why_Us/why-us-arrow-mobile-light.svg"}/>
					</div>
					<div className="d-flex flex-column">
						<div className="why-us-points-heading-mobile">{ysmobprops.p_title_1}</div>
						<div className="why-us-points-text-mobile text-justify">{ysmobprops.p_text_1}</div>
					</div>
				</div>
				<div className={`d-flex flex-row pb-4 ${ysmobprops.isVisible ? "y-us-m-animation-3" : ""}`}>
					<div>
						<img 
							src={ysmobprops.ysMobDarkMode ? 
								"../SVGs/Why_Us/why-us-arrow-mobile-dark.svg":"../SVGs/Why_Us/why-us-arrow-mobile-light.svg"}/>
					</div>
					<div className="d-flex flex-column">
						<div className="why-us-points-heading-mobile">{ysmobprops.p_title_2}</div>
						<div className="why-us-points-text-mobile text-justify">{ysmobprops.p_text_2}</div>
					</div>
				</div>
				<div className={`d-flex flex-row pb-4 ${ysmobprops.isVisible ? "y-us-m-animation-4" : ""}`}>
					<div>
						<img 
							src={ysmobprops.ysMobDarkMode ? 
								"../SVGs/Why_Us/why-us-arrow-mobile-dark.svg":"../SVGs/Why_Us/why-us-arrow-mobile-light.svg"}/>
					</div>
					<div className="d-flex flex-column">
						<div className="why-us-points-heading-mobile">{ysmobprops.p_title_3}</div>
						<div className="why-us-points-text-mobile text-justify">{ysmobprops.p_text_3}</div>
					</div>
				</div>
		</>
	)
}
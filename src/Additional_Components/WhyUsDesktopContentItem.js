import React from "react"


export default function WhyUsDesktopItem(ysprops) {
	return(
			<div className="d-flex flex-column">
				<div className={`why-us-heading text-justify pe-5 ${ysprops.isVisible ? "why-us-rhs-animation" : ""}`}>
					{ysprops.title}<span>{ysprops.title_span}</span>
				</div>
				<hr 
					className={`
						${ysprops.ysDarkMode ? "why-us-line-dark" : "why-us-line-light"} 
						${ysprops.isVisible ? "why-us-rhs-animation" : ""}`}/>
				<div className={`d-flex flex-row pt-3 pb-5 pe-2 align-items-center 
								${ysprops.isVisible ? "why-us-points-1-animation" : ""}`}>
					<div>
						<img 
							src={ysprops.ysDarkMode? 
								"../SVGs/Why_Us/why-us-arrow-dark.svg": "../SVGs/Why_Us/why-us-arrow-light.svg"}
							className="img-fluid"/>
					</div>
					<div className="d-flex flex-column pe-3">
						<div className="why-us-points-heading">{ysprops.p_title_1}</div>
						<div className="why-us-points-text pe-5">{ysprops.p_text_1}</div>
					</div>
				</div>
				<div className={`d-flex flex-row pb-5 pe-2 align-items-center
								${ysprops.isVisible ? "why-us-points-2-animation" : ""}`}>
					<div>
						<img 
							src={ysprops.ysDarkMode? 
								"../SVGs/Why_Us/why-us-arrow-dark.svg": "../SVGs/Why_Us/why-us-arrow-light.svg"}
							className="img-fluid"/>
					</div>
					<div className="d-flex flex-column pe-3">
						<div className="why-us-points-heading">{ysprops.p_title_2}</div>
						<div className="why-us-points-text pe-5">{ysprops.p_text_2}</div>
					</div>
				</div>
				<div className={`d-flex flex-row pb-5 pe-2 align-items-center
								${ysprops.isVisible ? "why-us-points-3-animation" : ""}`}>
					<div>
						<img 
							src={ysprops.ysDarkMode? 
								"../SVGs/Why_Us/why-us-arrow-dark.svg": "../SVGs/Why_Us/why-us-arrow-light.svg"}
							className="img-fluid"/>
					</div>
					<div className="d-flex flex-column pe-3">
						<div className="why-us-points-heading">{ysprops.p_title_3}</div>
						<div className="why-us-points-text pe-5">{ysprops.p_text_3}</div>
					</div>
				</div>
			</div>
	)
}
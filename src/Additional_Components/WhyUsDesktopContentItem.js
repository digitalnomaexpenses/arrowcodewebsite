import React from "react"


export default function WhyUsDesktopItem(ysprops) {
	return(
			<div className="d-flex flex-column">
				<h3 className={`section-heading text-justify pe-5 ${ysprops.isVisible ? "why-us-rhs-animation" : ""}`}>
					{ysprops.title}<span>{ysprops.title_span}</span>
				</h3>
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
						<h4 className="why-us-points-heading">{ysprops.p_title_1}</h4>
						<p className="why-us-points-text pe-5">{ysprops.p_text_1}</p>
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
						<h4 className="why-us-points-heading">{ysprops.p_title_2}</h4>
						<p className="why-us-points-text pe-5">{ysprops.p_text_2}</p>
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
						<h4 className="why-us-points-heading">{ysprops.p_title_3}</h4>
						<p className="why-us-points-text pe-5">{ysprops.p_text_3}</p>
					</div>
				</div>
			</div>
	)
}
import React from "react"

export default function WhyUsMobile(props) {
	return(
		<div className="container pt-5">
			<div className={ props.darkMode ? "d-flex flex-column why-us-mobile dark pt-4 ps-4 pe-4" :"d-flex flex-column why-us-mobile light pt-4 ps-4 pe-4"}>
				<div className={props.darkMode ? "why-us-mobile-heading ws-dark-border pb-3 text-center" : "why-us-mobile-heading ws-light-border pb-3 text-center"}>
					Simplifying <span>Business</span>
				</div>
				<div className="d-flex flex-row pt-3 pb-4">
					<div><img src={props.darkMode ? "why-us-arrow-mobile-dark.svg":"why-us-arrow-mobile-light.svg"}/></div>
					<div className="d-flex flex-column">
						<div className="why-us-points-heading-mobile">Personalized Attention</div>
						<div className="why-us-points-text-mobile text-justify">
							We give you the attention that your 
							business deserves and transparent communication at every step.
						</div>
					</div>
				</div>
				<div className="d-flex flex-row pb-4">
					<div><img src={props.darkMode ? "why-us-arrow-mobile-dark.svg":"why-us-arrow-mobile-light.svg"}/></div>
					<div className="d-flex flex-column">
						<div className="why-us-points-heading-mobile">Competitive Pricing</div>
						<div className="why-us-points-text-mobile text-justify">
							As a small business, we know that a penny saved 
							is a penny earned. Keep it light on your pockets.
						</div>
					</div>
				</div>
				<div className="d-flex flex-row pb-4">
					<div><img src={props.darkMode ? "why-us-arrow-mobile-dark.svg":"why-us-arrow-mobile-light.svg"}/></div>
					<div className="d-flex flex-column">
						<div className="why-us-points-heading-mobile">On Time Delivery</div>
						<div className="why-us-points-text-mobile text-justify">
							We know punctuality is essential in business. 
							We keep our commitments so you can keep yours
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
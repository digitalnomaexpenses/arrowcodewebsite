import React from "react"
import { useInView } from 'react-intersection-observer'

export default function WhyUsMobile(props) {

	const { ref:yUsMRef, inView:yUsMVisibility } = useInView();

	return(
		<div 
			className="container pt-5"
			ref={yUsMRef}>
			<div className={`
					d-flex flex-column why-us-mobile pt-4 ps-4 pe-4 
					${props.darkMode ? "dark" :"light"}`}>
				<div className={`
					why-us-mobile-heading pb-3 text-center
					${props.darkMode ? "ws-dark-border" : "ws-light-border"}
					${yUsMVisibility ? "y-us-m-animation-1" : ""}`}>
					Simplifying <span>Business</span>
				</div>
				<div className={`d-flex flex-row pt-3 pb-4 ${yUsMVisibility ? "y-us-m-animation-2" : ""}`}>
					<div>
						<img 
							src={props.darkMode ? 
								"../SVGs/Why_Us/why-us-arrow-mobile-dark.svg":"../SVGs/Why_Us/why-us-arrow-mobile-light.svg"}/>
					</div>
					<div className="d-flex flex-column">
						<div className="why-us-points-heading-mobile">Personalized Attention</div>
						<div className="why-us-points-text-mobile text-justify">
							We give you the attention that your 
							business deserves and transparent communication at every step.
						</div>
					</div>
				</div>
				<div className={`d-flex flex-row pb-4 ${yUsMVisibility ? "y-us-m-animation-3" : ""}`}>
					<div>
						<img 
							src={props.darkMode ? 
								"../SVGs/Why_Us/why-us-arrow-mobile-dark.svg":"../SVGs/Why_Us/why-us-arrow-mobile-light.svg"}/>
					</div>
					<div className="d-flex flex-column">
						<div className="why-us-points-heading-mobile">Competitive Pricing</div>
						<div className="why-us-points-text-mobile text-justify">
							As a small business, we know that a penny saved 
							is a penny earned. Keep it light on your pockets.
						</div>
					</div>
				</div>
				<div className={`d-flex flex-row pb-4 ${yUsMVisibility ? "y-us-m-animation-4" : ""}`}>
					<div>
						<img 
							src={props.darkMode ? 
								"../SVGs/Why_Us/why-us-arrow-mobile-dark.svg":"../SVGs/Why_Us/why-us-arrow-mobile-light.svg"}/>
					</div>
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
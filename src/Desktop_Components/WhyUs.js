import React from "react"
import WhyUsSVG from "../Additional_Components/WhyUsSVG"
import { useInView } from 'react-intersection-observer'


export default function WhyUs(props) {

	const { ref: whyUsRef, inView: whyUsVisibility } = useInView();

	return(
		<div 
			className="container pt-5"
			ref={whyUsRef}>
			<div className={`d-flex flex-row why-us pt-5 ps-4 pb-5 ${props.darkMode? "dark" : "light"}`}>
				<div className={`col ps-lg-4 ${ whyUsVisibility ? "why-us-lhs-animation" : ""}`}>
					<div className="col-lg-9 col-md-11 h-100">
						<div className={props.darkMode ? "d-flex flex-column why-us-inner-card-dark ps-3 pt-3": "d-flex flex-column why-us-inner-card ps-3 pt-3"}>
							<div className="why-us-inner-card-upper-heading pb-2">Welcome To</div>
							<div className="why-us-inner-card-heading pe-5">
								The digital freedom passport
							</div>
							<div className="why-us-inner-card-heading pe-5 pb-2">
								for your business
							</div>
							<div className="whyUs3dParentDiv">
								<img src="../SVGs/Why_Us/why-us.svg" className="img-fluid"/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-7 col">
					<div className="d-flex flex-column">
						<div className={`why-us-heading text-justify pe-5 ${whyUsVisibility ? "why-us-rhs-animation" : ""}`}>
							Simplifying <span>Business</span>
						</div>
						<hr 
							className={`
								${props.darkMode ? "why-us-line-dark" : "why-us-line-light"} 
								${whyUsVisibility ? "why-us-rhs-animation" : ""}`}/>
						<div className={`d-flex flex-row pt-3 pb-5 pe-2 align-items-center 
										${whyUsVisibility ? "why-us-points-1-animation" : ""}`}>
							<div>
								<img 
									src={props.darkMode? 
										"../SVGs/Why_Us/why-us-arrow-dark.svg": "../SVGs/Why_Us/why-us-arrow-light.svg"}
									className="img-fluid"/>
							</div>
							<div className="d-flex flex-column pe-3">
								<div className="why-us-points-heading">Personalized Attention</div>
								<div className="why-us-points-text pe-5">
									We give you the attention that your 
									business deserves and transparent communication at every step.
								</div>
							</div>
						</div>
						<div className={`d-flex flex-row pb-5 pe-2 align-items-center
										${whyUsVisibility ? "why-us-points-2-animation" : ""}`}>
							<div>
								<img 
									src={props.darkMode? 
										"../SVGs/Why_Us/why-us-arrow-dark.svg": "../SVGs/Why_Us/why-us-arrow-light.svg"}
									className="img-fluid"/>
							</div>
							<div className="d-flex flex-column pe-3">
								<div className="why-us-points-heading">Competitive Pricing</div>
								<div className="why-us-points-text pe-5">
									As a small business, we know that a penny saved 
									is a penny earned. Keep it light on your pockets.
								</div>
							</div>
						</div>
						<div className={`d-flex flex-row pb-5 pe-2 align-items-center
										${whyUsVisibility ? "why-us-points-3-animation" : ""}`}>
							<div>
								<img 
									src={props.darkMode? 
										"../SVGs/Why_Us/why-us-arrow-dark.svg": "../SVGs/Why_Us/why-us-arrow-light.svg"}
									className="img-fluid"/>
							</div>
							<div className="d-flex flex-column pe-3">
								<div className="why-us-points-heading">On Time Delivery</div>
								<div className="why-us-points-text pe-5">
									We know punctuality is essential in business. 
									We keep our commitments so you can keep yours.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
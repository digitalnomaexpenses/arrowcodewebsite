import React, {useRef} from "react"
import {motion, useInView as FramerMotionUseInView} from "framer-motion"
import Why_Us_SVG from "../SVG-Components/why-us.js"
import Why_Us_Mobile_SVG from "../SVG-Components/why-us-mobile.js"

export default function WhyUsMobContentItem(props) {

	const titleref = useRef(null);
	const titleInView = FramerMotionUseInView(titleref, { once: true })

	const svgref = useRef(null);
	const svgInView = FramerMotionUseInView(svgref, { once: true })

	const point1ref = useRef(null);
	const point1InView = FramerMotionUseInView(point1ref, { once: true })

	const point2ref = useRef(null);
	const point2InView = FramerMotionUseInView(point2ref, { once: true })

	const point3ref = useRef(null);
	const point3InView = FramerMotionUseInView(point3ref, { once: true })


	return(
		<>
			<h3 
				className={`section-heading pb-3 text-center
				${props.ysMobDarkMode ? "ws-dark-border" : "ws-light-border"}`}
				ref={titleref}
				style={{
					opacity: titleInView ? 1 : 0,
					transform: titleInView ? "none" : "translateY(50%)",
					transition: "all 1s"
					}}>
				{props.title}<span>{props.title_span}</span>
			</h3>
			<div 
				className="pt-3 why-us-svg-div"
				ref={svgref}
				style={{
					opacity: svgInView ? 1 : 0,
					transform: svgInView ? "none" : "translateY(30%)",
					transition: "all 1s 0.3s"
					}}>
				<Why_Us_Mobile_SVG/>
			</div>
			<div 
				className="d-flex flex-row ps-2 pe-2 pt-3 pb-4"
				ref={point1ref}
				style={{
					opacity: point1InView ? 1 : 0,
					transform: point1InView ? "none" : "translateY(50%)",
					transition: "all 1s 0.6s"
					}}>
				<div>
					<img 
						src={props.ysMobDarkMode ? 
							"../SVGs/Why_Us/why-us-arrow-mobile-dark.svg" : 
							"../SVGs/Why_Us/why-us-arrow-mobile-light.svg"}
						className="img-fluid"
						alt="Why choose us point one icon"/>
				</div>
				<div className="d-flex flex-column">
					<h4 className="why-us-points-heading-mobile">{props.p_title_1}</h4>
					<p className="why-us-points-text-mobile text-justify">{props.p_text_1}</p>
				</div>
			</div>
			<div 
				className="d-flex flex-row ps-2 pe-2 pb-4"
				ref={point2ref}
				style={{
					opacity: point2InView ? 1 : 0,
					transform: point2InView ? "none" : "translateY(50%)",
					transition: "all 1s 0.8s"
					}}>
				<div>
					<img 
						src={props.ysMobDarkMode ? 
							"../SVGs/Why_Us/why-us-arrow-mobile-dark.svg"
							:"../SVGs/Why_Us/why-us-arrow-mobile-light.svg"}
						className="img-fluid"
						alt="Why choose us point two icon"/>
				</div>
				<div className="d-flex flex-column">
					<h4 className="why-us-points-heading-mobile">{props.p_title_2}</h4>
					<p className="why-us-points-text-mobile text-justify">{props.p_text_2}</p>
				</div>
			</div>
			<div 
				className="d-flex flex-row ps-2 pe-2 pb-4"
				ref={point3ref}
				style={{
					opacity: point3InView ? 1 : 0,
					transform: point3InView ? "none" : "translateY(50%)",
					transition: "all 1s 1s"
					}}>
				<div>
					<img 
						src={props.ysMobDarkMode ? 
							"../SVGs/Why_Us/why-us-arrow-mobile-dark.svg":
							"../SVGs/Why_Us/why-us-arrow-mobile-light.svg"}
						className="img-fluid"
						alt="Why choose us point three icon"/>
				</div>
				<div className="d-flex flex-column">
					<h4 className="why-us-points-heading-mobile">{props.p_title_3}</h4>
					<p className="why-us-points-text-mobile text-justify">{props.p_text_3}</p>
				</div>
			</div>
		</>
	)
}
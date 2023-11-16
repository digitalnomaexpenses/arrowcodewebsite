import React, {useRef} from "react"
import {motion, useScroll, useTransform, useInView as FramerMotionUseInView} from "framer-motion"
import About_Us_SVG from "../SVG-Components/about-us.js"

export default function AboutUsContentMobileItem(props) {

	const titleref = useRef(null);
	const titleInView = FramerMotionUseInView(titleref, { once: true })

	const svgref = useRef(null);
	const svgInView = FramerMotionUseInView(svgref, { once: true })

	const textref = useRef(null);
	const textInView = FramerMotionUseInView(textref, { once: true })

	
	return(
		<>
			<h3 
				className="section-heading pb-4 pt-3 text-center"
				ref={titleref}
				style={{
					opacity: titleInView ? 1 : 0,
					transform: titleInView ? "none" : "translateY(50%)",
					transition: "all 1s"
					}}>
				{props.title}<span>{props.title_span}</span>
			</h3>
			<div 
				className="about-us-svg-div pb-3"
				ref={svgref}
				style={{
					opacity: svgInView ? 1 : 0,
					transform: svgInView ? "none" : "translateY(50%)",
					transition: "all 1s 0.3s"
					}}
			>
				<About_Us_SVG darkMode={props.darkMode}/>
			</div>
			<p 
				className="section-text pb-4 ps-2 pe-2 text-center"
				ref={textref}
				style={{
					opacity: textInView ? 1 : 0,
					transform: textInView ? "none" : "translateY(50%)",
					transition: "all 1s 0.6s"
					}}>
				{props.text}
			</p>
		</>
	)
}
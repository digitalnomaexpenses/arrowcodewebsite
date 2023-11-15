import React, {useRef} from "react"
import {motion, useInView as FramerMotionUseInView} from "framer-motion"

export default function ServicesContentMobItem(props) {

	const titleref = useRef(null);
	const titleInView = FramerMotionUseInView(titleref, { once: true })

	const textref = useRef(null);
	const textInView = FramerMotionUseInView(textref, { once: true })

	return (
		<>
			<h3 
				className="section-heading pb-4"
				ref={titleref}
				style={{
					opacity: titleInView ? 1 : 0,
					transform: titleInView ? "none" : "translateY(50%)",
					transition: "all 1s"
					}}>
				{props.title}
				<span>{props.title_span}</span>
			</h3>
			<p 
				className="section-text text-center"
				ref={textref}
				style={{
					opacity: textInView ? 1 : 0,
					transform: textInView ? "none" : "translateY(30%)",
					transition: "all 1s 0.3s"
					}}>
				{props.text}
			</p>
		</>
	)
}
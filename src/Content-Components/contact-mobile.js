import React, {useRef} from "react"
import {motion, useScroll, useTransform, useInView as FramerMotionUseInView} from "framer-motion"

export default function ContactContentDesktopItem(props) {

	const titleref = useRef(null);
	const titleInView = FramerMotionUseInView(titleref, { once: true })

	const textref = useRef(null);
	const textInView = FramerMotionUseInView(textref, { once: true })

	const title2ref = useRef(null);
	const title2InView = FramerMotionUseInView(title2ref, { once: true })

	const text2ref = useRef(null);
	const text2InView = FramerMotionUseInView(text2ref, { once: true })

	return(
		<>
			<h3 
				className="section-heading pb-4 text-center"
				ref={titleref}
				style={{
					opacity: titleInView ? 1 : 0,
					transform: titleInView ? "none" : "translateY(50%)",
					transition: "all 1s"
					}}>
				{props.title}<span>{props.title_span}</span>
			</h3>
			<p 
				className="section-text pb-4 text-center ps-5 pe-5"
				ref={textref}
				style={{
					opacity: textInView ? 1 : 0,
					transform: textInView ? "none" : "translateY(50%)",
					transition: "all 1s 0.2s"
					}}>
				{props.text}
			</p>
			<h4 
				className="contact-heading-timings pb-4 text-center"
				ref={title2ref}
				style={{
					opacity: title2InView ? 1 : 0,
					transform: title2InView ? "none" : "translateY(50%)",
					transition: "all 1s 0.4s"
					}}>
				{props.s_title_1}
				<span>{props.s_title_span}</span>
				{props.s_title_2}
			</h4>
			<p
				className="contact-text-timings-mobile pb-1 text-center"
				ref={text2ref}
				style={{
					opacity: text2InView ? 1 : 0,
					transform: text2InView ? "none" : "translateY(50%)",
					transition: "all 1s 0.6s"
					}}>
				{props.phone}
			</p>
			<p
				className="contact-text-timings-mobile pb-1 text-center"
				style={{
					opacity: text2InView ? 1 : 0,
					transform: text2InView ? "none" : "translateY(50%)",
					transition: "all 1s 0.7s"
					}}>
				{props.email}
			</p>
			<p 
				className="contact-text-timings-mobile pb-1 text-center"
				style={{
					opacity: text2InView ? 1 : 0,
					transform: text2InView ? "none" : "translateY(50%)",
					transition: "all 1s 0.8s"
					}}>
				{props.timings}
			</p>
		</>
	)
}
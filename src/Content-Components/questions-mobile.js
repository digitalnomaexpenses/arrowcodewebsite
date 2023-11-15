import React, {useRef} from "react"
import {Link, Element} from "react-scroll"
import {motion, useInView as FramerMotionUseInView} from "framer-motion"

export default function QuestionsMobContentItem(props) {

	const titleref = useRef(null);
	const titleInView = FramerMotionUseInView(titleref, { once: true })

	const textref = useRef(null);
	const textInView = FramerMotionUseInView(textref, { once: true })

	const buttonref = useRef(null);
	const buttonInView = FramerMotionUseInView(buttonref, { once: true })

	return (
		<>
			<h3 
				className="section-heading pb-3 text-center"
				ref={titleref}
				style={{
					opacity: titleInView ? 1 : 0,
					transform: titleInView ? "none" : "translateY(50%)",
					transition: "all 1s"
					}}>
				{props.title}<span>{props.title_span}</span>
			</h3>
			<p 
				className="section-text pb-4 text-center"
				ref={textref}
				style={{
					opacity: textInView ? 1 : 0,
					transform: textInView ? "none" : "translateY(30%)",
					transition: "all 1s 0.3s"
					}}>
				{props.text}
			</p>
			<motion.div 
				className="text-center pt-3 pb-3">
				<button 
					ref={buttonref}
					className={`questions-buttonMobile ${buttonInView ? "ques-button-mob-animation" : ""}`}
					>
					<Link to="contact" smooth={true} duration={5}>{props.button_text}</Link>
				</button>
			</motion.div>
		</>	
	)
}
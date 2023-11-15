import React from "react"
import {Link, Element} from "react-scroll"
import {motion} from "framer-motion"

export default function LandingPageMobileItem(props) {
	return(
		<>
			<motion.h1 
				className="lp-title-mobile pb-3 text-center"
				initial={{y:40, opacity:0}}
				animate={{y:0, opacity:1}}
				transition={{delay: 0.9, duration: 1, type:"spring"}}>
				{props.title}
				<span>{props.title_span}</span>
			</motion.h1>
			<motion.h4 
				className="lp-text-mobile ps-5 pe-5 text-center pb-5"
				initial={{y:40, opacity:0}}
				animate={{y:0, opacity:1}}
				transition={{delay: 1.2, duration: 1, type:"spring"}}>
				{props.text}
			</motion.h4>
			<motion.div 
				className="text-center pb-5"
				initial={{y:40, opacity:0}}
				animate={{y:0, opacity:1}}
				transition={{delay: 1.5, duration: 1, type:"spring"}}>
				<button className="lp-buttonMobile">
					<Link to="contact" duration={5} smooth={true}>{props.button_text}</Link>
				</button>
			</motion.div>
		</>
	)
}
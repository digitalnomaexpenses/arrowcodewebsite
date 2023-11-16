import React, {useRef} from "react"
import {motion, useScroll, useTransform, useInView as FramerMotionUseInView} from "framer-motion"

import Questions_JSON from "../JSONs/questions"
import Questions_JSON_Component_Desktop from "../Content-Components/questions-desktop"
import Questions_JSON_Component_Mobile from "../Content-Components/questions-mobile"

import Questions_Accordion_JSON from "../JSONs/questions-accordion"
import Questions_Accordion_Component_Desktop from "../Content-Components/questions-accordion-desktop"
import Questions_Accordion_Component_Mobile from "../Content-Components/questions-accordion-mobile"

import Questions_SVG from "../SVG-Components/questions.js"



export default function Questions(props) {

	let Questions_JSON_Content_Desktop = Questions_JSON.map(eachElement => (
			<Questions_JSON_Component_Desktop 
				key={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				button_text={eachElement.button_text}
			/>
		))

	let Questions_JSON_Content_Mobile = Questions_JSON.map(eachElement => (
			<Questions_JSON_Component_Mobile
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				button_text={eachElement.button_text}
			/>
		))

	let Questions_Accordion_Desktop =  Questions_Accordion_JSON.map(eachElement => (
			<Questions_Accordion_Component_Desktop
				key={eachElement.id}
				id={eachElement.id}
				qDarkMode={props.darkMode}
				question={eachElement.question}
				answer={eachElement.answer}
			/>
		))

	let Questions_Accordion_Mobile =  Questions_Accordion_JSON.map(eachElement => (
			<Questions_Accordion_Component_Mobile
				key={eachElement.id}
				id={eachElement.id}
				qMobAccDarkMode={props.darkMode}
				question={eachElement.question}
				answer={eachElement.answer}
			/>
		))

	/*Framer motion for desktop start*/

	const ref = useRef(null);
	const {scrollYProgress} = useScroll({
		target: ref,
		offset:["start end", "end start"],
	})

	const lhsx = useTransform(scrollYProgress, [0,0.4], ["-150%", "0%"]);
	const rhsx = useTransform(scrollYProgress, [0,0.4], ["150%", "0%"]);
	const scrollopacity = useTransform(scrollYProgress, [0,0.1], ["0.5", "1"]);

	/*Framer motion for desktop end*/

	/*Framer motion animations for mobile start. some mobile animations 
	in Content-Components/questions-mobile and services-accordion-mobile*/

	const svgref = useRef(null);
	const svgInView = FramerMotionUseInView(svgref, { once: true })

	/*Framer motion animations for mobile end. some mobile animations 
	in Content-Components/questions-mobile and services-accordion-mobile*/

	return(
		<section 
			className="container pt-5"
			id="questions">
			{
				props.windowWidth > 992 &&

				<div 
					className={`questions d-flex flex-row pt-5 ps-5 pe-5 pb-3 ${props.darkMode ? "dark": "light"}`}
					ref={ref}>
					<motion.div 
						className="col-5 pe-4"
						style={{x:lhsx, opacity:scrollopacity}}>
						<div className="d-flex flex-column">
							{Questions_JSON_Content_Desktop}
							<div 
								className="questions-svg-div ps-1">
								<Questions_SVG darkMode={props.darkMode}/>
							</div>
						</div>
					</motion.div>
					<motion.div 
						className="col"
						style={{x:rhsx, opacity:scrollopacity}}>
						<div className="accordion accordion-flush" id="accordionFlushExample">
							{Questions_Accordion_Desktop}
						</div>
					</motion.div>
				</div>
			}

			{
				props.windowWidth <= 992 &&

				<div className={props.darkMode ? "questionsMobile dark": "questionsMobile light"}>
					<div className="d-flex flex-column pt-5 pb-5 ps-4 pe-4">
						{Questions_JSON_Content_Mobile}
						<div 
							className="questions-svg-div pb-3 ps-2 pe-2"
							ref={svgref}
							style={{
							opacity: svgInView ? 1 : 0,
							transform: svgInView ? "none" : "translateY(30%)",
							transition: "all 1s 0.6s"
							}}>
								<Questions_SVG darkMode={props.darkMode}/>
						</div>
						<div className="accordion accordion-flush" id="accordionFlushExample">
							{Questions_Accordion_Mobile}
						</div>
					</div>
			</div>

			}
			
		</section>
	)
}
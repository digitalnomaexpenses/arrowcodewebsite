import React, {useRef} from "react"
import {motion, useScroll, useTransform, useInView as FramerMotionUseInView} from "framer-motion"

import Services_JSON from "../JSONs/services"
import Services_JSON_Component_Desktop from "../Content-Components/services-desktop"
import Services_JSON_Component_Mobile from "../Content-Components/services-mobile"

import Services_Drawer_1_JSON from "../JSONs/services-drawer-1"
import Services_Drawer_2_JSON from "../JSONs/services-drawer-2"
import Services_Drawer_Component_Desktop from "../Content-Components/services-drawer-desktop-framer-motion"
import Services_Drawer_Component_Mobile from "../Content-Components/services-drawer-mobile"

import Services_SVG from "../SVG-Components/services.js"


export default function Services(props) {

	let Services_JSON_Content_Desktop = Services_JSON.map(eachElement => (
			<Services_JSON_Component_Desktop 
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
			/>
		))

	let Services_JSON_Content_Mobile= Services_JSON.map(eachElement => (
		<Services_JSON_Component_Mobile
			key={eachElement.id}
			id={eachElement.id}
			title={eachElement.title}
			title_span={eachElement.title_span}
			text={eachElement.text}
		/>
		))


	let Services_Drawer_1_Desktop = Services_Drawer_1_JSON.map(eachElement => (
		<Services_Drawer_Component_Desktop
			key={eachElement.id}
			id={eachElement.id}
			number={eachElement.number}
			title = {eachElement.title}
			desc = {eachElement.desc}
		/>
		))

	let Services_Drawer_2_Desktop = Services_Drawer_2_JSON.map(eachElement => (
		<Services_Drawer_Component_Desktop
			key={eachElement.id}
			id={eachElement.id}
			number={eachElement.number}
			title = {eachElement.title}
			desc = {eachElement.desc}
		/>
		))


	let Services_Drawer_1_Mobile = Services_Drawer_1_JSON.map(eachElement => (
			<Services_Drawer_Component_Mobile
				key={eachElement.id}
				id={eachElement.id}
				number={eachElement.number}
				title = {eachElement.title}
				desc = {eachElement.desc}
			/>
		))

	let Services_Drawer_2_Mobile = Services_Drawer_2_JSON.map(eachElement => (
			<Services_Drawer_Component_Mobile
				key={eachElement.id}
				id={eachElement.id}
				number={eachElement.number}
				title = {eachElement.title}
				desc = {eachElement.desc}
			/>
		))

	/*Framer motion animations for desktop start*/
	const ref = useRef(null);
	const {scrollYProgress} = useScroll({
		target: ref,
		offset:["start end", "end start"],
	})

	const lhsx = useTransform(scrollYProgress, [0,0.35], ["-150%", "0%"]);
	const rhsx = useTransform(scrollYProgress, [0,0.35], ["150%", "0%"]);
	const scrollopacity = useTransform(scrollYProgress, [0,0.1], ["0.5", "1"]);

	/*Framer motion animations for desktop end.*/



	/*Framer motion animations for mobile start. some mobile animations 
	in Content-Components/services-mobile and services-drawer-mobile*/
	
	const hrlineref = useRef(null);
	const lineInView = FramerMotionUseInView(hrlineref, { once: true })

	const svgref = useRef(null);
	const svgInView = FramerMotionUseInView(svgref, { once: true })
	
	/*Framer motion animations for mobile end. some mobile animations 
	in Content-Components/services-mobile and services-drawer-mobile*/

	return(
		<section 
			className="container pt-5"
			id="services">
			{
				props.windowWidth > 992 && 

				<div className="d-flex flex-row">
					<motion.div 
						className="col-lg-6 col-8 pt-4 ps-5"
						style={{x:lhsx, opacity: scrollopacity}}>
						{Services_JSON_Content_Desktop}
						<div className="row row-cols-2 pe-5 pt-4">
							<div className="d-flex flex-column services-list">
								{Services_Drawer_1_Desktop}
							</div>
							<div className="d-flex flex-column services-list">
								{Services_Drawer_2_Desktop}
							</div>
						</div>
					</motion.div>
					<motion.div 
						className="col ps-5"
						style={{x:rhsx, opacity: scrollopacity}}>
						<div className="services-svg-div pt-4 pe-2">
							<Services_SVG darkMode={props.darkMode}/>
						</div>
					</motion.div>
				</div>

			}
			{
				props.windowWidth <= 992 &&

				<div className="d-flex flex-column pt-5 justify-content-center align-items-center">
					{Services_JSON_Content_Mobile}
					<hr 
						className="services-line"
						ref={hrlineref}
						style={{
							opacity: lineInView ? 1 : 0,
							transform: lineInView ? "none" : "translateY(50%)",
							transition: "all 1s 0.3s"
							}}/>
					<div 
						className="services-svg-div pb-3"
						ref={svgref}
						style={{
						opacity: svgInView ? 1 : 0,
						transform: svgInView ? "none" : "translateY(30%)",
						transition: "all 1s 0.6s"
						}}>
						<Services_SVG darkMode={props.darkMode}/>
					</div>
					{Services_Drawer_1_Mobile}
					{Services_Drawer_2_Mobile}
				</div>
			}
		</section>
	)}
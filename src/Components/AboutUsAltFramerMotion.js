import React, {useRef} from "react"
import {motion, useScroll, useTransform, useInView as FramerMotionUseInView} from "framer-motion"

import About_Us_JSON from "../JSONs/about-us"
import About_Us_JSON_Component_Desktop from "../Content-Components/about-us-desktop"
import About_Us_JSON_Component_Mobile from "../Content-Components/about-us-mobile"

import About_Us_SVG from "../SVG-Components/about-us.js"
import Project_Management_SVG from "../SVG-Components/about-us-project-management.js"
import Web_Development_SVG from "../SVG-Components/about-us-web-development.js"
import Projects_Delivered_SVG from "../SVG-Components/about-us-projects-delivered.js"
import Furry_Felines_SVG from "../SVG-Components/about-us-furry-felines.js"


export default function AboutUs(props) {

	let About_Us_JSON_Content_Desktop = About_Us_JSON.map(eachElement => (
			<About_Us_JSON_Component_Desktop
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
			/>
		))

	let About_Us_JSON_Content_Mobile = About_Us_JSON.map(eachElement => (
			<About_Us_JSON_Component_Mobile 
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
			/>
		))

	/*Framer motion animation desktop start*/

	const ref = useRef(null);
	const {scrollYProgress} = useScroll({
		target: ref,
		offset:["start end", "end start"],
	})

	const lhsx = useTransform(scrollYProgress, [0,0.4], ["-150%", "0%"]);
	const rhsx = useTransform(scrollYProgress, [0,0.4], ["150%", "0%"]);
	const scrollopacity = useTransform(scrollYProgress, [0,0.1], ["0.5", "1"]);

	/*Framer motion animation desktop end*/

	/*Framer motion animation mobile start. some animations in Content-Components/contact-mobile*/

	const item1ref = useRef(null);
	const item1InView = FramerMotionUseInView(item1ref, { once: true })

	const item2ref = useRef(null);
	const item2InView = FramerMotionUseInView(item2ref, { once: true })

	const item3ref = useRef(null);
	const item3InView = FramerMotionUseInView(item3ref, { once: true })

	const item4ref = useRef(null);
	const item4InView = FramerMotionUseInView(item4ref, { once: true })


	/*Framer motion animation mobile end. some animations in Content-Components/about-us-mobile*/

	return(
		<section 
		className="container pt-5"
		id="about-us"
		>

		{
			props.windowWidth > 992 && 

			<div 
				className="about-us d-flex flex-row"
				ref={ref}>
				<motion.div 
					className="col-lg-6 col-7 ps-5 pe-lg-5 pe-2"
					style={{x:lhsx, opacity:scrollopacity}}>
					{About_Us_JSON_Content_Desktop}
					<div className="row row-cols-2 about-us-text-with-icons">
						<div className="col">
							<div className="d-flex flex-row pb-4 pt-2">
								<div className="project-management-svg pe-3">
									<Project_Management_SVG darkMode={props.darkMode}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<h4 className="about-us-highlight-number">10+ </h4>
									<h4 className="about-us-highlight-text">Years of Product Management</h4>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="d-flex flex-row pb-4 pt-2">
								<div className="web-development-svg pe-3">
									<Web_Development_SVG darkMode={props.darkMode}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<h4 className="about-us-highlight-number">5+</h4>
									<h4 className="about-us-highlight-text"> Years of Web Development</h4>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="d-flex flex-row pb-4">
								<div className="projects-delivered-svg pe-3">
									<Projects_Delivered_SVG darkMode={props.darkMode}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<h4 className="about-us-highlight-number">40+ </h4>
									<h4 className="about-us-highlight-text">Projects Delivered</h4>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="d-flex flex-row pb-4">
								<div className="furry-feline-svg pe-3">
									<Furry_Felines_SVG darkMode={props.darkMode}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<h4 className="about-us-highlight-number">2+</h4>
									<h4 className="about-us-highlight-text"> Furry Feline Friends</h4>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
				<motion.div 
					className="col ps-5 pe-5 about-us-svg-div"
					style={{x:rhsx, opacity:scrollopacity}}>
					<About_Us_SVG darkMode={props.darkMode}/>
				</motion.div>
			</div>
		}

		{
			props.windowWidth <=992 &&

			<div className={`d-flex flex-column ${props.darkMode? "" : ""}`}>
				{About_Us_JSON_Content_Mobile}
				<div className="row row-cols-2">
						<div className="col text-center pb-4"
							ref={item1ref}
							style={{
							opacity: item1InView ? 1 : 0,
							transform: item1InView ? "none" : "translateY(50%)",
							transition: "all 1s 0.9s"
							}}
							>
							<div className="d-flex flex-column justify-content-center">
								<div className="project-management-svg">
									<Project_Management_SVG darkMode={props.darkMode}/>
								</div>
								<div className="d-flex flex-column justify-content-center pt-1">
									<h4 className="about-us-highlight-number-mobile">10+ </h4>
									<h4 className="about-us-highlight-text-mobile">Years of Product Management</h4>
								</div>
							</div>
						</div>
						<div className="col text-center pb-4"
							ref={item2ref}
							style={{
							opacity: item2InView ? 1 : 0,
							transform: item2InView ? "none" : "translateY(50%)",
							transition: "all 1s 0.9s"
							}}
							>
							<div className="d-flex flex-column justify-content-center">
								<div className="web-development-svg">
									<Web_Development_SVG darkMode={props.darkMode}/>
								</div>
								<div className="d-flex flex-column justify-content-center pt-1">
									<h4 className="about-us-highlight-number-mobile">5+</h4>
									<h4 className="about-us-highlight-text-mobile"> Years of Web Development</h4>
								</div>
							</div>
						</div>
						<div className="col text-center"
							ref={item3ref}
							style={{
							opacity: item3InView ? 1 : 0,
							transform: item3InView ? "none" : "translateY(50%)",
							transition: "all 1s 0.9s"
							}}
							>
							<div className="d-flex flex-column justify-content-center">
								<div className="projects-delivered-svg">
									<Projects_Delivered_SVG darkMode={props.darkMode}/>
								</div>
								<div className="d-flex flex-column justify-content-center pt-1">
									<h4 className="about-us-highlight-number-mobile">40+ </h4>
									<h4 className="about-us-highlight-text-mobile">Projects Delivered</h4>
								</div>
							</div>
						</div>
						<div className="col text-center"
							ref={item4ref}
							style={{
							opacity: item4InView ? 1 : 0,
							transform: item1InView ? "none" : "translateY(50%)",
							transition: "all 1s 0.9s"
							}}
							>
							<div className="d-flex flex-column justify-content-center">
								<div className="furry-feline-svg">
									<Furry_Felines_SVG darkMode={props.darkMode}/>
								</div>
								<div className="d-flex flex-column justify-content-center pt-1">
									<h4 className="about-us-highlight-number-mobile">2+</h4>
									<h4 className="about-us-highlight-text-mobile"> Furry Feline Friends</h4>
								</div>
							</div>
						</div>
					</div>
			</div>
		}

			
		</section>
	)
}
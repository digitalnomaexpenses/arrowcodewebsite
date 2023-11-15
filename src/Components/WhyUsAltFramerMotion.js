import React, {useRef} from "react"
import {motion, useScroll, useTransform, useInView as FramerMotionUseInView} from "framer-motion"

import Why_Us_JSON from "../JSONs/why-us"
import Why_Us_JSON_Component_Desktop from "../Content-Components/why-us-desktop"
import Why_Us_JSON_Component_Mobile from "../Content-Components/why-us-mobile"

import Why_Us_SVG from "../SVG-Components/why-us.js"

export default function WhyUs(props) {

	let Why_Us_JSON_Content_Desktop = Why_Us_JSON.map(eachElement => (
			<Why_Us_JSON_Component_Desktop
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				p_title_1={eachElement.p_title_1}
        		p_text_1={eachElement.p_text_1}
        		p_title_2={eachElement.p_title_2}
        		p_text_2={eachElement.p_text_2}
        		p_title_3={eachElement.p_title_3}
        		p_text_3={eachElement.p_text_3}
        		ysDarkMode={props.darkMode}
			/>
		))

	let Why_Us_JSON_Content_Mobile = Why_Us_JSON.map(eachElement => (
			<Why_Us_JSON_Component_Mobile
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				p_title_1={eachElement.p_title_1}
        		p_text_1={eachElement.p_text_1}
        		p_title_2={eachElement.p_title_2}
        		p_text_2={eachElement.p_text_2}
        		p_title_3={eachElement.p_title_3}
        		p_text_3={eachElement.p_text_3}
        		ysMobDarkMode={props.darkMode}
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

	/*Framer motion for mobile in Content-Components/why-us-mobile.js*/

	return(
		<section 
			className="container pt-5"
			id="why-us"
			ref={ref}>
			{
				props.windowWidth > 768 && 
				<div className={`d-flex flex-row why-us pt-5 ps-4 pb-5 ${props.darkMode? "dark" : "light"}`}>
					<motion.div 
						className="col ps-lg-4"
						style={{x:lhsx, opacity:scrollopacity}}>
						<div className="col-lg-9 col-md-11 h-100">
							<div 
								className={
									`d-flex flex-column ps-3 pt-3 
									${props.darkMode ? 
									" why-us-inner-card-dark" : 
									"why-us-inner-card"}`}>
								<small className="why-us-inner-card-upper-heading pb-2">Welcome To</small>
								<p className="section-text pe-5">
									The digital freedom passport
								</p>
								<p className="section-text pe-5 pb-2">
									for your business
								</p>
								<div className="why-us-svg-div">
									<Why_Us_SVG />
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div 
						className="col-lg-7 col"
						style={{x:rhsx, opacity:scrollopacity}}>
						{Why_Us_JSON_Content_Desktop}
					</motion.div>
				</div>

			}

			{
				props.windowWidth <= 768 &&
				<div className={`
					d-flex flex-column why-us-mobile pt-4 ps-4 pe-4 
					${props.darkMode ? "dark" :"light"}`}>
					{Why_Us_JSON_Content_Mobile}
				</div>
			}
			
		</section>
	)
}
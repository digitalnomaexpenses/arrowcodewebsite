import React, {useRef} from "react"
import {motion, useScroll, useTransform, useInView as FramerMotionUseInView} from "framer-motion"

import Form from "../Content-Components/contact-form"
import FormMobile from "../Content-Components/contact-form-mobile"

import Contact_JSON from "../JSONs/contact"
import Contact_JSON_Component_Desktop from "../Content-Components/contact-desktop"
import Contact_JSON_Component_Mobile from "../Content-Components/contact-mobile"


export default function Contact(props) {

 	let Contact_JSON_Content_Desktop = Contact_JSON.map(eachElement => (
			<Contact_JSON_Component_Desktop
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				s_title_1={eachElement.s_title_1}
				s_title_span={eachElement.s_title_span}
				s_title_2={eachElement.s_title_2}
				phone={eachElement.phone}
				email={eachElement.email}
				timings={eachElement.timings}
			/>
		))

 	let Contact_JSON_Content_Mobile = Contact_JSON.map(eachElement => (
			<Contact_JSON_Component_Mobile
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				s_title_1={eachElement.s_title_1}
				s_title_span={eachElement.s_title_span}
				s_title_2={eachElement.s_title_2}
				phone={eachElement.phone}
				email={eachElement.email}
				timings={eachElement.timings}
			/>
		))

	const [formDarkMode, setFormDarkMode] = React.useState(props.darkMode)

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

	const formref = useRef(null);
	const formInView = FramerMotionUseInView(formref, { once: true })


	/*Framer motion animation mobile end. some animations in Content-Components/contact-mobile*/

	return(
		<section 
			className="container pt-5"
			id="contact"
			ref={ref}>

			{
				props.windowWidth >992 &&

				<div className={props.darkMode ? "contact dark" : "contact light"}>
					<div className="d-flex flex-row p-5">
						<motion.div 
							className="col-lg-6 col-5 pt-lg-5 pt-2"
							style={{x:lhsx, opacity:scrollopacity}}>
						{Contact_JSON_Content_Desktop}
						</motion.div>
						<motion.div 
							className="col"
							style={{x:rhsx, opacity:scrollopacity}}>
							<Form 
								formDarkMode={props.darkMode}
							/>
						</motion.div>
					</div>
				</div> 

			}

			{
				props.windowWidth <=992 && 

				<div 
					className={`d-flex flex-column contact-mobile pt-5 pe-4 ps-4 pb-5 
					${props.darkMode ? "dark" : "light"}`}
					ref={formref}>
					{Contact_JSON_Content_Mobile}
					<div
						style={{
							opacity: formInView ? 1 : 0,
							transform: formInView ? "none" : "translateY(50%)",
							transition: "all 1s 0.9s"
							}}>
						<FormMobile 
						formDarkMode={props.darkMode}
					/>
					</div>
				</div>
			}
			
		</section>
	)
}
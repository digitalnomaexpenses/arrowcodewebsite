import React from "react"
import {motion, useScroll, useTransform} from "framer-motion"

import Landing_Page_JSON from "../JSONs/landing-page"
import Landing_Page_JSON_Component_Desktop from "../Content-Components/landing-page-desktop-framer-motion"
import Landing_Page_JSON_Component_Mobile from "../Content-Components/landing-page-mobile-framer-motion"

import Landing_Page_SVG from "../SVG-Components/landing-page.js"


export default function LandingPage(props) {
	let Landing_Page_JSON_Content_Desktop = Landing_Page_JSON.map(eachElement => (
			<Landing_Page_JSON_Component_Desktop 
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				button_text={eachElement.button_text}
			/>))

	let Landing_Page_JSON_Content_Mobile = Landing_Page_JSON.map(eachElement => (
			<Landing_Page_JSON_Component_Mobile 
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span = {eachElement.title_span}
				text= {eachElement.text}
				button_text={eachElement.button_text}
			/>
		))

	return (
		<section className="container pt-5 landing-page vh-100" id="landing-page">
			{
				props.windowWidth > 992 && 
				<div className="d-flex flex-column pt-5">
					<div className="d-flex flex-row pb-5 justify-content-around align-items-center">
						<motion.div 
							className="col-6 pt-5 ps-5"
							initial={{x: -200, opacity: 0}}
							animate={{x: 0, opacity: 1,}}
							transition={{duration: 0.5, delay: 0.4}}
							>
							{Landing_Page_JSON_Content_Desktop}
						</motion.div>
						<motion.div 
							className="col-5 pe-5"
							initial={{x:200, opacity: 0}}
							animate={{x: 0, opacity: 1}}
							transition={{delay: 0.8, duration: 0.5}}>
							<div className="">
								<Landing_Page_SVG />
							</div>
						</motion.div>
					</div>
					<motion.div 
						className="d-flex flex-row justify-content-around ps-3 pe-3 mt-4 mb-5"
						initial={{y: 30, opacity: 0}}
						animate={{y: 0, opacity: 1}}
						transition={{type: "spring", delay: 1.2, duration: 0.5}}>
						<img 
							src={props.darkMode ? 
								"../SVGs/Landing_Page/aws-dark-mode.svg" : 
								"../SVGs/Landing_Page/aws-light-mode.svg"} 
							className="img-fluid lp-skill-icon-1"
							alt="AWS icon"/>
						<img 
							src={props.darkMode ? 
								"../SVGs/Landing_Page/postgreSQL-dark-mode.svg" : 
								"../SVGs/Landing_Page/postgreSQL-light-mode.svg"} 
							className="img-fluid lp-skill-icon-2"
							alt="PostgreSQL icon"/>
						<img 
							src={props.darkMode ? 
								"../SVGs/Landing_Page/flask-dark-mode.svg" : 
								"../SVGs/Landing_Page/flask-light-mode.svg"} 
							className="img-fluid lp-skill-icon-3"
							alt="Flask icon"/>
						<img 
							src={props.darkMode ? 
								"../SVGs/Landing_Page/bootstrap-dark-mode.svg" : 
								"../SVGs/Landing_Page/bootstrap-light-mode.svg"} 
							className="img-fluid lp-skill-icon-4"
							alt="Bootstrap icon"/>
						<img 
							src={props.darkMode ? 
								"../SVGs/Landing_Page/react-dark-mode.svg" : 
								"../SVGs/Landing_Page/react-light-mode.svg"} 
							className="img-fluid lp-skill-icon-5"
							alt="React icon"/>
						<img 
							src={props.darkMode ? 
								"../SVGs/Landing_Page/threejs-dark-mode.svg" : 
								"../SVGs/Landing_Page/threejs-light-mode.svg"} 
							className="img-fluid lp-skill-icon-6"
							alt="ThreeJS icon"/>
						<img 
							src={props.darkMode ? 
								"../SVGs/Landing_Page/python-dark-mode.svg" : 
								"../SVGs/Landing_Page/python-light-mode.svg"} 
							className="img-fluid lp-skill-icon-7"
							alt="Python icon"/>
					</motion.div>
				</div>
			}

			{
				props.windowWidth <= 992 && 
				<>
					<div className="d-flex flex-column justify-content-center align-items-center">
						<motion.div 
							className="landing-page-svg-div"
							initial={{y:40, opacity:0}}
							animate={{y:0, opacity:1}}
							transition={{duration:1, delay: 0.6, type:"spring"}}>
							<Landing_Page_SVG />
						</motion.div>
						{Landing_Page_JSON_Content_Mobile}
					</div>
					<motion.div 
						className="d-flex flex-row justify-content-around lp-logos-mobile-light"
						initial={{y:70, opacity:0}}
						animate={{y:0, opacity:1}}
						transition={{duration:1, delay: 1.8, type:"spring"}}>
						<img 
							src={props.darkMode ? 
							"../SVGs/Landing_Page/aws-m-dark-mode.svg" : 
							"../SVGs/Landing_Page/aws-m-light-mode.svg"} 
							className="img-fluid"
							alt="AWS icon"/>
						<img 
							src={props.darkMode ? 
							"../SVGs/Landing_Page/postgreSQL-m-dark-mode.svg" : 
							"../SVGs/Landing_Page/postgreSQL-m-light-mode.svg"} 
							className="img-fluid"
							alt="PostgreSQL icon"/>
						<img 
							src={props.darkMode ? 
							"../SVGs/Landing_Page/flask-m-dark-mode.svg" : 
							"../SVGs/Landing_Page/flask-m-light-mode.svg"} 
							className="img-fluid"
							alt="Flask icon"/>
						<img 
							src={props.darkMode ? 
							"../SVGs/Landing_Page/bootstrap-m-dark-mode.svg" : 
							"../SVGs/Landing_Page/bootstrap-m-light-mode.svg"} 
							className="img-fluid"
							alt="Bootstrap icon"/>
						<img 
							src={props.darkMode ? 
							"../SVGs/Landing_Page/react-m-dark-mode.svg" : 
							"../SVGs/Landing_Page/react-m-light-mode.svg"} 
							className="img-fluid"
							alt="React icon"/>
						<img 
							src={props.darkMode ? 
							"../SVGs/Landing_Page/threejs-m-dark-mode.svg" : 
							"../SVGs/Landing_Page/threejs-m-light-mode.svg"} 
							className="img-fluid"
							alt="ThreeJS icon"/>
						<img 
							src={props.darkMode ? 
							"../SVGs/Landing_Page/python-m-dark-mode.svg" : 
							"../SVGs/Landing_Page/python-m-light-mode.svg"} 
							className="img-fluid"
							alt="Python icon"/>
					</motion.div>
				</>

			}


		</section>
	)
}
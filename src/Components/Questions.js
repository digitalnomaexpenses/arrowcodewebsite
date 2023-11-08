import React from "react"
import { useInView } from 'react-intersection-observer'

import Questions_JSON from "../JSONs/questions"
import Questions_JSON_Component_Desktop from "../Content-Components/questions-desktop"
import Questions_JSON_Component_Mobile from "../Content-Components/questions-mobile"

import Questions_Accordion_JSON from "../JSONs/questions-accordion"
import Questions_Accordion_Component_Desktop from "../Content-Components/questions-accordion-desktop"
import Questions_Accordion_Component_Mobile from "../Content-Components/questions-accordion-mobile"

import Questions_SVG from "../SVG-Components/questions.js"

export default function Questions(props) {

	const { ref: questionsRef, inView: questionsVisibility } = useInView();

	let Questions_JSON_Content_Desktop = Questions_JSON.map(eachElement => (
			<Questions_JSON_Component_Desktop 
				key={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				button_text={eachElement.button_text}
				isVisible = {questionsVisibility}

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
				isVisible = {questionsVisibility}

			/>
		))

	let Questions_Accordion_Desktop =  Questions_Accordion_JSON.map(eachElement => (
			<Questions_Accordion_Component_Desktop
				key={eachElement.id}
				id={eachElement.id}
				isVisible={questionsVisibility}
				qDarkMode={props.darkMode}
				question={eachElement.question}
				answer={eachElement.answer}
			/>
		))

	let Questions_Accordion_Mobile =  Questions_Accordion_JSON.map(eachElement => (
			<Questions_Accordion_Component_Mobile
				key={eachElement.id}
				id={eachElement.id}
				isVisible={questionsVisibility}
				qMobAccDarkMode={props.darkMode}
				question={eachElement.question}
				answer={eachElement.answer}
			/>
		))

	return(
		<section 
			className="container pt-5"
			ref={questionsRef}
			id="questions">

			{
				props.windowWidth > 992 &&

				<div className={`questions d-flex flex-row pt-5 ps-5 pe-5 pb-3 ${props.darkMode ? "dark": "light"}`}>
					<div className="col-5 pe-4">
						<div className="d-flex flex-column">
							{Questions_JSON_Content_Desktop}
							<div className="questions-svg-div ps-1">
								<Questions_SVG isVisible={questionsVisibility}/>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="accordion accordion-flush" id="accordionFlushExample">
							{Questions_Accordion_Desktop}
						</div>
					</div>
				</div>
			}

			{
				props.windowWidth <= 992 &&

				<div className={props.darkMode ? "questionsMobile dark": "questionsMobile light"}>
					<div className="d-flex flex-column pt-5 pb-5 ps-4 pe-4">
						{Questions_JSON_Content_Mobile}
						<div className="questions-svg-div pb-3 ps-2 pe-2">
								<Questions_SVG isVisible={questionsVisibility}/>
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
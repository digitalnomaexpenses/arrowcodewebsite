import React from "react"
import { useInView } from 'react-intersection-observer'

import JSON_qContent from "../Additional_Components/JSONs/JSON_qContent.js"
import QuestionsDesktopContentItem from "../Additional_Components/QuestionsDesktopContentItem.js"

import JSON_qAccordionContent from "../Additional_Components/JSONs/JSON_qAccordionContent.js"
import QuestionsAccordionDesktopItem from "../Additional_Components/QuestionsAccordionDesktopItem.js"

import QuestionsSVG from "../SVGs/QuestionsSVG.js"

export default function Questions(props) {

	const { ref: questionsRef, inView: questionsVisibility } = useInView();

	let qAccordionElements =  JSON_qAccordionContent.map(eachElement => (
			<QuestionsAccordionDesktopItem 
				key={eachElement.id}
				id={eachElement.id}
				isVisible={questionsVisibility}
				qDarkMode={props.darkMode}
				question={eachElement.question}
				answer={eachElement.answer}
			/>
		))

	let qContentElement = JSON_qContent.map(eachElement => (
			<QuestionsDesktopContentItem 
				key={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				button_text={eachElement.button_text}
				isVisible = {questionsVisibility}

			/>
		))

	return(
		<div 
			className="container pt-5"
			ref={questionsRef}>
			<div className={`questions d-flex flex-row pt-5 ps-5 pe-5 pb-3 ${props.darkMode ? "dark": "light"}`}>
				<div className="col-5 pe-4">
					<div className="d-flex flex-column">
						{qContentElement}
						<div className="questions-svg-div ps-1">
							<QuestionsSVG isVisible={questionsVisibility}/>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="accordion accordion-flush" id="accordionFlushExample">
						{qAccordionElements}
					</div>
				</div>
			</div>
		</div>
	)
}
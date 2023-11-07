import React from "react"
import { useInView } from 'react-intersection-observer'

import JSON_qContent from "../Additional_Components/JSONs/JSON_qContent.js"
import QuestionsMobContentItem from "../Additional_Components/QuestionsMobContentItem.js"

import JSON_qAccordionContent from "../Additional_Components/JSONs/JSON_qAccordionContent.js"
import QuestionsAccordionMobItem from "../Additional_Components/QuestionsAccordionMobItem.js"

import QuestionsSVG from "../SVGs/QuestionsSVG.js"

export default function QuestionsMobile(props) {

	const { ref: quesMobRef, inView: quesMobVisibility } = useInView();

	let qMobContentElement = JSON_qContent.map(eachElement => (
			<QuestionsMobContentItem
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				button_text={eachElement.button_text}
				isVisible = {quesMobVisibility}

			/>
		))

	let qAccMobElements =  JSON_qAccordionContent.map(eachElement => (
			<QuestionsAccordionMobItem 
				key={eachElement.id}
				id={eachElement.id}
				isVisible={quesMobVisibility}
				qMobAccDarkMode={props.darkMode}
				question={eachElement.question}
				answer={eachElement.answer}
			/>
		))

	return(
		<section
			className="container pt-5"
			ref={quesMobRef}
		>
			<div className={props.darkMode ? "questionsMobile dark": "questionsMobile light"}>
				<div className="d-flex flex-column pt-5 pb-5 ps-4 pe-4">
					{qMobContentElement}
					<div className="questions-svg-div text-center ps-3 pb-3">
							<QuestionsSVG isVisible={quesMobVisibility}/>
					</div>
					<div className="accordion accordion-flush" id="accordionFlushExample">
						{qAccMobElements}
					</div>
				</div>
			</div>
		</section>
	)
}
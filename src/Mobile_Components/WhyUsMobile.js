import React from "react"
import { useInView } from 'react-intersection-observer'

import JSON_YSContent from "../Additional_Components/JSONs/JSON_YSContent.js"
import WhyUsMobContentItem from "../Additional_Components/WhyUsMobContentItem.js"

export default function WhyUsMobile(props) {

	const { ref:yUsMRef, inView:yUsMVisibility } = useInView();

	let YSMobContentElement = JSON_YSContent.map(eachElement => (
			<WhyUsMobContentItem 
				title={eachElement.title}
				title_span={eachElement.title_span}
				p_title_1={eachElement.p_title_1}
        		p_text_1={eachElement.p_text_1}
        		p_title_2={eachElement.p_title_2}
        		p_text_2={eachElement.p_text_2}
        		p_title_3={eachElement.p_title_3}
        		p_text_3={eachElement.p_text_3}
        		ysMobDarkMode={props.darkMode}
        		isVisible={yUsMVisibility}
			/>
		))

	return(
		<div 
			className="container pt-5"
			ref={yUsMRef}>
			<div className={`
					d-flex flex-column why-us-mobile pt-4 ps-4 pe-4 
					${props.darkMode ? "dark" :"light"}`}>
				{YSMobContentElement}
			</div>
		</div>
	)
}
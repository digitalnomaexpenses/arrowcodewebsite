import React from "react"
import { useInView } from 'react-intersection-observer'
import JSON_YSContent from "../Additional_Components/JSONs/JSON_YSContent.js"
import WhyUsDesktopContentItem from "../Additional_Components/WhyUsDesktopContentItem.js"
import WhyUsSVG from "../SVGs/WhyUsSVG.js"


export default function WhyUs(props) {

	const { ref: whyUsRef, inView: whyUsVisibility } = useInView();

	let YSContentElement = JSON_YSContent.map(eachElement => (
			<WhyUsDesktopContentItem 
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
        		isVisible={whyUsVisibility}
			/>
		))

	return(
		<div 
			className="container pt-5"
			ref={whyUsRef}>
			<div className={`d-flex flex-row why-us pt-5 ps-4 pb-5 ${props.darkMode? "dark" : "light"}`}>
				<div className={`col ps-lg-4 ${ whyUsVisibility ? "why-us-lhs-animation" : ""}`}>
					<div className="col-lg-9 col-md-11 h-100">
						<div className={props.darkMode ? "d-flex flex-column why-us-inner-card-dark ps-3 pt-3": "d-flex flex-column why-us-inner-card ps-3 pt-3"}>
							<div className="why-us-inner-card-upper-heading pb-2">Welcome To</div>
							<div className="why-us-inner-card-heading pe-5">
								The digital freedom passport
							</div>
							<div className="why-us-inner-card-heading pe-5 pb-2">
								for your business
							</div>
							<div className="whyUs3dParentDiv">
								<WhyUsSVG />
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-7 col">
					{YSContentElement}
				</div>
			</div>
		</div>
	)
}
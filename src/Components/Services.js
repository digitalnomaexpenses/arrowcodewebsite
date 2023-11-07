import React from "react"
import JSON_ServicesContent from "../Additional_Components/JSONs/JSON_ServicesContent.js" 
import JSON_ServicesData from "../Additional_Components/JSONs/JSON_ServicesData.js" 
import JSON_ServicesDataTwo from "../Additional_Components/JSONs/JSON_ServicesDataTwo.js"
import ServicesItem from "../Additional_Components/ServicesItem.js"
import ServicesContentDesktopItem from "../Additional_Components/ServicesContentDesktopItem.js"
import ServicesSVG from "../SVGs/ServicesSVG.js"

import { useInView } from 'react-intersection-observer'


export default function Services() {
	const { ref: servicesRef, inView: servicesVisibility } = useInView();

	let servicesContentElement = JSON_ServicesContent.map(eachElement => (
			<ServicesContentDesktopItem 
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				isVisible={servicesVisibility}
			/>
		))

	let servicesPointsElements= JSON_ServicesData.map(eachElement => (
		<ServicesItem 
			key={eachElement.id}
			id={eachElement.id}
			number={eachElement.number}
			title = {eachElement.title}
			desc = {eachElement.desc}
		/>
		))

	let servicesPointsElementsTwo = JSON_ServicesDataTwo.map(eachElement => (
		<ServicesItem 
			key={eachElement.id}
			id={eachElement.id}
			number={eachElement.number}
			title = {eachElement.title}
			desc = {eachElement.desc}
		/>
		))


	return(
		<section 
			className="container pt-5"
			ref={servicesRef}
			id="services">
			<div className="d-flex flex-row">
				<div className="col-lg-7 col-8 pt-4 ps-5">
					{servicesContentElement}
					<div className="row row-cols-2 pe-5 pt-4">
						<div className="d-flex flex-column services-list">
							{servicesPointsElements}
						</div>
						<div className="d-flex flex-column services-list">
							{servicesPointsElementsTwo}
						</div>
					</div>
				</div>
				<div className={`col ${servicesVisibility ? "services-rhs-animation" : ""}`}>
					<div className="services-svg-div pt-4">
						<ServicesSVG />
					</div>
				</div>
			</div>
		</section>
	)}
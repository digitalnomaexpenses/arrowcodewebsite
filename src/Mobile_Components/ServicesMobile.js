import React from "react"
import JSON_ServicesData from "../Additional_Components/JSONs/JSON_ServicesData.js" 
import JSON_ServicesDataTwo from "../Additional_Components/JSONs/JSON_ServicesDataTwo.js"
import ServicesItemMobile from "../Mobile_Components/ServicesItemMobile"

import JSON_ServicesContent from "../Additional_Components/JSONs/JSON_ServicesContent.js" 
import ServicesContentMobItem from "../Additional_Components/ServicesContentMobItem.js"

import ServicesSVG from "../SVGs/ServicesSVG.js"

import { useInView } from 'react-intersection-observer'

export default function ServicesMobile() {

	const { ref: sMobRef, inView: sMobVisibility } = useInView();

	let servicesElementsMobile= JSON_ServicesData.map(eachElement => (
		<ServicesItemMobile 
			key={eachElement.id}
			id={eachElement.id}
			number={eachElement.number}
			title = {eachElement.title}
			desc = {eachElement.desc}
		/>
		))

	let servicesElementsTwoMobile = JSON_ServicesDataTwo.map(eachElement => (
		<ServicesItemMobile 
			key={eachElement.id}
			id={eachElement.id}
			number={eachElement.number}
			title = {eachElement.title}
			desc = {eachElement.desc}
		/>
		))

	let servMobContentElement = JSON_ServicesContent.map(eachElement => (
			<ServicesContentMobItem 
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				isVisible={sMobVisibility}
			/>
		))
	

	return(
		<section 
			className='container ps-3 pe-3'
			ref={sMobRef}>
			<div className="d-flex flex-column pt-5 justify-content-center align-items-center">
				{servMobContentElement}
				<hr className={`services-line ${sMobVisibility ? "s-mob-animation-3" : ""}`}/>
				<div className={`services-svg-div ${sMobVisibility ? "s-mob-animation-4" : ""}`}>
					<ServicesSVG />
				</div>
				{servicesElementsMobile}
				{servicesElementsTwoMobile}
			</div>
		</section>
	)
}
import React from "react"
import { useInView } from 'react-intersection-observer'

import Services_JSON from "../JSONs/services"
import Services_JSON_Component_Desktop from "../Content-Components/services-desktop"
import Services_JSON_Component_Mobile from "../Content-Components/services-mobile"

import Services_Drawer_1_JSON from "../JSONs/services-drawer-1"
import Services_Drawer_2_JSON from "../JSONs/services-drawer-2"
import Services_Drawer_Component_Desktop from "../Content-Components/services-drawer-desktop"
import Services_Drawer_Component_Mobile from "../Content-Components/services-drawer-mobile"

import Services_SVG from "../SVG-Components/services.js"


export default function Services(props) {
	const { ref: servicesRef, inView: servicesVisibility } = useInView();

	let Services_JSON_Content_Desktop = Services_JSON.map(eachElement => (
			<Services_JSON_Component_Desktop 
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				isVisible={servicesVisibility}
			/>
		))

	let Services_JSON_Content_Mobile= Services_JSON.map(eachElement => (
		<Services_JSON_Component_Mobile
			key={eachElement.id}
			id={eachElement.id}
			title={eachElement.title}
			title_span={eachElement.title_span}
			text={eachElement.text}
			isVisible={servicesVisibility}
		/>
		))


	let Services_Drawer_1_Desktop = Services_Drawer_1_JSON.map(eachElement => (
		<Services_Drawer_Component_Desktop
			key={eachElement.id}
			id={eachElement.id}
			number={eachElement.number}
			title = {eachElement.title}
			desc = {eachElement.desc}
		/>
		))

	let Services_Drawer_2_Desktop = Services_Drawer_2_JSON.map(eachElement => (
		<Services_Drawer_Component_Desktop
			key={eachElement.id}
			id={eachElement.id}
			number={eachElement.number}
			title = {eachElement.title}
			desc = {eachElement.desc}
		/>
		))


	let Services_Drawer_1_Mobile = Services_Drawer_1_JSON.map(eachElement => (
			<Services_Drawer_Component_Mobile
				key={eachElement.id}
				id={eachElement.id}
				number={eachElement.number}
				title = {eachElement.title}
				desc = {eachElement.desc}
			/>
		))

	let Services_Drawer_2_Mobile = Services_Drawer_2_JSON.map(eachElement => (
			<Services_Drawer_Component_Mobile
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
			{
				props.windowWidth > 992 && 

				<div className="d-flex flex-row">
					<div className="col-lg-7 col-8 pt-4 ps-5">
						{Services_JSON_Content_Desktop}
						<div className="row row-cols-2 pe-5 pt-4">
							<div className="d-flex flex-column services-list">
								{Services_Drawer_1_Desktop}
							</div>
							<div className="d-flex flex-column services-list">
								{Services_Drawer_2_Desktop}
							</div>
						</div>
					</div>
					<div className={`col ${servicesVisibility ? "services-rhs-animation" : ""}`}>
						<div className="services-svg-div pt-4 pe-2">
							<Services_SVG />
						</div>
					</div>
				</div>

			}
			{
				props.windowWidth <= 992 &&

				<div className="d-flex flex-column pt-5 justify-content-center align-items-center">
					{Services_JSON_Content_Mobile}
					<hr className={`services-line ${servicesVisibility ? "s-mob-animation-3" : ""}`}/>
					<div className={`services-svg-div pb-3 ${servicesVisibility ? "s-mob-animation-4" : ""}`}>
						<Services_SVG />
					</div>
					{Services_Drawer_1_Mobile}
					{Services_Drawer_2_Mobile}
				</div>

			}
		</section>
	)}
import React from "react"

export default function PorfolioSlide(props) {
	return(
		<div className=`carousel-item ps-5 pe-5 ${props.id == "portfolio_slide_1" ? "active" : ""}`>
		                <div className="container">
		                    <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-center text-center mt-5 pt-5 mb-5 pb-5">
		                        <div className="col-lg-8 laptop-container">
		                            <img src = {props.img}/>
		                        </div>
		                        <div className="col-lg-4 col-md-10 col-12">
		                            <h4 className="section-heading pb-3">{props.title}</h4>
		                            <p className="section-text pb-4">
		                            	{props.desc}
		                            </p>
		                            <p className="section-text">Made With</p>
		                            <div className="image-container col-12">
		                                <img 
		                                	src={`../SVGs/Landing_Page/aws-${props.darkMode ? 
		                                		"dark-mode.svg" : "light-mode.svg"}`} 
		                                	className={`made-with-icons ${props.portWindowWidth <= 992? "p-2" : ""}`} />
	                                	<img 
	                                		src={`../SVGs/Landing_Page/postgreSQL-${props.darkMode ? 
	                                			"dark-mode.svg" : "light-mode.svg"}`} 
	                                		className={`made-with-icons ${props.portWindowWidth <= 992? "p-2" : ""}`} />
	                                	<img 
	                                		src={`../SVGs/Landing_Page/flask-${props.darkMode ? 
	                                			"dark-mode.svg" : "light-mode.svg"}`} 
	                                		className={`made-with-icons ${props.portWindowWidth <= 992? "p-2" : ""}`} />
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
	)
}
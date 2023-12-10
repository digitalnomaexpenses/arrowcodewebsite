import React from "react"

export default function Portfolio(props) {
	return(
		<section className="container" id="portfolio">
			<h3 className="section-heading text-center pt-5">Featured <span>Projects</span></h3>
			<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
		        <div className="carousel-inner">
		            <div className="carousel-item active ps-5 pe-5">
		                <div className="container">
		                    <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-center text-center mt-5 pt-5 mb-5 pb-5">
		                        <div className="col-lg-8 laptop-container">
		                        	<img src = "slide_grow.png"/>
		                        </div>
		                        <div className="col-lg-4 col-md-10 col-12">
		                            <h4 className="section-heading pb-3">Grow: Expense Tracker</h4>
		                            <p className="section-text pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
		                            <p className="section-text">Made With</p>
		                            <div className="image-container col-12">
		                                <img 
		                                	src={`../SVGs/Landing_Page/aws-${props.darkMode ? "dark-mode.svg" : "light-mode.svg"}`} 
		                                	className={`made-with-icons ${props.portWindowWidth <=992? "p-2" : ""}`} />
	                                	<img 
	                                		src={`../SVGs/Landing_Page/postgreSQL-${props.darkMode ? "dark-mode.svg" : "light-mode.svg"}`} 
	                                		className={`made-with-icons ${props.portWindowWidth <=992? "p-2" : ""}`} />
	                                	<img 
	                                		src={`../SVGs/Landing_Page/flask-${props.darkMode ? "dark-mode.svg" : "light-mode.svg"}`} 
	                                		className={`made-with-icons ${props.portWindowWidth <=992? "p-2" : ""}`} />
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		           	<div className="carousel-item ps-5 pe-5">
		                <div className="container">
		                    <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-center text-center mt-5 pt-5 mb-5 pb-5">
		                        <div className="col-lg-8 laptop-container">
		                            <img src = "slide_judgefoodie.png"/>
		                        </div>
		                        <div className="col-lg-4 col-md-10 col-12">
		                            <h4 className="section-heading pb-3">Judge Foodie: Restaurant Rating </h4>
		                            <p className="section-text pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
		                            <p className="section-text">Made With</p>
		                            
		                            <div className="image-container col-12">
		                                <img 
		                                	src={`../SVGs/Landing_Page/aws-${props.darkMode ? "dark-mode.svg" : "light-mode.svg"}`} 
		                                	className={`made-with-icons ${props.portWindowWidth <=992? "p-2" : ""}`} />
	                                	<img 
	                                		src={`../SVGs/Landing_Page/postgreSQL-${props.darkMode ? "dark-mode.svg" : "light-mode.svg"}`} 
	                                		className={`made-with-icons ${props.portWindowWidth <=992? "p-2" : ""}`} />
	                                	<img 
	                                		src={`../SVGs/Landing_Page/flask-${props.darkMode ? "dark-mode.svg" : "light-mode.svg"}`} 
	                                		className={`made-with-icons ${props.portWindowWidth <=992? "p-2" : ""}`} />
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <div className="carousel-item ps-5 pe-5">
		                <div className="container">
		                    <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-center text-center mt-5 pt-5 mb-5 pb-5">
		                        <div className="col-lg-8 laptop-container">
		                            <img src = "laptop.png"/>
		                        </div>
		                        <div className="col-lg-4 col-md-10 col-12">
		                            <h4 className="section-heading pb-3">Expense App 3</h4>
		                            <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
		                            <p className="section-text pb-4">Made With</p>
		                            <div className="image-container col-12">
		                                <img 
		                                	src={`../SVGs/Landing_Page/aws-${props.darkMode ? "dark-mode.svg" : "light-mode.svg"}`} 
		                                	className={`made-with-icons ${props.portWindowWidth <=992? "p-2" : ""}`} />
	                                	<img 
	                                		src={`../SVGs/Landing_Page/postgreSQL-${props.darkMode ? "dark-mode.svg" : "light-mode.svg"}`} 
	                                		className={`made-with-icons ${props.portWindowWidth <=992? "p-2" : ""}`} />
	                                	<img 
	                                		src={`../SVGs/Landing_Page/flask-${props.darkMode ? "dark-mode.svg" : "light-mode.svg"}`} 
	                                		className={`made-with-icons ${props.portWindowWidth <=992? "p-2" : ""}`} />
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>

		        </div>
		        <a className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
		            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		            <span className="visually-hidden">Previous</span>
		        </a>
		        <a className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
		            <span className="carousel-control-next-icon" aria-hidden="true"></span>
		            <span className="visually-hidden">Next</span>
		        </a>
		    </div>
		</section>
	)
}
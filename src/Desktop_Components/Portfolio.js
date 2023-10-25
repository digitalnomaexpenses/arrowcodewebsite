import React from "react"

export default function Portfolio() {
	return(
		<div className="container">
			<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
		        <div className="carousel-inner">
		            <div className="carousel-item active">
		                <div className="container">
		                    <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-center text-center mt-5 pt-5 mb-5 pb-5">
		                        <div className="col-8 laptop-container">
		                            <img src = "laptop.png"/>
		                        </div>
		                        <div className="col-4">
		                            <p className="work-title">Expense App</p>
		                            <p className="work-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
		                            <p className="work-description">Made With</p>
		                            <div className="image-container col-12">
		                                <img src="aws.svg" className="made-with-icons"/>
		                                <img src="postgreSQL.svg" className="made-with-icons"/>
		                                <img src="flask.svg" className="made-with-icons"/>  
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <div className="carousel-item">
		                <div className="container">
		                    <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-center text-center mt-5 pt-5 mb-5 pb-5">
		                        <div className="col-8 laptop-container">
		                            <img src = "laptop.png"/>
		                        </div>
		                        <div className="col-4">
		                            <p className="work-title">Expense App 2</p>
		                            <p className="work-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
		                            <p className="work-description">Made With</p>
		                            <div className="image-container col-12">
		                                <img src="aws.svg" className="made-with-icons"/>
		                                <img src="postgreSQL.svg" className="made-with-icons"/>
		                                <img src="flask.svg" className="made-with-icons"/>  
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <div className="carousel-item">
		                <div className="container">
		                    <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-center text-center mt-5 pt-5 mb-5 pb-5">
		                        <div className="col-8 laptop-container">
		                            <img src = "laptop.png"/>
		                        </div>
		                        <div className="col-4">
		                            <p className="work-title">Expense App 3</p>
		                            <p className="work-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
		                            <p className="work-description">Made With</p>
		                            <div className="image-container col-12">
		                                <img src="aws.svg" className="made-with-icons"/>
		                                <img src="postgreSQL.svg" className="made-with-icons"/>
		                                <img src="flask.svg" className="made-with-icons"/>  
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

		</div>
	)
}
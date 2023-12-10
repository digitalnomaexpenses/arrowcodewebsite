import React from "react"


export default function Slideshow() {
	return(
		<div id="carouselExample" className="carousel slide pb-5">
		  <div className="carousel-inner">
		    <div className="carousel-item active">
		    	<div className="slideshow-div">
		    		<img src="grow_login.png" className="d-block w-100" alt="..."/>
		    	</div>
		    </div>
		    <div className="carousel-item">
		    	<div className="slideshow-div">
		    		<img src="grow_dashboard.png" className="d-block w-100" alt="..."/>
		    	</div>
		    </div>
		    <div className="carousel-item">
		    	<div className="slideshow-div">
		    		<img src="grow_view.png" className="d-block w-100" alt="..."/>
		    	</div>
		    </div>
		    <div className="carousel-item">
		    	<div className="slideshow-div">
		    		<img src="grow_add.png" className="d-block w-100" alt="..."/>
		    	</div>
		    </div>

		  </div>
		  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
		    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span className="visually-hidden">Previous</span>
		  </button>
		  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
		    <span className="carousel-control-next-icon" aria-hidden="true"></span>
		    <span className="visually-hidden">Next</span>
		  </button>
		</div>
	)
}
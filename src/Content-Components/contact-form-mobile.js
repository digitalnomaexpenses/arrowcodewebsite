import React from "react"

export default function Form(props) {
	const [formData, setFormData] = React.useState(
		{
			formName:"",
			formEmail:"",
			formPhone:"",
			formMsg:"",
			formReceiveUpdates: true
		}
	)	

	function handleChange(event) {
		let {name, value, type, checked} = event.target
		setFormData(prevValue => (
		{
			...prevValue,
			[name]: type === "checkbox" ? checked: value
		}))
	}

	function handleSubmit(event) {
		event.preventDefault()
		console.log(formData)
	}

	return(
			<div className="d-flex flex-column pt-5">
				<form onSubmit={handleSubmit} className={props.formDarkMode ? "form-mobile dark-form": "form-mobile light-form"}>
					<h4 className="form-title-mobile text-center pb-3 pt-4">Contact Us</h4>
					<div className="container ps-4 pe-4">
						<label htmlFor="formName" className="form-label form-mobile-label"> Your Name/Company Name <span>*</span></label>
						<input 
						 type="text"
						 placeholder=""
						 name="formName"
						 value={formData.formName}
						 onChange={handleChange}
						 className={props.formDarkMode ? "form-control-plaintext input-text-dark" : "form-control-plaintext input-text-light"}
						 id="formName"
						/>	
					</div>		
					<br/>

					<div className="container ps-4 pe-4">
						<label htmlFor="formEmail" className="form-label form-mobile-label">Email <span>*</span></label>
						<input 
						 type="email"
						 placeholder="example@example.com"
						 name="formEmail"
						 value={formData.formEmail}
						 onChange={handleChange}
						 className={props.formDarkMode ? "form-control-plaintext input-text-dark" : "form-control-plaintext input-text-light"}
						 id="formEmail"
						/>
					</div>
					<br/>

					<div className="container ps-4 pe-4">
						<label htmlFor="formPhone" className="form-label form-mobile-label">Phone</label>
						<input 
						 type="number"
						 placeholder="+1-8888888888"
						 name="formPhone"
						 value={formData.formPhone}
						 onChange={handleChange}
						 className={props.formDarkMode ? "form-control-plaintext input-text-dark" : "form-control-plaintext input-text-light"}
						 id="formPhone"
						/>
					</div>
					<br/>

					<div className="container ps-4 pe-4">
						<label htmlFor="formMsg" className="form-label form-mobile-label">Your Message <span>*</span></label>
						<textarea
						 type="text"
						 placeholder=""
						 name="formMsg"
						 value={formData.formMsg}
						 onChange={handleChange}
						 className={props.formDarkMode ? "form-control-plaintext textarea-mobile textarea-dark ps-2 pe-2" : "form-control-plaintext textarea-mobile textarea-light ps-2 pe-2"}
						 id="formMsg"
						/>
					</div>
					<br/>			

					<div className="container ps-4 pe-4">
						<div className="form-check">
							<input 
							 type="checkbox"
							 name="formReceiveUpdates"
							 checked={formData.formReceiveUpdates}
							 onChange={handleChange}
							 id="formReceiveUpdates"
							 className="form-check-input"
							/>

							<label htmlFor="formReceiveUpdates" className="form-check-label form-mobile-label">
							I would like to receive updates via email 
							</label>
						</div>
					</div>
					<br/>

					<div className="text-center pb-3">
						<button className="form-button-mobile-shine">Submit</button>
					</div>
				</form>
			</div>
	)
}
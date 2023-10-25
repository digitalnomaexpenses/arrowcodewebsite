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
			<div className="d-flex flex-column">
				<form onSubmit={handleSubmit} className={props.formDarkMode ? "form dark-form": "form light-form"}>
					<h3 className="form-title text-center pb-3 pt-4">Contact Us</h3>
					<div className="container ps-5 pe-5">
						<label htmlFor="formName" className="form-label"> Your Name/Company Name <span>*</span></label>
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

					<div className="container ps-5 pe-5">
						<label htmlFor="formEmail" className="form-label">Email <span>*</span></label>
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

					<div className="container ps-5 pe-5">
						<label htmlFor="formPhone" className="form-label">Phone</label>
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

					<div className="container ps-5 pe-5">
						<label htmlFor="formMsg" className="form-label">Your Message <span>*</span></label>
						<textarea
						 type="text"
						 placeholder=""
						 name="formMsg"
						 value={formData.formMsg}
						 onChange={handleChange}
						 className={props.formDarkMode ? "form-control-plaintext textarea-dark ps-2 pe-2" : "form-control-plaintext textarea-light ps-2 pe-2"}
						 id="formMsg"
						/>
					</div>
					<br/>			

					<div className="container ps-5 pe-5">
						<div className="form-check">
							<input 
							 type="checkbox"
							 name="formReceiveUpdates"
							 checked={formData.formReceiveUpdates}
							 onChange={handleChange}
							 id="formReceiveUpdates"
							 className="form-check-input"
							/>

							<label htmlFor="formReceiveUpdates" className="form-check-label">
							I would like to receive updates via email 
							</label>
						</div>
					</div>
					<br/>

					<div className="text-center pb-4 pb-2">
						<button className="form-button-shine">Submit</button>
					</div>
				</form>
			</div>
	)
}
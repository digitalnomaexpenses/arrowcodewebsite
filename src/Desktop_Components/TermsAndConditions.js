import React from "react"

export default function TermsAndConditions(props) {
	return(
		<div className={`container pt-5 pb-5 ps-3 pe-3 ${props.darkMode ? "tncdark": ""}`}>
			<h2 className="text-center tnc-heading pb-3">Terms and Conditions</h2>
			<div>
				<h5 className="tnc-points-heading">1. Acceptance of Terms:</h5>
				<p className="tnc-points-text">By using our website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our website and services.</p>
				
				<h5 className="tnc-points-heading">2. Definitions:</h5>
				<ul className="tnc-points-text">
					<li>"Company," "we," "us," or "our" refers to [Your Company Name].</li>
					<li>"Website" refers to [Your Website URL].</li>
					<li>"User" refers to anyone who accesses or uses our website or services.</li>
				</ul>

				
				<h5 className="tnc-points-heading">3. User Rights and Responsibilities:</h5>
				<ul className="tnc-points-text">
					<li>Users are responsible for maintaining the confidentiality of their account information.</li>
					<li>Users shall not engage in any unlawful or prohibited activities on our website.</li>
					<li>Users must comply with all applicable laws and regulations.</li>
				</ul>

				<h5 className="tnc-points-heading">4. Company Services:</h5>
				<p className="tnc-points-text">We provide web development and digital marketing services world-wide and other jurisdictions as mentioned on our website.</p>
				
				<h5 className="tnc-points-heading">5. Pricing and Payment:</h5>
				<ul className="tnc-points-text">
					<li>Pricing for our services is provided on our website.</li>
					<li>Payment methods and refund policies are outlined in our Payment Terms, available on our website.</li>
				</ul>

				<h5 className="tnc-points-heading">6. Privacy Policy:</h5>
				<p className="tnc-points-text">Our Privacy Policy outlines how we collect, use, and protect user data. By using our website and services, you agree to our Privacy Policy.</p>
				
				
				<h5 className="tnc-points-heading">7. Intellectual Property:</h5>
				<p className="tnc-points-text">All intellectual property rights, including copyrights and trademarks, related to the content on our website and services belong to us or our licensors.</p>

				<h5 className="tnc-points-heading">8. Disclaimers:</h5>
				<ul className="tnc-points-text">
					<li>Information on our website is for informational purposes only and does not constitute professional advice.</li>
					<li>We do not guarantee the accuracy, completeness, or suitability of the information provided.</li>
					<li>Your use of our website and services is at your own risk.</li>
				</ul>

				<h5 className="tnc-points-heading">9. Termination</h5>
				<p className="tnc-points-text">We reserve the right to terminate or suspend a user's access to our website and services for violating these terms and conditions.</p>

				<h5 className="tnc-points-heading">10. Governing Law:</h5>
				<p className="tnc-points-text">These terms and conditions are governed by the laws of India. Any legal disputes will be resolved in the courts of [Specify Jurisdiction].</p>

				<h5 className="tnc-points-heading">11. Dispute Resolution:</h5>
				<p className="tnc-points-text">Any disputes arising from these terms and conditions shall be resolved through mediation or arbitration in accordance with the laws of India.</p>

				<h5 className="tnc-points-heading">12. Changes to Terms:</h5>
				<p className="tnc-points-text">We may update these terms and conditions from time to time. Users will be notified of any changes, and continued use of our website and services will constitute acceptance of the updated terms.</p>

				<h5 className="tnc-points-heading">13. Contact Information:</h5>
				<p className="tnc-points-text">For any inquiries or concerns regarding these terms and conditions, please contact us at [Your Contact Information].</p>
				

				<h5 className="tnc-points-heading">14. Severability:</h5>
				<p className="tnc-points-text">If any part of these terms and conditions is found to be unenforceable, the rest of the agreement remains in effect.</p>

				<h5 className="tnc-points-heading">15. Entire Agreement:</h5>
				<p className="tnc-points-text">These terms and conditions represent the entire agreement between the user and our company.</p>

				<h5 className="tnc-points-heading">16. Electronic Acceptance:</h5>
				<p className="tnc-points-text">By using our website and services, you acknowledge that you have read, understood, and agree to these terms electronically, which constitutes a legally binding agreement.</p>
				

				<small className="tnc-update">Last Updated: 15<sup>th</sup> November 2023</small>

			</div>
		</div>
	)
}
import React from "react"

export default function TermsAndConditions(props) {
	return(
		<section className={`container pt-5 pb-5 ps-3 pe-3 ${props.darkMode ? "tncdark": ""}`}>
			<h3 className="text-center section-heading pb-3">Terms and <span>Conditions</span></h3>
			<div>
				<h5 className="minor-page-heading pt-4 pb-1">1. Acceptance of Terms:</h5>
				<p className="minor-page-text">By using our website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our website and services.</p>
				
				<h5 className="minor-page-heading pt-4 pb-1">2. Definitions:</h5>
				<ul className="minor-page-text">
					<li>"Company," "we," "us," or "our" refers to [Your Company Name].</li>
					<li>"Website" refers to [Your Website URL].</li>
					<li>"User" refers to anyone who accesses or uses our website or services.</li>
				</ul>

				
				<h5 className="minor-page-heading pt-4 pb-1">3. User Rights and Responsibilities:</h5>
				<ul className="minor-page-text">
					<li>Users are responsible for maintaining the confidentiality of their account information.</li>
					<li>Users shall not engage in any unlawful or prohibited activities on our website.</li>
					<li>Users must comply with all applicable laws and regulations.</li>
				</ul>

				<h5 className="minor-page-heading pt-4 pb-1">4. Company Services:</h5>
				<p className="minor-page-text">We provide web development and digital marketing services world-wide and other jurisdictions as mentioned on our website.</p>
				
				<h5 className="minor-page-heading pt-4 pb-1">5. Pricing and Payment:</h5>
				<ul className="minor-page-text">
					<li>Pricing for our services is provided on our website.</li>
					<li>Payment methods and refund policies are outlined in our Payment Terms, available on our website.</li>
				</ul>

				<h5 className="minor-page-heading pt-4 pb-1">6. Privacy Policy:</h5>
				<p className="minor-page-text">Our Privacy Policy outlines how we collect, use, and protect user data. By using our website and services, you agree to our Privacy Policy.</p>
				
				
				<h5 className="minor-page-heading pt-4 pb-1">7. Intellectual Property:</h5>
				<p className="minor-page-text">All intellectual property rights, including copyrights and trademarks, related to the content on our website and services belong to us or our licensors.</p>

				<h5 className="minor-page-heading pt-4 pb-1">8. Disclaimers:</h5>
				<ul className="minor-page-text">
					<li>Information on our website is for informational purposes only and does not constitute professional advice.</li>
					<li>We do not guarantee the accuracy, completeness, or suitability of the information provided.</li>
					<li>Your use of our website and services is at your own risk.</li>
				</ul>

				<h5 className="minor-page-heading pt-4 pb-1">9. Termination</h5>
				<p className="minor-page-text">We reserve the right to terminate or suspend a user's access to our website and services for violating these terms and conditions.</p>

				<h5 className="minor-page-heading pt-4 pb-1">10. Governing Law:</h5>
				<p className="minor-page-text">These terms and conditions are governed by the laws of India. Any legal disputes will be resolved in the courts of [Specify Jurisdiction].</p>

				<h5 className="minor-page-heading pt-4 pb-1">11. Dispute Resolution:</h5>
				<p className="minor-page-text">Any disputes arising from these terms and conditions shall be resolved through mediation or arbitration in accordance with the laws of India.</p>

				<h5 className="minor-page-heading pt-4 pb-1">12. Changes to Terms:</h5>
				<p className="minor-page-text">We may update these terms and conditions from time to time. Users will be notified of any changes, and continued use of our website and services will constitute acceptance of the updated terms.</p>

				<h5 className="minor-page-heading pt-4 pb-1">13. Contact Information:</h5>
				<p className="minor-page-text">For any inquiries or concerns regarding these terms and conditions, please contact us at [Your Contact Information].</p>
				

				<h5 className="minor-page-heading pt-4 pb-1">14. Severability:</h5>
				<p className="minor-page-text">If any part of these terms and conditions is found to be unenforceable, the rest of the agreement remains in effect.</p>

				<h5 className="minor-page-heading pt-4 pb-1">15. Entire Agreement:</h5>
				<p className="minor-page-text">These terms and conditions represent the entire agreement between the user and our company.</p>

				<h5 className="minor-page-heading pt-4 pb-1">16. Electronic Acceptance:</h5>
				<p className="minor-page-text">By using our website and services, you acknowledge that you have read, understood, and agree to these terms electronically, which constitutes a legally binding agreement.</p>
				

				<small className="tnc-update">Last Updated: 15<sup>th</sup> November 2023</small>

			</div>
		</section>
	)
}
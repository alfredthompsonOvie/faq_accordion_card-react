import Accordion from "./Accordion";

const faqs = [
	{
		question: "How many team members can I invite?",
		answer:
			"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
	},
	{
		question: "What is the maximum file upload size?",
		answer:
			"No more than 2GB. All files in your account must fit your allotted storage space.",
	},
	{
		question: "How do I reset my password?",
		answer:
			"Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
	},
	{
		question: "Can I cancel my subscription?",
		answer:
			"Yes! Send us a message and we’ll process your request no questions asked.",
	},
	{
		question: "Do you provide additional support?",
		answer:
			"Chat and email support is available 24/7. Phone lines are open during normal business hours.",
	},
];

function Faqs() {
	return (
		<section className="faqs">
			<section className="illustration__container">
				<picture>
					<source
						srcSet="illustration-woman-online-desktop.svg"
						media="(min-width: 700px)"
					/>
					<img
						src="illustration-woman-online-mobile.svg"
						alt="an illustration of a woman online"
						className="illustration"
					/>
				</picture>

			</section>

			<section className="faq__contents">
				<h1 className="faq__title">Faq</h1>

				<Accordion faqs={faqs} />
			</section>
		</section>
	);
}

export default Faqs;

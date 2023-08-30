/* eslint-disable react/prop-types */
function AccordionItem({faq, isOpen, onToggle}) {
  return (
    <div className={`faq ${isOpen  === faq.question ? "open" : ""}`} onClick={() => onToggle(faq.question)}>
      <section className="faq__heading">
      <h1 className="faq--question">{faq.question}</h1>
        <img src="icon-arrow-down.svg" alt="" className="arrow" />
      </section>
      {isOpen === faq.question && <p className="faq--answer">{faq.answer}</p>}
    </div>
  )
}

export default AccordionItem

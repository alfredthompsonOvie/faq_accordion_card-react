/* eslint-disable react/prop-types */
function AccordionItem({faq, isOpen, onToggle}) {
  return (
    <div className={`faq ${isOpen  === faq.question ? "open" : ""}`} onClick={() => onToggle(faq.question)}>
      <section className="faq__heading">
      <h2 className="faq--question">{faq.question}</h2>
        <img src="/assets/images/icon-arrow-down.svg" alt="arrow icon" className="arrow" />
      </section>
      {isOpen === faq.question && <p className="faq--answer">{faq.answer}</p>}
    </div>
  )
}

export default AccordionItem

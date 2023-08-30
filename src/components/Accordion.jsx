import { useState } from "react"
import AccordionItem from "./AccordionItem"

/* eslint-disable react/prop-types */
function Accordion({ faqs }) {
  const [isOpen, setIsOpen] = useState(null);

  function handleToggle(faq) {
    setIsOpen(isOpen => isOpen === faq ? null : faq)
  }
  
  return (
    <div className="accordions">
      {faqs.map(faq => <AccordionItem key={faq.question} faq={faq} isOpen={isOpen} onToggle={handleToggle} />)}
    </div>
  )
}

export default Accordion

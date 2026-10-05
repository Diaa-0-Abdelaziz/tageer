import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";

export default function FAQ() {
    const [toggleState, setToggleState] = useState({});
    const faqData = [
        { id: 1,
            question: "What do I need to rent a car in Dubai?",
            answer: "Tourists need a valid passport, a visa or entry stamp, a home-country driving licence (an International Driving Permit is recommended) and a credit or debit card for the security deposit. UAE residents need an Emirates ID and a UAE driving licence."
        },
        { id: 2,
            question: "Can I take a rental car from Dubai to Oman?",
            answer: "Yes, on selected vehicles. Cross-border travel to Oman needs prior approval and extra insurance cover, so tell us before you book and we will arrange the paperwork."
        },
        { id: 3,
            question: "Is insurance included in the rental price?",
            answer: "Basic insurance is included with every rental. Full-coverage and zero-excess options are available as add-ons when you book."
        },
        { id: 4,
            question: "Can I cancel or change my booking?",
            answer: "Yes. You can cancel or amend a booking free of charge up to 24 hours before pick-up. Later changes may be subject to a fee depending on the owner's policy."
        },
    ];
    
    function toggleFaq(id) {
        setToggleState(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }

    return (
        <>
            <section className='faq'>
                <div className="container">
                    <h2>FAQ</h2>
                    <div id="accordionExample">
                        {faqData.map((faq) => (
                            <div className="accordion-item article mt-5" key={faq.id}>
                                <h2 className="accordion-header" id={`heading${faq.id}`}>
                                    <div className='button'>
                                        <span className='question'>{faq.question}</span>
                                        <span className='toggleButton' data-bs-toggle="collapse" data-bs-target={`#collapse${faq.id}`}  onClick={() => toggleFaq(faq.id)}>
                                            {toggleState[faq.id] ? <FiMinus /> : <FaPlus />}
                                        </span>
                                    </div>
                                </h2>
                                <div id={`collapse${faq.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${faq.id}`} data-bs-parent="#accordionExample">
                                    <div className="accordion-body pt-5">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
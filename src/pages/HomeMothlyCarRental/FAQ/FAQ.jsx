import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";

export default function FAQ() {
    const [toggleState, setToggleState] = useState({});
    const faqData = [
        { id: 1,
            question: "How much cheaper is monthly rental than daily rental?",
            answer: "Monthly rates are usually 40\u201360% lower per day than short-term rates, depending on the car and season."
        },
        { id: 2,
            question: "Is maintenance included in a monthly rental?",
            answer: "Yes. Routine servicing, registration and basic insurance are included. You only pay for fuel, Salik tolls and fines."
        },
        { id: 3,
            question: "Is there a mileage limit?",
            answer: "Most monthly rentals include around 3,000 km. Extra kilometres are charged at a small per-km rate, and unlimited-mileage options are available."
        },
        { id: 4,
            question: "Can I extend or end my monthly rental early?",
            answer: "You can extend at any time subject to availability. Early returns are accepted with prior notice, and the terms depend on the rental company."
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
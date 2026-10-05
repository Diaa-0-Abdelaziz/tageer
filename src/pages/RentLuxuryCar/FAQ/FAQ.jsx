import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";

export default function FAQ() {
    const [toggleState, setToggleState] = useState({});
    const faqData = [
        { id: 1,
            question: "What is the security deposit for a luxury car?",
            answer: "Deposits typically range from AED 2,000 to AED 10,000 depending on the car, and are refunded after the vehicle is returned undamaged."
        },
        { id: 2,
            question: "Is there a daily mileage limit?",
            answer: "Yes, most luxury rentals include 250 km per day. Additional kilometres are charged at a per-km rate shown in the listing."
        },
        { id: 3,
            question: "Can I hire a chauffeur with a luxury car?",
            answer: "Yes. Many listings offer an optional professional chauffeur for an extra daily fee."
        },
        { id: 4,
            question: "Where can the car be delivered?",
            answer: "Delivery is available to your hotel, home, office or any airport terminal in the UAE, often free of charge."
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
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";

export default function FAQ() {
    const [toggleState, setToggleState] = useState({});
    const faqData = [
        { id: 1,
            question: "What is the minimum age to rent a sports car?",
            answer: "The minimum age is usually 25, with at least one year of holding a valid driving licence. Some high-performance cars require 30+."
        },
        { id: 2,
            question: "What documents do I need?",
            answer: "A valid passport, visa or Emirates ID, and a driving licence. Tourists should carry an International Driving Permit if their licence is not in English or Arabic."
        },
        { id: 3,
            question: "Is insurance included?",
            answer: "Basic insurance is included with an excess. Zero-excess cover can be added at booking."
        },
        { id: 4,
            question: "What is the mileage allowance?",
            answer: "Sports cars typically include 150\u2013250 km per day. Extra kilometres are charged per km."
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
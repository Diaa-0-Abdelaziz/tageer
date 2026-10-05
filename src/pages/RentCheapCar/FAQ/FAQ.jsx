import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";

export default function FAQ() {
    const [toggleState, setToggleState] = useState({});
    const faqData = [
        { id: 1,
            question: "What is the cheapest way to rent a car in Dubai?",
            answer: "Book for a week or a month and choose an economy car. Longer rentals have much lower daily rates."
        },
        { id: 2,
            question: "Are there any hidden fees?",
            answer: "No. The price shown includes basic insurance and VAT. Fuel, Salik tolls, fines and optional extras are charged separately."
        },
        { id: 3,
            question: "How much is the deposit for an economy car?",
            answer: "Deposits for economy cars usually range from AED 300 to AED 1,000 and are refunded when you return the car."
        },
        { id: 4,
            question: "Can I pay by cash?",
            answer: "Payment options vary by company. Most accept cards, and some accept cash for the rental fee, but deposits are normally held on a card."
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
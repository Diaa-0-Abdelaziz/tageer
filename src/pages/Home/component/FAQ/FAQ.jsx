import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import './FAQ.css'
export default function FAQ() {
    const [toggleState, setToggleState] = useState({});
    const faqData = [
        { id: 1,
            question: "Can I take a rental car from Dubai to Oman?",
            answer: "Yes, cross-border trips to Oman are allowed on selected vehicles. Let us know your travel dates when booking so we can arrange the required border permit in advance."
        },
        { id: 2,
          question: "What documents do I need to rent a car in Dubai?",
          answer: "A valid driving license and passport or Emirates ID. Visitors whose license isn't in English or Arabic will also need an International Driving Permit."
        },
        { id: 3,
          question: "Is insurance included in the rental price?",
          answer: "Every rental includes basic insurance coverage. Additional protection plans are available at checkout if you'd like extra peace of mind."
        },
        { id: 4,
          question: "Can I cancel or modify my booking?",
          answer: "You can cancel for free up to 24 hours before pickup. To modify dates or the vehicle, just reach out to our support team or manage it from your account."
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
                    <div>
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
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import "../../../Home/component/FAQ/FAQ.css"
export default function FAQ() {
    const [toggleState, setToggleState] = useState({});
    const faqData = [
        { id: 1, 
            question: "Can I take a rental car from Dubai to Oman?", 
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quo nam nesciunt laboriosam iste laborum corrupti corporis quaerat ut perspiciatis?" 
        },
        { id: 2, 
          question: "Can I take a rental car from Dubai to Oman?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quo nam nesciunt laboriosam iste laborum corrupti corporis quaerat ut perspiciatis?" 
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
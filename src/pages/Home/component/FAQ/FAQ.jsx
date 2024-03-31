import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import "./FAQ.css";

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
            [id]:!prevState[id]
        }));
    }

    return (
        <>
            <section className='faq'>
                <div className="container">
                    <h2>FAQ</h2>

                    {faqData.map(faq => (
                        <article key={faq.id} className={`rounded-4 px-2 py-2 mt-4 ${toggleState[faq.id] ? 'open' : ''}`}>
                            <ul className='list-unstyled d-flex justify-content-between p-2'>
                                <li className='question'>
                                    {faq.question}
                                </li>
                                <li className='toggleButton' onClick={() => toggleFaq(faq.id)}>
                                    {toggleState[faq.id] ? <FiMinus /> : <FaPlus />}
                                </li>
                            </ul>
                            <p>
                                {faq.answer}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
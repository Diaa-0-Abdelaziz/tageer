import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import './FAQ.css'
export default function FAQ() {
  const { t } = useTranslation();
    const [toggleState, setToggleState] = useState({});
    const faqData = t('home.faq.items', { returnObjects: true }).map((item, i) => ({ id: i + 1, question: item.q, answer: item.a }));
    
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
                    <h2>{t('home.faq.title')}</h2>
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
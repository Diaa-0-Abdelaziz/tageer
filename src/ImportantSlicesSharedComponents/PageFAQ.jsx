import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import '../pages/Home/component/FAQ/FAQ.css';

// FAQ accordion read from faqSets.<set> in the locale files.
export default function PageFAQ({ set = 'general', hideTitle = false }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState({});
  const items = t(`faqSets.${set}`, { returnObjects: true });
  const toggle = (id) => setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  return (
    <section className='faq'>
      <div className="container">
        {!hideTitle && <h2>{t('common.faq')}</h2>}
        <div>
          {items.map((faq, i) => {
            const id = `${set}-${i}`;
            return (
              <div className="accordion-item article mt-5" key={id}>
                <h2 className="accordion-header" id={`heading${id}`}>
                  <div className='button'>
                    <span className='question'>{faq.q}</span>
                    <span className='toggleButton' data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} onClick={() => toggle(id)}>
                      {open[id] ? <FiMinus /> : <FaPlus />}
                    </span>
                  </div>
                </h2>
                <div id={`collapse${id}`} className="accordion-collapse collapse" aria-labelledby={`heading${id}`}>
                  <div className="accordion-body pt-5">{faq.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

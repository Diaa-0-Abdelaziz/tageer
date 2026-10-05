import { useTranslation } from 'react-i18next';
import React from 'react'
import "./NextTrip.css"


export default function NextTrip() {
  const { t } = useTranslation();
  const steps = t('home.nextTrip.steps', { returnObjects: true });
  return (
   <>
   <section className='NextTrip mt-5'>
    <div className="container">
      <h2 className='NextTrip_title text-capitalize text-center'>{t('home.nextTrip.title')}</h2>
      <div className="NextTrip_steps d-flex justify-content-between">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            {i > 0 && <div className="line"></div>}
            <article className="NextTrip_content">
              <span className='num'>{`0${i + 1}`}</span>
              <p>{step.title}</p>
              <span className='desc'>{step.text}</span>
            </article>
          </React.Fragment>
        ))}
      </div>
    </div>
   </section>
   </>
  )
}

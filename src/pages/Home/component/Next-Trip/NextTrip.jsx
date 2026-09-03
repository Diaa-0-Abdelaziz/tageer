import React from 'react'
import "./NextTrip.css"

const steps = [
  { title: 'Choose Destination', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.' },
  { title: 'Make Payment', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.' },
  { title: 'Reach Airport on Selected Date', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.' },
];

export default function NextTrip() {
  return (
   <>
   <section className='NextTrip mt-5'>
    <div className="container">
      <h2 className='NextTrip_title text-capitalize text-center'>book your next trip in 3 easy steps</h2>
      <div className="NextTrip_steps d-flex justify-content-between">
        {steps.map((step, i) => (
          <React.Fragment key={step.title}>
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

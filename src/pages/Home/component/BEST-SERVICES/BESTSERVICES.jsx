import React from 'react'
import LazyLoad from 'react-lazyload';
import img_your_image_mask from "../../../../images/img_your_image_mask.png"
import img_fleet_variety from "../../../../images/fleet/mercedes-g-class.jpg"
export default function BESTSERVICES() {
  let BESTSERVICES=[
    {
      img:img_your_image_mask,
      eyebrow:"Why Tajeer",
      header:"We always deliver the best service",
      explanation:"Every car on Tajeer is verified and insured before it goes live. Transparent pricing, flexible pickup and 24/7 support mean you can book with confidence, anywhere in the UAE."
    },
    {
      img:img_fleet_variety,
      eyebrow:"Our Fleet",
      header:"A fleet built for every journey",
      explanation:"From economy hatchbacks to luxury SUVs, choose the ride that fits your trip. Daily, weekly or monthly rentals — delivered clean, fueled and ready to go."
    }
  ]
  return (
    <>
    {BESTSERVICES.map((service, index)=>
    <section className='BESTSERVICES' key={index}>
    <div className="container overflow-hidden">
        <div className="row d-flex justify-content-center align-items-center overflow-hidden">
          {index % 2 === 0 ?

          <div className="col-lg-4 col-md-6">
          <LazyLoad>
            <div className='media'>
              <img src={service.img} alt={service.header} className=' w-100' loading='lazy' />
            </div>
          </LazyLoad>
        </div>
        :
        <div className="col-lg-5 col-md-6">
        <span className='eyebrow'>{service.eyebrow}</span>
        <h3>{service.header}</h3>
        <p>{service.explanation}</p>
    </div>
        }
            {index % 2 === 0 ?
              <div className="col-lg-5 col-md-6">
              <span className='eyebrow'>{service.eyebrow}</span>
              <h3>{service.header}</h3>
              <p>{service.explanation}</p>
          </div>
          :
          <div className="col-lg-4 col-md-6">
          <LazyLoad>
            <div className='media'>
              <img src={service.img} alt={service.header} className=' w-100' loading='lazy' />
            </div>
          </LazyLoad>
        </div>
            }
        </div>
    </div>
        </section>
  )}
    </>
  )
}

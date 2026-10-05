import React from 'react'
import LazyLoad from 'react-lazyload';
import img_your_image_mask from "../../../../images/img_your_image_mask.png"
export default function BESTSERVICESAboutOne() {
  let BESTSERVICES=[
    {
      img:img_your_image_mask,
      header:"We will allways provide the best services",
      explanation:"We bring together trusted rental companies across the UAE so you can compare prices, read verified reviews and book with confidence. Every listing shows what is included, with clear terms and no hidden fees, and our support team is available seven days a week to help before and after you book."
    },
    {
      img:img_your_image_mask,
      header:"We will allways provide the best services",
      explanation:"We bring together trusted rental companies across the UAE so you can compare prices, read verified reviews and book with confidence. Every listing shows what is included, with clear terms and no hidden fees, and our support team is available seven days a week to help before and after you book."
    }
  ]
  
  return (
    <>
    {BESTSERVICES.map((service, index)=>
    <section className='BESTSERVICES' key={index}>
    <div className="container overflow-hidden">
        <div className="row d-flex justify-content-center overflow-hidden">
          {index % 2 === 0 ? 
          
          <div className="col-lg-4 col-md-6">
          <LazyLoad>
        <img src={service.img} alt={service.img} className=' w-100' loading='lazy' />
          </LazyLoad>
        </div>
        :
        <div className="col-lg-5 col-md-6">
        <h3>{service.header}</h3>
        <p>{service.explanation}</p>
    </div>
        }
            {index % 2 === 0 ? 
              <div className="col-lg-5 col-md-6">
              <h3>{service.header}</h3>
              <p>{service.explanation}</p>
          </div>
          :
          <div className="col-lg-4 col-md-6">
          <LazyLoad>
        <img src={service.img} alt={service.img} className=' w-100' loading='lazy' />
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

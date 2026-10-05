import React from 'react'
import LazyLoad from 'react-lazyload';
import img_your_image_mask1 from "../../../../images/brand/list-app-splash.png"
import img_your_image_mask2 from "../../../../images/brand/list-app-detail.png"
import img_your_image_mask3 from "../../../../images/brand/list-app-splash.png"
export default function BESTSERVICESOne() {

  let BESTSERVICES=[
    {
      img:img_your_image_mask1,
      header:"List your fleet in minutes",
      explanation:"Create a free Zenith account, add your cars with photos, daily, weekly and monthly rates, and your listing goes live after a quick verification. No setup fees and no long-term contract."
    },
    {
      img:img_your_image_mask2,
      header:"Get bookings straight to your phone",
      explanation:"Customers see your full specs, rates and availability, then contact you instantly on WhatsApp, email or phone. You keep control of pricing and who you rent to."
    },
    {
      img:img_your_image_mask3,
      header:"Grow with a platform built for rental companies",
      explanation:"Reach thousands of visitors searching for cars in Dubai every month. Featured placement, verified badges and customer reviews help your fleet stand out."
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
        <img src={service.img} alt={service.header} className=' w-100' loading='lazy' />
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
        <img src={service.img} alt={service.header} className=' w-100' loading='lazy' />
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

import { useTranslation } from 'react-i18next';
import React from 'react'
import LazyLoad from 'react-lazyload';
import img_your_image_mask from "../../../../images/img_your_image_mask.png"
import img_fleet_variety from "../../../../images/fleet/mercedes-g-class.jpg"
export default function BESTSERVICES() {
  const { t } = useTranslation();
  const texts = t('home.services', { returnObjects: true });
  let BESTSERVICES=[
    { img:img_your_image_mask, ...texts[0] },
    { img:img_fleet_variety, ...texts[1] },
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

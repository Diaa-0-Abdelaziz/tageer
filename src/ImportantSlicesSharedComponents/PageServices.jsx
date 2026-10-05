import React from 'react'
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
import img_your_image_mask from "../images/img_your_image_mask.png"

// "We always deliver the best service" block used at the bottom of the catalogue pages.
export default function PageServices() {
  const { t } = useTranslation();
  return (
    <section className='BESTSERVICES'>
      <div className="container overflow-hidden">
        <div className="row d-flex justify-content-center align-items-center overflow-hidden">
          <div className="col-lg-4 col-md-6">
            <LazyLoad>
              <div className='media'>
                <img src={img_your_image_mask} alt={t('servicesGeneric.header')} className=' w-100' loading='lazy' />
              </div>
            </LazyLoad>
          </div>
          <div className="col-lg-5 col-md-6">
            <span className='eyebrow'>{t('servicesGeneric.eyebrow', 'Zenith')}</span>
            <h3>{t('servicesGeneric.header')}</h3>
            <p>{t('servicesGeneric.explanation')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

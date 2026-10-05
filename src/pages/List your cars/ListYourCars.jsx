import React from 'react'
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
import PageBanner from '../../ImportantSlicesSharedComponents/PageBanner';
import imgSplash from "../../images/brand/list-app-splash.png"
import imgDetail from "../../images/brand/list-app-detail.png"

export default function ListYourCars() {
  const { t } = useTranslation();
  const sections = t('listYourCars.sections', { returnObjects: true });
  const images = [imgSplash, imgDetail, imgSplash];
  return (
    <>
    <PageBanner title={t('banner.listYourCars')} />
    {sections.map((service, index) => (
      <section className='BESTSERVICES' key={index}>
        <div className="container overflow-hidden">
          <div className={`row d-flex justify-content-center overflow-hidden ${index % 2 ? 'flex-row-reverse' : ''}`}>
            <div className="col-lg-4 col-md-6">
              <LazyLoad><img src={images[index]} alt={service.header} className=' w-100' loading='lazy' /></LazyLoad>
            </div>
            <div className="col-lg-5 col-md-6">
              <h3>{service.header}</h3>
              <p>{service.explanation}</p>
            </div>
          </div>
        </div>
      </section>
    ))}
    </>
  )
}

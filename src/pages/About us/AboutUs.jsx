import React from 'react';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
import PageBanner from '../../ImportantSlicesSharedComponents/PageBanner';
import imgMask from "../../images/img_your_image_mask.png"
import imgFleet from "../../images/fleet/mercedes-g-class.jpg"

export default function AboutUs() {
  const { t } = useTranslation();
  const sections = t('about.sections', { returnObjects: true });
  const images = [imgMask, imgFleet];
  return (
    <>
    <PageBanner title={t('banner.about')} />
    {sections.map((section, index) => (
      <section className='BESTSERVICES' key={index}>
        <div className="container overflow-hidden">
          <div className={`row d-flex justify-content-center align-items-center overflow-hidden ${index % 2 ? 'flex-row-reverse' : ''}`}>
            <div className="col-lg-4 col-md-6">
              <LazyLoad>
                <div className='media'><img src={images[index]} alt={section.header} className=' w-100' loading='lazy' /></div>
              </LazyLoad>
            </div>
            <div className="col-lg-5 col-md-6">
              <span className='eyebrow'>{section.eyebrow}</span>
              <h3>{section.header}</h3>
              <p>{section.text}</p>
            </div>
          </div>
        </div>
      </section>
    ))}
    </>
  )
}

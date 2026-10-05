import React from 'react'
import ImageGallery from "react-image-gallery";
import { GoDotFill } from "react-icons/go";
import 'react-image-gallery/styles/css/image-gallery.css';
import { useLocalize } from '../../../../../i18n/localize';
import logo from "../../../../../images/brand/zenith-icon.png"
import ContactBar from '../../../../../ImportantSlicesSharedComponents/ContactBar';

export default function RentSuvDubaiCursel({yacht: source}) {
    const { t, lang, money, yacht: localize } = useLocalize();
    if (!source) return null;
    const yacht = localize(source);

    const images = yacht.images.map((src) => ({
      original: src,
      thumbnail: src,
      originalAlt: t('yacht.altCharter', { title: yacht.title }),
      thumbnailAlt: yacht.title,
    }));

      return (
       <section className='RentSuvDubaiCursel'>
       <div className="container">
       <div className="row">
       <div className="col-lg-6 position-relative main_img ">
        <ImageGallery items={images}
         showFullscreenButton={false}
         showPlayButton={false}
         showThumbnails={images.length > 1}
         showNav={images.length > 1}
         autoPlay={images.length > 1}
         isRTL={false}
         />
        <span className='position-absolute top-0 end-0 m-3 p-1 fs-6'>{t('details.saveWishlist')}</span>
        
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className=" active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">{t('carDetails.descTab')}</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{t('yacht.details.includedTab')}</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">{t('carDetails.reviewsTab')}</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <h3 className=' mt-5'>{yacht.title}</h3>
    <p className=' mt-5'>{yacht.description}</p>
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
    <h3 className=' mt-5'>{t('yacht.details.included')}</h3>
    <ul className=' mt-5'>
      {yacht.included.map((item) => <li key={item}><GoDotFill/> {item}</li>)}
    </ul>
    <h3 className=' mt-5'>{t('yacht.details.onBoard')}</h3>
    <ul className=' mt-3'>
      {yacht.features.map((feature) => <li key={feature}><GoDotFill/> {feature}</li>)}
    </ul>
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
    <h3 className=' mt-5'>{t('carDetails.reviewsTitle')}</h3>
    <p className=' mt-5'>{t('yacht.details.noReviews')}</p>
  </div>
</div>

<div className="new_feature">
<h3 className=' mt-5'>{t('yacht.details.about', { title: yacht.title })}</h3>
    <p className=' mt-5'>{yacht.highlights}</p>
    </div>     
        </div>
        <div className="col-lg-6 details">
            <h3>{yacht.title}</h3>
            <p>{yacht.description}</p>
            <h4>{t('carDetails.feature')}</h4>
           <div className="feature_details d-flex justify-content-between align-items-center">
           <ul>
            <li><GoDotFill/> {t('yacht.details.length', { value: yacht.lengthFt })}</li>
            <li><GoDotFill/> {t('yacht.details.guests', { count: yacht.capacity })}</li>
            <li><GoDotFill/> {t('yacht.details.cabins', { count: yacht.cabins })}</li>
            <li><GoDotFill/> {t('yacht.details.crew', { count: yacht.crew })}</li>
            <li><GoDotFill/> {t('yacht.details.departs', { value: yacht.departure })}</li>
           </ul>
           <ul>
            <li><GoDotFill/> {t('yacht.details.bestFor', { value: yacht.bestFor })}</li>
            <li><GoDotFill/> {t('yacht.details.minCharter', { hours: yacht.minHours })}</li>
            <li><GoDotFill/> {t('yacht.details.operator', { value: yacht.operator })}</li>
            <li><GoDotFill/> {t('yacht.details.fuelCrew')}</li>
           </ul>
           <ul className='pricing'>
            {yacht.rates.map((rate) => (
              <li key={rate.key}>
                <div>{rate.label}<br/>{money(rate.price)}</div>
              </li>
            ))}
           </ul>
           </div>
           <ContactBar whatsapp={yacht.whatsapp} email={yacht.email} call={yacht.call} />
          <div className='logo d-flex flex-column align-items-center'>
          <img src={logo} alt='Zenith' style={{width:'110px',padding:'10px 14px',borderRadius:'12px',backgroundImage:'linear-gradient(180deg, #17233E 0%, #0A1220 100%)'}} />
          <span>{yacht.operator}</span>
          </div>
        </div>
       </div>
       </div>
       </section>
      );
}

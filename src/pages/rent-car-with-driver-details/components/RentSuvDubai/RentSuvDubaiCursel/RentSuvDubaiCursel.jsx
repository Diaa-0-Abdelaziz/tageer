import React from 'react'
import ImageGallery from "react-image-gallery";
import { GoDotFill } from "react-icons/go";
import 'react-image-gallery/styles/css/image-gallery.css';
import { useLocalize } from '../../../../../i18n/localize';
import ContactBar from '../../../../../ImportantSlicesSharedComponents/ContactBar';

export default function RentSuvDubaiCursel({car: source}) {
    const { t, lang, money, chauffeur: localize } = useLocalize();
    if (!source) return null;
    const car = localize(source);
    const { chauffeur } = car;

    const images = car.images.map((src) => ({
      original: src,
      thumbnail: src,
      originalAlt: t('chauffeur.altWithDriver', { title: car.title }),
      thumbnailAlt: car.title,
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
    <button className="" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{t('chauffeur.details.includedTab')}</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">{t('carDetails.reviewsTab')}</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <h3 className=' mt-5'>{car.year} {car.brandLabel} {car.model}</h3>
    <p className=' mt-5'>{car.description}</p>
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
    <h3 className=' mt-5'>{t('chauffeur.details.included')}</h3>
    <ul className=' mt-5'>
      {chauffeur.included.map((item) => <li key={item}><GoDotFill/> {item}</li>)}
    </ul>
    <h3 className=' mt-5'>{t('chauffeur.details.carFeatures')}</h3>
    <ul className=' mt-3'>
      {car.features.map((feature) => <li key={feature}><GoDotFill/> {feature}</li>)}
    </ul>
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
    <h3 className=' mt-5'>{t('carDetails.reviewsTitle')}</h3>
    <p className=' mt-5'>{t('chauffeur.details.noReviews')}</p>
  </div>
</div>

<div className="new_feature">
<h3 className=' mt-5'>{t('carDetails.highlightsTitle', { title: car.title, year: car.year })}</h3>
    <p className=' mt-5'>{car.highlights}</p>
    </div>     
        </div>
        <div className="col-lg-6 details">
            <h3>{t('chauffeur.titleWithDriver', { title: car.title })}</h3>
            <p>{car.description}</p>
            <h4>{t('carDetails.feature')}</h4>
           <div className="feature_details d-flex justify-content-between align-items-center">
           <ul>
            <li><GoDotFill/> {t('carDetails.color', { value: car.color })}</li>
            <li><GoDotFill/> {t('carDetails.brand', { value: car.brandLabel })}</li>
            <li><GoDotFill/> {t('carDetails.model', { value: car.model })}</li>
            <li><GoDotFill/> {t('carDetails.year', { value: car.year })}</li>
            <li><GoDotFill/> {t('carDetails.type', { value: car.bodyType })}</li>
           </ul>
           <ul>
            <li><GoDotFill/> {t('carDetails.doors', { count: car.doors })}</li>
            <li><GoDotFill/> {t('carDetails.engine', { engine: car.engine, power: car.power })}</li>
            <li><GoDotFill/> {t('carDetails.transmission', { value: car.transmission })}</li>
            <li><GoDotFill/> {t('chauffeur.details.fuelType', { value: car.fuel })}</li>
            <li><GoDotFill/> {t('chauffeur.details.depositNone')}</li>
           </ul>
           <ul className='pricing'>
            {chauffeur.rates.slice(0, 3).map((rate) => (
              <li key={rate.key}>
                <div>{rate.label}<br/>{money(rate.price)}</div>
              </li>
            ))}
           </ul>
           </div>
           <ul className=' list-unstyled mt-3'>
            <li><GoDotFill/> {t('chauffeur.details.airportLine', { label: chauffeur.rates[3].label, detail: chauffeur.rates[3].detail.toLowerCase(), price: money(chauffeur.rates[3].price) })}</li>
            <li><GoDotFill/> {t('chauffeur.details.minBooking', { hours: chauffeur.minHours })}</li>
            <li><GoDotFill/> {t('chauffeur.details.extraHour', { price: money(chauffeur.extraHourPrice) })}</li>
            <li><GoDotFill/> {t('chauffeur.details.driverSpeaks', { languages: chauffeur.languages.join(lang === 'ar' ? '، ' : ', ') })}</li>
            <li><GoDotFill/> {t('chauffeur.details.seats', { count: car.seats })}</li>
           </ul>
           <ContactBar whatsapp={car.whatsapp} email={car.email} call={car.call} />
          <div className='logo d-flex flex-column align-items-center'>
          <img src={car.supplierLogo} alt={car.supplierLabel} />
          <span>{car.supplierLabel}</span>
          </div>
        </div>
       </div>
       </div>
       </section>
      );
}

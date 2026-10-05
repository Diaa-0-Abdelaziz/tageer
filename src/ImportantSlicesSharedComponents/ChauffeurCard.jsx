import React from 'react'
import { GoDotFill } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useLocalize } from '../i18n/localize';

// Card for a chauffeur-driven offer (see data/chauffeur.js).
export default function ChauffeurCard({ car: source }) {
  const { t, lang, money, chauffeur: localize } = useLocalize();
  const car = localize(source);
  const { chauffeur } = car;
  return (
    <div className='p-2 content col-lg-4 col-md-6'>
    <div className='slider-pro overflow-hidden position-relative'>
  <Link to={`/rentCarWithDriver/${car.id}`} className=' text-decoration-none text-black' aria-label={t('chauffeur.titleWithDriver', { title: car.title })}>
  <img src={car.img} alt={t('chauffeur.altWithDriver', { title: car.title })} width="600" height="400" className='w-100 card-media' loading='lazy' />
  </Link>
  <div className="body px-2">
  <div className="options d-flex px-4 justify-content-between links position-absolute top-0 mt-3  w-100 ">
  <ul className=' list-unstyled d-flex'>
    <li className='badge me-1 Featured'>{t('chauffeur.badgeWithDriver')}</li>
    <li className='badge me-1 Verified'>{t('common.verified')}</li>
  </ul>
  <p className='badge Save_to_wishlist text-dark'>{t('common.saveToWishlist')}</p>
  </div>
  <div className='title border-bottom p-2'>
  <Link to={`/rentCarWithDriver/${car.id}`} className='text-decoration-none text-black'>
    <span>{t('chauffeur.titleWithDriver', { title: car.title })}</span>
  </Link>
  </div>
  <div className="salary border-bottom mt-3 px-2 d-flex justify-content-between align-items-center">
    <div>
        <ul className=' list-unstyled'>
            {chauffeur.rates.map((rate) => (
              <li key={rate.key}><GoDotFill/> {rate.label} {money(rate.price)}</li>
            ))}
            <li><GoDotFill/> {t('chauffeur.seatsSpeaks', { seats: car.seats, languages: chauffeur.languages.join(lang === 'ar' ? '، ' : ', ') })}</li>
        </ul>
    </div>
    <div className=' d-flex flex-column'>
        <img src={car.supplierLogo} alt={car.supplierLabel} />
        <span>{car.supplierLabel}</span>
    </div>
  </div>
  <div className="contact mt-2">
      <ul className='list-unstyled d-flex justify-content-around'>
          <li>
              <i onClick={() => window.open(`https://wa.me/${car.whatsapp}`)}>
                  <div className="ex-categor d-flex flex-column">
                      <span onClick={() => window.open(`https://wa.me/${car.whatsapp}`)}>{car.whatsapp}</span>
                  </div>
                  <IoLogoWhatsapp />
              </i>
              <span>{t('common.whatsapp')}</span>
          </li>
          <li>
              <i onClick={() => window.open(`mailto:${car.email}`)}>
                  <div className="ex-categor d-flex flex-column">
                      <span onClick={() => window.open(`mailto:${car.email}`)}>{car.email}</span>
                  </div>
                  <MdEmail/>
              </i>
              <span>{t('common.email')}</span>
          </li>
          <li>
              <i onClick={() => window.open(`tel:+${car.call}`)}>
                  <div className="ex-categor d-flex flex-column">
                      <span onClick={() => window.open(`tel:+${car.call}`)}>{car.call}</span>
                  </div>
                  <IoCallSharp/>
              </i>
              <span>{t('common.call')}</span>
          </li>
      </ul>
  </div>
  </div>
</div>
    </div>
  )
}

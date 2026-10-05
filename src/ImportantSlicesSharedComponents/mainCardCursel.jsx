import { useTranslation } from 'react-i18next';
import React from 'react'
import { GoDotFill } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import fallbackLogo from "../images/brand/zenith-icon.png"
export default function MainCardCursel({productId, productImage, productTitle, ownerWhatsapp, ownerEmail, ownerCall, pricePerDay = 500, pricePerWeek = 3500, pricePerMonth = 10000, deposit = 2000, minDays = 2, supplier = "Zenith rental partner", supplierLogo}) {
  const { t } = useTranslation();

  return (
    <div className='p-2 content'>
    <div className='slider-pro overflow-hidden position-relative'>
  <Link  to={`/CarList/` + productId} className=' text-decoration-none text-black' aria-label="Go to rent car with driver details page">
  <img src={productImage} alt={t(`carData.${productId}.title`, productTitle)} width="600" height="400" className='w-100 card-media' loading='lazy' />
  </Link>
  <div className="body px-2">
  <div className="options d-flex px-4 justify-content-between links position-absolute top-0 mt-3  w-100 ">
  <ul className=' list-unstyled d-flex'>
    <li className='badge me-1 Featured'>{t('common.featured')}</li>
    <li className='badge me-1 Premium'>{t('common.premium')}</li>
    <li className='badge me-1 Verified'>{t('common.verified')}</li>
  </ul>
  <p className='badge Save_to_wishlist text-dark'>{t('common.saveToWishlist')}</p>
  </div>
  <div className='title border-bottom p-2'>
  <span className='text-capitalize'>{t(`carData.${productId}.title`, productTitle)}</span>
  </div>
  <div className="salary border-bottom mt-3 px-2 d-flex justify-content-between align-items-center">
    <div>
        <ul className=' list-unstyled'>
            <li><GoDotFill/> {t('common.perDay')} {pricePerDay} {t('common.aedUnit')}</li>
            <li><GoDotFill/> {t('common.perWeek')} {pricePerWeek} {t('common.aedUnit')}</li>
            <li><GoDotFill/> {t('common.perMonth')} {pricePerMonth} {t('common.aedUnit')}</li>
            <li><GoDotFill/> {t('common.deposit')} {deposit}</li>
            <li><GoDotFill/> {t('common.minimumDays')} {minDays}</li>
        </ul>
    </div>
    <div className=' d-flex flex-column'>
        <img src={supplierLogo || fallbackLogo} alt={t(`companies.${supplier}`, supplier)} />
        <span>{t(`companies.${supplier}`, supplier)}</span>
    </div>
  </div>
  <div className="contact mt-2">
      <ul className='list-unstyled d-flex justify-content-around'>
          <li>
              <i onClick={() => window.open(`https://wa.me/${ownerWhatsapp}`)}>
                  <div className="ex-categor d-flex flex-column">
                      <span onClick={() => window.open(`https://wa.me/${ownerWhatsapp}`)}>
                          {ownerWhatsapp}
                      </span>
                  </div>
                  <IoLogoWhatsapp />
              </i>
              <span>{t('common.whatsapp')}</span>
          </li>
          <li>
              <i onClick={() => window.open(`mailto:${ownerEmail}`)}>
                  <div className="ex-categor d-flex flex-column">
                      <span onClick={() => window.open(`mailto:${ownerEmail}`)}>
                          {ownerEmail}
                      </span>
                  </div>
                  <MdEmail/>
              </i>
              <span>{t('common.email')}</span>
          </li>
          <li>
              <i onClick={() => window.open(`tel:+${ownerCall}`)}>
                  <div className="ex-categor d-flex flex-column">
                      <span onClick={() => window.open(`tel:+${ownerCall}`)}>
                          {ownerCall}
                      </span>
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

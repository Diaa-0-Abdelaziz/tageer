import React from 'react'
import { GoDotFill } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useLocalize } from '../i18n/localize';
import logo from "../images/brand/zenith-icon.png"

// Card for a yacht charter (see data/yachts.js).
export default function YachtCard({ yacht: source }) {
  const { t, money, yacht: localize } = useLocalize();
  const yacht = localize(source);
  return (
    <div className='p-2 content col-lg-4 col-md-6'>
    <div className='slider-pro overflow-hidden position-relative'>
  <Link to={`/yachts/${yacht.id}`} className=' text-decoration-none text-black' aria-label={`${yacht.title} details`}>
  <img src={yacht.img} alt={t('yacht.altCharter', { title: yacht.title })} width="600" height="400" className='w-100 card-media' loading='lazy' />
  </Link>
  <div className="body px-2">
  <div className="options d-flex px-4 justify-content-between links position-absolute top-0 mt-3  w-100 ">
  <ul className=' list-unstyled d-flex'>
    <li className='badge me-1 Featured'>{t('yacht.badgeLength', { length: yacht.lengthFt })}</li>
    <li className='badge me-1 Verified'>{t('yacht.badgeGuests', { count: yacht.capacity })}</li>
  </ul>
  <p className='badge Save_to_wishlist text-dark'>{t('common.saveToWishlist')}</p>
  </div>
  <div className='title border-bottom p-2'>
  <Link to={`/yachts/${yacht.id}`} className='text-decoration-none text-black'>
    <span>{yacht.title}</span>
  </Link>
  </div>
  <div className="salary border-bottom mt-3 px-2 d-flex justify-content-between align-items-center">
    <div>
        <ul className=' list-unstyled'>
            {yacht.rates.map((rate) => (
              <li key={rate.key}><GoDotFill/> {rate.label} {money(rate.price)}</li>
            ))}
            <li><GoDotFill/> {t('yacht.cabinsDeparts', { cabins: t('yacht.cabin', { count: yacht.cabins }), departure: yacht.departure })}</li>
        </ul>
    </div>
    <div className=' d-flex flex-column'>
        <img src={logo} alt='Zenith Car Rental' style={{ backgroundImage: 'linear-gradient(180deg, #17233E 0%, #0A1220 100%)', borderRadius: '10px', padding: '8px' }} />
        <span>{yacht.operator}</span>
    </div>
  </div>
  <div className="contact mt-2">
      <ul className='list-unstyled d-flex justify-content-around'>
          <li>
              <i onClick={() => window.open(`https://wa.me/${yacht.whatsapp}`)}>
                  <div className="ex-categor d-flex flex-column">
                      <span onClick={() => window.open(`https://wa.me/${yacht.whatsapp}`)}>{yacht.whatsapp}</span>
                  </div>
                  <IoLogoWhatsapp />
              </i>
              <span>{t('common.whatsapp')}</span>
          </li>
          <li>
              <i onClick={() => window.open(`mailto:${yacht.email}`)}>
                  <div className="ex-categor d-flex flex-column">
                      <span onClick={() => window.open(`mailto:${yacht.email}`)}>{yacht.email}</span>
                  </div>
                  <MdEmail/>
              </i>
              <span>{t('common.email')}</span>
          </li>
          <li>
              <i onClick={() => window.open(`tel:+${yacht.call}`)}>
                  <div className="ex-categor d-flex flex-column">
                      <span onClick={() => window.open(`tel:+${yacht.call}`)}>{yacht.call}</span>
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

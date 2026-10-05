import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LazyLoad from 'react-lazyload';
import { IoMdCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import google_play from "../images/apps images/google play.png"
import app_store from "../images/apps images/app store.png"
import "./footer.css"

// Columns are translated via footer.<id>.items in the locale files; `links` lists the
// destination of each item in the same order. Contact details are not translated.
// Brands the catalogue has no cars for (Lamborghini, Ferrari, Rolls-Royce, McLaren) open the
// full brand list instead of an empty result.
const footerColumns = [
  { id: 'brands', links: [
    '/Brands?brand=Mercedes-Benz', '/Brands', '/Brands', '/Brands', '/Brands?brand=Audi',
    '/Brands?brand=BMW', '/Brands', '/Brands?brand=Land%20Rover', '/Brands?brand=Nissan', '/Brands?brand=Toyota',
  ] },
  { id: 'explore', links: [
    '/ViewAll?q=suv', '/RentSportCar', '/RentLuxuryCar', '/MothlyCarRental', '/ViewAll',
    '/rentCarWithDriver', '/CarRentalCompany', '/CarRentalCompany', '/yachts', '/CarRentalCompany',
  ] },
  { id: 'company', links: [
    '/AboutUs', '/Brands', '/Privacy', '/ContactUs', '/FAQ', '/Blog', '/CarRentalDealsOffers',
  ] },
  { id: 'support', links: [null, '/ContactUs'], contacts: [
    { text: '+971 56 442 4448', href: 'tel:+971564424448' },
    { text: '+971 4 554 0871', href: 'tel:+97145540871' },
    { text: 'info@tajeercarrent.com', href: 'mailto:info@tajeercarrent.com' },
  ] },
];

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
     <LazyLoad>
    <footer>
    <div className="social">
      <ul className=' list-unstyled d-flex'>
        <li><a href="tel:+971 52 313 1587"><IoMdCall/><span className="hidden-text">{t('footer.social.call')}</span></a></li>
        <li className='facebook'><a href="https://www.facebook.com/Tajeercarrental" target='_blank' rel="noopener noreferrer"><FaFacebookF/><span className="hidden-text">{t('footer.social.facebook')}</span></a></li>
        <li className='twitter'><a href="https://twitter.com/tajeercarrental" target='_blank' rel="noopener noreferrer"><FaTwitter/><span className="hidden-text">{t('footer.social.twitter')}</span></a></li>
        <li><a href="https://www.instagram.com/tajeercarrental/?utm_medium=copy_link" target='_blank' rel="noopener noreferrer"><GrInstagram/><span className="hidden-text">{t('footer.social.instagram')}</span></a></li>
      </ul>
    </div>
      <div className="container-fluid">
        {footerColumns.map(col => (
          <div className='footer-col' key={col.id}>
            <h4>{t(`footer.${col.id}.title`)}</h4>
            <ul>
              {t(`footer.${col.id}.items`, { returnObjects: true }).map((item, i) => (
                <li key={item}>
                  <GoDotFill/>{' '}
                  {col.links[i] ? <Link to={col.links[i]}>{item}</Link> : item}
                </li>
              ))}
              {(col.contacts || []).map(({ text, href }) => (
                <li key={text}><GoDotFill/> <a href={href}><bdi dir="ltr">{text}</bdi></a></li>
              ))}
            </ul>
          </div>
        ))}

        <div className='footer-col app-col d-flex flex-column'>
          <h4>{t('footer.app.title')}</h4>
          <span className='Download'>{t('footer.app.text')}</span>
          <div className="app">
            <a href="https://play.google.com/store/apps/details?id=com.tajeer&hl=en&gl=US&pli=1" target='_blank' rel="noopener noreferrer"><img src={google_play} alt={t('footer.app.googlePlay')}  loading='lazy'/></a>
            <a href="https://apps.apple.com/sa/app/tajeer-rent-a-car-in-dubai/id1458290275" target='_blank' rel="noopener noreferrer"><img src={app_store} alt={t('footer.app.appStore')} loading='lazy' /></a>
          </div>
        </div>
      </div>
      <div className='copyright'>{t('footer.copyright', { year: new Date().getFullYear() })}</div>
    </footer>
    </LazyLoad>
    </>
  )
}

import React from 'react'
import { useTranslation } from 'react-i18next';
import { GoDotFill } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import logo from "../images/brand/zenith-icon.png"
export default function SecondCards({Productindex, productImage, ProductDoors, ProductEngine, ProductPriceOfDay, ProductPriceOfMonth,  ProductPriceOfWeek, ProductDeposit,  ProductMinimumOfDays, ProductColor, ProductBrand, ProductModel, ProductYear, ProductType,  productTitle, ownerWhatsapp, ownerEmail, ownerCall}) {
  const { t } = useTranslation();
  return (
    <div className="card">
    <div className="row">
      <div className="col-lg-5 position-relative">
        <Link to={`/CarList/` + Productindex}>
        <img src={productImage} className="h-100 w-100" alt={productTitle}/>
        </Link>
        
        <div className="options d-flex  justify-content-around flex-wrap links position-absolute top-0 start-0 w-100 mt-3">
            <ul className=' list-unstyled d-flex justify-content-between'>
              <li className='badge  Featured'>{t('common.featured')}</li>
              <li className='badge  Premium'>{t('common.premium')}</li>
              <li className='badge  Verified'>{t('common.verified')}</li>
            </ul>
            <p className='badge Save_to_wishlist text-dark'>{t('common.saveToWishlist')}</p>
            </div>
     
      </div>
      <div className="col-lg-7">
        <div className="card-body">
         
        <h2>{productTitle}</h2>
        <div className="feature_details d-flex justify-content-start align-items-center">
             <ul>
              <li><GoDotFill/> {t('card.color')}: {ProductColor}</li>
              <li><GoDotFill/> {t('card.brand')}: {ProductBrand}</li>
              <li><GoDotFill/> {t('card.model')}: {ProductModel}</li>
              <li><GoDotFill/> {t('card.year')}: {ProductYear}</li>
              <li><GoDotFill/> {t('card.type')}: {ProductType}</li>
             </ul>
             <ul>
              <li><GoDotFill/> {t('card.doors')}: {ProductDoors}</li>
              <li><GoDotFill/> {t('card.engine')}: {ProductEngine}</li>
              <li><GoDotFill/> {t('card.minDays')}: {ProductMinimumOfDays}</li>
              <li><GoDotFill/> {t('card.deposit')}: {ProductDeposit}</li>
             </ul>
             <ul className='pricing'>
              <li>
                  <span>{t('card.day')}</span>
                  <span>{ProductPriceOfDay}</span>
              </li>
              <li>
                  <span>{t('card.week')}</span>
                  <span>{ProductPriceOfWeek}</span>
              </li>
              <li>
                <span>{t('card.month')}</span>
                  <span>{ProductPriceOfMonth}</span>
              </li>
             </ul>
             </div>
             <div className="contact">
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
                    <li className='imgLogo'>
                    <img src={logo} alt={logo}/>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  
  </div>
  )
}

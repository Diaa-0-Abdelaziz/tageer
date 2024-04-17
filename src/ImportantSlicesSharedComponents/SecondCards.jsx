import React from 'react'
import { GoDotFill } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import logo from "../images/img_artboard_2_169x246.png"
export default function SecondCards({Productindex, productImage, ProductDoors, ProductEngine, ProductPriceOfDay, ProductPriceOfMonth,  ProductPriceOfWeek, ProductDeposit,  ProductMinimumOfDays, ProductColor, ProductBrand, ProductModel, ProductYear, ProductType,  productTitle, ownerWhatsapp, ownerEmail, ownerCall}) {
  return (
    <div className="card">
    <div className="row">
      <div className="col-lg-5 position-relative">
        <Link to={`/CarList/` + Productindex}>
        <img src={productImage} className="h-100 w-100" alt={productImage}/>
        </Link>
        
        <div className="options d-flex  justify-content-around flex-wrap links position-absolute top-0 start-0 w-100 mt-3">
            <ul className=' list-unstyled d-flex justify-content-between'>
              <li className='badge  Featured'>Featured</li>
              <li className='badge  Premium'>Premium</li>
              <li className='badge  Verified'>Verified</li>
            </ul>
            <p className='badge Save_to_wishlist text-dark'>Save to wishlist</p>
            </div>
     
      </div>
      <div className="col-lg-7">
        <div className="card-body">
         
        <h2>{productTitle}</h2>
        <div className="feature_details d-flex justify-content-start align-items-center">
             <ul>
              <li><GoDotFill/> Car color: {ProductColor}</li>
              <li><GoDotFill/> Car brand: {ProductBrand}</li>
              <li><GoDotFill/> Car model: {ProductModel}</li>
              <li><GoDotFill/> Car year: {ProductYear}</li>
              <li><GoDotFill/> Car Type: {ProductType}</li>
             </ul>
             <ul>
              <li><GoDotFill/> No. Of Doors: {ProductDoors}</li>
              <li><GoDotFill/> Engine:  {ProductEngine}</li>
              <li><GoDotFill/> Minimum of Days: {ProductMinimumOfDays}</li>
              <li><GoDotFill/> Deposit:  {ProductDeposit}</li>
             </ul>
             <ul className='pricing'>
              <li>
                  <span>Day</span>
                  <span>{ProductPriceOfDay}</span>
              </li>
              <li>
                  <span>Week</span>
                  <span>{ProductPriceOfWeek}</span>
              </li>
              <li>
                <span>Month</span>
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
                        <span>WHATSAPP</span>
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
                        <span>EMAIL</span>
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
                        <span>CALL</span>
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

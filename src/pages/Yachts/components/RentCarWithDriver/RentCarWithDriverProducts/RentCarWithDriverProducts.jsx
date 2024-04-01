import React from 'react'
import "../../../../Home/component/RentSUVLuxury/RentSUVLuxuryCursel/RentSUVLuxuryCursel.css"
import { GoDotFill } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import "../../../../Home/component/carType/carTypeCursel/carTypeCursel.css"

import logo from "../../../../../images/img_artboard_2_169x246.png"

import img1 from "../../../../../images/d61540b0-3b21-11ed-9155-3d23b669ca31-marguerite-profile.png"
export default function RentCarWithDriverProducts() {
  
    
    
    
    
      let products = [
        {
          id:1,
          title:"BMW X5 Convertible slider ",
          img:img1
        },
        {
          id:2,
          title:"BMW X5 Convertible slider ",
          img:img1
        },
        {
          id:3,
          title:"BMW X5 Convertible slider ",
          img:img1
        },
        {
          id:4,
          title:"BMW X5 Convertible slider ",
          img:img1
        },
        {
          id:5,
          title:"BMW X5 Convertible slider ",
          img:img1
        },
        {
          id:6,
          title:"BMW X5 Convertible slider ",
          img:img1
        },
      ]
    
    
    
      return (
        <section className='overflow-hidden RentSUVLuxuryCursel'>
       <div className="container main-slider mb-5">
        <div className="row">
          {products.map((pro)=> <div className='p-2 content col-lg-4 col-md-6' key={pro.id}>
            <div className='slider-pro overflow-hidden position-relative'>
          <img src={pro.img} alt="" className='w-100' />
          <div className="body px-2">
          <div className="options d-flex px-4 justify-content-between links position-absolute top-0 mt-3  w-100 ">
          <ul className=' list-unstyled d-flex'>
            <li className='badge me-1 Featured'>Featured</li>
            <li className='badge me-1 Premium'>Premium</li>
            <li className='badge me-1 Verified'>Verified</li>
          </ul>
          <p className='badge Save_to_wishlist text-dark'>Save to wishlist</p>
          </div>
          <div className='title border-bottom p-2'>
          <span className='text-capitalize'>{pro.title}</span>
          </div>
          <div className="salary border-bottom mt-3 px-2 d-flex justify-content-between align-items-center">
            <div>
                <ul className=' list-unstyled'>
                    <li><GoDotFill/> Per day 500 AED</li>
                    <li><GoDotFill/> Per week 3500 AED</li>
                    <li><GoDotFill/> Per month 10000 AED</li>
                    <li><GoDotFill/> Deposit 2000</li>
                    <li><GoDotFill/> Minimum Days 2</li>
                </ul>
            </div>
            <div className=' d-flex flex-column'>
                <img src={logo} alt={logo} />
                <span>Top Auto car rental</span>
            </div>
          </div>
          <div className="contact mt-2">
            <ul className=' list-unstyled d-flex justify-content-around'>
                <li><i><IoLogoWhatsapp/></i><span>WHATSAPP</span></li>
                <li><i><MdEmail/></i><span>EMAIL</span></li>
                <li><i><IoCallSharp/></i><span>CALL</span></li>
            </ul>
          </div>
          </div>
        </div>
          </div>)}
        </div>
       </div>
        </section>
      )
    }
    
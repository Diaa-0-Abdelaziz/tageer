import React from 'react'
import { GoDotFill } from "react-icons/go";
import img1 from "../../../../../images/Your image mask@2x.png"
import logo from "../../../../../images/tajeer app icon@2x.png"
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
export default function RentSuvDubaiCursel() {
      return (
       <section className='RentSuvDubaiCursel'>
       <div className="container">
       <div className="row">
        <div className="col-lg-6 position-relative">
            <div className=' mb-5'>
                <div className="main_img position-relative">
                <span className='position-absolute top-0 end-0 m-3 p-1 fs-6'>Save to whishlist</span>
                    <img src={img1} alt={img1} className=' w-100' />
                </div>
                <div className='small_images d-flex justify-content-between mt-2'>
                <img src={img1} alt={img1} className=' w-25' />
                <img src={img1} alt={img1} className=' w-25' />
                <img src={img1} alt={img1} className=' w-25' />
                </div>
            </div>        
        
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className=" active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Description</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Features & Options</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Reviews</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <h3 className=' mt-5'>Highlights of the new BMW i8</h3>
    <p className=' mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequuntur nulla natus accusamus error id reiciendis voluptas alias minus repellat.</p>
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <h3 className=' mt-5'>Highlights of the new BMW i8</h3>
    <p className=' mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequuntur nulla natus accusamus error id reiciendis voluptas alias minus repellat.</p>
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <h3 className=' mt-5'>Highlights of the new BMW i8</h3>
    <p className=' mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequuntur nulla natus accusamus error id reiciendis voluptas alias minus repellat.</p>
  </div>
</div>
        
<div className="new_feature">
<h3 className=' mt-5'>Highlights of the new BMW i8</h3>
    <p className=' mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequuntur nulla natus accusamus error id reiciendis voluptas alias minus repellat.</p>
    </div>     
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
        <div className="col-lg-6 details">
            <h3>BMW I8</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime ullam nostrum ipsa aliquam eligendi mollitia explicabo consectetur quis eius, molestiae magni repellendus reiciendis velit delectus voluptate harum voluptates ex.</p>
            <h4>Feature</h4>
           <div className="feature_details d-flex justify-content-between align-items-center">
           <ul>
            <li><GoDotFill/> Car color: white</li>
            <li><GoDotFill/> Car brand: Mercedes</li>
            <li><GoDotFill/> Car model: C300</li>
            <li><GoDotFill/> Car year: 2021</li>
            <li><GoDotFill/> Car Type: luxury ,Sport</li>
           </ul>
           <ul>
            <li><GoDotFill/> No. Of Doors: 4 doors</li>
            <li><GoDotFill/> Engine:  5.0 V8</li>
            <li><GoDotFill/> Minimum of Days: 2 days</li>
            <li><GoDotFill/> Deposit:  2000 AED</li>
            <li><GoDotFill/> Car Type</li>
           </ul>
           <ul className='pricing'>
            <li>
                <div>2 hrs/ 350 AED</div>
            </li>
            <li>
                <div>5 hrs/ 350 AED</div>
            </li>
            <li>
                <div>8 hrs/ 350 AED</div>
            </li>
           </ul>
           </div>
           <div className="contact mt-2">
            <ul className=' list-unstyled d-flex justify-content-around'>
                <li><i><div className="ex-categor d-flex flex-column">
                     <a href={`https://wa.me/25255566`}>2532555</a>
                  </div><IoLogoWhatsapp/></i><span>WHATSAPP</span></li>
                <li><i><div className="ex-categor d-flex flex-column">
                     <a href={`mailto:info@gmail.com`}>info@gmail.com</a>
                  </div><MdEmail/></i><span>EMAIL</span></li>
                <li><i><div className="ex-categor d-flex flex-column">
                     <a href={`tel:+25255566`}>25255566</a>
                  </div><IoCallSharp/></i><span>CALL</span></li>
            </ul>
          </div>
          <div className='logo d-flex justify-content-center'>
          <img src={logo} alt={logo} />
          </div>
        </div>
       </div>
       </div>
       </section>
      );
}

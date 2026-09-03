import React from 'react'
import ImageGallery from "react-image-gallery";
import { GoDotFill } from "react-icons/go";
import 'react-image-gallery/styles/css/image-gallery.css';
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

export default function RentSuvDubaiCursel({car}) {
    if (!car) return null;

    const images = car.images.map((src) => ({
      original: src,
      thumbnail: src,
      originalAlt: `${car.year} ${car.title} for rent in Dubai`,
      thumbnailAlt: `${car.title} photo`,
    }));

    const highlightsTitle = `Highlights of the ${car.year} ${car.title}`;

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
         />
        <span className='position-absolute top-0 end-0 m-3 p-1 fs-6'>Save to whishlist</span>
        
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className=" active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Description</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Features &amp; Options</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Reviews</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <h3 className=' mt-5'>{car.year} {car.brand} {car.model}</h3>
    <p className=' mt-5'>{car.description}</p>
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
    <h3 className=' mt-5'>Features &amp; options</h3>
    <ul className=' mt-5'>
      {car.features.map((feature) => <li key={feature}><GoDotFill/> {feature}</li>)}
    </ul>
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
    <h3 className=' mt-5'>Reviews</h3>
    <p className=' mt-5'>This {car.title} has no reviews yet. Reviews are published here once a customer has completed a booking.</p>
  </div>
</div>
        
<div className="new_feature">
<h3 className=' mt-5'>{highlightsTitle}</h3>
    <p className=' mt-5'>{car.highlights}</p>
    </div>     
        </div>
        <div className="col-lg-6 details">
            <h3>{car.title}</h3>
            <p>{car.description}</p>
            <h4>Feature</h4>
           <div className="feature_details d-flex justify-content-between align-items-center">
           <ul>
            <li><GoDotFill/> Car color: {car.color}</li>
            <li><GoDotFill/> Car brand: {car.brand}</li>
            <li><GoDotFill/> Car model: {car.model}</li>
            <li><GoDotFill/> Car year: {car.year}</li>
            <li><GoDotFill/> Car type: {car.bodyType}</li>
           </ul>
           <ul>
            <li><GoDotFill/> No. of doors: {car.doors} doors</li>
            <li><GoDotFill/> Engine: {car.engine}, {car.power}</li>
            <li><GoDotFill/> Transmission: {car.transmission}</li>
            <li><GoDotFill/> Minimum of days: {car.minDays} {car.minDays === 1 ? 'day' : 'days'}</li>
            <li><GoDotFill/> Deposit: {car.deposit} AED</li>
           </ul>
           <ul className='pricing'>
            {car.hourly.map((rate) => (
              <li key={rate.hours}>
                <div>{rate.hours} hrs/ {rate.price} AED</div>
              </li>
            ))}
           </ul>
           </div>
           <ul className=' list-unstyled mt-3'>
            <li><GoDotFill/> Per day {car.pricePerDay} AED</li>
            <li><GoDotFill/> Per week {car.pricePerWeek} AED</li>
            <li><GoDotFill/> Per month {car.pricePerMonth} AED</li>
            <li><GoDotFill/> Mileage {car.mileagePerDay} km per day</li>
            <li><GoDotFill/> Seats: {car.seats}</li>
           </ul>
           <div className="contact mt-2">
              <ul className='list-unstyled d-flex justify-content-around'>
                  <li>
                      <i onClick={() => window.open(`https://wa.me/${car.whatsapp}`)}>
                          <div className="ex-categor d-flex flex-column">
                              <span onClick={() => window.open(`https://wa.me/${car.whatsapp}`)}>
                              {car.whatsapp}
                              </span>
                          </div>
                          <IoLogoWhatsapp />
                      </i>
                      <span>WHATSAPP</span>
                  </li>
                  <li>
                      <i onClick={() => window.open(`mailto:${car.email}`)}>
                          <div className="ex-categor d-flex flex-column">
                              <span onClick={() => window.open(`mailto:${car.email}`)}>
                              {car.email}
                              </span>
                          </div>
                          <MdEmail/>
                      </i>
                      <span>EMAIL</span>
                  </li>
                  <li>
                      <i onClick={() => window.open(`tel:+${car.call}`)}>
                          <div className="ex-categor d-flex flex-column">
                              <span onClick={() => window.open(`tel:+${car.call}`)}>
                              {car.call}
                              </span>
                          </div>
                          <IoCallSharp/>
                      </i>
                      <span>CALL</span>
                  </li>
              </ul>
          </div>
          <div className='logo d-flex flex-column align-items-center'>
          <img src={car.supplierLogo} alt={`${car.supplier} logo`} />
          <span>{car.supplier}</span>
          </div>
        </div>
       </div>
       </div>
       </section>
      );
}

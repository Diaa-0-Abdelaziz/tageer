import React, { useState } from 'react'
// import Slider from '@mui/material/Slider';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import img1 from "../../../images/WhatsAppImage.png"
import logo from "../../../images/tajeer app icon@2x.png"
import { IoCheckmarkCircle } from "react-icons/io5";

import { GoDotFill } from 'react-icons/go';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
export default function Filter() {
  const [brand, setBrand] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const carsDetails=[
    {
            car_Image: img1,
            Car_color: "white",
            Car_brand: "Mercedes",
            Car_model: "C300",
            Car_year: "2021",
            Car_Type: "luxury ,Sport",
            No_Of_Doors: "4 doors",
            Engine: "5.0 V8",
            Minimum_of_Days: "2 days",
            Deposit: "2000 AED",
            price_of_Day:"350 AED",
            price_of_Week:"350 AED",
            price_of_Month:"350 AED",
            whatsapp:12553355,
            email:"info@mail.com",
            call:1235566,
    },
    {
            car_Image: img1,
            Car_color: "white",
            Car_brand: "Mercedes",
            Car_model: "C300",
            Car_year: "2021",
            Car_Type: "luxury ,Sport",
            No_Of_Doors: "4 doors",
            Engine: "5.0 V8",
            Minimum_of_Days: "2 days",
            Deposit: "2000 AED",
            price_of_Day:"350 AED",
            price_of_Week:"350 AED",
            price_of_Month:"350 AED",
            whatsapp:12553355,
            email:"info@mail.com",
            call:1235566,

    },
    {
        car_Image: img1,
        Car_color: "white",
        Car_brand: "Mercedes",
        Car_model: "C300",
        Car_year: "2021",
        Car_Type: "luxury ,Sport",
        No_Of_Doors: "4 doors",
        Engine: "5.0 V8",
        Minimum_of_Days: "2 days",
        Deposit: "2000 AED",
        price_of_Day:"350 AED",
        price_of_Week:"350 AED",
        price_of_Month:"350 AED",
        whatsapp:12553355,
        email:"info@mail.com",
        call:1235566,
},
{
    car_Image: img1,
    Car_color: "white",
    Car_brand: "Mercedes",
    Car_model: "C300",
    Car_year: "2021",
    Car_Type: "luxury ,Sport",
    No_Of_Doors: "4 doors",
    Engine: "5.0 V8",
    Minimum_of_Days: "2 days",
    Deposit: "2000 AED",
    price_of_Day:"350 AED",
    price_of_Week:"350 AED",
    whatsapp:12553355,
    email:"info@mail.com",
    call:1235566,
},
{
    car_Image: img1,
    Car_color: "white",
    Car_brand: "Mercedes",
    Car_model: "C300",
    Car_year: "2021",
    Car_Type: "luxury ,Sport",
    No_Of_Doors: "4 doors",
    Engine: "5.0 V8",
    Minimum_of_Days: "2 days",
    Deposit: "2000 AED",
    price_of_Day:"350 AED",
    price_of_Week:"350 AED",
    price_of_Month:"350 AED",
    whatsapp:12553355,
    email:"info@mail.com",
    call:1235566,
},
{
    car_Image: img1,
    Car_color: "white",
    Car_brand: "Mercedes",
    Car_model: "C300",
    Car_year: "2021",
    Car_Type: "luxury ,Sport",
    No_Of_Doors: "4 doors",
    Engine: "5.0 V8",
    Minimum_of_Days: "2 days",
    Deposit: "2000 AED",
    price_of_Day:"350 AED",
    price_of_Week:"350 AED",
    price_of_Month:"350 AED",
    whatsapp:12553355,
    email:"info@mail.com",
    call:1235566,
},
{
    car_Image: img1,
    Car_color: "white",
    Car_brand: "Mercedes",
    Car_model: "C300",
    Car_year: "2021",
    Car_Type: "luxury ,Sport",
    No_Of_Doors: "4 doors",
    Engine: "5.0 V8",
    Minimum_of_Days: "2 days",
    Deposit: "2000 AED",
    price_of_Day:"350 AED",
    price_of_Week:"350 AED",
    price_of_Month:"350 AED",
    whatsapp:12553355,
    email:"info@mail.com",
    call:1235566,
},
{
    car_Image: img1,
    Car_color: "white",
    Car_brand: "Mercedes",
    Car_model: "C300",
    Car_year: "2021",
    Car_Type: "luxury ,Sport",
    No_Of_Doors: "4 doors",
    Engine: "5.0 V8",
    Minimum_of_Days: "2 days",
    Deposit: "2000 AED",
    price_of_Day:"350 AED",
    price_of_Week:"350 AED",
    price_of_Month:"350 AED",
    whatsapp:12553355,
    email:"info@mail.com",
    call:1235566,
},
{
    car_Image: img1,
    Car_color: "white",
    Car_brand: "Mercedes",
    Car_model: "C300",
    Car_year: "2021",
    Car_Type: "luxury ,Sport",
    No_Of_Doors: "4 doors",
    Engine: "5.0 V8",
    Minimum_of_Days: "2 days",
    Deposit: "2000 AED",
    price_of_Day:"350 AED",
    price_of_Week:"350 AED",
    price_of_Month:"350 AED",
    whatsapp:12553355,
    email:"info@mail.com",
    call:1235566,
},
{
    car_Image: img1,
    Car_color: "white",
    Car_brand: "Mercedes",
    Car_model: "C300",
    Car_year: "2021",
    Car_Type: "luxury ,Sport",
    No_Of_Doors: "4 doors",
    Engine: "5.0 V8",
    Minimum_of_Days: "2 days",
    Deposit: "2000 AED",
    price_of_Day:"350 AED",
    price_of_Week:"350 AED",
    price_of_Month:"350 AED",
    whatsapp:12553355,
    email:"info@mail.com",
    call:1235566,
},
{
    car_Image: img1,
    Car_color: "white",
    Car_brand: "Mercedes",
    Car_model: "C300",
    Car_year: "2021",
    Car_Type: "luxury ,Sport",
    No_Of_Doors: "4 doors",
    Engine: "5.0 V8",
    Minimum_of_Days: "2 days",
    Deposit: "2000 AED",
    price_of_Day:"350 AED",
    price_of_Week:"350 AED",
    price_of_Month:"350 AED",
    whatsapp:12553355,
    email:"info@mail.com",
    call:1235566,
},
{
    car_Image: img1,
    Car_color: "white",
    Car_brand: "Mercedes",
    Car_model: "C300",
    Car_year: "2021",
    Car_Type: "luxury ,Sport",
    No_Of_Doors: "4 doors",
    Engine: "5.0 V8",
    Minimum_of_Days: "2 days",
    Deposit: "2000 AED",
    price_of_Day:"350 AED",
    price_of_Week:"350 AED",
    price_of_Month:"350 AED",
    whatsapp:12553355,
    email:"info@mail.com",
    call:1235566,
},
{
    car_Image: img1,
    Car_color: "white",
    Car_brand: "Mercedes",
    Car_model: "C300",
    Car_year: "2021",
    Car_Type: "luxury ,Sport",
    No_Of_Doors: "4 doors",
    Engine: "5.0 V8",
    Minimum_of_Days: "2 days",
    Deposit: "2000 AED",
    price_of_Day:"350 AED",
    price_of_Week:"350 AED",
    price_of_Month:"350 AED",
    whatsapp:12553355,
    email:"info@mail.com",
    call:1235566,
},

   ]
  const [visibleProducts, setVisibleProducts] = useState(carsDetails.slice(0, 5));


   const handlePageChangeBtn = (direction) => {
    if (direction === 'next' && currentPage < Math.ceil(carsDetails.length / 5)) {
        handlePageChange(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
        handlePageChange(currentPage - 1);
    }
  };

   const handlePageChange = (pageNumber) => {
    const startIndex = (pageNumber - 1) * 5;
    const endIndex = startIndex + 5;
    setVisibleProducts(carsDetails.slice(startIndex, endIndex));
    setCurrentPage(pageNumber);
  };


  const handleBrandChange = (event) => setBrand(event.target.value);

    const AboutUs=["Taking public transportation is inconvenient, exhausting, and unpredictable. The distances can be considered when trying to get to different places and sights in Dubai. Furthermore, public transportation does not always provide end-to-end service, so you may have to walk to your destination."]
    const AboutUs_Content = AboutUs[0].slice(0,61)
  return (
    <section className='FILTER overflow-hidden'>
        <div className="container">       
        <div className=' sort'>
        <span className='clearBTN' >Sort by </span>
        <select className="select" value={brand} onChange={handleBrandChange}>
          <option value="">Price</option>
        </select>
        </div>


<div className="row">
<div className="col-md-3">
<article>
  <p>About Us</p>
 <div className="content adout_content">
  {AboutUs_Content}
 </div>
</article>

<article>
  <p>Delivery locations</p>
  <div className="content locations_content">
    <ul className=' list-unstyled'>
      <li><IoCheckmarkCircle className='IoCheckmarkCircle'/>Dubai AirPort</li>
      <li><IoCheckmarkCircle className='IoCheckmarkCircle'/>Dubai Marina</li>
      <li><IoCheckmarkCircle className='IoCheckmarkCircle'/>Dubai Marina</li>
      <li><IoCheckmarkCircle className='IoCheckmarkCircle'/>Dubai Marina</li>
    </ul>
  </div>
</article>

<article>
  <p>Our requirements</p>
 <div className="content">
  {AboutUs_Content}
 </div>
</article>

<article>
  <p>Our Our offers</p>
 <div className="content">
  {AboutUs_Content}
 </div>
</article>

</div>
<div className="col-md-9 carts">
{visibleProducts.map((carDetail, index)=>
  
  <div key={index} className="card">
  <div className="row">
    <div className="col-lg-5 position-relative">
      <img src={carDetail.car_Image} className="h-100 w-100" alt={carDetail.car_Image}/>
      
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
       
      <h2>BMW X5 Convertible slider </h2>
      <div className="feature_details d-flex justify-content-start align-items-center">
           <ul>
            <li><GoDotFill/> Car color: {carDetail.Car_color}</li>
            <li><GoDotFill/> Car brand: {carDetail.Car_brand}</li>
            <li><GoDotFill/> Car model: {carDetail.Car_model}</li>
            <li><GoDotFill/> Car year: {carDetail.Car_year}</li>
            <li><GoDotFill/> Car Type: {carDetail.Car_Type}</li>
           </ul>
           <ul>
            <li><GoDotFill/> No. Of Doors: {carDetail.No_Of_Doors}</li>
            <li><GoDotFill/> Engine:  {carDetail.Engine}</li>
            <li><GoDotFill/> Minimum of Days: {carDetail.Minimum_of_Days}</li>
            <li><GoDotFill/> Deposit:  {carDetail.Deposit}</li>
           </ul>
           <ul className='pricing'>
            <li>
                <span>Day</span>
                <span>{carDetail.price_of_Day}</span>
            </li>
            <li>
                <span>Week</span>
                <span>{carDetail.price_of_Week}</span>
            </li>
            <li>
              <span>Month</span>
                <span>{carDetail.price_of_Month}</span>
            </li>
           </ul>
           </div>
           <div className="contact">
              <ul className='list-unstyled d-flex justify-content-around'>
                  <li>
                      <i onClick={() => window.open(`https://wa.me/${carDetail.whatsapp}`)}>
                          <div className="ex-categor d-flex flex-column">
                              <span onClick={() => window.open(`https://wa.me/${carDetail.whatsapp}`)}>
                                  {carDetail.whatsapp}
                              </span>
                          </div>
                          <IoLogoWhatsapp />
                      </i>
                      <span>WHATSAPP</span>
                  </li>
                  <li>
                      <i onClick={() => window.open(`mailto:${carDetail.email}`)}>
                          <div className="ex-categor d-flex flex-column">
                              <span onClick={() => window.open(`mailto:${carDetail.email}`)}>
                                  {carDetail.email}
                              </span>
                          </div>
                          <MdEmail/>
                      </i>
                      <span>EMAIL</span>
                  </li>
                  <li>
                      <i onClick={() => window.open(`tel:+${carDetail.call}`)}>
                          <div className="ex-categor d-flex flex-column">
                              <span onClick={() => window.open(`tel:+${carDetail.call}`)}>
                                  {carDetail.call}
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
  )}
  <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <p className="page-link" aria-label="Previous" onClick={() => handlePageChangeBtn('prev')}>
        <span>&laquo;</span>
      </p>
    </li>
    {Array.from({ length: Math.ceil(carsDetails.length / 5) }, (_, index) => (
    <li className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}  key={index} onClick={() => handlePageChange(index + 1)}>{index + 1}</li>
    ))}
    {/* <li className="page-item">3</li> */}
    <li className="page-item">
      <p className="page-link" aria-label="Next" onClick={() => handlePageChangeBtn('next')} >
        <span>&raquo;</span>
      </p>
    </li>
  </ul>
</nav>
</div>
</div>




    </div>
    </section>
  )
}

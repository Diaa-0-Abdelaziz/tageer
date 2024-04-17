import React, { useState } from 'react'
import img1 from "../../../images/WhatsAppImage.png"
import { IoCheckmarkCircle } from "react-icons/io5";
import SecondCards from '../../../ImportantSlicesSharedComponents/SecondCards';
export default function Filter() {
  const [brand, setBrand] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const carsDetails=[
    {
            car_title:"BMW X5 Convertible slider",
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
      car_title:"BMW X5 Convertible slider",
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
      car_title:"BMW X5 Convertible slider",
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
  car_title:"BMW X5 Convertible slider",
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
  car_title:"BMW X5 Convertible slider",
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
  car_title:"BMW X5 Convertible slider",
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
  car_title:"BMW X5 Convertible slider",
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
  car_title:"BMW X5 Convertible slider",
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
  car_title:"BMW X5 Convertible slider",
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
  car_title:"BMW X5 Convertible slider",
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
  car_title:"BMW X5 Convertible slider",
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
  car_title:"BMW X5 Convertible slider",
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
  car_title:"BMW X5 Convertible slider",
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
  
  <SecondCards
  key={index}
  Productindex={carDetail.index}
  productImage={carDetail.car_Image}
  ProductDoors={carDetail.No_Of_Doors}
  ProductEngine={carDetail.Engine}
  ProductPriceOfDay={carDetail.price_of_Day}
  ProductPriceOfMonth={carDetail.price_of_Month}
  ProductPriceOfWeek={carDetail.price_of_Week}
  ProductDeposit={carDetail.Deposit}
  ProductMinimumOfDays={carDetail.Minimum_of_Days}
  ProductColor={carDetail.Car_color}
  ProductBrand={carDetail.Car_brand}
  ProductModel={carDetail.Car_model}
  ProductYear={carDetail.Car_year}
  ProductType={carDetail.Car_Type}
  productTitle={carDetail.car_title}
  ownerWhatsapp={carDetail.whatsapp}
  ownerEmail={carDetail.email}
  ownerCall={carDetail.call}
  />
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

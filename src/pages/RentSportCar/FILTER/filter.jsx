import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import img1 from "../../../images/WhatsAppImage.png"
import logo from "../../../images/tajeer app icon@2x.png"
import { GoDotFill } from 'react-icons/go';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
export default function Filter() {
      // State for filter options
  const [search, setSearch] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [type, setType] = useState('');
  const [value, setValue] = React.useState([10000, 200000]);
  const [lowerValue, setLowerValue] = React.useState(10000);
  const [upperValue, setUpperValue] = React.useState(200000);
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


  // Handler functions for updating state
  const handleSearchChange = (event) => setSearch(event.target.value);
  const handleBrandChange = (event) => setBrand(event.target.value);
  const handleModelChange = (event) => setModel(event.target.value);
  const handleYearChange = (event) => setYear(event.target.value);
  const handleColorChange = (event) => setColor(event.target.value);
  const handleTypeChange = (event) => setType(event.target.value);

  // Handler function for submitting filter
  const handleSubmit = () => {
    // Logic to apply the filter
    console.log("Filter applied:", { search, brand, model, year, color, type, value });
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
    setLowerValue(newValue[0]);
    setUpperValue(newValue[1]);
  };



  return (
    <section className='FILTER overflow-hidden mt-5 pt-5'>
        <div className="container">       
        <div className=' clear'>
        <span className='clearBTN' >Clear all filters </span>
            <span className="Autos rounded-0 position-relative py-2 px-5 text-white">
            6 Autos
            <span className="Auts_close position-absolute top-0 fw-bold m-2 start-0 translate-middle text-light">
                <span className="">x</span>
            </span>
        </span>
        </div>
        <div className=' sort'>
        <span className='clearBTN' >Sort by </span>
        <select className="select" value={brand} onChange={handleBrandChange}>
          <option value="">Price</option>
          {/* Populate brand options dynamically */}
        </select>
        </div>


<div className="row">
<div className="col-md-3">
<div className="filter-container">
       
    <div className="title-container">
      <h2 className="title">FILTER</h2>
      <div className="subtitle">SEARCH YOUR CAR</div>
    </div>
      <div className="filter-item">
        <input type="text" placeholder="Search here..." value={search} onChange={handleSearchChange} />
      </div>
      <div className="filter-item">
        <select className="select" value={brand} onChange={handleBrandChange}>
          <option value="">Choose Brand</option>
          {/* Populate brand options dynamically */}
        </select>
      </div>
      <div className="filter-item">
        <select className="select" value={model} onChange={handleModelChange}>
          <option value="">Choose Model</option>
          {/* Populate model options dynamically */}
        </select>
      </div>
      <div className="filter-item">
        <select className="select" value={year} onChange={handleYearChange}>
          <option value="">Choose Year</option>
          {/* Populate year options dynamically */}
        </select>
      </div>
      <div className="filter-item">
        <select className="select" value={color} onChange={handleColorChange}>
          <option value="">Choose Color</option>
          {/* Populate color options dynamically */}
        </select>
      </div>
      
  
  <div className="form-check Type">
    <button className="type-button mt-2">Type</button>
  <div className=' d-flex flex-row mt-2'>
  <input className="form-check-input me-2" type="radio" name="exampleRadios" id="exampleRadios1" value="Select All" onChange={handleTypeChange}/>
  <label className="form-check-label text-black" htmlFor="exampleRadios1">
  Select All
  </label>
  </div>
</div>




<div className="button-group">
  <button className="pill-button fw-bold">CITY CAR</button>
  <button className="pill-button fw-bold">SPORT CAR</button>
</div>
<div className="button-group">
  <button className="pill-button fw-bold">OFFROAD</button>
  <button className="pill-button fw-bold">SUV</button>
</div>

<div className="filter-container">
  
      <div className="subtitle">SEARCH YOUR CAR</div>
    </div>


      
      <div className="filter-item">
      <div>
      <Typography id="range-slider" gutterBottom>
        Range slider
      </Typography>
      
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={10000}
        max={200000}
        step={10000}
        sx={{
            '& .MuiSlider-thumb': {
              borderRadius: 0, // إلغاء الإنحناء لجعل المقبض مربعًا
              width: 16,
              height: 16,
              marginTop: 0,
              backgroundColor: '#3A1B50',
            //   border: '2px solid #000',
              cursor: 'pointer',
            },
          }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2">${lowerValue}</Typography>
        <Typography variant="body2">${upperValue}</Typography>
      </Box>
    </div>
      </div>
      <div className="filter-item">
        <button className="find-car-button" onClick={handleSubmit}>Find Car</button>
      </div>
    
    </div>
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
    <li className={`page-link ${currentPage === index + 1 ? 'active' : ''}`} key={index} onClick={() => handlePageChange(index + 1)}>{index + 1}</li>
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

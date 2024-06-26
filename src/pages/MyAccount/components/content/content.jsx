import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import img1 from "../../../../images/WhatsAppImage.png"
import TAJEER_LOGO from "../../../../images/TAJEER LOGO.png"
import "./content.css"
import { Link } from 'react-router-dom';
import SecondCards from '../../../../ImportantSlicesSharedComponents/SecondCards';
export default function Content() {

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

    }

   ]


  return (
    <>
    <section className='content mt-5'>
       <div className="container">
        <div className="row">
            <div className="col-lg-4">
            <ul className="list-group">
                <li className="list-group-item  d-flex flex-column align-items-center">
                    <i><FaUserCircle/></i>
                    <p>Ahmed Ibarhim</p>
                </li>
                <li className="list-group-item">
                    <p>My Profile</p>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label htmlFor="flexSwitchCheckDefault">Notifications</label>
                    <div className="form-check form-switch">
                        <input className="form-check-input fs-4" type="checkbox" id="flexSwitchCheckDefault"/>
                    </div>
                </li>
                <li className="list-group-item">
                    <p>Logout</p>
                </li>
            </ul>
            </div>
            <div className="col-lg-8 tableAccount">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="border-end border-5 border-white  active " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"  role="tab" aria-controls="pills-home" aria-selected="true">
                <span className="" >My profile</span>
              </li>
              <li className="border-end border-5  border-white " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"  role="tab" aria-controls="pills-profile" aria-selected="false">
                <span className=" " >Contacted</span>
              </li>
              <li className="border-end border-5  border-white  " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"  role="tab" aria-controls="pills-contact" aria-selected="false">
                <span className=" " >Bookings</span>
              </li>
              <li className=" " id="pills-ali-tab" data-bs-toggle="pill" data-bs-target="#pills-ali"  role="tab" aria-controls="pills-ali" aria-selected="false">
                <span className=" " >Viewed Cars</span>
              </li>
          </ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    
  <ul className="list-group w-100">
                <li className="list-group-item  d-flex flex-row align-items-center">
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label fs-6">Name</label>
                    <input type="text" className="form-control bg-white border-0" value="AHMED IBRAHIM" id="exampleInputPassword1" disabled readOnly/>
                </div>
                <p className='m-0 fs-6 mt-3 ms-5'>EDIT</p>
                </li>
                <li className="list-group-item d-flex flex-row align-items-center">
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label fs-6">Email</label>
                    <input type="email" className="form-control bg-white border-0" value="AHMEDIBRAHIM @gmail.com" id="exampleInputPassword1" disabled readOnly/>
                </div>
                <p className='m-0 fs-6 mt-3 ms-5'>EDIT</p>
                </li>
                <li className="list-group-item d-flex flex-row align-items-center">
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label fs-6">Phone number</label>
                    <input type="text" className="form-control bg-white border-0" value="+971 564424448" id="exampleInputPassword1" disabled readOnly/>
                </div>
                <p className='m-0 fs-6 mt-3 ms-5'>EDIT</p>
                </li>
            </ul>

  </div>
  <div className="tab-pane fade p-1" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  
  {carsDetails.map((carDetail, index)=>
  
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
  </div>




  <div className="tab-pane fade p-1" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

  <div className="container my-5 d-flex flex-column align-items-center">
  <img src={TAJEER_LOGO} alt={TAJEER_LOGO} className=' w-75'/>
  <p>You don’t have saved bookings yet</p>
  <Link to="/" className='Back_To_Home text-decoration-none'><span className=''>Back to home</span></Link>
  </div>


  </div>








  <div className="tab-pane fade" id="pills-ali" role="tabpanel" aria-labelledby="pills-ali-tab">
  {carsDetails.map((carDetail, index)=>
  
   
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
  </div>
</div>
        </div>
        </div>
       </div>
    </section>
    </>
  )
}

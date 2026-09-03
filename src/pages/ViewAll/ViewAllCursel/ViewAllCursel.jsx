import React from 'react'
import Slider from "react-slick";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from 'react-router-dom';
import MainCardCursel from '../../../ImportantSlicesSharedComponents/mainCardCursel';
import { cars } from '../../../data/cars';
export default function ViewAllCursel({products = cars}) {
    function SampleNextArrow(props) {
        const {onClick } = props;
        return (
          <div onClick={onClick}><i className="position-absolute right top-50 fs-3"><MdOutlineNavigateNext/></i></div>
        );
      }
      
      function SamplePrevArrow(props) {
        const {onClick } = props;
        return (
          <div onClick={onClick}><i className="position-absolute left top-50 fs-3"><GrFormPrevious/></i></div>
        );
      }
      var settings = {
        infinite: products.length > 3,
        slidesToShow: Math.min(3, Math.max(products.length, 1)),
        slidesToScroll: 1,
        autoplay: products.length > 3,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
      
        ]
      };
    
    
    
    
    
    
    
    
      return (
        <section className='overflow-hidden RentSUVLuxuryCursel'>

        <div className='CarType pt-3'>
                <div className="container">
                <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
                <h3 className=''>Suggested Car Rental</h3>
                <div className='line'></div>
                <Link to="./ViewAll" className='ViewAll badge ms-2 text-decoration-none' aria-label="Go to view all page"><span className=''>View all</span></Link>
                </div>
                </div>
            </div>











       <div className="container main-slider mb-5">
         <Slider {...settings}>
          {products.map((pro)=> 
          <MainCardCursel
          key={pro.id}
          productId = {pro.id}
          productImage = {pro.img}
          productTitle = {pro.title}
          ownerWhatsapp = {pro.whatsapp}
          ownerEmail = {pro.email}
          ownerCall = {pro.call}
          pricePerDay = {pro.pricePerDay}
          pricePerWeek = {pro.pricePerWeek}
          pricePerMonth = {pro.pricePerMonth}
          deposit = {pro.deposit}
          minDays = {pro.minDays}
          supplier = {pro.supplier}
          supplierLogo = {pro.supplierLogo}
          /> 
        )}
      </Slider>
       </div>
        </section>
      )
    }
    
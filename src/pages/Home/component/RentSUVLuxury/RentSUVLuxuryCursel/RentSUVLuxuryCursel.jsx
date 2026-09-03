import React from 'react'
import Slider from "react-slick";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import MainCardCursel from '../../../../../ImportantSlicesSharedComponents/mainCardCursel';
import { luxurySuvs } from '../../../../../data/cars';
export default function RentSUVLuxuryCursel({products = luxurySuvs}) {
    function SampleNextArrow(props) {
        const {onClick } = props;
        return (
          <div onClick={onClick}><i className="position-absolute right top-50 fs-3"><MdOutlineNavigateNext/></i></div>
          
        );
      }
      
      function SamplePrevArrow(props) {
        const {onClick } = props;
        return (
          <>
          <div onClick={onClick}><i className="position-absolute left top-50 fs-3"><GrFormPrevious/></i></div>
          
          
          </>
        );
      }
      var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
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
    
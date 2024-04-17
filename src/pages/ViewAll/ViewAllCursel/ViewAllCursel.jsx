import React from 'react'
import Slider from "react-slick";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import img1 from "../../../images/img_whatsapp_image_2023_01_19.png"
import { Link } from 'react-router-dom';
import MainCardCursel from '../../../ImportantSlicesSharedComponents/mainCardCursel';
export default function ViewAllCursel() {
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
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
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
    
    
    
    
    
      let products = [
        {
          id:1,
          title:"BMW X5 Convertible slider ",
          img:img1,
          whatsapp:12553355,
          email:"info@mail.com",
          call:1235566,
        },
        {
          id:2,
          title:"BMW X5 Convertible slider ",
          img:img1,
          whatsapp:12553355,
          email:"info@mail.com",
          call:1235566,
        },
        {
          id:3,
          title:"BMW X5 Convertible slider ",
          img:img1,
          whatsapp:12553355,
          email:"info@mail.com",
          call:1235566,
        },
        {
          id:4,
          title:"BMW X5 Convertible slider ",
          img:img1,
          whatsapp:12553355,
          email:"info@mail.com",
          call:1235566,
        },
        {
          id:5,
          title:"BMW X5 Convertible slider ",
          img:img1,
          whatsapp:12553355,
          email:"info@mail.com",
          call:1235566,
        },
        {
          id:6,
          title:"BMW X5 Convertible slider ",
          img:img1,
          whatsapp:12553355,
          email:"info@mail.com",
          call:1235566,
        },
        {
          id:7,
          title:"BMW X5 Convertible slider ",
          img:img1,
          whatsapp:12553355,
          email:"info@mail.com",
          call:1235566,
        },
      ]
    
    
    
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
          /> 
        )}
      </Slider>
       </div>
        </section>
      )
    }
    
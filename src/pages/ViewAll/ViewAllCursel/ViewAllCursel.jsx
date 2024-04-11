import React from 'react'
import Slider from "react-slick";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";

import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import logo from "../../../images/img_artboard_2_169x246.png"
import img1 from "../../../images/img_whatsapp_image_2023_01_19.png"
import { Link } from 'react-router-dom';
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
          <>
          <div onClick={onClick}><i className="position-absolute left top-50 fs-3"><GrFormPrevious/></i></div>
          
          
          </>
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
          {products.map((pro)=> <div className='p-2 content' key={pro.id}>
          <Link  to={`/RentCarWithDriverDetails/` + pro.id} className=' text-decoration-none text-black'>
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
          <div className="salary border-bottom mt-3 d-flex justify-content-between align-items-center">
            <div>
                <ul className=' list-unstyled'>
                    <li><GoDotFill/> Per day 500 AED</li>
                    <li><GoDotFill/> Per week 3500 AED</li>
                    <li><GoDotFill/> Per month 10000 AED</li>
                    <li><GoDotFill/> Deposit 2000</li>
                    <li><GoDotFill/> Minimum Days 2</li>
                </ul>
            </div>
            <div>
                <img src={logo} alt={logo} />
                <span>Top Auto car rental</span>
            </div>
          </div>
          <div className="contact mt-2">
            <ul className=' list-unstyled d-flex justify-content-around'>
                <li><i><div className="ex-categor d-flex flex-column">
                     <a href={`https://wa.me/${pro.whatsapp}`}>{pro.whatsapp}</a>
                  </div><IoLogoWhatsapp/></i><span>WHATSAPP</span></li>
                <li><i><div className="ex-categor d-flex flex-column">
                     <a href={`mailto:${pro.email}`}>{pro.email}</a>
                  </div><MdEmail/></i><span>EMAIL</span></li>
                <li><i><div className="ex-categor d-flex flex-column">
                     <a href={`tel:+${pro.call}`}>{pro.call}</a>
                  </div><IoCallSharp/></i><span>CALL</span></li>
            </ul>
          </div>
          </div>
        </div>
        </Link>
          </div>)}
      </Slider>
       </div>
        </section>
      )
    }
    
import React from 'react'
import Slider from "react-slick";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { IoStarSharp } from "react-icons/io5";
import "./Testimonials.css"
import img1 from "../../../../images/img_image.png"
import google from "../../../../images/img_pngwing_com_16.png"
export default function Testimonials() {
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
          <div onClick={onClick}><i className="position-absolute left top-50  fs-3"><GrFormPrevious/></i></div>
          </>
        );
      }
      var settings = {
        infinite: true,
        slidesToShow: 4,
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
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    
    
    
    
      let products = [
        {
          id:1,
          userName:"Mike Taylor",
          userLocation:"Lahore, Pakistan",
          userPicture:img1,
          img:google,
          article:"“Booking was quick and the SUV was delivered right to my hotel in under an hour. Smooth experience from start to finish.”"
        },
        {
          id:2,
          userName:"Sara Ahmed",
          userLocation:"Dubai, UAE",
          userPicture:img1,
          img:google,
          article:"“Great selection of luxury cars and fair prices. The team was responsive whenever I had questions about my rental.”"
        },
        {
          id:3,
          userName:"James Carter",
          userLocation:"London, UK",
          userPicture:img1,
          img:google,
          article:"“Rented a Range Rover for a week — spotless car, no hidden fees, and an easy return process. Highly recommend.”"
        },
        {
          id:4,
          userName:"Fatima Al Suwaidi",
          userLocation:"Abu Dhabi, UAE",
          userPicture:img1,
          img:google,
          article:"“I've used Zenith three times now for business trips. Always reliable, always on time.”"
        },
        {
          id:5,
          userName:"Daniel Kim",
          userLocation:"Seoul, South Korea",
          userPicture:img1,
          img:google,
          article:"“Clear pricing and a huge variety of cars to choose from. Support helped me change my pickup time with no hassle.”"
        },
        {
          id:6,
          userName:"Aisha Noor",
          userLocation:"Sharjah, UAE",
          userPicture:img1,
          img:google,
          article:"“The car was exactly as pictured and the whole rental process took less than 10 minutes online.”"
        }
      ]
    
    
    
      return (
        <section className='Testimonials overflow-hidden'>
       <div className="container main-slider mb-5">
        <p>Testimonials</p>
        <h2 className=' text-capitalize'>google reviews</h2>
         <Slider {...settings}>
          {products.map((pro)=> <div className='p-2 content' key={pro.id}>
            <div className='slider_pro overflow-hidden'>
          <ul className=' p-3 list-unstyled d-flex justify-content-between'>
            <li>
          <img className='one' src={pro.userPicture} alt={pro.userPicture} loading='lazy'/>
            </li>
            <li  className='Name d-flex flex-column'>
                <span className=' fs-5'>{pro.userName}</span>
                <span className=' fs-6'>{pro.userLocation}</span>
            </li>
            <li>
          <img src={pro.img} alt={pro.img} loading='lazy'/>
            </li>
          </ul>
          <div className='info text-start px-4 pb-4'>
          <span>{pro.article}</span>
          <div className="rating">
            <ul className='fs-2 justify-content-center d-flex list-unstyled'>
                <li><IoStarSharp/></li>
                <li><IoStarSharp/></li>
                <li><IoStarSharp/></li>
                <li><IoStarSharp/></li>
                <li><IoStarSharp/></li>
            </ul>
          </div>
          </div>
        </div>
          </div>)}
      </Slider>
       </div>
        </section>
      )
    }
    
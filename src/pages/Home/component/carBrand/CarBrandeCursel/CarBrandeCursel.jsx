import React from 'react'
import Slider from "react-slick";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import "../../carType/carTypeCursel/carTypeCursel.css"
import img1 from "../../../../../images/img_dodge_logo.png"
import { Link } from 'react-router-dom';
export default function CarBrandeCursel() {
    function SampleNextArrow(props) {
        const {onClick } = props;
        return (
          <div onClick={onClick}><i className="position-absolute right top-50 end-0 fs-3"><MdOutlineNavigateNext/></i></div>
          
        );
      }
      
      function SamplePrevArrow(props) {
        const {onClick } = props;
        return (
          <>
          <div onClick={onClick}><i className="position-absolute left top-50 start-0 fs-3"><GrFormPrevious/></i></div>
          
          
          </>
        );
      }
      var settings = {
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    
    
    
    
      let products = [
        {
          id:1,
          title:"Dodge",
          img:img1
        },
        {
          id:2,
          title:"Dodge",
          img:img1
        },
        {
          id:3,
          title:"Dodge",
          img:img1
        },
        {
          id:4,
          title:"Dodge",
          img:img1
        },
        {
          id:5,
          title:"Dodge",
          img:img1
        },
        {
          id:6,
          title:"Dodge",
          img:img1
        },
        {
          id:7,
          title:"Dodge",
          img:img1
        },
      ]
    
    
    
      return (
        <section className='carTypeSlider overflow-hidden'>
       <div className="container main-slider mb-5">
         <Slider {...settings}>
          {products.map((pro)=> <div className='p-2 content' key={pro.id}>
           <Link to={`/Brands/` + pro.id} className=' text-decoration-none text-black badge' aria-label="Go to brands's page">
           <div className='slider-pro p-1 overflow-hidden'>
          <img src={pro.img} alt="" className='w-100' />
          <div className='title'>
          <span className='text-capitalize'>{pro.title}</span>
          </div>
        </div>
           </Link>
          </div>)}
      </Slider>
       </div>
        </section>
      )
    }
    
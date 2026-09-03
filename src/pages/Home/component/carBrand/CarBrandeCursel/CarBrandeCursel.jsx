import React from 'react'
import Slider from "react-slick";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import imgMercedes from "../../../../../images/carbrands/mercedes-benz.png"
import imgBmw from "../../../../../images/carbrands/bmw.png"
import imgAudi from "../../../../../images/carbrands/audi.png"
import imgRangeRover from "../../../../../images/carbrands/range-rover.png"
import imgNissan from "../../../../../images/carbrands/nissan.png"
import imgToyota from "../../../../../images/carbrands/toyota.png"
import imgDodge from "../../../../../images/carbrands/dodge.png"
import imgChrysler from "../../../../../images/carbrands/chrysler.png"
import imgInfiniti from "../../../../../images/carbrands/infiniti.png"
import imgTesla from "../../../../../images/carbrands/tesla.png"
import { Link } from 'react-router-dom';
export default function CarBrandeCursel() {
    function SampleNextArrow(props) {
        const {onClick } = props;
        return (
          <div onClick={onClick}><i className="position-absolute right top-50  fs-3"><MdOutlineNavigateNext/></i></div>

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
              slidesToShow: 3,
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
          title:"Mercedes-Benz",
          img:imgMercedes
        },
        {
          id:2,
          title:"BMW",
          img:imgBmw
        },
        {
          id:3,
          title:"Audi",
          img:imgAudi
        },
        {
          id:4,
          title:"Range Rover",
          img:imgRangeRover
        },
        {
          id:5,
          title:"Nissan",
          img:imgNissan
        },
        {
          id:6,
          title:"Toyota",
          img:imgToyota
        },
        {
          id:7,
          title:"Dodge",
          img:imgDodge
        },
        {
          id:8,
          title:"Chrysler",
          img:imgChrysler
        },
        {
          id:9,
          title:"Infiniti",
          img:imgInfiniti
        },
        {
          id:10,
          title:"Tesla",
          img:imgTesla
        },
      ]

      return (
        <section className='carTypeSlider carTypeCards overflow-hidden'>
       <div className="container main-slider mb-5">
         <Slider {...settings}>
          {products.map((pro)=> <div className='p-2 content' key={pro.id}>
           <Link to="./Brands" className=' text-decoration-none' aria-label="Go to brands's page">
           <div className='slider-pro overflow-hidden'>
          <img src={pro.img} alt={`${pro.title} cars for rent in Dubai`} width="600" height="400" className='w-100' loading='lazy' />
          <div className='title'>
          <span className='text-capitalize badge'>{pro.title}</span>
          </div>
        </div>
           </Link>
          </div>)}
      </Slider>
       </div>
        </section>
      )
    }

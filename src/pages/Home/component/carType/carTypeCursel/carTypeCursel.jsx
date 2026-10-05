import { useTranslation } from 'react-i18next';
import React from 'react'
import Slider from "react-slick";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import imgSport from "../../../../../images/cartypes/sport-cars.jpg"
import imgConvertible from "../../../../../images/cartypes/convertibles.jpg"
import imgCoupe from "../../../../../images/cartypes/coupes.jpg"
import imgElectric from "../../../../../images/cartypes/electric-cars.jpg"
import imgSedan from "../../../../../images/cartypes/luxury-sedans.jpg"
import imgSUV from "../../../../../images/cartypes/luxury-suvs.jpg"
import imgExotic from "../../../../../images/cartypes/exotic-supercars.jpg"
import { Link } from 'react-router-dom';
export default function CarTypeCursel() {
  const { t, i18n } = useTranslation();

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
        rtl: i18n.dir() === 'rtl',
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
          title:"Sport cars",
          img:imgSport,
          alt:"Porsche 911 GT3 RS sport car for rent in Dubai"
        },
        {
          id:2,
          title:"Convertibles",
          img:imgConvertible,
          alt:"Mercedes-Benz E-Class Cabriolet convertible for rent in Dubai"
        },
        {
          id:3,
          title:"Coupes",
          img:imgCoupe,
          alt:"BMW M4 coupe for rent in Dubai"
        },
        {
          id:4,
          title:"Electric cars",
          img:imgElectric,
          alt:"Tesla Model 3 electric car for rent in Dubai"
        },
        {
          id:5,
          title:"Luxury sedans",
          img:imgSedan,
          alt:"Mercedes-Benz S-Class luxury sedan for rent in Dubai"
        },
        {
          id:6,
          title:"Luxury SUVs",
          img:imgSUV,
          alt:"Range Rover Sport luxury SUV for rent in Dubai"
        },
        {
          id:7,
          title:"Exotic supercars",
          img:imgExotic,
          alt:"Lamborghini Huracan exotic supercar for rent in Dubai"
        },
      ]
      return (
        <section className='carTypeSlider carTypeCards overflow-hidden'>
       <div className="container main-slider mb-5">
         <Slider key={i18n.dir()} {...settings}>
          {products.map((pro)=> <div className='p-2 content' key={pro.id}>
           <Link to={`/Category/` + pro.id} aria-label="Go to categories's page" className=' text-decoration-none'>
           <div className='slider-pro border-0  overflow-hidden'>
          <img src={pro.img} alt={pro.alt} width="600" height="400" className='w-100' loading='lazy'/>
          <div className='title'>
          <span className='text-capitalize badge'>{t(`home.carTypes.${pro.title}`, pro.title)}</span>
          </div>
        </div>
           </Link>
          </div>)}
      </Slider>
       </div>
        </section>
      )
    }

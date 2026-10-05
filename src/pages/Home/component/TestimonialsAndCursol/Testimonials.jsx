import { useTranslation } from 'react-i18next';
import React from 'react'
import Slider from "react-slick";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { IoStarSharp } from "react-icons/io5";
import "./Testimonials.css"
import img1 from "../../../../images/img_image.png"
import google from "../../../../images/img_pngwing_com_16.png"
export default function Testimonials() {
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
          <div onClick={onClick}><i className="position-absolute left top-50  fs-3"><GrFormPrevious/></i></div>
          </>
        );
      }
      var settings = {
        rtl: i18n.dir() === 'rtl',
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
    
    
    
    
    
      const items = t('home.testimonials.items', { returnObjects: true });
      let products = items.map((item, i) => ({ id: i + 1, userName: item.name, userLocation: item.location, userPicture: img1, img: google, article: item.text }));
    
    
    
      return (
        <section className='Testimonials overflow-hidden'>
       <div className="container main-slider mb-5">
        <p>{t('home.testimonials.eyebrow')}</p>
        <h2 className=' text-capitalize'>{t('home.testimonials.title')}</h2>
         <Slider key={i18n.dir()} {...settings}>
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
    
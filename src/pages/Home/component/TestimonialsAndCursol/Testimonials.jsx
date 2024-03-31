import React from 'react'
import Slider from "react-slick";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { IoStarSharp } from "react-icons/io5";
import "../carType/carTypeCursel/carTypeCursel.css"
import "./Testimonials.css"
import img1 from "../../../../images/img_image.png"
import google from "../../../../images/img_pngwing_com_16.png"
export default function Testimonials() {
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
          userName:"Mike taylor",
          userLocation:"Lahore, Pakistan",
          userPicture:img1,
          img:google,
          article:"“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no…read more"
        },
        {
          id:2,
          userName:"Mike taylor",
          userLocation:"Lahore, Pakistan",
          userPicture:img1,
          img:google,
          article:"“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no…read more"
        },
        {
          id:3,
          userName:"Mike taylor",
          userLocation:"Lahore, Pakistan",
          userPicture:img1,
          img:google,
          article:"“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no…read more"
        },
        {
          id:4,
          userName:"Mike taylor",
          userLocation:"Lahore, Pakistan",
          userPicture:img1,
          img:google,
          article:"“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no…read more"
        },
        {
          id:5,
          userName:"Mike taylor",
          userLocation:"Lahore, Pakistan",
          userPicture:img1,
          img:google,
          article:"“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no…read more"
        },
        {
          id:6,
          userName:"Mike taylor",
          userLocation:"Lahore, Pakistan",
          userPicture:img1,
          img:google,
          article:"“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no…read more"
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
          <img className='one' src={pro.userPicture} alt={pro.userPicture}/>
            </li>
            <li  className='Name'>
                <h5>{pro.userName}</h5>
                <h6>{pro.userLocation}</h6>
            </li>
            <li>
          <img src={pro.img} alt={pro.img}/>
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
    
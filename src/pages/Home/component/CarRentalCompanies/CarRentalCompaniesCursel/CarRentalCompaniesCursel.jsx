import React from 'react'
import Slider from "react-slick";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import { companies } from '../../../../../data/companies';
export default function CarRentalCompaniesCursel({products = companies}) {
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
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
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
    
    
    
    
    
    
    
    
      return (
        <section className='carTypeSlider carTypeCards overflow-hidden'>
       <div className="container main-slider mb-5">
         <Slider {...settings}>
          {products.map((pro)=> <div className='p-2 content' key={pro.id}>
            <Link to="./CarRentalCompany" className='text-decoration-none text-black' aria-label={`See cars from ${pro.name}`}>
            <div className='slider-pro p-1 overflow-hidden slider'>
          <img src={pro.logo} alt={`${pro.name} logo`} width="600" height="400" className='w-100' loading='lazy'/>
          <h4 className=' ms-3 mt-3 mb-1 fs-6 fw-bold'>{pro.name}</h4>
          <p className=' ms-3 mb-2 small'>{pro.area}</p>
          <ul className=' ms-3 mt-2 list-unstyled'>
                    {pro.classes.map((carClass)=> <li key={carClass}><GoDotFill/> {carClass}</li>)}
                </ul>
          <p className=' ms-3 mt-2 mb-2 small'>{pro.fleetSize} cars &middot; {pro.branches} branches &middot; since {pro.since}</p>
          <p className=' ms-3 mb-2 small'>{pro.delivery} &middot; {pro.hours}</p>
        </div>
            </Link>
          </div>)}
      </Slider>
       </div>
        </section>
      )
    }
    
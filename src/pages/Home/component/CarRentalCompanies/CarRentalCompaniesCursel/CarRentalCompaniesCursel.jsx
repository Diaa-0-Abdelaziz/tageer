import React from 'react'
import Slider from "react-slick";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import img1 from "../../../../../images/img_artboard_2_169x246.png"
import img2 from "../../../../../images/img_artboard_2_169x246.png"
import img3 from "../../../../../images/img_artboard_2_169x246.png"
import img4 from "../../../../../images/img_artboard_2_169x246.png"
import img5 from "../../../../../images/img_artboard_2_169x246.png"
export default function CarRentalCompaniesCursel() {
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
    
    
    
    
    
      let products = [
        {
          id:1,
          title:"Sport cars",
          img:img1
        },
        {
          id:2,
          title:"Sport cars",
          img:img2
        },
        {
          id:3,
          title:"Sport cars",
          img:img3
        },
        {
          id:4,
          title:"Sport cars",
          img:img4
        },
        {
          id:5,
          title:"Sport cars",
          img:img5
        },
        {
          id:6,
          title:"Sport cars",
          img:img5
        },
        {
          id:7,
          title:"Sport cars",
          img:img5
        },
      ]
    
    
    
      return (
        <section className='carTypeSlider overflow-hidden'>
       <div className="container main-slider mb-5">
         <Slider {...settings}>
          {products.map((pro)=> <div className='p-2 content' key={pro.id}>
            <div className='slider-pro p-1 overflow-hidden slider'>
          <img src={pro.img} alt="" className='w-100' loading='lazy'/>
          <ul className=' ms-3 mt-3 list-unstyled'>
                    <li><GoDotFill/>Sports car</li>
                    <li><GoDotFill/> Economy car</li>
                    <li><GoDotFill/> Luxury car</li>
                </ul>
        </div>
          </div>)}
      </Slider>
       </div>
        </section>
      )
    }
    
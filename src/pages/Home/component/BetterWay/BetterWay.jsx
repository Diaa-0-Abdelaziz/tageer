import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BsListUl } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { LuCheckSquare } from "react-icons/lu";
import paner from "../../../../images/img_rum_banner.png"
import "./BetterWay.css"

const steps = [
  { icon: <BsListUl />, title: 'Choose Your Car', exp: 'Select a car using search or catalog.' },
  { icon: <CiCalendar />, title: 'Contact Your Dealer', exp: 'After you’ve selected a car a dealer will contact you.' },
  { icon: <LuCheckSquare />, title: 'Get Your Car', exp: 'Here you are! Your car is book and waiting for you.' },
];

export default function BetterWay() {
  return (
    <>
    <section className='BetterWay text-center'>
      <div className="container">
      <div className="img_cover">
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide><img src={paner} alt={paner} width={100} className=' w-100'  loading='lazy'/></SwiperSlide>
        <SwiperSlide><img src={paner} alt={paner} width={100} className=' w-100'  loading='lazy'/></SwiperSlide>
        <SwiperSlide><img src={paner} alt={paner} width={100} className=' w-100'  loading='lazy'/></SwiperSlide>
        <SwiperSlide><img src={paner} alt={paner} width={100} className=' w-100'  loading='lazy'/></SwiperSlide>
        <SwiperSlide><img src={paner} alt={paner} width={100} className=' w-100'  loading='lazy'/></SwiperSlide>
        <SwiperSlide><img src={paner} alt={paner} width={100} className=' w-100'  loading='lazy'/></SwiperSlide>
        <SwiperSlide><img src={paner} alt={paner} width={100} className=' w-100'  loading='lazy'/></SwiperSlide>
        <SwiperSlide><img src={paner} alt={paner} width={100} className=' w-100'  loading='lazy'/></SwiperSlide>
      </Swiper>

      </div>
      <div className='text'>
      <h3>Better Way to Find Your Perfect Car</h3>
      <p>In hac habitasse platea dictumst. In pharetra tellus eu justo tincidunt bibendum. Morbi rutrum elit ligula, eget fringilla sem pellentesque aliquam suspendisse.</p>
      </div>
      <ul className='steps list-unstyled d-flex flex-wrap align-items-start justify-content-center'>
        {steps.map((step, i) => (
          <li className='step' key={step.title}>
              <div className='icon-wrap'>
                  <span className='num'>{`0${i + 1}`}</span>
                  {step.icon}
              </div>
              <span className='head'>{step.title}</span>
              <span className='exp'>{step.exp}</span>
          </li>
        ))}
      </ul>
      </div>
    </section>
    </>
  )
}

import { useTranslation } from 'react-i18next';
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

const stepIcons = [<BsListUl />, <CiCalendar />, <LuCheckSquare />];

export default function BetterWay() {
  const { t, i18n } = useTranslation();
  const steps = t('home.betterWay.steps', { returnObjects: true });
  return (
    <>
    <section className='BetterWay text-center'>
      <div className="container">
      <div className="img_cover">
      <Swiper
        dir={i18n.dir()}
        key={i18n.dir()}
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
      <h3>{t('home.betterWay.title')}</h3>
      <p>{t('home.betterWay.text')}</p>
      </div>
      <ul className='steps list-unstyled d-flex flex-wrap align-items-start justify-content-center'>
        {steps.map((step, i) => (
          <li className='step' key={i}>
              <div className='icon-wrap'>
                  <span className='num'>{`0${i + 1}`}</span>
                  {stepIcons[i]}
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

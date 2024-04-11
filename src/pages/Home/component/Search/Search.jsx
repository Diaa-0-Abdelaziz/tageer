import React from 'react'
import { BsSearch } from "react-icons/bs";
import { GrFormPrevious } from "react-icons/gr";

import imgCover from "../../../../images/car-subscription-new-image@2x.png"
import"./search.css"
export default function Search() {
  return (
    <>
    <section className='main_content  position-relative'>
    <div className='search position-relative'>

        <img src={imgCover} alt={imgCover} loading='lazy'/>
  
        <div className='position-absolute top-0 bottom-0 start-0 end-0 cover_color'></div>
    </div>
       <div className='container form position-absolute top-50 start-50 translate-middle d-flex justify-content-center'>
        <span className='View_all_cars_btn'>
            <i><GrFormPrevious/></i>
            <p className=' badge'>View all cars</p>
        </span>
        <div className="input-group  w-75 search_form d-flex flex-nowrap">
  <span className="input-group-text search_btn bg-white"><BsSearch/></span>
  <input type="search" className=" w-100" placeholder='Search'/>
</div>
       </div>
    </section>
    </>
  )
}

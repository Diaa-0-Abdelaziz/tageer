import React from 'react'
import imgCover from "../../../../images/car-subscription-new-image@2x.png"
import"../../../Blog/components/BlogHeader/BlogHeader.css"
export default function MyAccountHeader() {
  return (
    <>
    <section className='search position-relative'>
        <img src={imgCover} alt={imgCover} />
        <div className='position-absolute top-0 bottom-0 start-0 end-0 cover_color'></div>
       <div className='container form position-absolute top-50 start-50 translate-middle d-flex justify-content-center'>
        <h3 className=' text-light position-absolute start-0 top-50 translate-middle-y fw-bolder'><i>My account</i></h3>
       </div>
    </section>
    </>
  )
}

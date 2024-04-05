import React from 'react'
import logo from "./images/img_artboard_2_169x246.png"
export default function Loading() {
  return (
    
    <>
    <section className=' position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center' style={{backgroundColor:"#3D1F50", zIndex:"9999999"}}>
       <img src={logo} alt={logo} style={{width:"500px"}} />
    </section>
    </>
  )
}

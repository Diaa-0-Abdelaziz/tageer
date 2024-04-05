import React from 'react'
import logo from "./images/tajeer app icon.png"
export default function Loading() {
  return (
    
    <>
    <section className=' position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center' style={{backgroundColor:"#3D1F50", zIndex:"9999999"}}>
       <img src={logo} width={200} height={200} alt={logo} />
    </section>
    </>
  )
}

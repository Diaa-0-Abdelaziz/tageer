import React from 'react'
import { BallTriangle } from 'react-loader-spinner'
export default function Loading() {
  return (
    
    <>
    <section className=' position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center' style={{backgroundColor:"#3D1F50", zIndex:"9999999"}}>
      <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="white"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </section>
    </>
  )
}

import React from 'react'
import notfound from '../images/not found error 404.png'
import { Link } from 'react-router-dom'
export default function Notfound() {
  return (
   <section className='notfound'>
    <div className="container d-flex flex-column justify-content-center align-items-center position-relative">
   <img src={notfound} alt={notfound} className='' />
   <p>This page not found</p>
   <Link to="/">Back to home</Link>
    </div>
   </section>
  )
}

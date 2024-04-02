import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import land from "../../../../images/Worldmap@2x.png"
import "./ContactInfo.css"
export default function ContactInfo() {
  return (
    <section className='ContactInfo mt-5'>
        <div className="container">
            {/* <img src={land} alt={land} className=' w-50 position-absolute start-50 top-50 translate-middle' /> */}
       <ul>
        <li>
            <div>
               <i><FaLocationDot/></i>
               <h4>Head Office</h4>
               <span><a href="#">68 Landsriver St, Welson California 22066</a></span>
            </div>
        </li>
        <li>
        <div>
               <i><IoCall/></i>
               <h4>Phone number</h4>
               <span><a href="#">+303 123 456 7890</a> <a href="#">Sales.  0800 123 4567</a></span>
            </div>
        </li>
       </ul>

       <ul className='whatsMale'>
        <li>
            <div>
               <i><IoLogoWhatsapp/></i>
               <h4>Whatsapp</h4>
               <span><a href="#">+303 123 456 7890</a> <a href="#">Sales.  0800 123 4567</a></span>
            </div>
        </li>
        <li>
        <div>
               <i><MdEmail/></i>
               <h4>Mail</h4>
               <span><a href="#">info@domain.com</a> <a href="#">support@domain.com</a></span>
            </div>
        </li>
       </ul>
        </div>
    </section>
  )
}

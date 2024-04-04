import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
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
               <span><a href="https://maps.app.goo.gl/inBUS8hTzjHZC1eF9" target='_blank' rel="noopener">68 Landsriver St, Welson California 22066</a></span>
            </div>
        </li>
        <li>
        <div>
               <i><IoCall/></i>
               <h4>Phone number</h4>
               <span><a href="#tel:+303 123 456 7890">+303 123 456 7890</a> <a href="#tel:0800 123 4567">Sales.  0800 123 4567</a></span>
            </div>
        </li>
       </ul>

       <ul className='whatsMale'>
        <li>
            <div>
               <i><IoLogoWhatsapp/></i>
               <h4>Whatsapp</h4>
               <span><a href="https://wa.me/+3031234567890">+303 123 456 7890</a> <a href="https://wa.me/08001234567">Sales.  0800 123 4567</a></span>
            </div>
        </li>
        <li>
        <div>
               <i><MdEmail/></i>
               <h4>Mail</h4>
               <span><a href="mailto:info@tajeercarrent.com">info@tajeercarrent.com</a> <a href="mailto:support@domain.com">support@domain.com</a></span>
            </div>
        </li>
       </ul>
        </div>
    </section>
  )
}

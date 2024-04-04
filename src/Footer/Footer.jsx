import React from 'react'
import { IoMdCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import google_play from "../images/google play.png"
import app_store from "../images/app store.png"
export default function Footer() {
  return (
    <>
    <footer>
    <div className="social">
      <ul className=' list-unstyled d-flex'>
        <li><a href="tel:+971 52 313 1587"><IoMdCall/></a></li>
        <li className='facebook'><a href="https://www.facebook.com/Tajeercarrental" target='_blank' rel="noopener noreferrer"><FaFacebookF/></a></li>
        <li className='twitter'><a href="https://twitter.com/tajeercarrental" target='_blank' rel="noopener noreferrer"><FaTwitter/></a></li>
        <li><a href="https://www.instagram.com/tajeercarrental/?utm_medium=copy_link" target='_blank' rel="noopener noreferrer"><GrInstagram/></a></li>
      </ul>
    </div>
      <div className="container-fluid">
        <ul>
          <li><GoDotFill/> Rent Mercedes Dubai</li>
          <li><GoDotFill/> Rent Lamborghini Dubai</li>
          <li><GoDotFill/> Rent Ferrari Dubai</li>
          <li><GoDotFill/> Rent Rolls Royece Dubai</li>
          <li><GoDotFill/> Rent Audi Dubai</li>
          <li><GoDotFill/> Rent BMW Dubai</li>
          <li><GoDotFill/> Rent Mclaren Dubai</li>
          <li><GoDotFill/> Rent Range Rover Dubai</li>
          <li><GoDotFill/> Rent Nissan Dubai</li>
          <li><GoDotFill/> Rent Toyota Dubai</li>
        </ul>
        <ul>
          <li><GoDotFill/> Rent Mercedes Dubai</li>
          <li><GoDotFill/> Rent Lamborghini Dubai</li>
          <li><GoDotFill/> Rent Ferrari Dubai</li>
          <li><GoDotFill/> Rent Rolls Royece Dubai</li>
          <li><GoDotFill/> Rent Audi Dubai</li>
          <li><GoDotFill/> Rent BMW Dubai</li>
          <li><GoDotFill/> Rent Mclaren Dubai</li>
          <li><GoDotFill/> Rent Range Rover Dubai</li>
          <li><GoDotFill/> Rent Nissan Dubai</li>
          <li><GoDotFill/> Rent Toyota Dubai</li>
        </ul>

        <ul>
          <li><GoDotFill/> About Us</li>
          <li><GoDotFill/> Rent Lamborghini Dubai</li>
          <li><GoDotFill/> Privacy Policy</li>
          <li><GoDotFill/> Contact Us</li>
          <li><GoDotFill/> TAJEER FAQs</li>
          <li><GoDotFill/> Car Rental Blog</li>
          <li><GoDotFill/> Rent by Brand</li>
          <li><GoDotFill/> Our Offers</li>
          <li><GoDotFill/> Our Blog</li>
          <li><GoDotFill/> Rent Toyota Dubai</li>
        </ul>
        
        <ul>
          <li><GoDotFill/> Sitemap XML</li>
          <li><GoDotFill/> For Inquiries & Support</li>
          <li><GoDotFill/> +971564424448</li>
          <li><GoDotFill/> +97145540871</li>
          <li><GoDotFill/> info@tajeercarrent.com</li>
        </ul>
        <ul className=''>
          <li className='Download'>Download on the App Store & Google play</li>
         <div className="app">
         <li>
            <a href="https://play.google.com/store/apps/details?id=com.tajeer&hl=en&gl=US&pli=1" target='_blank' rel="noopener noreferrer"><img src={google_play} alt={google_play} /></a>
          </li>
          <li>
          <a href="https://apps.apple.com/sa/app/tajeer-rent-a-car-in-dubai/id1458290275" target='_blank' rel="noopener noreferrer"><img src={app_store} alt={app_store} /></a>
          </li>
         </div>
        </ul>
      </div>
    </footer>
    </>
  )
}

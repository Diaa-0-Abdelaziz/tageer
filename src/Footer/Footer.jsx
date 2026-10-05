import React from 'react'
import LazyLoad from 'react-lazyload';
import { IoMdCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import google_play from "../images/apps images/google play.png"
import app_store from "../images/apps images/app store.png"
import "./footer.css"

const footerColumns = [
  {
    title: 'Popular Brands',
    items: ['Rent Mercedes Dubai', 'Rent Lamborghini Dubai', 'Rent Ferrari Dubai', 'Rent Rolls Royce Dubai', 'Rent Audi Dubai', 'Rent BMW Dubai', 'Rent Mclaren Dubai', 'Rent Range Rover Dubai', 'Rent Nissan Dubai', 'Rent Toyota Dubai'],
  },
  {
    title: 'Explore',
    items: ['Rent SUV Dubai', 'Rent Sports Car Dubai', 'Luxury Car Rental', 'Monthly Car Rental', 'Weekend Car Rental', 'Rent Car With Driver', 'Rent Car Abu Dhabi', 'Rent Car Sharjah', 'Rent Yacht Dubai', 'Rent Car Ajman'],
  },
  {
    title: 'Company',
    items: ['About Us', 'Rent by Brand', 'Privacy Policy', 'Contact Us', 'ZENITH FAQs', 'Car Rental Blog', 'Our Offers'],
  },
  {
    title: 'Support',
    items: ['Sitemap XML', 'For Inquiries & Support', '+971 56 442 4448', '+971 4 554 0871', 'info@tajeercarrent.com'],
  },
];

export default function Footer() {
  return (
    <>
     <LazyLoad>
    <footer>
    <div className="social">
      <ul className=' list-unstyled d-flex'>
        <li><a href="tel:+971 52 313 1587"><IoMdCall/><span className="hidden-text">Call Us</span></a></li>
        <li className='facebook'><a href="https://www.facebook.com/Tajeercarrental" target='_blank' rel="noopener noreferrer"><FaFacebookF/><span className="hidden-text">Facebook</span></a></li>
        <li className='twitter'><a href="https://twitter.com/tajeercarrental" target='_blank' rel="noopener noreferrer"><FaTwitter/><span className="hidden-text">Twitter</span></a></li>
        <li><a href="https://www.instagram.com/tajeercarrental/?utm_medium=copy_link" target='_blank' rel="noopener noreferrer"><GrInstagram/><span className="hidden-text">Instagram</span></a></li>
      </ul>
    </div>
      <div className="container-fluid">
        {footerColumns.map(col => (
          <div className='footer-col' key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.items.map(item => (
                <li key={item}><GoDotFill/> {item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className='footer-col app-col d-flex flex-column'>
          <h4>Get The App</h4>
          <span className='Download'>Download on the App Store & Google Play</span>
          <div className="app">
            <a href="https://play.google.com/store/apps/details?id=com.tajeer&hl=en&gl=US&pli=1" target='_blank' rel="noopener noreferrer"><img src={google_play} alt={google_play}  loading='lazy'/></a>
            <a href="https://apps.apple.com/sa/app/tajeer-rent-a-car-in-dubai/id1458290275" target='_blank' rel="noopener noreferrer"><img src={app_store} alt={app_store} loading='lazy' /></a>
          </div>
        </div>
      </div>
      <div className='copyright'>© {new Date().getFullYear()} Zenith Car Rental. All rights reserved.</div>
    </footer>
    </LazyLoad>
    </>
  )
}

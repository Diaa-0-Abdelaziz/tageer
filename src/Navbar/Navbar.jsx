import React, { useState } from 'react'
import logo from "../images/img_tajeer_logo_websit.png"
import lamborghini from "../images/img_lamborghiniurus.png"
import img_calendar from "../images/img_calendar.svg"
import Operating_System from "../images/Google-Play-App-Store-PNG-Transparent-Image@2x.png"
import img_united_arab_emirates from "../images/img_united_arab_emirates.png"
import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { SiGoogletranslate } from "react-icons/si";
import { MdOutlineAccountBox } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaWindowClose } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

import"./navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  const [open, setOpen] = useState(true)
  const [openSetting, setOpenSetting] = useState(true)
  function openNavList(){
    setOpen(!open)
  }
  function openSettingList(){
    setOpenSetting(!openSetting)
  }
  return (
    <header>
    <div className="navbar">
        <div className="content container d-flex justify-content-around flex-nowrap">
            <img src={logo} alt={logo} className='me-5 logo'/>
           <span className='fs-1 menu  d-none' onClick={openNavList}> <CgMenuGridR /></span>
           <span className='fs-3 setting_btn  d-none' onClick={openSettingList}> <IoMdSettings /></span>
            <div className='advertisement px-2 me-5 d-flex align-items-center bg-light'>
              <img src={lamborghini} alt={lamborghini} className='lamborghini' />
              <p className='badge text-dark mt-2'>List your cars in <span className='bolder'>TAJEER</span> platform</p>
              <img src={img_calendar} alt={img_calendar} className='img_calendar' />
            </div>
            <div className={`d-flex ${openSetting? 'settings':  'settings open_Setting'}`}>
            <span className='close_Setting d-none fs-5' onClick={openSettingList}><FaWindowClose/></span>
              <ul className=' border-style list-unstyled d-flex align-items-center'>
                <li className=' fs-5 me-2'><CiLocationOn/></li>
                <li className='fs-13 text-capitalize'>country</li>
                <li>
                  <select className="form-select text-capitalize w-auto text-decoration-underline" aria-label="Default select example">
                  <option value="united arab emirates">united arab emirates</option>
                  <option value="1">one</option>
                  <option value="2">two</option>
                  <option value="3">three</option>
                </select>
                </li>
              </ul>

              <ul className='list-unstyled d-flex align-items-center'>
              <li className='fs-13 text-capitalize'>city</li>
              <li>
              <select className="form-select text-capitalize w-auto text-decoration-underline" aria-label="Default select example">
                  <option value="dubai">dubai</option>
                  <option value="1">one</option>
                  <option value="2">two</option>
                  <option value="3">three</option>
                </select>
              </li>
              </ul>

              <ul className='border-style list-unstyled d-flex align-items-center'>
                <li className='fs-5 me-2'><RiMoneyDollarCircleLine/></li>
                <li className='fs-13 text-capitalize'>currency</li>
                <li>
                <select className="form-select text-capitalize w-auto text-decoration-underline" aria-label="Default select example">
                  <option value="ksh">ksh</option>
                  <option value="1">one</option>
                  <option value="2">two</option>
                  <option value="3">the</option>
                </select>
                </li>
              </ul>
              <ul className='border-style language list-unstyled d-flex align-items-center'>
                <li className='fs-5 me-2'><SiGoogletranslate/></li>
                <li className='fs-13 text-capitalize'>language</li>
                <li className=' d-flex'>
                  <img src={img_united_arab_emirates} alt={img_united_arab_emirates} className=' w-25' />
                <select className="form-select text-capitalize w-auto text-decoration-underline" aria-label="Default select example">
                  <option value="العربية">العربية</option>
                  <option value="1">English</option>
                  <option value="2">two</option>
                  <option value="3">three</option>
                </select>
                </li>
              </ul>
              <ul className='border-style list-unstyled d-flex ms-3 align-items-center'>
                <li className='fs-5'><MdOutlineAccountBox/></li>
                <li className='fs-13 badge text-decoration-underline'><Link className='text-light'>My account</Link></li>
              </ul>
            </div>
        </div>
        </div>
        <div className={open?`navlist`:`navlist open_nav_list`}>
          <div className="content px-3 m-auto justify-content-between  d-flex flex-wrap align-items-center">
           <span className='close d-none fs-5' onClick={openNavList}><FaWindowClose/></span>
            <ul className='navlinks m-auto mt-3 pe-5 justify-content-between list-unstyled d-flex align-items-center'>
              <li>
              <Link className='fs-18 text-decoration-none'>Home</Link>
              </li>
              <li>
              <select className="fs-18 form-select .fs-13 text-capitalize w-auto text-decoration-underline" aria-label="Default select example">
                  <option value="united arab emirates">Car brands</option>
                  <option value="1">one</option>
                  <option value="2">two</option>
                  <option value="3">three</option>
                </select>
              </li>
              <li>
              <select className=" fs-18 form-select text-capitalize w-auto text-decoration-underline" aria-label="Default select example">
                  <option value="united arab emirates">Rent a car</option>
                  <option value="1">one</option>
                  <option value="2">two</option>
                  <option value="3">three</option>
                </select>
              </li>
              <li>
                <Link className='fs-18 text-decoration-none'>Rent acar with driver</Link>
              </li>
              <li><Link className='fs-18 text-decoration-none'>Rent yacht</Link></li>
              <li>
              <select className="fs-18 form-select text-capitalize w-auto text-decoration-underline" aria-label="Default select example">
                  <option value="united arab emirates">Quick links</option>
                  <option value="1">one</option>
                  <option value="2">two</option>
                  <option value="3">three</option>
                </select>
              </li>
            </ul>
            <div className='appAndSocial m-auto d-flex align-items-center'>
              <img src={Operating_System} alt={Operating_System} />
              <ul className=' mt-3 social list-unstyled d-flex'>
                <li><a href=""><IoMdCall/></a></li>
                <li className='facebook'><a href=""><FaFacebookF/></a></li>
                <li className='twitter'><a href=""><FaTwitter/></a></li>
                <li><a href=""><GrInstagram/></a></li>
              </ul>
            </div>
          </div>
        </div>
    </header>
  )
}

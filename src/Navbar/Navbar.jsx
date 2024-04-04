import React, { useState } from 'react'
import logo from "../images/img_tajeer_logo_websit.png"
import lamborghini from "../images/img_lamborghiniurus.png"
import img_calendar from "../images/img_calendar.svg"
import app_Store from "../images/app store.png"
import google_Play from "../images/google play.png"
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
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import"./navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  const [open, setOpen] = useState(true)
  const [openSetting, setOpenSetting] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [Account, setAccount] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("United Arab Emirates");
  const [selectedOption2, setSelectedOption2] = useState("Abu Dhabi");
  const [selectedOption3, setSelectedOption3] = useState("AED");
  const [selectedOption4, setSelectedOption4] = useState("العربية");
  const options1 = ['United Arab Emirates', 'Saudi Arabia', 'Kuwait','Qatar'];
  const options2 = ['dubai', 'Abu Dhabi', 'Al Ain','Sharjah'];
  const options3 = ['AED', 'SAR', 'USD','EUR'];
  const options4 = ['English', 'العربية', 'русский','中国人'];
  // const accountSelect = [
  //   {
  //     btn:'Sign in',
  //   },
  //   {
  //     btn:'Create account',
  //   },
  //   {
  //     btn:'Manage your account',
  //     path:"./MyAccount"
  //   }
  //     ];
  const RentACar = [
                     {
                      linkName:"Rent a car monthly",
                      path:"./HomeMothlyCarRental"
                     },
                     {
                      linkName:"Rent luxury car",
                      path:"./CarList"
                     },
                     {
                      linkName:"Rent sport car",
                      path:"./CarList"
                     },
                     {
                      linkName:"Rent cheap car",
                      path:"./CarList"
                     },

                   ];

 const QuickLinks = [
                    {
                     linkName:"Contact us",
                     path:"./ContactUs"
                    },
                    {
                     linkName:"About us",
                     path:"./AboutUs"
                    },
                    {
                     linkName:"Blog",
                     path:"./Blog"
                    },
                    {
                     linkName:"Terms & Conditions",
                     path:"./TermsAndCondition"
                    },

                  ];
  
  const toggleOptions = () => {
      setIsOpen(!isOpen);
      setIsOpen2(false);
      setIsOpen3(false);
      setIsOpen4(false);
      setAccount(false);
      setIsOpen5(false);
      setIsOpen6(false);
  };
  const toggleOptions2 = () => {
      setIsOpen2(!isOpen2);
      setIsOpen(false);
      setIsOpen3(false);
      setIsOpen4(false);
      setAccount(false);
      setIsOpen5(false);
      setIsOpen6(false);
  };
  const toggleOptions3 = () => {
      setIsOpen3(!isOpen3);
      setIsOpen2(false);
      setIsOpen(false);
      setIsOpen4(false);
      setAccount(false);
      setIsOpen5(false);
      setIsOpen6(false);
  };
  const toggleOptions4 = () => {
      setIsOpen4(!isOpen4);
      setIsOpen2(false);
      setIsOpen3(false);
      setIsOpen(false);
      setAccount(false);
      setIsOpen5(false);
      setIsOpen6(false);
  };
  const toggleOptions5 = () => {
      setIsOpen5(!isOpen5);
      setIsOpen4(false);
      setIsOpen2(false);
      setIsOpen3(false);
      setIsOpen(false);
      setAccount(false);
      setIsOpen6(false);
  };
  const toggleOptions6 = () => {
      setIsOpen6(!isOpen6);
      setIsOpen5(false);
      setIsOpen4(false);
      setIsOpen2(false);
      setIsOpen3(false);
      setIsOpen(false);
      setAccount(false);
  };


  const toggleDropdownAccount = () => {
    setAccount(!Account);
    setIsOpen4(false);
      setIsOpen2(false);
      setIsOpen3(false);
      setIsOpen(false);
      setIsOpen5(false);
      setIsOpen6(false)
  };



  const handleDropdownAccount = () => {
    setAccount(!Account);
  };
  const handleOptionClick1 = (option) => {
    setSelectedOption1(option);
      setIsOpen(false);
  };
  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
      setIsOpen2(false);
  };
  const handleOptionClick3 = (option) => {
    setSelectedOption3(option);
      setIsOpen3(false);
  };
  const handleOptionClick4 = (option) => {
    setSelectedOption4(option);
      setIsOpen4(false);
  };
  const handleOptionClick5 = (option) => {
      setIsOpen5(false);
  };
  const handleOptionClick6 = (option) => {
      setIsOpen6(false);
  };
// const handleaccountSetting = (option) =>{

// }


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
            <Link to="/ListYourCars" className=' text-decoration-none'>
            <div className='advertisement px-2 me-4 d-flex align-items-center bg-light'>
              <img src={lamborghini} alt={lamborghini} className='lamborghini' />
              <p className='badge text-dark mt-2'>List your cars in <span className='bolder'>TAJEER</span> platform</p>
              <img src={img_calendar} alt={img_calendar} className='img_calendar' />
            </div>
            </Link>
            <div className={`d-flex ${openSetting? 'settings':  'settings open_Setting'}`}>
            <span className='close_Setting d-none fs-5' onClick={openSettingList}><FaWindowClose/></span>
              <ul className=' border-style list-unstyled d-flex align-items-center'>
                <li className=' fs-5 me-2'><CiLocationOn/></li>
                <li className='fs-13 text-capitalize'>country</li>
                <li>
                <div className="custom-select">
            <div className="selected-option" onClick={toggleOptions}>
                {selectedOption1}
                {isOpen? <IoIosArrowUp/> : <FaAngleDown/>}
            </div>
            {isOpen && (
                <ul className="options">
                    {options1.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick1(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
                </div>
                </li>
              </ul>

              <ul className='list-unstyled d-flex align-items-center'>
              <li className='fs-13 text-capitalize'>city</li>
              <li>
              <div className="custom-select">
            <div className="selected-option opt2" onClick={toggleOptions2}>
                {selectedOption2}
                {isOpen2? <IoIosArrowUp/> : <FaAngleDown/>}
            </div>
            {isOpen2 && (
                <ul className="options">
                    {options2.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick2(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
                </div>
              </li>
              </ul>
              <ul className='border-style list-unstyled d-flex align-items-center'>
                <li className='fs-5 me-2'><RiMoneyDollarCircleLine/></li>
                <li className='fs-13 text-capitalize'>currency</li>
                <li>
                <div className="custom-select">
            <div className="selected-option opt3" onClick={toggleOptions3}>
                {selectedOption3}
                {isOpen3? <IoIosArrowUp/> : <FaAngleDown/>}
            </div>
            {isOpen3 && (
                <ul className="options">
                    {options3.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick3(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
                </div>
                </li>
              </ul>
              <ul className='border-style language list-unstyled d-flex align-items-center'>
                <li className='fs-5 me-2'><SiGoogletranslate/></li>
                <li className='fs-13 text-capitalize'>language</li>
                <li className=' d-flex'>
                  <img src={img_united_arab_emirates} alt={img_united_arab_emirates} className=' w-25' />
                
                  <div className="custom-select">
            <div className="selected-option opt4" onClick={toggleOptions4}>
                {selectedOption4}
                {isOpen4? <IoIosArrowUp/> : <FaAngleDown/>}
            </div>
            {isOpen4 && (
                <ul className="options">
                    {options4.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick4(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
                </div>
                </li>
              </ul>
              <ul className='border-style list-unstyled d-flex ms-3 align-items-center'>
                <li className='fs-5'><MdOutlineAccountBox/></li>
                <li>
                

                  
                <div className="custom-select">
            <div className="selected-option badge opt2" onClick={toggleDropdownAccount}>
                My Account
            </div>
            {Account && (
                <ul className="options">
                    <li onClick={handleDropdownAccount}>Sign in</li>
                    <li onClick={handleDropdownAccount}>Create accoun</li>
                    <li onClick={handleDropdownAccount}> <Link to="/MyAccount"> Manage your account</Link> </li>
                </ul>
            )}
                </div>








                {/* {Account && (
                  <div className='dropdown-menu'>

                  <ul className="">
                    {accountSelect.map((select, index) => (
                      <li key={index}>
                        {select}
                      </li>
                    ))}
              
                  </ul>
                  </div>
      )} */}
          
                        
                </li>
              </ul>
            </div>
        </div>
        </div>
        <div className={open?`navlist`:`navlist open_nav_list`}>
          <div className="content px-3 m-auto justify-content-between  d-flex flex-wrap align-items-center">
           <span className='close d-none fs-5' onClick={openNavList}><FaWindowClose/></span>
            <ul className='navlinks m-auto mt-3 pe-5 justify-content-between list-unstyled d-flex align-items-center'>
              <li>
              <Link className='fs-18 text-decoration-none' to="/">Home</Link>
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

              <div className="custom-select">
            <div className="selected-option opt2" onClick={toggleOptions5}>
            {isOpen5? <IoIosArrowUp className='arrow' /> : <FaAngleDown className='arrow' />}
            <span className='header'>Rent a car</span>
            </div>
            {isOpen5 && (
                <ul className="options">
                    {RentACar.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick5(option)}>
                            <Link to={option.path} className=' text-decoration-none'>{option.linkName}</Link>
                        </li>
                    ))}
                </ul>
            )}
                </div>


              </li>
              <li>
                <Link className='fs-18 text-decoration-none'  to="./rentCarWithDriver">Rent a car with driver</Link>
              </li>
              <li><Link className='fs-18 text-decoration-none'  to="./yachts">Rent yacht</Link></li>
              <li>




              <div className="custom-select">
            <div className="selected-option opt2" onClick={toggleOptions6}>
            {isOpen6? <IoIosArrowUp className='arrow' /> : <FaAngleDown className='arrow' />}
            <span className='header'>Quick links</span>
            </div>
            {isOpen6 && (
                <ul className="options">
                    {QuickLinks.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick6(option)}>
                          <Link to={option.path}>{option.linkName}</Link>
                        </li>
                    ))}
                </ul>
            )}
                </div>
              </li>



            </ul>
            <div className='appAndSocial m-auto d-flex align-items-center'>
             <ul className='appsLink d-flex align-items-center list-unstyled'>
              <li>
                 <a href="https://play.google.com/store/apps/details?id=com.tajeer&hl=en&gl=US&pli=1" target='_blank' rel="noopener noreferrer"><img src={google_Play} alt={google_Play} /></a>
              </li>
              <li>
                 <a href="https://apps.apple.com/sa/app/tajeer-rent-a-car-in-dubai/id1458290275" target='_blank' rel="noopener noreferrer"><img src={app_Store} alt={app_Store} /></a>
              </li>
             </ul>
              <ul className=' mt-3 social list-unstyled d-flex'>
                <li><a href="tel:+971 52 313 1587"><IoMdCall/></a></li>
                <li className='facebook'><a a href="https://www.facebook.com/Tajeercarrental" target='_blank' rel="noopener noreferrer"><FaFacebookF/></a></li>
                <li className='twitter'><a href="https://twitter.com/tajeercarrental" target='_blank' rel="noopener noreferrer"><FaTwitter/></a></li>
                <li><a href="https://www.instagram.com/tajeercarrental/?utm_medium=copy_link" target='_blank' rel="noopener noreferrer"><GrInstagram/></a></li>
              </ul>
            </div>
          </div>
        </div>
    </header>
  )
}

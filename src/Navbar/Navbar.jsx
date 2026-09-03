import React, { useState, useEffect } from 'react'
import logo from "../images/brand/zenith-icon.png"
import lamborghini from "../images/img_lamborghiniurus.png"
import img_calendar from "../images/img_calendar.svg"
import logo_dodge from "../images/img_dodge_logo.png"
import logo_chrysler from "../images/img_chrysler_logo.png"
import logo_infiniti from "../images/img_infinity_logo.png"
import logo_tesla from "../images/img_tesla_logo.png"
import app_Store from "../images/app store.png"
import google_Play from "../images/google play.png"
import { CiLocationOn } from "react-icons/ci";
import { IoEarthOutline } from "react-icons/io5";
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
import Register from '../Authentication/Register'
import Login from '../Authentication/Login'
import ForgotPassword from '../Authentication/ForgotPassword'
import EnterCode from '../Authentication/EnterCode'
import ResetPassword from '../Authentication/ResetPassword'
export default function Navbar() {

  const [newPassword, setNewPassword] = useState(false)
  const [writeCode, setWriteCode] = useState(false)
  const [ForgetPassword, setForgetPassword] = useState(false)
  const [register, setRegister] = useState(false)
  const [logIN, setLogIN] = useState(false)
  const [open, setOpen] = useState(true)
  const [openSetting, setOpenSetting] = useState(true)
  const [selectCountry, setSelectCountry] = useState(false);
  const [selectCity, setSelectCity] = useState(false);
  const [selectCurrency, setSelectCurrency] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState(false);
  const [dropRentCar, setDropRentCar] = useState(false);
  const [quickLinks, setQuickLinks] = useState(false);
  const [carBrand, setCarBrand] = useState(false);
  const [Account, setAccount] = useState(false);
  const [selectedCountryOption, setSelectedCountryOption] = useState("United Arab Emirates");
  const [selectedCityOption, setSelectedCityOption] = useState("Abu Dhabi");
  const [selectedCurrencyOption, setSelectedCurrencyOption] = useState("AED");
  const [selectedLanguageOption, setSelectedLanguageOption] = useState("العربية");
  const CountriesOptions = ['United Arab Emirates', 'Saudi Arabia', 'Kuwait','Qatar'];
  const CitiesOptions = ['dubai', 'Abu Dhabi', 'Al Ain','Sharjah'];
  const CurrenciesOptions = ['AED', 'SAR', 'USD','EUR'];
  const LanguagesOptions = ['English', 'العربية', 'русский','中国人'];
  const LanguageFlags = {
    'English': '🇬🇧',
    'العربية': '🇦🇪',
    'русский': '🇷🇺',
    '中国人': '🇨🇳',
  };


  useEffect(() => {
    // Add event listener to handle clicks on the document
    document.body.addEventListener('click', handleBodyClick);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);


  const handleBodyClick = (event) => {
    // Check if the clicked element or any of its ancestors has class "elected-option"
    if (!event.target.closest('.selected-option')) {
      setSelectCountry(false);
      setSelectCity(false);
      setSelectCurrency(false);
      setSelectLanguage(false);
      setAccount(false);
      setDropRentCar(false);
      setQuickLinks(false);
      setCarBrand(false);
    }
  };
  
  const RentACar = [
                     {
                      linkName:"Rent a car monthly",
                      path:"./MothlyCarRental"
                     },
                     {
                      linkName:"Rent luxury car",
                      path:"./RentLuxuryCar"
                     },
                     {
                      linkName:"Rent sport car",
                      path:"./RentSportCar"
                     },
                     {
                      linkName:"Rent cheap car",
                      path:"./RentCheapCar"
                     },

                   ];
  const carBrands = [
    {
      linkName:"Dodge",
      img:logo_dodge,
      path:"./Brands"
     },
    {
      linkName:"Chrysler",
      img:logo_chrysler,
      path:"./Brands"
     },
    {
      linkName:"Infiniti",
      img:logo_infiniti,
      path:"./Brands"
     },
    {
      linkName:"Tesla",
      img:logo_tesla,
      path:"./Brands"
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
  const toggleCountriesOptions = () => {
      setSelectCountry(!selectCountry);
      setSelectCity(false);
      setSelectCurrency(false);
      setSelectLanguage(false);
      setAccount(false);
      setDropRentCar(false);
      setQuickLinks(false);
      setCarBrand(false);
  };
  const toggleCitiesOptions = () => {
      setSelectCity(!selectCity);
      setSelectCountry(false);
      setSelectCurrency(false);
      setSelectLanguage(false);
      setAccount(false);
      setDropRentCar(false);
      setQuickLinks(false);
      setCarBrand(false);
  };
  const toggleCurrenciesOptions = () => {
      setSelectCurrency(!selectCurrency);
      setSelectCity(false);
      setSelectCountry(false);
      setSelectLanguage(false);
      setAccount(false);
      setDropRentCar(false);
      setQuickLinks(false);
      setCarBrand(false);
  };
  const toggleLanguagesOptions = () => {
      setSelectLanguage(!selectLanguage);
      setSelectCity(false);
      setSelectCurrency(false);
      setSelectCountry(false);
      setAccount(false);
      setDropRentCar(false);
      setQuickLinks(false);
      setCarBrand(false);
  };
  const toggleOptions5 = () => {
      setDropRentCar(!dropRentCar);
      setSelectLanguage(false);
      setSelectCity(false);
      setSelectCurrency(false);
      setSelectCountry(false);
      setAccount(false);
      setQuickLinks(false);
      setCarBrand(false);
  };
  const toggleOptions6 = () => {
      setQuickLinks(!quickLinks);
      setDropRentCar(false);
      setSelectLanguage(false);
      setSelectCity(false);
      setSelectCurrency(false);
      setSelectCountry(false);
      setAccount(false);
      setCarBrand(false);
  };
  const toggleOptions7 = () => {
    setCarBrand(!carBrand)
      setQuickLinks(false);
      setDropRentCar(false);
      setSelectLanguage(false);
      setSelectCity(false);
      setSelectCurrency(false);
      setSelectCountry(false);
      setAccount(false);
  };


  const toggleDropdownAccount = () => {
    setAccount(!Account);
    setSelectLanguage(false);
    setCarBrand(false);
      setSelectCity(false);
      setSelectCurrency(false);
      setSelectCountry(false);
      setDropRentCar(false);
      setQuickLinks(false)
  };



  const handleDropdownAccount = () => {
    setAccount(!Account);
  };
  const signUp = () => {
    setAccount(!Account);
    setRegister(true)
  };
  const login = () => {
    setAccount(!Account);
    setLogIN(true)
  };
  function GoToLoginFunc (){
    setLogIN(true)
    setNewPassword(false)
  }
  function ForgetPasswordSetting (){
    setForgetPassword(true)
    setLogIN(false)
  }
  function writeNewPASSWORDSetting (){
    setNewPassword(true)
    setWriteCode(false)
  }
  function writeCodeSetting (){
    setForgetPassword(false)
    setWriteCode(true)
  }
  const handleOptionClick1 = (option) => {
    setSelectedCountryOption(option);
      setSelectCountry(false);
  };
  const handleOptionClick2 = (option) => {
    setSelectedCityOption(option);
      setSelectCity(false);
  };
  const handleOptionClick3 = (option) => {
    setSelectedCurrencyOption(option);
      setSelectCurrency(false);
  };
  const handleOptionClick4 = (option) => {
    setSelectedLanguageOption(option);
      setSelectLanguage(false);
  };
  const handleOptionClick5 = (option) => {
      setDropRentCar(false);
  };
  const handleOptionClick6 = (option) => {
      setQuickLinks(false);
  };
  const handleOptionClick7 = (option) => {
      setCarBrand(false);
  };

  function openNavList(){
    setOpen(!open)
  }
  function openSettingList(){
    setOpenSetting(!openSetting)
  }
  function closeAllPanels(){
    setOpen(true)
    setOpenSetting(true)
  }
  return (
    <header>
    {(!open || !openSetting || carBrand) && <div className="nav-backdrop" onClick={closeAllPanels}></div>}
    <div className="navbar">
        <div className="content d-flex justify-content-around flex-nowrap">
           <span className='setting_btn icon-btn d-none' onClick={openSettingList}> <IoMdSettings/></span>
            <img src={logo} alt="Zenith" className='me-5 logo' loading='lazy'/>
           <span className='menu icon-btn d-none' onClick={openNavList}> <CgMenuGridR /></span>
            <Link to="/ListYourCars" className=' text-decoration-none' aria-label="Go to list your cars page">
            <div className='advertisement px-2 me-4 d-flex align-items-center bg-light'>
              <img src={lamborghini} alt={lamborghini} className='lamborghini' loading='lazy' />
              <p className='badge text-dark mt-2'>List your cars in <span className='bolder'>TAJEER</span> platform</p>
              <img src={img_calendar} alt={img_calendar} className='img_calendar' loading='lazy' />
            </div>
            </Link>
            <div className={`d-flex ${openSetting? 'settings':  'settings open_Setting'}`}>
            <span className='close_Setting d-none fs-5' onClick={openSettingList}><FaWindowClose/></span>
              <ul className=' border-style list-unstyled d-flex align-items-center'>
                <li className=' fs-5 me-2' title='Country'><IoEarthOutline/></li>
                <li>
                <div className="custom-select">
            <div className="selected-option badge fw-light" onClick={toggleCountriesOptions}>
                {selectedCountryOption}
                {selectCountry? <IoIosArrowUp/> : <FaAngleDown/>}
            </div>
            {selectCountry && (
                <ul className="options">
                    {CountriesOptions.map((option, index) => (
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
              <li className='fs-5 me-2' title='City'><CiLocationOn/></li>
              <li>
              <div className="custom-select">
            <div className="selected-option opt2 badge fw-light" onClick={toggleCitiesOptions}>
                {selectedCityOption}
                {selectCity? <IoIosArrowUp/> : <FaAngleDown/>}
            </div>
            {selectCity && (
                <ul className="options">
                    {CitiesOptions.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick2(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
                </div>
              </li>
              </ul>
              <ul className=' ms-2 border-style list-unstyled d-flex align-items-center'>
                <li className='fs-5 me-2' title='Currency'><RiMoneyDollarCircleLine/></li>
                <li>
                <div className="custom-select">
            <div className="selected-option opt3" onClick={toggleCurrenciesOptions}>
                {selectedCurrencyOption}
                {selectCurrency? <IoIosArrowUp/> : <FaAngleDown/>}
            </div>
            {selectCurrency && (
                <ul className="options">
                    {CurrenciesOptions.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick3(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
                </div>
                </li>
              </ul>
              <ul className='ms-2 border-style language list-unstyled d-flex align-items-center'>
                <li className='fs-5 me-2' title='Language'><SiGoogletranslate/></li>
                <li className=' d-flex'>
                  <span className='lang-flag' role='img' aria-label={selectedLanguageOption}>{LanguageFlags[selectedLanguageOption]}</span>
                  <div className="custom-select">
            <div className="selected-option opt4" onClick={toggleLanguagesOptions}>
                {selectedLanguageOption}
                {selectLanguage? <IoIosArrowUp/> : <FaAngleDown/>}
            </div>
            {selectLanguage && (
                <ul className="options">
                    {LanguagesOptions.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick4(option)}>
                            <span className='lang-flag' role='img' aria-label={option}>{LanguageFlags[option]}</span> {option}
                        </li>
                    ))}
                </ul>
            )}
                </div>
                </li>
              </ul>
              <ul className='border-style list-unstyled d-flex align-items-center'>
                <li className='fs-5'><MdOutlineAccountBox/></li>
                <li>
                

                  
                <div className="custom-select">
            <div className="selected-option badge opt2" onClick={toggleDropdownAccount}>
                My Account
            </div>
            {Account && (
                <ul className="options">
                    <li onClick={login}>Sign in</li>
                    <li onClick={signUp}>Create accoun</li>
                    <li onClick={handleDropdownAccount}> <Link to="/MyAccount" aria-label="Go to my account setting page"> Manage your account</Link> </li>
                </ul>
            )}
                </div>          
                        
                </li>
              </ul>
            </div>
        </div>
        </div>
        
        <div className={open?`navlist position-relative`:`navlist open_nav_list position-relative`}>
          <div className="content px-3 m-auto justify-content-between  d-flex flex-wrap align-items-center">
           <span className='close d-none fs-5' onClick={openNavList}><FaWindowClose/></span>
            <ul className='navlinks m-auto mt-3 pe-5 justify-content-between list-unstyled d-flex align-items-center'>
              <li>
              <Link className='fs-18 text-decoration-none' to="/" aria-label="Go to home page">Home</Link>
              </li>
              <li>


                 
              <div className="custom-select">
            <div className="selected-option opt2" onClick={toggleOptions7}>
            {carBrand? <IoIosArrowUp className='arrow' /> : <FaAngleDown className='arrow' />}
            <span className='header'>Car brands</span>
            </div>
           
                </div>
              </li>
              <li>

              <div className="custom-select">
            <div className="selected-option opt2" onClick={toggleOptions5}>
            {dropRentCar? <IoIosArrowUp className='arrow' /> : <FaAngleDown className='arrow' />}
            <span className='header'>Rent a car</span>
            </div>
            {dropRentCar && (
                <ul className="options">
                    {RentACar.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick5(option)}>
                            <Link to={option.path} className=' text-decoration-none' aria-label={`Go to ${option.linkName} page`}>{option.linkName}</Link>
                        </li>
                    ))}
                </ul>
            )}
                </div>


              </li>
              <li>
                <Link className='fs-18 text-decoration-none'  to="./rentCarWithDriver" aria-label="Go to rent car with driver page">Rent a car with driver</Link>
              </li>
              <li><Link className='fs-18 text-decoration-none'  to="./yachts" aria-label="Go to yachts page">Rent yacht</Link></li>
              <li>




              <div className="custom-select">
            <div className="selected-option opt2" onClick={toggleOptions6}>
            {quickLinks? <IoIosArrowUp className='arrow' /> : <FaAngleDown className='arrow' />}
            <span className='header'>Quick links</span>
            </div>
            {quickLinks && (
                <ul className="options">
                    {QuickLinks.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick6(option)}>
                          <Link to={option.path} aria-label={`Go to ${option.linkName} page`}>{option.linkName}</Link>
                        </li>
                    ))}
                </ul>
            )}
                </div>
              </li>


            </ul>
            {/*******social links******** */}
            <div className='appAndSocial m-auto d-flex align-items-center'>
             <ul className='appsLink d-flex align-items-center list-unstyled'>
              <li>
                 <a href="https://play.google.com/store/apps/details?id=com.tajeer&hl=en&gl=US&pli=1" target='_blank' rel="noopener noreferrer"><img src={google_Play} alt={google_Play} loading='lazy' /></a>
              </li>
              <li>
                 <a href="https://apps.apple.com/sa/app/tajeer-rent-a-car-in-dubai/id1458290275" target='_blank' rel="noopener noreferrer"><img src={app_Store} alt={app_Store} loading='lazy' /></a>
              </li>
             </ul>
              <ul className=' mt-3 social list-unstyled d-flex'>
                <li><a href="tel:+971 52 313 1587"><IoMdCall/><span className="hidden-text">Call Us</span></a></li>
                <li className='facebook'><a href="https://www.facebook.com/Tajeercarrental" target='_blank' rel="noopener noreferrer"><FaFacebookF/><span className="hidden-text">Facebook</span></a></li>
                <li className='twitter'><a href="https://twitter.com/tajeercarrental" target='_blank' rel="noopener noreferrer"><FaTwitter/><span className="hidden-text">Twitter</span></a></li>
                <li><a href="https://www.instagram.com/tajeercarrental/?utm_medium=copy_link" target='_blank' rel="noopener noreferrer"><GrInstagram/><span className="hidden-text">Instagram</span></a></li>
              </ul>
            </div>
          </div> 

          {carBrand && (
                <ul className="Brand_Options">
                    {carBrands.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick7(option)}>
                          <Link to={option.path} className=' text-decoration-none' aria-label={`Go to ${option.linkName} page`}>
                          <img src={option.img} alt={option.img} width={80} height={50} loading='lazy' />
                            <span className=' ms-2'>{option.linkName}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        {logIN? <Login toggleVisibility={() => setLogIN(false)} forgotPASSWORD={ForgetPasswordSetting}/> : ''}
        {register? <Register toggleVisibility={() => setRegister(false)}/> :  ''}
        {ForgetPassword? <ForgotPassword toggleVisibility={() => setForgetPassword(false)} writeCode={writeCodeSetting}/> :  ''}
         {writeCode? <EnterCode toggleVisibility={() => setWriteCode(false)} writeNewPASSWORD={writeNewPASSWORDSetting}/> : ''}
         {newPassword? <ResetPassword toggleVisibility={() => setNewPassword(false)} GoToLogin={GoToLoginFunc}/> : ''}
        
    </header>
  )
}
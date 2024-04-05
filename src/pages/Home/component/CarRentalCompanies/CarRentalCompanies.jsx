import React, { useState } from 'react';
import "../carType/CarType.css"
import CarRentalCompaniesCursel from './CarRentalCompaniesCursel/CarRentalCompaniesCursel';
import { Link } from 'react-router-dom';
export default function CarRentalCompanies() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <>
    <section className='CarType pt-3'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=' '>Car Rental Companies</h3>
        <div className='line'></div>
        <Link to="./CarRentalCompany" className='ViewAll badge ms-2 text-decoration-none' aria-label="Go to view all page"><span className=''>View all</span></Link>
        </div>
        <p className=' fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laborum.</p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          {!isExpanded ?
          <span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read more</span>:<span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read less</span> 
          }
        </p>
        </div>
    </section>
    <CarRentalCompaniesCursel/>
    </>
  )
}


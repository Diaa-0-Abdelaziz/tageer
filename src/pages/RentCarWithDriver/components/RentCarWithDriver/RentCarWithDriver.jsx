import React, { useState } from 'react';
import RentCarWithDriverProducts from './RentCarWithDriverProducts/RentCarWithDriverProducts';
import { Link } from 'react-router-dom';
export default function RentCarWithDriver() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <>
    <section className='CarType pt-3'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>Rent a car with driver in Dubai</h3>
        <div className='line'></div>
        <Link to="/ViewAll" className='ViewAll badge ms-2 text-decoration-none'><span className=''>View all</span></Link>
        </div>
        <p className=' fw-bold'>Travel in comfort with a professional, licensed chauffeur.</p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          Sit back and relax while an experienced local driver takes you to meetings, sightseeing stops or the airport.
          Choose from sedans, SUVs, vans and luxury cars, hired by the hour, by the day or for a full trip across the UAE. Fuel, insurance and the driver are included in the quoted price.
          Ideal for business travellers, families, special occasions and visitors who prefer not to navigate the city themselves.
          {!isExpanded ?
          <span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read more</span>:<span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read less</span> 
          }
        </p>
        </div>
    </section>
    <RentCarWithDriverProducts/>
    </>
  )
}

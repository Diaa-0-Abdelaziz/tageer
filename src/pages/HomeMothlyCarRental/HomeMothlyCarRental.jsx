import React, { useState, lazy, Suspense } from 'react';
import Loading from '../../Loading';
const Filter= lazy(() => import('./FILTER/filter'));
const BESTSERVICES= lazy(() => import('./BEST-SERVICES/BESTSERVICES'));
const FAQ= lazy(() => import('./FAQ/FAQ'));
export default function HomeMothlyCarRental() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <>
    <section className='CarType pt-3 mb-5'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>Monthly car rental in Dubai</h3>
        </div>
        <p className=' fw-bold'>Long-term car rental with lower rates, flexible terms and everything included.</p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          Renting by the month is the most economical way to stay mobile in Dubai. Monthly rates are significantly lower than daily rates and include registration, basic insurance and routine maintenance.
          Choose from economy hatchbacks and family SUVs to premium sedans, with a generous monthly mileage allowance and the option to swap vehicles if your needs change.
          Perfect for relocating professionals, long visits and businesses that need a reliable vehicle without the cost of buying one.
          {!isExpanded ?
          <span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read more</span>:<span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read less</span> 
          }
        </p>
        </div>
    </section>
    <Suspense fallback={<Loading/>}> <Filter/></Suspense>
    <Suspense fallback={<Loading/>}> <BESTSERVICES/></Suspense>
    <Suspense fallback={<Loading/>}>  <FAQ/></Suspense>
    </>
  )
}


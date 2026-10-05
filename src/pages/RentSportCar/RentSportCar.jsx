import React, { useState, lazy, Suspense } from 'react';
import Loading from '../../Loading';
const Filter= lazy(() => import('./FILTER/filter'));
const BESTSERVICES= lazy(() => import('../Home/component/BEST-SERVICES/BESTSERVICES'));
const FAQ= lazy(() => import('./FAQ/FAQ'));
export default function RentSportCar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <>
    <section className='CarType pt-3 mb-5'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>Rent a sports car in Dubai</h3>
        </div>
        <p className=' fw-bold'>Experience the thrill of a supercar on Dubai's roads.</p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          From Ferrari and Lamborghini to Porsche, McLaren and Mustang convertibles, our sports car rentals deliver the performance and head-turning looks you expect.
          Each car is inspected before every rental and comes with insurance, a daily mileage allowance and a full briefing at hand-over. A security deposit applies.
          Choose your car, pick your dates and we will deliver it wherever you are in the UAE.
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


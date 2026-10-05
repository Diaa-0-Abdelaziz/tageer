import React, { useState, lazy, Suspense  } from 'react';
import Loading from '../../Loading';
import { cars } from '../../data/cars';
const CarCatalog= lazy(() => import('../../ImportantSlicesSharedComponents/CarCatalog'));
const BESTSERVICES= lazy(() => import('./BEST-SERVICES/BESTSERVICES'));
const FAQ= lazy(() => import('./FAQ/FAQ'));
export default function Brands() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <div className='NavyPage'>
    <section className='CarType pt-3'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>Rent a car by brand in Dubai</h3>
        </div>
        <p className=' fw-bold'>Choose from the world's most popular car brands, all available for rent in Dubai.</p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          Browse rental cars by brand and find the exact badge you want, from Toyota and Nissan for everyday driving to Mercedes-Benz, BMW and Porsche for a statement arrival.
          Every vehicle is offered by a verified rental company, with transparent daily, weekly and monthly rates, free delivery on many cars and flexible pick-up across Dubai, Abu Dhabi and Sharjah.
          Pick a brand to see available models, compare prices side by side and book in minutes.
          {!isExpanded ?
          <span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read more</span>:<span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read less</span> 
          }
        </p>
        </div>
    </section>
    <Suspense fallback={<Loading/>}> <CarCatalog cars={cars}/></Suspense>
    <Suspense fallback={<Loading/>}> <BESTSERVICES/></Suspense>
    <Suspense fallback={<Loading/>}>  <FAQ/></Suspense>
    </div>
  )
}


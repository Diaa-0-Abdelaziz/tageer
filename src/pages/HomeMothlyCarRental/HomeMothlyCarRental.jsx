import React, { useState, lazy, Suspense } from 'react';
import Loading from '../../Loading';
const Filter= lazy(() => import('./FILTER/filter'));
const BESTSERVICES= lazy(() => import('../Home/component/BEST-SERVICES/BESTSERVICES'));
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
        <h3 className=''>Rent Mothly Car in Dubai</h3>
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
    <Suspense fallback={<Loading/>}> <Filter/></Suspense>
    <Suspense fallback={<Loading/>}> <BESTSERVICES/></Suspense>
    <Suspense fallback={<Loading/>}>  <FAQ/></Suspense>
    </>
  )
}


import React, { useState, lazy, Suspense } from 'react';
import { GoDotFill } from "react-icons/go";
import Loading from '../../Loading';
const Filter= lazy(() => import('./FILTER/filter'));
const BESTSERVICES= lazy(() => import('./BEST-SERVICES/BESTSERVICES'));
const FAQ= lazy(() => import('./FAQ/FAQ'));
export default function Category() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <>
    <section className='CarType pt-3'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>Rent SUV in Dubai</h3>
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



        <div className='View_More my-5 border border-1 py-4 px-5 border-black rounded-2 d-flex flex-wrap justify-content-between position-relative'>
            <ul className=' my-2 list-unstyled m-auto d-flex justify-content-between w-100'>
                <li><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
                </ul>
            <ul className=' my-2 list-unstyled m-auto d-flex justify-content-between w-100'>
                <li><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
                </ul>
             
        </div>

        </div>
    </section>
    <Suspense fallback={<Loading/>}> <Filter/></Suspense>
    <Suspense fallback={<Loading/>}> <BESTSERVICES/></Suspense>
    <Suspense fallback={<Loading/>}>  <FAQ/></Suspense>
    </>
  )
}


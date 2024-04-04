import React, { useState } from 'react';
// import { GoDotFill } from "react-icons/go";
import Filter from './FILTER/filter';
import BESTSERVICES from '../Home/component/BEST-SERVICES/BESTSERVICES';
import FAQ from '../Home/component/FAQ/FAQ';

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
        {!isExpanded && (
          <span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read more</span>
        )}
        </p>



        {/* <div className='View_More my-5 border border-1 py-4 px-5 border-black rounded-2 d-flex flex-wrap justify-content-between position-relative'>
            <ul className=' list-unstyled m-auto'>
                <li className=' mb-2'><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
                </ul>
                <ul className=' list-unstyled m-auto'>
                <li className=' mb-2'><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
                </ul>
                <ul className=' list-unstyled m-auto'>
                <li className=' mb-2'><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
                </ul>
                <ul className=' list-unstyled m-auto'>
                <li className=' mb-2'><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
                </ul>
                <ul className=' list-unstyled m-auto'>
                <li className=' mb-2'><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
                </ul>
                <ul className='list-unstyled m-auto'>
                <li className=' mb-2'><GoDotFill/> Mercedes (9)</li>
                <li><GoDotFill/> Mercedes (9)</li>
            </ul>

            <span className='rounded-pill py-2 px-5' style={{background:"#E6F6FF",color:"#3A1B50",cursor:"pointer" }}>View More</span>
        </div> */}






        </div>







    </section>
    <Filter/>
    <BESTSERVICES/>
    <FAQ/>
    </>
  )
}


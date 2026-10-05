import React, { useState } from 'react';
import RentyachtWithDriverProducts from './RentyachtWithDriverProducts/RentyachtWithDriverProducts';
export default function Rentyacht() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <>
    <section className='CarType pt-3'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>Rent a yacht in Dubai</h3>
        <div className='line'></div>
        </div>
        <p className=' fw-bold'>Cruise Dubai Marina, Palm Jumeirah and the Arabian Gulf on a private yacht.</p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          Our yachts range from intimate 30-foot boats to luxury vessels for large groups, all with a professional captain and crew.
          Charters are available by the hour with refreshments, fuel and safety equipment included. Optional extras include catering, fishing gear, water toys and decorations.
          Compare yachts by capacity and price, then book your perfect day on the water.
          {!isExpanded ?
          <span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read more</span>:<span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read less</span> 
          }
        </p>
        </div>
    </section>
    <RentyachtWithDriverProducts/>
    </>
  )
}

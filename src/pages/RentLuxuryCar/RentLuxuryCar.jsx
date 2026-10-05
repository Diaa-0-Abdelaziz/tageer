import React, { useState, lazy, Suspense } from 'react';
import Loading from '../../Loading';
import { luxurySuvs } from '../../data/cars';
const CarCatalog= lazy(() => import('../../ImportantSlicesSharedComponents/CarCatalog'));
const BESTSERVICES= lazy(() => import('../Home/component/BEST-SERVICES/BESTSERVICES'));
const FAQ= lazy(() => import('./FAQ/FAQ'));
export default function RentLuxuryCar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <div className='NavyPage'>
    <section className='CarType pt-3 mb-5'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>Rent a luxury car in Dubai</h3>
        </div>
        <p className=' fw-bold'>Drive in style with a premium vehicle from Dubai's top luxury rental companies.</p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          Make every journey memorable with a luxury car from brands such as Mercedes-Benz, BMW, Bentley, Rolls-Royce and Range Rover.
          All vehicles are late-model, fully insured and professionally maintained, with delivery to your hotel, home or airport and an optional chauffeur.
          Compare luxury rental offers, check what is included and book online in minutes.
          {!isExpanded ?
          <span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read more</span>:<span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read less</span> 
          }
        </p>
        </div>
    </section>
    <Suspense fallback={<Loading/>}> <CarCatalog cars={luxurySuvs} showClass={false}/></Suspense>
    <Suspense fallback={<Loading/>}> <BESTSERVICES/></Suspense>
    <Suspense fallback={<Loading/>}>  <FAQ/></Suspense>
    </div>
  )
}


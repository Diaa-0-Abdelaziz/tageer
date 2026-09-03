import React, { useState } from 'react';
import RentSUVLuxuryCursel from './RentSUVLuxuryCursel/RentSUVLuxuryCursel';
import { Link } from 'react-router-dom';
import { luxurySuvs } from '../../../../data/cars';

const defaultLead = "Seven-seaters, high driving position and enough boot space for the whole family — the SUVs UAE residents and visitors book most.";
const defaultBody = [
  `An SUV is the default choice in the UAE for a reason. The extra ride height makes speed bumps, sand drifts and unmarked
   construction roads a non-issue, the cabins are built for long air-conditioned drives, and there is room for luggage even
   with five people on board. Everything in this list is available today from a licensed rental partner in Dubai.`,
  `At the top end, the Range Rover Sport, Mercedes-Benz G-Class and Lexus LX 600 are the cars people book for weddings,
   client pickups and long weekends in Hatta or Ras Al Khaimah. The BMW X5, Audi Q8 and Porsche Cayenne sit a step below on
   price but drive better on the highway, which makes them the sensible pick for a week of commuting between Dubai and Abu Dhabi.
   The Nissan Patrol remains the value option and the only one on this list built for real dune driving.`,
  `Every rate shown is the all-in daily, weekly or monthly price with comprehensive insurance included. Weekly bookings are
   roughly 20% cheaper per day than the daily rate, and monthly bookings are cheaper again, with servicing, registration and
   Salik registration handled by the supplier. The security deposit is refunded within 21 days of returning the car, once
   any outstanding fines have cleared.`,
  `To book you need a valid UAE driving licence, or an international driving permit plus your home licence if you are visiting,
   an Emirates ID or passport, and a credit card in the driver's name for the deposit. Free delivery to your hotel, residence
   or DXB and AUH terminals is available on most cars in this list.`,
];

export default function RentSUVLuxury({
  title = "Rent SUV Luxury Car In Dubai",
  viewAllLink = "./RentLuxuryCar",
  lead = defaultLead,
  body = defaultBody,
  products = luxurySuvs,
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <>
    <section className='CarType pt-3'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>{title}</h3>
        <div className='line'></div>
        <Link to={viewAllLink} className='ViewAll badge ms-2 text-decoration-none' aria-label="Go to view all page"><span className=''>View all</span></Link>
        </div>
        <p className=' fw-bold'>{lead}</p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          {body.map((paragraph, i) => <React.Fragment key={i}>{paragraph}{' '}</React.Fragment>)}
          {!isExpanded ?
          <span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read more</span>:<span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read less</span> 
          }
        </p>
        </div>
    </section>
    <RentSUVLuxuryCursel products={products}/>
    </>
  )
}

import React, { useState } from 'react';
import CarRentalCompaniesCursel from './CarRentalCompaniesCursel/CarRentalCompaniesCursel';
import { Link } from 'react-router-dom';
export default function CarRentalCompanies() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <>
    <section className='CarType pt-3'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=' '>Car Rental Companies</h3>
        <div className='line'></div>
        <Link to="./CarRentalCompany" className='ViewAll badge ms-2 text-decoration-none' aria-label="Go to view all page"><span className=''>View all</span></Link>
        </div>
        <p className=' fw-bold'>Seven licensed rental companies list their cars on Zenith &mdash; compare their fleets, rates and delivery areas in one place.</p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          Zenith does not own cars. Every vehicle you see on this site belongs to a rental company licensed by
          the RTA, and booking through us puts you in direct contact with them. What we do is put their fleets
          side by side so you can compare the same car across several suppliers before you commit.
          {' '}
          The companies here specialise in different things. Skyline and Marina hold most of the luxury and
          sports cars, so that is where to look for a Range Rover, a G-Class or a convertible for the weekend.
          Deira Drive and Barsha Motors run the largest economy fleets and are the cheapest option for a monthly
          rental. Desert Road keeps the 4x4s and full-size SUVs for trips out of the city, and Creekside is set
          up for airport pickups at DXB Terminal 3.
          {' '}
          Every partner listed here holds a valid UAE trade licence and provides comprehensive insurance with
          each rental. Rates shown on their listings are all-in: insurance, registration and servicing are
          included, and the mileage allowance is stated on each car. Fuel and Salik charges are extra, as they
          are everywhere in the UAE.
          {' '}
          Deposits, delivery areas and opening hours vary between suppliers, so check the card before you book.
          Most offer free delivery within Dubai; a few extend that to Sharjah, Abu Dhabi or the airport
          terminals at no charge. If something goes wrong during a rental, contact the supplier directly on the
          number shown on the listing.
          {!isExpanded ?
          <span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read more</span>:<span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read less</span> 
          }
        </p>
        </div>
    </section>
    <CarRentalCompaniesCursel/>
    </>
  )
}


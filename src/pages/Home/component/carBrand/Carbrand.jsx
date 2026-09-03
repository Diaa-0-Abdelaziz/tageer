import React, { useState } from 'react';
import CarBrandeCursel from './CarBrandeCursel/CarBrandeCursel';
export default function Carbrand() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <>
    <section className='CarType pt-3'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>Choose your favorite car brand</h3>
        <div className='line'></div>
        </div>
        <p className=' fw-bold'>German luxury, Japanese reliability, American muscle and electric &mdash; browse the brands our rental partners keep on the road across the UAE.</p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          Most people already know which badge they want on the bonnet before they know the model, so we let you start from the brand.
          Pick one and you will see every car that partner companies currently have available, with the daily, weekly and monthly rate
          shown side by side.
          {' '}
          Mercedes-Benz, BMW and Audi cover the German side of the fleet, from a C-Class or a 3 Series for a business week to an
          S-Class or a large SUV when you are carrying clients or family. Range Rover is the default choice for anyone heading out of
          the city &mdash; high driving position, real ground clearance and enough space for luggage on a weekend to Fujairah or Ras Al Khaimah.
          {' '}
          Nissan and Toyota are where the value sits. A Nissan Sunny, a Toyota Yaris or a Corolla will cover a month of commuting for a
          fraction of the cost of owning one, and they are the easiest cars to insure for younger drivers. Dodge and Chrysler bring the
          American character &mdash; a Charger or a Challenger is still the most-requested car for a weekend in Dubai &mdash; while Tesla
          leads the electric side, with free charging in many public bays and no fuel bill at all.
          {' '}
          Whichever brand you pick, the terms are the same: a valid driving licence, Emirates ID or passport, a refundable security
          deposit, and comprehensive insurance already included in the price. Delivery to your hotel, residence or airport terminal is
          available on request.
        {!isExpanded ?
          <span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read more</span>:<span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read less</span> 
          }
        </p>
        </div>
    </section>
    <CarBrandeCursel/>
    </>
  )
}

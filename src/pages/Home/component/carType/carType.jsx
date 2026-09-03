import React, { useState } from 'react';
import CarTypeCursel from './carTypeCursel/carTypeCursel';
export default function CarType() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <>
    <section className='CarType pt-3'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>Choose your favorite car type</h3>
        <div className='line'></div>
        </div>
        <p className=' fw-bold'>From everyday economy cars to exotic supercars &mdash; pick the category that fits your trip and compare live prices in seconds.</p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          Not every journey needs the same car. A weekend on Sheikh Zayed Road, a family trip to Hatta, an airport pickup at DXB
          and a photo drive down Jumeirah Beach Road all call for something different, which is why we group our fleet by body type
          instead of by price alone. Browse a category and you will only see cars that actually behave the way you expect them to.
          {' '}
          Sport cars and exotic supercars are the ones you rent for the experience: two doors, a loud engine and a driving position
          that makes a short trip feel like an occasion. Convertibles are best enjoyed between November and March, when the weather
          along the coast is at its finest and the roof can stay down all evening. Coupes sit comfortably in between &mdash; sharp to
          look at, easy to live with, and still practical enough for two people with luggage.
          {' '}
          If comfort matters more than drama, luxury sedans give you a quiet cabin, a smooth ride and enough boot space for a full
          business trip, while luxury SUVs add the extra height, ground clearance and seating you need for families, desert roads and
          weekend runs across the emirates. Electric cars are the value pick for city driving: no fuel bill, free parking in many
          designated bays, and a growing charging network across Dubai and Abu Dhabi.
          {' '}
          Every listing shows the daily, weekly and monthly rate, the mileage allowance, the security deposit and the insurance
          included, so there is nothing to discover at the counter. Delivery to your hotel, home or the airport terminal is available
          on most cars, and monthly rentals come with servicing and registration already covered. Choose a category below to get started.
          {!isExpanded ?
          <span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read more</span>:<span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read less</span> 
          }
        </p>
        </div>
    </section>
    <CarTypeCursel/>
    </>
  )
}

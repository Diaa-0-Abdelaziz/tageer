import React, { useState } from 'react';
import RentSuvDubaiCursel from './RentSuvDubaiCursel/RentSuvDubaiCursel';
export default function RentSuvDubai({car}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };

    if (!car) return null;

    const isSuv = car.bodyType.toLowerCase().includes('suv');
  return (
    <>
    <section className='CarType pt-3'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>Rent {car.title} in Dubai</h3>
        <div className='line'></div>
        </div>
        <p className=' fw-bold'>
          {car.year} {car.model} &mdash; from {car.pricePerDay} AED a day, {car.pricePerMonth} AED a month,
          with comprehensive insurance and {car.mileagePerDay} km a day included.
        </p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          {car.description}{' '}
          {car.highlights}{' '}
          The car is supplied by {car.supplier}, a licensed rental company operating in Dubai. The rate you see is
          the all-in price: comprehensive insurance, registration and servicing are already included, and there is
          no charge for a second driver on the same booking. Fuel is not included &mdash; the car is handed over
          with a full tank and should come back the same way.{' '}
          A refundable security deposit of {car.deposit} AED is held on a credit card in the main driver&apos;s name
          and released within 21 days of the car being returned, once any Salik charges and traffic fines have
          cleared. The minimum rental period for this car is {car.minDays} {car.minDays === 1 ? 'day' : 'days'}.{' '}
          To collect the keys you need a valid UAE driving licence, or your home licence plus an international
          driving permit if you are visiting, an Emirates ID or passport, and a credit card for the deposit.
          Free delivery is available to hotels and residences across Dubai, and to DXB and Al Maktoum terminals.{' '}
          {isSuv
            ? `As a ${car.bodyType.toLowerCase()}, this one seats ${car.seats} and has the ground clearance for weekend trips out to Hatta, Jebel Jais or Ras Al Khaimah, not just city driving.`
            : `As a ${car.bodyType.toLowerCase()}, it seats ${car.seats} and is built for daily commuting and city parking, which is where the running costs stay lowest.`}
        {!isExpanded && (
          <span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read more</span>
        )}
        </p>
        </div>
    </section>
    <RentSuvDubaiCursel car={car}/>
    </>
  )
}

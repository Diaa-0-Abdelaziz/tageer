import React, { useState, lazy, Suspense } from 'react';
import { GoDotFill } from "react-icons/go";
import { useSearchParams, Link } from 'react-router-dom';
import Loading from '../../Loading';
import { cars, searchCars } from '../../data/cars';
const Filter= lazy(() => import('./FILTER/filter'));
const BESTSERVICES= lazy(() => import('./BEST-SERVICES/BESTSERVICES'));
const FAQ= lazy(() => import('./FAQ/FAQ'));
const ViewAllCursel= lazy(() => import('./ViewAllCursel/ViewAllCursel'));

export default function ViewAll() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };

    const [searchParams] = useSearchParams();
    const query = (searchParams.get('q') || '').trim();
    const results = query ? searchCars(query) : cars;

    // how many cars each brand has, for the quick brand links
    const brandCounts = Object.entries(
      cars.reduce((acc, c) => ({ ...acc, [c.brand]: (acc[c.brand] || 0) + 1 }), {})
    ).sort((a, b) => b[1] - a[1]);
  return (
    <>
    <section className='CarType pt-3'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>{query ? `Search results for “${query}”` : 'All cars available to rent in Dubai'}</h3>
        </div>
        <p className=' fw-bold'>
          {query
            ? `${results.length} ${results.length === 1 ? 'car matches' : 'cars match'} your search. Every rate below includes comprehensive insurance.`
            : `${cars.length} cars from seven licensed rental partners across Dubai, from 75 AED a day.`}
        </p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          {query
            ? `Results are matched on the car name, brand, model, body type and rental company, so a search for a brand returns every car that company lists. `
            : `This is the full fleet currently listed on Tajeer, from the cheapest economy sedans to the luxury SUVs. `}
          Rates are shown per day, per week and per month, and the weekly and monthly prices work out cheaper per
          day than booking day by day. The mileage allowance and the refundable security deposit are listed on
          each car, and comprehensive insurance is already included in every price you see.
          {' '}
          Fuel and Salik tolls are not included. The car is handed over with a full tank and should be returned
          the same way, and any Salik charges or traffic fines incurred during the rental are deducted from the
          deposit before it is released.
          {' '}
          To book you need a valid UAE driving licence, or your home licence plus an international driving permit
          if you are visiting, an Emirates ID or passport, and a credit card in the main driver&apos;s name for
          the deposit. Most partners deliver free of charge anywhere in Dubai, and several cover the airport
          terminals as well.
          {!isExpanded ?
          <span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read more</span>:<span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">read less</span> 
          }
        </p>


        <div className='View_More my-5 border border-1 py-4 px-5 border-black rounded-2 d-flex flex-wrap justify-content-between position-relative'>
            <ul className=' my-2 list-unstyled m-auto d-flex flex-wrap justify-content-between w-100'>
                {brandCounts.map(([brand, count]) => (
                  <li key={brand} className='me-3'>
                    <Link to={`/ViewAll?q=${encodeURIComponent(brand)}`} className='text-decoration-none text-black'>
                      <GoDotFill/> {brand} ({count})
                    </Link>
                  </li>
                ))}
                </ul>
        </div>





        </div>







    </section>
    <Suspense fallback={<Loading/>}> <Filter/></Suspense>
    {results.length > 0
      ? <Suspense fallback={<Loading/>}>   <ViewAllCursel products={results}/></Suspense>
      : <section className='CarType pb-5'>
          <div className='container'>
            <p className='fw-bold'>No cars match “{query}”.</p>
            <p>Try a brand such as BMW or Toyota, a body type such as SUV or sedan, or the word “cheap”.{' '}
              <Link to='/ViewAll'>Show all {cars.length} cars</Link>.</p>
          </div>
        </section>}
    <Suspense fallback={<Loading/>}> <BESTSERVICES/></Suspense>
    <Suspense fallback={<Loading/>}>  <FAQ/></Suspense>
    </>
  )
}


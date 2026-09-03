import React, { useState, useRef, useEffect } from 'react'
import { BsSearch } from "react-icons/bs";
import { GrFormPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { searchCars } from '../../../../data/cars';
import imgCover from "../../../../images/car-subscription-new-image@2x.png"
import"./search.css"

export default function Search() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const boxRef = useRef(null);

  const results = searchCars(query);
  const suggestions = results.slice(0, 6);

  // close the suggestion list when clicking anywhere else on the page
  useEffect(() => {
    const onClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const submit = (event) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return navigate('/ViewAll');
    setIsOpen(false);
    // one hit goes straight to the car, anything else to the filtered list
    if (results.length === 1) return navigate(`/CarList/${results[0].id}`);
    navigate(`/ViewAll?q=${encodeURIComponent(trimmed)}`);
  };

  const openCar = (id) => {
    setIsOpen(false);
    navigate(`/CarList/${id}`);
  };

  return (
    <>
    <section className='main_content  position-relative'>
    <div className='search position-relative'>

        <img src={imgCover} alt="Cars available to rent in Dubai"/>

        <div className='position-absolute top-0 bottom-0 start-0 end-0 cover_color'></div>
    </div>
       <div className='container form position-absolute top-50 start-50 translate-middle d-flex justify-content-center'>
        <span className='View_all_cars_btn' onClick={() => navigate('/ViewAll')} role='button'>
            <i><GrFormPrevious/></i>
            <p className=' badge'>View all cars</p>
        </span>
        <form className="input-group  w-75 search_form d-flex flex-nowrap position-relative" onSubmit={submit} ref={boxRef} role='search'>
  <span className="input-group-text search_btn bg-white"><BsSearch/></span>
  <input
    type="search"
    className=" w-100"
    placeholder='Search by car, brand or type — try "BMW", "SUV" or "cheap"'
    aria-label='Search cars'
    value={query}
    onChange={(event) => { setQuery(event.target.value); setIsOpen(true); }}
    onFocus={() => setIsOpen(true)}
    onKeyDown={(event) => { if (event.key === 'Escape') setIsOpen(false); }}
  />
  {isOpen && query.trim() && (
    <ul className='search_results list-unstyled'>
      {suggestions.length === 0 && (
        <li className='search_empty'>No cars match “{query.trim()}”. Try a brand, a body type or “cheap”.</li>
      )}
      {suggestions.map((car) => (
        <li key={car.id}>
          <button type='button' onClick={() => openCar(car.id)}>
            <img src={car.img} alt='' width='60' height='40' loading='lazy'/>
            <span className='search_name'>
              {car.title}
              <small>{car.bodyType} · {car.supplier}</small>
            </span>
            <span className='search_price'>{car.pricePerDay} AED/day</span>
          </button>
        </li>
      ))}
      {results.length > suggestions.length && (
        <li className='search_more'>
          <button type='submit'>See all {results.length} results</button>
        </li>
      )}
    </ul>
  )}
</form>
       </div>
    </section>
    </>
  )
}

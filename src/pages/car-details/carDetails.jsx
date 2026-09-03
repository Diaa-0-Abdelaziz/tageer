import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Loading';
import { cars, getCarById } from '../../data/cars';
const RentSuvDubai= lazy(() => import('./components/RentSuvDubai/RentSuvDubai'));
const FAQ= lazy(() => import('./components/FAQ/FAQ'));
const BESTSERVICES= lazy(() => import('./components/BEST-SERVICES/BESTSERVICES'));
const SuggestedCarRental= lazy(() => import('./components/SuggestedCarRental'));
const SuggestedCarRentalCursel= lazy(() => import('./components/SuggestedCarRentalCursel/RentSUVLuxuryCursel'));
const Notfound= lazy(() => import('../../Notfound/Notfound'));

export default function CarDetails() {
  const { id } = useParams();
  const car = getCarById(id);

  if (!car) {
    return <Suspense fallback={<Loading/>}> <Notfound/> </Suspense>;
  }

  // Suggest other cars in the same class, then fill up from the rest of the fleet.
  const suggested = [
    ...cars.filter((c) => c.id !== car.id && c.category === car.category),
    ...cars.filter((c) => c.id !== car.id && c.category !== car.category),
  ].slice(0, 8);

  return (
   <>
  <Suspense fallback={<Loading/>}> <RentSuvDubai car={car}/> </Suspense>
     <Suspense fallback={<Loading/>}> <SuggestedCarRental/> </Suspense>
     <Suspense fallback={<Loading/>}> <SuggestedCarRentalCursel products={suggested}/> </Suspense>
     <Suspense fallback={<Loading/>}> <BESTSERVICES/> </Suspense>
     <Suspense fallback={<Loading/>}> <FAQ/> </Suspense>
   </>
  )
}

import React, { lazy, Suspense } from 'react';
import Loading from '../../Loading';
const RentSuvDubai= lazy(() => import('./components/RentSuvDubai/RentSuvDubai'));
const FAQ= lazy(() => import('../Home/component/FAQ/FAQ'));
const BESTSERVICES= lazy(() => import('../Home/component/BEST-SERVICES/BESTSERVICES'));
const SuggestedCarRental= lazy(() => import('./components/SuggestedCarRental'));
const SuggestedCarRentalCursel= lazy(() => import('./components/SuggestedCarRentalCursel/RentSUVLuxuryCursel'));

export default function CarDetails() {
  return (
   <>
  <Suspense fallback={<Loading/>}> <RentSuvDubai/> </Suspense>
     <Suspense fallback={<Loading/>}> <SuggestedCarRental/> </Suspense>
     <Suspense fallback={<Loading/>}> <SuggestedCarRentalCursel/> </Suspense>
     <Suspense fallback={<Loading/>}> <BESTSERVICES/> </Suspense>
     <Suspense fallback={<Loading/>}> <FAQ/> </Suspense>
   </>
  )
}

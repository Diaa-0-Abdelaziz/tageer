import React, {lazy, Suspense } from 'react'
import Loading from '../../Loading';
const RentSuvDubai= lazy(() => import('./components/RentSuvDubai/RentSuvDubai'));
const FAQ= lazy(() => import('./components/FAQ/FAQ'));
const BESTSERVICES= lazy(() => import('../Home/component/BEST-SERVICES/BESTSERVICES'));

export default function RentCarWithDriverDetails() {
  return (
   <>
     <Suspense fallback={<Loading/>}><RentSuvDubai/> </Suspense>
     <Suspense fallback={<Loading/>}> <BESTSERVICES/></Suspense>
     <Suspense fallback={<Loading/>}> <FAQ/></Suspense>   
   </>
  )
}

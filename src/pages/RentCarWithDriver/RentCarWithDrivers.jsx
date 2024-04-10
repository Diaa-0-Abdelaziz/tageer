import React, {lazy, Suspense } from 'react'
import Loading from '../../Loading';
const RentCarWithDriver= lazy(() => import('./components/RentCarWithDriver/RentCarWithDriver'));
const FAQ= lazy(() => import('./components/FAQ/FAQ'));
const BESTSERVICES= lazy(() => import('../Home/component/BEST-SERVICES/BESTSERVICES'));

export default function RentCarWithDrivers() {
  return (
    <>
    <Suspense fallback={<Loading/>}> <RentCarWithDriver/> </Suspense>
    <Suspense fallback={<Loading/>}> <BESTSERVICES/> </Suspense>
    <Suspense fallback={<Loading/>}> <FAQ/> </Suspense>

    
    
    
    </>
  )
}

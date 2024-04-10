import React, {lazy, Suspense} from 'react'
import Loading from '../../Loading';
const Rentyacht= lazy(() => import('./components/RentyachtWithDriver/Rentyacht'));
const BESTSERVICES= lazy(() => import('./BEST-SERVICES/BESTSERVICES'));
const FAQ= lazy(() => import('./components/FAQ/FAQ'));

export default function Yachts() {
  return (
    <>
     <Suspense fallback={<Loading/>}><Rentyacht/> </Suspense>
     <Suspense fallback={<Loading/>}><BESTSERVICES/> </Suspense>
     <Suspense fallback={<Loading/>}> <FAQ/> </Suspense>
    </>
  )
}

import React, {lazy, Suspense } from 'react'
import Loading from '../../Loading';
const BESTSERVICES= lazy(() => import('./components/BEST-SERVICES/BEST-SERVICES'));
const PrivacyHeader= lazy(() => import('./components/PrivacyHeader/PrivacyHeader'));

export default function Privacy() {
  return (
   <>
  <Suspense fallback={<Loading/>}><PrivacyHeader/> </Suspense>
  <Suspense fallback={<Loading/>}> <BESTSERVICES/></Suspense>
   </>
  )
}

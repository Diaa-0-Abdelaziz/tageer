import React, {lazy, Suspense } from 'react'
import Loading from '../../Loading';
const TermsAndConditionHeader= lazy(() => import('./components/TermsAndConditionHeader/TermsAndConditionHeader'));
const BESTSERVICES= lazy(() => import('./components/BEST-SERVICES/BEST-SERVICES'));



export default function TermsAndCondition() {
  return (
   <>
  <Suspense fallback={<Loading/>}> <TermsAndConditionHeader/> </Suspense>
  <Suspense fallback={<Loading/>}> <BESTSERVICES/> </Suspense>

   
   
   </>
  )
}

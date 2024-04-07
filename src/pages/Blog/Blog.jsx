import React, { lazy, Suspense } from 'react'
import Loading from '../../Loading';
const BlogHeader = lazy(() => import('./components/BlogHeader/BlogHeader'));
const FeatureCars = lazy(() => import('./components/Feature Cars/FeatureCars'));
const  RentSUVLuxuryCursel= lazy(() => import('../Home/component/RentSUVLuxury/RentSUVLuxuryCursel/RentSUVLuxuryCursel'));
const  BESTSERVICES= lazy(() => import('./components/BEST-SERVICES/BESTSERVICES'));


export default function Blog() {
  return (
    <>
    <Suspense fallback={<Loading/>}><BlogHeader/> </Suspense>
    <Suspense fallback={<Loading/>}><FeatureCars/></Suspense>
    <Suspense fallback={<Loading/>}><RentSUVLuxuryCursel/> </Suspense>
    <Suspense fallback={<Loading/>}><BESTSERVICES/></Suspense>
    <Suspense fallback={<Loading/>}><BESTSERVICES/> </Suspense>
    
    
    
   
    
    </>
  )
}

import React, { lazy, Suspense } from 'react';
import Loading from '../../Loading';
const AboutUsHeader = lazy(() => import('./components/AboutUsHeader/AboutUsHeader'));
const BESTSERVICESAboutOne= lazy(() => import('./components/BEST-SERVICES one/BEST-SERVICES-One'));


export default function AboutUs() {
  return (
    <>
    <Suspense fallback={<Loading/>}> <AboutUsHeader/> </Suspense>
    <Suspense fallback={<Loading/>}> <BESTSERVICESAboutOne/> </Suspense>
    </>
  )
}

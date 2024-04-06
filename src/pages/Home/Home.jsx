import React from 'react'
import {Suspense, lazy } from 'react';
import Loading from '../../Loading';
const Search = lazy(() => import('./component/Search/Search'));
const CarType = lazy(() => import('./component/carType/carType'));
const Carbrand = lazy(() => import('./component/carBrand/Carbrand'));
const RentSUVLuxury = lazy(() => import('./component/RentSUVLuxury/RentSUVLuxury'));
const CarRentalCompanies = lazy(() => import('./component/CarRentalCompanies/CarRentalCompanies'));
const BetterWay = lazy(() => import('./component/BetterWay/BetterWay'));
const BESTSERVICES = lazy(() => import('./component/BEST-SERVICES/BESTSERVICES'));
const NextTrip = lazy(() => import('./component/Next-Trip/NextTrip'));
const Testimonials = lazy(() => import('./component/TestimonialsAndCursol/Testimonials'));
const FAQ = lazy(() => import('./component/FAQ/FAQ'));
// import Search from './component/Search/Search'
// import CarType from './component/carType/carType'
// import Carbrand from './component/carBrand/Carbrand'
// import RentSUVLuxury from './component/RentSUVLuxury/RentSUVLuxury'
// import CarRentalCompanies from './component/CarRentalCompanies/CarRentalCompanies'
// import BetterWay from './component/BetterWay/BetterWay'
// import BESTSERVICES from './component/BEST-SERVICES/BESTSERVICES'
// import NextTrip from './component/Next-Trip/NextTrip'
// import Testimonials from './component/TestimonialsAndCursol/Testimonials'
// import FAQ from './component/FAQ/FAQ'

export default function Home() {
  return (
  <>
  <Suspense fallback={<Loading />}> <Search/> </Suspense>
  <Suspense fallback={<Loading />}> <CarType/> </Suspense>
  <Suspense fallback={<Loading />}> <Carbrand/> </Suspense>
  <Suspense fallback={<Loading />}> <RentSUVLuxury/> </Suspense>
  <Suspense fallback={<Loading />}> <RentSUVLuxury/> </Suspense>
  <Suspense fallback={<Loading />}> <CarRentalCompanies/> </Suspense>
  <Suspense fallback={<Loading />}> <BetterWay/> </Suspense>
  <Suspense fallback={<Loading />}> <BESTSERVICES/> </Suspense>
  <Suspense fallback={<Loading />}>  <NextTrip/> </Suspense>
  <Suspense fallback={<Loading />}> <BESTSERVICES/> </Suspense>
  <Suspense fallback={<Loading />}> <Testimonials/> </Suspense>
  <Suspense fallback={<Loading />}> <FAQ/> </Suspense>

 
 
 
 

 
 
 
  </>
  )
}

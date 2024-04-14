import React,{lazy, Suspense} from 'react'
import Loading from '../../Loading';
const ListYourCarsHeader= lazy(() => import('./components/ListYourCarsHeader/ListYourCarsHeader'));
const BESTSERVICESOne= lazy(() => import('./components/BEST-SERVICES one/BEST-SERVICES-One'));

export default function ListYourCars() {
  return (
    <>
   <Suspense fallback={<Loading/>}>  <ListYourCarsHeader/> </Suspense>
   <Suspense fallback={<Loading/>}>  <BESTSERVICESOne/> </Suspense>
    </>
  )
}

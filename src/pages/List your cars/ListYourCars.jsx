import React,{lazy, Suspense} from 'react'
import Loading from '../../Loading';
const ListYourCarsHeader= lazy(() => import('./components/ListYourCarsHeader/ListYourCarsHeader'));
const BESTSERVICESOne= lazy(() => import('./components/BEST-SERVICES one/BEST-SERVICES-One'));
const BESTSERVICESTwo= lazy(() => import('./components/BEST-SERVICES two/BESTSERVICES-Two'));
const BESTSERVICESThree= lazy(() => import('./components/BEST-SERVICES three/BESTSERVICES-three'));

export default function ListYourCars() {
  return (
    <>
   <Suspense fallback={<Loading/>}>  <ListYourCarsHeader/> </Suspense>
   <Suspense fallback={<Loading/>}>  <BESTSERVICESOne/> </Suspense>
   <Suspense fallback={<Loading/>}> <BESTSERVICESTwo/> </Suspense>
   <Suspense fallback={<Loading/>}> <BESTSERVICESThree/> </Suspense>
    </>
  )
}

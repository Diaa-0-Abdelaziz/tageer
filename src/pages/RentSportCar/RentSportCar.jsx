import React, { lazy, Suspense } from 'react';
import Loading from '../../Loading';
import { sportCars } from '../../data/cars';
import PageIntro from '../../ImportantSlicesSharedComponents/PageIntro';
const CarCatalog= lazy(() => import('../../ImportantSlicesSharedComponents/CarCatalog'));
const PageServices= lazy(() => import('../../ImportantSlicesSharedComponents/PageServices'));
const PageFAQ= lazy(() => import('../../ImportantSlicesSharedComponents/PageFAQ'));

export default function RentSportCar() {
  return (
    <div className='NavyPage'>
      <PageIntro id='sport'/>
      <Suspense fallback={<Loading/>}> <CarCatalog cars={sportCars} showClass={false}/></Suspense>
      <Suspense fallback={<Loading/>}> <PageServices/></Suspense>
      <Suspense fallback={<Loading/>}> <PageFAQ set='sport'/></Suspense>
    </div>
  )
}

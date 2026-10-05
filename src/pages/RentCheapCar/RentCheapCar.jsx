import React, { lazy, Suspense } from 'react';
import Loading from '../../Loading';
import { cheapCars } from '../../data/cars';
import PageIntro from '../../ImportantSlicesSharedComponents/PageIntro';
const CarCatalog= lazy(() => import('../../ImportantSlicesSharedComponents/CarCatalog'));
const PageServices= lazy(() => import('../../ImportantSlicesSharedComponents/PageServices'));
const PageFAQ= lazy(() => import('../../ImportantSlicesSharedComponents/PageFAQ'));

export default function RentCheapCar() {
  return (
    <div className='NavyPage'>
      <PageIntro id='cheap'/>
      <Suspense fallback={<Loading/>}> <CarCatalog cars={cheapCars} showClass={false} initialSort='priceAsc'/></Suspense>
      <Suspense fallback={<Loading/>}> <PageServices/></Suspense>
      <Suspense fallback={<Loading/>}> <PageFAQ set='cheap'/></Suspense>
    </div>
  )
}

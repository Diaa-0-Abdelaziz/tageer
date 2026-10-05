import React, { lazy, Suspense } from 'react';
import Loading from '../../Loading';
import { luxurySuvs } from '../../data/cars';
import PageIntro from '../../ImportantSlicesSharedComponents/PageIntro';
const CarCatalog= lazy(() => import('../../ImportantSlicesSharedComponents/CarCatalog'));
const PageServices= lazy(() => import('../../ImportantSlicesSharedComponents/PageServices'));
const PageFAQ= lazy(() => import('../../ImportantSlicesSharedComponents/PageFAQ'));

export default function RentLuxuryCar() {
  return (
    <div className='NavyPage'>
      <PageIntro id='luxury'/>
      <Suspense fallback={<Loading/>}> <CarCatalog cars={luxurySuvs} showClass={false}/></Suspense>
      <Suspense fallback={<Loading/>}> <PageServices/></Suspense>
      <Suspense fallback={<Loading/>}> <PageFAQ set='luxury'/></Suspense>
    </div>
  )
}

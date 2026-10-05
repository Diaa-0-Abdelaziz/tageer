import React, { lazy, Suspense } from 'react';
import Loading from '../../Loading';
import { cars } from '../../data/cars';
import PageIntro from '../../ImportantSlicesSharedComponents/PageIntro';
const CarCatalog= lazy(() => import('../../ImportantSlicesSharedComponents/CarCatalog'));
const PageServices= lazy(() => import('../../ImportantSlicesSharedComponents/PageServices'));
const PageFAQ= lazy(() => import('../../ImportantSlicesSharedComponents/PageFAQ'));

export default function BrandModel() {
  return (
    <div className='NavyPage'>
      <PageIntro id='brandModel'/>
      <Suspense fallback={<Loading/>}> <CarCatalog cars={cars}/></Suspense>
      <Suspense fallback={<Loading/>}> <PageServices/></Suspense>
      <Suspense fallback={<Loading/>}> <PageFAQ set='general'/></Suspense>
    </div>
  )
}

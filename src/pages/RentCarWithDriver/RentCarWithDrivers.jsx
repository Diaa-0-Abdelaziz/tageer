import React, {lazy, Suspense } from 'react'
import Loading from '../../Loading';
const RentCarWithDriver= lazy(() => import('./components/RentCarWithDriver/RentCarWithDriver'));
const PageServices= lazy(() => import('../../ImportantSlicesSharedComponents/PageServices'));
const PageFAQ= lazy(() => import('../../ImportantSlicesSharedComponents/PageFAQ'));

export default function RentCarWithDrivers() {
  return (
    <div className='NavyPage'>
    <Suspense fallback={<Loading/>}> <RentCarWithDriver/> </Suspense>
    <Suspense fallback={<Loading/>}> <PageServices/> </Suspense>
    <Suspense fallback={<Loading/>}> <PageFAQ set='chauffeur'/> </Suspense>
    </div>
  )
}
